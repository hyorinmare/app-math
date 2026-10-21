// Fiches de cours — Option maths expertes (Terminale). Même format que spe.js.
const t = String.raw

export const expert = [
  {
    id: 'complexes-algebrique',
    title: 'Complexes : forme algébrique',
    theme: 'Complexes',
    blocks: [
      { k: 'def', t: 'Forme algébrique', c: t`Tout complexe s'écrit de manière unique $z = a + ib$ avec $a, b$ réels et $i^2 = -1$.
- $a = \operatorname{Re}(z)$ est la partie réelle, $b = \operatorname{Im}(z)$ la partie imaginaire.
- $z$ est **imaginaire pur** si $a = 0$, **réel** si $b = 0$.` },
      { k: 'def', t: 'Conjugué', c: t`Le conjugué de $z = a + ib$ est $\bar z = a - ib$.
- $z\bar z = a^2 + b^2$ (réel positif)
- $\overline{z + z'} = \bar z + \bar{z'}$, $\overline{zz'} = \bar z\,\bar{z'}$, $\overline{z^n} = \bar z^n$
- $z$ réel $\iff z = \bar z$ ; $z$ imaginaire pur $\iff z = -\bar z$` },
      { k: 'meth', t: 'Écrire un quotient sous forme algébrique', c: t`On multiplie numérateur et dénominateur par le conjugué du dénominateur :
$$\frac{1 + 2i}{3 - i} = \frac{(1 + 2i)(3 + i)}{(3 - i)(3 + i)} = \frac{1 + 7i}{10}$$` },
      { k: 'thm', t: 'Formule du binôme de Newton', c: t`$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^k b^{n-k}$$` },
      { k: 'thm', t: 'Équation du second degré à coefficients réels', c: t`$az^2 + bz + c = 0$, $\Delta = b^2 - 4ac$ :
- $\Delta > 0$ : deux racines réelles $\frac{-b \pm \sqrt\Delta}{2a}$
- $\Delta = 0$ : une racine double $-\frac{b}{2a}$
- $\Delta < 0$ : deux racines complexes conjuguées $\frac{-b \pm i\sqrt{-\Delta}}{2a}$` },
      { k: 'prop', t: 'Factorisation de polynômes', c: t`Si $P(\alpha) = 0$, alors $P(z) = (z - \alpha)Q(z)$. Un polynôme de degré $n$ a au plus $n$ racines.

Identité utile : $z^n - a^n = (z - a)(z^{n-1} + az^{n-2} + \dots + a^{n-1})$.` },
    ],
    quiz: [
      { q: t`$(2 + i)(1 - 3i)$ = ?`, o: [t`$5 - 5i$`, t`$-1 - 5i$`, t`$2 - 3i$`, t`$5 + 5i$`], a: 0, e: t`$2 - 6i + i - 3i^2 = 2 - 5i + 3 = 5 - 5i$.` },
      { q: t`Conjugué de $\frac{1}{i}$ :`, o: [t`$i$`, t`$-i$`, '1', '-1'], a: 0, e: t`$\frac1i = -i$, donc le conjugué est $i$.` },
      { q: t`Solutions de $z^2 + 4 = 0$ :`, o: [t`$\pm 2$`, t`$\pm 2i$`, t`$\pm 4i$`, 'Aucune'], a: 1, e: t`$z^2 = -4 = (2i)^2$.` },
      { q: t`$i^{2026}$ = ?`, o: ['1', t`$i$`, '-1', t`$-i$`], a: 2, e: t`$2026 = 4 \times 506 + 2$ donc $i^{2026} = i^2 = -1$.` },
    ],
  },
  {
    id: 'complexes-geometrie',
    title: 'Complexes : module, argument, forme exponentielle',
    theme: 'Complexes',
    blocks: [
      { k: 'def', t: 'Module et argument', c: t`Pour $z = a + ib \neq 0$ d'image $M$ :
- $|z| = \sqrt{a^2 + b^2} = OM$
- un argument $\theta$ vérifie $\cos\theta = \frac{a}{|z|}$ et $\sin\theta = \frac{b}{|z|}$ (défini à $2\pi$ près).` },
      { k: 'def', t: 'Forme trigonométrique et exponentielle', c: t`$$z = r(\cos\theta + i\sin\theta) = re^{i\theta}, \quad r = |z|$$
Avec $e^{i\theta} = \cos\theta + i\sin\theta$.` },
      { k: 'prop', t: 'Règles de calcul', c: t`- $|zz'| = |z|\,|z'|$, $\arg(zz') = \arg z + \arg z'$
- $\left|\frac{z}{z'}\right| = \frac{|z|}{|z'|}$, $\arg\frac{z}{z'} = \arg z - \arg z'$
- $e^{i\theta}e^{i\theta'} = e^{i(\theta + \theta')}$, $(e^{i\theta})^n = e^{in\theta}$ (**Moivre**)
- $\overline{e^{i\theta}} = e^{-i\theta}$` },
      { k: 'thm', t: 'Formules d\'Euler', c: t`$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2} \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$` },
      { k: 'prop', t: 'Interprétation géométrique', c: t`- $AB = |z_B - z_A|$
- $(\overrightarrow{AB}, \overrightarrow{AC}) = \arg\frac{z_C - z_A}{z_B - z_A}$` },
      { k: 'thm', t: 'Racines $n$-ièmes de l\'unité', c: t`Les solutions de $z^n = 1$ sont les $n$ complexes
$$\omega_k = e^{\frac{2ik\pi}{n}}, \quad k \in \{0, \dots, n-1\}$$
Leurs images forment un polygone régulier à $n$ côtés inscrit dans le cercle unité, et leur somme est nulle ($n \geq 2$).` },
    ],
    quiz: [
      { q: t`Module de $3 - 4i$ :`, o: ['5', '7', '25', '1'], a: 0, e: t`$\sqrt{9 + 16} = 5$.` },
      { q: t`Forme exponentielle de $1 + i$ :`, o: [t`$e^{i\pi/4}$`, t`$\sqrt2 e^{i\pi/4}$`, t`$2e^{i\pi/4}$`, t`$\sqrt2 e^{i\pi/2}$`], a: 1, e: t`$|1 + i| = \sqrt2$ et $\arg = \frac\pi4$.` },
      { q: t`$(e^{i\pi/3})^6$ = ?`, o: ['1', '-1', t`$i$`, t`$e^{i\pi/18}$`], a: 0, e: t`Moivre : $e^{2i\pi} = 1$.` },
      { q: t`Somme des racines 5-ièmes de l'unité :`, o: ['0', '1', '5', t`$e^{2i\pi/5}$`], a: 0, e: t`Somme géométrique : $\frac{1 - \omega^5}{1 - \omega} = 0$.` },
    ],
  },
  {
    id: 'divisibilite',
    title: 'Divisibilité et congruences',
    theme: 'Arithmétique',
    blocks: [
      { k: 'def', t: 'Divisibilité', c: t`$a$ divise $b$ (noté $a \mid b$) s'il existe un entier $k$ tel que $b = ka$.

Si $a \mid b$ et $a \mid c$, alors $a$ divise toute combinaison $bu + cv$ ($u, v \in \mathbb{Z}$).` },
      { k: 'thm', t: 'Division euclidienne', c: t`Pour $a \in \mathbb{Z}$ et $b \in \mathbb{N}^*$, il existe un unique couple $(q, r)$ tel que
$$a = bq + r \quad \text{avec} \quad 0 \leq r < b$$` },
      { k: 'def', t: 'Congruences', c: t`$a \equiv b \pmod n$ si $a$ et $b$ ont le même reste dans la division par $n$, c'est-à-dire si $n \mid a - b$.` },
      { k: 'prop', t: 'Compatibilité', c: t`Si $a \equiv b$ et $c \equiv d \pmod n$ :
- $a + c \equiv b + d \pmod n$
- $ac \equiv bd \pmod n$
- $a^k \equiv b^k \pmod n$ pour $k \in \mathbb{N}$` },
      { k: 'meth', t: 'Reste d\'une grande puissance', c: t`Reste de $3^{100}$ par 7 : on cherche une puissance simple, $3^6 = 729 \equiv 1 \pmod 7$. Or $100 = 6 \times 16 + 4$, donc $3^{100} \equiv 3^4 = 81 \equiv 4 \pmod 7$.` },
      { k: 'meth', t: 'Tableau de congruences', c: t`Pour étudier $n^2 \pmod 5$, on fait un tableau selon le reste de $n$ (0, 1, 2, 3, 4) : $n^2 \equiv 0, 1, 4, 4, 1$.` },
    ],
    quiz: [
      { q: t`Reste de $-17$ dans la division par 5 :`, o: ['2', '3', '-2', '-3'], a: 1, e: t`$-17 = 5 \times (-4) + 3$, avec $0 \leq 3 < 5$.` },
      { q: t`$2^{10} \pmod 3$ :`, o: ['0', '1', '2'], a: 1, e: t`$2 \equiv -1$ donc $2^{10} \equiv (-1)^{10} = 1$.` },
      { q: t`Si $a \equiv 3 \pmod 7$, alors $a^2 + 1 \equiv$ ?`, o: ['3', '10', '4', '2'], a: 0, e: t`$9 + 1 = 10 \equiv 3 \pmod 7$.` },
      { q: t`Quel entier divise toujours $n(n+1)$ ?`, o: ['2', '3', '4', '6'], a: 0, e: t`Parmi deux entiers consécutifs, l'un est pair.` },
    ],
  },
  {
    id: 'pgcd',
    title: 'PGCD, Bézout, Gauss, nombres premiers',
    theme: 'Arithmétique',
    blocks: [
      { k: 'meth', t: 'Algorithme d\'Euclide', c: t`$\operatorname{PGCD}(a, b) = \operatorname{PGCD}(b, r)$ où $r$ est le reste de $a$ par $b$. On répète : le PGCD est le **dernier reste non nul**.

Exemple : $\operatorname{PGCD}(84, 30)$ : $84 = 2 \times 30 + 24$, $30 = 1 \times 24 + 6$, $24 = 4 \times 6 + 0$ → **6**.` },
      { k: 'thm', t: 'Théorème de Bézout', c: t`$a$ et $b$ sont **premiers entre eux** ($\operatorname{PGCD} = 1$) si et seulement s'il existe $u, v$ entiers tels que
$$au + bv = 1$$
Plus généralement, $\operatorname{PGCD}(a,b)$ s'écrit $au + bv$ (identité de Bézout).` },
      { k: 'thm', t: 'Théorème de Gauss', c: t`Si $a \mid bc$ et $\operatorname{PGCD}(a, b) = 1$, alors $a \mid c$.

Corollaire : si $a \mid n$, $b \mid n$ et $a, b$ premiers entre eux, alors $ab \mid n$.` },
      { k: 'meth', t: 'Équation $ax + by = c$', c: t`- Solutions entières si et seulement si $\operatorname{PGCD}(a,b) \mid c$.
- Trouver une solution particulière $(x_0, y_0)$.
- Soustraire : $a(x - x_0) = -b(y - y_0)$, puis appliquer Gauss.` },
      { k: 'def', t: 'Nombres premiers', c: t`Un entier $p \geq 2$ est premier s'il a exactement deux diviseurs : 1 et $p$. Il y a une infinité de nombres premiers. Tout entier $n \geq 2$ se décompose de manière unique en produit de facteurs premiers.

Si $n$ n'est pas premier, il a un diviseur premier $\leq \sqrt n$.` },
      { k: 'thm', t: 'Petit théorème de Fermat', c: t`Si $p$ est premier et $a$ non divisible par $p$ :
$$a^{p-1} \equiv 1 \pmod p$$
Pour tout entier $a$ : $a^p \equiv a \pmod p$.` },
    ],
    quiz: [
      { q: t`$\operatorname{PGCD}(126, 45)$ = ?`, o: ['3', '9', '15', '18'], a: 1, e: t`$126 = 2 \times 45 + 36$, $45 = 36 + 9$, $36 = 4 \times 9$.` },
      { q: t`$7x + 4y = 1$ a-t-elle des solutions entières ?`, o: ['Oui', 'Non'], a: 0, e: t`$\operatorname{PGCD}(7,4) = 1$ ; par exemple $x = -1$, $y = 2$.` },
      { q: t`$5^{12} \pmod{13}$ = ?`, o: ['0', '1', '5', '12'], a: 1, e: t`Petit théorème de Fermat avec $p = 13$.` },
      { q: t`Si $3 \mid 4k$, alors :`, o: [t`$3 \mid k$`, t`$4 \mid k$`, t`$12 \mid k$`, 'rien'], a: 0, e: t`Gauss : 3 et 4 sont premiers entre eux.` },
    ],
  },
  {
    id: 'matrices',
    title: 'Matrices',
    theme: 'Matrices et graphes',
    blocks: [
      { k: 'def', t: 'Produit de matrices', c: t`Si $A$ est de taille $n \times p$ et $B$ de taille $p \times q$, $AB$ est de taille $n \times q$ :
$$(AB)_{ij} = \sum_{k=1}^{p} a_{ik} b_{kj}$$
**Attention** : en général $AB \neq BA$.` },
      { k: 'ex', t: 'Exemple', c: t`$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$$` },
      { k: 'def', t: 'Matrice inverse', c: t`$A$ (carrée) est inversible s'il existe $B$ telle que $AB = BA = I_n$. On note $B = A^{-1}$.

Pour $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ : inversible $\iff ad - bc \neq 0$ et
$$A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$` },
      { k: 'meth', t: 'Système linéaire', c: t`Un système s'écrit $AX = B$. Si $A$ est inversible, l'unique solution est $X = A^{-1}B$.` },
      { k: 'meth', t: 'Suites de matrices', c: t`- Si $U_{n+1} = AU_n$, alors $U_n = A^nU_0$.
- Si $U_{n+1} = AU_n + B$, on cherche $C$ telle que $C = AC + B$ ; alors $V_n = U_n - C$ vérifie $V_{n+1} = AV_n$.` },
      { k: 'meth', t: 'Calculer $A^n$', c: t`Souvent par récurrence, ou avec une **diagonalisation** donnée : si $A = PDP^{-1}$ avec $D$ diagonale, alors $A^n = PD^nP^{-1}$, et $D^n$ s'obtient en élevant les coefficients diagonaux à la puissance $n$.` },
    ],
    quiz: [
      { q: t`Taille du produit d'une matrice $2 \times 3$ par une $3 \times 4$ :`, o: [t`$2 \times 4$`, t`$3 \times 3$`, t`$4 \times 2$`, 'Impossible'], a: 0, e: t`$(n \times p)(p \times q) = n \times q$.` },
      { q: t`$\begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}$ est-elle inversible ?`, o: ['Oui', 'Non'], a: 1, e: t`$ad - bc = 4 - 4 = 0$.` },
      { q: t`Si $U_{n+1} = AU_n$, alors $U_n$ = ?`, o: [t`$nAU_0$`, t`$A^nU_0$`, t`$U_0A^n$`, t`$A^{n+1}U_0$`], a: 1, e: t`Récurrence immédiate.` },
    ],
  },
  {
    id: 'graphes',
    title: 'Graphes et chaînes de Markov',
    theme: 'Matrices et graphes',
    blocks: [
      { k: 'def', t: 'Vocabulaire', c: t`- **Ordre** : nombre de sommets. **Degré** d'un sommet : nombre d'arêtes qui en partent.
- Graphe **complet** : tous les sommets sont adjacents deux à deux.
- **Chaîne** : suite d'arêtes consécutives ; elle est fermée (cycle) si elle revient au départ.
- Graphe **connexe** : il existe une chaîne entre deux sommets quelconques.` },
      { k: 'prop', t: 'Somme des degrés', c: t`La somme des degrés de tous les sommets est égale au **double du nombre d'arêtes**.` },
      { k: 'def', t: 'Matrice d\'adjacence', c: t`$a_{ij}$ = nombre d'arêtes de $i$ vers $j$. Le coefficient $(i, j)$ de $A^n$ est le **nombre de chaînes de longueur $n$** reliant $i$ à $j$.` },
      { k: 'def', t: 'Chaîne de Markov', c: t`Graphe probabiliste : la **matrice de transition** $P$ a pour coefficient $p_{ij}$ la probabilité de passer de l'état $i$ à l'état $j$. La somme de chaque ligne vaut 1.

Si $\pi_n$ est la loi (vecteur ligne) à l'étape $n$ : $\pi_{n+1} = \pi_n P$ et $\pi_n = \pi_0 P^n$.` },
      { k: 'def', t: 'Distribution invariante', c: t`$\pi$ est **invariante** (stationnaire) si $\pi = \pi P$ et la somme de ses coefficients vaut 1.

Pour une chaîne à 2 états dont la matrice n'a aucun coefficient nul, $(\pi_n)$ converge vers l'unique distribution invariante.` },
    ],
    quiz: [
      { q: t`Un graphe a 5 sommets de degrés 2, 3, 3, 4, 2. Nombre d'arêtes ?`, o: ['7', '14', '5', '28'], a: 0, e: t`Somme des degrés $= 14 = 2 \times 7$.` },
      { q: t`Nombre d'arêtes du graphe complet à 6 sommets :`, o: ['6', '12', '15', '30'], a: 2, e: t`$\binom62 = 15$.` },
      { q: t`Dans une matrice de transition, la somme de chaque ligne vaut :`, o: ['0', '1', 'le nombre d\'états', 'variable'], a: 1, e: t`Depuis un état, on va forcément quelque part.` },
    ],
  },
]
