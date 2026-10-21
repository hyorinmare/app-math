import { go } from '../lib.js'
import Plotter from '../tools/Plotter.jsx'
import Suites from '../tools/Suites.jsx'
import Binomiale from '../tools/Binomiale.jsx'
import Racines from '../tools/Racines.jsx'

const TOOLS = [
  { id: 'courbes', title: 'Traceur de courbes', desc: 'Tracer f et g, tangente, intégrale', emoji: '📈', C: Plotter },
  { id: 'suites', title: 'Suites récurrentes', desc: 'Escalier / escargot de uₙ₊₁ = f(uₙ)', emoji: '🪜', C: Suites },
  { id: 'binomiale', title: 'Loi binomiale', desc: 'Diagramme, P(a ≤ X ≤ b), espérance', emoji: '🎲', C: Binomiale },
  { id: 'racines', title: 'Racines n-ièmes', desc: 'Complexes sur le cercle (expertes)', emoji: '🔷', C: Racines },
]

export default function Outils({ id }) {
  const tool = TOOLS.find((x) => x.id === id)
  if (tool) {
    const { C } = tool
    return (
      <div className="page">
        <button className="back" onClick={() => go('outils')}>‹ Outils</button>
        <h1>{tool.title}</h1>
        <C />
      </div>
    )
  }
  return (
    <div className="page">
      <h1>Outils</h1>
      <div className="list">
        {TOOLS.map((x) => (
          <button key={x.id} className="item" onClick={() => go('outils/' + x.id)}>
            <span className="emoji">{x.emoji}</span>
            <span>
              {x.title}
              <small>{x.desc}</small>
            </span>
            <span className="chev" aria-hidden>›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
