// Fiches méthode — Matrices (maths expertes). Même format que suites.js.
const t = String.raw

export const fichesMatrices = {
  'mat-produit': {
    quand: t`Calculer un produit $AB$ de deux matrices.`,
    etapes: [
      t`Vérifier les tailles : $(n \times p) \times (p \times q)$ donne une matrice $n \times q$. Le nombre de **colonnes** de $A$ doit être égal au nombre de **lignes** de $B$.`,
      t`Le coefficient ligne $i$, colonne $j$ de $AB$ s'obtient avec la ligne $i$ de $A$ et la colonne $j$ de $B$ : on multiplie terme à terme et on additionne.`,
      t`En général $AB \neq BA$ : l'ordre compte.`,
    ],
    exemple: {
      enonce: t`$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ et $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. Calculer $AB$ et $BA$.`,
      solution: t`Par exemple, le coefficient ligne 1, colonne 1 de $AB$ vaut $1 \times 0 + 2 \times 1 = 2$. De même pour les autres :
$$AB = \begin{pmatrix} 0 + 2 & 1 + 0 \\ 0 + 4 & 3 + 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$$
$$BA = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$$
On a $AB \neq BA$.`,
    },
    pieges: [
      t`On ne multiplie **pas** case par case : c'est « ligne × colonne ».`,
    ],
    voir: ['mat-traduire', 'mat-puissance-rec'],
  },

  'mat-traduire': {
    quand: t`Un système d'équations ou une situation d'évolution (populations, stocks) à écrire sous forme matricielle.`,
    etapes: [
      t`**Système** : les coefficients forment la matrice $A$, les inconnues le vecteur colonne $X$, les seconds membres $B$ : $AX = B$.`,
      t`**Évolution** : $U_n = \begin{pmatrix} a_n \\ b_n \end{pmatrix}$. La ligne 1 de la matrice contient les coefficients de $a_{n+1}$, la ligne 2 ceux de $b_{n+1}$.`,
      t`Vérifier en refaisant le produit.`,
    ],
    exemple: {
      enonce: t`1) Écrire le système $2x + 3y = 7$, $x - y = 1$ sous forme matricielle. 2) Même question pour $a_{n+1} = 0{,}8a_n + 0{,}3b_n$ et $b_{n+1} = 0{,}2a_n + 0{,}7b_n$.`,
      solution: t`1) $\begin{pmatrix} 2 & 3 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 7 \\ 1 \end{pmatrix}$.

2) $U_{n+1} = MU_n$ avec $U_n = \begin{pmatrix} a_n \\ b_n \end{pmatrix}$ et $M = \begin{pmatrix} 0{,}8 & 0{,}3 \\ 0{,}2 & 0{,}7 \end{pmatrix}$.`,
    },
    pieges: [
      t`Respecter l'ordre des inconnues dans **toutes** les lignes.`,
    ],
    voir: ['mat-systeme', 'mat-suite'],
  },

  'mat-inverse-2x2': {
    quand: t`« Montrer que la matrice $2 \times 2$ est inversible et calculer son inverse ».`,
    etapes: [
      t`Calculer $\det A = ad - bc$ pour $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$.`,
      t`$A$ est inversible si et seulement si $ad - bc \neq 0$.`,
      t`Alors $A^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ : on échange $a$ et $d$, on change le signe de $b$ et $c$.`,
    ],
    exemple: {
      enonce: t`Montrer que $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$ est inversible et calculer $A^{-1}$.`,
      solution: t`$\det A = 2 \times 3 - 1 \times 5 = 1 \neq 0$, donc $A$ est inversible et
$$A^{-1} = \frac11\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$$
Vérification : $AA^{-1} = \begin{pmatrix} 6 - 5 & -2 + 2 \\ 15 - 15 & -5 + 6 \end{pmatrix} = I_2$ ✓.`,
    },
    pieges: [
      t`Ne pas oublier le facteur $\dfrac{1}{ad - bc}$.`,
    ],
    voir: ['mat-systeme', 'mat-inverse-verif'],
  },

  'mat-inverse-verif': {
    quand: t`« Montrer que $B$ est l'inverse de $A$ » (souvent en $3 \times 3$, avec $B$ donnée), ou « montrer que $A$ est inversible ».`,
    etapes: [
      t`Calculer le produit $AB$ (à la main ou à la calculatrice).`,
      t`Si $AB = I_n$, alors $A$ est inversible et $A^{-1} = B$ (pour des matrices carrées, un seul produit suffit).`,
      t`Si on n'a pas $B$ : en $3 \times 3$, utiliser la calculatrice, ou une relation polynomiale (voir « relation $A^2 = aA + bI$ »).`,
    ],
    exemple: {
      enonce: t`$A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ et $B = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}$. Montrer que $B = A^{-1}$.`,
      solution: t`On calcule $AB$ :
- ligne 1 : $(1 ; -1 + 1 ; 1 - 1) = (1 ; 0 ; 0)$
- ligne 2 : $(0 ; 1 ; -1 + 1) = (0 ; 1 ; 0)$
- ligne 3 : $(0 ; 0 ; 1)$

Donc $AB = I_3$ : $A$ est inversible et $A^{-1} = B$.`,
    },
    pieges: [
      t`$I_3$ a des 1 sur la diagonale et des 0 partout ailleurs.`,
    ],
    voir: ['mat-inverse-2x2', 'mat-relation'],
  },

  'mat-systeme': {
    quand: t`Résoudre un système linéaire à l'aide d'une matrice inverse.`,
    etapes: [
      t`Écrire le système sous la forme $AX = B$.`,
      t`Montrer que $A$ est inversible et calculer $A^{-1}$.`,
      t`Multiplier **à gauche** par $A^{-1}$ : $X = A^{-1}B$. Le système a une unique solution.`,
    ],
    exemple: {
      enonce: t`Résoudre le système $2x + y = 4$, $5x + 3y = 11$.`,
      solution: t`Le système s'écrit $AX = B$ avec $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$ et $B = \begin{pmatrix} 4 \\ 11 \end{pmatrix}$.

$A$ est inversible avec $A^{-1} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$, donc
$$X = A^{-1}B = \begin{pmatrix} 12 - 11 \\ -20 + 22 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$$
La solution est $x = 1$, $y = 2$.`,
    },
    pieges: [
      t`$X = A^{-1}B$ et **non** $BA^{-1}$ (qui n'a d'ailleurs pas de sens ici).`,
    ],
    voir: ['mat-traduire', 'mat-inverse-2x2'],
  },

  'mat-relation': {
    quand: t`« Montrer que $A^2 = aA + bI$ », puis « en déduire que $A$ est inversible et donner $A^{-1}$ ».`,
    etapes: [
      t`Calculer $A^2$ et écrire $aA + bI$ avec $a$ et $b$ inconnus. Identifier les coefficients.`,
      t`Réécrire la relation sous la forme $A \times (\text{quelque chose}) = I$ : par exemple $A^2 - aA = bI$ donne $A \times \dfrac{A - aI}{b} = I$ (si $b \neq 0$).`,
      t`Conclure : $A^{-1} = \dfrac{1}{b}(A - aI)$.`,
    ],
    exemple: {
      enonce: t`$A = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}$. Trouver $a$, $b$ tels que $A^2 = aA + bI$, puis en déduire $A^{-1}$.`,
      solution: t`$A^2 = \begin{pmatrix} 7 & 2 \\ 3 & 6 \end{pmatrix}$ et $aA + bI = \begin{pmatrix} a + b & 2a \\ 3a & b \end{pmatrix}$.

Par identification : $2a = 2$ et $b = 6$, soit $a = 1$, $b = 6$ (et $a + b = 7$ ✓). Donc $A^2 = A + 6I$.

Alors $A^2 - A = 6I$, soit $A \times \dfrac16(A - I) = I$. Donc $A$ est inversible et
$$A^{-1} = \frac16(A - I) = \frac16\begin{pmatrix} 0 & 2 \\ 3 & -1 \end{pmatrix}$$`,
    },
    pieges: [
      t`On écrit $A - I$, et non $A - 1$ : on ne soustrait pas un nombre à une matrice.`,
    ],
    voir: ['mat-inverse-verif'],
  },

  'mat-puissance-rec': {
    quand: t`« Montrer par récurrence que $A^n = \dots$ » (expression en fonction de $n$ donnée ou à conjecturer).`,
    etapes: [
      t`Calculer $A^2$, $A^3$ pour conjecturer la forme de $A^n$ (si elle n'est pas donnée).`,
      t`**Initialisation** : vérifier pour $n = 1$ (ou $n = 0$ avec $A^0 = I$).`,
      t`**Hérédité** : $A^{n+1} = A^n \times A$, remplacer $A^n$ par l'expression supposée, faire le produit et retrouver la formule au rang $n + 1$.`,
    ],
    exemple: {
      enonce: t`$A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$. Montrer que pour tout $n \geq 1$, $A^n = \begin{pmatrix} 2^n & n2^{n-1} \\ 0 & 2^n \end{pmatrix}$.`,
      solution: t`**Initialisation** : pour $n = 1$, la formule donne $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} = A$ ✓.

**Hérédité** : supposons la formule vraie au rang $n$. Alors
$$\begin{aligned} A^{n+1} &= \begin{pmatrix} 2^n & n2^{n-1} \\ 0 & 2^n \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} \\ &= \begin{pmatrix} 2^{n+1} & 2^n + n2^n \\ 0 & 2^{n+1} \end{pmatrix} \end{aligned}$$
et $2^n + n2^n = (n + 1)2^n$ : c'est la formule au rang $n + 1$.

**Conclusion** : la formule est vraie pour tout $n \geq 1$.`,
    },
    pieges: [
      t`$A^n$ n'est **pas** la matrice des coefficients élevés à la puissance $n$ (sauf pour une matrice diagonale).`,
    ],
    voir: ['suite-rec-formule', 'mat-diagonalisation'],
  },

  'mat-diagonalisation': {
    quand: t`L'énoncé donne $P$ et $D$ (diagonale) avec $A = PDP^{-1}$, et demande $A^n$.`,
    etapes: [
      t`Vérifier $A = PDP^{-1}$ si demandé (ou $AP = PD$, plus simple).`,
      t`Montrer par récurrence que $A^n = PD^nP^{-1}$ (les $P^{-1}P$ du milieu se simplifient).`,
      t`$D^n$ s'obtient en mettant les coefficients diagonaux à la puissance $n$.`,
      t`Calculer le produit $PD^nP^{-1}$.`,
    ],
    exemple: {
      enonce: t`$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, $D = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$ et $P^{-1} = \frac12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$. On admet $A = PDP^{-1}$. Calculer $A^n$.`,
      solution: t`**Récurrence** : $A^1 = PDP^{-1}$. Si $A^n = PD^nP^{-1}$, alors $A^{n+1} = PD^nP^{-1}PDP^{-1} = PD^{n+1}P^{-1}$.

$D^n = \begin{pmatrix} 3^n & 0 \\ 0 & 1 \end{pmatrix}$, donc $PD^n = \begin{pmatrix} 3^n & 1 \\ 3^n & -1 \end{pmatrix}$ et
$$A^n = \frac12\begin{pmatrix} 3^n + 1 & 3^n - 1 \\ 3^n - 1 & 3^n + 1 \end{pmatrix}$$`,
    },
    pieges: [
      t`L'ordre des produits compte : $PD^nP^{-1}$, pas $P^{-1}D^nP$.`,
    ],
    voir: ['mat-puissance-rec', 'mat-suite-limite'],
  },

  'mat-suite': {
    quand: t`Suite de matrices colonnes $U_{n+1} = AU_n$ ou $U_{n+1} = AU_n + B$.`,
    etapes: [
      t`**Cas $U_{n+1} = AU_n$** : par récurrence, $U_n = A^nU_0$.`,
      t`**Cas $U_{n+1} = AU_n + B$** : chercher la matrice colonne $C$ telle que $C = AC + B$, c'est-à-dire $(I - A)C = B$.`,
      t`Poser $V_n = U_n - C$ : alors $V_{n+1} = AV_n$, donc $V_n = A^nV_0$ et $U_n = A^n(U_0 - C) + C$.`,
    ],
    exemple: {
      enonce: t`$U_{n+1} = AU_n + B$ avec $A = \begin{pmatrix} 0{,}5 & 0{,}2 \\ 0{,}1 & 0{,}4 \end{pmatrix}$ et $B = \begin{pmatrix} 2 \\ 2{,}4 \end{pmatrix}$. Vérifier que $C = \begin{pmatrix} 6 \\ 5 \end{pmatrix}$ vérifie $C = AC + B$, puis exprimer $U_n$.`,
      solution: t`$$AC + B = \begin{pmatrix} 3 + 1 \\ 0{,}6 + 2 \end{pmatrix} + \begin{pmatrix} 2 \\ 2{,}4 \end{pmatrix} = \begin{pmatrix} 6 \\ 5 \end{pmatrix} = C$$
On pose $V_n = U_n - C$. Alors $V_{n+1} = AU_n + B - (AC + B) = A(U_n - C) = AV_n$.

Donc $V_n = A^nV_0$ et $U_n = A^n(U_0 - C) + C$.`,
    },
    pieges: [
      t`C'est la même idée que la suite auxiliaire $v_n = u_n - \ell$ pour une suite arithmético-géométrique.`,
    ],
    voir: ['suite-auxiliaire', 'mat-suite-limite'],
  },

  'mat-suite-limite': {
    quand: t`« Montrer que la suite $(U_n)$ converge et donner sa limite ».`,
    etapes: [
      t`Exprimer $U_n$ avec $A^n$ (voir suites de matrices).`,
      t`Étudier $A^n$ : avec $A = PDP^{-1}$, $A^n = PD^nP^{-1}$, et $D^n$ tend vers la matrice des limites des coefficients diagonaux.`,
      t`Si les coefficients diagonaux de $D$ sont dans $]-1 ; 1[$, $D^n \to 0$ donc $A^n \to 0$, et $U_n \to C$.`,
    ],
    exemple: {
      enonce: t`Dans l'exemple précédent, on admet que $A = PDP^{-1}$ avec $D = \begin{pmatrix} 0{,}6 & 0 \\ 0 & 0{,}3 \end{pmatrix}$. Montrer que $(U_n)$ converge.`,
      solution: t`$D^n = \begin{pmatrix} 0{,}6^n & 0 \\ 0 & 0{,}3^n \end{pmatrix}$. Comme $0{,}6$ et $0{,}3$ sont dans $]-1 ; 1[$, $0{,}6^n \to 0$ et $0{,}3^n \to 0$, donc $D^n$ tend vers la matrice nulle.

Ainsi $A^n = PD^nP^{-1}$ tend vers la matrice nulle, et $U_n = A^n(U_0 - C) + C$ tend vers $C = \begin{pmatrix} 6 \\ 5 \end{pmatrix}$.`,
    },
    pieges: [
      t`La limite ne dépend pas de $U_0$ : c'est l'état stable $C$.`,
    ],
    voir: ['mat-suite', 'mat-diagonalisation', 'mk-convergence'],
  },
}
