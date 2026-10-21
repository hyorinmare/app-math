import { useMemo, useState } from 'react'
import { compile } from './parser.js'
import { useCanvas, drawAxes, drawCurve, makeView, cssVar, fmt } from './canvas.js'

const PRESETS = [
  { f: '0.5x + 2', u0: 0, label: 'Arithmético-géométrique' },
  { f: 'sqrt(x + 2)', u0: 0, label: 'Racine' },
  { f: '2x(1 - x)', u0: 0.1, label: 'Logistique' },
  { f: 'cos(x)', u0: 1, label: 'Cosinus' },
  { f: '3.5x(1 - x)', u0: 0.2, label: 'Chaos' },
]

export default function Suites() {
  const [src, setSrc] = useState('0.5x + 2')
  const [u0, setU0] = useState(0)
  const [n, setN] = useState(10)

  const { f, err } = useMemo(() => {
    try { return { f: compile(src), err: null } } catch (e) { return { f: null, err: e.message } }
  }, [src])

  const terms = useMemo(() => {
    if (!f) return []
    const u = [u0]
    for (let i = 0; i < n; i++) u.push(f(u[i]))
    return u
  }, [f, u0, n])

  // fenêtre carrée autour des termes
  const view = useMemo(() => {
    const finite = terms.filter(Number.isFinite)
    let lo = Math.min(0, ...finite), hi = Math.max(1, ...finite)
    if (hi - lo > 1e3) { lo = Math.max(lo, -50); hi = Math.min(hi, 50) }
    const pad = (hi - lo) * 0.15 || 1
    return { xmin: lo - pad, xmax: hi + pad, ymin: lo - pad, ymax: hi + pad }
  }, [terms])

  const ref = useCanvas((ctx, w, h) => {
    drawAxes(ctx, view, w, h)
    const { X, Y } = makeView(view, w, h)
    drawCurve(ctx, (x) => x, view, w, h, cssVar('--muted'), 1.2)
    if (!f) return
    drawCurve(ctx, f, view, w, h, cssVar('--accent'))
    // escalier / escargot
    ctx.strokeStyle = cssVar('--warn')
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(X(terms[0]), Y(0))
    for (let i = 0; i < terms.length - 1; i++) {
      const [a, b] = [terms[i], terms[i + 1]]
      if (!Number.isFinite(b)) break
      ctx.lineTo(X(a), Y(b))
      ctx.lineTo(X(b), Y(b))
    }
    ctx.stroke()
    ctx.fillStyle = cssVar('--warn')
    terms.forEach((u, i) => {
      if (!Number.isFinite(u)) return
      ctx.beginPath()
      ctx.arc(X(u), Y(0), i === 0 ? 4 : 3, 0, 2 * Math.PI)
      ctx.fill()
    })
  }, [view, f, terms])

  const last = terms[terms.length - 1]

  return (
    <div className="tool">
      <label className="field">
        <span>u<sub>n+1</sub> =</span>
        <input value={src} onChange={(e) => setSrc(e.target.value)} autoCapitalize="off" autoCorrect="off" spellCheck={false} />
      </label>
      <p className="hint">Écris la fonction f avec la variable x : u<sub>n+1</sub> = f(u<sub>n</sub>).</p>
      {err && <div className="error">{err}</div>}
      <div className="chips">
        {PRESETS.map((p) => (
          <button key={p.label} className="chip" onClick={() => { setSrc(p.f); setU0(p.u0) }}>{p.label}</button>
        ))}
      </div>
      <div className="row">
        <label className="field small">
          <span>u<sub>0</sub> =</span>
          <input type="number" inputMode="decimal" step="any" value={u0} onChange={(e) => setU0(+e.target.value)} />
        </label>
        <label className="slider grow">
          <span>{n} termes</span>
          <input type="range" min={1} max={50} value={n} onChange={(e) => setN(+e.target.value)} />
        </label>
      </div>
      <div className="canvas-wrap square">
        <canvas ref={ref} className="plot" />
      </div>
      {f && (
        <>
          <div className="readout">
            u<sub>{n}</sub> ≈ {Number.isFinite(last) ? fmt(+last.toFixed(6)) : 'non défini'}
          </div>
          <div className="terms">
            {terms.map((u, i) => (
              <div key={i}><span>u<sub>{i}</sub></span>{Number.isFinite(u) ? fmt(+u.toFixed(5)) : '—'}</div>
            ))}
          </div>
        </>
      )}
      <p className="hint">La courbe de f en couleur, la droite y = x en gris : les termes se lisent sur l'axe des abscisses.</p>
    </div>
  )
}
