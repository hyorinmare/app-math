import { useMemo, useState } from 'react'
import { useCanvas, cssVar, fmt } from './canvas.js'
import { M } from '../components/Tex.jsx'

// P(X = k) calculé en log pour rester précis quand n est grand
function binomPmf(n, p) {
  const lf = [0]
  for (let i = 1; i <= n; i++) lf.push(lf[i - 1] + Math.log(i))
  return Array.from({ length: n + 1 }, (_, k) => {
    if (p === 0) return k === 0 ? 1 : 0
    if (p === 1) return k === n ? 1 : 0
    return Math.exp(lf[n] - lf[k] - lf[n - k] + k * Math.log(p) + (n - k) * Math.log(1 - p))
  })
}

export default function Binomiale() {
  const [n, setN] = useState(20)
  const [p, setP] = useState(0.3)
  const [lo, setLo] = useState(4)
  const [hi, setHi] = useState(8)
  const pmf = useMemo(() => binomPmf(n, p), [n, p])
  const a = Math.min(lo, hi, n), b = Math.min(Math.max(lo, hi), n)
  const prob = pmf.slice(a, b + 1).reduce((s, x) => s + x, 0)
  const E = n * p, V = n * p * (1 - p)

  const ref = useCanvas((ctx, w, h) => {
    const max = Math.max(...pmf)
    const pad = { l: 8, r: 8, t: 10, b: 22 }
    const bw = (w - pad.l - pad.r) / (n + 1)
    const accent = cssVar('--accent'), dim = cssVar('--grid'), text = cssVar('--muted'), warn = cssVar('--warn')
    pmf.forEach((v, k) => {
      const bh = (v / max) * (h - pad.t - pad.b)
      ctx.fillStyle = k >= a && k <= b ? accent : dim
      ctx.fillRect(pad.l + k * bw + bw * 0.1, h - pad.b - bh, bw * 0.8, bh)
    })
    // espérance
    ctx.strokeStyle = warn
    ctx.lineWidth = 2
    ctx.setLineDash([4, 4])
    const xe = pad.l + (E + 0.5) * bw
    ctx.beginPath(); ctx.moveTo(xe, pad.t); ctx.lineTo(xe, h - pad.b); ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle = text
    ctx.font = '11px system-ui, sans-serif'
    ctx.textAlign = 'center'
    const every = Math.ceil((n + 1) / 12)
    for (let k = 0; k <= n; k += every) ctx.fillText(k, pad.l + (k + 0.5) * bw, h - 6)
  }, [pmf, a, b, n, E])

  return (
    <div className="tool">
      <label className="slider">
        <span>n = {n}</span>
        <input type="range" min={1} max={100} value={n} onChange={(e) => setN(+e.target.value)} />
      </label>
      <label className="slider">
        <span>p = {fmt(p)}</span>
        <input type="range" min={0} max={1} step={0.01} value={p} onChange={(e) => setP(+e.target.value)} />
      </label>
      <div className="canvas-wrap">
        <canvas ref={ref} className="plot" />
      </div>
      <div className="row">
        <label className="slider grow">
          <span>de {a}</span>
          <input type="range" min={0} max={n} value={Math.min(lo, n)} onChange={(e) => setLo(+e.target.value)} />
        </label>
        <label className="slider grow">
          <span>à {b}</span>
          <input type="range" min={0} max={n} value={Math.min(hi, n)} onChange={(e) => setHi(+e.target.value)} />
        </label>
      </div>
      <div className="readout">
        <M>{`P(${a} \\leq X \\leq ${b}) \\approx ${fmt(+prob.toFixed(4))}`}</M>
        <br />
        <M>{`E(X) = np = ${fmt(+E.toFixed(3))} \\qquad \\sigma(X) = \\sqrt{np(1-p)} \\approx ${fmt(+Math.sqrt(V).toFixed(3))}`}</M>
      </div>
      <p className="hint">La ligne pointillée marque l'espérance. Les barres colorées sont incluses dans la probabilité calculée.</p>
    </div>
  )
}
