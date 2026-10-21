// Fiches méthode — Dérivation et convexité. Même format que suites.js.
const t = String.raw

export const fichesDerivation = {
  'der-usuelles': {
    quand: t`Dériver une fonction construite à partir de $x^n$, $\frac1x$, $\sqrt x$, $e^x$, $\ln x$, $\sin$, $\cos$, avec des sommes et des constantes.`,
    etapes: [
      t`Retenir :
- $(k)' = 0$, $(x^n)' = nx^{n-1}$, $\left(\frac1x\right)' = -\frac{1}{x^2}$, $(\sqrt x)' = \frac{1}{2\sqrt x}$
- $(e^x)' = e^x$, $(\ln x)' = \frac1x$, $(\sin x)' = \cos x$, $(\cos x)' = -\sin x$`,
      t`Dériver terme à terme : $(u + v)' = u' + v'$ et $(ku)' = ku'$.`,
      t`Préciser l'intervalle où la fonction est dérivable ($\sqrt x$ : $]0 ; +\infty[$, $\ln x$ : $]0 ; +\infty[$).`,
    ],
    exemple: {
      enonce: t`Dériver $f(x) = 3x^4 - \dfrac2x + 5\sqrt x$ sur $]0 ; +\infty[$.`,
      solution: t`$$f'(x) = 3 \times 4x^3 - 2 \times \left(-\frac{1}{x^2}\right) + 5 \times \frac{1}{2\sqrt x}$$
$$f'(x) = 12x^3 + \frac{2}{x^2} + \frac{5}{2\sqrt x}$$`,
    },
    pieges: [
      t`$\left(\frac1x\right)' = -\frac{1}{x^2}$ : ne pas oublier le signe moins.`,
      t`$\sqrt x$ n'est pas dérivable en 0.`,
      t`La dérivée d'une constante est 0, même si c'est $\pi$ ou $e^2$.`,
    ],
    voir: ['der-produit-quotient', 'der-composee'],
  },

  'der-produit-quotient': {
    quand: t`La fonction est un produit $u \times v$ (ex. $(2x - 1)e^x$) ou un quotient $\dfrac uv$ (ex. $\dfrac{x^2 + 1}{x - 3}$).`,
    etapes: [
      t`Identifier $u$ et $v$, puis calculer $u'$ et $v'$ à part.`,
      t`**Produit** : $(uv)' = u'v + uv'$.`,
      t`**Quotient** : $\left(\dfrac uv\right)' = \dfrac{u'v - uv'}{v^2}$.`,
      t`Factoriser le résultat (souvent par $e^x$) et **ne pas développer** $v^2$ : on en aura besoin pour le signe.`,
    ],
    exemple: {
      enonce: t`Dériver $f(x) = (2x - 1)e^x$ et $g(x) = \dfrac{x^2 + 1}{x - 3}$ (pour $x \neq 3$).`,
      solution: t`**$f$** : $u = 2x - 1$, $u' = 2$, $v = e^x$, $v' = e^x$.
$$f'(x) = 2e^x + (2x - 1)e^x = (2x + 1)e^x$$
**$g$** : $u = x^2 + 1$, $u' = 2x$, $v = x - 3$, $v' = 1$.
$$\begin{aligned} g'(x) &= \frac{2x(x - 3) - (x^2 + 1) \times 1}{(x - 3)^2} \\ &= \frac{x^2 - 6x - 1}{(x - 3)^2} \end{aligned}$$`,
    },
    pieges: [
      t`$(uv)' \neq u'v'$.`,
      t`Dans le quotient, le **signe moins** porte sur tout $uv'$ : mettre des parenthèses.`,
      t`$(x - 3)^2 > 0$ : garder le carré permet de voir tout de suite son signe.`,
    ],
    voir: ['der-composee', 'der-signe'],
  },

  'der-composee': {
    quand: t`La fonction est une fonction usuelle appliquée à une expression : $e^{x^2 - 3x}$, $\ln(x^2 + 1)$, $(3x + 1)^4$, $\sqrt{1 - x}$, $\cos(2x + 1)$.`,
    etapes: [
      t`Repérer l'expression intérieure $u(x)$ et calculer $u'(x)$.`,
      t`Appliquer la formule correspondante :
- $(e^u)' = u'e^u$, $(\ln u)' = \dfrac{u'}{u}$
- $(u^n)' = nu'u^{n-1}$, $(\sqrt u)' = \dfrac{u'}{2\sqrt u}$
- $(\cos u)' = -u'\sin u$, $(\sin u)' = u'\cos u$`,
      t`Cas général : $(v \circ u)' = u' \times (v' \circ u)$.`,
    ],
    exemple: {
      enonce: t`Dériver $f(x) = e^{x^2 - 3x}$, $g(x) = \ln(x^2 + 1)$, $h(x) = (3x + 1)^4$ et $k(x) = \sqrt{1 - x}$ (pour $x < 1$).`,
      solution: t`- $u = x^2 - 3x$, $u' = 2x - 3$ : $f'(x) = (2x - 3)e^{x^2 - 3x}$.
- $u = x^2 + 1$, $u' = 2x$ : $g'(x) = \dfrac{2x}{x^2 + 1}$.
- $u = 3x + 1$, $u' = 3$ : $h'(x) = 4 \times 3(3x + 1)^3 = 12(3x + 1)^3$.
- $u = 1 - x$, $u' = -1$ : $k'(x) = \dfrac{-1}{2\sqrt{1 - x}}$.`,
    },
    pieges: [
      t`Ne pas oublier de multiplier par $u'$ (c'est l'oubli n° 1).`,
      t`$(e^{u})' \neq e^{u'}$.`,
    ],
    voir: ['der-produit-quotient', 'prim-formes'],
  },

  'der-tangente': {
    quand: t`« Déterminer une équation de la tangente à $\mathcal C_f$ au point d'abscisse $a$ ».`,
    etapes: [
      t`Calculer $f(a)$.`,
      t`Calculer $f'(x)$, puis $f'(a)$ : c'est le **coefficient directeur** de la tangente.`,
      t`Appliquer la formule $y = f'(a)(x - a) + f(a)$, puis développer.`,
    ],
    exemple: {
      enonce: t`Soit $f(x) = x^2 - 3x + 1$. Déterminer une équation de la tangente à $\mathcal C_f$ au point d'abscisse 2.`,
      solution: t`$f(2) = 4 - 6 + 1 = -1$.

$f'(x) = 2x - 3$, donc $f'(2) = 1$.

La tangente a pour équation $y = 1 \times (x - 2) + (-1)$, soit $y = x - 3$.`,
    },
    pieges: [
      t`Ne pas mélanger : on dérive $f$, **puis** on remplace $x$ par $a$.`,
      t`« Tangente parallèle à la droite $y = 5x$ » : on cherche $a$ tel que $f'(a) = 5$.`,
      t`« Tangente horizontale » : on cherche $a$ tel que $f'(a) = 0$.`,
    ],
    voir: ['der-lecture-graphique', 'der-convexite-tangente'],
  },

  'der-signe': {
    quand: t`Après avoir calculé $f'(x)$, il faut son signe pour obtenir les variations.`,
    etapes: [
      t`Factoriser $f'(x)$ au maximum.`,
      t`Éliminer les facteurs de signe connu : $e^{\dots} > 0$, un carré $\geq 0$, $x^2 + 1 > 0$, $\sqrt{\dots} > 0$.`,
      t`Pour un facteur du second degré : racines, puis « signe de $a$ à l'extérieur des racines ».`,
      t`S'il reste plusieurs facteurs : faire un **tableau de signes**.`,
    ],
    exemple: {
      enonce: t`Soit $f(x) = x^3 - 3x^2 - 9x + 2$. Étudier le signe de $f'(x)$.`,
      solution: t`$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3)$.

Pour $x^2 - 2x - 3$ : $\Delta = 4 + 12 = 16$, racines $x_1 = \frac{2 - 4}{2} = -1$ et $x_2 = \frac{2 + 4}{2} = 3$. Donc $f'(x) = 3(x + 1)(x - 3)$.

Le coefficient de $x^2$ est positif, donc :
- $f'(x) > 0$ sur $]-\infty ; -1[$ et sur $]3 ; +\infty[$ ;
- $f'(x) < 0$ sur $]-1 ; 3[$ ;
- $f'(-1) = f'(3) = 0$.`,
    },
    pieges: [
      t`Ne pas dire « $e^x$ est positif donc $f'$ est positive » : il faut regarder **tous** les facteurs.`,
      t`Avec un quotient, le dénominateur compte aussi dans le signe (sauf s'il est au carré).`,
    ],
    voir: ['der-variations', 'der-produit-quotient'],
  },

  'der-variations': {
    quand: t`« Étudier les variations de $f$ » ou « dresser son tableau de variations ».`,
    etapes: [
      t`Déterminer l'ensemble de définition et de dérivabilité.`,
      t`Calculer $f'(x)$ et étudier son signe.`,
      t`$f' > 0$ → $f$ croissante ; $f' < 0$ → $f$ décroissante.`,
      t`Compléter le tableau avec les **valeurs** aux points où $f'$ s'annule et les **limites** aux bornes.`,
    ],
    exemple: {
      enonce: t`Dresser le tableau de variations de $f(x) = (x - 1)e^x$ sur $\mathbb{R}$.`,
      solution: t`$f'(x) = e^x + (x - 1)e^x = xe^x$. Comme $e^x > 0$, $f'(x)$ a le signe de $x$.

$f(0) = -e^0 = -1$.

En $+\infty$ : $x - 1 \to +\infty$ et $e^x \to +\infty$ donc $f(x) \to +\infty$.

En $-\infty$ : $f(x) = xe^x - e^x$. Par croissances comparées $xe^x \to 0$, et $e^x \to 0$, donc $f(x) \to 0$.
$$\def\arraystretch{1.6} \begin{array}{c|ccccc} x & -\infty & & 0 & & +\infty \\ \hline f'(x) & & - & 0 & + & \\ \hline f(x) & 0 & \searrow & -1 & \nearrow & +\infty \end{array}$$`,
    },
    pieges: [
      t`Les flèches du tableau doivent correspondre au signe de $f'$, et les valeurs doivent être cohérentes (une flèche montante va vers une valeur plus grande).`,
      t`Ne pas oublier les limites aux bornes : elles sont souvent demandées.`,
    ],
    voir: ['der-signe', 'der-extremum', 'lim-croissances'],
  },

  'der-extremum': {
    quand: t`« Montrer que $f$ admet un minimum (ou maximum) », « déterminer la valeur minimale ».`,
    etapes: [
      t`Calculer $f'$ et étudier son signe.`,
      t`Un extremum est atteint en $a$ si $f'$ **s'annule en changeant de signe** en $a$.`,
      t`$-$ puis $+$ : minimum ; $+$ puis $-$ : maximum. Sa valeur est $f(a)$.`,
      t`Préciser s'il est local ou atteint sur tout l'intervalle (avec le tableau de variations).`,
    ],
    exemple: {
      enonce: t`Montrer que $f(x) = x \ln x$ admet un minimum sur $]0 ; +\infty[$ et donner sa valeur.`,
      solution: t`$f'(x) = 1 \times \ln x + x \times \dfrac1x = \ln x + 1$.

$f'(x) \geq 0 \iff \ln x \geq -1 \iff x \geq e^{-1}$.

Donc $f$ est décroissante sur $]0 ; e^{-1}]$ et croissante sur $[e^{-1} ; +\infty[$ : elle admet un minimum en $x = e^{-1} = \frac1e$, qui vaut
$$f\left(\frac1e\right) = \frac1e \ln\frac1e = -\frac1e$$`,
    },
    pieges: [
      t`$f'(a) = 0$ ne suffit pas : $x^3$ a une dérivée nulle en 0 mais pas d'extremum. Il faut un **changement de signe**.`,
    ],
    voir: ['der-variations', 'der-optimisation'],
  },

  'der-inegalite': {
    quand: t`« Montrer que pour tout $x > 0$, $\ln x \leq x - 1$ » : une inégalité entre deux fonctions, sans suite.`,
    etapes: [
      t`Tout passer d'un côté : étudier $g(x) = $ (grand côté) $-$ (petit côté).`,
      t`Étudier les variations de $g$ (dérivée, signe).`,
      t`Trouver le minimum de $g$ et montrer qu'il est $\geq 0$. Alors $g(x) \geq 0$ pour tout $x$, ce qui donne l'inégalité.`,
    ],
    exemple: {
      enonce: t`Montrer que pour tout $x > 0$, $\ln x \leq x - 1$.`,
      solution: t`Soit $g(x) = x - 1 - \ln x$ sur $]0 ; +\infty[$.

$g'(x) = 1 - \dfrac1x = \dfrac{x - 1}{x}$. Comme $x > 0$, $g'(x)$ a le signe de $x - 1$ : $g$ est décroissante sur $]0 ; 1]$ et croissante sur $[1 ; +\infty[$.

$g$ admet donc un minimum en 1 : $g(1) = 1 - 1 - \ln 1 = 0$.

Pour tout $x > 0$, $g(x) \geq 0$, c'est-à-dire $\ln x \leq x - 1$.`,
    },
    pieges: [
      t`Bien choisir l'ordre de la différence pour viser « $\geq 0$ ».`,
      t`Autre méthode possible : la convexité (voir « courbe au-dessus de sa tangente »).`,
    ],
    voir: ['der-extremum', 'der-convexite-tangente', 'der-position'],
  },

  'der-position': {
    quand: t`« Étudier la position relative de $\mathcal C_f$ et $\mathcal C_g$ » (ou d'une courbe et d'une droite).`,
    etapes: [
      t`Calculer $d(x) = f(x) - g(x)$ et le simplifier/factoriser.`,
      t`Étudier le signe de $d(x)$ (tableau de signes si besoin).`,
      t`$d(x) > 0$ : $\mathcal C_f$ est **au-dessus** de $\mathcal C_g$ ; $d(x) < 0$ : en dessous ; $d(x) = 0$ : points d'intersection.`,
    ],
    exemple: {
      enonce: t`Étudier la position relative des courbes de $f(x) = x^3$ et $g(x) = x$.`,
      solution: t`$d(x) = x^3 - x = x(x^2 - 1) = x(x - 1)(x + 1)$.

Tableau de signes :
$$\small \def\arraystretch{1.6} \begin{array}{c|ccccccccc} x & -\infty & & -1 & & 0 & & 1 & & +\infty \\ \hline d(x) & & - & 0 & + & 0 & - & 0 & + & \end{array}$$
$\mathcal C_f$ est au-dessus de $\mathcal C_g$ sur $]-1 ; 0[$ et sur $]1 ; +\infty[$, en dessous sur $]-\infty ; -1[$ et sur $]0 ; 1[$. Elles se coupent aux points d'abscisses $-1$, 0 et 1.`,
    },
    pieges: [
      t`On étudie le **signe** de la différence, pas ses variations.`,
    ],
    voir: ['der-inegalite', 'int-entre-courbes'],
  },

  'der-optimisation': {
    quand: t`Problème concret : « pour quelle valeur de $x$ le volume (l'aire, le bénéfice) est-il maximal ? ».`,
    etapes: [
      t`Choisir la variable $x$ et préciser son **intervalle** (contraintes physiques).`,
      t`Exprimer la grandeur à optimiser en fonction de $x$ : $V(x)$.`,
      t`Étudier les variations de $V$ sur l'intervalle.`,
      t`Lire le maximum (ou minimum) et répondre à la question **avec une phrase et des unités**.`,
    ],
    exemple: {
      enonce: t`On découpe un carré de côté $x$ cm à chaque coin d'une feuille carrée de 12 cm de côté, puis on replie pour faire une boîte sans couvercle. Pour quelle valeur de $x$ le volume est-il maximal ?`,
      solution: t`On a $x \in \,]0 ; 6[$. La base est un carré de côté $12 - 2x$ et la hauteur vaut $x$, donc $V(x) = x(12 - 2x)^2$.
$$\begin{aligned} V'(x) &= (12 - 2x)^2 + x \times 2(12 - 2x)(-2) \\ &= (12 - 2x)(12 - 2x - 4x) \\ &= (12 - 2x)(12 - 6x) \end{aligned}$$
Sur $]0 ; 6[$, $12 - 2x > 0$, donc $V'(x)$ a le signe de $12 - 6x$ : positif sur $]0 ; 2[$, négatif sur $]2 ; 6[$.

$V$ est maximal pour $x = 2$ : $V(2) = 2 \times 8^2 = 128$. Le volume maximal est de 128 cm³, obtenu en découpant des carrés de 2 cm.`,
    },
    pieges: [
      t`Ne pas oublier l'intervalle : ici $x = 6$ annule $V'$ mais n'est pas dans $]0 ; 6[$.`,
      t`Répondre à la question posée (la valeur de $x$ **et** le volume, avec les unités).`,
    ],
    voir: ['der-extremum', 'der-variations'],
  },

  'der-lecture-graphique': {
    quand: t`« Lire graphiquement $f'(a)$ » sur une courbe où la tangente est tracée.`,
    etapes: [
      t`$f'(a)$ est le **coefficient directeur** de la tangente au point d'abscisse $a$.`,
      t`Repérer deux points bien lisibles **sur la tangente** : $A(x_A ; y_A)$ et $B(x_B ; y_B)$.`,
      t`Calculer $f'(a) = \dfrac{y_B - y_A}{x_B - x_A}$.`,
      t`Tangente horizontale : $f'(a) = 0$.`,
    ],
    exemple: {
      enonce: t`La tangente à $\mathcal C_f$ au point $A(1 ; 2)$ passe par le point $B(3 ; 6)$. Que vaut $f'(1)$ ? Donner une équation de la tangente.`,
      solution: t`$$f'(1) = \frac{6 - 2}{3 - 1} = \frac42 = 2$$
La tangente a pour équation $y = 2(x - 1) + 2$, soit $y = 2x$.`,
    },
    pieges: [
      t`Lire les points sur la **tangente**, pas sur la courbe.`,
      t`Vérifier les graduations des axes : elles ne valent pas toujours 1.`,
    ],
    voir: ['der-tangente', 'der-convexite-graphique'],
  },

  'der-derivabilite': {
    quand: t`« $f$ est-elle dérivable en $a$ ? », souvent en un bord de l'ensemble de définition ($\sqrt x$ en 0) ou pour une fonction définie par morceaux.`,
    etapes: [
      t`Écrire le taux d'accroissement $\dfrac{f(a + h) - f(a)}{h}$.`,
      t`Calculer sa limite quand $h \to 0$ (éventuellement à gauche et à droite).`,
      t`Si la limite est un réel $\ell$ (le même des deux côtés) : $f$ est dérivable en $a$ et $f'(a) = \ell$. Sinon, elle ne l'est pas.`,
      t`Limite infinie : la courbe a une **tangente verticale** en $a$.`,
    ],
    exemple: {
      enonce: t`$f(x) = \sqrt x$ et $g(x) = x\sqrt x$ sont-elles dérivables en 0 ?`,
      solution: t`- Pour $h > 0$ : $\dfrac{f(h) - f(0)}{h} = \dfrac{\sqrt h}{h} = \dfrac{1}{\sqrt h} \to +\infty$. $f$ n'est **pas** dérivable en 0 (tangente verticale).
- Pour $h > 0$ : $\dfrac{g(h) - g(0)}{h} = \dfrac{h\sqrt h}{h} = \sqrt h \to 0$. $g$ est dérivable en 0 et $g'(0) = 0$.`,
    },
    pieges: [
      t`Continue n'implique pas dérivable : $|x|$ est continue en 0, mais son taux vaut $-1$ à gauche et $1$ à droite.`,
    ],
    voir: ['lim-taux', 'cont-point'],
  },

  'der-seconde': {
    quand: t`On demande $f''$, la convexité, ou les variations de $f'$ (pour obtenir le signe de $f'$).`,
    etapes: [
      t`Calculer $f'$, la simplifier, puis la dériver à nouveau : $f'' = (f')'$.`,
      t`Le signe de $f''$ donne les variations de $f'$ **et** la convexité de $f$.`,
      t`Astuce fréquente : quand on n'arrive pas à trouver le signe de $f'$, étudier ses variations avec $f''$, puis utiliser son minimum ou le TVI.`,
    ],
    exemple: {
      enonce: t`Soit $f(x) = xe^x$. Calculer $f'$ et $f''$.`,
      solution: t`$f'(x) = e^x + xe^x = (x + 1)e^x$.

On dérive $f'$ comme un produit : $f''(x) = e^x + (x + 1)e^x = (x + 2)e^x$.`,
    },
    pieges: [
      t`Simplifier $f'$ **avant** de la dériver : les calculs sont beaucoup plus courts.`,
    ],
    voir: ['der-convexite', 'der-inflexion'],
  },

  'der-convexite': {
    quand: t`« Étudier la convexité de $f$ ».`,
    etapes: [
      t`Calculer $f''(x)$.`,
      t`Étudier son signe.`,
      t`$f'' \geq 0$ sur $I$ : $f$ est **convexe** sur $I$ (courbe « en creux », au-dessus de ses tangentes). $f'' \leq 0$ : $f$ est **concave**.`,
    ],
    exemple: {
      enonce: t`Étudier la convexité de $f(x) = x^3 - 3x^2 + 2$.`,
      solution: t`$f'(x) = 3x^2 - 6x$ et $f''(x) = 6x - 6 = 6(x - 1)$.

$f''(x) \geq 0 \iff x \geq 1$.

$f$ est concave sur $]-\infty ; 1]$ et convexe sur $[1 ; +\infty[$.`,
    },
    pieges: [
      t`Le signe de $f'$ donne les **variations**, celui de $f''$ la **convexité** : ne pas les confondre.`,
      t`Autre caractérisation : $f$ convexe $\iff$ $f'$ croissante.`,
    ],
    voir: ['der-seconde', 'der-inflexion', 'der-convexite-tangente'],
  },

  'der-inflexion': {
    quand: t`« Montrer que $\mathcal C_f$ admet un point d'inflexion » ou « déterminer ses coordonnées ».`,
    etapes: [
      t`Calculer $f''(x)$ et étudier son signe.`,
      t`Si $f''$ **s'annule en changeant de signe** en $a$, le point $A(a ; f(a))$ est un point d'inflexion : la convexité change, et la courbe traverse sa tangente en $A$.`,
      t`Calculer $f(a)$ pour donner les coordonnées.`,
    ],
    exemple: {
      enonce: t`Montrer que la courbe de $f(x) = xe^{-x}$ admet un point d'inflexion.`,
      solution: t`$f'(x) = e^{-x} - xe^{-x} = (1 - x)e^{-x}$.

$f''(x) = -e^{-x} - (1 - x)e^{-x} = (x - 2)e^{-x}$.

Comme $e^{-x} > 0$, $f''(x)$ a le signe de $x - 2$ : négatif avant 2, positif après. $f''$ s'annule en changeant de signe en 2.

La courbe admet un point d'inflexion en $A\left(2 ; 2e^{-2}\right)$.`,
    },
    pieges: [
      t`$f''(a) = 0$ ne suffit pas : il faut un **changement de signe** (contre-exemple : $x^4$ en 0).`,
    ],
    voir: ['der-convexite', 'der-convexite-graphique'],
  },

  'der-convexite-tangente': {
    quand: t`Montrer une inégalité comme $e^x \geq x + 1$ ou $\ln x \leq x - 1$, ou situer une courbe par rapport à une tangente, quand on connaît la convexité.`,
    etapes: [
      t`Établir la convexité (ou concavité) de $f$ sur l'intervalle.`,
      t`Calculer l'équation de la tangente $T$ au point utile : $y = f'(a)(x - a) + f(a)$.`,
      t`Conclure : une fonction **convexe** est au-dessus de ses tangentes, donc $f(x) \geq f'(a)(x - a) + f(a)$. Concave : en dessous.`,
    ],
    exemple: {
      enonce: t`Montrer que pour tout réel $x$, $e^x \geq x + 1$.`,
      solution: t`La fonction exponentielle est convexe sur $\mathbb{R}$ car $(e^x)'' = e^x > 0$.

Sa tangente au point d'abscisse 0 a pour équation $y = e^0(x - 0) + e^0$, soit $y = x + 1$.

Une fonction convexe est au-dessus de ses tangentes, donc pour tout $x \in \mathbb{R}$, $e^x \geq x + 1$.`,
    },
    pieges: [
      t`L'inégalité ne vaut que sur l'intervalle où la fonction est convexe.`,
    ],
    voir: ['der-convexite', 'der-inegalite', 'der-tangente'],
  },

  'der-convexite-graphique': {
    quand: t`On donne la courbe de $f$, de $f'$ ou de $f''$ et on demande la convexité ou un point d'inflexion.`,
    etapes: [
      t`**Courbe de $f$** : convexe là où elle est « en creux » (au-dessus de ses tangentes), concave là où elle est « en bosse ».`,
      t`**Courbe de $f'$** : $f$ est convexe là où $f'$ est **croissante**, concave là où $f'$ est décroissante. Un extremum de $f'$ correspond à un point d'inflexion de $f$.`,
      t`**Courbe de $f''$** : $f$ est convexe là où la courbe est **au-dessus de l'axe** des abscisses. Un point d'inflexion correspond à un endroit où elle traverse l'axe.`,
    ],
    exemple: {
      enonce: t`On donne la courbe de $f'$ sur $[0 ; 5]$ : elle est décroissante sur $[0 ; 2]$ puis croissante sur $[2 ; 5]$. Que peut-on dire de $f$ ?`,
      solution: t`$f'$ est décroissante sur $[0 ; 2]$ : $f$ est concave sur $[0 ; 2]$.

$f'$ est croissante sur $[2 ; 5]$ : $f$ est convexe sur $[2 ; 5]$.

La convexité change en 2 : la courbe de $f$ admet un point d'inflexion d'abscisse 2.`,
    },
    pieges: [
      t`Bien lire **quelle** courbe est donnée ($f$, $f'$ ou $f''$) : c'est le piège classique des QCM.`,
      t`Le signe de $f'$ ne dit rien sur la convexité : ce sont ses **variations** qui comptent.`,
    ],
    voir: ['der-convexite', 'der-inflexion', 'der-lecture-graphique'],
  },
}
