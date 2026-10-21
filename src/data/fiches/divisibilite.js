// Fiches méthode — Divisibilité et congruences (maths expertes). Même format que suites.js.
const t = String.raw

export const fichesDivisibilite = {
  'ar-divisibilite': {
    quand: t`« Montrer que pour tout entier $n$, $6$ divise $n^3 - n$ » : une divisibilité qui doit être vraie pour tous les entiers.`,
    etapes: [
      t`Traduire : $a \mid b$ signifie qu'il existe un entier $k$ tel que $b = ka$.`,
      t`Essayer de **factoriser** l'expression (souvent en produit d'entiers consécutifs).`,
      t`Sinon : récurrence, congruences, ou disjonction de cas (tableau de restes).`,
      t`Pour une divisibilité par un produit $ab$ avec $a$, $b$ premiers entre eux : montrer séparément $a \mid N$ et $b \mid N$.`,
    ],
    exemple: {
      enonce: t`Montrer que pour tout entier $n$, $n^3 - n$ est divisible par 6.`,
      solution: t`$n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)$ : c'est le produit de trois entiers consécutifs.

Parmi eux, l'un est pair, donc $2 \mid n^3 - n$ ; et l'un est multiple de 3, donc $3 \mid n^3 - n$.

Comme 2 et 3 sont premiers entre eux, $6 \mid n^3 - n$.`,
    },
    pieges: [
      t`$2 \mid N$ et $4 \mid N$ ne donnent pas $8 \mid N$ : il faut des diviseurs **premiers entre eux**.`,
    ],
    voir: ['ar-tableau', 'suite-rec-divisibilite', 'ar-gauss'],
  },

  'ar-diviseurs': {
    quand: t`« Déterminer tous les diviseurs de $n$ », ou résoudre une équation du type $xy = n$ ou $x^2 - y^2 = n$ dans les entiers.`,
    etapes: [
      t`Pour lister les diviseurs : tester les entiers $d$ de 1 à $\sqrt n$, et à chaque diviseur $d$ trouvé, noter aussi $\frac nd$.`,
      t`Pour une équation : **factoriser** le membre de gauche pour obtenir un produit égal à $n$.`,
      t`Chaque facteur est alors un diviseur de $n$ : tester toutes les décompositions possibles, en tenant compte des contraintes (signe, parité, ordre).`,
    ],
    exemple: {
      enonce: t`Résoudre dans $\mathbb N$ l'équation $x^2 - y^2 = 15$.`,
      solution: t`$(x - y)(x + y) = 15$, avec $0 \leq x - y < x + y$ (car $x + y > 0$ et $y \geq 0$).

Les décompositions de 15 sont $1 \times 15$ et $3 \times 5$ :
- $x - y = 1$ et $x + y = 15$ : $x = 8$, $y = 7$.
- $x - y = 3$ et $x + y = 5$ : $x = 4$, $y = 1$.

$\mathcal S = \{(8 ; 7), (4 ; 1)\}$. Vérification : $64 - 49 = 15$ et $16 - 1 = 15$.`,
    },
    pieges: [
      t`Dans $\mathbb Z$, il faut aussi considérer les diviseurs **négatifs**.`,
    ],
    voir: ['ar-combinaison', 'ar-decomposition'],
  },

  'ar-combinaison': {
    quand: t`« Déterminer les entiers $n$ tels que $n + 1$ divise $n + 5$ » : un diviseur qui dépend de $n$.`,
    etapes: [
      t`Propriété : si $d \mid a$ et $d \mid b$, alors $d \mid au + bv$ pour tous entiers $u$, $v$.`,
      t`Choisir la combinaison qui **élimine $n$** : ici $(n + 5) - (n + 1) = 4$.`,
      t`$d$ divise donc une constante : lister ses diviseurs, puis **vérifier** chaque candidat.`,
    ],
    exemple: {
      enonce: t`Déterminer les entiers naturels $n$ tels que $n + 1$ divise $n + 5$.`,
      solution: t`$n + 1$ divise $n + 1$ et $n + 5$, donc il divise leur différence : $n + 1 \mid 4$.

Comme $n + 1 \geq 1$ : $n + 1 \in \{1 ; 2 ; 4\}$, soit $n \in \{0 ; 1 ; 3\}$.

Vérification : $1 \mid 5$, $2 \mid 6$, $4 \mid 8$ ✓. $\mathcal S = \{0 ; 1 ; 3\}$.`,
    },
    pieges: [
      t`On obtient une condition **nécessaire** : il faut vérifier les candidats.`,
    ],
    voir: ['ar-pgcd-n', 'ar-diviseurs'],
  },

  'ar-division': {
    quand: t`« Effectuer la division euclidienne de $a$ par $b$ », en particulier quand $a$ est négatif.`,
    etapes: [
      t`Trouver $q$ et $r$ tels que $a = bq + r$ avec $0 \leq r < b$.`,
      t`$q$ est le plus grand entier tel que $bq \leq a$ (pour $a < 0$, $q$ est négatif).`,
      t`Vérifier que le reste est **positif** et **strictement inférieur** à $b$.`,
    ],
    exemple: {
      enonce: t`Effectuer la division euclidienne de $2026$ par $7$, puis de $-17$ par $5$.`,
      solution: t`- $7 \times 289 = 2023$, donc $2026 = 7 \times 289 + 3$ : quotient 289, reste 3.
- $5 \times (-4) = -20 \leq -17$, donc $-17 = 5 \times (-4) + 3$ : quotient $-4$, reste 3.`,
    },
    pieges: [
      t`$-17 = 5 \times (-3) - 2$ n'est **pas** la division euclidienne : le reste doit être positif.`,
    ],
    voir: ['ar-congruence'],
  },

  'ar-congruence': {
    quand: t`Calculer un reste sans faire le calcul en entier, ou simplifier une expression modulo $n$.`,
    etapes: [
      t`Remplacer chaque nombre par un nombre **congru plus simple** (son reste, ou un petit négatif : $23 \equiv -1 \pmod 8$).`,
      t`Les congruences sont compatibles avec $+$, $-$, $\times$ et les puissances.`,
      t`À la fin, donner un reste entre 0 et $n - 1$.`,
    ],
    exemple: {
      enonce: t`Déterminer le reste de la division de $17 \times 23 + 45$ par 8.`,
      solution: t`Modulo 8 : $17 \equiv 1$, $23 \equiv -1$ et $45 \equiv 5$. Donc
$$17 \times 23 + 45 \equiv 1 \times (-1) + 5 = 4 \pmod 8$$
Le reste est 4. (Vérification : $17 \times 23 + 45 = 436 = 8 \times 54 + 4$.)`,
    },
    pieges: [
      t`On ne peut **pas** diviser une congruence par un nombre quelconque (voir l'inverse modulo $n$).`,
    ],
    voir: ['ar-reste-puissance', 'ar-division'],
  },

  'ar-reste-puissance': {
    quand: t`« Déterminer le reste de $2^{2026}$ dans la division par 7 » : une grande puissance.`,
    etapes: [
      t`Calculer les premières puissances modulo $n$ jusqu'à trouver une puissance congrue à **1** : $a^p \equiv 1$.`,
      t`Division euclidienne de l'exposant par $p$ : $N = pq + r$.`,
      t`Alors $a^N = (a^p)^q \times a^r \equiv 1^q \times a^r = a^r$.`,
      t`Si $n$ est premier, le petit théorème de Fermat donne directement $a^{n-1} \equiv 1$.`,
    ],
    exemple: {
      enonce: t`Déterminer le reste de $2^{2026}$ dans la division par 7.`,
      solution: t`$2^1 \equiv 2$, $2^2 \equiv 4$, $2^3 = 8 \equiv 1 \pmod 7$.

$2026 = 3 \times 675 + 1$, donc
$$2^{2026} = \left(2^3\right)^{675} \times 2 \equiv 1^{675} \times 2 = 2 \pmod 7$$
Le reste est 2.`,
    },
    pieges: [
      t`C'est le **reste** de l'exposant dans la division par la période qui compte.`,
    ],
    voir: ['ar-fermat', 'ar-dernier-chiffre', 'cx-puissances-i'],
  },

  'ar-tableau': {
    quand: t`« Montrer que pour tout $n$, $3$ divise $n(n^2 + 2)$ », ou « quels sont les restes possibles de $n^2$ modulo 5 ? ».`,
    etapes: [
      t`Faire une ligne par reste possible de $n$ modulo $m$ (de 0 à $m - 1$).`,
      t`Calculer l'expression modulo $m$ dans chaque cas.`,
      t`Conclure sur l'ensemble des cas (c'est une disjonction de cas).`,
    ],
    exemple: {
      enonce: t`Montrer que pour tout entier $n$, $n(n^2 + 2)$ est divisible par 3.`,
      solution: t`On étudie les restes modulo 3 :
$$\def\arraystretch{1.4} \begin{array}{c|ccc} n \equiv & 0 & 1 & 2 \\ \hline n^2 + 2 \equiv & 2 & 0 & 0 \\ \hline n(n^2 + 2) \equiv & 0 & 0 & 0 \end{array}$$
(pour $n \equiv 2$ : $n^2 + 2 \equiv 4 + 2 = 6 \equiv 0$).

Dans tous les cas, $n(n^2 + 2) \equiv 0 \pmod 3$.`,
    },
    pieges: [
      t`Il faut **tous** les restes, de 0 à $m - 1$.`,
    ],
    voir: ['rai-cas', 'ar-divisibilite'],
  },

  'ar-equation-mod': {
    quand: t`Résoudre $3x \equiv 4 \pmod 7$ : une équation de congruence.`,
    etapes: [
      t`**Petit modulo** : tester toutes les valeurs de $x$ de 0 à $n - 1$ (tableau).`,
      t`**Méthode générale** : trouver un inverse $u$ de 3 modulo 7 ($3u \equiv 1$), puis multiplier les deux membres par $u$.`,
      t`Donner les solutions sous la forme $x \equiv r \pmod n$, c'est-à-dire $x = r + kn$.`,
    ],
    exemple: {
      enonce: t`Résoudre dans $\mathbb Z$ l'équation $3x \equiv 4 \pmod 7$.`,
      solution: t`$3 \times 5 = 15 \equiv 1 \pmod 7$ : 5 est un inverse de 3 modulo 7.

En multipliant par 5 : $15x \equiv 20 \pmod 7$, soit $x \equiv 6 \pmod 7$.

Les solutions sont les entiers $x = 6 + 7k$, $k \in \mathbb Z$. (Vérification : $3 \times 6 = 18 \equiv 4$.)`,
    },
    pieges: [
      t`On ne « divise » pas par 3 : on multiplie par son inverse modulo 7.`,
    ],
    voir: ['ar-inverse-mod', 'ar-congruence'],
  },

  'ar-dernier-chiffre': {
    quand: t`« Quel est le chiffre des unités de $7^{2026}$ ? »`,
    etapes: [
      t`Le chiffre des unités d'un entier est son reste modulo **10**.`,
      t`Chercher le cycle des puissances modulo 10.`,
      t`Utiliser le reste de l'exposant dans la division par la longueur du cycle.`,
    ],
    exemple: {
      enonce: t`Quel est le chiffre des unités de $7^{2026}$ ?`,
      solution: t`Modulo 10 : $7^1 \equiv 7$, $7^2 = 49 \equiv 9$, $7^3 \equiv 63 \equiv 3$, $7^4 \equiv 21 \equiv 1$.

$2026 = 4 \times 506 + 2$, donc $7^{2026} \equiv 7^2 \equiv 9 \pmod{10}$.

Le chiffre des unités est **9**.`,
    },
    pieges: [
      t`Pour les deux derniers chiffres, travailler modulo 100.`,
    ],
    voir: ['ar-reste-puissance'],
  },

  'ar-critere': {
    quand: t`« Démontrer le critère de divisibilité par 9 (ou 11) » ou l'utiliser.`,
    etapes: [
      t`Écrire le nombre en base 10 : $N = a_k10^k + \dots + a_1 \times 10 + a_0$.`,
      t`Trouver la congruence de 10 : $10 \equiv 1 \pmod 9$ ; $10 \equiv -1 \pmod{11}$.`,
      t`En déduire $N$ modulo 9 (somme des chiffres) ou modulo 11 (somme alternée des chiffres).`,
    ],
    exemple: {
      enonce: t`Démontrer qu'un entier est divisible par 9 si et seulement si la somme de ses chiffres l'est. $123\,456\,789$ est-il divisible par 9 ?`,
      solution: t`$10 \equiv 1 \pmod 9$, donc $10^k \equiv 1$ pour tout $k$. Ainsi
$$N = \sum a_k 10^k \equiv \sum a_k \pmod 9$$
$N$ et la somme de ses chiffres ont le même reste modulo 9 : l'un est divisible par 9 si et seulement si l'autre l'est.

Pour $123\,456\,789$ : $1 + 2 + \dots + 9 = 45$, divisible par 9. Donc $123\,456\,789$ est divisible par 9.`,
    },
    pieges: [
      t`Pour 11, c'est la somme **alternée** : $a_0 - a_1 + a_2 - \dots$`,
    ],
    voir: ['ar-congruence'],
  },
}
