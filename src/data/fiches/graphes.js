// Fiches méthode — Graphes et chaînes de Markov (maths expertes). Même format que suites.js.
const t = String.raw

// Graphe utilisé dans plusieurs exemples.
const graphe = t`On considère le graphe non orienté de sommets $A$, $B$, $C$, $D$ et d'arêtes $A$–$B$, $A$–$C$, $B$–$C$, $B$–$D$ et $C$–$D$.`

// Chaîne de Markov utilisée dans plusieurs exemples.
const meteo = t`Chaque jour, il fait soit beau ($S$), soit pluvieux ($P$). S'il fait beau, il fait beau le lendemain avec la probabilité 0,8. S'il pleut, il fait beau le lendemain avec la probabilité 0,4.`

export const fichesGraphes = {
  'gr-vocabulaire': {
    quand: t`« Donner l'ordre du graphe, le degré de chaque sommet, le nombre d'arêtes ».`,
    etapes: [
      t`**Ordre** : nombre de sommets.`,
      t`**Degré** d'un sommet : nombre d'arêtes qui en partent (une boucle compte pour 2).`,
      t`**Somme des degrés = 2 × nombre d'arêtes** (chaque arête est comptée deux fois, une par extrémité). C'est une bonne vérification.`,
      t`Deux sommets sont **adjacents** s'ils sont reliés par une arête.`,
    ],
    exemple: {
      enonce: t`${graphe} Donner l'ordre du graphe, les degrés et le nombre d'arêtes.`,
      solution: t`L'ordre est 4.

Degrés : $A$ : 2, $B$ : 3, $C$ : 3, $D$ : 2.

Somme des degrés : $2 + 3 + 3 + 2 = 10 = 2 \times 5$ : il y a bien **5 arêtes**.`,
    },
    pieges: [
      t`La somme des degrés est toujours **paire** : un graphe ne peut pas avoir un nombre impair de sommets de degré impair.`,
    ],
    voir: ['gr-adjacence', 'gr-connexe'],
  },

  'gr-adjacence': {
    quand: t`« Écrire la matrice d'adjacence du graphe ».`,
    etapes: [
      t`Ranger les sommets dans un ordre (souvent alphabétique).`,
      t`Le coefficient ligne $i$, colonne $j$ est le nombre d'arêtes entre le sommet $i$ et le sommet $j$ (0 ou 1 en général).`,
      t`Pour un graphe **non orienté**, la matrice est **symétrique**. La diagonale est nulle s'il n'y a pas de boucle.`,
    ],
    exemple: {
      enonce: t`${graphe} Écrire sa matrice d'adjacence $M$ (sommets dans l'ordre $A$, $B$, $C$, $D$).`,
      solution: t`$$M = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 0 \end{pmatrix}$$
Vérification : la somme de chaque ligne donne le degré du sommet (2, 3, 3, 2).`,
    },
    pieges: [
      t`Pour un graphe **orienté**, ligne $i$ colonne $j$ = arêtes **de** $i$ **vers** $j$ : la matrice n'est plus symétrique.`,
    ],
    voir: ['gr-chaines', 'gr-vocabulaire'],
  },

  'gr-chaines': {
    quand: t`« Combien y a-t-il de chaînes de longueur $n$ reliant $X$ à $Y$ ? »`,
    etapes: [
      t`Écrire la matrice d'adjacence $M$.`,
      t`Calculer $M^n$ (à la calculatrice pour $n \geq 3$).`,
      t`Le coefficient ligne $X$, colonne $Y$ de $M^n$ est le nombre de chaînes de longueur $n$ de $X$ à $Y$.`,
      t`Pour les lister : écrire les chemins sommet par sommet.`,
    ],
    exemple: {
      enonce: t`${graphe} Combien y a-t-il de chaînes de longueur 2 de $A$ à $D$ ? de longueur 3 de $A$ à $A$ ?`,
      solution: t`- Coefficient $(A, D)$ de $M^2$ : ligne $A$ de $M$ fois colonne $D$ : $(0, 1, 1, 0) \cdot (0, 1, 1, 0) = 2$. Ce sont $A$–$B$–$D$ et $A$–$C$–$D$.
- Le coefficient $(A, A)$ de $M^3$ vaut 2 : ce sont les deux sens de parcours du triangle, $A$–$B$–$C$–$A$ et $A$–$C$–$B$–$A$.`,
    },
    pieges: [
      t`La **longueur** d'une chaîne est son nombre d'**arêtes**, pas de sommets.`,
    ],
    voir: ['gr-adjacence', 'mat-produit'],
  },

  'gr-connexe': {
    quand: t`« Le graphe est-il connexe ? complet ? »`,
    etapes: [
      t`**Connexe** : on peut aller de n'importe quel sommet à n'importe quel autre. Il suffit de trouver une chaîne qui passe par **tous** les sommets.`,
      t`**Complet** : tous les sommets sont adjacents deux à deux. Un graphe complet d'ordre $n$ a $\dfrac{n(n-1)}{2}$ arêtes.`,
      t`Pour montrer qu'un graphe **n'est pas** complet : trouver deux sommets non reliés.`,
    ],
    exemple: {
      enonce: t`${graphe} Est-il connexe ? Est-il complet ?`,
      solution: t`La chaîne $A$–$B$–$D$–$C$ passe par tous les sommets : le graphe est **connexe**.

$A$ et $D$ ne sont pas adjacents : le graphe n'est **pas complet** (un graphe complet d'ordre 4 aurait $\frac{4 \times 3}{2} = 6$ arêtes, il en a 5).`,
    },
    pieges: [
      t`« Connexe » ne veut pas dire « complet » : un graphe en ligne est connexe sans être complet.`,
    ],
    voir: ['gr-vocabulaire'],
  },

  'mk-transition': {
    quand: t`Une situation qui évolue aléatoirement entre des **états**, avec des probabilités de passage qui ne dépendent que de l'état actuel : chaîne de Markov.`,
    etapes: [
      t`Identifier les états et tracer le **graphe probabiliste** (flèches pondérées par les probabilités de passage).`,
      t`Matrice de transition $P$ : le coefficient ligne $i$, colonne $j$ est la probabilité de passer **de** l'état $i$ **à** l'état $j$.`,
      t`Vérifier : la somme de **chaque ligne** vaut 1.`,
    ],
    exemple: {
      enonce: t`${meteo} Écrire la matrice de transition (états dans l'ordre $S$, $P$).`,
      solution: t`- Depuis $S$ : vers $S$ avec 0,8, vers $P$ avec 0,2.
- Depuis $P$ : vers $S$ avec 0,4, vers $P$ avec 0,6.
$$P = \begin{pmatrix} 0{,}8 & 0{,}2 \\ 0{,}4 & 0{,}6 \end{pmatrix}$$
Chaque ligne a pour somme 1 ✓.`,
    },
    pieges: [
      t`Ce sont les **lignes** qui somment à 1 (pas les colonnes).`,
    ],
    voir: ['mk-loi-n', 'pb-arbre'],
  },

  'mk-loi-n': {
    quand: t`« Calculer la probabilité d'être dans chaque état au bout de $n$ étapes ».`,
    etapes: [
      t`La loi à l'étape $n$ est un vecteur **ligne** $\pi_n = (p_n \;\; q_n)$, de somme 1.`,
      t`Relation : $\pi_{n+1} = \pi_n P$, donc $\pi_n = \pi_0 P^n$.`,
      t`Calculer étape par étape, ou avec $P^n$ à la calculatrice.`,
    ],
    exemple: {
      enonce: t`${meteo} Il fait beau aujourd'hui ($\pi_0 = (1 \;\; 0)$). Quelle est la probabilité qu'il fasse beau dans 2 jours ?`,
      solution: t`$\pi_1 = \pi_0 P = (0{,}8 \;\; 0{,}2)$, puis $\pi_2 = \pi_1 P$ :
- 1ʳᵉ coordonnée : $0{,}8 \times 0{,}8 + 0{,}2 \times 0{,}4 = 0{,}72$
- 2ᵉ coordonnée : $0{,}8 \times 0{,}2 + 0{,}2 \times 0{,}6 = 0{,}28$

Donc $\pi_2 = (0{,}72 \;\; 0{,}28)$ : la probabilité qu'il fasse beau dans 2 jours est 0,72.`,
    },
    pieges: [
      t`Avec un vecteur **ligne**, on multiplie à gauche : $\pi_n P$, et non $P\pi_n$.`,
    ],
    voir: ['mk-transition', 'mk-invariante', 'pb-totales'],
  },

  'mk-invariante': {
    quand: t`« Déterminer la distribution invariante (ou stationnaire) de la chaîne ».`,
    etapes: [
      t`Poser $\pi = (x \;\; y)$ avec $x + y = 1$.`,
      t`Écrire $\pi P = \pi$ : cela donne un système.`,
      t`Résoudre en utilisant $x + y = 1$ (les équations de $\pi P = \pi$ seules ne suffisent pas, elles sont redondantes).`,
    ],
    exemple: {
      enonce: t`${meteo} Déterminer la distribution invariante.`,
      solution: t`$\pi = (x \;\; 1 - x)$. La première coordonnée de $\pi P = \pi$ donne
$$\begin{aligned} & 0{,}8x + 0{,}4(1 - x) = x \\ \iff \; & 0{,}4 = 0{,}6x \\ \iff \; & x = \frac23 \end{aligned}$$
La distribution invariante est $\pi = \left(\frac23 \;\; \frac13\right)$ : à long terme, il fait beau 2 jours sur 3.`,
    },
    pieges: [
      t`Ne pas oublier la condition $x + y = 1$.`,
    ],
    voir: ['mk-convergence', 'mat-suite'],
  },

  'mk-convergence': {
    quand: t`« Étudier le comportement de $\pi_n$ quand $n$ tend vers $+\infty$ » pour une chaîne à 2 états.`,
    etapes: [
      t`Résultat du cours : si la matrice de transition (2 états) n'a **aucun coefficient nul**, $(\pi_n)$ converge vers la distribution invariante, quel que soit $\pi_0$.`,
      t`Méthode par le calcul : avec $q_n = 1 - p_n$, obtenir une relation $p_{n+1} = ap_n + b$ (suite arithmético-géométrique).`,
      t`Utiliser la suite auxiliaire $p_n - \ell$ pour obtenir $p_n$ en fonction de $n$, puis la limite.`,
    ],
    exemple: {
      enonce: t`${meteo} On note $p_n$ la probabilité qu'il fasse beau le jour $n$, avec $p_0 = 1$. Exprimer $p_n$ et sa limite.`,
      solution: t`D'après la matrice de transition :
$$p_{n+1} = 0{,}8p_n + 0{,}4(1 - p_n) = 0{,}4p_n + 0{,}4$$
Point fixe : $\ell = 0{,}4\ell + 0{,}4$, soit $\ell = \frac23$. La suite $p_n - \frac23$ est géométrique de raison 0,4, donc
$$p_n = \frac23 + \frac13 \times 0{,}4^n$$
Comme $0{,}4^n \to 0$, $p_n \to \frac23$ : on retrouve la distribution invariante.`,
    },
    pieges: [
      t`La limite ne dépend pas de l'état de départ.`,
    ],
    voir: ['mk-invariante', 'suite-auxiliaire', 'mat-suite-limite'],
  },
}
