// Fiches méthode — Primitives et équations différentielles. Même format que suites.js.
const t = String.raw

export const fichesPrimitives = {
  'prim-usuelles': {
    quand: t`« Déterminer une primitive de $f$ » quand $f$ est une somme de fonctions de référence.`,
    etapes: [
      t`Retenir (une primitive de…) :
- $x^n \to \dfrac{x^{n+1}}{n+1}$ ($n \neq -1$), $k \to kx$
- $\dfrac{1}{x^2} \to -\dfrac1x$, $\dfrac1x \to \ln x$ (sur $]0 ; +\infty[$), $\dfrac{1}{\sqrt x} \to 2\sqrt x$
- $e^x \to e^x$, $\cos x \to \sin x$, $\sin x \to -\cos x$`,
      t`Intégrer terme à terme ; les constantes multiplicatives restent devant.`,
      t`Vérifier en dérivant le résultat : on doit retrouver $f$.`,
    ],
    exemple: {
      enonce: t`Déterminer une primitive de $f(x) = 4x^3 - 6x + 2 + \dfrac{1}{x^2}$ sur $]0 ; +\infty[$.`,
      solution: t`Terme à terme :
- $4x^3 \to 4 \times \frac{x^4}{4} = x^4$
- $-6x \to -6 \times \frac{x^2}{2} = -3x^2$
- $2 \to 2x$
- $\frac{1}{x^2} \to -\frac1x$

Une primitive est $F(x) = x^4 - 3x^2 + 2x - \dfrac1x$.`,
    },
    pieges: [
      t`Une primitive de $\frac{1}{x^2}$ est $-\frac1x$ (avec le signe moins).`,
      t`On dit « **une** primitive » : toutes les autres s'obtiennent en ajoutant une constante.`,
    ],
    voir: ['prim-formes', 'prim-verifier'],
  },

  'prim-formes': {
    quand: t`La fonction contient une composée : $2xe^{x^2}$, $\dfrac{2x + 1}{x^2 + x + 1}$, $3(3x - 1)^4$…`,
    etapes: [
      t`Repérer une forme de dérivée de composée :
- $u'e^u \to e^u$
- $\dfrac{u'}{u} \to \ln u$ (si $u > 0$)
- $u'u^n \to \dfrac{u^{n+1}}{n+1}$
- $\dfrac{u'}{\sqrt u} \to 2\sqrt u$
- $\dfrac{u'}{u^2} \to -\dfrac1u$`,
      t`Identifier $u$ et vérifier que $u'$ est bien présent (exactement, ou à une constante près).`,
    ],
    exemple: {
      enonce: t`Déterminer une primitive de $f(x) = 2xe^{x^2}$, $g(x) = \dfrac{2x + 1}{x^2 + x + 1}$ et $h(x) = 3(3x - 1)^4$.`,
      solution: t`- $u = x^2$, $u' = 2x$ : forme $u'e^u$, donc $F(x) = e^{x^2}$.
- $u = x^2 + x + 1$, $u' = 2x + 1$, et $u > 0$ ($\Delta < 0$) : forme $\frac{u'}{u}$, donc $G(x) = \ln(x^2 + x + 1)$.
- $u = 3x - 1$, $u' = 3$ : forme $u'u^4$, donc $H(x) = \dfrac{(3x - 1)^5}{5}$.`,
    },
    pieges: [
      t`Pour $\ln u$, il faut $u > 0$ (sinon on écrit $\ln|u|$, hors programme).`,
      t`Si $u'$ n'apparaît qu'à une constante près, voir « ajuster une constante ».`,
    ],
    voir: ['prim-ajuster', 'der-composee'],
  },

  'prim-ajuster': {
    quand: t`On reconnaît presque une forme $u'e^u$, $\frac{u'}{u}$… mais il manque un facteur : $xe^{x^2}$ (il faudrait $2x$), $\dfrac{x}{x^2 + 1}$, $e^{3x}$…`,
    etapes: [
      t`Identifier $u$ et calculer $u'$.`,
      t`Faire apparaître $u'$ en multipliant et divisant par la constante qui manque : $x = \dfrac12 \times 2x$.`,
      t`Appliquer la forme, en gardant la constante devant.`,
    ],
    exemple: {
      enonce: t`Déterminer une primitive de $f(x) = xe^{x^2}$, $g(x) = \dfrac{x}{x^2 + 1}$ et $h(x) = (2x + 1)^3$.`,
      solution: t`- $f(x) = \frac12 \times 2xe^{x^2}$, donc $F(x) = \dfrac12 e^{x^2}$.
- $g(x) = \frac12 \times \dfrac{2x}{x^2 + 1}$, donc $G(x) = \dfrac12\ln(x^2 + 1)$.
- $h(x) = \frac12 \times 2(2x + 1)^3$, donc $H(x) = \dfrac12 \times \dfrac{(2x + 1)^4}{4} = \dfrac{(2x + 1)^4}{8}$.`,
    },
    pieges: [
      t`On ne peut ajuster qu'une **constante** : $e^{x^2}$ seul n'a pas de primitive simple (il faudrait un facteur $x$).`,
      t`Vérifier en dérivant : on doit retrouver exactement $f$.`,
    ],
    voir: ['prim-formes', 'prim-verifier'],
  },

  'prim-condition': {
    quand: t`« Déterminer **la** primitive $F$ de $f$ telle que $F(a) = b$ ».`,
    etapes: [
      t`Trouver une primitive, puis écrire **toutes** les primitives : $F(x) = G(x) + C$.`,
      t`Remplacer $x$ par $a$ et résoudre $F(a) = b$ pour trouver $C$.`,
      t`Écrire la primitive finale.`,
    ],
    exemple: {
      enonce: t`Déterminer la primitive $F$ de $f(x) = e^{2x}$ telle que $F(0) = 1$.`,
      solution: t`Les primitives de $f$ sont les fonctions $F(x) = \dfrac12 e^{2x} + C$, $C \in \mathbb{R}$.

$F(0) = \dfrac12 + C = 1 \iff C = \dfrac12$.

Donc $F(x) = \dfrac12 e^{2x} + \dfrac12$.`,
    },
    pieges: [
      t`$e^0 = 1$ et non 0 : attention en remplaçant.`,
    ],
    voir: ['prim-usuelles', 'ed-condition'],
  },

  'prim-verifier': {
    quand: t`« Montrer que $F$ est une primitive de $f$ » : on donne $F$, il n'y a rien à chercher.`,
    etapes: [
      t`Dériver $F$.`,
      t`Simplifier et constater que $F'(x) = f(x)$ sur l'intervalle.`,
      t`Conclure : « $F$ est dérivable et $F' = f$, donc $F$ est une primitive de $f$ ».`,
    ],
    exemple: {
      enonce: t`Montrer que $F(x) = x\ln x - x$ est une primitive de $f(x) = \ln x$ sur $]0 ; +\infty[$.`,
      solution: t`$F$ est dérivable sur $]0 ; +\infty[$ et
$$\begin{aligned} F'(x) &= 1 \times \ln x + x \times \frac1x - 1 \\ &= \ln x + 1 - 1 = \ln x \end{aligned}$$
Donc $F' = f$ : $F$ est une primitive de $\ln$ sur $]0 ; +\infty[$.`,
    },
    pieges: [
      t`Ne pas chercher à intégrer $f$ : dériver $F$ est beaucoup plus simple.`,
    ],
    voir: ['prim-identification', 'der-produit-quotient'],
  },

  'prim-identification': {
    quand: t`« Déterminer $a$ et $b$ tels que $F(x) = (ax + b)e^x$ soit une primitive de $f$ » : on donne la forme, il faut trouver les coefficients.`,
    etapes: [
      t`Dériver $F$ en gardant $a$ et $b$ comme lettres.`,
      t`Écrire $F'(x)$ sous la même forme que $f(x)$ (factoriser par $e^x$, regrouper les $x$).`,
      t`**Identifier** les coefficients : même coefficient devant $x$, même constante. Résoudre le système.`,
    ],
    exemple: {
      enonce: t`Déterminer $a$ et $b$ pour que $F(x) = (ax + b)e^x$ soit une primitive de $f(x) = (2x + 3)e^x$.`,
      solution: t`$F'(x) = ae^x + (ax + b)e^x = (ax + a + b)e^x$.

$F' = f$ si $ax + a + b = 2x + 3$ pour tout $x$, c'est-à-dire
$$\begin{cases} a = 2 \\ a + b = 3 \end{cases} \iff \begin{cases} a = 2 \\ b = 1 \end{cases}$$
Donc $F(x) = (2x + 1)e^x$.`,
    },
    pieges: [
      t`Identifier « coefficient de $x$ avec coefficient de $x$ » et « constante avec constante ».`,
    ],
    voir: ['prim-verifier', 'int-ipp'],
  },

  'ed-verifier': {
    quand: t`« Vérifier que la fonction $g$ est solution de l'équation différentielle (E) ».`,
    etapes: [
      t`Calculer $g'(x)$.`,
      t`Calculer séparément le membre de droite de (E) en remplaçant $y$ par $g(x)$.`,
      t`Constater l'égalité pour tout $x$.`,
    ],
    exemple: {
      enonce: t`Vérifier que $g(x) = 2e^{3x} - 1$ est solution de $(E) : y' = 3y + 3$.`,
      solution: t`D'une part, $g'(x) = 6e^{3x}$.

D'autre part, $3g(x) + 3 = 3(2e^{3x} - 1) + 3 = 6e^{3x} - 3 + 3 = 6e^{3x}$.

Donc $g'(x) = 3g(x) + 3$ pour tout $x$ : $g$ est solution de (E).`,
    },
    pieges: [
      t`Calculer les deux membres **séparément**, puis comparer : ne pas partir de l'égalité à démontrer.`,
    ],
    voir: ['ed-yayb', 'ed-particuliere'],
  },

  'ed-yay': {
    quand: t`Équation $y' = ay$ (ou $y' + ky = 0$, à réécrire $y' = -ky$).`,
    etapes: [
      t`Mettre l'équation sous la forme $y' = ay$ et lire $a$.`,
      t`Les solutions sont les fonctions $x \mapsto Ce^{ax}$, $C \in \mathbb{R}$.`,
    ],
    exemple: {
      enonce: t`Résoudre $y' = -0{,}5y$, puis $y' + 2y = 0$.`,
      solution: t`- $a = -0{,}5$ : les solutions sont $y(x) = Ce^{-0{,}5x}$, $C \in \mathbb{R}$.
- $y' + 2y = 0 \iff y' = -2y$ : les solutions sont $y(x) = Ce^{-2x}$, $C \in \mathbb{R}$.`,
    },
    pieges: [
      t`$y' + 2y = 0$ donne $a = -2$, pas $2$.`,
      t`Ne pas oublier « $C \in \mathbb{R}$ » : il y a une infinité de solutions.`,
    ],
    voir: ['ed-yayb', 'ed-condition'],
  },

  'ed-yayb': {
    quand: t`Équation $y' = ay + b$ avec $a$ et $b$ constants ($a \neq 0$).`,
    etapes: [
      t`Trouver la **solution constante** : si $y = k$, alors $y' = 0$, donc $0 = ak + b$, soit $k = -\dfrac ba$.`,
      t`Les solutions sont les fonctions $x \mapsto Ce^{ax} - \dfrac ba$, $C \in \mathbb{R}$.`,
    ],
    exemple: {
      enonce: t`Résoudre $y' = 2y - 6$.`,
      solution: t`$a = 2$ et $b = -6$. Solution constante : $-\dfrac ba = -\dfrac{-6}{2} = 3$.

Les solutions sont les fonctions $y(x) = Ce^{2x} + 3$, $C \in \mathbb{R}$.`,
    },
    pieges: [
      t`Attention au signe de $-\frac ba$ : vérifier en remplaçant $y = 3$ dans l'équation ($0 = 6 - 6$ ✓).`,
    ],
    voir: ['ed-yay', 'ed-condition', 'ed-autre-forme'],
  },

  'ed-particuliere': {
    quand: t`Équation $y' = ay + f(x)$ où $f$ n'est pas constante (ex. $y' = -y + 2x + 1$). L'énoncé donne ou fait chercher une solution particulière $y_p$.`,
    etapes: [
      t`Trouver (ou vérifier) une **solution particulière** $y_p$. Si l'énoncé dit « affine », poser $y_p = mx + p$, remplacer et identifier.`,
      t`Montrer que $y$ est solution de l'équation si et seulement si $y - y_p$ est solution de $y' = ay$.`,
      t`Conclure : les solutions sont $y(x) = Ce^{ax} + y_p(x)$, $C \in \mathbb{R}$.`,
    ],
    exemple: {
      enonce: t`Résoudre $(E) : y' = -y + 2x + 1$ en cherchant d'abord une solution affine.`,
      solution: t`On pose $y_p = mx + p$, donc $y_p' = m$. $y_p$ est solution si $m = -(mx + p) + 2x + 1$ pour tout $x$, soit $m = (2 - m)x + 1 - p$. Par identification : $2 - m = 0$ et $m = 1 - p$, donc $m = 2$ et $p = -1$ : $y_p(x) = 2x - 1$.

$y$ est solution de (E) $\iff y' - y_p' = -(y - y_p) \iff y - y_p$ est solution de $z' = -z$ $\iff y - y_p = Ce^{-x}$.

Les solutions sont $y(x) = Ce^{-x} + 2x - 1$, $C \in \mathbb{R}$.`,
    },
    pieges: [
      t`Ne pas oublier d'ajouter $y_p$ à la fin.`,
    ],
    voir: ['ed-yay', 'ed-verifier', 'prim-identification'],
  },

  'ed-condition': {
    quand: t`« Déterminer **la** solution telle que $y(x_0) = y_0$ ».`,
    etapes: [
      t`Écrire la forme générale des solutions (avec $C$).`,
      t`Remplacer $x$ par $x_0$ et résoudre $y(x_0) = y_0$ pour trouver $C$.`,
      t`Écrire la solution unique.`,
    ],
    exemple: {
      enonce: t`Déterminer la solution de $y' = 3y$ telle que $y(1) = 2$.`,
      solution: t`Les solutions sont $y(x) = Ce^{3x}$.

$y(1) = Ce^3 = 2 \iff C = 2e^{-3}$.

Donc $y(x) = 2e^{-3}e^{3x} = 2e^{3(x - 1)}$.`,
    },
    pieges: [
      t`Si la condition n'est pas en 0, l'exponentielle ne vaut pas 1 : bien calculer $e^{3 \times 1}$.`,
    ],
    voir: ['ed-yayb', 'prim-condition'],
  },

  'ed-autre-forme': {
    quand: t`L'équation n'est pas écrite sous la forme $y' = ay + b$ : $2y' + y = 3$, $y' - 4y = 8$…`,
    etapes: [
      t`Isoler $y'$ : passer les termes en $y$ à droite, puis diviser par le coefficient de $y'$.`,
      t`Lire $a$ et $b$, puis appliquer la méthode de $y' = ay + b$.`,
    ],
    exemple: {
      enonce: t`Résoudre $2y' + y = 3$.`,
      solution: t`$2y' + y = 3 \iff y' = -\dfrac12 y + \dfrac32$. Donc $a = -\dfrac12$ et $b = \dfrac32$.

Solution constante : $-\dfrac ba = -\dfrac{3/2}{-1/2} = 3$.

Les solutions sont $y(x) = Ce^{-x/2} + 3$, $C \in \mathbb{R}$.`,
    },
    pieges: [
      t`En divisant par 2, diviser **tous** les termes.`,
    ],
    voir: ['ed-yayb'],
  },

  'ed-modeliser': {
    quand: t`Problème concret décrit par une équation différentielle : refroidissement, population, médicament, charge d'un condensateur…`,
    etapes: [
      t`Traduire l'énoncé : « la vitesse de variation est proportionnelle à… » donne $y' = k \times (\dots)$.`,
      t`Se ramener à $y' = ay + b$ et résoudre.`,
      t`Utiliser la condition initiale pour trouver $C$.`,
      t`Répondre à la question concrète (limite = état à long terme, seuil avec ln…).`,
    ],
    exemple: {
      enonce: t`Un café à 80 °C refroidit dans une pièce à 20 °C selon $T' = -0{,}1(T - 20)$, $t$ en minutes. Exprimer $T(t)$, puis trouver quand le café passe sous 30 °C.`,
      solution: t`$T' = -0{,}1T + 2$ : solution constante $20$, donc $T(t) = Ce^{-0{,}1t} + 20$.

$T(0) = C + 20 = 80$, donc $C = 60$ et $T(t) = 60e^{-0{,}1t} + 20$.
$$\begin{aligned} T(t) < 30 &\iff e^{-0{,}1t} < \frac16 \\ &\iff -0{,}1t < -\ln 6 \\ &\iff t > 10\ln 6 \approx 17{,}9 \end{aligned}$$
Le café passe sous 30 °C au bout d'environ **18 minutes**. À long terme, $T(t) \to 20$ : il atteint la température de la pièce.`,
    },
    pieges: [
      t`Répondre avec l'unité et en phrase.`,
      t`En multipliant par $-10$, le sens de l'inégalité change.`,
    ],
    voir: ['ed-yayb', 'ed-condition', 'ln-seuil'],
  },
}
