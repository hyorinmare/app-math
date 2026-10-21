// Fiches méthode — Complexes : forme algébrique et équations (maths expertes). Même format que suites.js.
const t = String.raw

export const fichesComplexesAlgebrique = {
  'cx-forme-alg': {
    quand: t`« Écrire sous forme algébrique » un produit, un carré ou une puissance de complexes.`,
    etapes: [
      t`Développer comme avec des réels (distributivité, identités remarquables).`,
      t`Remplacer $i^2$ par $-1$.`,
      t`Regrouper partie réelle et partie imaginaire : $a + ib$.`,
    ],
    exemple: {
      enonce: t`Écrire sous forme algébrique $(2 + 3i)(1 - i)$, $(1 + i)^2$ et $(1 + i)^3$.`,
      solution: t`- $(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i$
- $(1 + i)^2 = 1 + 2i + i^2 = 2i$
- $(1 + i)^3 = (1 + i)^2(1 + i) = 2i(1 + i) = 2i + 2i^2 = -2 + 2i$`,
    },
    pieges: [
      t`$i^2 = -1$ : un signe change à chaque fois qu'on le remplace.`,
      t`$(a + ib)^2 = a^2 + 2iab - b^2$, pas $a^2 + b^2$.`,
    ],
    voir: ['cx-quotient', 'cx-binome'],
  },

  'cx-quotient': {
    quand: t`« Écrire sous forme algébrique » un quotient $\dfrac{a + ib}{c + id}$, ou un inverse $\dfrac1z$.`,
    etapes: [
      t`Multiplier numérateur **et** dénominateur par le **conjugué du dénominateur**.`,
      t`Au dénominateur : $(c + id)(c - id) = c^2 + d^2$, un réel.`,
      t`Développer le numérateur et séparer les parties réelle et imaginaire.`,
    ],
    exemple: {
      enonce: t`Écrire sous forme algébrique $\dfrac{3 + i}{1 - 2i}$ et $\dfrac1i$.`,
      solution: t`$$\begin{aligned} \frac{3 + i}{1 - 2i} &= \frac{(3 + i)(1 + 2i)}{(1 - 2i)(1 + 2i)} \\ &= \frac{3 + 6i + i + 2i^2}{1 + 4} \\ &= \frac{1 + 7i}{5} = \frac15 + \frac75 i \end{aligned}$$
$$\frac1i = \frac{-i}{i \times (-i)} = \frac{-i}{1} = -i$$`,
    },
    pieges: [
      t`Le conjugué de $1 - 2i$ est $1 + 2i$ : on change seulement le signe de la partie imaginaire.`,
      t`$(1 - 2i)(1 + 2i) = 1 + 4 = 5$ (et non $1 - 4$).`,
    ],
    voir: ['cx-conjugue', 'cx-equation-1'],
  },

  'cx-conjugue': {
    quand: t`Calculer un conjugué, ou utiliser ses propriétés pour simplifier.`,
    etapes: [
      t`$\overline{a + ib} = a - ib$.`,
      t`Propriétés : $\overline{z + z'} = \bar z + \bar{z'}$, $\overline{zz'} = \bar z\,\bar{z'}$, $\overline{\left(\frac{z}{z'}\right)} = \dfrac{\bar z}{\bar{z'}}$, $\overline{z^n} = \bar z^n$.`,
      t`Résultats utiles : $z + \bar z = 2\operatorname{Re}(z)$, $z - \bar z = 2i\operatorname{Im}(z)$, $z\bar z = a^2 + b^2 = |z|^2$.`,
    ],
    exemple: {
      enonce: t`Soit $z = 2 - 3i$. Calculer $\bar z$, $z + \bar z$, $z\bar z$ et $\overline{z^2}$.`,
      solution: t`- $\bar z = 2 + 3i$
- $z + \bar z = 4 = 2\operatorname{Re}(z)$
- $z\bar z = 2^2 + 3^2 = 13$
- $z^2 = 4 - 12i + 9i^2 = -5 - 12i$, donc $\overline{z^2} = -5 + 12i$. On retrouve bien $\bar z^2 = (2 + 3i)^2 = -5 + 12i$.`,
    },
    pieges: [
      t`$z\bar z$ est toujours un **réel positif** : c'est $|z|^2$.`,
    ],
    voir: ['cx-quotient', 'cx-reel-imag', 'cx-module'],
  },

  'cx-puissances-i': {
    quand: t`Calculer $i^n$ pour un grand $n$, ou une somme de puissances de $i$.`,
    etapes: [
      t`Les puissances de $i$ forment un cycle de longueur 4 : $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, puis $i^4 = 1$…`,
      t`Faire la division euclidienne $n = 4q + r$ : alors $i^n = i^r$.`,
      t`Pour une somme $1 + i + \dots + i^n$ : formule de la somme géométrique de raison $i$.`,
    ],
    exemple: {
      enonce: t`Calculer $i^{2026}$, $i^{103}$, puis $S = 1 + i + i^2 + \dots + i^{2026}$.`,
      solution: t`- $2026 = 4 \times 506 + 2$, donc $i^{2026} = i^2 = -1$.
- $103 = 4 \times 25 + 3$, donc $i^{103} = i^3 = -i$.
- $i^{2027} = i^3 = -i$ (car $2027 = 4 \times 506 + 3$), donc
$$S = \frac{1 - i^{2027}}{1 - i} = \frac{1 + i}{1 - i} = \frac{(1 + i)^2}{2} = \frac{2i}{2} = i$$`,
    },
    pieges: [
      t`C'est le **reste** de la division par 4 qui compte, pas le quotient.`,
    ],
    voir: ['cx-forme-alg', 'suite-somme-geo', 'ar-reste-puissance'],
  },

  'cx-reel-imag': {
    quand: t`« Pour quelles valeurs de $a$ le nombre $Z$ est-il réel ? imaginaire pur ? », ou « montrer que $Z$ est réel ».`,
    etapes: [
      t`**Méthode 1** : écrire $Z$ sous forme algébrique $X + iY$. $Z$ est réel $\iff Y = 0$ ; imaginaire pur $\iff X = 0$.`,
      t`**Méthode 2** (sans calcul de forme algébrique) : $Z$ réel $\iff \bar Z = Z$ ; $Z$ imaginaire pur $\iff \bar Z = -Z$.`,
    ],
    exemple: {
      enonce: t`Soit $a$ un réel et $Z = (a + i)(2 - i)$. Pour quelles valeurs de $a$ le nombre $Z$ est-il réel ? imaginaire pur ?`,
      solution: t`$Z = 2a - ai + 2i - i^2 = (2a + 1) + (2 - a)i$.

- $Z$ est réel $\iff 2 - a = 0 \iff a = 2$ (et alors $Z = 5$).
- $Z$ est imaginaire pur $\iff 2a + 1 = 0 \iff a = -\frac12$ (et alors $Z = \frac52 i$).`,
    },
    pieges: [
      t`« Imaginaire pur » : partie **réelle** nulle (0 est à la fois réel et imaginaire pur).`,
    ],
    voir: ['cx-ensemble-points', 'cx-alignes'],
  },

  'cx-equation-1': {
    quand: t`Équation du premier degré en $z$ : $(1 + i)z = 3 - i$, $2z + i = 3 - z$…`,
    etapes: [
      t`Regrouper les termes en $z$ d'un côté, comme avec un réel.`,
      t`Isoler $z$ en divisant par le coefficient.`,
      t`Mettre le résultat sous forme algébrique (conjugué du dénominateur).`,
      t`Si l'équation contient **aussi** $\bar z$, voir la méthode par identification.`,
    ],
    exemple: {
      enonce: t`Résoudre dans $\mathbb C$ l'équation $(1 + i)z = 3 - i$.`,
      solution: t`$$\begin{aligned} z &= \frac{3 - i}{1 + i} = \frac{(3 - i)(1 - i)}{(1 + i)(1 - i)} \\ &= \frac{3 - 3i - i + i^2}{2} = \frac{2 - 4i}{2} = 1 - 2i \end{aligned}$$
Vérification : $(1 + i)(1 - 2i) = 1 - 2i + i - 2i^2 = 3 - i$ ✓.

$\mathcal S = \{1 - 2i\}$.`,
    },
    pieges: [
      t`Ne pas laisser un $i$ au dénominateur dans le résultat final.`,
    ],
    voir: ['cx-quotient', 'cx-identifier'],
  },

  'cx-identifier': {
    quand: t`L'équation mélange $z$ et $\bar z$ (ex. $2z + \bar z = 3 + i$), ou on cherche $z$ tel que $z^2 = 3 + 4i$.`,
    etapes: [
      t`Poser $z = x + iy$ avec $x$, $y$ **réels**, donc $\bar z = x - iy$.`,
      t`Remplacer et mettre chaque membre sous forme algébrique.`,
      t`**Identifier** : deux complexes sont égaux si et seulement si leurs parties réelles **et** leurs parties imaginaires sont égales. On obtient un système en $x$ et $y$.`,
    ],
    exemple: {
      enonce: t`Résoudre dans $\mathbb C$ l'équation $2z + \bar z = 3 + i$.`,
      solution: t`On pose $z = x + iy$ ($x$, $y$ réels). Alors
$$2(x + iy) + (x - iy) = 3x + iy$$
L'équation devient $3x + iy = 3 + i$. Par identification, $3x = 3$ et $y = 1$, donc $x = 1$, $y = 1$.

$\mathcal S = \{1 + i\}$.`,
    },
    pieges: [
      t`Préciser que $x$ et $y$ sont **réels** : c'est ce qui permet d'identifier.`,
    ],
    voir: ['cx-equation-1', 'cx-ensemble-points'],
  },

  'cx-equation-2': {
    quand: t`Équation $az^2 + bz + c = 0$ à coefficients **réels**, notamment quand $\Delta < 0$.`,
    etapes: [
      t`Calculer $\Delta = b^2 - 4ac$.`,
      t`$\Delta > 0$ ou $\Delta = 0$ : comme d'habitude.`,
      t`$\Delta < 0$ : deux solutions complexes conjuguées $z_{1,2} = \dfrac{-b \pm i\sqrt{-\Delta}}{2a}$.`,
    ],
    exemple: {
      enonce: t`Résoudre dans $\mathbb C$ l'équation $z^2 - 2z + 5 = 0$.`,
      solution: t`$\Delta = 4 - 20 = -16 < 0$, et $\sqrt{-\Delta} = 4$.
$$z_1 = \frac{2 - 4i}{2} = 1 - 2i \qquad z_2 = 1 + 2i$$
$\mathcal S = \{1 - 2i ; 1 + 2i\}$.`,
    },
    pieges: [
      t`On écrit $i\sqrt{-\Delta} = i\sqrt{16} = 4i$, et non $\sqrt{-16}$.`,
      t`Les deux solutions sont **conjuguées** : bonne vérification.`,
    ],
    voir: ['cx-factoriser', 'cx-racine-evidente'],
  },

  'cx-racine-evidente': {
    quand: t`Polynôme de degré 3 : « vérifier que $2i$ est racine », « montrer que $P$ admet une racine imaginaire pure ».`,
    etapes: [
      t`Si on donne la racine : calculer $P(\alpha)$ et vérifier qu'il vaut 0.`,
      t`Racine **imaginaire pure** à trouver : poser $z = iy$ ($y$ réel), calculer $P(iy)$ sous forme algébrique.`,
      t`Annuler partie réelle **et** partie imaginaire : les deux équations doivent avoir une solution commune.`,
      t`Racine **réelle** évidente : essayer $1$, $-1$, $2$, $-2$.`,
    ],
    exemple: {
      enonce: t`Soit $P(z) = z^3 + 2z^2 + 4z + 8$. Montrer que $P$ admet des racines imaginaires pures.`,
      solution: t`Pour $y$ réel :
$$\begin{aligned} P(iy) &= -iy^3 - 2y^2 + 4iy + 8 \\ &= (8 - 2y^2) + i(4y - y^3) \end{aligned}$$
$P(iy) = 0 \iff 8 - 2y^2 = 0$ et $y(4 - y^2) = 0$. La première donne $y^2 = 4$, qui vérifie aussi la seconde.

Donc $y = 2$ ou $y = -2$ : $2i$ et $-2i$ sont racines de $P$.`,
    },
    pieges: [
      t`$(iy)^3 = i^3y^3 = -iy^3$ et $(iy)^2 = -y^2$.`,
    ],
    voir: ['cx-factoriser', 'cx-equation-2'],
  },

  'cx-factoriser': {
    quand: t`On connaît une racine $\alpha$ d'un polynôme de degré 3 et on veut toutes les racines.`,
    etapes: [
      t`Comme $P(\alpha) = 0$, on peut écrire $P(z) = (z - \alpha)Q(z)$ avec $Q$ de degré 2.`,
      t`Trouver $Q(z) = az^2 + bz + c$ par **identification** (développer et comparer les coefficients).`,
      t`Résoudre $Q(z) = 0$ (discriminant).`,
    ],
    exemple: {
      enonce: t`$P(z) = z^3 - 3z^2 + 4z - 2$. Vérifier que 1 est racine, puis résoudre $P(z) = 0$.`,
      solution: t`$P(1) = 1 - 3 + 4 - 2 = 0$.

On cherche $P(z) = (z - 1)(az^2 + bz + c)$. En développant :
$$az^3 + (b - a)z^2 + (c - b)z - c$$
Par identification : $a = 1$, $b - a = -3$, $c - b = 4$, $-c = -2$, d'où $a = 1$, $b = -2$, $c = 2$.

$P(z) = (z - 1)(z^2 - 2z + 2)$. Pour le second facteur, $\Delta = 4 - 8 = -4$ : $z = 1 \pm i$.

$\mathcal S = \{1 ; 1 - i ; 1 + i\}$.`,
    },
    pieges: [
      t`Il y a 4 coefficients à identifier pour 3 inconnues : le dernier sert de **vérification**.`,
    ],
    voir: ['cx-racine-evidente', 'cx-equation-2', 'cx-zn-an'],
  },

  'cx-zn-an': {
    quand: t`Résoudre $z^3 = 8$, $z^n - a^n = 0$, ou factoriser $z^n - a^n$.`,
    etapes: [
      t`Formule : $z^n - a^n = (z - a)(z^{n-1} + az^{n-2} + \dots + a^{n-2}z + a^{n-1})$.`,
      t`Cas $n = 3$ : $z^3 - a^3 = (z - a)(z^2 + az + a^2)$.`,
      t`Résoudre le facteur du second degré avec le discriminant.`,
    ],
    exemple: {
      enonce: t`Résoudre dans $\mathbb C$ l'équation $z^3 = 8$.`,
      solution: t`$z^3 - 8 = z^3 - 2^3 = (z - 2)(z^2 + 2z + 4)$.

Pour $z^2 + 2z + 4$ : $\Delta = 4 - 16 = -12$, $\sqrt{12} = 2\sqrt3$, donc $z = \dfrac{-2 \pm 2i\sqrt3}{2} = -1 \pm i\sqrt3$.

$\mathcal S = \{2 ; -1 - i\sqrt3 ; -1 + i\sqrt3\}$.`,
    },
    pieges: [
      t`Une équation $z^3 = 8$ a **trois** solutions dans $\mathbb C$, pas seulement $2$.`,
    ],
    voir: ['cx-racines-n', 'cx-factoriser'],
  },

  'cx-binome': {
    quand: t`Développer $(a + b)^n$ pour $n \geq 3$, en particulier avec des complexes comme $(1 + i)^4$.`,
    etapes: [
      t`Formule du binôme : $(a + b)^n = \displaystyle\sum_{k=0}^{n} \binom nk a^{n-k}b^k$.`,
      t`Coefficients : ligne $n$ du triangle de Pascal (ligne 4 : $1, 4, 6, 4, 1$).`,
      t`Avec $i$ : remplacer les puissances de $i$ grâce au cycle $1, i, -1, -i$.`,
    ],
    exemple: {
      enonce: t`Calculer $(1 + i)^4$ avec la formule du binôme.`,
      solution: t`$$\begin{aligned} (1 + i)^4 &= 1 + 4i + 6i^2 + 4i^3 + i^4 \\ &= 1 + 4i - 6 - 4i + 1 = -4 \end{aligned}$$
Vérification : $(1 + i)^2 = 2i$, donc $(1 + i)^4 = (2i)^2 = -4$ ✓.`,
    },
    pieges: [
      t`Ne pas oublier les coefficients binomiaux : $(a + b)^4 \neq a^4 + b^4$.`,
    ],
    voir: ['comb-pascal', 'cx-puissances-i'],
  },

  'cx-ensemble-points': {
    quand: t`« Déterminer l'ensemble des points $M$ d'affixe $z$ tels que $Z$ soit réel (ou imaginaire pur) ».`,
    etapes: [
      t`Poser $z = x + iy$.`,
      t`Écrire $Z$ sous forme algébrique en fonction de $x$ et $y$.`,
      t`Traduire la condition ($\operatorname{Im}(Z) = 0$ ou $\operatorname{Re}(Z) = 0$) en une équation en $x$, $y$.`,
      t`Reconnaître l'ensemble : droite, réunion de droites, cercle…`,
    ],
    exemple: {
      enonce: t`Déterminer l'ensemble des points $M(z)$ tels que $z^2$ soit réel, puis tels que $z^2$ soit imaginaire pur.`,
      solution: t`Avec $z = x + iy$ : $z^2 = x^2 - y^2 + 2ixy$.

- $z^2$ réel $\iff 2xy = 0 \iff x = 0$ ou $y = 0$ : c'est la réunion des **deux axes** du repère.
- $z^2$ imaginaire pur $\iff x^2 - y^2 = 0 \iff y = x$ ou $y = -x$ : c'est la réunion des **deux diagonales** $y = x$ et $y = -x$.`,
    },
    pieges: [
      t`$x^2 = y^2$ donne $y = x$ **ou** $y = -x$ : ne pas oublier la deuxième droite.`,
    ],
    voir: ['cx-reel-imag', 'cx-cercle'],
  },
}
