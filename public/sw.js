// Service worker : l'app fonctionne hors ligne dès la première ouverture.
// Change ce numéro à chaque nouvelle version pour que les téléphones récupèrent les nouveaux fichiers.
const CACHE = 'maths-tle-v2'

const BASE = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png']

// Les noms des fichiers du build changent à chaque version (assets/index-XXXX.js) :
// on les retrouve en lisant index.html, puis les polices KaTeX en lisant le CSS.
async function precache() {
  const cache = await caches.open(CACHE)
  await cache.addAll(BASE)
  const html = await (await fetch('./index.html', { cache: 'no-cache' })).text()
  const assets = [...html.matchAll(/(?:src|href)="(\.?\/?assets\/[^"]+)"/g)].map((m) => new URL(m[1], location.href).href)
  const fonts = []
  for (const url of assets.filter((u) => u.endsWith('.css'))) {
    const css = await (await fetch(url)).text()
    for (const m of css.matchAll(/url\(([^)]+\.woff2)\)/g)) fonts.push(new URL(m[1].replace(/["']/g, ''), url).href)
  }
  await cache.addAll([...new Set([...assets, ...fonts])])
}

self.addEventListener('install', (e) => {
  e.waitUntil(precache())
  self.skipWaiting()
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  )
  self.clients.claim()
})

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return

  // Pages : réseau d'abord (pour avoir les mises à jour), cache si hors ligne.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((c) => c.put('./index.html', copy))
          return res
        })
        .catch(() => caches.match('./index.html'))
    )
    return
  }

  // Fichiers (JS, CSS, polices, icônes) : cache d'abord, mis à jour en arrière-plan.
  e.respondWith(
    caches.match(req).then((cached) => {
      const fresh = fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone()
            caches.open(CACHE).then((c) => c.put(req, copy))
          }
          return res
        })
        .catch(() => cached)
      return cached || fresh
    })
  )
})
