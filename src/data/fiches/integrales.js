// Fiches méthode — Calcul intégral. Même format que suites.js.
const t = String.raw

export const fichesIntegrales = {
  'int-calcul': {
    quand: t`« Calculer $\displaystyle\int_a^b f(x)\,dx$ » quand on sait trouver une primitive de $f$.`,
    etapes: [
      t`Trouver une primitive $F$ de $f$.`,
      t`Écrire $\displaystyle\int_a^b f(x)\,dx = \big[F(x)\big]_a^b = F(b) - F(a)$.`,
      t`Calculer **en entier** $F(b)$, puis $F(a)$, et soustraire.`,
    ],
    exemple: {
      enonce: t`Calculer $I = \displaystyle\int_0^1 (3x^2 + e^x)\,dx$ et $J = \displaystyle\int_0^{\ln 2} e^{2x}\,dx$.`,
      solution: t`$$I = \big[x^3 + e^x\big]_0^1 = (1 + e) - (0 + 1) = e$$
$$\begin{aligned} J &= \left[\frac12 e^{2x}\right]_0^{\ln 2} = \frac12 e^{2\ln 2} - \frac12 e^0 \\ &= \frac42 - \frac12 = \frac32 \end{aligned}$$`,
    },
    pieges: [
      t`$F(a)$ n'est pas toujours nul : ici $e^0 = 1$.`,
      t`$e^{2\ln 2} = (e^{\ln 2})^2 = 4$.`,
    ],
    voir: ['prim-usuelles', 'prim-formes', 'int-aire'],
  },

  'int-aire': {
    quand: t`« Calculer l'aire du domaine compris entre la courbe, l'axe des abscisses et les droites $x = a$ et $x = b$ », éventuellement en cm².`,
    etapes: [
      t`Vérifier que $f$ est **positive** sur $[a ; b]$ (sinon voir « fonction qui change de signe »).`,
      t`Aire $= \displaystyle\int_a^b f(x)\,dx$ en **unités d'aire** (u.a.).`,
      t`Conversion : 1 u.a. = aire du rectangle formé par les unités des axes. Si 1 unité vaut 2 cm en abscisse et 3 cm en ordonnée, 1 u.a. = 6 cm².`,
    ],
    exemple: {
      enonce: t`Calculer l'aire sous la courbe de $f(x) = x^2 + 1$ entre 0 et 2, sachant que les unités sont 2 cm en abscisse et 3 cm en ordonnée.`,
      solution: t`$f$ est positive sur $[0 ; 2]$, donc
$$\begin{aligned} \mathcal A &= \int_0^2 (x^2 + 1)\,dx = \left[\frac{x^3}{3} + x\right]_0^2 \\ &= \frac83 + 2 = \frac{14}{3} \text{ u.a.} \end{aligned}$$
1 u.a. $= 2 \times 3 = 6$ cm², donc $\mathcal A = \dfrac{14}{3} \times 6 = 28$ cm².`,
    },
    pieges: [
      t`Une aire est toujours positive : si on trouve un nombre négatif, il y a une erreur (ou la fonction est négative).`,
    ],
    voir: ['int-aire-signe', 'int-entre-courbes'],
  },

  'int-aire-signe': {
    quand: t`Calculer une aire quand la fonction est **négative** sur une partie de l'intervalle.`,
    etapes: [
      t`Étudier le signe de $f$ sur $[a ; b]$ et repérer où elle s'annule.`,
      t`Découper l'intervalle avec la relation de Chasles.`,
      t`Sur les morceaux où $f \leq 0$, l'aire vaut $-\displaystyle\int f(x)\,dx$. Additionner les aires.`,
    ],
    exemple: {
      enonce: t`Calculer l'aire entre la courbe de $f(x) = x^2 - 1$, l'axe des abscisses et les droites $x = 0$ et $x = 2$.`,
      solution: t`$f(x) \leq 0$ sur $[0 ; 1]$ et $f(x) \geq 0$ sur $[1 ; 2]$. Une primitive est $F(x) = \frac{x^3}{3} - x$.

- $\displaystyle\int_0^1 f(x)\,dx = F(1) - F(0) = -\frac23$
- $\displaystyle\int_1^2 f(x)\,dx = F(2) - F(1) = \frac23 + \frac23 = \frac43$

$\mathcal A = \dfrac23 + \dfrac43 = 2$ u.a.`,
    },
    pieges: [
      t`$\displaystyle\int_0^2 f(x)\,dx = \frac23$ n'est **pas** l'aire : les parties négatives se compensent.`,
    ],
    voir: ['int-aire', 'int-lineairite'],
  },

  'int-entre-courbes': {
    quand: t`« Calculer l'aire du domaine compris entre $\mathcal C_f$ et $\mathcal C_g$ ».`,
    etapes: [
      t`Déterminer quelle courbe est au-dessus : étudier le signe de $f(x) - g(x)$.`,
      t`Si $f \geq g$ sur $[a ; b]$ : $\mathcal A = \displaystyle\int_a^b \big(f(x) - g(x)\big)\,dx$.`,
      t`Les bornes sont souvent les abscisses des points d'intersection : résoudre $f(x) = g(x)$.`,
    ],
    exemple: {
      enonce: t`Calculer l'aire du domaine compris entre les courbes de $f(x) = x$ et $g(x) = x^2$.`,
      solution: t`$f(x) = g(x) \iff x = x^2 \iff x(1 - x) = 0 \iff x = 0$ ou $x = 1$.

Sur $[0 ; 1]$, $x - x^2 = x(1 - x) \geq 0$ : $f \geq g$.
$$\mathcal A = \int_0^1 (x - x^2)\,dx = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \frac16 \text{ u.a.}$$`,
    },
    pieges: [
      t`Toujours « courbe du haut moins courbe du bas ».`,
      t`Si les courbes se croisent dans l'intervalle, découper avec Chasles.`,
    ],
    voir: ['der-position', 'int-aire'],
  },

  'int-moyenne': {
    quand: t`« Calculer la valeur moyenne de $f$ sur $[a ; b]$ ».`,
    etapes: [
      t`Appliquer $\mu = \dfrac{1}{b - a}\displaystyle\int_a^b f(x)\,dx$.`,
      t`Interprétation : c'est la hauteur du rectangle de base $[a ; b]$ qui a la même aire que le domaine sous la courbe.`,
    ],
    exemple: {
      enonce: t`Calculer la valeur moyenne de $\sin$ sur $[0 ; \pi]$.`,
      solution: t`$$\begin{aligned} \mu &= \frac1\pi \int_0^\pi \sin x\,dx = \frac1\pi \big[-\cos x\big]_0^\pi \\ &= \frac1\pi(1 + 1) = \frac2\pi \end{aligned}$$
soit environ 0,64.`,
    },
    pieges: [
      t`Ne pas oublier le facteur $\dfrac{1}{b - a}$.`,
      t`$-\cos\pi = 1$ et $-\cos 0 = -1$ : attention aux signes.`,
    ],
    voir: ['int-calcul'],
  },

  'int-lineairite': {
    quand: t`On connaît certaines intégrales et on doit en déduire d'autres, ou il faut découper un intervalle (valeur absolue, fonction par morceaux).`,
    etapes: [
      t`**Linéarité** : $\displaystyle\int_a^b (\alpha f + \beta g) = \alpha\int_a^b f + \beta\int_a^b g$.`,
      t`**Chasles** : $\displaystyle\int_a^c f = \int_a^b f + \int_b^c f$. On l'utilise pour couper là où l'expression change.`,
      t`Aussi : $\displaystyle\int_b^a f = -\int_a^b f$.`,
    ],
    exemple: {
      enonce: t`1) Sachant que $\int_0^1 f = 4$ et $\int_0^1 g = 1$, calculer $\int_0^1 (2f - 3g)$. 2) Calculer $\displaystyle\int_0^3 |x - 1|\,dx$.`,
      solution: t`1) Par linéarité : $2 \times 4 - 3 \times 1 = 5$.

2) $|x - 1| = 1 - x$ sur $[0 ; 1]$ et $x - 1$ sur $[1 ; 3]$. Par Chasles :
$$\int_0^1 (1 - x)\,dx + \int_1^3 (x - 1)\,dx = \frac12 + 2 = \frac52$$`,
    },
    pieges: [
      t`On ne peut **pas** écrire $\int fg = \int f \times \int g$.`,
    ],
    voir: ['int-aire-signe'],
  },

  'int-ipp': {
    quand: t`Intégrale d'un produit qu'on ne sait pas intégrer directement : $\int x e^x$, $\int \ln x$, $\int x\sin x$… L'énoncé dit souvent « à l'aide d'une intégration par parties ».`,
    etapes: [
      t`Choisir $u$ et $v'$ : $u$ = ce qui se **simplifie en dérivant** ($x$, polynôme, $\ln x$), $v'$ = ce qu'on sait **intégrer** ($e^x$, $\cos x$, 1…).`,
      t`Calculer $u'$ et $v$ (une primitive de $v'$).`,
      t`Appliquer $\displaystyle\int_a^b uv' = \big[uv\big]_a^b - \int_a^b u'v$.`,
      t`Calculer le crochet et la nouvelle intégrale, plus simple.`,
    ],
    exemple: {
      enonce: t`Calculer $\displaystyle\int_1^e \ln x\,dx$.`,
      solution: t`On écrit $\ln x = \ln x \times 1$ et on pose :
- $u(x) = \ln x$, $u'(x) = \frac1x$
- $v'(x) = 1$, $v(x) = x$

$u$ et $v$ sont dérivables à dérivées continues sur $[1 ; e]$.
$$\begin{aligned} \int_1^e \ln x\,dx &= \big[x\ln x\big]_1^e - \int_1^e \frac1x \times x\,dx \\ &= (e - 0) - (e - 1) = 1 \end{aligned}$$`,
    },
    pieges: [
      t`Mauvais choix de $u$ et $v'$ = intégrale plus compliquée. Si ça empire, échanger les rôles.`,
      t`Citer que $u$ et $v$ sont dérivables à dérivées continues.`,
    ],
    voir: ['int-recurrence', 'prim-identification'],
  },

  'int-signe': {
    quand: t`« Montrer que l'intégrale est positive » sans la calculer (souvent parce qu'on ne sait pas la calculer).`,
    etapes: [
      t`Vérifier que les bornes sont dans le bon ordre : $a \leq b$.`,
      t`Montrer que $f(x) \geq 0$ sur $[a ; b]$.`,
      t`Conclure par **positivité de l'intégrale** : $\displaystyle\int_a^b f(x)\,dx \geq 0$.`,
    ],
    exemple: {
      enonce: t`Montrer que $I = \displaystyle\int_1^2 \frac{\ln x}{x^2}\,dx \geq 0$.`,
      solution: t`Sur $[1 ; 2]$, $\ln x \geq 0$ et $x^2 > 0$, donc $\dfrac{\ln x}{x^2} \geq 0$.

Comme $1 \leq 2$, par positivité de l'intégrale, $I \geq 0$.`,
    },
    pieges: [
      t`Si $a > b$, le signe est inversé : $\int_2^1 \dots \leq 0$.`,
    ],
    voir: ['int-encadrer', 'ln-signe'],
  },

  'int-encadrer': {
    quand: t`« Encadrer l'intégrale », « montrer que $\alpha \leq I \leq \beta$ », souvent pour une intégrale qu'on ne sait pas calculer ($\int e^{-x^2}$…).`,
    etapes: [
      t`Encadrer $f(x)$ sur $[a ; b]$ : $m \leq f(x) \leq M$ (avec les variations ou en partant de $x$).`,
      t`Intégrer l'encadrement (croissance de l'intégrale, avec $a \leq b$).`,
      t`Pour des constantes : $\displaystyle\int_a^b m\,dx = m(b - a)$.`,
    ],
    exemple: {
      enonce: t`Montrer que $\dfrac1e \leq \displaystyle\int_0^1 e^{-x^2}\,dx \leq 1$.`,
      solution: t`Pour $x \in [0 ; 1]$ : $0 \leq x^2 \leq 1$, donc $-1 \leq -x^2 \leq 0$, et comme exp est croissante, $e^{-1} \leq e^{-x^2} \leq 1$.

Par croissance de l'intégrale (bornes $0 \leq 1$) :
$$\int_0^1 e^{-1}\,dx \leq \int_0^1 e^{-x^2}\,dx \leq \int_0^1 1\,dx$$
soit $\dfrac1e \leq \displaystyle\int_0^1 e^{-x^2}\,dx \leq 1$.`,
    },
    pieges: [
      t`Multiplier par $-1$ change le sens : $x^2 \leq 1$ donne $-x^2 \geq -1$.`,
    ],
    voir: ['int-signe', 'int-suite'],
  },

  'int-suite': {
    quand: t`Suite définie par une intégrale : $I_n = \displaystyle\int_0^1 x^n e^x\,dx$. On demande le sens de variation, puis la limite.`,
    etapes: [
      t`**Variations** : calculer $I_{n+1} - I_n$ en une seule intégrale (linéarité), puis étudier le signe de ce qu'il y a dedans.`,
      t`**Encadrement** : encadrer la fonction intégrée (par exemple $0 \leq x^n e^x \leq e\,x^n$ sur $[0 ; 1]$) puis intégrer.`,
      t`**Limite** : gendarmes sur l'encadrement obtenu.`,
    ],
    exemple: {
      enonce: t`$I_n = \displaystyle\int_0^1 x^n e^x\,dx$. Étudier le sens de variation de $(I_n)$, puis montrer que $\lim I_n = 0$.`,
      solution: t`**Variations** : par linéarité,
$$I_{n+1} - I_n = \int_0^1 x^n(x - 1)e^x\,dx$$
Sur $[0 ; 1]$, $x^n \geq 0$, $x - 1 \leq 0$ et $e^x > 0$ : l'intégrande est négative, donc $I_{n+1} - I_n \leq 0$. $(I_n)$ est décroissante.

**Encadrement** : sur $[0 ; 1]$, $1 \leq e^x \leq e$, donc $0 \leq x^n e^x \leq e\,x^n$. En intégrant :
$$0 \leq I_n \leq e\int_0^1 x^n\,dx = \frac{e}{n + 1}$$
Or $\dfrac{e}{n + 1} \to 0$ : d'après les gendarmes, $\lim I_n = 0$.`,
    },
    pieges: [
      t`Regrouper $I_{n+1} - I_n$ en **une seule** intégrale avant d'étudier le signe.`,
    ],
    voir: ['int-encadrer', 'int-recurrence', 'suite-gendarmes'],
  },

  'int-recurrence': {
    quand: t`« Montrer que pour tout $n$, $I_{n+1} = \dots I_n$ » avec $I_n$ défini par une intégrale.`,
    etapes: [
      t`Partir de $I_{n+1}$ et faire une **intégration par parties** qui fait baisser l'exposant : $u = x^{n+1}$, $u' = (n+1)x^n$.`,
      t`Le crochet donne un nombre, l'intégrale restante fait apparaître $I_n$.`,
      t`Calculer $I_0$ directement, puis en déduire $I_1$, $I_2$… avec la relation.`,
    ],
    exemple: {
      enonce: t`$I_n = \displaystyle\int_0^1 x^n e^x\,dx$. Montrer que $I_{n+1} = e - (n+1)I_n$, puis calculer $I_0$, $I_1$ et $I_2$.`,
      solution: t`On pose $u(x) = x^{n+1}$, $u'(x) = (n+1)x^n$, $v'(x) = e^x$, $v(x) = e^x$.
$$\begin{aligned} I_{n+1} &= \big[x^{n+1}e^x\big]_0^1 - \int_0^1 (n+1)x^n e^x\,dx \\ &= e - (n+1)I_n \end{aligned}$$
$I_0 = \displaystyle\int_0^1 e^x\,dx = e - 1$, puis $I_1 = e - I_0 = 1$ et $I_2 = e - 2I_1 = e - 2$.`,
    },
    pieges: [
      t`Ne pas oublier de multiplier toute l'intégrale par $(n + 1)$.`,
    ],
    voir: ['int-ipp', 'int-suite'],
  },

  'int-fonction': {
    quand: t`Fonction définie par $F(x) = \displaystyle\int_a^x f(t)\,dt$ : on demande sa dérivée, ses variations ou son signe.`,
    etapes: [
      t`Si $f$ est continue, $F$ est **la primitive de $f$ qui s'annule en $a$** : $F' = f$ et $F(a) = 0$.`,
      t`Les variations de $F$ viennent du signe de $f$ (pas besoin de calculer l'intégrale).`,
      t`Le signe de $F$ se déduit souvent de ses variations et de $F(a) = 0$.`,
    ],
    exemple: {
      enonce: t`Soit $F(x) = \displaystyle\int_1^x e^{-t^2}\,dt$. Étudier les variations et le signe de $F$.`,
      solution: t`$t \mapsto e^{-t^2}$ est continue sur $\mathbb{R}$, donc $F$ est la primitive de cette fonction qui s'annule en 1 : $F'(x) = e^{-x^2} > 0$.

$F$ est strictement croissante sur $\mathbb{R}$ et $F(1) = 0$.

Donc $F(x) < 0$ pour $x < 1$ et $F(x) > 0$ pour $x > 1$.`,
    },
    pieges: [
      t`$F'(x) = f(x)$ : on remplace $t$ par $x$, on ne dérive pas $f$.`,
      t`Ici on ne sait pas calculer $F$ explicitement, et ce n'est pas nécessaire.`,
    ],
    voir: ['prim-condition', 'der-variations'],
  },

  'int-rectangles': {
    quand: t`« Approcher l'intégrale par la méthode des rectangles », souvent avec un algorithme Python à compléter.`,
    etapes: [
      t`Découper $[a ; b]$ en $n$ intervalles de largeur $h = \dfrac{b - a}{n}$.`,
      t`Sur chaque intervalle, rectangle de hauteur $f$(borne de gauche) — ou de droite.`,
      t`Somme des aires : $S = h\big(f(x_0) + f(x_1) + \dots + f(x_{n-1})\big)$ avec $x_k = a + kh$.`,
      t`Si $f$ est croissante, les rectangles « à gauche » donnent une valeur trop petite, ceux « à droite » une valeur trop grande : on obtient un encadrement.`,
    ],
    exemple: {
      enonce: t`Encadrer $\displaystyle\int_0^1 x^2\,dx$ avec 4 rectangles à gauche et à droite.`,
      solution: t`$h = \dfrac14$. Les valeurs de $x^2$ aux points $0, \frac14, \frac12, \frac34, 1$ sont $0, \frac{1}{16}, \frac{4}{16}, \frac{9}{16}, 1$.

- À gauche : $\frac14\left(0 + \frac{1}{16} + \frac{4}{16} + \frac{9}{16}\right) = \frac{7}{32}$
- À droite : $\frac14\left(\frac{1}{16} + \frac{4}{16} + \frac{9}{16} + 1\right) = \frac{15}{32}$

$x^2$ est croissante sur $[0 ; 1]$, donc $\dfrac{7}{32} \leq \displaystyle\int_0^1 x^2\,dx \leq \dfrac{15}{32}$, soit environ $0{,}22 \leq I \leq 0{,}47$ (la valeur exacte est $\frac13$).

En Python (rectangles à gauche) :`,
      code: `def rectangles(f, a, b, n):
    h = (b - a) / n
    s = 0
    for k in range(n):
        s = s + f(a + k * h) * h
    return s`,
    },
    pieges: [
      t`range(n) va de 0 à $n - 1$ : ce sont bien les bornes de gauche.`,
    ],
    voir: ['py-somme', 'int-graphique'],
  },

  'int-graphique': {
    quand: t`On donne la courbe sur un quadrillage et on demande une valeur approchée ou un encadrement de l'intégrale.`,
    etapes: [
      t`Calculer l'aire d'un carreau en u.a. (largeur × hauteur selon les graduations).`,
      t`Compter les carreaux **entièrement** sous la courbe : ça donne un minorant.`,
      t`Compter les carreaux **touchés** par le domaine : ça donne un majorant.`,
      t`Si la courbe passe sous l'axe, ces parties comptent négativement dans l'intégrale.`,
    ],
    exemple: {
      enonce: t`Sur un quadrillage où un carreau mesure 0,5 unité en largeur et 1 unité en hauteur, on compte 9 carreaux entiers sous la courbe de $f$ (positive) entre 0 et 4, et 4 carreaux traversés par la courbe. Encadrer $\displaystyle\int_0^4 f(x)\,dx$.`,
      solution: t`Un carreau vaut $0{,}5 \times 1 = 0{,}5$ u.a.

Minorant : $9 \times 0{,}5 = 4{,}5$. Majorant : $(9 + 4) \times 0{,}5 = 6{,}5$.

Donc $4{,}5 \leq \displaystyle\int_0^4 f(x)\,dx \leq 6{,}5$.`,
    },
    pieges: [
      t`Bien lire les graduations : un carreau ne vaut pas forcément 1 u.a.`,
    ],
    voir: ['int-aire', 'int-rectangles'],
  },
}
