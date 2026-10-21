import { useState } from 'react'
import Tex, { M } from '../components/Tex.jsx'
import { generators } from '../generators/index.js'
import { parseAnswer } from '../generators/utils.js'
import { chapters, chapterById, go, PROGS, recordExo, useProgress } from '../lib.js'

export default function Exos({ id }) {
  const progress = useProgress()
  if (id) return <ExoRun key={id} id={id} />

  return (
    <div className="page">
      <h1>Exos à l'infini</h1>
      <p className="muted">Des exercices tirés au hasard, avec la correction détaillée. Il y en a toujours un nouveau.</p>
      {Object.entries(PROGS).map(([prog, label]) => (
        <section key={prog}>
          <h2>{label}</h2>
          <div className="list">
            {chapters.filter((c) => c.prog === prog).flatMap((c) => generators.filter((g) => g.chapter === c.id)).map((g) => {
              const s = progress.exos[g.id]
              return (
                <button key={g.id} className="item" onClick={() => go('exos/' + g.id)}>
                  <span>
                    {g.title}
                    <small>{chapterById[g.chapter].title}</small>
                  </span>
                  {s && <span className="badge">{s.ok}/{s.total}</span>}
                  <span className="chev" aria-hidden>›</span>
                </button>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

const close = (x, v, tol) => Math.abs(x - v) <= (tol ?? Math.max(1e-6, Math.abs(v) * 1e-6))

function ExoRun({ id }) {
  const g = generators.find((x) => x.id === id)
  const [ex, setEx] = useState(() => g?.gen())
  const [vals, setVals] = useState({})
  const [status, setStatus] = useState(null) // null | 'ok' | 'ko'
  const [showSol, setShowSol] = useState(false)
  const [streak, setStreak] = useState(0)
  const [counted, setCounted] = useState(false)

  if (!g) return <div className="page"><p>Exercice introuvable.</p></div>

  const check = () => {
    const ok = ex.fields.every((f, i) => close(parseAnswer(vals[i] ?? ''), f.value, f.tol))
    setStatus(ok ? 'ok' : 'ko')
    if (!counted) {
      recordExo(id, ok)
      setCounted(true)
      setStreak((s) => (ok ? s + 1 : 0))
    }
    if (ok) setShowSol(true)
  }
  const fresh = () => {
    setEx(g.gen())
    setVals({})
    setStatus(null)
    setShowSol(false)
    setCounted(false)
  }
  const reveal = () => {
    if (!counted) { recordExo(id, false); setCounted(true); setStreak(0) }
    setShowSol(true)
  }

  const fmt = (v) => String(+v.toFixed(4)).replace('.', ',')

  return (
    <div className="page">
      <button className="back" onClick={() => go('exos')}>‹ Exos</button>
      <p className="eyebrow">{chapterById[g.chapter].title}{streak > 1 ? ` · 🔥 ${streak} d'affilée` : ''}</p>
      <h1>{g.title}</h1>
      <div className="card">
        <Tex className="question">{ex.q}</Tex>
      </div>

      <form className="answers" onSubmit={(e) => { e.preventDefault(); check() }}>
        {ex.fields.map((f, i) => (
          <label key={i} className="field">
            <span>{/[\\^_]/.test(f.label) ? <M>{f.label}</M> : f.label} =</span>
            <input
              value={vals[i] ?? ''}
              onChange={(e) => { setVals((v) => ({ ...v, [i]: e.target.value })); setStatus(null) }}
              inputMode="text"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              placeholder="ta réponse"
              className={status === 'ok' ? 'ok' : status === 'ko' && !close(parseAnswer(vals[i] ?? ''), f.value, f.tol) ? 'ko' : ''}
            />
          </label>
        ))}
        <p className="hint">Entiers, décimaux (2,5) ou fractions (7/4).</p>
        <div className="actions row">
          <button type="submit" className="btn primary">Vérifier</button>
          <button type="button" className="btn" onClick={reveal}>Correction</button>
          <button type="button" className="btn" onClick={fresh}>Nouveau</button>
        </div>
      </form>

      {status && (
        <div className={'feedback ' + status}>
          <strong>{status === 'ok' ? 'Bravo, c\'est juste !' : 'Pas tout à fait, réessaie ou regarde la correction.'}</strong>
        </div>
      )}
      {showSol && (
        <div className="card solution">
          <strong>Correction</strong>
          <Tex>{ex.sol}</Tex>
          <p className="muted small">Réponse : {ex.fields.map((f) => `${f.label.replace(/\\[a-z]+\s?|[{}]/g, '')} = ${fmt(f.value)}`).join(' ; ')}</p>
          <button className="btn primary wide" onClick={fresh}>Exercice suivant</button>
        </div>
      )}
    </div>
  )
}
