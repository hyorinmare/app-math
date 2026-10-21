import { useMemo, useRef, useState } from 'react'
import { compile } from './parser.js'
import { useCanvas, drawAxes, drawCurve, makeView, cssVar, fmt } from './canvas.js'

const DEFAULT_VIEW = { xmin: -5, xmax: 5, ymin: -4, ymax: 4 }
const EXAMPLES = ['x^2 - 2', 'x e^(-x)', 'ln(x)', '1/x', 'sin(x)', 'x^3 - 3x', 'exp(x)', 'sqrt(x)']

function useFunction(src) {
  return useMemo(() => {
    if (!src.trim()) return { f: null, err: null }
    try {
      const f = compile(src)
      f(1)
      return { f, err: null }
    } catch (e) {
      return { f: null, err: e.message }
    }
  }, [src])
}

export default function Plotter() {
  const [srcF, setSrcF] = useState('x e^(-x)')
  const [srcG, setSrcG] = useState('')
  const [view, setView] = useState(DEFAULT_VIEW)
  const [mode, setMode] = useState('tangente')
  const [a, setA] = useState(1)
  const [b, setB] = useState(3)
  const F = useFunction(srcF)
  const G = useFunction(srcG)

  const f = F.f
  const h = 1e-5
  const fa = f ? f(a) : NaN
  const dfa = f ? (f(a + h) - f(a - h)) / (2 * h) : NaN
  const integral = useMemo(() => {
    if (!f || mode !== 'integrale') return NaN
    // Simpson
    const n = 1000, step = (b - a) / n
    let s = 0
    for (let i = 0; i < n; i++) {
      const x = a + i * step
      s += (f(x) + 4 * f(x + step / 2) + f(x + step)) * step / 6
    }
    return s
  }, [f, a, b, mode])

  const ref = useCanvas((ctx, w, hgt) => {
    drawAxes(ctx, view, w, hgt)
    const { X, Y } = makeView(view, w, hgt)
    const c1 = cssVar('--accent'), c2 = cssVar('--accent2'), c3 = cssVar('--warn')
    if (f && mode === 'integrale' && Number.isFinite(integral)) {
      ctx.fillStyle = c1 + '33'
      ctx.beginPath()
      ctx.moveTo(X(a), Y(0))
      for (let i = 0; i <= 200; i++) {
        const x = a + ((b - a) * i) / 200
        const y = f(x)
        ctx.lineTo(X(x), Y(Number.isFinite(y) ? y : 0))
      }
      ctx.lineTo(X(b), Y(0))
      ctx.closePath()
      ctx.fill()
    }
    if (G.f) drawCurve(ctx, G.f, view, w, hgt, c2)
    if (f) drawCurve(ctx, f, view, w, hgt, c1)
    if (f && mode === 'tangente' && Number.isFinite(fa) && Number.isFinite(dfa)) {
      drawCurve(ctx, (x) => dfa * (x - a) + fa, view, w, hgt, c3, 1.5)
      ctx.fillStyle = c3
      ctx.beginPath()
      ctx.arc(X(a), Y(fa), 5, 0, 2 * Math.PI)
      ctx.fill()
    }
  }, [view, f, G.f, mode, a, b, fa, dfa, integral])

  // Déplacement au doigt / à la souris, zoom à deux doigts ou à la molette.
  const pointers = useRef(new Map())
  const start = useRef(null)
  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    start.current = { view, pts: new Map(pointers.current) }
  }
  const onPointerMove = (e) => {
    if (!pointers.current.has(e.pointerId) || !start.current) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    const rect = e.currentTarget.getBoundingClientRect()
    const v0 = start.current.view
    const kx = (v0.xmax - v0.xmin) / rect.width, ky = (v0.ymax - v0.ymin) / rect.height
    const ids = [...start.current.pts.keys()].filter((id) => pointers.current.has(id))
    if (ids.length === 1) {
      const p0 = start.current.pts.get(ids[0]), p = pointers.current.get(ids[0])
      const dx = (p.x - p0.x) * kx, dy = (p.y - p0.y) * ky
      setView({ xmin: v0.xmin - dx, xmax: v0.xmax - dx, ymin: v0.ymin + dy, ymax: v0.ymax + dy })
    } else if (ids.length >= 2) {
      const [i1, i2] = ids
      const d0 = Math.hypot(start.current.pts.get(i1).x - start.current.pts.get(i2).x, start.current.pts.get(i1).y - start.current.pts.get(i2).y)
      const d = Math.hypot(pointers.current.get(i1).x - pointers.current.get(i2).x, pointers.current.get(i1).y - pointers.current.get(i2).y)
      if (d0 > 10) setView(zoomed(v0, d0 / d))
    }
  }
  const onPointerUp = (e) => {
    pointers.current.delete(e.pointerId)
    start.current = { view, pts: new Map(pointers.current) }
  }
  const onWheel = (e) => setView((v) => zoomed(v, e.deltaY > 0 ? 1.15 : 1 / 1.15))

  return (
    <div className="tool">
      <label className="field">
        <span style={{ color: 'var(--accent)' }}>f(x) =</span>
        <input value={srcF} onChange={(e) => setSrcF(e.target.value)} autoCapitalize="off" autoCorrect="off" spellCheck={false} inputMode="text" />
      </label>
      {F.err && <div className="error">{F.err}</div>}
      <label className="field">
        <span style={{ color: 'var(--accent2)' }}>g(x) =</span>
        <input value={srcG} onChange={(e) => setSrcG(e.target.value)} placeholder="(facultatif)" autoCapitalize="off" autoCorrect="off" spellCheck={false} />
      </label>
      {G.err && <div className="error">{G.err}</div>}
      <div className="chips">
        {EXAMPLES.map((ex) => (
          <button key={ex} className="chip" onClick={() => setSrcF(ex)}>{ex}</button>
        ))}
      </div>

      <div className="canvas-wrap">
        <canvas
          ref={ref}
          className="plot"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onWheel={onWheel}
        />
        <div className="zoom-btns">
          <button onClick={() => setView((v) => zoomed(v, 1 / 1.5))} aria-label="Zoomer">+</button>
          <button onClick={() => setView((v) => zoomed(v, 1.5))} aria-label="Dézoomer">−</button>
          <button onClick={() => setView(DEFAULT_VIEW)} aria-label="Recentrer">⟲</button>
        </div>
      </div>

      <div className="segmented">
        {[['aucun', 'Courbe'], ['tangente', 'Tangente'], ['integrale', 'Intégrale']].map(([k, l]) => (
          <button key={k} className={mode === k ? 'on' : ''} onClick={() => setMode(k)}>{l}</button>
        ))}
      </div>

      {mode !== 'aucun' && (
        <label className="slider">
          <span>a = {fmt(a)}</span>
          <input type="range" min={view.xmin} max={view.xmax} step={(view.xmax - view.xmin) / 400} value={a} onChange={(e) => setA(+e.target.value)} />
        </label>
      )}
      {mode === 'integrale' && (
        <label className="slider">
          <span>b = {fmt(b)}</span>
          <input type="range" min={view.xmin} max={view.xmax} step={(view.xmax - view.xmin) / 400} value={b} onChange={(e) => setB(+e.target.value)} />
        </label>
      )}
      {mode === 'tangente' && f && (
        <div className="readout">
          f({fmt(a)}) ≈ {fmt(+fa.toFixed(4))} · f′({fmt(a)}) ≈ {fmt(+dfa.toFixed(4))}
          <br />
          Tangente : y ≈ {fmt(+dfa.toFixed(3))}(x − {fmt(+a.toFixed(3))}) + {fmt(+fa.toFixed(3))}
        </div>
      )}
      {mode === 'integrale' && f && (
        <div className="readout">∫ de {fmt(+a.toFixed(3))} à {fmt(+b.toFixed(3))} de f(x) dx ≈ {Number.isFinite(integral) ? fmt(+integral.toFixed(4)) : 'non définie'}</div>
      )}
      <p className="hint">Glisse pour te déplacer, pince pour zoomer. Syntaxe : 2x^2, e^(-x), ln(x), sqrt(x), sin(pi x)…</p>
    </div>
  )
}

function zoomed(v, k) {
  const cx = (v.xmin + v.xmax) / 2, cy = (v.ymin + v.ymax) / 2
  return {
    xmin: cx - ((cx - v.xmin) * k), xmax: cx + ((v.xmax - cx) * k),
    ymin: cy - ((cy - v.ymin) * k), ymax: cy + ((v.ymax - cy) * k),
  }
}
