import { chapters, go, useProgress, useStandalone, resetProgress } from '../lib.js'
import { generators } from '../generators/index.js'
import { allMethods } from '../data/methodes.js'

export default function Home() {
  const progress = useProgress()
  const standalone = useStandalone()
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent)

  const quizDone = Object.keys(progress.quiz).filter((id) => id !== 'mix').length
  const exoStats = Object.values(progress.exos).reduce((s, e) => ({ ok: s.ok + e.ok, total: s.total + e.total }), { ok: 0, total: 0 })
  const toReview = chapters
    .filter((c) => progress.quiz[c.id] && progress.quiz[c.id].score / progress.quiz[c.id].total < 0.75)
    .slice(0, 4)

  return (
    <div className="page">
      <header className="hero">
        <h1>Maths Terminale</h1>
        <p>Spécialité &amp; maths expertes</p>
      </header>

      {!standalone && isIOS && (
        <div className="card install">
          <strong>Installer l'app sur ton iPhone</strong>
          <p>Dans Safari, touche <b>Partager</b> <span aria-hidden>⬆︎</span> puis <b>« Sur l'écran d'accueil »</b>. L'app marchera ensuite en plein écran, même hors ligne.</p>
        </div>
      )}

      <div className="stats">
        <div className="stat">
          <b>{quizDone}/{chapters.length}</b>
          <span>quiz faits</span>
        </div>
        <div className="stat">
          <b>{exoStats.ok}</b>
          <span>exos réussis</span>
        </div>
        <div className="stat">
          <b>{exoStats.total ? Math.round((100 * exoStats.ok) / exoStats.total) : 0}%</b>
          <span>de réussite</span>
        </div>
      </div>

      <h2>C'est parti</h2>
      <div className="grid2">
        <button className="tile" onClick={() => go('methodes')}><span className="emoji">🔎</span>Comment faire… ?<small>{allMethods.length} méthodes</small></button>
        <button className="tile" onClick={() => go('quiz')}><span className="emoji">🎯</span>Quiz<small>par chapitre ou au hasard</small></button>
        <button className="tile" onClick={() => go('exos')}><span className="emoji">🎲</span>Exos à l'infini<small>{generators.length} types</small></button>
        <button className="tile" onClick={() => go('outils')}><span className="emoji">📈</span>Outils<small>courbes, suites, probas</small></button>
      </div>

      {toReview.length > 0 && (
        <>
          <h2>À revoir</h2>
          <div className="list">
            {toReview.map((c) => (
              <button key={c.id} className="item" onClick={() => go('cours/' + c.id)}>
                <span>{c.title}</span>
                <span className="badge ko">{progress.quiz[c.id].score}/{progress.quiz[c.id].total}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {(quizDone > 0 || exoStats.total > 0) && (
        <button
          className="link danger"
          onClick={() => window.confirm('Effacer toute ta progression ?') && resetProgress()}
        >
          Réinitialiser ma progression
        </button>
      )}
    </div>
  )
}
