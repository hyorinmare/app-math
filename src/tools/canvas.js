import { useEffect, useRef, useState } from 'react'

/** Lit une couleur définie en variable CSS sur :root. */
export const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()

/**
 * Canvas net sur écran Retina, redessiné quand sa taille ou `deps` changent.
 * draw(ctx, largeur, hauteur) reçoit des dimensions en pixels CSS.
 */
export function useCanvas(draw, deps) {
  const ref = useRef(null)
  const [size, setSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const el = ref.current
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ w: Math.round(width), h: Math.round(height) })
    })
    ro.observe(el)
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onTheme = () => setSize((s) => ({ ...s }))
    mq.addEventListener('change', onTheme)
    return () => { ro.disconnect(); mq.removeEventListener('change', onTheme) }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!size.w || !size.h) return
    const dpr = window.devicePixelRatio || 1
    el.width = size.w * dpr
    el.height = size.h * dpr
    const ctx = el.getContext('2d')
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, size.w, size.h)
    draw(ctx, size.w, size.h)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, ...deps])

  return ref
}

/** Pas de graduation « joli » (1, 2, 5 × 10^k) pour une étendue donnée. */
export function niceStep(range, target = 8) {
  const raw = range / target
  const p = Math.pow(10, Math.floor(Math.log10(raw)))
  const m = raw / p
  return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p
}

/** Transforme une fenêtre {xmin,xmax,ymin,ymax} en fonctions de conversion. */
export function makeView(v, w, h) {
  const X = (x) => ((x - v.xmin) / (v.xmax - v.xmin)) * w
  const Y = (y) => h - ((y - v.ymin) / (v.ymax - v.ymin)) * h
  const invX = (px) => v.xmin + (px / w) * (v.xmax - v.xmin)
  const invY = (py) => v.ymin + ((h - py) / h) * (v.ymax - v.ymin)
  return { X, Y, invX, invY }
}

const fmt = (x) => String(+x.toPrecision(6)).replace('.', ',')

/** Quadrillage, axes et graduations. */
export function drawAxes(ctx, v, w, h) {
  const { X, Y } = makeView(v, w, h)
  const grid = cssVar('--grid'), axis = cssVar('--axis'), text = cssVar('--muted')
  const sx = niceStep(v.xmax - v.xmin, w / 60), sy = niceStep(v.ymax - v.ymin, h / 50)

  ctx.lineWidth = 1
  ctx.strokeStyle = grid
  ctx.beginPath()
  for (let x = Math.ceil(v.xmin / sx) * sx; x <= v.xmax; x += sx) { ctx.moveTo(X(x), 0); ctx.lineTo(X(x), h) }
  for (let y = Math.ceil(v.ymin / sy) * sy; y <= v.ymax; y += sy) { ctx.moveTo(0, Y(y)); ctx.lineTo(w, Y(y)) }
  ctx.stroke()

  const x0 = Math.min(Math.max(X(0), 0), w), y0 = Math.min(Math.max(Y(0), 0), h)
  ctx.strokeStyle = axis
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(0, y0); ctx.lineTo(w, y0)
  ctx.moveTo(x0, 0); ctx.lineTo(x0, h)
  ctx.stroke()

  ctx.fillStyle = text
  ctx.font = '11px system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  for (let x = Math.ceil(v.xmin / sx) * sx; x <= v.xmax; x += sx) {
    if (Math.abs(x) < sx / 2) continue
    ctx.fillText(fmt(x), X(x), Math.min(y0 + 4, h - 14))
  }
  ctx.textAlign = 'right'
  ctx.textBaseline = 'middle'
  for (let y = Math.ceil(v.ymin / sy) * sy; y <= v.ymax; y += sy) {
    if (Math.abs(y) < sy / 2) continue
    ctx.fillText(fmt(y), Math.max(x0 - 4, 30), Y(y))
  }
}

/** Trace y = f(x) en coupant aux discontinuités (ex. 1/x). */
export function drawCurve(ctx, f, v, w, h, color, width = 2.5) {
  const { X, Y } = makeView(v, w, h)
  ctx.strokeStyle = color
  ctx.lineWidth = width
  ctx.lineJoin = 'round'
  ctx.beginPath()
  let pen = false
  const range = v.ymax - v.ymin
  let prev = null
  for (let px = 0; px <= w; px += 1) {
    const x = v.xmin + (px / w) * (v.xmax - v.xmin)
    const y = f(x)
    if (!Number.isFinite(y)) { pen = false; prev = null; continue }
    // saut énorme entre deux pixels : on lève le crayon (asymptote verticale)
    if (prev !== null && Math.abs(y - prev) > range * 3) pen = false
    const py = Math.max(-1e4, Math.min(1e4, Y(y)))
    if (pen) ctx.lineTo(px, py)
    else { ctx.moveTo(px, py); pen = true }
    prev = y
  }
  ctx.stroke()
}

export { fmt }
