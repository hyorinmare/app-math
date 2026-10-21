// Petits outils pour fabriquer des énoncés aléatoires.

export const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1))
export const randNZ = (a, b) => {
  let x
  do x = rand(a, b)
  while (x === 0)
  return x
}
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

export const gcd = (a, b) => {
  a = Math.abs(a); b = Math.abs(b)
  while (b) [a, b] = [b, a % b]
  return a
}

/** Fraction irréductible en LaTeX. */
export function frac(num, den = 1) {
  if (den < 0) { num = -num; den = -den }
  const g = gcd(num, den) || 1
  num /= g; den /= g
  if (den === 1) return String(num)
  return (num < 0 ? '-' : '') + `\\frac{${Math.abs(num)}}{${den}}`
}

/** Nombre décimal à la française. */
export const fr = (x, d = 4) => String(+x.toFixed(d)).replace('.', '{,}')

/**
 * Polynôme en LaTeX à partir de [coef, puissance] (puissances décroissantes).
 * poly([[3,2],[-1,1],[5,0]]) → "3x^2 - x + 5"
 */
export function poly(terms, v = 'x') {
  let s = ''
  for (const [c, p] of terms) {
    if (c === 0) continue
    const abs = Math.abs(c)
    const sign = c < 0 ? (s ? ' - ' : '-') : s ? ' + ' : ''
    const coef = abs === 1 && p !== 0 ? '' : String(abs)
    const varPart = p === 0 ? '' : p === 1 ? v : `${v}^{${p}}`
    s += sign + coef + varPart
  }
  return s || '0'
}

/** Terme ajouté à une somme : sgn(3) → "+ 3", sgn(-3) → "- 3". */
export const sgn = (n, unit = '') => `${n < 0 ? '-' : '+'} ${Math.abs(n)}${unit}`

/** Facteur dans un produit : par(-3) → "(-3)", par(3) → "3". */
export const par = (n) => (n < 0 ? `(${n})` : String(n))

/** Complexe a + ib en LaTeX. */
export function cplx(a, b) {
  if (b === 0) return String(a)
  const im = (Math.abs(b) === 1 ? '' : Math.abs(b)) + 'i'
  if (a === 0) return (b < 0 ? '-' : '') + im
  return `${a} ${b < 0 ? '-' : '+'} ${im}`
}

/** Lit la réponse de l'élève : "3", "-2,5", "7/4". Renvoie NaN si illisible. */
export function parseAnswer(str) {
  const s = String(str).trim().replace(/\s/g, '').replace(',', '.')
  if (!s) return NaN
  const m = s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/)
  if (m) return Number(m[1]) / Number(m[2])
  return /^-?\d*\.?\d+$/.test(s) ? Number(s) : NaN
}

export const binom = (n, k) => {
  let r = 1
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i
  return Math.round(r)
}

export const modpow = (a, k, n) => {
  let r = 1
  a %= n
  for (let i = 0; i < k; i++) r = (r * a) % n
  return r
}
