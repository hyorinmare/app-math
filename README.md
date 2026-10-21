# Maths Terminale

App web (PWA) de révision pour la Terminale : **spécialité maths** + **maths expertes**.
Elle s'installe sur iPhone depuis Safari, sans App Store.

**En ligne : https://hyorinmare.github.io/app-math/** — chaque push sur `main` redéploie automatiquement (GitHub Actions → GitHub Pages).

- **Fiches de cours** : 19 chapitres (définitions, théorèmes, méthodes, exemples) avec formules rendues par KaTeX.
- **Quiz** : 3 à 4 questions par chapitre + un « quiz express » de 10 questions au hasard. Les meilleurs scores sont gardés.
- **Exos à l'infini** : 20 types d'exercices aléatoires (dérivées, intégrales, suites, loi binomiale, complexes, congruences, PGCD, matrices…) avec vérification automatique et correction détaillée.
- **Outils** : traceur de courbes (tangente, intégrale), suites récurrentes (escalier/escargot), loi binomiale, racines n-ièmes.

La progression est enregistrée sur l'appareil (localStorage). Après la première visite, l'app marche hors ligne.

## Lancer sur le PC

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173.

Pour tester sur l'iPhone **sur le même Wi-Fi** : `npm run dev` affiche aussi une adresse « Network » (ex. `http://192.168.1.20:5173`), à ouvrir dans Safari sur l'iPhone.

## Installer sur l'iPhone

Le mode hors ligne (service worker) demande un site en **HTTPS**. On peut l'héberger gratuitement :

1. `npm run build` → crée le dossier `dist/`.
2. Mettre `dist/` en ligne : GitHub Pages, Netlify ou Vercel (gratuits).
3. Sur l'iPhone, ouvrir l'adresse dans **Safari** → bouton **Partager** → **« Sur l'écran d'accueil »**.

## Organisation du code

```
src/
  data/spe.js, data/expert.js   fiches de cours + questions de quiz (faciles à compléter)
  generators/                   exercices aléatoires
  tools/                        traceur, suites, binomiale, racines + analyseur d'expressions
  pages/                        écrans de l'app
public/                         manifest, service worker, icônes
scripts/make-icons.mjs          régénère les icônes (node scripts/make-icons.mjs)
```

### Ajouter du contenu

- **Une question de quiz** : dans `src/data/spe.js` ou `expert.js`, ajouter `{ q, o: [réponses], a: indice_bonne_réponse, e: explication }` dans le tableau `quiz` du chapitre.
- **Un bloc de cours** : `{ k: 'def' | 'thm' | 'prop' | 'meth' | 'ex' | 'rem', t: 'Titre', c: t\`contenu\` }`.
  Maths entre `$...$` (en ligne) ou `$$...$$` (centré), `**gras**`, listes avec `- `.
- **Un nouveau type d'exercice** : ajouter un objet `{ id, title, chapter, gen() }` dans `src/generators/index.js`.

Quand tu publies une nouvelle version, change `CACHE` dans `public/sw.js` (`maths-tle-v2`…) pour que le téléphone récupère les nouveaux fichiers.
