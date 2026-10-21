// Fiches méthode — Suites et récurrence.
// Format : { quand, etapes: [...], exemple: { enonce, solution, code? }, pieges: [...], voir: [ids] }
// Texte avec $...$ / $$...$$ / **gras** / listes "- " (voir components/Tex.jsx).
const t = String.raw

export const fichesSuites = {
  'suite-rec-formule': {
    quand: t`L'énoncé définit $(u_n)$ par récurrence (avec $u_{n+1}$ en fonction de $u_n$) et demande : « Montrer que pour tout $n \in \mathbb{N}$, $u_n = \dots$ ».`,
    etapes: [
      t`Écrire la propriété : $P(n)$ : « $u_n = $ (formule) ». Au brouillon, écrire aussi la formule **au rang $n+1$** : c'est le but de l'hérédité.`,
      t`**Initialisation** : calculer $u_0$ avec la définition, puis avec la formule, et constater que c'est la même valeur.`,
      t`**Hérédité** : « Soit $n \in \mathbb{N}$ fixé. Supposons $P(n)$ vraie, c'est-à-dire $u_n = \dots$ ». Partir de $u_{n+1}$, utiliser la relation de récurrence, puis **remplacer $u_n$ par la formule** (c'est là qu'on utilise l'hypothèse).`,
      t`Simplifier jusqu'à retrouver exactement la formule au rang $n+1$.`,
      t`**Conclusion** : « La propriété est vraie au rang 0 et héréditaire, donc par récurrence, pour tout $n \in \mathbb{N}$, $u_n = \dots$ ».`,
    ],
    exemple: {
      enonce: t`$u_0 = 1$ et $u_{n+1} = 2u_n + 3$. Montrer que pour tout $n \in \mathbb{N}$, $u_n = 2^{n+2} - 3$.`,
      solution: t`Pour tout $n \in \mathbb{N}$, on note $P(n)$ : « $u_n = 2^{n+2} - 3$ ».

**Initialisation** : $u_0 = 1$ et $2^{0+2} - 3 = 4 - 3 = 1$. Donc $P(0)$ est vraie.

**Hérédité** : soit $n \in \mathbb{N}$ fixé. Supposons $u_n = 2^{n+2} - 3$. Alors
$$\begin{aligned} u_{n+1} &= 2u_n + 3 = 2\left(2^{n+2} - 3\right) + 3 \\ &= 2^{n+3} - 6 + 3 \\ &= 2^{(n+1)+2} - 3 \end{aligned}$$
donc $P(n+1)$ est vraie.

**Conclusion** : par récurrence, pour tout $n \in \mathbb{N}$, $u_n = 2^{n+2} - 3$.`,
    },
    pieges: [
      t`Ne pas écrire « supposons que pour tout $n$, $u_n = \dots$ » : c'est justement ce qu'on veut démontrer. On fixe **un** entier $n$.`,
      t`Ne pas oublier la phrase de conclusion : elle rapporte des points au bac.`,
      t`Si la suite commence à $u_1$, l'initialisation se fait au rang 1.`,
    ],
    voir: ['suite-rec-inegalite', 'suite-terme-general'],
  },

  'suite-rec-inegalite': {
    quand: t`« Montrer que pour tout $n$, $0 \leq u_n \leq 2$ » (ou $u_n \geq 1$, $u_n < 3$…), avec une suite définie par $u_{n+1} = f(u_n)$.`,
    etapes: [
      t`Écrire $P(n)$ : « $a \leq u_n \leq b$ ».`,
      t`**Initialisation** : vérifier que $u_0$ est bien dans l'intervalle.`,
      t`**Hérédité**, méthode 1 (opérations) : partir de $a \leq u_n \leq b$ et appliquer **une par une** les opérations qui construisent $u_{n+1}$ (ajouter, multiplier par un positif, prendre la racine…), en justifiant chaque étape.`,
      t`**Hérédité**, méthode 2 (fonction croissante) : si $f$ est croissante sur $[a ; b]$, alors $a \leq u_n \leq b \Rightarrow f(a) \leq f(u_n) \leq f(b)$, c'est-à-dire $f(a) \leq u_{n+1} \leq f(b)$. Il reste à vérifier que $f(a) \geq a$ et $f(b) \leq b$.`,
      t`**Conclusion** par récurrence.`,
    ],
    exemple: {
      enonce: t`$u_0 = 0$ et $u_{n+1} = \sqrt{u_n + 2}$. Montrer que pour tout $n$, $0 \leq u_n \leq 2$.`,
      solution: t`On note $P(n)$ : « $0 \leq u_n \leq 2$ ».

**Initialisation** : $u_0 = 0$ et $0 \leq 0 \leq 2$, donc $P(0)$ est vraie.

**Hérédité** : soit $n \in \mathbb{N}$ fixé tel que $0 \leq u_n \leq 2$. Alors $2 \leq u_n + 2 \leq 4$. La fonction racine carrée est croissante sur $[0 ; +\infty[$, donc $\sqrt{2} \leq \sqrt{u_n + 2} \leq \sqrt 4$, soit $\sqrt 2 \leq u_{n+1} \leq 2$. Comme $\sqrt 2 \geq 0$, on a bien $0 \leq u_{n+1} \leq 2$.

**Conclusion** : par récurrence, pour tout $n \in \mathbb{N}$, $0 \leq u_n \leq 2$.`,
    },
    pieges: [
      t`Multiplier ou diviser par un nombre **négatif** change le sens des inégalités.`,
      t`On ne peut pas soustraire ou diviser deux inégalités membre à membre.`,
      t`Si on utilise « $f$ croissante », il faut le justifier (dérivée ou fonction de référence) **sur le bon intervalle**.`,
    ],
    voir: ['suite-rec-monotonie', 'suite-conv-monotone'],
  },

  'suite-rec-divisibilite': {
    quand: t`« Montrer que pour tout $n$, $4^n - 1$ est divisible par 3 » (ou multiple de 7, etc.).`,
    etapes: [
      t`Traduire la divisibilité par une égalité : $P(n)$ : « il existe un entier $k$ tel que $4^n - 1 = 3k$ ».`,
      t`**Initialisation** : calculer l'expression au premier rang et l'écrire $3 \times$ (un entier).`,
      t`**Hérédité** : partir de l'expression au rang $n+1$ et faire apparaître celle du rang $n$. Avec une puissance : $4^{n+1} = 4 \times 4^n$, puis remplacer $4^n$ grâce à l'hypothèse ($4^n = 3k + 1$).`,
      t`Factoriser par 3 et vérifier que ce qui reste est un **entier**.`,
      t`**Conclusion** par récurrence.`,
    ],
    exemple: {
      enonce: t`Montrer que pour tout $n \in \mathbb{N}$, $4^n - 1$ est divisible par 3.`,
      solution: t`On note $P(n)$ : « $4^n - 1$ est divisible par 3 ».

**Initialisation** : $4^0 - 1 = 0 = 3 \times 0$, donc $P(0)$ est vraie.

**Hérédité** : soit $n \in \mathbb{N}$ fixé. Supposons qu'il existe un entier $k$ tel que $4^n - 1 = 3k$, donc $4^n = 3k + 1$. Alors
$$\begin{aligned} 4^{n+1} - 1 &= 4 \times 4^n - 1 = 4(3k + 1) - 1 \\ &= 12k + 3 = 3(4k + 1) \end{aligned}$$
Or $4k + 1$ est un entier, donc $4^{n+1} - 1$ est divisible par 3.

**Conclusion** : par récurrence, pour tout $n$, $4^n - 1$ est divisible par 3.`,
    },
    pieges: [
      t`Toujours écrire « divisible par 3 » sous la forme $= 3k$ avec $k$ **entier**, sinon on ne peut pas calculer.`,
      t`En maths expertes, les congruences vont plus vite : $4 \equiv 1 \pmod 3$ donc $4^n \equiv 1 \pmod 3$.`,
    ],
    voir: ['suite-rec-formule', 'ar-congruence'],
  },

  'suite-rec-monotonie': {
    quand: t`La suite est définie par $u_{n+1} = f(u_n)$ avec $f$ **croissante**, et on demande le sens de variation (souvent : « montrer que $u_n \leq u_{n+1}$ »).`,
    etapes: [
      t`Écrire $P(n)$ : « $u_n \leq u_{n+1}$ » (pour une suite croissante) ou « $u_{n+1} \leq u_n$ » (décroissante). On peut regrouper avec l'encadrement : « $0 \leq u_n \leq u_{n+1} \leq 2$ ».`,
      t`**Initialisation** : calculer $u_0$ **et** $u_1$, puis les comparer.`,
      t`**Hérédité** : partir de $u_n \leq u_{n+1}$. Comme $f$ est croissante (sur un intervalle qui contient les termes), $f(u_n) \leq f(u_{n+1})$, c'est-à-dire $u_{n+1} \leq u_{n+2}$.`,
      t`**Conclusion** : la suite est croissante.`,
    ],
    exemple: {
      enonce: t`$u_0 = 0$ et $u_{n+1} = f(u_n)$ avec $f(x) = \sqrt{x + 2}$. Montrer que $(u_n)$ est croissante.`,
      solution: t`$f$ est croissante sur $[-2 ; +\infty[$ (composée de $x \mapsto x + 2$ et de la racine carrée, toutes deux croissantes).

On note $P(n)$ : « $u_n \leq u_{n+1}$ ».

**Initialisation** : $u_0 = 0$ et $u_1 = \sqrt 2 \approx 1{,}41$, donc $u_0 \leq u_1$.

**Hérédité** : soit $n$ fixé tel que $u_n \leq u_{n+1}$. Ces termes sont positifs, donc dans $[-2 ; +\infty[$ où $f$ est croissante : $f(u_n) \leq f(u_{n+1})$, soit $u_{n+1} \leq u_{n+2}$.

**Conclusion** : pour tout $n$, $u_n \leq u_{n+1}$ : la suite est croissante.`,
    },
    pieges: [
      t`Si $f$ est **décroissante**, cette méthode ne marche pas (la suite « oscille » en général).`,
      t`$f$ croissante ne dit pas si la suite est croissante ou décroissante : c'est la comparaison de $u_0$ et $u_1$ qui décide.`,
      t`Ne pas confondre avec $u_n = f(n)$ (formule explicite) : voir la méthode avec la fonction $f$.`,
    ],
    voir: ['suite-rec-inegalite', 'suite-sens-diff', 'suite-conv-monotone'],
  },

  'suite-sens-diff': {
    quand: t`« Étudier le sens de variation de $(u_n)$ ». C'est la méthode à essayer en premier, surtout pour une somme ou quand $u_{n+1}$ s'écrit $u_n + \dots$`,
    etapes: [
      t`Calculer $u_{n+1} - u_n$ et simplifier au maximum (réduire, factoriser).`,
      t`Étudier le **signe** de cette différence (pour tout $n$, ou à partir d'un certain rang).`,
      t`Conclure : si $u_{n+1} - u_n \geq 0$, la suite est croissante ; si $u_{n+1} - u_n \leq 0$, elle est décroissante.`,
    ],
    exemple: {
      enonce: t`Étudier le sens de variation de $u_n = n^2 - 5n$.`,
      solution: t`Pour tout $n \in \mathbb{N}$ :
$$\begin{aligned} u_{n+1} - u_n &= (n+1)^2 - 5(n+1) - n^2 + 5n \\ &= (n+1)^2 - n^2 - 5 \\ &= 2n + 1 - 5 = 2n - 4 \end{aligned}$$
Or $2n - 4 \geq 0 \iff n \geq 2$. Donc $(u_n)$ est croissante à partir du rang 2.

**Autre cas fréquent** : si $u_{n+1} = u_n + u_n^2$, alors $u_{n+1} - u_n = u_n^2 \geq 0$ : la suite est croissante.`,
    },
    pieges: [
      t`Attention aux parenthèses : $-u_n$ change le signe de **tous** les termes.`,
      t`Étudier le signe de $u_{n+1} - u_n$, pas celui de $u_n$.`,
      t`Une suite peut n'être croissante qu'à partir d'un certain rang : le préciser.`,
    ],
    voir: ['suite-sens-quotient', 'suite-sens-fonction', 'suite-rec-monotonie'],
  },

  'suite-sens-quotient': {
    quand: t`La suite est **strictement positive** et contient des produits, des puissances ou des factorielles ($2^n$, $n!$, $0{,}9^n \times n$…).`,
    etapes: [
      t`Justifier que $u_n > 0$ pour tout $n$.`,
      t`Calculer $\dfrac{u_{n+1}}{u_n}$ et simplifier (les puissances se simplifient très bien).`,
      t`Comparer le quotient à **1** : s'il est $\geq 1$, la suite est croissante ; s'il est $\leq 1$, elle est décroissante.`,
    ],
    exemple: {
      enonce: t`Étudier le sens de variation de $u_n = \dfrac{2^n}{n!}$ pour $n \geq 1$.`,
      solution: t`Pour tout $n \geq 1$, $u_n > 0$. Et
$$\frac{u_{n+1}}{u_n} = \frac{2^{n+1}}{(n+1)!} \times \frac{n!}{2^n} = \frac{2}{n+1}$$
Pour $n \geq 1$, $n + 1 \geq 2$ donc $\dfrac{2}{n+1} \leq 1$, c'est-à-dire $u_{n+1} \leq u_n$.

La suite $(u_n)$ est décroissante à partir du rang 1.`,
    },
    pieges: [
      t`Ne marche que si $u_n > 0$. Si la suite est négative, les conclusions s'inversent.`,
      t`On compare à 1, pas à 0.`,
    ],
    voir: ['suite-sens-diff'],
  },

  'suite-sens-fonction': {
    quand: t`La suite est donnée par une **formule explicite** $u_n = f(n)$ et $f$ est facile à dériver (exp, ln, quotient…).`,
    etapes: [
      t`Définir la fonction $f$ sur $[0 ; +\infty[$ (ou $[1 ; +\infty[$) telle que $u_n = f(n)$.`,
      t`Étudier les variations de $f$ (dérivée, signe).`,
      t`Si $f$ est croissante (resp. décroissante) sur $[p ; +\infty[$, alors $(u_n)$ est croissante (resp. décroissante) à partir du rang $p$.`,
    ],
    exemple: {
      enonce: t`Étudier le sens de variation de $u_n = n\,e^{-n}$.`,
      solution: t`On a $u_n = f(n)$ avec $f(x) = x e^{-x}$ sur $[0 ; +\infty[$.

$f'(x) = e^{-x} - xe^{-x} = (1 - x)e^{-x}$. Comme $e^{-x} > 0$, $f'(x)$ a le signe de $1 - x$ : $f'(x) \leq 0$ sur $[1 ; +\infty[$.

$f$ est décroissante sur $[1 ; +\infty[$, donc $(u_n)$ est décroissante à partir du rang 1.`,
    },
    pieges: [
      t`**Ne s'applique pas** aux suites $u_{n+1} = f(u_n)$ ! Pour elles, voir la récurrence.`,
      t`La réciproque est fausse : une suite peut être croissante sans que $f$ le soit partout.`,
    ],
    voir: ['der-signe', 'suite-rec-monotonie'],
  },

  'suite-reconnaitre': {
    quand: t`« Montrer que $(v_n)$ est arithmétique » ou « … est géométrique ».`,
    etapes: [
      t`**Arithmétique** : calculer $v_{n+1} - v_n$ et montrer que c'est une **constante** $r$ (qui ne dépend pas de $n$).`,
      t`**Géométrique** : exprimer $v_{n+1}$ et le mettre sous la forme $v_{n+1} = q \times v_n$ avec $q$ constant (on factorise).`,
      t`Conclure en donnant la raison et le premier terme.`,
    ],
    exemple: {
      enonce: t`1) $u_n = 5 - 2n$ est-elle arithmétique ? 2) Montrer que $w_n = \dfrac{3^n}{2^{2n+1}}$ est géométrique.`,
      solution: t`1) $u_{n+1} - u_n = 5 - 2(n+1) - (5 - 2n) = -2$. C'est une constante : $(u_n)$ est arithmétique de raison $-2$ et de premier terme $u_0 = 5$.

2) $w_{n+1} = \dfrac{3^{n+1}}{2^{2n+3}} = \dfrac{3 \times 3^n}{4 \times 2^{2n+1}} = \dfrac34\,w_n$.

$(w_n)$ est géométrique de raison $\dfrac34$ et de premier terme $w_0 = \dfrac12$.`,
    },
    pieges: [
      t`Pour montrer qu'une suite **n'est pas** arithmétique (ou géométrique), un contre-exemple suffit : calculer $u_0$, $u_1$, $u_2$ et montrer que $u_1 - u_0 \neq u_2 - u_1$.`,
      t`Éviter le quotient $\dfrac{v_{n+1}}{v_n}$ si on ne sait pas que $v_n \neq 0$ : préférer $v_{n+1} = q\,v_n$.`,
    ],
    voir: ['suite-auxiliaire', 'suite-terme-general'],
  },

  'suite-terme-general': {
    quand: t`On sait que la suite est arithmétique ou géométrique et on veut $u_n$ en fonction de $n$.`,
    etapes: [
      t`**Arithmétique** de raison $r$ : $u_n = u_0 + nr$, ou plus généralement $u_n = u_p + (n - p)r$.`,
      t`**Géométrique** de raison $q$ : $u_n = u_0 \times q^n$, ou plus généralement $u_n = u_p \times q^{n-p}$.`,
      t`Bien repérer le premier terme : $u_0$ ou $u_1$ ?`,
    ],
    exemple: {
      enonce: t`$(u_n)$ est géométrique de raison 2 avec $u_1 = 5$. Exprimer $u_n$ en fonction de $n$, puis calculer $u_6$.`,
      solution: t`Pour tout $n \geq 1$, $u_n = u_1 \times 2^{n-1} = 5 \times 2^{n-1}$.

Donc $u_6 = 5 \times 2^5 = 160$.`,
    },
    pieges: [
      t`Si le premier terme est $u_1$, l'exposant est $n - 1$, pas $n$.`,
      t`$5 \times 2^{n-1} \neq 10^{n-1}$ : la puissance ne s'applique qu'à 2.`,
    ],
    voir: ['suite-reconnaitre', 'suite-auxiliaire'],
  },

  'suite-somme-arith': {
    quand: t`Calculer $u_0 + u_1 + \dots + u_n$ pour une suite arithmétique, ou $1 + 2 + \dots + n$.`,
    etapes: [
      t`Retenir, avec $N$ le nombre de termes, $a$ le premier terme et $b$ le dernier : $$S = N \times \frac{a + b}{2}$$`,
      t`Compter les termes : **dernier indice − premier indice + 1**.`,
      t`Cas particulier : $1 + 2 + \dots + n = \dfrac{n(n+1)}{2}$.`,
    ],
    exemple: {
      enonce: t`$u_n = 3 + 2n$. Calculer $S = u_0 + u_1 + \dots + u_{20}$.`,
      solution: t`$(u_n)$ est arithmétique de raison 2. Il y a $20 - 0 + 1 = 21$ termes, $u_0 = 3$ et $u_{20} = 43$.
$$S = 21 \times \frac{3 + 43}{2} = 21 \times 23 = 483$$`,
    },
    pieges: [
      t`De $u_0$ à $u_{20}$, il y a 21 termes, pas 20.`,
    ],
    voir: ['suite-somme-geo'],
  },

  'suite-somme-geo': {
    quand: t`Calculer une somme de termes d'une suite géométrique : $1 + q + \dots + q^n$, $u_0 + \dots + u_n$, ou sa limite.`,
    etapes: [
      t`Retenir (pour $q \neq 1$), avec $a$ le premier terme et $N$ le nombre de termes : $$S = a \times \frac{1 - q^N}{1 - q}$$`,
      t`Cas particulier : $1 + q + \dots + q^n = \dfrac{1 - q^{n+1}}{1 - q}$.`,
      t`Pour la limite : si $-1 < q < 1$, $q^{n+1} \to 0$ et la somme tend vers $\dfrac{\text{premier terme}}{1 - q}$.`,
    ],
    exemple: {
      enonce: t`Calculer $S = 3 + 6 + 12 + \dots + 3 \times 2^9$.`,
      solution: t`C'est la somme des termes $3 \times 2^k$ pour $k$ allant de 0 à 9 : suite géométrique de raison 2, premier terme 3, et 10 termes.
$$\begin{aligned} S &= 3 \times \frac{1 - 2^{10}}{1 - 2} = 3 \times (2^{10} - 1) \\ &= 3 \times 1023 = 3069 \end{aligned}$$`,
    },
    pieges: [
      t`L'exposant dans la formule est le **nombre de termes**, pas le dernier exposant.`,
      t`La formule ne marche pas pour $q = 1$ (la somme vaut alors nombre de termes × premier terme).`,
    ],
    voir: ['suite-somme-arith', 'suite-lim-qn'],
  },

  'suite-auxiliaire': {
    quand: t`$u_{n+1} = a\,u_n + b$ (suite **arithmético-géométrique**) et l'énoncé introduit $v_n = u_n - \ell$ (ou demande d'en trouver une).`,
    etapes: [
      t`Si $\ell$ n'est pas donné : c'est la solution de $\ell = a\ell + b$, soit $\ell = \dfrac{b}{1 - a}$.`,
      t`Montrer que $(v_n)$ est géométrique : écrire $v_{n+1} = u_{n+1} - \ell$, remplacer $u_{n+1}$ par $a u_n + b$, puis **factoriser par $a$** pour faire apparaître $u_n - \ell = v_n$.`,
      t`En déduire $v_n = v_0 \times a^n$.`,
      t`Revenir à $u_n$ : $u_n = v_n + \ell$.`,
      t`La limite s'en déduit avec celle de $a^n$.`,
    ],
    exemple: {
      enonce: t`$u_0 = 1$ et $u_{n+1} = 0{,}8\,u_n + 4$. On pose $v_n = u_n - 20$. Montrer que $(v_n)$ est géométrique, puis exprimer $u_n$ en fonction de $n$ et donner sa limite.`,
      solution: t`Pour tout $n$ :
$$\begin{aligned} v_{n+1} &= u_{n+1} - 20 = 0{,}8\,u_n + 4 - 20 \\ &= 0{,}8\,u_n - 16 = 0{,}8\,(u_n - 20) \\ &= 0{,}8\,v_n \end{aligned}$$
$(v_n)$ est géométrique de raison $0{,}8$ et de premier terme $v_0 = u_0 - 20 = -19$.

Donc $v_n = -19 \times 0{,}8^n$ et $u_n = v_n + 20 = 20 - 19 \times 0{,}8^n$.

Comme $-1 < 0{,}8 < 1$, $0{,}8^n \to 0$, donc $\lim u_n = 20$.`,
    },
    pieges: [
      t`À la fin, $v_{n+1}$ doit être exprimé avec $v_n$, pas avec $u_n$.`,
      t`Pour factoriser : $-16 = 0{,}8 \times (-20)$. Vérifier en redéveloppant.`,
    ],
    voir: ['suite-reconnaitre', 'suite-lim-qn', 'suite-seuil'],
  },

  'suite-lim-operations': {
    quand: t`$u_n$ est une somme, un produit ou un quotient de suites dont on connaît les limites ($n$, $n^2$, $\sqrt n$, $\frac1n$, $q^n$…).`,
    etapes: [
      t`Trouver la limite de chaque morceau.`,
      t`Appliquer les règles : $+\infty + \infty = +\infty$, $\ell \times (+\infty) = \pm\infty$ selon le signe de $\ell \neq 0$, $\dfrac{\ell}{\pm\infty} = 0$, $\dfrac{\ell}{0^+} = \pm\infty$…`,
      t`Si on tombe sur $\infty - \infty$, $0 \times \infty$, $\dfrac{\infty}{\infty}$ ou $\dfrac00$ : c'est une **forme indéterminée**, il faut transformer l'expression.`,
    ],
    exemple: {
      enonce: t`Limites de $a_n = 3 + \dfrac1n$, $b_n = n^2 + \sqrt n$, $c_n = \left(2 - \dfrac1n\right)(n+1)$ et $d_n = \dfrac{-5}{n^2 + 1}$.`,
      solution: t`- $\frac1n \to 0$ donc $a_n \to 3$.
- $n^2 \to +\infty$ et $\sqrt n \to +\infty$ donc $b_n \to +\infty$.
- $2 - \frac1n \to 2$ et $n + 1 \to +\infty$, donc par produit $c_n \to +\infty$.
- $n^2 + 1 \to +\infty$ donc $d_n \to 0$.`,
    },
    pieges: [
      t`$\infty - \infty$ n'est pas égal à 0 : c'est indéterminé.`,
    ],
    voir: ['suite-lim-fi', 'suite-lim-qn'],
  },

  'suite-lim-fi': {
    quand: t`Le calcul direct donne une forme indéterminée : $n^2 - 3n$ ($\infty - \infty$), $\dfrac{2n^2+1}{n^2+n}$ ($\frac\infty\infty$), $\sqrt{n+1} - \sqrt n$…`,
    etapes: [
      t`**Polynôme** : factoriser par le terme de plus haut degré.`,
      t`**Quotient** : factoriser le numérateur et le dénominateur par leur terme dominant, puis simplifier.`,
      t`**Puissances** ($3^n - 2^n$) : factoriser par la plus grande, $3^n$.`,
      t`**Différence de racines** : multiplier par la **quantité conjuguée**.`,
    ],
    exemple: {
      enonce: t`Calculer les limites de $a_n = n^2 - 3n$, $b_n = \dfrac{2n^2 + 1}{n^2 + n}$, $c_n = 3^n - 2^n$ et $d_n = \sqrt{n+1} - \sqrt n$.`,
      solution: t`- $a_n = n^2\left(1 - \frac3n\right)$ et $1 - \frac3n \to 1$, donc $a_n \to +\infty$.
- $b_n = \dfrac{n^2\left(2 + \frac{1}{n^2}\right)}{n^2\left(1 + \frac1n\right)} = \dfrac{2 + \frac{1}{n^2}}{1 + \frac1n} \to 2$.
- $c_n = 3^n\left(1 - \left(\frac23\right)^n\right)$. Comme $\left(\frac23\right)^n \to 0$, $c_n \to +\infty$.
- $d_n = \dfrac{(\sqrt{n+1} - \sqrt n)(\sqrt{n+1} + \sqrt n)}{\sqrt{n+1} + \sqrt n} = \dfrac{1}{\sqrt{n+1} + \sqrt n} \to 0$.`,
    },
    pieges: [
      t`Factoriser par le terme **dominant**, pas par n'importe quel terme.`,
      t`Ne pas « simplifier » $\frac{\infty}{\infty}$ en 1.`,
    ],
    voir: ['suite-lim-operations', 'lim-fi-rationnelle'],
  },

  'suite-lim-qn': {
    quand: t`La suite contient $q^n$ : suite géométrique, $0{,}9^n$, $2^n - 3^n$…`,
    etapes: [
      t`Retenir :
- $q > 1$ : $q^n \to +\infty$
- $q = 1$ : $q^n = 1$
- $-1 < q < 1$ : $q^n \to 0$
- $q \leq -1$ : pas de limite`,
      t`Isoler $q^n$ dans l'expression, puis appliquer les opérations sur les limites.`,
      t`Avec deux puissances différentes, factoriser par la plus grande.`,
    ],
    exemple: {
      enonce: t`Limites de $a_n = 5 \times 0{,}9^n - 2$ et $b_n = 2^n - 3^n$.`,
      solution: t`- $-1 < 0{,}9 < 1$ donc $0{,}9^n \to 0$ et $a_n \to -2$.
- $b_n = 3^n\left(\left(\frac23\right)^n - 1\right)$. Comme $\left(\frac23\right)^n \to 0$, la parenthèse tend vers $-1$ et $3^n \to +\infty$, donc $b_n \to -\infty$.`,
    },
    pieges: [
      t`$(-1)^n$ vaut alternativement 1 et $-1$ : pas de limite.`,
      t`$2^{-n} = \left(\frac12\right)^n \to 0$.`,
    ],
    voir: ['suite-somme-geo', 'suite-auxiliaire'],
  },

  'suite-comparaison': {
    quand: t`Montrer que $u_n \to +\infty$ quand on ne peut pas calculer directement (présence de $\sin n$, $(-1)^n$, ou suite définie par récurrence).`,
    etapes: [
      t`Trouver une suite **plus petite** $v_n \leq u_n$ (au moins à partir d'un rang) avec $v_n \to +\infty$.`,
      t`Justifier l'inégalité (avec $-1 \leq \sin n \leq 1$, ou par récurrence : « $u_n \geq n$ »).`,
      t`Conclure par le théorème de comparaison. Pour $-\infty$ : trouver $w_n \geq u_n$ avec $w_n \to -\infty$.`,
    ],
    exemple: {
      enonce: t`Déterminer la limite de $u_n = n + \sin n$.`,
      solution: t`Pour tout $n$, $\sin n \geq -1$, donc $u_n \geq n - 1$.

Or $\lim (n - 1) = +\infty$. Par comparaison, $\lim u_n = +\infty$.`,
    },
    pieges: [
      t`Pour $+\infty$, il faut **minorer** ($u_n \geq \dots$), pas majorer.`,
    ],
    voir: ['suite-gendarmes', 'suite-rec-inegalite'],
  },

  'suite-gendarmes': {
    quand: t`La suite contient un terme qui « oscille » mais reste borné ($\sin n$, $\cos n$, $(-1)^n$), et on pense qu'elle a une limite **finie**.`,
    etapes: [
      t`Encadrer le terme borné : $-1 \leq \cos n \leq 1$, $-1 \leq (-1)^n \leq 1$.`,
      t`Construire, par opérations sur l'encadrement, $v_n \leq u_n \leq w_n$.`,
      t`Vérifier que $v_n$ et $w_n$ ont **la même limite** $\ell$, et conclure : $u_n \to \ell$.`,
    ],
    exemple: {
      enonce: t`Déterminer la limite de $u_n = \dfrac{n + \cos n}{n}$ pour $n \geq 1$.`,
      solution: t`Pour tout $n \geq 1$, $-1 \leq \cos n \leq 1$, donc $n - 1 \leq n + \cos n \leq n + 1$. En divisant par $n > 0$ :
$$1 - \frac1n \leq u_n \leq 1 + \frac1n$$
Les deux suites qui encadrent tendent vers 1. D'après le théorème des gendarmes, $\lim u_n = 1$.`,
    },
    pieges: [
      t`Les deux suites de l'encadrement doivent avoir **la même** limite, sinon on ne peut rien conclure.`,
      t`Si on divise par un nombre négatif, les inégalités changent de sens.`,
    ],
    voir: ['suite-comparaison'],
  },

  'suite-conv-monotone': {
    quand: t`« Montrer que $(u_n)$ converge » sans pouvoir calculer la limite directement, typiquement pour $u_{n+1} = f(u_n)$.`,
    etapes: [
      t`Montrer que la suite est **monotone** (récurrence, différence…).`,
      t`Montrer qu'elle est **bornée du bon côté** : majorée si croissante, minorée si décroissante (souvent par récurrence).`,
      t`Conclure : « $(u_n)$ est croissante et majorée par $M$, donc d'après le théorème de convergence monotone, elle converge vers une limite $\ell \leq M$ ».`,
      t`Pour trouver $\ell$, utiliser le point fixe.`,
    ],
    exemple: {
      enonce: t`$u_0 = 0$ et $u_{n+1} = \sqrt{u_n + 2}$. On a montré que $(u_n)$ est croissante et que $0 \leq u_n \leq 2$. Que peut-on en déduire ?`,
      solution: t`$(u_n)$ est croissante et majorée par 2. D'après le théorème de convergence monotone, $(u_n)$ converge vers un réel $\ell$ tel que $\ell \leq 2$.`,
    },
    pieges: [
      t`La limite n'est **pas forcément** égale au majorant : $1 - \frac1n$ est majorée par 5 mais tend vers 1.`,
      t`Une suite croissante **non** majorée tend vers $+\infty$.`,
    ],
    voir: ['suite-rec-monotonie', 'suite-rec-inegalite', 'suite-point-fixe'],
  },

  'suite-point-fixe': {
    quand: t`On sait que $u_{n+1} = f(u_n)$ **converge** et on demande la valeur de sa limite.`,
    etapes: [
      t`Justifier : $(u_n)$ converge vers $\ell$ et $f$ est **continue** (en $\ell$), donc $\ell = f(\ell)$.`,
      t`Résoudre l'équation $f(\ell) = \ell$.`,
      t`S'il y a plusieurs solutions, éliminer celles qui sont incompatibles avec ce qu'on sait (encadrement, monotonie, signe).`,
    ],
    exemple: {
      enonce: t`$u_{n+1} = \sqrt{u_n + 2}$, $(u_n)$ croissante, $0 \leq u_n \leq 2$, convergente vers $\ell$. Déterminer $\ell$.`,
      solution: t`$f : x \mapsto \sqrt{x + 2}$ est continue sur $[-2 ; +\infty[$, donc $\ell = \sqrt{\ell + 2}$.

En élevant au carré : $\ell^2 = \ell + 2$, soit $\ell^2 - \ell - 2 = 0$, donc $(\ell - 2)(\ell + 1) = 0$ : $\ell = 2$ ou $\ell = -1$.

Comme $u_n \geq 0$ pour tout $n$, on a $\ell \geq 0$. Donc $\ell = 2$.`,
    },
    pieges: [
      t`Il faut **d'abord** prouver que la suite converge : sinon l'équation ne prouve rien.`,
      t`Ne pas oublier de dire que $f$ est continue.`,
      t`Élever au carré peut ajouter des solutions : vérifier ou éliminer.`,
    ],
    voir: ['suite-conv-monotone', 'cont-limite-suite'],
  },

  'suite-diverge': {
    quand: t`« Montrer que $(u_n)$ n'est pas majorée » ou « tend vers $+\infty$ » pour une suite croissante définie par récurrence.`,
    etapes: [
      t`Montrer que la suite est croissante.`,
      t`**Par l'absurde** : supposer qu'elle est majorée. Elle serait alors convergente (convergence monotone) vers un $\ell$ tel que $f(\ell) = \ell$.`,
      t`Montrer que l'équation $f(\ell) = \ell$ n'a **pas** de solution (ou aucune compatible) : contradiction.`,
      t`Conclure : la suite n'est pas majorée ; croissante et non majorée, elle tend vers $+\infty$.`,
    ],
    exemple: {
      enonce: t`$u_0 = 0$ et $u_{n+1} = u_n + e^{-u_n}$. Montrer que $\lim u_n = +\infty$.`,
      solution: t`$u_{n+1} - u_n = e^{-u_n} > 0$, donc $(u_n)$ est croissante.

Supposons $(u_n)$ majorée. Croissante et majorée, elle converge vers un réel $\ell$. La fonction $f : x \mapsto x + e^{-x}$ est continue, donc $\ell = \ell + e^{-\ell}$, soit $e^{-\ell} = 0$ : impossible car une exponentielle est strictement positive.

Donc $(u_n)$ n'est pas majorée. Comme elle est croissante, $\lim u_n = +\infty$.`,
    },
    pieges: [
      t`« Non majorée » ne suffit pas pour $+\infty$ : il faut aussi qu'elle soit croissante.`,
    ],
    voir: ['rai-absurde', 'suite-conv-monotone'],
  },

  'suite-seuil': {
    quand: t`« Déterminer le plus petit $n$ tel que $u_n > 19{,}9$ » ou « à partir de quel rang… ». Souvent avec un algorithme Python à compléter.`,
    etapes: [
      t`**Avec la formule explicite** : résoudre l'inéquation. Si l'inconnue est en exposant ($0{,}8^n$), passer au logarithme.`,
      t`**À la calculatrice** : menu suites / tableau de valeurs, et repérer le premier rang qui convient.`,
      t`**En Python** : une boucle « tant que la condition n'est pas atteinte, on calcule le terme suivant et on augmente $n$ ».`,
    ],
    exemple: {
      enonce: t`$u_n = 20 - 19 \times 0{,}8^n$ (avec $u_0 = 1$ et $u_{n+1} = 0{,}8\,u_n + 4$). Déterminer le plus petit $n$ tel que $u_n > 19{,}9$.`,
      solution: t`$$\begin{aligned} u_n > 19{,}9 &\iff 19 \times 0{,}8^n < 0{,}1 \\ &\iff 0{,}8^n < \frac{0{,}1}{19} \end{aligned}$$
La fonction ln est strictement croissante, donc
$$\begin{aligned} &\iff n \ln 0{,}8 < \ln\frac{0{,}1}{19} \\ &\iff n > \frac{\ln(0{,}1/19)}{\ln 0{,}8} \approx 23{,}5 \end{aligned}$$
(on change le sens car $\ln 0{,}8 < 0$). Le plus petit entier est $n = 24$.

Le même calcul en Python :`,
      code: `def seuil():
    n = 0
    u = 1
    while u <= 19.9:
        u = 0.8 * u + 4
        n = n + 1
    return n`,
    },
    pieges: [
      t`Diviser par $\ln q$ quand $0 < q < 1$ : c'est un nombre **négatif**, le sens de l'inégalité change.`,
      t`Dans la boucle while, la condition est le **contraire** de ce qu'on cherche (on continue tant que $u \leq 19{,}9$).`,
    ],
    voir: ['ln-seuil', 'py-seuil'],
  },
}
