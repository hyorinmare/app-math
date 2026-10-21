import { useState } from 'react'
import { useCanvas, cssVar, fmt } from './canvas.js'
import { M } from '../components/Tex.jsx'

export default function Racines() {
  const [n, setN] = useState(6)
  const [r, setR] = useState(1)
  const [theta, setTheta] = useState(0)

  // racines n-ièmes de z0 = r^n e^{i n theta} : z_k = r e^{i(theta + 2kπ/n)}
  const roots = Array.from({ length: n }, (_, k) => {
    const ang = theta + (2 * k * Math.PI) / n
    return [r * Math.cos(ang), r * Math.sin(ang)]
  })

  const ref = useCanvas((ctx, w, h) => {
    const s = Math.min(w, h) / 2 / 2.4
    const cx = w / 2, cy = h / 2
    const X = (x) => cx + x * s, Y = (y) => cy - y * s
    const grid = cssVar('--grid'), axis = cssVar('--axis'), accent = cssVar('--accent'), warn = cssVar('--warn'), text = cssVar('--text')
    ctx.strokeStyle = axis
    ctx.lineWidth = 1.2
    ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.stroke()
    ctx.strokeStyle = grid
    ctx.beginPath(); ctx.arc(cx, cy, s, 0, 2 * Math.PI); ctx.stroke()
    ctx.strokeStyle = accent + '88'
    ctx.beginPath(); ctx.arc(cx, cy, r * s, 0, 2 * Math.PI); ctx.stroke()
    // polygone
    ctx.fillStyle = accent + '22'
    ctx.strokeStyle = accent
    ctx.lineWidth = 2
    ctx.beginPath()
    roots.forEach(([x, y], i) => (i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y))))
    ctx.closePath(); ctx.fill(); ctx.stroke()
    ctx.font = '12px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    roots.forEach(([x, y], k) => {
      ctx.fillStyle = k === 0 ? warn : accent
      ctx.beginPath(); ctx.arc(X(x), Y(y), 5, 0, 2 * Math.PI); ctx.fill()
      ctx.fillStyle = text
      const d = Math.hypot(x, y) || 1
      ctx.fillText(`z${k}`, X(x + (0.28 * x) / d), Y(y + (0.28 * y) / d))
    })
  }, [n, r, theta])

  const z0r = Math.pow(r, n)
  return (
    <div className="tool">
      <label className="slider">
        <span>n = {n}</span>
        <input type="range" min={2} max={12} value={n} onChange={(e) => setN(+e.target.value)} />
      </label>
      <label className="slider">
        <span>module r = {fmt(r)}</span>
        <input type="range" min={0.5} max={1.8} step={0.05} value={r} onChange={(e) => setR(+e.target.value)} />
      </label>
      <label className="slider">
        <span>angle θ = {fmt(+(theta / Math.PI).toFixed(2))}π</span>
        <input type="range" min={0} max={2 * Math.PI / n} step={0.01} value={theta} onChange={(e) => setTheta(+e.target.value)} />
      </label>
      <div className="canvas-wrap square">
        <canvas ref={ref} className="plot" />
      </div>
      <div className="readout">
        <M>{`z_k = ${r === 1 ? '' : fmt(r)}e^{i\\left(${fmt(+theta.toFixed(2))} + \\frac{2k\\pi}{${n}}\\right)}, \\quad k = 0, \\dots, ${n - 1}`}</M>
        <br />
        Ce sont les solutions de <M>{`z^{${n}} = ${fmt(+z0r.toFixed(3))}\\,e^{i \\times ${fmt(+(n * theta).toFixed(2))}}`}</M>. Elles forment un polygone régulier à {n} côtés.
      </div>
    </div>
  )
}
