import katex from 'katex'
import { Fragment, useMemo } from 'react'

function renderMath(src, display) {
  try {
    return katex.renderToString(src, { displayMode: display, throwOnError: false, strict: false })
  } catch {
    return src
  }
}

// Typographie française : espace insécable avant : ; ? ! pour ne jamais les laisser seuls en début de ligne.
const nbsp = (s) => s.replace(/ ([:;?!])/g, ' $1')

// Découpe une ligne en morceaux : $$...$$, $...$, **gras**, `code`, texte.
function inline(text, keyBase) {
  const parts = []
  const re = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$|\*\*([^*]+?)\*\*|`([^`]+)`/g
  let last = 0
  let m
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(<Fragment key={keyBase + i++}>{nbsp(text.slice(last, m.index))}</Fragment>)
    if (m[1] !== undefined)
      parts.push(<span key={keyBase + i++} className="math-display" dangerouslySetInnerHTML={{ __html: renderMath(m[1], true) }} />)
    else if (m[2] !== undefined)
      parts.push(<span key={keyBase + i++} dangerouslySetInnerHTML={{ __html: renderMath(m[2], false) }} />)
    else if (m[3] !== undefined) {
      const k = keyBase + i++
      parts.push(<strong key={k}>{inline(m[3], k + 'b')}</strong>)
    } else parts.push(<code key={keyBase + i++} className="inline-code">{m[4]}</code>)
    last = re.lastIndex
  }
  if (last < text.length) parts.push(<Fragment key={keyBase + i++}>{nbsp(text.slice(last))}</Fragment>)
  return parts
}

/** Formule seule. */
export function M({ children, display = false }) {
  const html = useMemo(() => renderMath(String(children), display), [children, display])
  return <span className={display ? 'math-display' : undefined} dangerouslySetInnerHTML={{ __html: html }} />
}

/**
 * Texte riche : paragraphes séparés par une ligne vide, listes avec "- ",
 * maths avec $...$ et $$...$$, gras avec **...**.
 */
export default function Tex({ children, className }) {
  const blocks = String(children ?? '').trim().split(/\n\s*\n/)
  return (
    <div className={'tex ' + (className ?? '')}>
      {blocks.flatMap((b, bi) => {
        // un bloc peut mélanger texte et lignes de liste : on regroupe les lignes consécutives de même type
        const runs = []
        for (const l of b.split('\n').map((x) => x.trim()).filter(Boolean)) {
          const isItem = l.startsWith('- ')
          const last = runs[runs.length - 1]
          if (last && last.list === isItem) last.lines.push(l)
          else runs.push({ list: isItem, lines: [l] })
        }
        return runs.map((r, ri) =>
          r.list ? (
            <ul key={`${bi}-${ri}`}>
              {r.lines.map((l, li) => (
                <li key={li}>{inline(l.slice(2), `${bi}-${ri}-${li}-`)}</li>
              ))}
            </ul>
          ) : (
            <p key={`${bi}-${ri}`}>{inline(r.lines.join(' '), `${bi}-${ri}-`)}</p>
          )
        )
      })}
    </div>
  )
}
