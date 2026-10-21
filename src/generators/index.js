// Générateurs d'exercices aléatoires.
// Chaque générateur renvoie { q, fields: [{ label, value, tol? }], sol }
// q et sol sont du texte avec maths ($...$). value est la réponse numérique attendue.
import { rand, randNZ, pick, gcd, frac, fr, poly, cplx, binom, modpow, sgn, par } from './utils.js'

const t = String.raw

export const generators = [
  {
    id: 'derivee-point',
    title: 'Nombre dérivé d\'un polynôme',
    chapter: 'derivation',
    gen() {
      const a = randNZ(-3, 3), b = rand(-5, 5), c = rand(-6, 6), d = rand(-9, 9), x0 = rand(-3, 3)
      const f = poly([[a, 3], [b, 2], [c, 1], [d, 0]])
      const fp = poly([[3 * a, 2], [2 * b, 1], [c, 0]])
      const v = 3 * a * x0 * x0 + 2 * b * x0 + c
      return {
        q: t`Soit $f(x) = ${f}$. Calculer $f'(${x0})$.`,
        fields: [{ label: t`f'(${x0})`, value: v }],
        sol: t`$f'(x) = ${fp}$, donc $f'(${x0}) = ${v}$.`,
      }
    },
  },
  {
    id: 'derivee-expo',
    title: 'Dérivée d\'un produit avec exponentielle',
    chapter: 'derivation',
    gen() {
      const a = randNZ(-4, 4), b = rand(-5, 5), c = randNZ(-3, 3)
      const ax = poly([[a, 1], [b, 0]])
      const ec = c === 1 ? 'x' : c === -1 ? '-x' : `${c}x`
      const num = poly([[a * c, 1], [a + b * c, 0]])
      return {
        q: t`Soit $f(x) = (${ax})e^{${ec}}$. Calculer $f'(0)$.`,
        fields: [{ label: t`f'(0)`, value: a + b * c }],
        sol: t`$(uv)' = u'v + uv'$ avec $u = ${ax}$, $v = e^{${ec}}$, $v' = ${c}e^{${ec}}$.

$f'(x) = ${a}e^{${ec}} ${sgn(c)}(${ax})e^{${ec}} = (${num})e^{${ec}}$

Donc $f'(0) = ${a + b * c}$.`,
      }
    },
  },
  {
    id: 'limite-rationnelle',
    title: 'Limite d\'une fraction rationnelle',
    chapter: 'limites-fonctions',
    gen() {
      const a = randNZ(-6, 6), b = rand(-5, 5), c = rand(-5, 5)
      const d = randNZ(-4, 4), e = rand(-5, 5), f = randNZ(-5, 5)
      const inf = pick(['+', '-'])
      return {
        q: t`Calculer $\lim_{x \to ${inf}\infty} \dfrac{${poly([[a, 2], [b, 1], [c, 0]])}}{${poly([[d, 2], [e, 1], [f, 0]])}}$. (Réponse possible sous forme de fraction : 3/2)`,
        fields: [{ label: 'limite', value: a / d }],
        sol: t`En l'infini, on garde les termes de plus haut degré : $\dfrac{${a}x^2}{${d}x^2} = ${frac(a, d)}$.`,
      }
    },
  },
  {
    id: 'integrale-poly',
    title: 'Intégrale d\'un polynôme',
    chapter: 'integrales',
    gen() {
      const p = rand(-3, 3), q = rand(-4, 4), r = rand(-5, 5)
      const a = rand(-2, 1), b = a + rand(1, 3)
      // tout multiplié par 6 pour rester en entiers
      const num = 2 * p * (b ** 3 - a ** 3) + 3 * q * (b ** 2 - a ** 2) + 6 * r * (b - a)
      // terme c/den·x^k en LaTeX, avec son signe
      const term = (c, den, k, first) => {
        if (!c) return ''
        const f = frac(Math.abs(c), den)
        const sign = c < 0 ? '-' : first ? '' : '+'
        return `${sign}${f === '1' ? '' : f}x${k > 1 ? `^${k}` : ''}`
      }
      const Ftex = [term(p, 3, 3, true), term(q, 2, 2, !p), term(r, 1, 1, !p && !q)].join(' ')
      return {
        q: t`Calculer $\displaystyle\int_{${a}}^{${b}} (${poly([[p, 2], [q, 1], [r, 0]])})\,dx$.`,
        fields: [{ label: 'intégrale', value: num / 6 }],
        sol: t`Une primitive est $F(x) = ${Ftex.trim() || '0'}$.

$\int_{${a}}^{${b}} = F(${b}) - F(${a}) = ${frac(num, 6)}$`,
      }
    },
  },
  {
    id: 'suite-terme',
    title: 'Terme d\'une suite arithmétique ou géométrique',
    chapter: 'suites',
    gen() {
      const u0 = randNZ(-5, 8)
      if (Math.random() < 0.5) {
        const r = randNZ(-4, 6), n = rand(5, 40)
        return {
          q: t`$(u_n)$ est arithmétique de premier terme $u_0 = ${u0}$ et de raison $r = ${r}$. Calculer $u_{${n}}$.`,
          fields: [{ label: t`u_{${n}}`, value: u0 + n * r }],
          sol: t`$u_n = u_0 + nr$ donc $u_{${n}} = ${u0} + ${n} \times ${par(r)} =${u0 + n * r}$.`,
        }
      }
      const q = pick([-3, -2, 2, 3]), n = rand(3, 7)
      return {
        q: t`$(u_n)$ est géométrique de premier terme $u_0 = ${u0}$ et de raison $q = ${q}$. Calculer $u_{${n}}$.`,
        fields: [{ label: t`u_{${n}}`, value: u0 * q ** n }],
        sol: t`$u_n = u_0 \times q^n$ donc $u_{${n}} = ${u0} \times (${q})^{${n}} = ${u0 * q ** n}$.`,
      }
    },
  },
  {
    id: 'somme-geo',
    title: 'Somme de termes géométriques',
    chapter: 'suites',
    gen() {
      const q = pick([2, 3, -2]), n = rand(4, 9)
      const s = (1 - q ** (n + 1)) / (1 - q)
      return {
        q: t`Calculer $S = 1 + (${q}) + (${q})^2 + \dots + (${q})^{${n}}$.`,
        fields: [{ label: 'S', value: s }],
        sol: t`$S = \dfrac{1 - q^{n+1}}{1 - q} = \dfrac{1 - (${q})^{${n + 1}}}{1 - (${q})} = ${s}$.`,
      }
    },
  },
  {
    id: 'seuil-ln',
    title: 'Seuil avec le logarithme',
    chapter: 'logarithme',
    gen() {
      const q = pick([0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95])
      const s = pick([0.1, 0.05, 0.01, 0.001])
      const n = Math.floor(Math.log(s) / Math.log(q)) + 1
      return {
        q: t`Déterminer le plus petit entier $n$ tel que $${fr(q)}^n < ${fr(s)}$.`,
        fields: [{ label: 'n', value: n }],
        sol: t`$${fr(q)}^n < ${fr(s)} \iff n\ln(${fr(q)}) < \ln(${fr(s)}) \iff n > \dfrac{\ln(${fr(s)})}{\ln(${fr(q)})} \approx ${fr(Math.log(s) / Math.log(q), 3)}$

(on change le sens car $\ln(${fr(q)}) < 0$). Donc $n = ${n}$.`,
      }
    },
  },
  {
    id: 'equadiff',
    title: 'Équation différentielle y\' = ay + b',
    chapter: 'primitives',
    gen() {
      const a = pick([-3, -2, -1, 1, 2, 3]), k = randNZ(-4, 4), b = -a * k, y0 = rand(-6, 6)
      // solution constante : -b/a = k
      const C = y0 - k
      return {
        q: t`On considère $y' = ${a}y ${b < 0 ? '-' : '+'} ${Math.abs(b)}$ avec $y(0) = ${y0}$. La solution s'écrit $y(x) = Ce^{${a === 1 ? '' : a === -1 ? '-' : a}x} + k$. Donner $C$ et $k$.`,
        fields: [{ label: 'C', value: C }, { label: 'k', value: k }],
        sol: t`Solution constante : $0 = ${a}k ${b < 0 ? '-' : '+'} ${Math.abs(b)} \Rightarrow k = ${frac(-b, a)}$.

Condition initiale : $y(0) = C ${sgn(k)} = ${y0} \Rightarrow C = ${C}$.`,
      }
    },
  },
  {
    id: 'binomiale',
    title: 'Loi binomiale',
    chapter: 'probas',
    gen() {
      const n = rand(4, 12), p = pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7]), k = rand(0, Math.min(n, 5))
      const v = binom(n, k) * p ** k * (1 - p) ** (n - k)
      return {
        q: t`$X$ suit la loi $\mathcal B(${n} ; ${fr(p)})$. Calculer $P(X = ${k})$ à $10^{-3}$ près.`,
        fields: [{ label: t`P(X=${k})`, value: v, tol: 0.0011 }],
        sol: t`$P(X = ${k}) = \binom{${n}}{${k}} \times ${fr(p)}^{${k}} \times ${fr(1 - p)}^{${n - k}} = ${binom(n, k)} \times ${fr(p)}^{${k}} \times ${fr(1 - p)}^{${n - k}} \approx ${fr(v, 4)}$`,
      }
    },
  },
  {
    id: 'esperance-binomiale',
    title: 'Espérance et variance (binomiale)',
    chapter: 'probas',
    gen() {
      const n = pick([10, 20, 25, 40, 50, 100, 200]), p = pick([0.1, 0.2, 0.25, 0.4, 0.5, 0.6, 0.8])
      return {
        q: t`$X$ suit la loi $\mathcal B(${n} ; ${fr(p)})$. Calculer $E(X)$ et $V(X)$.`,
        fields: [{ label: 'E(X)', value: n * p, tol: 1e-6 }, { label: 'V(X)', value: n * p * (1 - p), tol: 1e-6 }],
        sol: t`$E(X) = np = ${fr(n * p)}$ et $V(X) = np(1-p) = ${fr(n * p * (1 - p))}$.`,
      }
    },
  },
  {
    id: 'denombrement',
    title: 'Dénombrement',
    chapter: 'combinatoire',
    gen() {
      const kind = rand(0, 2)
      if (kind === 0) {
        const n = rand(5, 15), k = rand(2, 4)
        return {
          q: t`Combien de façons de choisir ${k} personnes parmi ${n} (sans ordre) ?`,
          fields: [{ label: 'nombre', value: binom(n, k) }],
          sol: t`Combinaisons : $\binom{${n}}{${k}} = ${binom(n, k)}$.`,
        }
      }
      if (kind === 1) {
        const n = rand(5, 12), k = rand(2, 4)
        let v = 1
        for (let i = 0; i < k; i++) v *= n - i
        return {
          q: t`${n} élèves participent à une course. Combien de classements des ${k} premiers sont possibles ?`,
          fields: [{ label: 'nombre', value: v }],
          sol: t`L'ordre compte, sans répétition : $\dfrac{${n}!}{${n - k}!} = ${v}$.`,
        }
      }
      const n = pick([2, 3, 4, 5, 6, 10, 26]), k = rand(2, 4)
      return {
        q: t`Combien de mots de ${k} caractères peut-on former avec un alphabet de ${n} symboles (répétitions autorisées) ?`,
        fields: [{ label: 'nombre', value: n ** k }],
        sol: t`$${k}$-uplets : $${n}^{${k}} = ${n ** k}$.`,
      }
    },
  },
  {
    id: 'produit-scalaire',
    title: 'Produit scalaire dans l\'espace',
    chapter: 'produit-scalaire',
    gen() {
      const u = [rand(-5, 5), rand(-5, 5), rand(-5, 5)], v = [rand(-5, 5), rand(-5, 5), rand(-5, 5)]
      const s = u[0] * v[0] + u[1] * v[1] + u[2] * v[2]
      return {
        q: t`Calculer $\vec u \cdot \vec v$ avec $\vec u(${u.join(' ; ')})$ et $\vec v(${v.join(' ; ')})$.`,
        fields: [{ label: t`\vec u \cdot \vec v`, value: s }],
        sol: t`$\vec u \cdot \vec v = ${u.map((x, i) => `(${x})(${v[i]})`).join(' + ')} = ${s}$` + (s === 0 ? ' : les vecteurs sont orthogonaux.' : '.'),
      }
    },
  },
  {
    id: 'plan-cartesien',
    title: 'Équation cartésienne d\'un plan',
    chapter: 'produit-scalaire',
    gen() {
      const n = [randNZ(-4, 4), rand(-4, 4), randNZ(-4, 4)], A = [rand(-4, 4), rand(-4, 4), rand(-4, 4)]
      const lin = ([x, y, z]) => poly([[x, 1]], 'x') + poly([[y, 1]], 'y').replace(/^(?!-)(?!0)/, '+').replace(/^\+?0$/, '') + poly([[z, 1]], 'z').replace(/^(?!-)/, '+')
      const d = -(n[0] * A[0] + n[1] * A[1] + n[2] * A[2])
      return {
        q: t`Le plan $\mathcal P$ passe par $A(${A.join(' ; ')})$ et a pour vecteur normal $\vec n(${n.join(' ; ')})$. Son équation est $${lin(n)} + d = 0$. Trouver $d$.`,
        fields: [{ label: 'd', value: d }],
        sol: t`$A \in \mathcal P$ : $${n[0]} \times ${par(A[0])} ${sgn(n[1])} \times ${par(A[1])} ${sgn(n[2])} \times ${par(A[2])} + d = 0$, donc $d = ${d}$.`,
      }
    },
  },
  {
    id: 'complexe-produit',
    title: 'Produit de complexes',
    chapter: 'complexes-algebrique',
    gen() {
      const a = rand(-5, 5), b = randNZ(-5, 5), c = rand(-5, 5), d = randNZ(-5, 5)
      const re = a * c - b * d, im = a * d + b * c
      return {
        q: t`Écrire $(${cplx(a, b)})(${cplx(c, d)})$ sous forme algébrique $x + iy$.`,
        fields: [{ label: 'x (partie réelle)', value: re }, { label: 'y (partie imaginaire)', value: im }],
        sol: t`$(${cplx(a, b)})(${cplx(c, d)}) = ${a * c} ${sgn(a * d, 'i')} ${sgn(b * c, 'i')} ${sgn(b * d, 'i^2')} = ${cplx(re, im)}$`,
      }
    },
  },
  {
    id: 'complexe-quotient',
    title: 'Quotient de complexes',
    chapter: 'complexes-algebrique',
    gen() {
      const x = rand(-4, 4), y = randNZ(-4, 4), c = rand(-3, 3), d = randNZ(-3, 3)
      // z1 = w × z2 pour que le quotient tombe juste
      const a = x * c - y * d, b = x * d + y * c
      const den = c * c + d * d
      return {
        q: t`Écrire $\dfrac{${cplx(a, b)}}{${cplx(c, d)}}$ sous forme algébrique $x + iy$.`,
        fields: [{ label: 'x', value: x }, { label: 'y', value: y }],
        sol: t`On multiplie par le conjugué $${cplx(c, -d)}$ :

$\dfrac{(${cplx(a, b)})(${cplx(c, -d)})}{${c * c} + ${d * d}} = \dfrac{${cplx(x * den, y * den)}}{${den}} = ${cplx(x, y)}$`,
      }
    },
  },
  {
    id: 'module',
    title: 'Module d\'un complexe',
    chapter: 'complexes-geometrie',
    gen() {
      const [p, q, r] = pick([[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [7, 24, 25], [9, 12, 15]])
      const swap = Math.random() < 0.5
      const a = (swap ? q : p) * pick([-1, 1]), b = (swap ? p : q) * pick([-1, 1])
      return {
        q: t`Calculer $|${cplx(a, b)}|$.`,
        fields: [{ label: '|z|', value: r }],
        sol: t`$|z| = \sqrt{${par(a)}^2 + ${par(b)}^2} = \sqrt{${r * r}} = ${r}$`,
      }
    },
  },
  {
    id: 'modulo-puissance',
    title: 'Reste d\'une puissance',
    chapter: 'divisibilite',
    gen() {
      const n = pick([5, 7, 9, 11, 13]), k = rand(20, 150)
      let a
      do a = rand(2, 12)
      while (gcd(a, n) !== 1 || a % n === 1)
      const r = modpow(a, k, n)
      // a et n premiers entre eux : une puissance de a vaut 1 modulo n
      let per = 1
      while (modpow(a, per, n) !== 1) per++
      return {
        q: t`Déterminer le reste de la division de $${a}^{${k}}$ par $${n}$.`,
        fields: [{ label: 'reste', value: r }],
        sol: t`On cherche une puissance de ${a} congrue à 1 : $${a}^{${per}} \equiv 1 \pmod{${n}}$.

$${k} = ${per} \times ${Math.floor(k / per)} + ${k % per}$, donc $${a}^{${k}} \equiv ${a}^{${k % per}} \equiv ${r} \pmod{${n}}$.`,
      }
    },
  },
  {
    id: 'pgcd',
    title: 'PGCD (algorithme d\'Euclide)',
    chapter: 'pgcd',
    gen() {
      const g = rand(2, 15)
      let m, n
      do { m = rand(2, 20); n = rand(2, 20) } while (gcd(m, n) !== 1 || m === n)
      let a = g * Math.max(m, n), b = g * Math.min(m, n)
      const steps = []
      let x = a, y = b
      while (y) { steps.push(t`$${x} = ${Math.floor(x / y)} \times ${y} + ${x % y}$`); [x, y] = [y, x % y] }
      return {
        q: t`Calculer $\operatorname{PGCD}(${a}, ${b})$.`,
        fields: [{ label: 'PGCD', value: g }],
        sol: steps.map((s) => '- ' + s).join('\n') + t`

Le dernier reste non nul est $${g}$.`,
      }
    },
  },
  {
    id: 'matrice-produit',
    title: 'Produit de matrices 2×2',
    chapter: 'matrices',
    gen() {
      const A = [rand(-3, 4), rand(-3, 4), rand(-3, 4), rand(-3, 4)], B = [rand(-3, 4), rand(-3, 4), rand(-3, 4), rand(-3, 4)]
      const C = [A[0] * B[0] + A[1] * B[2], A[0] * B[1] + A[1] * B[3], A[2] * B[0] + A[3] * B[2], A[2] * B[1] + A[3] * B[3]]
      const m = (X) => t`\begin{pmatrix} ${X[0]} & ${X[1]} \\ ${X[2]} & ${X[3]} \end{pmatrix}`
      return {
        q: t`Calculer $AB$ avec $A = ${m(A)}$ et $B = ${m(B)}$.`,
        fields: [{ label: 'c₁₁', value: C[0] }, { label: 'c₁₂', value: C[1] }, { label: 'c₂₁', value: C[2] }, { label: 'c₂₂', value: C[3] }],
        sol: t`$AB = ${m(C)}$

Par exemple $c_{11} = ${A[0]} \times ${par(B[0])} + ${par(A[1])} \times ${par(B[2])} = ${C[0]}$.`,
      }
    },
  },
  {
    id: 'matrice-inverse',
    title: 'Inverse d\'une matrice 2×2',
    chapter: 'matrices',
    gen() {
      // déterminant ±1 pour un inverse à coefficients entiers
      let a, b, c, d
      do { a = rand(-4, 5); b = rand(-4, 5); c = rand(-4, 5); d = rand(-4, 5) } while (Math.abs(a * d - b * c) !== 1)
      const det = a * d - b * c
      const inv = [d * det, -b * det, -c * det, a * det]
      const m = (X) => t`\begin{pmatrix} ${X[0]} & ${X[1]} \\ ${X[2]} & ${X[3]} \end{pmatrix}`
      return {
        q: t`Calculer l'inverse de $A = ${m([a, b, c, d])}$.`,
        fields: [{ label: 'a₁₁', value: inv[0] }, { label: 'a₁₂', value: inv[1] }, { label: 'a₂₁', value: inv[2] }, { label: 'a₂₂', value: inv[3] }],
        sol: t`$\det A = ad - bc = ${det}$, donc $A^{-1} = \dfrac{1}{${det}}${m([d, -b, -c, a])} = ${m(inv)}$`,
      }
    },
  },
]
