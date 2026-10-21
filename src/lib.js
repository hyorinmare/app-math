import { useEffect, useState, useSyncExternalStore } from 'react'
import { spe } from './data/spe.js'
import { expert } from './data/expert.js'

export const chapters = [
  ...spe.map((c) => ({ ...c, prog: 'spe' })),
  ...expert.map((c) => ({ ...c, prog: 'exp' })),
]
export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c]))
export const PROGS = { spe: 'Spécialité', exp: 'Maths expertes' }

// ---------- Navigation par hash : #/cours/suites → ['cours', 'suites'] ----------

const subscribeHash = (cb) => {
  window.addEventListener('hashchange', cb)
  return () => window.removeEventListener('hashchange', cb)
}
export function useRoute() {
  const hash = useSyncExternalStore(subscribeHash, () => window.location.hash)
  useEffect(() => { window.scrollTo(0, 0) }, [hash])
  return hash.replace(/^#\/?/, '').split('/').filter(Boolean)
}
export const go = (path) => { window.location.hash = '/' + path }

// ---------- Progression (stockée sur l'appareil) ----------

const KEY = 'maths-tle-progress'
const empty = { quiz: {}, exos: {} }

function load() {
  try {
    return { ...empty, ...JSON.parse(localStorage.getItem(KEY) || '{}') }
  } catch {
    return { ...empty }
  }
}

let state = load()
const listeners = new Set()
function save(next) {
  state = next
  try { localStorage.setItem(KEY, JSON.stringify(state)) } catch { /* stockage indisponible */ }
  listeners.forEach((l) => l())
}

export function useProgress() {
  return useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb) },
    () => state
  )
}

/** Enregistre un score de quiz (on garde le meilleur). */
export function recordQuiz(id, score, total) {
  const prev = state.quiz[id]
  const best = !prev || score / total >= prev.score / prev.total ? { score, total } : prev
  save({ ...state, quiz: { ...state.quiz, [id]: { ...best, last: Date.now() } } })
}

export function recordExo(id, ok) {
  const prev = state.exos[id] || { ok: 0, total: 0 }
  save({ ...state, exos: { ...state.exos, [id]: { ok: prev.ok + (ok ? 1 : 0), total: prev.total + 1 } } })
}

export function resetProgress() {
  save({ ...empty })
}

export const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Vrai si l'app tourne installée sur l'écran d'accueil. */
export function useStandalone() {
  const [s] = useState(() => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true)
  return s
}
