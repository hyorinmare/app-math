// Fiches méthode — Continuité. Même format que suites.js.
const t = String.raw

export const fichesContinuite = {
  'cont-point': {
    quand: t`La fonction est définie « par morceaux » (une formule pour $x \leq a$, une autre pour $x > a$) et on demande si elle est continue en $a$, ou pour quelle valeur d'un paramètre elle l'est.`,
    etapes: [
      t`Calculer $f(a)$ avec la bonne formule.`,
      t`Calculer la limite à gauche ($x \to a^-$) et la limite à droite ($x \to a^+$), chacune avec sa formule.`,
      t`$f$ est continue en $a$ si et seulement si ces deux limites sont égales à $f(a)$.`,
      t`Avec un paramètre : écrire l'égalité et la résoudre.`,
    ],
    exemple: {
      enonce: t`Soit $f(x) = x^2 + 1$ si $x \leq 1$ et $f(x) = ax - 1$ si $x > 1$. Déterminer $a$ pour que $f$ soit continue en 1.`,
      solution: t`$f(1) = 1^2 + 1 = 2$, et $\lim\limits_{x \to 1^-} f(x) = 2$ (polynôme).

$\lim\limits_{x \to 1^+} f(x) = \lim\limits_{x \to 1^+} (ax - 1) = a - 1$.

$f$ est continue en 1 si et seulement si $a - 1 = 2$, c'est-à-dire $a = 3$.`,
    },
    pieges: [
      t`Bien utiliser la formule du côté **où l'on est** : celle de $x > 1$ pour la limite à droite.`,
      t`Les fonctions usuelles (polynômes, exp, ln, racine…) sont continues sur leur ensemble de définition : pas besoin de le redémontrer.`,
    ],
    voir: ['der-derivabilite', 'cont-tvi'],
  },

  'cont-tvi': {
    quand: t`« Montrer que l'équation $f(x) = k$ admet **au moins** une solution sur $[a ; b]$ ».`,
    etapes: [
      t`Justifier que $f$ est **continue** sur $[a ; b]$.`,
      t`Calculer $f(a)$ et $f(b)$.`,
      t`Vérifier que $k$ est compris entre $f(a)$ et $f(b)$.`,
      t`Conclure : « d'après le théorème des valeurs intermédiaires, l'équation $f(x) = k$ admet au moins une solution dans $[a ; b]$ ».`,
    ],
    exemple: {
      enonce: t`Montrer que l'équation $x^3 - 3x + 1 = 0$ admet au moins une solution dans $[0 ; 1]$.`,
      solution: t`Soit $f(x) = x^3 - 3x + 1$. $f$ est continue sur $[0 ; 1]$ (polynôme).

$f(0) = 1$ et $f(1) = 1 - 3 + 1 = -1$.

0 est compris entre $f(1) = -1$ et $f(0) = 1$. D'après le théorème des valeurs intermédiaires, l'équation $f(x) = 0$ admet au moins une solution dans $[0 ; 1]$.`,
    },
    pieges: [
      t`Le TVI seul donne « au moins une » solution, pas « une unique ».`,
      t`Sans continuité, le théorème ne s'applique pas : il faut toujours la citer.`,
    ],
    voir: ['cont-tvi-unique', 'cont-encadrer'],
  },

  'cont-tvi-unique': {
    quand: t`« Montrer que l'équation $f(x) = k$ admet une **unique** solution $\alpha$ » (sur un intervalle ou sur $\mathbb{R}$). C'est la question classique avant de « donner un encadrement de $\alpha$ ».`,
    etapes: [
      t`Montrer que $f$ est **continue** et **strictement monotone** sur l'intervalle (tableau de variations).`,
      t`Calculer les valeurs ou les limites de $f$ aux bornes de l'intervalle.`,
      t`Vérifier que $k$ est compris entre ces valeurs (ou limites).`,
      t`Conclure : « d'après le corollaire du théorème des valeurs intermédiaires (théorème de la bijection), l'équation admet une unique solution $\alpha$ ».`,
      t`Si $f$ n'est pas monotone partout, découper l'intervalle selon le tableau de variations et traiter chaque morceau.`,
    ],
    exemple: {
      enonce: t`Montrer que l'équation $x^3 + x - 1 = 0$ admet une unique solution $\alpha$ sur $\mathbb{R}$, puis que $\alpha \in [0 ; 1]$.`,
      solution: t`Soit $f(x) = x^3 + x - 1$, continue sur $\mathbb{R}$. $f'(x) = 3x^2 + 1 > 0$ donc $f$ est strictement croissante sur $\mathbb{R}$.

$\lim\limits_{x \to -\infty} f(x) = -\infty$ et $\lim\limits_{x \to +\infty} f(x) = +\infty$ (terme dominant $x^3$), et 0 est entre ces limites.

D'après le corollaire du TVI, l'équation $f(x) = 0$ admet une unique solution $\alpha$ dans $\mathbb{R}$.

De plus $f(0) = -1 < 0$ et $f(1) = 1 > 0$, donc $\alpha \in [0 ; 1]$.`,
    },
    pieges: [
      t`Il faut **strictement** monotone (pas seulement monotone) pour l'unicité.`,
      t`Dire « continue » ET « strictement croissante » : les deux sont notés au bac.`,
    ],
    voir: ['cont-tvi', 'cont-encadrer', 'cont-signe-alpha'],
  },

  'cont-encadrer': {
    quand: t`« Donner un encadrement de $\alpha$ d'amplitude $10^{-2}$ » ou « une valeur approchée à $10^{-2}$ près ».`,
    etapes: [
      t`Avec la calculatrice, faire un **tableau de valeurs** de $f$ avec un pas de 0,1, repérer le changement de signe.`,
      t`Recommencer avec un pas de 0,01 entre les deux valeurs trouvées.`,
      t`Conclure : si $f(a) < 0 < f(b)$ avec $b - a = 0{,}01$ et $f$ croissante, alors $a < \alpha < b$.`,
    ],
    exemple: {
      enonce: t`On sait que $x^3 + x - 1 = 0$ a une unique solution $\alpha$, avec $f$ croissante. Encadrer $\alpha$ à $10^{-2}$ près.`,
      solution: t`Avec un pas de 0,1 : $f(0{,}6) \approx -0{,}18 < 0$ et $f(0{,}7) \approx 0{,}04 > 0$.

Avec un pas de 0,01 entre 0,6 et 0,7 :

- $f(0{,}68) \approx -0{,}0056 < 0$
- $f(0{,}69) \approx 0{,}0185 > 0$

Donc $0{,}68 < \alpha < 0{,}69$.`,
    },
    pieges: [
      t`Bien écrire les **valeurs de $f$** qui justifient l'encadrement, pas seulement le résultat.`,
      t`« Arrondi à $10^{-2}$ » et « encadrement d'amplitude $10^{-2}$ » ne sont pas la même question.`,
    ],
    voir: ['cont-dichotomie', 'cont-tvi-unique'],
  },

  'cont-dichotomie': {
    quand: t`L'énoncé donne (ou demande de compléter) un algorithme de dichotomie en Python pour approcher une solution $\alpha$.`,
    etapes: [
      t`Principe : on part de $[a ; b]$ contenant $\alpha$, on coupe en deux au milieu $m = \frac{a + b}{2}$.`,
      t`Si $f(a)$ et $f(m)$ sont de signes contraires ($f(a) \times f(m) \leq 0$), $\alpha$ est dans $[a ; m]$ : on remplace $b$ par $m$. Sinon, $\alpha$ est dans $[m ; b]$ : on remplace $a$ par $m$.`,
      t`On recommence tant que l'amplitude $b - a$ est plus grande que la précision voulue.`,
    ],
    exemple: {
      enonce: t`Appliquer la dichotomie à $f(x) = x^3 + x - 1$ sur $[0 ; 1]$ : donner les trois premiers intervalles obtenus.`,
      solution: t`- $m = 0{,}5$ : $f(0{,}5) = -0{,}375 < 0$, même signe que $f(0) = -1$. Nouvel intervalle : $[0{,}5 ; 1]$.
- $m = 0{,}75$ : $f(0{,}75) \approx 0{,}17 > 0$, signe contraire de $f(0{,}5)$. Nouvel intervalle : $[0{,}5 ; 0{,}75]$.
- $m = 0{,}625$ : $f(0{,}625) \approx -0{,}13 < 0$. Nouvel intervalle : $[0{,}625 ; 0{,}75]$.

En Python :`,
      code: `def dichotomie(f, a, b, e):
    while b - a > e:
        m = (a + b) / 2
        if f(a) * f(m) <= 0:
            b = m
        else:
            a = m
    return a, b`,
    },
    pieges: [
      t`À chaque étape l'amplitude est divisée par 2 : pour passer de 1 à $10^{-3}$, il faut 10 étapes ($2^{10} = 1024$).`,
    ],
    voir: ['cont-encadrer', 'py-completer'],
  },

  'cont-signe-alpha': {
    quand: t`On a montré qu'une fonction $g$ s'annule en un unique $\alpha$, et on demande le **signe** de $g(x)$ (souvent pour étudier une autre fonction $f$ dont la dérivée dépend de $g$).`,
    etapes: [
      t`Utiliser la monotonie de $g$ : si $g$ est strictement croissante et $g(\alpha) = 0$, alors $g(x) < 0$ pour $x < \alpha$ et $g(x) > 0$ pour $x > \alpha$.`,
      t`Dresser le tableau de signes de $g$, puis en déduire le signe de $f'$ et les variations de $f$.`,
      t`Astuce : pour simplifier $f(\alpha)$, utiliser la relation $g(\alpha) = 0$ (par exemple $\alpha^3 = 1 - \alpha$).`,
    ],
    exemple: {
      enonce: t`$g(x) = x^3 + x - 1$ est strictement croissante et s'annule en $\alpha$. Soit $f$ telle que $f'(x) = \dfrac{g(x)}{x^2 + 1}$. Étudier les variations de $f$.`,
      solution: t`$g$ est strictement croissante et $g(\alpha) = 0$, donc $g(x) < 0$ sur $]-\infty ; \alpha[$ et $g(x) > 0$ sur $]\alpha ; +\infty[$.

Comme $x^2 + 1 > 0$, $f'(x)$ a le signe de $g(x)$.

$f$ est décroissante sur $]-\infty ; \alpha]$ et croissante sur $[\alpha ; +\infty[$ : elle admet un minimum en $\alpha$.`,
    },
    pieges: [
      t`On ne connaît pas $\alpha$ exactement : on garde la lettre $\alpha$ dans le tableau, avec son encadrement si besoin.`,
    ],
    voir: ['cont-tvi-unique', 'der-signe'],
  },

  'cont-limite-suite': {
    quand: t`On connaît la limite de $(u_n)$ et on veut celle de $f(u_n)$, ou on veut la limite d'une suite $u_{n+1} = f(u_n)$ convergente.`,
    etapes: [
      t`Propriété : si $u_n \to \ell$ et $f$ est **continue** en $\ell$, alors $f(u_n) \to f(\ell)$.`,
      t`Pour $u_{n+1} = f(u_n)$ : si $u_n \to \ell$, alors $u_{n+1} \to \ell$ aussi, et $f(u_n) \to f(\ell)$. Par unicité de la limite, $\ell = f(\ell)$.`,
    ],
    exemple: {
      enonce: t`1) $u_n = \dfrac{2n + 1}{n}$. Déterminer la limite de $v_n = e^{u_n}$. 2) Justifier que si $u_{n+1} = \cos(u_n)$ converge vers $\ell$, alors $\cos \ell = \ell$.`,
      solution: t`1) $u_n = 2 + \dfrac1n \to 2$. La fonction exponentielle est continue en 2, donc $v_n \to e^2$.

2) Si $u_n \to \ell$, alors $u_{n+1} \to \ell$. Comme $\cos$ est continue en $\ell$, $\cos(u_n) \to \cos \ell$. Or $u_{n+1} = \cos(u_n)$ : par unicité de la limite, $\ell = \cos \ell$.`,
    },
    pieges: [
      t`Il faut **savoir que la suite converge** avant d'écrire $\ell = f(\ell)$.`,
    ],
    voir: ['suite-point-fixe', 'suite-conv-monotone'],
  },
}
