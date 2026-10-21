import { useRoute, go } from './lib.js'
import Home from './pages/Home.jsx'
import Cours from './pages/Cours.jsx'
import Quiz from './pages/Quiz.jsx'
import Exos from './pages/Exos.jsx'
import Outils from './pages/Outils.jsx'
import Methodes from './pages/Methodes.jsx'

const icon = (d) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {d}
  </svg>
)

const TABS = [
  { id: '', label: 'Accueil', icon: icon(<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />) },
  { id: 'cours', label: 'Cours', icon: icon(<><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 21V5M9 7h6" /></>) },
  { id: 'methodes', label: 'Méthodes', icon: icon(<><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>) },
  { id: 'exos', label: 'Exos', icon: icon(<><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="9" cy="9" r="1.2" /><circle cx="15" cy="15" r="1.2" /><circle cx="15" cy="9" r="1.2" /><circle cx="9" cy="15" r="1.2" /></>) },
  { id: 'outils', label: 'Outils', icon: icon(<path d="M3 20h18M5 16c3-8 5-10 7-6s4 2 7-6" />) },
]

const PAGES = { methodes: Methodes, cours: Cours, quiz: Quiz, exos: Exos, outils: Outils }

export default function App() {
  const [section = '', id] = useRoute()
  const Page = PAGES[section] ?? Home

  return (
    <>
      <main>
        <Page id={id} />
      </main>
      <nav className="tabbar">
        {TABS.map((t) => (
          <button key={t.id} className={(section === 'quiz' ? 'cours' : PAGES[section] ? section : '') === t.id ? 'on' : ''} onClick={() => go(t.id)}>
            {t.icon}
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
