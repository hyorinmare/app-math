// Fiches méthode — Probabilités conditionnelles et loi binomiale. Même format que suites.js.
const t = String.raw

// Situation commune à plusieurs exemples : une usine avec deux machines.
const usine = t`Une usine a deux machines. La machine A fabrique 60 % des pièces, la machine B 40 %. 3 % des pièces de A sont défectueuses, et 5 % de celles de B. On choisit une pièce au hasard ; $D$ est l'événement « la pièce est défectueuse ».`

export const fichesProbas = {
  'pb-arbre': {
    quand: t`L'énoncé décrit une expérience en deux étapes, avec des pourcentages « parmi… » : c'est le signal d'un arbre pondéré.`,
    etapes: [
      t`Première série de branches : la première étape (ici la machine), avec $P(A)$, $P(B)$.`,
      t`Deuxième série : la deuxième étape **sachant** la première ($P_A(D)$, $P_A(\overline D)$…). Les « parmi les pièces de A » sont des probabilités conditionnelles.`,
      t`Vérifier : à chaque nœud, la somme des branches vaut 1.`,
      t`**Probabilité d'un chemin** = produit des probabilités sur ce chemin : $P(A \cap D) = P(A) \times P_A(D)$.`,
    ],
    exemple: {
      enonce: t`${usine} Construire l'arbre et calculer $P(A \cap D)$.`,
      solution: t`Arbre :
- $A$ (0,6) puis $D$ (0,03) ou $\overline D$ (0,97)
- $B$ (0,4) puis $D$ (0,05) ou $\overline D$ (0,95)

$P(A \cap D) = P(A) \times P_A(D) = 0{,}6 \times 0{,}03 = 0{,}018$.`,
    },
    pieges: [
      t`Sur les branches du 2ᵉ niveau, ce sont des probabilités **conditionnelles** : $P_A(D) = 0{,}03$, pas $P(D)$.`,
      t`$P(A \cap D)$ (« A **et** D ») se lit sur un chemin ; $P_A(D)$ (« D **sachant** A ») sur une branche.`,
    ],
    voir: ['pb-totales', 'pb-conditionnelle'],
  },

  'pb-conditionnelle': {
    quand: t`« Sachant que… », « parmi les… », « on sait que la pièce vient de A, quelle est la probabilité… ».`,
    etapes: [
      t`Identifier l'événement **connu** (après « sachant ») : c'est celui qui va au dénominateur.`,
      t`Appliquer $P_A(B) = \dfrac{P(A \cap B)}{P(A)}$.`,
      t`Ou l'inverse : $P(A \cap B) = P(A) \times P_A(B)$.`,
    ],
    exemple: {
      enonce: t`Dans un lycée, 55 % des élèves sont des filles, et 22 % des élèves sont des filles qui font spé maths. On choisit une fille au hasard : quelle est la probabilité qu'elle fasse spé maths ?`,
      solution: t`On note $F$ « être une fille » et $M$ « faire spé maths ». On sait $P(F) = 0{,}55$ et $P(F \cap M) = 0{,}22$.
$$P_F(M) = \frac{P(F \cap M)}{P(F)} = \frac{0{,}22}{0{,}55} = 0{,}4$$`,
    },
    pieges: [
      t`« 22 % des élèves sont des filles qui… » est $P(F \cap M)$ ; « 40 % des filles font… » serait $P_F(M)$. Lire la phrase très attentivement.`,
    ],
    voir: ['pb-arbre', 'pb-inverser'],
  },

  'pb-totales': {
    quand: t`On veut $P(D)$ alors que l'arbre donne $D$ au bout de **plusieurs** chemins.`,
    etapes: [
      t`Repérer tous les chemins qui mènent à $D$.`,
      t`Calculer la probabilité de chacun (produit des branches).`,
      t`Les additionner : avec la partition $\{A, B\}$, $P(D) = P(A \cap D) + P(B \cap D)$.`,
      t`Citer « d'après la formule des probabilités totales ».`,
    ],
    exemple: {
      enonce: t`${usine} Calculer $P(D)$.`,
      solution: t`$A$ et $B$ forment une partition de l'univers. D'après la formule des probabilités totales :
$$\begin{aligned} P(D) &= P(A \cap D) + P(B \cap D) \\ &= 0{,}6 \times 0{,}03 + 0{,}4 \times 0{,}05 \\ &= 0{,}018 + 0{,}02 = 0{,}038 \end{aligned}$$`,
    },
    pieges: [
      t`Ne pas additionner $P_A(D) + P_B(D)$ : il faut les chemins complets (produits).`,
    ],
    voir: ['pb-arbre', 'pb-inverser'],
  },

  'pb-inverser': {
    quand: t`On connaît $P_A(D)$ (dans l'arbre) et on demande l'inverse : « la pièce est défectueuse, quelle est la probabilité qu'elle vienne de A ? » ($P_D(A)$).`,
    etapes: [
      t`Écrire la définition : $P_D(A) = \dfrac{P(A \cap D)}{P(D)}$.`,
      t`$P(A \cap D)$ se lit sur l'arbre (un chemin).`,
      t`$P(D)$ s'obtient par les probabilités totales.`,
    ],
    exemple: {
      enonce: t`${usine} Une pièce est défectueuse. Quelle est la probabilité qu'elle vienne de la machine A ?`,
      solution: t`On cherche $P_D(A)$. On a $P(A \cap D) = 0{,}018$ et, par les probabilités totales, $P(D) = 0{,}038$.
$$P_D(A) = \frac{P(A \cap D)}{P(D)} = \frac{0{,}018}{0{,}038} = \frac{9}{19} \approx 0{,}474$$`,
    },
    pieges: [
      t`$P_D(A) \neq P_A(D)$ : ici 0,474 contre 0,03.`,
    ],
    voir: ['pb-totales', 'pb-conditionnelle'],
  },

  'pb-tableau': {
    quand: t`L'énoncé donne des **effectifs** croisés selon deux critères (filles/garçons et externe/demi-pension…).`,
    etapes: [
      t`Compléter le tableau, avec les totaux de lignes et de colonnes.`,
      t`$P(A) = \dfrac{\text{effectif de } A}{\text{effectif total}}$ et $P(A \cap B) = \dfrac{\text{case}}{\text{total}}$.`,
      t`$P_A(B) = \dfrac{\text{case } A \cap B}{\text{total de la ligne (ou colonne) } A}$ : on divise par le total de l'événement connu.`,
    ],
    exemple: {
      enonce: t`Sur 200 élèves, il y a 100 filles dont 60 demi-pensionnaires, et 100 garçons dont 70 demi-pensionnaires. On choisit un demi-pensionnaire : probabilité que ce soit une fille ?`,
      solution: t`$$\def\arraystretch{1.4} \begin{array}{c|cc|c} & \text{DP} & \text{Ext} & \text{Total} \\ \hline F & 60 & 40 & 100 \\ G & 70 & 30 & 100 \\ \hline \text{Total} & 130 & 70 & 200 \end{array}$$
$$P_{DP}(F) = \frac{60}{130} = \frac{6}{13} \approx 0{,}46$$`,
    },
    pieges: [
      t`Pour une probabilité conditionnelle, on ne divise **pas** par 200 mais par le total de l'événement connu (130).`,
    ],
    voir: ['pb-conditionnelle', 'pb-independance'],
  },

  'pb-independance': {
    quand: t`« Les événements $A$ et $B$ sont-ils indépendants ? »`,
    etapes: [
      t`Calculer $P(A)$, $P(B)$ et $P(A \cap B)$.`,
      t`Comparer $P(A \cap B)$ et $P(A) \times P(B)$ : s'ils sont égaux, $A$ et $B$ sont indépendants.`,
      t`Autre façon (si $P(A) \neq 0$) : $A$ et $B$ indépendants $\iff P_A(B) = P(B)$.`,
      t`Si $A$ et $B$ sont indépendants, alors $\overline A$ et $B$ le sont aussi.`,
    ],
    exemple: {
      enonce: t`Avec le tableau des 200 élèves (100 filles dont 60 DP, 130 DP au total), les événements $F$ et $DP$ sont-ils indépendants ?`,
      solution: t`$P(F) = 0{,}5$, $P(DP) = 0{,}65$ et $P(F \cap DP) = \dfrac{60}{200} = 0{,}3$.

$P(F) \times P(DP) = 0{,}5 \times 0{,}65 = 0{,}325 \neq 0{,}3$.

Les événements ne sont pas indépendants.`,
    },
    pieges: [
      t`Ne pas confondre **indépendants** et **incompatibles** ($A \cap B = \varnothing$) : ce n'est pas du tout la même chose.`,
    ],
    voir: ['pb-tableau', 'pb-bernoulli'],
  },

  'pb-loi': {
    quand: t`« Déterminer la loi de probabilité de $X$ » ($X$ = un nombre de boules, un gain, un nombre de succès…).`,
    etapes: [
      t`Lister **toutes les valeurs** possibles de $X$.`,
      t`Calculer $P(X = x_i)$ pour chacune (arbre, dénombrement…).`,
      t`Présenter dans un tableau et **vérifier que la somme vaut 1**.`,
    ],
    exemple: {
      enonce: t`Une urne contient 3 boules rouges et 2 bleues. On tire simultanément 2 boules. $X$ est le nombre de boules rouges. Déterminer la loi de $X$.`,
      solution: t`Il y a $\binom52 = 10$ tirages équiprobables. $X$ prend les valeurs 0, 1, 2.
- $P(X = 0) = \dfrac{\binom22}{10} = \dfrac{1}{10}$
- $P(X = 1) = \dfrac{\binom31 \times \binom21}{10} = \dfrac{6}{10}$
- $P(X = 2) = \dfrac{\binom32}{10} = \dfrac{3}{10}$
$$\def\arraystretch{1.4} \begin{array}{c|ccc} x_i & 0 & 1 & 2 \\ \hline P(X = x_i) & 0{,}1 & 0{,}6 & 0{,}3 \end{array}$$
Vérification : $0{,}1 + 0{,}6 + 0{,}3 = 1$.`,
    },
    pieges: [
      t`Ne pas oublier une valeur (souvent 0).`,
    ],
    voir: ['pb-esperance', 'comb-combinaisons'],
  },

  'pb-esperance': {
    quand: t`On connaît la loi de $X$ et on demande $E(X)$, $V(X)$ ou $\sigma(X)$.`,
    etapes: [
      t`$E(X) = \sum x_i\,P(X = x_i)$ : moyenne pondérée des valeurs.`,
      t`$V(X) = E(X^2) - E(X)^2$ (formule de König-Huygens), avec $E(X^2) = \sum x_i^2\,P(X = x_i)$.`,
      t`$\sigma(X) = \sqrt{V(X)}$.`,
      t`Interpréter $E(X)$ : valeur moyenne obtenue si on répète l'expérience un grand nombre de fois.`,
    ],
    exemple: {
      enonce: t`$X$ suit la loi : $P(X = 0) = 0{,}1$, $P(X = 1) = 0{,}6$, $P(X = 2) = 0{,}3$. Calculer $E(X)$, $V(X)$ et $\sigma(X)$.`,
      solution: t`$E(X) = 0 \times 0{,}1 + 1 \times 0{,}6 + 2 \times 0{,}3 = 1{,}2$

$E(X^2) = 0 \times 0{,}1 + 1 \times 0{,}6 + 4 \times 0{,}3 = 1{,}8$

$V(X) = 1{,}8 - 1{,}2^2 = 0{,}36$ et $\sigma(X) = \sqrt{0{,}36} = 0{,}6$.`,
    },
    pieges: [
      t`$E(X^2) \neq E(X)^2$ : il faut mettre les **valeurs** au carré, pas les probabilités.`,
    ],
    voir: ['pb-loi', 'va-affine'],
  },

  'pb-jeu': {
    quand: t`Jeu avec une mise : « le jeu est-il favorable ? », « quelle mise rend le jeu équitable ? ».`,
    etapes: [
      t`Définir le **gain algébrique** $G$ = ce qu'on reçoit − la mise (il peut être négatif).`,
      t`Établir la loi de $G$ et calculer $E(G)$.`,
      t`$E(G) > 0$ : favorable au joueur ; $E(G) < 0$ : défavorable ; $E(G) = 0$ : **équitable**.`,
      t`Pour la mise équitable : garder la mise $m$ comme inconnue et résoudre $E(G) = 0$.`,
    ],
    exemple: {
      enonce: t`On lance un dé. Un 6 rapporte 10 €, un 4 ou un 5 rapporte 3 €, sinon rien. 1) La mise est de 2 € : le jeu est-il favorable ? 2) Quelle mise rendrait le jeu équitable ?`,
      solution: t`1) Gains : $+8$ (proba $\frac16$), $+1$ (proba $\frac26$), $-2$ (proba $\frac36$).
$$E(G) = \frac{8}{6} + \frac{2}{6} - \frac{6}{6} = \frac46 = \frac23$$
$E(G) > 0$ : le jeu est favorable au joueur (il gagne en moyenne 0,67 € par partie).

2) Avec une mise $m$ : $E(G) = \dfrac{10 + 2 \times 3}{6} - m = \dfrac83 - m$. Le jeu est équitable pour $m = \dfrac83 \approx 2{,}67$ €.`,
    },
    pieges: [
      t`Ne pas oublier de retirer la mise de **tous** les gains, y compris quand on ne gagne rien ($-2$).`,
    ],
    voir: ['pb-esperance'],
  },

  'pb-bernoulli': {
    quand: t`« Justifier que $X$ suit une loi binomiale et préciser ses paramètres ». On compte un nombre de succès sur des répétitions.`,
    etapes: [
      t`Identifier l'**épreuve de Bernoulli** : une expérience à deux issues, le succès (à préciser) de probabilité $p$.`,
      t`Justifier que l'épreuve est répétée $n$ fois de façon **identique et indépendante** (tirage avec remise, ou population assez grande pour l'assimiler à un tirage avec remise).`,
      t`$X$ compte le nombre de succès : $X$ suit la loi binomiale $\mathcal B(n ; p)$.`,
    ],
    exemple: {
      enonce: t`${usine} On prélève 20 pièces dans la production, assez grande pour assimiler le prélèvement à un tirage avec remise. $X$ est le nombre de pièces défectueuses. Quelle est la loi de $X$ ?`,
      solution: t`Chaque prélèvement est une épreuve de Bernoulli dont le succès « la pièce est défectueuse » a pour probabilité $p = P(D) = 0{,}038$.

On répète 20 fois cette épreuve de façon identique et indépendante (assimilé à un tirage avec remise).

$X$ compte le nombre de succès : $X$ suit la loi binomiale $\mathcal B(20 ; 0{,}038)$.`,
    },
    pieges: [
      t`Les trois mots attendus : **deux issues**, **identiques**, **indépendantes**.`,
      t`Un tirage **sans remise** dans une petite urne ne donne pas une loi binomiale.`,
    ],
    voir: ['pb-binom-k', 'pb-independance'],
  },

  'pb-binom-k': {
    quand: t`$X \sim \mathcal B(n ; p)$ et on demande $P(X = k)$ (« exactement $k$ succès »).`,
    etapes: [
      t`Appliquer $P(X = k) = \dbinom{n}{k}p^k(1 - p)^{n - k}$.`,
      t`À la calculatrice : binomFdp (TI) ou Binomiale PD (Casio).`,
      t`Donner le résultat arrondi comme demandé (souvent $10^{-3}$ ou $10^{-4}$).`,
    ],
    exemple: {
      enonce: t`$X \sim \mathcal B(10 ; 0{,}3)$. Calculer $P(X = 2)$.`,
      solution: t`$$P(X = 2) = \binom{10}{2} \times 0{,}3^2 \times 0{,}7^8$$
$\binom{10}{2} = 45$, donc $P(X = 2) = 45 \times 0{,}09 \times 0{,}7^8 \approx 0{,}2335$.`,
    },
    pieges: [
      t`L'exposant de $1 - p$ est $n - k$ (le nombre d'échecs).`,
    ],
    voir: ['pb-binom-cumul', 'comb-binom-calcul'],
  },

  'pb-binom-cumul': {
    quand: t`« Au plus $k$ », « au moins $k$ », « entre $a$ et $b$ » succès : $P(X \leq k)$, $P(X \geq k)$, $P(a \leq X \leq b)$.`,
    etapes: [
      t`$P(X \leq k)$ : directement à la calculatrice (binomFRép sur TI, Binomiale FR sur Casio).`,
      t`$P(X \geq k) = 1 - P(X \leq k - 1)$.`,
      t`$P(a \leq X \leq b) = P(X \leq b) - P(X \leq a - 1)$.`,
    ],
    exemple: {
      enonce: t`$X \sim \mathcal B(10 ; 0{,}3)$. Calculer $P(X \leq 2)$, $P(X \geq 3)$ et $P(2 \leq X \leq 4)$.`,
      solution: t`- $P(X \leq 2) \approx 0{,}3828$ (calculatrice).
- $P(X \geq 3) = 1 - P(X \leq 2) \approx 0{,}6172$.
- $P(2 \leq X \leq 4) = P(X \leq 4) - P(X \leq 1) \approx 0{,}7004$.`,
    },
    pieges: [
      t`$P(X \geq 3) = 1 - P(X \leq 2)$, et **non** $1 - P(X \leq 3)$.`,
      t`« Au moins » = $\geq$, « au plus » = $\leq$.`,
    ],
    voir: ['pb-binom-k', 'pb-binom-seuil'],
  },

  'pb-au-moins-un': {
    quand: t`« Probabilité d'avoir au moins un succès », ou « combien de répétitions pour que cette probabilité dépasse 0,9 ? ».`,
    etapes: [
      t`Passer par le contraire : $P(X \geq 1) = 1 - P(X = 0) = 1 - (1 - p)^n$.`,
      t`Pour trouver $n$ : résoudre $1 - (1 - p)^n > s$, soit $(1 - p)^n < 1 - s$.`,
      t`Passer au ln, sans oublier que $\ln(1 - p) < 0$ change le sens.`,
    ],
    exemple: {
      enonce: t`Chaque pièce est défectueuse avec la probabilité 0,038. 1) Sur 20 pièces, probabilité d'en avoir au moins une défectueuse ? 2) Combien de pièces faut-il pour que cette probabilité dépasse 0,9 ?`,
      solution: t`1) $P(X \geq 1) = 1 - 0{,}962^{20} \approx 0{,}539$.

2) On cherche $n$ tel que $1 - 0{,}962^n > 0{,}9$ :
$$\begin{aligned} &\iff 0{,}962^n < 0{,}1 \\ &\iff n\ln 0{,}962 < \ln 0{,}1 \\ &\iff n > \frac{\ln 0{,}1}{\ln 0{,}962} \approx 59{,}4 \end{aligned}$$
(le sens change car $\ln 0{,}962 < 0$). Il faut au moins **60 pièces**.`,
    },
    pieges: [
      t`Ne pas calculer $P(X = 1) + P(X = 2) + \dots$ : le contraire est beaucoup plus rapide.`,
    ],
    voir: ['ln-seuil', 'pb-binom-cumul'],
  },

  'pb-binom-seuil': {
    quand: t`« Déterminer le plus petit entier $k$ tel que $P(X \leq k) \geq 0{,}95$ » (intervalle de fluctuation, seuil de décision).`,
    etapes: [
      t`Avec la calculatrice, afficher la **table** des valeurs de $P(X \leq k)$ (binomFRép avec $k$ variable).`,
      t`Chercher le premier $k$ pour lequel la probabilité atteint le seuil.`,
      t`Justifier en donnant les deux valeurs qui encadrent le seuil.`,
    ],
    exemple: {
      enonce: t`$X \sim \mathcal B(50 ; 0{,}2)$. Déterminer le plus petit entier $k$ tel que $P(X \leq k) \geq 0{,}95$.`,
      solution: t`À la calculatrice :
- $P(X \leq 14) \approx 0{,}9393 < 0{,}95$
- $P(X \leq 15) \approx 0{,}9692 \geq 0{,}95$

Le plus petit entier cherché est $k = 15$.`,
    },
    pieges: [
      t`Il faut citer **les deux** valeurs (celle juste en dessous du seuil et celle au-dessus) pour justifier que c'est le plus petit.`,
    ],
    voir: ['pb-binom-cumul'],
  },
}
