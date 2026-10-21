// Génère les icônes PNG de la PWA (sans dépendance) : fond dégradé + axes + courbe.
import { writeFileSync } from 'node:fs'
import { deflateSync } from 'node:zlib'

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})
const crc = (buf) => {
  let c = 0xffffffff
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length)
  const td = Buffer.concat([Buffer.from(type), data])
  const c = Buffer.alloc(4); c.writeUInt32BE(crc(td))
  return Buffer.concat([len, td, c])
}

function icon(size) {
  // courbe échantillonnée en coordonnées normalisées [0,1]
  const f = (x) => 0.5 - 0.9 * (x - 0.5) ** 3 * 4 + 0.08 * Math.sin(10 * x)
  const pts = []
  for (let i = 0; i <= 400; i++) { const x = 0.15 + 0.7 * i / 400; pts.push([x, f(x)]) }
  const raw = Buffer.alloc(size * (size * 4 + 1))
  const lw = 0.035, aw = 0.012
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0
    for (let x = 0; x < size; x++) {
      const u = (x + 0.5) / size, v = (y + 0.5) / size
      const t = (u + v) / 2
      let r = 79 + (124 - 79) * t, g = 70 + (58 - 70) * t, b = 229 + (237 - 229) * t
      const blend = (a, cr, cg, cb) => { r += (cr - r) * a; g += (cg - g) * a; b += (cb - b) * a }
      // axes
      const dAx = Math.min(Math.abs(v - 0.72) + (u < 0.12 || u > 0.88 ? 1 : 0), Math.abs(u - 0.28) + (v < 0.12 || v > 0.88 ? 1 : 0))
      blend(0.45 * Math.max(0, Math.min(1, (aw - dAx) * size / 1.5 + 0.5)), 255, 255, 255)
      // courbe
      let d = 1
      for (const [px, py] of pts) d = Math.min(d, Math.hypot(u - px, v - py))
      blend(Math.max(0, Math.min(1, (lw - d) * size / 1.5 + 0.5)), 255, 255, 255)
      const o = y * (size * 4 + 1) + 1 + x * 4
      raw[o] = r; raw[o + 1] = g; raw[o + 2] = b; raw[o + 3] = 255
    }
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0)),
  ])
}

for (const s of [180, 192, 512]) writeFileSync(`public/icon-${s}.png`, icon(s))
console.log('icônes générées')
