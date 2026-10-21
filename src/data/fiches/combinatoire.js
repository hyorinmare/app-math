// Fiches méthode — Combinatoire et dénombrement. Même format que suites.js.
const t = String.raw

export const fichesCombinatoire = {
  'comb-choisir': {
    quand: t`« Combien de… ? » : avant tout calcul, il faut savoir quel modèle utiliser.`,
    etapes: [
      t`Se poser deux questions : **l'ordre compte-t-il ?** (un code, un classement : oui ; un groupe, une main de cartes : non) et **peut-on répéter ?**`,
      t`Ordre + répétitions → $p$-uplets : $n^p$.`,
      t`Ordre, sans répétition → arrangements : $\dfrac{n!}{(n - p)!} = n(n-1)\cdots(n-p+1)$.`,
      t`Sans ordre, sans répétition → combinaisons : $\dbinom np$.`,
    ],
    exemple: {
      enonce: t`Combien y a-t-il : 1) de codes PIN à 4 chiffres ? 2) de podiums possibles avec 8 coureurs ? 3) de façons d'élire 3 délégués dans une classe de 30 ?`,
      solution: t`1) L'ordre compte, les chiffres peuvent se répéter : $10^4 = 10\,000$ codes.

2) L'ordre compte (1ᵉʳ, 2ᵉ, 3ᵉ), pas de répétition : $8 \times 7 \times 6 = 336$ podiums.

3) L'ordre ne compte pas (3 délégués équivalents), pas de répétition : $\dbinom{30}{3} = \dfrac{30 \times 29 \times 28}{6} = 4060$ façons.`,
    },
    pieges: [
      t`Le piège classique : utiliser $\binom np$ alors que les rôles sont différents (président, trésorier…), donc que l'ordre compte.`,
    ],
    voir: ['comb-puplets', 'comb-arrangements', 'comb-combinaisons'],
  },

  'comb-puplets': {
    quand: t`Suites ordonnées où l'on peut **répéter** : codes, mots, tirages **avec remise**, résultats de plusieurs lancers.`,
    etapes: [
      t`Compter le nombre de choix $n$ pour chaque position (identique à chaque fois).`,
      t`Compter le nombre de positions $p$.`,
      t`Le nombre de $p$-uplets est $n^p$ (principe multiplicatif).`,
    ],
    exemple: {
      enonce: t`Combien de « mots » de 5 lettres (pas forcément prononçables) peut-on former avec les 26 lettres de l'alphabet ?`,
      solution: t`Chacune des 5 positions peut recevoir n'importe laquelle des 26 lettres, avec répétitions possibles.

Il y a $26^5 = 11\,881\,376$ mots.`,
    },
    pieges: [
      t`C'est $n^p$ et pas $p^n$ : le nombre de **choix** à la puissance le nombre de **positions**.`,
    ],
    voir: ['comb-choisir', 'comb-parties'],
  },

  'comb-arrangements': {
    quand: t`Suites ordonnées **sans répétition** : classements, attribution de postes différents, tirages successifs **sans remise**.`,
    etapes: [
      t`Pour la 1ʳᵉ position, $n$ choix ; pour la 2ᵉ, $n - 1$ ; … pour la $p$-ième, $n - p + 1$.`,
      t`Multiplier : $n(n-1)\cdots(n-p+1) = \dfrac{n!}{(n-p)!}$.`,
    ],
    exemple: {
      enonce: t`Un club de 12 membres élit un président, un vice-président et un trésorier (trois personnes différentes). Combien de bureaux possibles ?`,
      solution: t`Les postes sont différents, donc l'ordre compte, et une personne n'a qu'un poste.

$12$ choix pour le président, puis $11$ pour le vice-président, puis $10$ pour le trésorier : $12 \times 11 \times 10 = 1320$ bureaux.`,
    },
    pieges: [
      t`Ne pas diviser par $p!$ : on ne le fait que si l'ordre ne compte pas.`,
    ],
    voir: ['comb-choisir', 'comb-permutations'],
  },

  'comb-permutations': {
    quand: t`Ranger **tous** les objets dans un ordre : files d'attente, anagrammes, places autour d'une table…`,
    etapes: [
      t`Le nombre de façons d'ordonner $n$ objets distincts est $n! = n \times (n - 1) \times \dots \times 1$.`,
      t`Si certains objets sont identiques (lettres répétées), diviser par la factorielle du nombre de répétitions de chacun.`,
    ],
    exemple: {
      enonce: t`Combien d'anagrammes ont les mots « MATHS » et « ANANAS » ?`,
      solution: t`- MATHS : 5 lettres distinctes, donc $5! = 120$ anagrammes.
- ANANAS : 6 lettres, dont A trois fois et N deux fois. Échanger des lettres identiques ne change pas le mot, donc
$$\frac{6!}{3! \times 2!} = \frac{720}{12} = 60 \text{ anagrammes}$$`,
    },
    pieges: [
      t`$0! = 1$ par convention.`,
    ],
    voir: ['comb-arrangements'],
  },

  'comb-combinaisons': {
    quand: t`On choisit un **groupe** (sans ordre, sans répétition) : une équipe, une main de cartes, un tirage **simultané**.`,
    etapes: [
      t`Identifier $n$ (le nombre total d'objets) et $k$ (la taille du groupe).`,
      t`Le nombre de groupes est $\dbinom nk = \dfrac{n!}{k!\,(n - k)!}$.`,
      t`Calcul rapide : $\dbinom nk = \dfrac{n(n-1)\cdots(n-k+1)}{k!}$ ($k$ facteurs en haut).`,
    ],
    exemple: {
      enonce: t`1) Combien d'équipes de 4 peut-on former dans un groupe de 20 ? 2) Combien de mains de 5 cartes dans un jeu de 32 ?`,
      solution: t`1) $\dbinom{20}{4} = \dfrac{20 \times 19 \times 18 \times 17}{4 \times 3 \times 2 \times 1} = 4845$ équipes.

2) $\dbinom{32}{5} = 201\,376$ mains.`,
    },
    pieges: [
      t`« Tirage simultané » = combinaison ; « tirages successifs » = l'ordre compte.`,
    ],
    voir: ['comb-choisir', 'comb-contraintes', 'comb-binom-calcul'],
  },

  'comb-au-moins': {
    quand: t`« Combien de … contiennent **au moins un** … ? »`,
    etapes: [
      t`Compter le **total**.`,
      t`Compter le contraire : « **aucun** ».`,
      t`Faire la différence : au moins un = total − aucun.`,
    ],
    exemple: {
      enonce: t`Combien de mains de 5 cartes (jeu de 32 cartes, 4 as) contiennent au moins un as ?`,
      solution: t`Total : $\dbinom{32}{5} = 201\,376$.

Aucun as : on choisit les 5 cartes parmi les 28 autres, $\dbinom{28}{5} = 98\,280$.

Au moins un as : $201\,376 - 98\,280 = 103\,096$ mains.`,
    },
    pieges: [
      t`Ne pas faire « 4 choix pour un as, puis $\binom{31}{4}$ pour le reste » : on compterait plusieurs fois les mains à plusieurs as.`,
    ],
    voir: ['comb-contraintes', 'pb-au-moins-un'],
  },

  'comb-contraintes': {
    quand: t`« Combien de mains avec **exactement** 2 as ? », « combien de codes avec exactement un 7 ? » : des conditions sur la composition.`,
    etapes: [
      t`Découper le choix en **étapes indépendantes** : d'abord ce qui est imposé, puis le reste.`,
      t`Compter chaque étape, puis **multiplier** (principe multiplicatif).`,
      t`Si la condition se découpe en cas disjoints (« 2 as **ou** 3 as »), **additionner** les cas.`,
    ],
    exemple: {
      enonce: t`Combien de mains de 5 cartes (jeu de 32) contiennent exactement 2 as ?`,
      solution: t`- On choisit les 2 as parmi les 4 : $\dbinom42 = 6$.
- On choisit les 3 autres cartes parmi les 28 qui ne sont pas des as : $\dbinom{28}{3} = 3276$.

Total : $6 \times 3276 = 19\,656$ mains.`,
    },
    pieges: [
      t`« Exactement 2 as » impose que les 3 autres cartes ne soient **pas** des as : on choisit parmi 28, pas 30.`,
    ],
    voir: ['comb-combinaisons', 'comb-au-moins'],
  },

  'comb-parties': {
    quand: t`Compter les **sous-ensembles** d'un ensemble (de toutes tailles) : garnitures d'une pizza, choix d'options…`,
    etapes: [
      t`Pour chaque élément, deux possibilités : il est dans la partie, ou pas.`,
      t`Un ensemble à $n$ éléments a donc $2^n$ parties (en comptant l'ensemble vide et l'ensemble entier).`,
    ],
    exemple: {
      enonce: t`Une pizzeria propose 8 ingrédients au choix. Combien de pizzas différentes peut-on composer (de 0 à 8 ingrédients) ?`,
      solution: t`Chaque ingrédient est présent ou absent : $2^8 = 256$ pizzas (dont la pizza sans ingrédient).

Sans la pizza vide : $255$.`,
    },
    pieges: [
      t`$2^n$ inclut la partie vide : la retirer si l'énoncé l'exclut.`,
    ],
    voir: ['comb-binom-preuve', 'comb-puplets'],
  },

  'comb-binom-calcul': {
    quand: t`Calculer $\dbinom nk$ à la main ou à la calculatrice.`,
    etapes: [
      t`Formule rapide : $\dbinom nk = \dfrac{n(n-1)\cdots(n-k+1)}{k!}$.`,
      t`Valeurs à connaître : $\dbinom n0 = \dbinom nn = 1$, $\dbinom n1 = n$, $\dbinom n2 = \dfrac{n(n-1)}{2}$.`,
      t`Symétrie pour aller plus vite : $\dbinom{n}{k} = \dbinom{n}{n-k}$.`,
      t`Calculatrice : touche nCr (TI : MATH → PROB ; Casio : OPTN → PROB).`,
    ],
    exemple: {
      enonce: t`Calculer $\dbinom{10}{3}$, $\dbinom72$ et $\dbinom{20}{17}$.`,
      solution: t`- $\dbinom{10}{3} = \dfrac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$
- $\dbinom72 = \dfrac{7 \times 6}{2} = 21$
- $\dbinom{20}{17} = \dbinom{20}{3} = \dfrac{20 \times 19 \times 18}{6} = 1140$`,
    },
    pieges: [
      t`Simplifier avant de multiplier pour éviter les grands nombres.`,
    ],
    voir: ['comb-pascal', 'pb-binom-k'],
  },

  'comb-pascal': {
    quand: t`Calculer une ligne de coefficients binomiaux, ou utiliser $\binom nk + \binom n{k+1} = \binom{n+1}{k+1}$ dans une preuve.`,
    etapes: [
      t`**Relation de Pascal** : $\dbinom nk + \dbinom n{k+1} = \dbinom{n+1}{k+1}$.`,
      t`**Triangle de Pascal** : chaque nombre est la somme des deux nombres au-dessus de lui ; les bords valent 1.`,
      t`**Symétrie** : $\dbinom nk = \dbinom n{n-k}$ (chaque ligne est symétrique).`,
    ],
    exemple: {
      enonce: t`Sachant que la ligne $n = 5$ du triangle est $1, 5, 10, 10, 5, 1$, donner la ligne $n = 6$.`,
      solution: t`On additionne les termes voisins de la ligne 5 :
$$1,\ 1 + 5,\ 5 + 10,\ 10 + 10,\ 10 + 5,\ 5 + 1,\ 1$$
soit $1, 6, 15, 20, 15, 6, 1$. Ce sont les $\binom6k$ pour $k$ de 0 à 6 (et leur somme vaut $2^6 = 64$).`,
    },
    pieges: [
      t`Chaque ligne a $n + 1$ termes (de $k = 0$ à $k = n$).`,
    ],
    voir: ['comb-binom-calcul', 'comb-binom-preuve', 'cx-binome'],
  },

  'comb-binom-preuve': {
    quand: t`« Démontrer que $k\binom nk = n\binom{n-1}{k-1}$ » ou « que $\sum \binom nk = 2^n$ » : une égalité entre coefficients binomiaux.`,
    etapes: [
      t`**Par le calcul** : écrire les deux membres avec des factorielles et simplifier.`,
      t`**Par dénombrement** : trouver une situation qu'on peut compter de **deux façons**. Les deux résultats sont égaux.`,
    ],
    exemple: {
      enonce: t`Démontrer que $k\dbinom nk = n\dbinom{n-1}{k-1}$ (pour $1 \leq k \leq n$) par un dénombrement.`,
      solution: t`On compte les façons de choisir, dans un groupe de $n$ personnes, une **équipe** de $k$ personnes **avec un capitaine** dans l'équipe.

- **1ʳᵉ façon** : on choisit l'équipe, $\binom nk$ façons, puis le capitaine parmi les $k$ membres : $k\binom nk$.
- **2ᵉ façon** : on choisit d'abord le capitaine, $n$ façons, puis ses $k - 1$ coéquipiers parmi les $n - 1$ autres : $n\binom{n-1}{k-1}$.

On a compté la même chose : $k\dbinom nk = n\dbinom{n-1}{k-1}$.`,
    },
    pieges: [
      t`Les deux façons de compter doivent décrire **exactement** le même ensemble.`,
    ],
    voir: ['comb-pascal', 'comb-parties'],
  },
}
