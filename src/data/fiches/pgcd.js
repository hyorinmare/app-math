// Fiches méthode — PGCD, Bézout, Gauss, nombres premiers (maths expertes). Même format que suites.js.
const t = String.raw

export const fichesPgcd = {
  'ar-euclide': {
    quand: t`« Calculer $\operatorname{PGCD}(a, b)$ » pour des nombres trop grands pour lister les diviseurs.`,
    etapes: [
      t`Diviser le plus grand par le plus petit : $a = bq + r$.`,
      t`Recommencer avec $b$ et $r$ : $\operatorname{PGCD}(a, b) = \operatorname{PGCD}(b, r)$.`,
      t`S'arrêter quand le reste est nul : le PGCD est le **dernier reste non nul**.`,
    ],
    exemple: {
      enonce: t`Calculer $\operatorname{PGCD}(1071, 462)$.`,
      solution: t`- $1071 = 2 \times 462 + 147$
- $462 = 3 \times 147 + 21$
- $147 = 7 \times 21 + 0$

Le dernier reste non nul est 21 : $\operatorname{PGCD}(1071, 462) = 21$.`,
    },
    pieges: [
      t`Le PGCD est le dernier reste **non nul**, pas le dernier quotient.`,
    ],
    voir: ['ar-bezout', 'ar-pgcd-n'],
  },

  'ar-pgcd-n': {
    quand: t`« Déterminer les valeurs possibles de $\operatorname{PGCD}(n + 2, 2n + 7)$ selon $n$ ».`,
    etapes: [
      t`Poser $d = \operatorname{PGCD}(a, b)$ : $d$ divise $a$ et $b$, donc toute combinaison $au + bv$.`,
      t`Choisir la combinaison qui élimine $n$ : $d$ divise alors une **constante**.`,
      t`Les valeurs possibles de $d$ sont les diviseurs de cette constante. Chercher pour quels $n$ chacune est atteinte (avec des congruences).`,
    ],
    exemple: {
      enonce: t`Soit $n$ un entier naturel et $d = \operatorname{PGCD}(n + 2, 2n + 7)$. Quelles sont les valeurs possibles de $d$ ?`,
      solution: t`$d$ divise $n + 2$ et $2n + 7$, donc il divise $(2n + 7) - 2(n + 2) = 3$. Donc $d = 1$ ou $d = 3$.

$d = 3 \iff 3 \mid n + 2$ (et alors $2n + 7 = 2(n + 2) + 3$ est aussi multiple de 3) $\iff n \equiv 1 \pmod 3$.

Donc $d = 3$ si $n \equiv 1 \pmod 3$, et $d = 1$ sinon. (Exemple : $n = 1$ donne $\operatorname{PGCD}(3, 9) = 3$.)`,
    },
    pieges: [
      t`$d \mid 3$ donne seulement les valeurs **possibles** : il faut vérifier quand chacune est atteinte.`,
    ],
    voir: ['ar-combinaison', 'ar-euclide'],
  },

  'ar-premiers-entre-eux': {
    quand: t`« Montrer que $a$ et $b$ sont premiers entre eux » (souvent des expressions en $n$).`,
    etapes: [
      t`**Théorème de Bézout** : $a$ et $b$ sont premiers entre eux si et seulement s'il existe des entiers $u$, $v$ tels que $au + bv = 1$.`,
      t`Chercher une combinaison de $a$ et $b$ qui vaut **1** (éliminer $n$).`,
      t`Pour des nombres donnés : calculer le PGCD avec l'algorithme d'Euclide.`,
    ],
    exemple: {
      enonce: t`Montrer que pour tout entier $n$, $2n + 1$ et $3n + 2$ sont premiers entre eux.`,
      solution: t`$$\begin{aligned} 2(3n + 2) - 3(2n + 1) &= 6n + 4 - 6n - 3 \\ &= 1 \end{aligned}$$
Avec $u = -3$ et $v = 2$, on a $(2n + 1)u + (3n + 2)v = 1$.

D'après le théorème de Bézout, $2n + 1$ et $3n + 2$ sont premiers entre eux.`,
    },
    pieges: [
      t`$au + bv = d$ avec $d > 1$ ne prouve **pas** que $\operatorname{PGCD}(a, b) = d$ (seulement qu'il divise $d$).`,
    ],
    voir: ['ar-bezout', 'ar-gauss'],
  },

  'ar-bezout': {
    quand: t`« Trouver un couple d'entiers $(u, v)$ tel que $17u + 5v = 1$ » : des coefficients de Bézout.`,
    etapes: [
      t`Faire l'algorithme d'Euclide en écrivant chaque division.`,
      t`Exprimer chaque reste à partir des lignes : $r = a - bq$.`,
      t`**Remonter** à partir du dernier reste non nul, en remplaçant les restes un par un, jusqu'à n'avoir que $a$ et $b$.`,
      t`Vérifier le résultat.`,
    ],
    exemple: {
      enonce: t`Déterminer des entiers $u$ et $v$ tels que $17u + 5v = 1$.`,
      solution: t`Algorithme d'Euclide :
- $17 = 3 \times 5 + 2$, donc $2 = 17 - 3 \times 5$
- $5 = 2 \times 2 + 1$, donc $1 = 5 - 2 \times 2$

On remonte :
$$\begin{aligned} 1 &= 5 - 2 \times (17 - 3 \times 5) \\ &= 7 \times 5 - 2 \times 17 \end{aligned}$$
Donc $u = -2$ et $v = 7$. Vérification : $17 \times (-2) + 5 \times 7 = -34 + 35 = 1$.`,
    },
    pieges: [
      t`Ne pas développer les nombres pendant la remontée : garder $17$ et $5$ comme « lettres ».`,
    ],
    voir: ['ar-euclide', 'ar-diophantienne', 'ar-inverse-mod'],
  },

  'ar-diophantienne': {
    quand: t`« Résoudre dans $\mathbb Z^2$ l'équation $17x + 5y = 1$ » (ou $= c$).`,
    etapes: [
      t`Des solutions existent si et seulement si $\operatorname{PGCD}(a, b)$ divise $c$.`,
      t`Trouver une **solution particulière** $(x_0, y_0)$ (évidente, ou par Bézout).`,
      t`Soustraire : $a(x - x_0) = -b(y - y_0)$.`,
      t`Appliquer le **théorème de Gauss** pour obtenir $x = x_0 + bk$, puis en déduire $y$. Vérifier.`,
    ],
    exemple: {
      enonce: t`Résoudre dans $\mathbb Z^2$ l'équation $17x + 5y = 1$.`,
      solution: t`$(-2 ; 7)$ est une solution particulière (Bézout). Si $(x ; y)$ est solution :
$$\begin{aligned} & 17x + 5y = 17 \times (-2) + 5 \times 7 \\ \iff \; & 17(x + 2) = -5(y - 7) \end{aligned}$$
Donc 5 divise $17(x + 2)$. Comme 5 et 17 sont premiers entre eux, d'après Gauss, 5 divise $x + 2$ : $x = -2 + 5k$, $k \in \mathbb Z$.

En remplaçant : $17 \times 5k = -5(y - 7)$, donc $y = 7 - 17k$.

Réciproquement, $17(-2 + 5k) + 5(7 - 17k) = 1$ ✓.

$\mathcal S = \{(-2 + 5k ; 7 - 17k),\ k \in \mathbb Z\}$.`,
    },
    pieges: [
      t`Ne pas oublier la **réciproque** (vérifier que ces couples sont bien solutions).`,
      t`Pour $17x + 5y = 3$, une solution particulière est $3 \times (-2 ; 7) = (-6 ; 21)$.`,
    ],
    voir: ['ar-bezout', 'ar-gauss'],
  },

  'ar-gauss': {
    quand: t`$a$ divise un produit $bc$ et on veut en déduire que $a$ divise $c$.`,
    etapes: [
      t`**Théorème de Gauss** : si $a \mid bc$ et $\operatorname{PGCD}(a, b) = 1$, alors $a \mid c$.`,
      t`Vérifier (et écrire) que $a$ et $b$ sont premiers entre eux.`,
      t`**Corollaire** : si $a \mid n$, $b \mid n$ et $a$, $b$ premiers entre eux, alors $ab \mid n$.`,
    ],
    exemple: {
      enonce: t`Résoudre dans $\mathbb Z^2$ l'équation $5x = 7y$.`,
      solution: t`7 divise $5x$, et 7 et 5 sont premiers entre eux. D'après le théorème de Gauss, 7 divise $x$ : $x = 7k$ avec $k \in \mathbb Z$.

Alors $35k = 7y$, donc $y = 5k$.

Réciproquement, $5 \times 7k = 7 \times 5k$ ✓. $\mathcal S = \{(7k ; 5k),\ k \in \mathbb Z\}$.`,
    },
    pieges: [
      t`Sans « premiers entre eux », c'est faux : $4 \mid 2 \times 6$ mais $4 \nmid 6$.`,
    ],
    voir: ['ar-diophantienne', 'ar-premiers-entre-eux'],
  },

  'ar-inverse-mod': {
    quand: t`Trouver $u$ tel que $au \equiv 1 \pmod n$ : pour résoudre $ax \equiv b$, ou pour déchiffrer un message.`,
    etapes: [
      t`Un inverse existe si et seulement si $\operatorname{PGCD}(a, n) = 1$.`,
      t`**Petit $n$** : tester les multiples de $a$ jusqu'à trouver un reste égal à 1.`,
      t`**Méthode générale** : trouver $u$, $v$ avec $au + nv = 1$ (Bézout) ; alors $au \equiv 1 \pmod n$.`,
      t`Ramener $u$ entre 0 et $n - 1$.`,
    ],
    exemple: {
      enonce: t`Déterminer un inverse de 7 modulo 26.`,
      solution: t`Euclide : $26 = 3 \times 7 + 5$, $7 = 1 \times 5 + 2$, $5 = 2 \times 2 + 1$.

On remonte :
$$\begin{aligned} 1 &= 5 - 2 \times 2 = 5 - 2(7 - 5) \\ &= 3 \times 5 - 2 \times 7 \\ &= 3(26 - 3 \times 7) - 2 \times 7 \\ &= 3 \times 26 - 11 \times 7 \end{aligned}$$
Donc $-11 \times 7 \equiv 1 \pmod{26}$, et $-11 \equiv 15$. L'inverse est **15** (vérification : $7 \times 15 = 105 = 4 \times 26 + 1$).`,
    },
    pieges: [
      t`Donner un inverse **positif** : $-11$ et $15$ conviennent, mais on attend souvent $15$.`,
    ],
    voir: ['ar-bezout', 'ar-equation-mod', 'ar-chiffrement'],
  },

  'ar-chiffrement': {
    quand: t`Chiffrement affine : chaque lettre (A = 0, …, Z = 25) est codée par $y \equiv ax + b \pmod{26}$.`,
    etapes: [
      t`**Chiffrer** : remplacer la lettre par son rang $x$, calculer $ax + b$ modulo 26, reconvertir en lettre.`,
      t`**Déchiffrer** : isoler $x$. Avec $u$ inverse de $a$ modulo 26 : $x \equiv u(y - b) \pmod{26}$.`,
      t`Le chiffrement n'est réversible que si $a$ est premier avec 26.`,
    ],
    exemple: {
      enonce: t`On chiffre avec $y \equiv 7x + 3 \pmod{26}$. Chiffrer la lettre M, puis donner la formule de déchiffrement et l'appliquer.`,
      solution: t`M a le rang 12 : $7 \times 12 + 3 = 87 = 3 \times 26 + 9$, donc $y = 9$ : M devient **J**.

L'inverse de 7 modulo 26 est 15. De $y \equiv 7x + 3$, on tire $15(y - 3) \equiv 15 \times 7x \equiv x$, donc $x \equiv 15(y - 3) \pmod{26}$.

Pour J ($y = 9$) : $15 \times 6 = 90 = 3 \times 26 + 12$, on retrouve 12, c'est-à-dire **M** ✓.`,
    },
    pieges: [
      t`Les lettres sont numérotées à partir de **0** (A = 0).`,
    ],
    voir: ['ar-inverse-mod', 'ar-equation-mod'],
  },

  'ar-premier': {
    quand: t`« L'entier $N$ est-il premier ? »`,
    etapes: [
      t`Si $N$ n'est pas premier, il a un diviseur premier $p \leq \sqrt N$.`,
      t`Calculer $\sqrt N$ et tester la divisibilité par tous les nombres premiers inférieurs ou égaux.`,
      t`Aucun ne divise $N$ : $N$ est premier. Sinon, on a trouvé un diviseur.`,
    ],
    exemple: {
      enonce: t`211 est-il premier ? Et 437 ?`,
      solution: t`- $\sqrt{211} \approx 14{,}5$. 211 n'est divisible ni par 2, 3, 5, 7, 11, ni par 13 : **211 est premier**.
- $\sqrt{437} \approx 20{,}9$. On teste 2, 3, 5, 7, 11, 13, 17 (non), puis 19 : $437 = 19 \times 23$. **437 n'est pas premier**.`,
    },
    pieges: [
      t`Inutile de tester au-delà de $\sqrt N$, mais il faut tester **tous** les premiers jusque-là.`,
    ],
    voir: ['ar-decomposition'],
  },

  'ar-decomposition': {
    quand: t`Décomposer un entier en facteurs premiers, compter ses diviseurs, trouver un PGCD, ou rendre un nombre carré parfait.`,
    etapes: [
      t`Diviser successivement par 2, 3, 5, 7… tant que c'est possible.`,
      t`Écrire $N = p_1^{\alpha_1} \times \dots \times p_k^{\alpha_k}$ (cette décomposition est unique).`,
      t`Nombre de diviseurs : $(\alpha_1 + 1)(\alpha_2 + 1)\cdots(\alpha_k + 1)$.`,
      t`$N$ est un carré parfait si et seulement si tous les exposants sont **pairs**.`,
    ],
    exemple: {
      enonce: t`Décomposer 360 en facteurs premiers. Combien a-t-il de diviseurs ? Quel est le plus petit entier $k$ tel que $360k$ soit un carré parfait ?`,
      solution: t`$360 = 2^3 \times 3^2 \times 5$.

Nombre de diviseurs : $(3 + 1)(2 + 1)(1 + 1) = 24$.

Pour un carré, il faut des exposants pairs : il manque un 2 et un 5. Donc $k = 2 \times 5 = 10$ ($3600 = 60^2$).`,
    },
    pieges: [
      t`Ne pas oublier l'exposant 1 (ici pour 5) dans le calcul du nombre de diviseurs.`,
    ],
    voir: ['ar-premier', 'ar-diviseurs'],
  },

  'ar-fermat': {
    quand: t`Modulo un nombre **premier** $p$ : grande puissance à réduire, ou divisibilité du type « $n^7 - n$ divisible par 7 ».`,
    etapes: [
      t`**Petit théorème de Fermat** : si $p$ est premier et $p \nmid a$, alors $a^{p-1} \equiv 1 \pmod p$.`,
      t`Forme générale (pour tout entier $a$) : $a^p \equiv a \pmod p$.`,
      t`Pour une grande puissance : diviser l'exposant par $p - 1$ et garder le reste.`,
    ],
    exemple: {
      enonce: t`1) Déterminer le reste de $3^{100}$ modulo 13. 2) Montrer que pour tout entier $n$, $n^7 - n$ est divisible par 7.`,
      solution: t`1) 13 est premier et ne divise pas 3, donc $3^{12} \equiv 1 \pmod{13}$. Or $100 = 12 \times 8 + 4$, donc
$$3^{100} \equiv 3^4 = 81 = 6 \times 13 + 3 \equiv 3 \pmod{13}$$
2) 7 est premier : d'après le petit théorème de Fermat, $n^7 \equiv n \pmod 7$ pour tout entier $n$, donc $7 \mid n^7 - n$.`,
    },
    pieges: [
      t`$p$ doit être **premier** : Fermat ne s'applique pas modulo 12 ou 26.`,
    ],
    voir: ['ar-reste-puissance', 'ar-premier'],
  },
}
