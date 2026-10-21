import { useMemo, useState } from 'react'
import Tex from '../components/Tex.jsx'
import { ChapterList } from './Cours.jsx'
import { chapters, chapterById, go, recordQuiz, shuffle } from '../lib.js'

export default function Quiz({ id }) {
  if (!id) {
    return (
      <div className="page">
        <h1>Quiz</h1>
        <button className="btn primary wide" onClick={() => go('quiz/mix')}>🎯 Quiz express : 10 questions au hasard</button>
        <ChapterList onPick={(c) => go('quiz/' + c.id)} showScore />
      </div>
    )
  }
  // key : relancer un quiz neuf quand on change de chapitre
  return <QuizRun key={id} id={id} />
}

function QuizRun({ id }) {
  const [round, setRound] = useState(0)
  const questions = useMemo(() => {
    const pool = id === 'mix'
      ? shuffle(chapters.flatMap((c) => c.quiz.map((q) => ({ ...q, from: c.title })))).slice(0, 10)
      : shuffle(chapterById[id]?.quiz ?? [])
    // on mélange aussi l'ordre des réponses
    return pool.map((q) => {
      const order = shuffle(q.o.map((_, i) => i))
      return { ...q, o: order.map((i) => q.o[i]), a: order.indexOf(q.a) }
    })
  }, [id, round])

  const [i, setI] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [score, setScore] = useState(0)
  const title = id === 'mix' ? 'Quiz express' : chapterById[id]?.title
  const backTo = 'quiz'

  if (!questions.length) return <div className="page"><p>Quiz introuvable.</p></div>

  if (i >= questions.length) {
    const pct = score / questions.length
    return (
      <div className="page">
        <button className="back" onClick={() => go(backTo)}>‹ Retour</button>
        <h1>{title}</h1>
        <div className="card result">
          <div className="big">{score}/{questions.length}</div>
          <p>{pct === 1 ? 'Parfait ! 🎉' : pct >= 0.75 ? 'Très bien, continue comme ça !' : pct >= 0.5 ? 'Pas mal, relis la fiche pour consolider.' : 'Relis la fiche de cours puis réessaie.'}</p>
        </div>
        <div className="actions">
          <button className="btn primary" onClick={() => { setRound((r) => r + 1); setI(0); setScore(0); setChosen(null) }}>Recommencer</button>
          {id !== 'mix' && <button className="btn" onClick={() => go('cours/' + id)}>Relire la fiche</button>}
        </div>
      </div>
    )
  }

  const q = questions[i]
  const answered = chosen !== null

  const choose = (k) => {
    if (answered) return
    setChosen(k)
    if (k === q.a) setScore((s) => s + 1)
  }
  const next = () => {
    const nextI = i + 1
    if (nextI >= questions.length) recordQuiz(id, score, questions.length)
    setChosen(null)
    setI(nextI)
  }

  return (
    <div className="page">
      <button className="back" onClick={() => go(backTo)}>‹ Retour</button>
      <p className="eyebrow">{title} · question {i + 1}/{questions.length}</p>
      <div className="progress"><div style={{ width: `${(100 * i) / questions.length}%` }} /></div>
      {q.from && <p className="muted small">{q.from}</p>}
      <Tex className="question">{q.q}</Tex>
      <div className="choices">
        {q.o.map((o, k) => {
          const cls = !answered ? '' : k === q.a ? 'ok' : k === chosen ? 'ko' : 'dim'
          return (
            <button key={k} className={'choice ' + cls} onClick={() => choose(k)}>
              <Tex>{o}</Tex>
            </button>
          )
        })}
      </div>
      {answered && (
        <>
          <div className={'feedback ' + (chosen === q.a ? 'ok' : 'ko')}>
            <strong>{chosen === q.a ? 'Bonne réponse !' : 'Raté.'}</strong>
            <Tex>{q.e}</Tex>
          </div>
          <button className="btn primary wide" onClick={next}>{i + 1 < questions.length ? 'Question suivante' : 'Voir mon score'}</button>
        </>
      )}
    </div>
  )
}
