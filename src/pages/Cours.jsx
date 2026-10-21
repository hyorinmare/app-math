import Tex from '../components/Tex.jsx'
import { chapters, chapterById, go, PROGS, useProgress } from '../lib.js'
import { generators } from '../generators/index.js'

const KINDS = {
  def: 'Définition',
  thm: 'Théorème',
  prop: 'Propriété',
  meth: 'Méthode',
  ex: 'Exemple',
  rem: 'Remarque',
}

/** Liste des chapitres groupés par programme puis par thème. */
export function ChapterList({ onPick, showScore }) {
  const progress = useProgress()
  return Object.entries(PROGS).map(([prog, label]) => {
    const list = chapters.filter((c) => c.prog === prog)
    const themes = [...new Set(list.map((c) => c.theme))]
    return (
      <section key={prog}>
        <h2>{label}</h2>
        {themes.map((th) => (
          <div key={th}>
            <h3 className="theme">{th}</h3>
            <div className="list">
              {list.filter((c) => c.theme === th).map((c) => {
                const q = progress.quiz[c.id]
                return (
                  <button key={c.id} className="item" onClick={() => onPick(c)}>
                    <span>{c.title}</span>
                    {showScore && q && <span className={'badge ' + (q.score / q.total >= 0.75 ? 'ok' : 'ko')}>{q.score}/{q.total}</span>}
                    <span className="chev" aria-hidden>›</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </section>
    )
  })
}

export default function Cours({ id }) {
  if (!id) {
    return (
      <div className="page">
        <h1>Cours</h1>
        <ChapterList onPick={(c) => go('cours/' + c.id)} />
      </div>
    )
  }

  const ch = chapterById[id]
  if (!ch) return <div className="page"><p>Chapitre introuvable.</p></div>
  const gens = generators.filter((g) => g.chapter === id)

  return (
    <div className="page">
      <button className="back" onClick={() => go('cours')}>‹ Cours</button>
      <p className="eyebrow">{PROGS[ch.prog]} · {ch.theme}</p>
      <h1>{ch.title}</h1>
      {ch.blocks.map((b, i) => (
        <article key={i} className={'block ' + b.k}>
          <header>
            <span className="kind">{KINDS[b.k]}</span>
            {b.t && <Tex className="block-title">{b.t}</Tex>}
          </header>
          <Tex>{b.c}</Tex>
        </article>
      ))}

      <div className="actions">
        <button className="btn primary" onClick={() => go('quiz/' + id)}>Faire le quiz ({ch.quiz.length} questions)</button>
        {gens.map((g) => (
          <button key={g.id} className="btn" onClick={() => go('exos/' + g.id)}>🎲 {g.title}</button>
        ))}
      </div>
    </div>
  )
}
