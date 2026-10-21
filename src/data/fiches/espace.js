// Fiches méthode — Vecteurs, droites et plans de l'espace. Même format que suites.js.
const t = String.raw

// Cube utilisé dans plusieurs exemples.
export const cube = t`$ABCDEFGH$ est un cube d'arête 1, de face inférieure $ABCD$ et de face supérieure $EFGH$, avec $E$ au-dessus de $A$. On se place dans le repère $\left(A ; \overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AE}\right)$.`

export const fichesEspace = {
  'esp-chasles': {
    quand: t`« Exprimer $\overrightarrow{AG}$ en fonction de $\overrightarrow{AB}$, $\overrightarrow{AD}$, $\overrightarrow{AE}$ », ou décomposer un vecteur pour prouver une relation.`,
    etapes: [
      t`Chercher un chemin d'arêtes qui va du point de départ au point d'arrivée.`,
      t`Écrire la relation de Chasles le long de ce chemin : $\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CG}$.`,
      t`Remplacer chaque vecteur par un vecteur **égal** de la base (dans un cube : $\overrightarrow{BC} = \overrightarrow{AD}$, $\overrightarrow{CG} = \overrightarrow{AE}$…).`,
      t`Un milieu donne un facteur $\frac12$.`,
    ],
    exemple: {
      enonce: t`${cube} Exprimer $\overrightarrow{AG}$ puis $\overrightarrow{AI}$, où $I$ est le milieu de $[FG]$, en fonction de $\overrightarrow{AB}$, $\overrightarrow{AD}$ et $\overrightarrow{AE}$.`,
      solution: t`$$\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CG} = \overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AE}$$
$$\begin{aligned} \overrightarrow{AI} &= \overrightarrow{AB} + \overrightarrow{BF} + \overrightarrow{FI} \\ &= \overrightarrow{AB} + \overrightarrow{AE} + \tfrac12\overrightarrow{AD} \end{aligned}$$
(car $\overrightarrow{FI} = \frac12\overrightarrow{FG}$ et $\overrightarrow{FG} = \overrightarrow{AD}$).`,
    },
    pieges: [
      t`Deux vecteurs sont égaux s'ils ont **même direction, même sens et même longueur** : $\overrightarrow{CG} = \overrightarrow{AE}$ mais $\overrightarrow{GC} = -\overrightarrow{AE}$.`,
    ],
    voir: ['esp-coordonnees', 'esp-coplanaires'],
  },

  'esp-coordonnees': {
    quand: t`Un solide (cube, pavé, pyramide) est donné avec un repère, et il faut les coordonnées des sommets ou de points construits.`,
    etapes: [
      t`Les coordonnées de $M$ sont les coefficients de $\overrightarrow{AM} = x\,\overrightarrow{AB} + y\,\overrightarrow{AD} + z\,\overrightarrow{AE}$ : $M(x ; y ; z)$.`,
      t`Pour un sommet : compter combien de fois on avance selon chaque vecteur de base pour l'atteindre depuis l'origine.`,
      t`Pour un milieu : moyenne des coordonnées des extrémités.`,
    ],
    exemple: {
      enonce: t`${cube} Donner les coordonnées de $C$, $G$, $H$ et du milieu $I$ de $[EF]$.`,
      solution: t`- $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}$ donc $C(1 ; 1 ; 0)$.
- $\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AE}$ donc $G(1 ; 1 ; 1)$.
- $\overrightarrow{AH} = \overrightarrow{AD} + \overrightarrow{AE}$ donc $H(0 ; 1 ; 1)$.
- $E(0 ; 0 ; 1)$ et $F(1 ; 0 ; 1)$ donc $I\left(\frac12 ; 0 ; 1\right)$.`,
    },
    pieges: [
      t`Respecter l'**ordre** des vecteurs du repère : la 1ʳᵉ coordonnée correspond à $\overrightarrow{AB}$, etc.`,
    ],
    voir: ['esp-chasles', 'esp-milieu'],
  },

  'esp-milieu': {
    quand: t`Calculs de base en coordonnées : vecteur $\overrightarrow{AB}$, milieu d'un segment, point défini par une égalité vectorielle.`,
    etapes: [
      t`$\overrightarrow{AB}(x_B - x_A ; y_B - y_A ; z_B - z_A)$ : arrivée moins départ.`,
      t`Milieu $I$ de $[AB]$ : $I\left(\frac{x_A + x_B}{2} ; \frac{y_A + y_B}{2} ; \frac{z_A + z_B}{2}\right)$.`,
      t`Point défini par $\overrightarrow{AM} = k\overrightarrow{AB}$ : $x_M = x_A + k(x_B - x_A)$, etc.`,
    ],
    exemple: {
      enonce: t`$A(1 ; -2 ; 3)$ et $B(3 ; 0 ; -1)$. Calculer les coordonnées de $\overrightarrow{AB}$, du milieu $I$ de $[AB]$, et du point $M$ tel que $\overrightarrow{AM} = \frac12\overrightarrow{AB}$.`,
      solution: t`- $\overrightarrow{AB}(3 - 1 ; 0 - (-2) ; -1 - 3)$, soit $\overrightarrow{AB}(2 ; 2 ; -4)$.
- $I\left(\frac{1 + 3}{2} ; \frac{-2 + 0}{2} ; \frac{3 - 1}{2}\right)$, soit $I(2 ; -1 ; 1)$.
- $M = A + \frac12\overrightarrow{AB} = (1 + 1 ; -2 + 1 ; 3 - 2) = (2 ; -1 ; 1)$ : c'est bien le milieu $I$.`,
    },
    pieges: [
      t`Attention aux doubles signes : $0 - (-2) = 2$.`,
    ],
    voir: ['esp-coordonnees', 'ps-norme'],
  },

  'esp-colineaires': {
    quand: t`« Montrer que $A$, $B$, $C$ sont alignés », « que $(AB)$ et $(CD)$ sont parallèles » : on teste la colinéarité de deux vecteurs.`,
    etapes: [
      t`Calculer les coordonnées des deux vecteurs (par exemple $\overrightarrow{AB}$ et $\overrightarrow{AC}$).`,
      t`Chercher $k$ avec une coordonnée non nulle, puis **vérifier** que le même $k$ marche pour les deux autres.`,
      t`Si oui : colinéaires (points alignés / droites parallèles). Si une coordonnée ne marche pas : pas colinéaires.`,
    ],
    exemple: {
      enonce: t`$A(1 ; 2 ; 0)$, $B(3 ; 1 ; 2)$ et $C(7 ; -1 ; 6)$. Ces points sont-ils alignés ?`,
      solution: t`$\overrightarrow{AB}(2 ; -1 ; 2)$ et $\overrightarrow{AC}(6 ; -3 ; 6)$.

Sur les abscisses, $6 = 3 \times 2$. On vérifie : $-3 = 3 \times (-1)$ et $6 = 3 \times 2$.

Donc $\overrightarrow{AC} = 3\overrightarrow{AB}$ : les vecteurs sont colinéaires et les points $A$, $B$, $C$ sont alignés.`,
    },
    pieges: [
      t`Vérifier les **trois** coordonnées avec le même $k$ : deux ne suffisent pas.`,
    ],
    voir: ['esp-coplanaires', 'esp-position-droites'],
  },

  'esp-coplanaires': {
    quand: t`« Montrer que les vecteurs $\vec u$, $\vec v$, $\vec w$ sont coplanaires » ou « que les points $A$, $B$, $C$, $D$ sont coplanaires ».`,
    etapes: [
      t`Vérifier que $\vec u$ et $\vec v$ ne sont pas colinéaires.`,
      t`Chercher deux réels $a$ et $b$ tels que $\vec w = a\vec u + b\vec v$ : écrire le système des trois coordonnées.`,
      t`Résoudre avec deux équations, puis **vérifier** la troisième. Si elle est vraie : coplanaires.`,
      t`Pour 4 points : tester $\overrightarrow{AD} = a\overrightarrow{AB} + b\overrightarrow{AC}$.`,
    ],
    exemple: {
      enonce: t`Les vecteurs $\vec u(1 ; 0 ; 2)$, $\vec v(0 ; 1 ; -1)$ et $\vec w(2 ; 3 ; 1)$ sont-ils coplanaires ?`,
      solution: t`$\vec u$ et $\vec v$ ne sont pas colinéaires (la 1ʳᵉ coordonnée de $\vec v$ est nulle, pas celle de $\vec u$).

On cherche $a$, $b$ tels que $\vec w = a\vec u + b\vec v$ :
$$\begin{cases} 2 = a \\ 3 = b \\ 1 = 2a - b \end{cases}$$
Les deux premières donnent $a = 2$, $b = 3$, et la troisième est vérifiée : $2 \times 2 - 3 = 1$.

Donc $\vec w = 2\vec u + 3\vec v$ : les trois vecteurs sont coplanaires.`,
    },
    pieges: [
      t`Ne pas oublier de **vérifier la 3ᵉ équation** : c'est elle qui décide.`,
    ],
    voir: ['esp-base', 'esp-colineaires'],
  },

  'esp-base': {
    quand: t`« Montrer que $(\vec u, \vec v, \vec w)$ est une base de l'espace » : il faut montrer que les trois vecteurs ne sont **pas** coplanaires.`,
    etapes: [
      t`Vérifier que $\vec u$ et $\vec v$ ne sont pas colinéaires.`,
      t`Supposer $\vec w = a\vec u + b\vec v$ et écrire le système.`,
      t`Montrer que ce système n'a **pas de solution** (contradiction sur une équation).`,
      t`Conclure : les vecteurs ne sont pas coplanaires, donc ils forment une base.`,
    ],
    exemple: {
      enonce: t`Montrer que $\vec u(1 ; 0 ; 1)$, $\vec v(0 ; 1 ; 1)$ et $\vec w(1 ; 1 ; 0)$ forment une base de l'espace.`,
      solution: t`$\vec u$ et $\vec v$ ne sont pas colinéaires. Supposons $\vec w = a\vec u + b\vec v$ :
$$\begin{cases} 1 = a \\ 1 = b \\ 0 = a + b \end{cases}$$
Les deux premières donnent $a = b = 1$, mais alors $a + b = 2 \neq 0$ : contradiction.

$\vec w$ ne s'écrit pas comme combinaison de $\vec u$ et $\vec v$ : les trois vecteurs ne sont pas coplanaires, donc $(\vec u, \vec v, \vec w)$ est une base de l'espace.`,
    },
    pieges: [
      t`Une base de l'espace contient **trois** vecteurs non coplanaires (pas seulement non colinéaires deux à deux).`,
    ],
    voir: ['esp-coplanaires', 'rai-absurde'],
  },

  'esp-representation': {
    quand: t`« Déterminer une représentation paramétrique de la droite $(AB)$ » ou de la droite passant par $A$ et dirigée par $\vec u$.`,
    etapes: [
      t`Trouver un point $A$ de la droite et un vecteur directeur $\vec u(a ; b ; c)$ (par exemple $\overrightarrow{AB}$).`,
      t`Écrire : $\begin{cases} x = x_A + at \\ y = y_A + bt \\ z = z_A + ct \end{cases}$, $t \in \mathbb{R}$.`,
    ],
    exemple: {
      enonce: t`Déterminer une représentation paramétrique de la droite $(AB)$ avec $A(1 ; -1 ; 2)$ et $B(3 ; 0 ; 1)$.`,
      solution: t`$\overrightarrow{AB}(2 ; 1 ; -1)$ est un vecteur directeur et $A$ est un point de la droite :
$$\begin{cases} x = 1 + 2t \\ y = -1 + t \\ z = 2 - t \end{cases} \quad t \in \mathbb{R}$$`,
    },
    pieges: [
      t`Une droite a une **infinité** de représentations paramétriques : celle de l'énoncé peut être différente de la vôtre et juste quand même.`,
      t`Ne pas oublier « $t \in \mathbb{R}$ ».`,
    ],
    voir: ['esp-point-droite', 'esp-intersection-droites'],
  },

  'esp-point-droite': {
    quand: t`« Le point $C$ appartient-il à la droite $d$ ? » avec $d$ donnée par une représentation paramétrique.`,
    etapes: [
      t`Remplacer $x$, $y$, $z$ par les coordonnées du point.`,
      t`Trouver $t$ avec une équation.`,
      t`Vérifier que **le même** $t$ convient pour les deux autres. Si oui, le point est sur la droite.`,
    ],
    exemple: {
      enonce: t`$d : x = 1 + 2t$, $y = -1 + t$, $z = 2 - t$. Les points $C(5 ; 1 ; 0)$ et $D(5 ; 1 ; 1)$ sont-ils sur $d$ ?`,
      solution: t`- Pour $C$ : $5 = 1 + 2t$ donne $t = 2$. Puis $y = -1 + 2 = 1$ ✓ et $z = 2 - 2 = 0$ ✓. Donc $C \in d$.
- Pour $D$ : $t = 2$ aussi, mais $z = 0 \neq 1$. Donc $D \notin d$.`,
    },
    pieges: [
      t`Un seul $t$ pour les trois équations.`,
    ],
    voir: ['esp-representation'],
  },

  'esp-position-droites': {
    quand: t`« Étudier la position relative des droites $d_1$ et $d_2$ » : sécantes, parallèles ou non coplanaires.`,
    etapes: [
      t`Comparer les vecteurs directeurs. S'ils sont **colinéaires**, les droites sont parallèles : elles sont confondues si un point de $d_1$ est sur $d_2$, strictement parallèles sinon.`,
      t`S'ils ne sont pas colinéaires, résoudre le système $d_1 = d_2$ avec **deux paramètres différents** ($t$ et $s$).`,
      t`Une solution : les droites sont **sécantes**. Aucune solution : elles sont **non coplanaires**.`,
    ],
    exemple: {
      enonce: t`$d_1 : (1 + 2t ; -1 + t ; 2 - t)$ et $d_2$ passe par l'origine $O$ avec le vecteur directeur $\vec v(4 ; 2 ; -2)$. Position relative ?`,
      solution: t`$d_1$ a pour vecteur directeur $\vec u(2 ; 1 ; -1)$, et $\vec v = 2\vec u$ : les droites sont **parallèles**.

$A(1 ; -1 ; 2) \in d_1$. Est-il sur $d_2 : (4s ; 2s ; -2s)$ ? $4s = 1$ donne $s = \frac14$, mais alors $2s = \frac12 \neq -1$. Donc $A \notin d_2$.

Les droites sont strictement parallèles.`,
    },
    pieges: [
      t`Dans l'espace, deux droites sans point commun ne sont **pas forcément parallèles** : elles peuvent être non coplanaires.`,
    ],
    voir: ['esp-intersection-droites', 'esp-colineaires'],
  },

  'esp-intersection-droites': {
    quand: t`« Montrer que $d_1$ et $d_2$ sont sécantes et donner les coordonnées du point d'intersection ».`,
    etapes: [
      t`Vérifier que les vecteurs directeurs ne sont pas colinéaires.`,
      t`Écrire les deux représentations avec des paramètres **différents** ($t$ et $s$), puis égaler les coordonnées : 3 équations, 2 inconnues.`,
      t`Résoudre avec deux équations, **vérifier** la troisième.`,
      t`Remplacer $t$ (ou $s$) pour obtenir le point.`,
    ],
    exemple: {
      enonce: t`$d_1 : (1 + t ; 2 - t ; t)$ et $d_2 : (1 + s ; -1 + 2s ; 2 - s)$. Montrer qu'elles sont sécantes et trouver leur point d'intersection.`,
      solution: t`Vecteurs directeurs $(1 ; -1 ; 1)$ et $(1 ; 2 ; -1)$, non colinéaires.
$$\begin{cases} 1 + t = 1 + s \\ 2 - t = -1 + 2s \\ t = 2 - s \end{cases}$$
La 1ʳᵉ donne $t = s$. La 2ᵉ devient $2 - s = -1 + 2s$, donc $s = 1$ et $t = 1$. La 3ᵉ : $1 = 2 - 1$ ✓.

Les droites sont sécantes au point de paramètre $t = 1$ : $(2 ; 1 ; 1)$.`,
    },
    pieges: [
      t`Utiliser la **même lettre** pour les deux paramètres est l'erreur classique : on trouverait de fausses solutions.`,
    ],
    voir: ['esp-position-droites', 'esp-representation'],
  },

  'esp-droite-plan-parallele': {
    quand: t`« Montrer que la droite $(d)$ est parallèle au plan $\mathcal P$ ».`,
    etapes: [
      t`Méthode 1 : montrer que $(d)$ est parallèle à une droite **contenue** dans $\mathcal P$.`,
      t`Méthode 2 : montrer que le vecteur directeur de $(d)$ est combinaison de deux vecteurs directeurs de $\mathcal P$ (coplanaires).`,
      t`Méthode 3 (avec le produit scalaire) : le vecteur directeur de $(d)$ est orthogonal à un vecteur normal de $\mathcal P$.`,
    ],
    exemple: {
      enonce: t`${cube} Montrer que la droite $(EG)$ est parallèle au plan $(ABC)$.`,
      solution: t`$\overrightarrow{EG} = \overrightarrow{EF} + \overrightarrow{FG} = \overrightarrow{AB} + \overrightarrow{AD}$.

$\overrightarrow{AB}$ et $\overrightarrow{AD}$ sont deux vecteurs directeurs non colinéaires du plan $(ABC)$, et $\overrightarrow{EG}$ en est une combinaison.

Donc $(EG)$ est parallèle au plan $(ABC)$. (Plus directement : $\overrightarrow{EG} = \overrightarrow{AC}$, et $(AC)$ est contenue dans le plan.)`,
    },
    pieges: [
      t`« Parallèle à un plan » inclut le cas où la droite est **dans** le plan.`,
    ],
    voir: ['esp-plans-paralleles', 'ps-inter-droite-plan'],
  },

  'esp-plans-paralleles': {
    quand: t`« Montrer que les plans $\mathcal P_1$ et $\mathcal P_2$ sont parallèles ».`,
    etapes: [
      t`Montrer que deux vecteurs **non colinéaires** de $\mathcal P_1$ sont aussi des vecteurs directeurs de $\mathcal P_2$ (combinaisons de vecteurs de $\mathcal P_2$).`,
      t`Avec le produit scalaire : montrer que leurs vecteurs normaux sont colinéaires.`,
      t`Pour savoir s'ils sont distincts : tester si un point de l'un appartient à l'autre.`,
    ],
    exemple: {
      enonce: t`${cube} Montrer que les plans $(BDE)$ et $(CFH)$ sont parallèles.`,
      solution: t`$B(1 ; 0 ; 0)$, $D(0 ; 1 ; 0)$, $E(0 ; 0 ; 1)$, $C(1 ; 1 ; 0)$, $F(1 ; 0 ; 1)$, $H(0 ; 1 ; 1)$.

$\overrightarrow{BD}(-1 ; 1 ; 0)$, $\overrightarrow{BE}(-1 ; 0 ; 1)$, $\overrightarrow{CF}(0 ; -1 ; 1)$, $\overrightarrow{CH}(-1 ; 0 ; 1)$.

On a $\overrightarrow{BE} = \overrightarrow{CH}$ et $\overrightarrow{BD} = \overrightarrow{CH} - \overrightarrow{CF}$.

Les vecteurs non colinéaires $\overrightarrow{BD}$ et $\overrightarrow{BE}$ sont donc des vecteurs directeurs de $(CFH)$ : les plans sont parallèles.`,
    },
    pieges: [
      t`Un seul vecteur commun ne suffit pas : il en faut deux non colinéaires.`,
    ],
    voir: ['esp-droite-plan-parallele', 'ps-normal'],
  },

  'esp-toit': {
    quand: t`Deux plans sécants contiennent chacun une droite, et ces deux droites sont parallèles : on cherche la direction de l'intersection des plans.`,
    etapes: [
      t`Énoncé du **théorème du toit** : si $d_1 \subset \mathcal P_1$, $d_2 \subset \mathcal P_2$, $d_1 \parallel d_2$, et si $\mathcal P_1$ et $\mathcal P_2$ sont sécants selon $\Delta$, alors $\Delta$ est parallèle à $d_1$ et $d_2$.`,
      t`Vérifier les trois hypothèses, puis conclure.`,
      t`Pour placer $\Delta$, il suffit ensuite d'un point commun aux deux plans.`,
    ],
    exemple: {
      enonce: t`${cube} Les plans $(ADG)$ et $(BCE)$ sont sécants selon une droite $\Delta$. Quelle est sa direction ? Donner un point de $\Delta$.`,
      solution: t`$(AD) \subset (ADG)$, $(BC) \subset (BCE)$, et $(AD) \parallel (BC)$ (face $ABCD$).

D'après le théorème du toit, $\Delta$ est parallèle à $(AD)$.

Le centre $O\left(\frac12 ; \frac12 ; \frac12\right)$ du cube est le milieu de $[AG]$ et de $[BH]$ : il est dans les deux plans (car $H \in (BCE)$, le plan $BCHE$). Donc $\Delta$ est la parallèle à $(AD)$ passant par $O$.`,
    },
    pieges: [
      t`Le théorème donne seulement la **direction** : il faut encore un point.`,
    ],
    voir: ['esp-section', 'esp-plans-paralleles'],
  },

  'esp-section': {
    quand: t`« Construire la section du cube par le plan $(IJK)$ ».`,
    etapes: [
      t`Deux points d'une **même face** : on les relie, c'est un côté de la section.`,
      t`Deux faces **parallèles** sont coupées selon des segments **parallèles** : on trace la parallèle sur la face opposée.`,
      t`Si besoin, prolonger une droite de la section pour trouver un point sur une arête (dans le plan d'une face).`,
      t`Continuer face par face jusqu'à refermer le polygone.`,
    ],
    exemple: {
      enonce: t`${cube} $I$, $J$, $K$ sont les milieux de $[AB]$, $[BC]$ et $[GH]$. Construire la section du cube par le plan $(IJK)$.`,
      solution: t`- $I$ et $J$ sont dans la face $ABCD$ : on trace $[IJ]$.
- La face $EFGH$ est parallèle à $ABCD$ : la section y est un segment parallèle à $(IJ)$ passant par $K$. Il coupe $[EH]$ en son milieu $L$.
- De même, les faces opposées $ABFE$ et $DCGH$ sont coupées selon des segments parallèles, ainsi que $BCGF$ et $ADHE$. On trouve les milieux $N$ de $[CG]$ et $M$ de $[AE]$.

La section est l'hexagone $IJNKLM$ (régulier, tous ses sommets sont des milieux d'arêtes).

Vérification par le calcul : $I$, $J$, $K$, $L$, $M$, $N$ vérifient tous $x - y + z = \frac12$.`,
    },
    pieges: [
      t`On ne relie que des points situés **sur une même face**.`,
    ],
    voir: ['esp-toit', 'esp-plans-paralleles'],
  },
}
