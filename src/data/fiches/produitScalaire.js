// Fiches méthode — Produit scalaire et orthogonalité dans l'espace. Même format que suites.js.
import { cube } from './espace.js'

const t = String.raw

export const fichesProduitScalaire = {
  'ps-calcul': {
    quand: t`Calculer $\vec u \cdot \vec v$ : avec des coordonnées, avec des normes et un angle, ou avec un projeté orthogonal.`,
    etapes: [
      t`**Coordonnées** (repère orthonormé) : $\vec u \cdot \vec v = xx' + yy' + zz'$.`,
      t`**Normes et angle** : $\vec u \cdot \vec v = \|\vec u\| \times \|\vec v\| \times \cos(\vec u, \vec v)$.`,
      t`**Projection** : si $H$ est le projeté orthogonal de $C$ sur $(AB)$, alors $\overrightarrow{AB} \cdot \overrightarrow{AC} = \overrightarrow{AB} \cdot \overrightarrow{AH}$.`,
    ],
    exemple: {
      enonce: t`1) Calculer $\vec u \cdot \vec v$ avec $\vec u(2 ; -1 ; 3)$ et $\vec v(1 ; 4 ; -2)$. 2) ${cube} Calculer $\overrightarrow{AB} \cdot \overrightarrow{AG}$.`,
      solution: t`1) $\vec u \cdot \vec v = 2 \times 1 + (-1) \times 4 + 3 \times (-2) = 2 - 4 - 6 = -8$.

2) Le projeté orthogonal de $G$ sur $(AB)$ est $B$, donc $\overrightarrow{AB} \cdot \overrightarrow{AG} = \overrightarrow{AB} \cdot \overrightarrow{AB} = AB^2 = 1$.

Vérification en coordonnées : $(1 ; 0 ; 0) \cdot (1 ; 1 ; 1) = 1$.`,
    },
    pieges: [
      t`La formule en coordonnées n'est valable que dans un repère **orthonormé**.`,
      t`Un produit scalaire est un **nombre**, pas un vecteur.`,
    ],
    voir: ['ps-norme', 'ps-angle', 'ps-orthogonal'],
  },

  'ps-norme': {
    quand: t`Calculer une longueur $AB$ ou la norme d'un vecteur en coordonnées.`,
    etapes: [
      t`Calculer les coordonnées du vecteur $\overrightarrow{AB}(a ; b ; c)$.`,
      t`$AB = \|\overrightarrow{AB}\| = \sqrt{a^2 + b^2 + c^2}$ (repère orthonormé).`,
      t`Simplifier la racine si possible.`,
    ],
    exemple: {
      enonce: t`Calculer la distance $AB$ avec $A(1 ; -2 ; 3)$ et $B(3 ; 0 ; -1)$.`,
      solution: t`$\overrightarrow{AB}(2 ; 2 ; -4)$, donc
$$AB = \sqrt{4 + 4 + 16} = \sqrt{24} = 2\sqrt6$$`,
    },
    pieges: [
      t`$(-4)^2 = 16$ : un carré est toujours positif.`,
    ],
    voir: ['ps-calcul', 'esp-milieu'],
  },

  'ps-angle': {
    quand: t`« Calculer une mesure de l'angle $\widehat{BAC}$ » ou l'angle entre deux vecteurs.`,
    etapes: [
      t`Calculer $\overrightarrow{AB} \cdot \overrightarrow{AC}$ en coordonnées.`,
      t`Calculer $AB$ et $AC$.`,
      t`$\cos\widehat{BAC} = \dfrac{\overrightarrow{AB} \cdot \overrightarrow{AC}}{AB \times AC}$, puis retrouver l'angle (valeur remarquable ou $\arccos$ à la calculatrice).`,
    ],
    exemple: {
      enonce: t`${cube} Calculer l'angle $\widehat{FAC}$.`,
      solution: t`$\overrightarrow{AF}(1 ; 0 ; 1)$ et $\overrightarrow{AC}(1 ; 1 ; 0)$.

$\overrightarrow{AF} \cdot \overrightarrow{AC} = 1$, $AF = AC = \sqrt2$.
$$\cos\widehat{FAC} = \frac{1}{\sqrt2 \times \sqrt2} = \frac12$$
Donc $\widehat{FAC} = 60°$ (le triangle $AFC$, formé de diagonales de faces, est équilatéral).`,
    },
    pieges: [
      t`Mettre la calculatrice en degrés si on veut une réponse en degrés.`,
    ],
    voir: ['ps-calcul', 'trigo-valeurs'],
  },

  'ps-orthogonal': {
    quand: t`« Montrer que les droites $(AB)$ et $(CD)$ sont orthogonales » (ou deux vecteurs).`,
    etapes: [
      t`Calculer les coordonnées de vecteurs directeurs des deux droites.`,
      t`Calculer leur produit scalaire.`,
      t`S'il est nul, les vecteurs (et les droites) sont orthogonaux.`,
    ],
    exemple: {
      enonce: t`${cube} Montrer que les droites $(AG)$ et $(BD)$ sont orthogonales.`,
      solution: t`$\overrightarrow{AG}(1 ; 1 ; 1)$ et $\overrightarrow{BD}(-1 ; 1 ; 0)$.

$\overrightarrow{AG} \cdot \overrightarrow{BD} = -1 + 1 + 0 = 0$.

Donc les droites $(AG)$ et $(BD)$ sont orthogonales.`,
    },
    pieges: [
      t`Dans l'espace, deux droites orthogonales ne se coupent pas forcément : « orthogonales » n'est pas « perpendiculaires ».`,
    ],
    voir: ['ps-droite-plan', 'ps-calcul'],
  },

  'ps-droite-plan': {
    quand: t`« Montrer que la droite $(d)$ est orthogonale au plan $\mathcal P$ ».`,
    etapes: [
      t`Trouver deux vecteurs **non colinéaires** du plan.`,
      t`Montrer que le vecteur directeur de $(d)$ est orthogonal à **chacun** des deux (produits scalaires nuls).`,
      t`Conclure : $(d)$ est orthogonale à deux droites sécantes du plan, donc au plan. Son vecteur directeur est alors un **vecteur normal** au plan.`,
    ],
    exemple: {
      enonce: t`${cube} Montrer que $(AG)$ est orthogonale au plan $(BDE)$.`,
      solution: t`$\overrightarrow{AG}(1 ; 1 ; 1)$, $\overrightarrow{BD}(-1 ; 1 ; 0)$ et $\overrightarrow{BE}(-1 ; 0 ; 1)$, ces deux derniers n'étant pas colinéaires.
- $\overrightarrow{AG} \cdot \overrightarrow{BD} = -1 + 1 + 0 = 0$
- $\overrightarrow{AG} \cdot \overrightarrow{BE} = -1 + 0 + 1 = 0$

$(AG)$ est orthogonale à deux droites sécantes de $(BDE)$, donc au plan $(BDE)$.`,
    },
    pieges: [
      t`Un seul produit scalaire nul ne suffit pas : il en faut **deux**, avec des vecteurs non colinéaires.`,
    ],
    voir: ['ps-normal', 'ps-orthogonal'],
  },

  'ps-normal': {
    quand: t`« Déterminer un vecteur normal au plan » à partir de deux de ses vecteurs directeurs (ou de trois points).`,
    etapes: [
      t`Poser $\vec n(a ; b ; c)$ et écrire $\vec n \cdot \vec u = 0$ et $\vec n \cdot \vec v = 0$ : deux équations, trois inconnues.`,
      t`Il y a une infinité de solutions : **fixer** une coordonnée (par exemple $b = 1$) et calculer les autres.`,
      t`Vérifier les deux produits scalaires.`,
    ],
    exemple: {
      enonce: t`Déterminer un vecteur normal au plan dirigé par $\vec u(1 ; 2 ; 0)$ et $\vec v(0 ; 1 ; -1)$.`,
      solution: t`$\vec n(a ; b ; c)$ est normal si
$$\begin{cases} a + 2b = 0 \\ b - c = 0 \end{cases}$$
On fixe $b = 1$ : alors $c = 1$ et $a = -2$. Donc $\vec n(-2 ; 1 ; 1)$.

Vérification : $\vec n \cdot \vec u = -2 + 2 + 0 = 0$ et $\vec n \cdot \vec v = 0 + 1 - 1 = 0$.`,
    },
    pieges: [
      t`$\vec n = \vec 0$ est toujours solution du système mais n'est **pas** un vecteur normal : il faut un vecteur non nul.`,
    ],
    voir: ['ps-equation-plan', 'ps-plan-abc'],
  },

  'ps-equation-plan': {
    quand: t`« Déterminer une équation cartésienne du plan passant par $A$ et de vecteur normal $\vec n$ » (ou perpendiculaire à une droite donnée).`,
    etapes: [
      t`Avec $\vec n(a ; b ; c)$, le plan a une équation $ax + by + cz + d = 0$.`,
      t`Trouver $d$ en écrivant que $A$ vérifie l'équation.`,
      t`Si le plan est perpendiculaire à une droite, le vecteur directeur de la droite est un vecteur normal.`,
    ],
    exemple: {
      enonce: t`Déterminer une équation du plan $\mathcal P$ passant par $A(2 ; -1 ; 3)$ et de vecteur normal $\vec n(1 ; -2 ; 4)$.`,
      solution: t`$\mathcal P$ a une équation de la forme $x - 2y + 4z + d = 0$.

$A \in \mathcal P$ : $2 - 2 \times (-1) + 4 \times 3 + d = 0$, soit $16 + d = 0$, donc $d = -16$.

$\mathcal P : x - 2y + 4z - 16 = 0$.`,
    },
    pieges: [
      t`Les coefficients de $x$, $y$, $z$ sont les coordonnées de $\vec n$, dans l'ordre.`,
    ],
    voir: ['ps-normal', 'ps-plan-abc'],
  },

  'ps-plan-abc': {
    quand: t`« Déterminer une équation cartésienne du plan $(ABC)$ ».`,
    etapes: [
      t`Vérifier que $A$, $B$, $C$ ne sont pas alignés ($\overrightarrow{AB}$ et $\overrightarrow{AC}$ non colinéaires).`,
      t`Trouver un vecteur normal $\vec n$ orthogonal à $\overrightarrow{AB}$ et $\overrightarrow{AC}$.`,
      t`Écrire l'équation avec $\vec n$, et trouver $d$ avec le point $A$.`,
      t`Vérifier que $B$ et $C$ vérifient l'équation.`,
    ],
    exemple: {
      enonce: t`Déterminer une équation du plan $(ABC)$ avec $A(1 ; 1 ; 0)$, $B(2 ; 0 ; 1)$ et $C(0 ; 2 ; 3)$.`,
      solution: t`$\overrightarrow{AB}(1 ; -1 ; 1)$ et $\overrightarrow{AC}(-1 ; 1 ; 3)$, non colinéaires.

$\vec n(a ; b ; c)$ : $a - b + c = 0$ et $-a + b + 3c = 0$. En additionnant : $4c = 0$, donc $c = 0$ et $a = b$. On prend $\vec n(1 ; 1 ; 0)$.

Équation : $x + y + d = 0$, avec $A$ : $1 + 1 + d = 0$, donc $d = -2$.

$(ABC) : x + y - 2 = 0$. Vérification : $B$ donne $2 + 0 - 2 = 0$ ✓, $C$ donne $0 + 2 - 2 = 0$ ✓.`,
    },
    pieges: [
      t`Si l'énoncé propose un vecteur normal, il suffit de **vérifier** qu'il est orthogonal à $\overrightarrow{AB}$ et $\overrightarrow{AC}$.`,
    ],
    voir: ['ps-normal', 'ps-equation-plan', 'ps-point-plan'],
  },

  'ps-point-plan': {
    quand: t`« Le point $M$ appartient-il au plan $\mathcal P$ ? »`,
    etapes: [
      t`Remplacer $x$, $y$, $z$ par les coordonnées du point dans l'équation.`,
      t`Si on obtient $0$ : le point est dans le plan. Sinon, il n'y est pas.`,
    ],
    exemple: {
      enonce: t`$\mathcal P : 2x - y + z - 3 = 0$. Les points $M(1 ; 0 ; 1)$ et $N(0 ; 1 ; 2)$ appartiennent-ils à $\mathcal P$ ?`,
      solution: t`- $M$ : $2 - 0 + 1 - 3 = 0$, donc $M \in \mathcal P$.
- $N$ : $0 - 1 + 2 - 3 = -2 \neq 0$, donc $N \notin \mathcal P$.`,
    },
    pieges: [
      t`Bien respecter l'ordre $x$, $y$, $z$ des coordonnées.`,
    ],
    voir: ['ps-plan-abc'],
  },

  'ps-inter-droite-plan': {
    quand: t`« Déterminer l'intersection de la droite $d$ (paramétrique) et du plan $\mathcal P$ (cartésien) ».`,
    etapes: [
      t`Vérifier qu'ils sont sécants : $\vec u \cdot \vec n \neq 0$ (sinon la droite est parallèle au plan).`,
      t`Remplacer $x$, $y$, $z$ de la représentation paramétrique dans l'équation du plan.`,
      t`Résoudre l'équation en $t$, puis calculer le point.`,
    ],
    exemple: {
      enonce: t`$d : (1 + t ; 2t ; 3 - t)$ et $\mathcal P : x + y + z - 2 = 0$. Déterminer leur intersection.`,
      solution: t`$\vec u(1 ; 2 ; -1)$, $\vec n(1 ; 1 ; 1)$ : $\vec u \cdot \vec n = 2 \neq 0$, donc $d$ et $\mathcal P$ sont sécants.

On remplace : $(1 + t) + 2t + (3 - t) - 2 = 0$, soit $2t + 2 = 0$, donc $t = -1$.

Le point d'intersection est $(1 - 1 ; -2 ; 3 + 1) = (0 ; -2 ; 4)$.`,
    },
    pieges: [
      t`Si l'équation en $t$ devient « $0 = 0$ », la droite est dans le plan ; si elle devient impossible, la droite est strictement parallèle.`,
    ],
    voir: ['esp-droite-plan-parallele', 'ps-projete-plan'],
  },

  'ps-inter-plans': {
    quand: t`« Montrer que $\mathcal P_1$ et $\mathcal P_2$ sont sécants et déterminer leur intersection ».`,
    etapes: [
      t`Vérifier que les vecteurs normaux ne sont **pas colinéaires** : les plans sont sécants selon une droite.`,
      t`Poser une variable égale à $t$ (souvent $z = t$).`,
      t`Résoudre le système des deux équations pour exprimer $x$ et $y$ en fonction de $t$ : c'est une représentation paramétrique de la droite.`,
    ],
    exemple: {
      enonce: t`$\mathcal P_1 : x + y + z - 1 = 0$ et $\mathcal P_2 : x - y + 2z - 3 = 0$. Déterminer leur intersection.`,
      solution: t`$\vec n_1(1 ; 1 ; 1)$ et $\vec n_2(1 ; -1 ; 2)$ ne sont pas colinéaires : les plans sont sécants.

On pose $z = t$ : $x + y = 1 - t$ et $x - y = 3 - 2t$. En additionnant : $2x = 4 - 3t$, donc $x = 2 - \frac32 t$, puis $y = 1 - t - x = -1 + \frac12 t$.

L'intersection est la droite :
$$\begin{cases} x = 2 - \frac32 t \\ y = -1 + \frac12 t \\ z = t \end{cases} \quad t \in \mathbb{R}$$`,
    },
    pieges: [
      t`Vérifier en remplaçant dans les **deux** équations.`,
    ],
    voir: ['esp-toit', 'ps-inter-droite-plan'],
  },

  'ps-projete-plan': {
    quand: t`« Déterminer les coordonnées du projeté orthogonal $H$ de $M$ sur le plan $\mathcal P$ ».`,
    etapes: [
      t`Écrire la droite passant par $M$ et dirigée par le **vecteur normal** $\vec n$ du plan.`,
      t`Chercher son intersection avec $\mathcal P$ : c'est $H$.`,
    ],
    exemple: {
      enonce: t`Déterminer le projeté orthogonal $H$ de $M(3 ; 1 ; 2)$ sur $\mathcal P : x + y + z - 3 = 0$.`,
      solution: t`$\vec n(1 ; 1 ; 1)$. La droite passant par $M$ dirigée par $\vec n$ : $(3 + t ; 1 + t ; 2 + t)$.

Dans $\mathcal P$ : $(3 + t) + (1 + t) + (2 + t) - 3 = 0$, soit $3t + 3 = 0$, donc $t = -1$.

$H(2 ; 0 ; 1)$.`,
    },
    pieges: [
      t`On dirige la droite par le vecteur **normal**, pas par un vecteur du plan.`,
    ],
    voir: ['ps-distance-plan', 'ps-inter-droite-plan'],
  },

  'ps-projete-droite': {
    quand: t`« Déterminer le projeté orthogonal $H$ de $M$ sur la droite $d$ ».`,
    etapes: [
      t`Écrire $H$ comme un point de $d$ avec son paramètre $t$.`,
      t`Écrire la condition $\overrightarrow{MH} \cdot \vec u = 0$ ($\vec u$ vecteur directeur de $d$).`,
      t`Résoudre en $t$, puis calculer $H$.`,
    ],
    exemple: {
      enonce: t`$d$ passe par $A(1 ; 0 ; 0)$, dirigée par $\vec u(1 ; 1 ; 0)$. Déterminer le projeté orthogonal $H$ de $M(3 ; 1 ; 2)$ sur $d$.`,
      solution: t`$H(1 + t ; t ; 0)$, donc $\overrightarrow{MH}(t - 2 ; t - 1 ; -2)$.

$\overrightarrow{MH} \cdot \vec u = (t - 2) + (t - 1) + 0 = 2t - 3 = 0$, donc $t = \frac32$.

$H\left(\frac52 ; \frac32 ; 0\right)$.`,
    },
    pieges: [
      t`Ne pas confondre avec le projeté sur un plan (où l'on utilise le vecteur normal).`,
    ],
    voir: ['ps-projete-plan', 'ps-orthogonal'],
  },

  'ps-distance-plan': {
    quand: t`« Calculer la distance du point $M$ au plan $\mathcal P$ ».`,
    etapes: [
      t`Déterminer le projeté orthogonal $H$ de $M$ sur $\mathcal P$.`,
      t`La distance cherchée est $MH$ : c'est la plus courte distance entre $M$ et un point du plan.`,
      t`Pour vérifier (formule hors programme) : $\dfrac{|ax_M + by_M + cz_M + d|}{\sqrt{a^2 + b^2 + c^2}}$.`,
    ],
    exemple: {
      enonce: t`Calculer la distance de $M(1 ; 2 ; 3)$ au plan $\mathcal P : 2x - y + 2z + 3 = 0$.`,
      solution: t`Droite par $M$ dirigée par $\vec n(2 ; -1 ; 2)$ : $(1 + 2t ; 2 - t ; 3 + 2t)$.

Dans $\mathcal P$ : $2(1 + 2t) - (2 - t) + 2(3 + 2t) + 3 = 0$, soit $9t + 9 = 0$, donc $t = -1$ et $H(-1 ; 3 ; 1)$.

$\overrightarrow{MH}(-2 ; 1 ; -2)$, donc $MH = \sqrt{4 + 1 + 4} = 3$.

Vérification : $\dfrac{|2 - 2 + 6 + 3|}{\sqrt{4 + 1 + 4}} = \dfrac93 = 3$.`,
    },
    pieges: [
      t`La distance est une longueur : elle est positive.`,
    ],
    voir: ['ps-projete-plan', 'ps-volume'],
  },

  'ps-volume': {
    quand: t`« Calculer le volume du tétraèdre », souvent couplé avec la distance d'un point à un plan (la hauteur).`,
    etapes: [
      t`$V = \dfrac13 \times \text{aire de la base} \times \text{hauteur}$.`,
      t`Choisir la base dont l'aire est facile (triangle rectangle dans une face du cube…).`,
      t`Astuce fréquente : calculer le volume de deux façons (deux bases différentes) pour en déduire une hauteur, donc une distance.`,
    ],
    exemple: {
      enonce: t`${cube} Calculer le volume du tétraèdre $ABDE$, puis en déduire la distance de $A$ au plan $(BDE)$.`,
      solution: t`Avec la base $ABD$ (triangle rectangle isocèle d'aire $\frac12$) et la hauteur $AE = 1$ :
$$V = \frac13 \times \frac12 \times 1 = \frac16$$
Avec la base $BDE$ : c'est un triangle équilatéral de côté $\sqrt2$ (diagonales de faces), d'aire $\frac{\sqrt3}{4} \times 2 = \frac{\sqrt3}{2}$. Si $h$ est la distance de $A$ au plan $(BDE)$ :
$$\frac13 \times \frac{\sqrt3}{2} \times h = \frac16 \iff h = \frac{1}{\sqrt3} = \frac{\sqrt3}{3}$$`,
    },
    pieges: [
      t`Ne pas oublier le $\frac13$ (sinon c'est le volume d'un prisme).`,
    ],
    voir: ['ps-distance-plan', 'ps-projete-plan'],
  },

  'ps-mediateur': {
    quand: t`« Déterminer une équation du plan médiateur du segment $[AB]$ » (l'ensemble des points équidistants de $A$ et $B$).`,
    etapes: [
      t`Le plan médiateur passe par le **milieu** $I$ de $[AB]$.`,
      t`Il a pour vecteur normal $\overrightarrow{AB}$.`,
      t`Écrire l'équation avec $\overrightarrow{AB}$ et trouver $d$ avec $I$.`,
    ],
    exemple: {
      enonce: t`Déterminer une équation du plan médiateur de $[AB]$ avec $A(1 ; 0 ; 2)$ et $B(3 ; 2 ; 0)$.`,
      solution: t`$I(2 ; 1 ; 1)$ et $\overrightarrow{AB}(2 ; 2 ; -2)$. On peut prendre $\vec n(1 ; 1 ; -1)$ (colinéaire).

Équation : $x + y - z + d = 0$, avec $I$ : $2 + 1 - 1 + d = 0$, donc $d = -2$.

Plan médiateur : $x + y - z - 2 = 0$.`,
    },
    pieges: [
      t`On peut simplifier le vecteur normal (diviser par 2) : un vecteur colinéaire est aussi normal.`,
    ],
    voir: ['ps-equation-plan', 'cx-cercle'],
  },
}
