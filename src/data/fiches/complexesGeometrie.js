// Fiches méthode — Complexes : module, argument, forme exponentielle, géométrie (maths expertes).
// Même format que suites.js.
const t = String.raw

export const fichesComplexesGeometrie = {
  'cx-module': {
    quand: t`Calculer $|z|$, éventuellement d'un produit, d'un quotient ou d'une puissance.`,
    etapes: [
      t`$|a + ib| = \sqrt{a^2 + b^2}$ (c'est la distance $OM$).`,
      t`Pour un produit, un quotient ou une puissance, **ne pas développer** : $|zz'| = |z|\,|z'|$, $\left|\frac{z}{z'}\right| = \frac{|z|}{|z'|}$, $|z^n| = |z|^n$.`,
      t`$|\bar z| = |z|$ et $|z|^2 = z\bar z$.`,
    ],
    exemple: {
      enonce: t`Calculer $|3 - 4i|$, $|(1 + i)(2 - i)|$ et $|(1 + i)^6|$.`,
      solution: t`- $|3 - 4i| = \sqrt{9 + 16} = 5$
- $|(1 + i)(2 - i)| = |1 + i| \times |2 - i| = \sqrt2 \times \sqrt5 = \sqrt{10}$
- $|(1 + i)^6| = |1 + i|^6 = (\sqrt2)^6 = 8$`,
    },
    pieges: [
      t`$|a + ib| \neq a + b$, et $|z + z'| \neq |z| + |z'|$ en général.`,
    ],
    voir: ['cx-argument', 'cx-distance'],
  },

  'cx-argument': {
    quand: t`« Déterminer un argument de $z$ ».`,
    etapes: [
      t`Calculer $r = |z|$.`,
      t`Calculer $\cos\theta = \dfrac{a}{r}$ et $\sin\theta = \dfrac{b}{r}$.`,
      t`Reconnaître l'angle avec les valeurs remarquables (cercle trigonométrique). L'argument est défini à $2\pi$ près.`,
      t`Cas simples : un réel positif a pour argument 0, un réel négatif $\pi$, $bi$ avec $b > 0$ a pour argument $\frac\pi2$.`,
    ],
    exemple: {
      enonce: t`Déterminer un argument de $z = -1 + i\sqrt3$, de $-2$ et de $3i$.`,
      solution: t`- $|z| = \sqrt{1 + 3} = 2$, $\cos\theta = -\frac12$ et $\sin\theta = \frac{\sqrt3}{2}$, donc $\theta = \frac{2\pi}{3}$.
- $\arg(-2) = \pi$ (réel négatif).
- $\arg(3i) = \frac\pi2$.`,
    },
    pieges: [
      t`Il faut **les deux** : $\cos\theta$ et $\sin\theta$. Le cosinus seul ne suffit pas à trouver l'angle.`,
    ],
    voir: ['cx-module', 'cx-alg-vers-exp', 'trigo-valeurs'],
  },

  'cx-alg-vers-exp': {
    quand: t`« Écrire $z$ sous forme exponentielle (ou trigonométrique) », à partir de $z = a + ib$.`,
    etapes: [
      t`Calculer le module $r = |z|$.`,
      t`Factoriser par $r$ : $z = r\left(\frac ar + i\frac br\right)$, et reconnaître $\cos\theta$ et $\sin\theta$.`,
      t`Écrire $z = r(\cos\theta + i\sin\theta) = re^{i\theta}$.`,
    ],
    exemple: {
      enonce: t`Écrire $z = \sqrt3 - i$ sous forme exponentielle.`,
      solution: t`$|z| = \sqrt{3 + 1} = 2$. Donc
$$z = 2\left(\frac{\sqrt3}{2} - \frac12 i\right)$$
On cherche $\theta$ tel que $\cos\theta = \frac{\sqrt3}{2}$ et $\sin\theta = -\frac12$ : $\theta = -\frac\pi6$.

$z = 2e^{-i\pi/6}$.`,
    },
    pieges: [
      t`Le module $r$ doit être **positif** : $-2e^{i\theta}$ n'est pas une forme exponentielle (c'est $2e^{i(\theta + \pi)}$).`,
    ],
    voir: ['cx-exp-vers-alg', 'cx-calcul-exp'],
  },

  'cx-exp-vers-alg': {
    quand: t`On connaît $z = re^{i\theta}$ et on veut sa forme algébrique.`,
    etapes: [
      t`Écrire $re^{i\theta} = r(\cos\theta + i\sin\theta)$.`,
      t`Remplacer $\cos\theta$ et $\sin\theta$ par leurs valeurs exactes.`,
      t`Développer.`,
    ],
    exemple: {
      enonce: t`Écrire $z = 4e^{3i\pi/4}$ sous forme algébrique.`,
      solution: t`$$\begin{aligned} z &= 4\left(\cos\frac{3\pi}{4} + i\sin\frac{3\pi}{4}\right) \\ &= 4\left(-\frac{\sqrt2}{2} + i\frac{\sqrt2}{2}\right) \\ &= -2\sqrt2 + 2\sqrt2\,i \end{aligned}$$`,
    },
    pieges: [
      t`$\cos\frac{3\pi}{4}$ est **négatif** (deuxième quadrant).`,
    ],
    voir: ['cx-alg-vers-exp', 'trigo-valeurs'],
  },

  'cx-calcul-exp': {
    quand: t`Produits, quotients, puissances de complexes : la forme exponentielle rend les calculs très rapides.`,
    etapes: [
      t`Mettre chaque nombre sous forme exponentielle.`,
      t`Produit : on **multiplie** les modules et on **ajoute** les arguments : $re^{i\theta} \times r'e^{i\theta'} = rr'e^{i(\theta + \theta')}$.`,
      t`Quotient : on divise les modules et on **soustrait** les arguments. Puissance : $(re^{i\theta})^n = r^n e^{in\theta}$.`,
    ],
    exemple: {
      enonce: t`$z_1 = 2e^{i\pi/3}$ et $z_2 = \sqrt2\,e^{-i\pi/4}$. Calculer $z_1z_2$, $\dfrac{z_1}{z_2}$ et $z_1^3$.`,
      solution: t`- $z_1 z_2 = 2\sqrt2\,e^{i(\pi/3 - \pi/4)} = 2\sqrt2\,e^{i\pi/12}$
- $\dfrac{z_1}{z_2} = \dfrac{2}{\sqrt2}e^{i(\pi/3 + \pi/4)} = \sqrt2\,e^{7i\pi/12}$
- $z_1^3 = 2^3 e^{3i\pi/3} = 8e^{i\pi} = -8$`,
    },
    pieges: [
      t`Diviser par $e^{-i\pi/4}$ revient à **ajouter** $\frac\pi4$.`,
    ],
    voir: ['cx-moivre', 'cx-alg-vers-exp'],
  },

  'cx-moivre': {
    quand: t`Calculer $(1 + i)^8$, ou « pour quelles valeurs de $n$ le nombre $z^n$ est-il réel (imaginaire pur) ? ».`,
    etapes: [
      t`Écrire $z = re^{i\theta}$.`,
      t`**Formule de Moivre** : $z^n = r^n e^{in\theta}$.`,
      t`$z^n$ est réel $\iff n\theta \equiv 0 \pmod \pi$ ; réel positif $\iff n\theta \equiv 0 \pmod{2\pi}$ ; imaginaire pur $\iff n\theta \equiv \frac\pi2 \pmod \pi$.`,
    ],
    exemple: {
      enonce: t`1) Calculer $(1 + i)^8$. 2) Pour quels entiers $n$ le nombre $(1 + i\sqrt3)^n$ est-il réel ?`,
      solution: t`1) $1 + i = \sqrt2\,e^{i\pi/4}$, donc $(1 + i)^8 = (\sqrt2)^8 e^{8i\pi/4} = 16e^{2i\pi} = 16$.

2) $1 + i\sqrt3 = 2e^{i\pi/3}$, donc $(1 + i\sqrt3)^n = 2^n e^{in\pi/3}$. Il est réel si et seulement si $\frac{n\pi}{3}$ est un multiple de $\pi$, c'est-à-dire si $n$ est un **multiple de 3**.`,
    },
    pieges: [
      t`Développer $(1 + i)^8$ avec le binôme est possible mais beaucoup plus long.`,
    ],
    voir: ['cx-calcul-exp', 'cx-racines-n'],
  },

  'cx-euler': {
    quand: t`« Linéariser $\cos^2 x$ (ou $\sin^2 x$, $\cos^3 x$) », souvent pour trouver une primitive.`,
    etapes: [
      t`Formules d'Euler : $\cos x = \dfrac{e^{ix} + e^{-ix}}{2}$ et $\sin x = \dfrac{e^{ix} - e^{-ix}}{2i}$.`,
      t`Remplacer, développer la puissance (identité remarquable ou binôme).`,
      t`Regrouper les termes $e^{ikx} + e^{-ikx} = 2\cos(kx)$, et $e^{ikx} - e^{-ikx} = 2i\sin(kx)$.`,
    ],
    exemple: {
      enonce: t`Linéariser $\cos^2 x$, puis en déduire une primitive de $\cos^2 x$.`,
      solution: t`$$\begin{aligned} \cos^2 x &= \left(\frac{e^{ix} + e^{-ix}}{2}\right)^2 = \frac{e^{2ix} + 2 + e^{-2ix}}{4} \\ &= \frac{2\cos(2x) + 2}{4} = \frac{1 + \cos(2x)}{2} \end{aligned}$$
Une primitive de $\cos^2 x$ est donc $\dfrac x2 + \dfrac{\sin(2x)}{4}$.`,
    },
    pieges: [
      t`$e^{ix} \times e^{-ix} = e^0 = 1$ : le double produit vaut $2 \times 1 = 2$.`,
    ],
    voir: ['cx-trigo', 'prim-usuelles'],
  },

  'cx-trigo': {
    quand: t`Retrouver $\cos(2a)$, $\sin(2a)$, $\cos(a + b)$… sans les avoir apprises par cœur.`,
    etapes: [
      t`Partir d'une égalité d'exponentielles : $e^{i(a+b)} = e^{ia}e^{ib}$, ou $e^{2ia} = (e^{ia})^2$.`,
      t`Développer les deux membres sous forme algébrique.`,
      t`Identifier les parties réelles (formule du cosinus) et imaginaires (formule du sinus).`,
    ],
    exemple: {
      enonce: t`Retrouver les formules de $\cos(2a)$ et $\sin(2a)$.`,
      solution: t`$e^{2ia} = (e^{ia})^2$, donc
$$\begin{aligned} & \cos 2a + i\sin 2a \\ = \; & (\cos a + i\sin a)^2 \\ = \; & \cos^2 a - \sin^2 a + 2i\sin a\cos a \end{aligned}$$
En identifiant :
- $\cos 2a = \cos^2 a - \sin^2 a$
- $\sin 2a = 2\sin a\cos a$`,
    },
    pieges: [
      t`On identifie parce que $a$ est **réel** : $\cos$ et $\sin$ sont réels.`,
    ],
    voir: ['cx-euler', 'trigo-formules'],
  },

  'cx-distance': {
    quand: t`Calculer une longueur $AB$ quand les points sont donnés par leurs affixes.`,
    etapes: [
      t`$AB = |z_B - z_A|$.`,
      t`Calculer $z_B - z_A$ sous forme algébrique, puis son module.`,
    ],
    exemple: {
      enonce: t`$A$ et $B$ ont pour affixes $1 + i$ et $4 + 5i$. Calculer $AB$.`,
      solution: t`$z_B - z_A = 3 + 4i$, donc $AB = |3 + 4i| = \sqrt{9 + 16} = 5$.`,
    },
    pieges: [
      t`$AB = |z_B - z_A|$, et non $|z_B| - |z_A|$.`,
    ],
    voir: ['cx-module', 'cx-triangle', 'cx-cercle'],
  },

  'cx-angle': {
    quand: t`Calculer un angle orienté $(\overrightarrow{AB}, \overrightarrow{AC})$ à partir des affixes.`,
    etapes: [
      t`Calculer le quotient $Z = \dfrac{z_C - z_A}{z_B - z_A}$.`,
      t`$(\overrightarrow{AB}, \overrightarrow{AC}) = \arg Z$ (à $2\pi$ près).`,
      t`Bonus : $|Z| = \dfrac{AC}{AB}$.`,
    ],
    exemple: {
      enonce: t`$A$, $B$, $C$ ont pour affixes $0$, $2$ et $1 + i\sqrt3$. Déterminer l'angle $(\overrightarrow{AB}, \overrightarrow{AC})$ et la nature du triangle $ABC$.`,
      solution: t`$$Z = \frac{z_C - z_A}{z_B - z_A} = \frac{1 + i\sqrt3}{2} = e^{i\pi/3}$$
Donc $(\overrightarrow{AB}, \overrightarrow{AC}) = \frac\pi3$ et $|Z| = 1$, c'est-à-dire $AC = AB$.

Le triangle est isocèle en $A$ avec un angle de $60°$ : il est **équilatéral**.`,
    },
    pieges: [
      t`L'ordre compte : $\dfrac{z_C - z_A}{z_B - z_A}$ donne l'angle de $\overrightarrow{AB}$ **vers** $\overrightarrow{AC}$.`,
    ],
    voir: ['cx-triangle', 'cx-argument'],
  },

  'cx-triangle': {
    quand: t`« Déterminer la nature du triangle $ABC$ » (rectangle, isocèle, équilatéral).`,
    etapes: [
      t`Calculer $Z = \dfrac{z_C - z_A}{z_B - z_A}$ sous forme algébrique ou exponentielle.`,
      t`$|Z| = 1$ : $AB = AC$, isocèle en $A$.`,
      t`$Z$ imaginaire pur : angle droit en $A$. $Z = \pm i$ : rectangle isocèle en $A$. $Z = e^{\pm i\pi/3}$ : équilatéral.`,
      t`Autre méthode : calculer les trois longueurs $AB$, $AC$, $BC$ (et utiliser Pythagore).`,
    ],
    exemple: {
      enonce: t`$A$, $B$, $C$ ont pour affixes $1$, $2 + i$ et $i$. Quelle est la nature du triangle $ABC$ ?`,
      solution: t`$$\begin{aligned} Z &= \frac{z_C - z_A}{z_B - z_A} = \frac{-1 + i}{1 + i} \\ &= \frac{(-1 + i)(1 - i)}{2} \\ &= \frac{-1 + i + i - i^2}{2} = i \end{aligned}$$
$|Z| = 1$ donc $AC = AB$, et $\arg Z = \frac\pi2$ donc l'angle en $A$ est droit.

Le triangle $ABC$ est **rectangle isocèle en $A$**.`,
    },
    pieges: [
      t`Bien centrer le quotient sur le sommet étudié ($A$) : les deux vecteurs partent de $A$.`,
    ],
    voir: ['cx-angle', 'cx-distance'],
  },

  'cx-alignes': {
    quand: t`« Montrer que $A$, $B$, $C$ sont alignés » ou « que $(AB)$ et $(AD)$ sont perpendiculaires ».`,
    etapes: [
      t`Calculer $Z = \dfrac{z_C - z_A}{z_B - z_A}$.`,
      t`$Z$ **réel** : $A$, $B$, $C$ alignés (angle $0$ ou $\pi$).`,
      t`$Z$ **imaginaire pur** : $(AB) \perp (AC)$.`,
    ],
    exemple: {
      enonce: t`$A(1 + i)$, $B(3 + 2i)$, $C(7 + 4i)$ et $D(2 - i)$. Montrer que $A$, $B$, $C$ sont alignés et que $(AB) \perp (AD)$.`,
      solution: t`- $\dfrac{z_C - z_A}{z_B - z_A} = \dfrac{6 + 3i}{2 + i} = 3$, réel : $A$, $B$, $C$ sont alignés.
- $\dfrac{z_D - z_A}{z_B - z_A} = \dfrac{1 - 2i}{2 + i} = \dfrac{(1 - 2i)(2 - i)}{5} = \dfrac{-5i}{5} = -i$, imaginaire pur : $(AB) \perp (AD)$.`,
    },
    pieges: [
      t`Pour $\frac{6 + 3i}{2 + i}$, remarquer directement que $6 + 3i = 3(2 + i)$.`,
    ],
    voir: ['cx-reel-imag', 'cx-angle'],
  },

  'cx-cercle': {
    quand: t`« Déterminer l'ensemble des points $M(z)$ tels que $|z - a| = r$ » ou « $|z - a| = |z - b|$ ».`,
    etapes: [
      t`Faire apparaître des distances : $|z - z_A| = AM$.`,
      t`$|z - z_A| = r$ : $AM = r$, c'est le **cercle** de centre $A$ et de rayon $r$.`,
      t`$|z - z_A| = |z - z_B|$ : $AM = BM$, c'est la **médiatrice** de $[AB]$.`,
      t`Bien réécrire $|z + 1 - 2i|$ en $|z - (-1 + 2i)|$ pour lire le centre.`,
    ],
    exemple: {
      enonce: t`Déterminer l'ensemble des points $M(z)$ tels que : 1) $|z - 1 + 2i| = 3$ ; 2) $|z - 2| = |z + i|$.`,
      solution: t`1) $|z - (1 - 2i)| = 3$ : c'est le cercle de centre $\Omega(1 - 2i)$ et de rayon 3.

2) Avec $A(2)$ et $B(-i)$, la condition s'écrit $AM = BM$ : c'est la médiatrice de $[AB]$.

En coordonnées : $(x - 2)^2 + y^2 = x^2 + (y + 1)^2$, soit $-4x + 4 = 2y + 1$, donc $y = -2x + \frac32$.`,
    },
    pieges: [
      t`$|z - 1 + 2i|$ : le centre est $1 - 2i$ (on change les deux signes), pas $-1 + 2i$.`,
    ],
    voir: ['cx-distance', 'cx-ensemble-points', 'ps-mediateur'],
  },

  'cx-racines-unite': {
    quand: t`Résoudre $z^n = 1$, ou travailler avec $j = e^{2i\pi/3}$.`,
    etapes: [
      t`Les solutions sont $\omega_k = e^{2ik\pi/n}$ pour $k \in \{0, 1, \dots, n - 1\}$ : il y en a exactement $n$.`,
      t`Elles sont sur le cercle unité et forment un **polygone régulier** à $n$ côtés.`,
      t`Pour les écrire sous forme algébrique : $\cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n}$.`,
    ],
    exemple: {
      enonce: t`Résoudre $z^3 = 1$ et $z^4 = 1$ dans $\mathbb C$.`,
      solution: t`- $z^3 = 1$ : $1$, $j = e^{2i\pi/3} = -\frac12 + \frac{\sqrt3}{2}i$ et $j^2 = e^{4i\pi/3} = -\frac12 - \frac{\sqrt3}{2}i$ (triangle équilatéral).
- $z^4 = 1$ : $e^{0} = 1$, $e^{i\pi/2} = i$, $e^{i\pi} = -1$, $e^{3i\pi/2} = -i$ (carré).`,
    },
    pieges: [
      t`$k$ va de 0 à $n - 1$ : au-delà, on retombe sur les mêmes points.`,
    ],
    voir: ['cx-racines-n', 'cx-somme-racines'],
  },

  'cx-racines-n': {
    quand: t`Résoudre $z^n = a$ avec $a$ complexe (ex. $z^3 = 8i$).`,
    etapes: [
      t`Écrire $a$ sous forme exponentielle : $a = Re^{i\alpha}$.`,
      t`Chercher $z = re^{i\theta}$ : $z^n = a \iff r^n = R$ et $n\theta = \alpha + 2k\pi$.`,
      t`Donc $r = \sqrt[n]{R}$ et $\theta = \dfrac{\alpha}{n} + \dfrac{2k\pi}{n}$, $k \in \{0, \dots, n - 1\}$.`,
    ],
    exemple: {
      enonce: t`Résoudre $z^3 = 8i$ dans $\mathbb C$.`,
      solution: t`$8i = 8e^{i\pi/2}$. On cherche $z = re^{i\theta}$ avec $r^3 = 8$ et $3\theta = \frac\pi2 + 2k\pi$, soit $r = 2$ et $\theta = \frac\pi6 + \frac{2k\pi}{3}$.
- $k = 0$ : $2e^{i\pi/6} = \sqrt3 + i$
- $k = 1$ : $2e^{5i\pi/6} = -\sqrt3 + i$
- $k = 2$ : $2e^{3i\pi/2} = -2i$`,
    },
    pieges: [
      t`On divise **aussi** $2k\pi$ par $n$ : c'est ce qui donne $n$ solutions différentes.`,
    ],
    voir: ['cx-racines-unite', 'cx-moivre', 'cx-zn-an'],
  },

  'cx-somme-racines': {
    quand: t`« Montrer que $1 + j + j^2 = 0$ », ou calculer une somme de cosinus comme $\cos\frac{2\pi}{5} + \cos\frac{4\pi}{5}$.`,
    etapes: [
      t`Pour $n \geq 2$ et $\omega = e^{2i\pi/n}$ : $1 + \omega + \dots + \omega^{n-1} = \dfrac{1 - \omega^n}{1 - \omega} = 0$ car $\omega^n = 1$.`,
      t`Prendre la **partie réelle** (ou imaginaire) de cette égalité pour obtenir une relation entre cosinus.`,
      t`Utiliser $\cos\frac{2(n-k)\pi}{n} = \cos\frac{2k\pi}{n}$ pour regrouper les termes.`,
    ],
    exemple: {
      enonce: t`Montrer que $\cos\dfrac{2\pi}{5} + \cos\dfrac{4\pi}{5} = -\dfrac12$.`,
      solution: t`Avec $\omega = e^{2i\pi/5}$ : $1 + \omega + \omega^2 + \omega^3 + \omega^4 = 0$.

Partie réelle : $1 + \cos\frac{2\pi}{5} + \cos\frac{4\pi}{5} + \cos\frac{6\pi}{5} + \cos\frac{8\pi}{5} = 0$.

Or $\cos\frac{8\pi}{5} = \cos\frac{2\pi}{5}$ et $\cos\frac{6\pi}{5} = \cos\frac{4\pi}{5}$, donc
$$1 + 2\cos\frac{2\pi}{5} + 2\cos\frac{4\pi}{5} = 0$$
d'où $\cos\dfrac{2\pi}{5} + \cos\dfrac{4\pi}{5} = -\dfrac12$.`,
    },
    pieges: [
      t`La somme est nulle seulement pour $n \geq 2$ (pour $n = 1$, elle vaut 1).`,
    ],
    voir: ['cx-racines-unite', 'suite-somme-geo'],
  },

  'cx-suite': {
    quand: t`Suite de complexes $z_{n+1} = a\,z_n$ (souvent avec des points $M_n$ qui tournent).`,
    etapes: [
      t`C'est une suite géométrique de raison $a$ : $z_n = z_0\,a^n$.`,
      t`Écrire $a = re^{i\theta}$ : $|z_n| = |z_0|\,r^n$ et $\arg z_n = \arg z_0 + n\theta$.`,
      t`Si $r < 1$, $|z_n| \to 0$ : les points $M_n$ se rapprochent de $O$ en tournant. Si $r = 1$, ils restent sur un cercle.`,
    ],
    exemple: {
      enonce: t`$z_0 = 4$ et $z_{n+1} = \dfrac{1 + i}{2}z_n$. Étudier $|z_n|$, puis déterminer les $n$ pour lesquels $z_n$ est réel. Calculer $z_4$.`,
      solution: t`$a = \dfrac{1 + i}{2} = \dfrac{\sqrt2}{2}e^{i\pi/4}$, donc $z_n = 4\left(\dfrac{\sqrt2}{2}\right)^n e^{in\pi/4}$.

$|z_n| = 4\left(\frac{\sqrt2}{2}\right)^n \to 0$ car $0 < \frac{\sqrt2}{2} < 1$ : les points se rapprochent de $O$.

$z_n$ est réel $\iff \frac{n\pi}{4}$ est un multiple de $\pi$ $\iff n$ est un multiple de 4.

$z_4 = 4 \times \frac14 \times e^{i\pi} = -1$.`,
    },
    pieges: [
      t`$\left(\frac{\sqrt2}{2}\right)^4 = \frac{4}{16} = \frac14$.`,
    ],
    voir: ['suite-terme-general', 'cx-moivre'],
  },
}
