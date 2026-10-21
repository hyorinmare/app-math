// Analyseur d'expressions mathématiques (sans eval) : compile "2x^2 - ln(x) + sin(pi x)" en fonction.
// Gère + - * / ^, la multiplication implicite (2x, 3(x+1), x sin x), les fonctions usuelles et pi, e.

const FUNCS = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan,
  exp: Math.exp, ln: Math.log, log: Math.log10,
  sqrt: Math.sqrt, racine: Math.sqrt, abs: Math.abs,
  arctan: Math.atan, floor: Math.floor,
}
const CONSTS = { pi: Math.PI, e: Math.E }

function tokenize(src) {
  const s = src.replace(/\s+/g, ' ').replace(/,/g, '.').replace(/π/g, 'pi').replace(/²/g, '^2').replace(/×/g, '*')
  const tokens = []
  let i = 0
  while (i < s.length) {
    const c = s[i]
    if (c === ' ') { i++; continue }
    if (/[0-9.]/.test(c)) {
      let j = i
      while (j < s.length && /[0-9.]/.test(s[j])) j++
      tokens.push({ type: 'num', value: parseFloat(s.slice(i, j)) })
      i = j
    } else if (/[a-zA-Z]/.test(c)) {
      let j = i
      while (j < s.length && /[a-zA-Z]/.test(s[j])) j++
      let word = s.slice(i, j)
      // découpe "xsin" ou "pix" en morceaux connus
      while (word) {
        const known = [...Object.keys(FUNCS), ...Object.keys(CONSTS), 'x', 'n', 't']
          .sort((a, b) => b.length - a.length)
          .find((k) => word.startsWith(k))
        if (!known) throw new Error(`Symbole inconnu : « ${word} »`)
        tokens.push(FUNCS[known] ? { type: 'func', value: known } : { type: 'id', value: known })
        word = word.slice(known.length)
      }
      i = j
    } else if ('+-*/^()'.includes(c)) {
      tokens.push({ type: 'op', value: c })
      i++
    } else throw new Error(`Caractère inattendu : « ${c} »`)
  }
  return tokens
}

// Grammaire :
//   expr   := term (('+'|'-') term)*
//   term   := unary (('*'|'/')? unary)*      (multiplication implicite)
//   unary  := '-' unary | power
//   power  := atom ('^' unary)?
//   atom   := num | id | func atom | '(' expr ')'
function parse(tokens) {
  let pos = 0
  const peek = () => tokens[pos]
  const isOp = (v) => peek()?.type === 'op' && peek().value === v
  const startsAtom = () => {
    const tk = peek()
    return tk && (tk.type !== 'op' || tk.value === '(')
  }

  function expr() {
    let node = term()
    while (isOp('+') || isOp('-')) {
      const op = tokens[pos++].value
      node = { op, a: node, b: term() }
    }
    return node
  }
  function term() {
    let node = unary()
    for (;;) {
      if (isOp('*') || isOp('/')) {
        const op = tokens[pos++].value
        node = { op, a: node, b: unary() }
      } else if (startsAtom()) {
        node = { op: '*', a: node, b: power() }
      } else break
    }
    return node
  }
  function unary() {
    if (isOp('-')) { pos++; return { op: 'neg', a: unary() } }
    if (isOp('+')) { pos++; return unary() }
    return power()
  }
  function power() {
    const base = atom()
    if (isOp('^')) { pos++; return { op: '^', a: base, b: unary() } }
    return base
  }
  function atom() {
    const tk = tokens[pos++]
    if (!tk) throw new Error('Expression incomplète')
    if (tk.type === 'num') return { num: tk.value }
    if (tk.type === 'id') return { id: tk.value }
    if (tk.type === 'func') {
      // sin x, sin(x), sin^2 x non géré : on lit un argument « power »
      return { fn: tk.value, a: power() }
    }
    if (tk.value === '(') {
      const node = expr()
      if (!isOp(')')) throw new Error('Parenthèse fermante manquante')
      pos++
      return node
    }
    throw new Error(`« ${tk.value} » inattendu`)
  }

  const tree = expr()
  if (pos < tokens.length) throw new Error(`« ${tokens[pos].value} » inattendu`)
  return tree
}

function evaluate(node, vars) {
  if ('num' in node) return node.num
  if ('id' in node) return node.id in CONSTS ? CONSTS[node.id] : vars[node.id] ?? vars.x
  if ('fn' in node) return FUNCS[node.fn](evaluate(node.a, vars))
  const a = evaluate(node.a, vars)
  switch (node.op) {
    case 'neg': return -a
    case '+': return a + evaluate(node.b, vars)
    case '-': return a - evaluate(node.b, vars)
    case '*': return a * evaluate(node.b, vars)
    case '/': return a / evaluate(node.b, vars)
    case '^': return Math.pow(a, evaluate(node.b, vars))
  }
  return NaN
}

/** Compile une expression en fonction de x. Lève une erreur lisible si l'expression est invalide. */
export function compile(src) {
  const tree = parse(tokenize(src))
  return (x) => evaluate(tree, { x, n: x, t: x })
}
