// Fiches méthode — Algorithmique et Python. Même format que suites.js,
// avec en plus exemple.codeEnonce (code affiché dans l'énoncé) et exemple.code (code de la correction).
// Comme String.raw, mais \` devient ` : on peut écrire du code en ligne entre accents graves.
const t = (s, ...v) => String.raw(s, ...v).replaceAll('\\`', '`')

export const fichesPython = {
  'py-fonction': {
    quand: t`« Écrire une fonction Python qui… », ou lire une fonction donnée dans l'énoncé.`,
    etapes: [
      t`Structure : \`def nom(paramètres):\` puis le corps **indenté** (décalé de 4 espaces).`,
      t`\`return\` renvoie le résultat (et arrête la fonction) ; \`print\` ne fait qu'afficher.`,
      t`Syntaxe des calculs : puissance \`**\` (et non ^), multiplication \`*\` toujours écrite, exp et ln via \`from math import exp, log\` (log est le ln).`,
    ],
    exemple: {
      enonce: t`Écrire une fonction \`f\` qui renvoie $x^2 - 3x + 1$, puis une fonction \`signe\` qui renvoie "positif" si $f(x) \geq 0$ et "négatif" sinon. Que renvoie \`f(2)\` ?`,
      solution: t`\`f(2)\` renvoie $4 - 6 + 1 = -1$, donc \`signe(2)\` renvoie "négatif".`,
      code: `def f(x):
    return x**2 - 3*x + 1

def signe(x):
    if f(x) >= 0:
        return "positif"
    else:
        return "négatif"`,
    },
    pieges: [
      t`\`3x\` est une erreur en Python : écrire \`3*x\`.`,
      t`\`x^2\` ne calcule pas un carré en Python : écrire \`x**2\`.`,
      t`Ne pas oublier les deux-points \`:\` après \`def\`, \`if\`, \`else\`, \`for\`, \`while\`.`,
    ],
    voir: ['py-terme', 'py-completer'],
  },

  'py-terme': {
    quand: t`Calculer $u_n$ pour une suite définie par récurrence ($u_{n+1} = f(u_n)$) avec un programme.`,
    etapes: [
      t`Initialiser une variable avec le premier terme : \`u = 2\`.`,
      t`Répéter $n$ fois \`u = f(u)\` avec une boucle \`for i in range(n):\`.`,
      t`Renvoyer \`u\` : c'est $u_n$.`,
    ],
    exemple: {
      enonce: t`$u_0 = 2$ et $u_{n+1} = 0{,}5\,u_n + 3$. Écrire une fonction \`terme(n)\` qui renvoie $u_n$. Que renvoie \`terme(3)\` ?`,
      solution: t`$u_1 = 0{,}5 \times 2 + 3 = 4$, $u_2 = 0{,}5 \times 4 + 3 = 5$, $u_3 = 0{,}5 \times 5 + 3 = 5{,}5$.

\`terme(3)\` renvoie 5.5.`,
      code: `def terme(n):
    u = 2
    for i in range(n):
        u = 0.5 * u + 3
    return u`,
    },
    pieges: [
      t`\`range(n)\` fait exactement $n$ tours (de 0 à $n - 1$) : on obtient bien $u_n$.`,
      t`En Python, la virgule décimale est un **point** : \`0.5\`.`,
    ],
    voir: ['py-seuil', 'py-liste', 'suite-terme-general'],
  },

  'py-seuil': {
    quand: t`« Écrire un algorithme qui détermine le plus petit $n$ tel que $u_n > A$ » : on ne sait pas combien de tours faire, donc boucle \`while\`.`,
    etapes: [
      t`Initialiser \`n = 0\` et \`u\` au premier terme.`,
      t`\`while\` **condition contraire** (on continue tant que le seuil n'est **pas** atteint) : \`while u <= A:\`.`,
      t`Dans la boucle : calculer le terme suivant **et** augmenter \`n\` de 1.`,
      t`Après la boucle, renvoyer \`n\`.`,
    ],
    exemple: {
      enonce: t`$u_0 = 2$ et $u_{n+1} = 0{,}5\,u_n + 3$ (la suite croît vers 6). Écrire une fonction qui renvoie le plus petit $n$ tel que $u_n > 5{,}99$.`,
      solution: t`Le programme renvoie **9**.

Vérification par le calcul : $u_n = 6 - 4 \times 0{,}5^n$, et $u_n > 5{,}99 \iff 0{,}5^n < 0{,}0025 \iff n > \dfrac{\ln 0{,}0025}{\ln 0{,}5} \approx 8{,}6$.`,
      code: `def seuil():
    n = 0
    u = 2
    while u <= 5.99:
        u = 0.5 * u + 3
        n = n + 1
    return n`,
    },
    pieges: [
      t`La condition du \`while\` est le **contraire** de ce qu'on cherche.`,
      t`Si la suite n'atteint jamais le seuil, la boucle ne s'arrête jamais : vérifier d'abord la limite.`,
    ],
    voir: ['suite-seuil', 'ln-seuil', 'py-terme'],
  },

  'py-somme': {
    quand: t`Calculer une somme $\sum$ avec un programme : $1^2 + 2^2 + \dots + n^2$, $u_0 + \dots + u_n$…`,
    etapes: [
      t`Initialiser un **accumulateur** à 0 : \`s = 0\`.`,
      t`Boucle sur les indices : \`for k in range(1, n + 1):\` pour aller de 1 à $n$ inclus.`,
      t`À chaque tour, ajouter le terme : \`s = s + terme\`.`,
      t`Renvoyer \`s\` après la boucle.`,
    ],
    exemple: {
      enonce: t`Écrire une fonction qui renvoie $1^2 + 2^2 + \dots + n^2$. Que renvoie \`somme(10)\` ?`,
      solution: t`\`somme(10)\` renvoie $1 + 4 + 9 + \dots + 100 = 385$.`,
      code: `def somme(n):
    s = 0
    for k in range(1, n + 1):
        s = s + k**2
    return s`,
    },
    pieges: [
      t`\`range(1, n)\` s'arrête à $n - 1$ : pour inclure $n$, écrire \`range(1, n + 1)\`.`,
      t`Le \`return\` doit être **après** la boucle (pas indenté dedans), sinon on renvoie après le 1ᵉʳ tour.`,
    ],
    voir: ['py-terme', 'int-rectangles'],
  },

  'py-liste': {
    quand: t`« Écrire une fonction qui renvoie la liste des $n$ premiers termes », ou lire une liste en compréhension.`,
    etapes: [
      t`Créer une liste avec le premier terme : \`L = [2]\`.`,
      t`Ajouter les termes suivants avec \`L.append(...)\`. \`L[-1]\` est le **dernier** élément de la liste.`,
      t`Liste en compréhension : \`[k**2 for k in range(5)]\` donne \`[0, 1, 4, 9, 16]\`.`,
    ],
    exemple: {
      enonce: t`$u_0 = 2$ et $u_{n+1} = 0{,}5\,u_n + 3$. Écrire une fonction qui renvoie la liste $[u_0, u_1, \dots, u_n]$. Que renvoie \`liste(4)\` ?`,
      solution: t`\`liste(4)\` renvoie \`[2, 4.0, 5.0, 5.5, 5.75]\`.`,
      code: `def liste(n):
    L = [2]
    for i in range(n):
        L.append(0.5 * L[-1] + 3)
    return L`,
    },
    pieges: [
      t`Les indices d'une liste commencent à **0** : \`L[0]\` est $u_0$.`,
      t`La liste $[u_0, \dots, u_n]$ contient $n + 1$ éléments.`,
    ],
    voir: ['py-terme'],
  },

  'py-simulation': {
    quand: t`« Simuler une expérience aléatoire », « estimer une probabilité par une fréquence ».`,
    etapes: [
      t`Importer : \`from random import random, randint\`. \`random()\` donne un réel dans $[0 ; 1[$, \`randint(a, b)\` un entier entre $a$ et $b$ **inclus**.`,
      t`Un succès de probabilité $p$ se simule par \`random() < p\`.`,
      t`Répéter $n$ fois en comptant les succès, puis diviser par $n$ pour obtenir la fréquence.`,
    ],
    exemple: {
      enonce: t`Écrire une fonction qui lance $n$ fois un dé et renvoie la fréquence d'apparition du 6. Que peut-on attendre pour $n = 10\,000$ ?`,
      solution: t`Pour $n$ grand, la fréquence renvoyée est proche de $\frac16 \approx 0{,}167$ : c'est la loi des grands nombres. Chaque exécution donne un résultat un peu différent.`,
      code: `from random import randint

def frequence_six(n):
    c = 0
    for i in range(n):
        if randint(1, 6) == 6:
            c = c + 1
    return c / n`,
    },
    pieges: [
      t`\`randint(1, 6)\` inclut 6 (contrairement à \`range\`).`,
      t`Le test d'égalité s'écrit \`==\`, pas \`=\`.`,
    ],
    voir: ['va-lgn', 'pb-bernoulli'],
  },

  'py-completer': {
    quand: t`« Que renvoie ce programme ? », « compléter les pointillés » : l'énoncé donne un algorithme à comprendre.`,
    etapes: [
      t`Faire un **tableau de suivi** des variables : une colonne par variable, une ligne par tour de boucle.`,
      t`Exécuter « à la main » sur une petite valeur.`,
      t`Repérer ce que calcule le programme, puis répondre (souvent en lien avec une question précédente).`,
    ],
    exemple: {
      enonce: t`Que renvoie \`mystere(4)\` ? Plus généralement, que calcule \`mystere(n)\` ?`,
      codeEnonce: `def mystere(n):
    s = 0
    for k in range(n):
        s = s + 2 * k + 1
    return s`,
      solution: t`Tableau de suivi pour $n = 4$ ($k$ va de 0 à 3) :
$$\def\arraystretch{1.4} \begin{array}{c|cccc} k & 0 & 1 & 2 & 3 \\ \hline \text{terme } 2k + 1 & 1 & 3 & 5 & 7 \\ \hline s & 1 & 4 & 9 & 16 \end{array}$$
\`mystere(4)\` renvoie 16.

Le programme calcule la somme des $n$ premiers nombres impairs, qui vaut $n^2$.`,
    },
    pieges: [
      t`Bien noter les valeurs **après** chaque tour, dans l'ordre des instructions.`,
    ],
    voir: ['py-somme', 'cont-dichotomie'],
  },
}
