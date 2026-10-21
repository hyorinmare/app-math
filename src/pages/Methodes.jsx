import { useMemo, useState } from 'react'
import { methodGroups, allMethods } from '../data/methodes.js'
import { chapterById, go, PROGS } from '../lib.js'
import { generators } from '../generators/index.js'
import { fiches } from '../data/fiches/index.js'
import Tex from '../components/Tex.jsx'

// minuscules, sans accents ni indices/exposants : « Étudier uₙ₊₁ » → « etudier un+1 »
const norm = (s) =>
  s
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

const byId = Object.fromEntries(allMethods.map((m) => [m.id, m]))

export default function Methodes({ id }) {
  if (id) return <MethodPage key={id} m={byId[id]} />
  return <MethodIndex />
}

function MethodIndex() {
  const [query, setQuery] = useState(() => {
    try { return sessionStorage.getItem('methodes-q') ?? '' } catch { return '' }
  })
  const search = (q) => {
    setQuery(q)
    try { sessionStorage.setItem('methodes-q', q) } catch { /* stockage indisponible */ }
  }

  const words = norm(query).split(/\s+/).filter((w) => w.length > 1)
  const results = useMemo(() => {
    if (!words.length) return null
    return allMethods.filter((m) => {
      const hay = norm(`${m.title} ${m.keywords} ${m.group.title}`)
      return words.every((w) => hay.includes(w))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <div className="page">
      <h1>Méthodes</h1>
      <p className="muted">Bloqué sur un exo ? Cherche ce que tu dois faire.</p>
      <div className="search">
        <input
          type="search"
          value={query}
          onChange={(e) => search(e.target.value)}
          placeholder="ex. suite croissante, unique solution, IPP…"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
      </div>

      {results ? (
        <>
          <p className="muted small">{results.length} méthode{results.length > 1 ? 's' : ''}</p>
          <div className="list">
            {results.map((m) => (
              <MethodItem key={m.id} m={m} showGroup />
            ))}
          </div>
          {!results.length && <p className="muted">Rien trouvé. Essaie avec un autre mot (ex. « limite », « dériver », « plan »).</p>}
        </>
      ) : (
        Object.entries(PROGS).map(([prog, label]) => (
          <section key={prog}>
            <h2>{label}</h2>
            {methodGroups.filter((g) => g.prog === prog).map((g) => (
              <details key={g.id} className="group">
                <summary>
                  <span>{g.title}</span>
                  <span className="badge">{g.items.filter(([mid]) => fiches[mid]).length}/{g.items.length}</span>
                </summary>
                <div className="list">
                  {g.items.map(([mid]) => (
                    <MethodItem key={mid} m={byId[mid]} />
                  ))}
                </div>
              </details>
            ))}
          </section>
        ))
      )}
      <p className="muted small center">{allMethods.length} méthodes au total</p>
    </div>
  )
}

function MethodItem({ m, showGroup }) {
  return (
    <button className="item" onClick={() => go('methodes/' + m.id)}>
      <span>
        Comment {lowerFirst(m.title)} ?
        {showGroup && <small>{m.group.title}</small>}
      </span>
      {!fiches[m.id] && <span className="badge">à venir</span>}
      <span className="chev" aria-hidden>›</span>
    </button>
  )
}

const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1)

function MethodPage({ m }) {
  const [showSol, setShowSol] = useState(false)
  if (!m) return <div className="page"><p>Méthode introuvable.</p></div>
  const f = fiches[m.id]
  const ch = m.group.chapter && chapterById[m.group.chapter]
  const gens = generators.filter((g) => g.chapter === m.group.chapter)

  return (
    <div className="page">
      <button className="back" onClick={() => history.length > 1 ? history.back() : go('methodes')}>‹ Méthodes</button>
      <p className="eyebrow">{m.group.title}</p>
      <h1>Comment {lowerFirst(m.title)} ?</h1>
      {f ? (
        <>
          <section className="fiche-part quand">
            <h2>Quand l'utiliser ?</h2>
            <Tex>{f.quand}</Tex>
          </section>

          <section className="fiche-part">
            <h2>La méthode</h2>
            <ol className="steps">
              {f.etapes.map((s, i) => (
                <li key={i}><Tex>{s}</Tex></li>
              ))}
            </ol>
          </section>

          <section className="fiche-part">
            <h2>Exemple rédigé</h2>
            <div className="card enonce">
              <span className="kind">Énoncé</span>
              <Tex>{f.exemple.enonce}</Tex>
              {f.exemple.codeEnonce && <pre className="code"><code>{f.exemple.codeEnonce}</code></pre>}
            </div>
            {showSol ? (
              <div className="card redaction">
                <span className="kind">Rédaction</span>
                <Tex>{f.exemple.solution}</Tex>
                {f.exemple.code && <pre className="code"><code>{f.exemple.code}</code></pre>}
              </div>
            ) : (
              <button className="btn wide" onClick={() => setShowSol(true)}>Essaie d'abord, puis affiche la rédaction</button>
            )}
          </section>

          <section className="fiche-part pieges">
            <h2>Pièges à éviter</h2>
            <ul>
              {f.pieges.map((p, i) => (
                <li key={i}><Tex>{p}</Tex></li>
              ))}
            </ul>
          </section>

          {f.voir?.some((v) => byId[v]) && (
            <section className="fiche-part">
              <h2>Voir aussi</h2>
              <div className="list">
                {f.voir.filter((v) => byId[v]).map((v) => (
                  <MethodItem key={v} m={byId[v]} />
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="card soon">
          <strong>Fiche en cours de rédaction</strong>
          <p className="muted">Elle contiendra : quand utiliser cette méthode, les étapes, un exemple rédigé comme au bac et les pièges à éviter.</p>
        </div>
      )}
      <div className="actions">
        {ch && <button className="btn" onClick={() => go('cours/' + ch.id)}>📘 Fiche de cours : {ch.title}</button>}
        {gens.map((g) => (
          <button key={g.id} className="btn" onClick={() => go('exos/' + g.id)}>🎲 S'entraîner : {g.title}</button>
        ))}
      </div>
    </div>
  )
}
