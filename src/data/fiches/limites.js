// Fiches méthode — Limites de fonctions. Même format que suites.js.
const t = String.raw

export const fichesLimites = {
  'lim-reference': {
    quand: t`Avant tout calcul de limite : c'est la boîte à outils de base sur laquelle tout repose.`,
    etapes: [
      t`**En $+\infty$** : $x^n$, $\sqrt x$, $e^x$ et $\ln x$ tendent vers $+\infty$ ; $\dfrac1x$, $\dfrac{1}{x^n}$, $\dfrac{1}{\sqrt x}$ et $e^{-x}$ tendent vers $0$.`,
      t`**En $-\infty$** : $e^x \to 0$ ; $x^n \to +\infty$ si $n$ est pair, $-\infty$ si $n$ est impair ; $\dfrac1x \to 0$.`,
      t`**En 0** : $\dfrac1x \to +\infty$ en $0^+$ et $-\infty$ en $0^-$ ; $\dfrac{1}{x^2} \to +\infty$ des deux côtés ; $\ln x \to -\infty$ en $0^+$.`,
    ],
    exemple: {
      enonce: t`Donner $\lim\limits_{x \to -\infty} x^3$, $\lim\limits_{x \to -\infty} e^x$, $\lim\limits_{x \to 0^-} \dfrac1x$ et $\lim\limits_{x \to 0^+} \ln x$.`,
      solution: t`- $\lim\limits_{x \to -\infty} x^3 = -\infty$ (puissance impaire).
- $\lim\limits_{x \to -\infty} e^x = 0$ (et $e^x$ reste strictement positif).
- $\lim\limits_{x \to 0^-} \dfrac1x = -\infty$.
- $\lim\limits_{x \to 0^+} \ln x = -\infty$.`,
    },
    pieges: [
      t`$\dfrac1x$ n'a **pas** de limite en 0 : il faut préciser $0^+$ ou $0^-$.`,
      t`$e^x$ tend vers 0 en $-\infty$, mais ne devient jamais négatif.`,
      t`$\ln x$ n'est défini que pour $x > 0$ : on ne parle de limite qu'en $0^+$.`,
    ],
    voir: ['lim-operations', 'lim-croissances'],
  },

  'lim-operations': {
    quand: t`La fonction est une somme, un produit ou un quotient de fonctions dont on connaît les limites.`,
    etapes: [
      t`Calculer la limite de chaque morceau séparément.`,
      t`Combiner avec les règles : $+\infty + \infty = +\infty$ ; $\ell \times \infty = \pm\infty$ (signe de $\ell \neq 0$) ; $\dfrac{\ell}{\pm\infty} = 0$ ; $\dfrac{\ell}{0^+} = \pm\infty$ (signe de $\ell \neq 0$).`,
      t`Si on tombe sur $\infty - \infty$, $0 \times \infty$, $\dfrac{\infty}{\infty}$ ou $\dfrac00$, c'est une **forme indéterminée** : il faut transformer l'expression.`,
    ],
    exemple: {
      enonce: t`Calculer en $+\infty$ les limites de $f(x) = x^2 + 3x - \dfrac1x$, $g(x) = \left(2 + \dfrac1x\right)e^x$, $h(x) = \dfrac{3}{x^2 + 1}$ et $k(x) = e^{-x} - x$.`,
      solution: t`- $x^2 \to +\infty$, $3x \to +\infty$, $\frac1x \to 0$ donc $f(x) \to +\infty$.
- $2 + \frac1x \to 2$ et $e^x \to +\infty$ donc, par produit, $g(x) \to +\infty$.
- $x^2 + 1 \to +\infty$ donc $h(x) \to 0$.
- $e^{-x} \to 0$ et $-x \to -\infty$ donc $k(x) \to -\infty$.`,
    },
    pieges: [
      t`$\infty - \infty$ ne vaut pas 0, et $\dfrac{\infty}{\infty}$ ne vaut pas 1 : ce sont des formes indéterminées.`,
      t`$\dfrac{3}{0}$ n'est pas un résultat : il faut connaître le **signe** du dénominateur (voir « dénominateur qui tend vers 0 »).`,
    ],
    voir: ['lim-reference', 'lim-fi-polynome', 'lim-denominateur-nul'],
  },

  'lim-fi-polynome': {
    quand: t`Limite d'un polynôme en $+\infty$ ou $-\infty$ qui donne $\infty - \infty$ (ex. $-2x^3 + 5x^2 - 1$).`,
    etapes: [
      t`Factoriser par le terme de **plus haut degré**.`,
      t`Les termes de la parenthèse en $\frac{1}{x}$, $\frac{1}{x^2}$… tendent vers 0 : la parenthèse tend vers le coefficient dominant.`,
      t`Conclure par produit. Raccourci à connaître : en $\pm\infty$, un polynôme a la même limite que son terme de plus haut degré.`,
    ],
    exemple: {
      enonce: t`Calculer les limites de $f(x) = -2x^3 + 5x^2 - 1$ en $+\infty$ et en $-\infty$.`,
      solution: t`Pour $x \neq 0$ : $f(x) = x^3\left(-2 + \dfrac5x - \dfrac{1}{x^3}\right)$.

La parenthèse tend vers $-2$ en $\pm\infty$.

- En $+\infty$ : $x^3 \to +\infty$ donc $f(x) \to -\infty$.
- En $-\infty$ : $x^3 \to -\infty$ donc $f(x) \to +\infty$.`,
    },
    pieges: [
      t`Le raccourci « terme de plus haut degré » ne marche **qu'en l'infini**, pas en un réel.`,
      t`En $-\infty$, attention au signe de $x^3$ (négatif) : le résultat change.`,
    ],
    voir: ['lim-fi-rationnelle', 'suite-lim-fi'],
  },

  'lim-fi-rationnelle': {
    quand: t`Quotient de deux polynômes en $\pm\infty$ : forme $\dfrac{\infty}{\infty}$.`,
    etapes: [
      t`Factoriser le numérateur **et** le dénominateur par leur terme de plus haut degré.`,
      t`Simplifier la fraction de puissances de $x$.`,
      t`Conclure. Raccourci : la limite est celle du quotient des termes de plus haut degré.`,
      t`À retenir : même degré → quotient des coefficients ; degré du haut plus petit → 0 ; degré du haut plus grand → $\pm\infty$.`,
    ],
    exemple: {
      enonce: t`Calculer $\lim\limits_{x \to +\infty} \dfrac{3x^2 - x + 1}{1 - 2x^2}$.`,
      solution: t`Pour $x \neq 0$ :
$$\begin{aligned} \frac{3x^2 - x + 1}{1 - 2x^2} &= \frac{x^2\left(3 - \frac1x + \frac{1}{x^2}\right)}{x^2\left(\frac{1}{x^2} - 2\right)} \\ &= \frac{3 - \frac1x + \frac{1}{x^2}}{\frac{1}{x^2} - 2} \end{aligned}$$
Le numérateur tend vers 3 et le dénominateur vers $-2$. La limite est $-\dfrac32$.`,
    },
    pieges: [
      t`Factoriser en haut et en bas, chacun par **son** terme dominant.`,
      t`Ce raccourci ne vaut qu'en $\pm\infty$. En un réel où le dénominateur s'annule, voir « dénominateur qui tend vers 0 ».`,
    ],
    voir: ['lim-fi-polynome', 'lim-asymptotes'],
  },

  'lim-fi-racine': {
    quand: t`Différence avec une racine qui donne $\infty - \infty$ : $\sqrt{x^2 + x} - x$, $\sqrt{x+1} - \sqrt x$…`,
    etapes: [
      t`Multiplier et diviser par la **quantité conjuguée** : pour $\sqrt A - B$, c'est $\sqrt A + B$.`,
      t`Au numérateur, utiliser $(\sqrt A - B)(\sqrt A + B) = A - B^2$ : la racine disparaît.`,
      t`Si nécessaire, factoriser sous la racine : pour $x > 0$, $\sqrt{x^2 + x} = x\sqrt{1 + \frac1x}$.`,
    ],
    exemple: {
      enonce: t`Calculer $\lim\limits_{x \to +\infty} \left(\sqrt{x^2 + x} - x\right)$.`,
      solution: t`Pour $x > 0$ :
$$\begin{aligned} \sqrt{x^2 + x} - x &= \frac{(x^2 + x) - x^2}{\sqrt{x^2 + x} + x} \\ &= \frac{x}{\sqrt{x^2 + x} + x} \end{aligned}$$
Or $\sqrt{x^2 + x} = x\sqrt{1 + \frac1x}$ (car $x > 0$), donc
$$\begin{aligned} \sqrt{x^2 + x} - x &= \frac{x}{x\left(\sqrt{1 + \frac1x} + 1\right)} \\ &= \frac{1}{\sqrt{1 + \frac1x} + 1} \end{aligned}$$
Comme $\sqrt{1 + \frac1x} \to 1$, la limite est $\dfrac12$.`,
    },
    pieges: [
      t`$\sqrt{a + b} \neq \sqrt a + \sqrt b$.`,
      t`$\sqrt{x^2} = |x|$ : en $-\infty$, c'est $-x$, pas $x$.`,
    ],
    voir: ['suite-lim-fi'],
  },

  'lim-fi-exp': {
    quand: t`Forme indéterminée avec des exponentielles en $+\infty$ : $e^x - x$, $\dfrac{2e^x + 3}{e^x + 1}$, $e^{2x} - e^x$…`,
    etapes: [
      t`Factoriser par le terme qui « l'emporte » : en général $e^x$ (ou $e^{2x}$).`,
      t`Faire apparaître des quotients connus : $\dfrac{x}{e^x} \to 0$, $\dfrac{1}{e^x} = e^{-x} \to 0$.`,
      t`En $-\infty$, il n'y a souvent **pas** de forme indéterminée car $e^x \to 0$ : calculer directement.`,
    ],
    exemple: {
      enonce: t`Soit $f(x) = \dfrac{2e^x + 3}{e^x + 1}$. Calculer ses limites en $+\infty$ et en $-\infty$.`,
      solution: t`**En $+\infty$** : forme $\frac\infty\infty$. On factorise par $e^x$ :
$$f(x) = \frac{e^x\left(2 + 3e^{-x}\right)}{e^x\left(1 + e^{-x}\right)} = \frac{2 + 3e^{-x}}{1 + e^{-x}}$$
Comme $e^{-x} \to 0$, $f(x) \to 2$.

**En $-\infty$** : $e^x \to 0$, donc directement $f(x) \to \dfrac{0 + 3}{0 + 1} = 3$.`,
    },
    pieges: [
      t`Ne pas factoriser par $e^x$ en $-\infty$ : ça complique pour rien.`,
      t`$e^{-x} = \dfrac{1}{e^x}$ : c'est lui qui tend vers 0 en $+\infty$.`,
    ],
    voir: ['lim-croissances', 'lim-asymptotes'],
  },

  'lim-denominateur-nul': {
    quand: t`Limite en un réel $a$ où le dénominateur s'annule : $\lim\limits_{x \to 2} \dfrac{x + 1}{x - 2}$.`,
    etapes: [
      t`Calculer la limite du numérateur. S'il tend vers $\ell \neq 0$, il n'y a pas d'indétermination.`,
      t`Étudier le **signe du dénominateur** à gauche et à droite de $a$ (tableau de signes) : il tend vers $0^+$ ou $0^-$.`,
      t`Conclure par quotient, séparément pour $x \to a^+$ et $x \to a^-$. La droite $x = a$ est alors asymptote verticale.`,
      t`Si le numérateur tend aussi vers 0 (forme $\frac00$), factoriser par $(x - a)$ et simplifier.`,
    ],
    exemple: {
      enonce: t`Calculer les limites de $f(x) = \dfrac{x + 1}{x - 2}$ en $2^+$ et en $2^-$.`,
      solution: t`Le numérateur tend vers $3 > 0$.

$x - 2 > 0$ pour $x > 2$ et $x - 2 < 0$ pour $x < 2$. Donc :
- quand $x \to 2^+$, $x - 2 \to 0^+$ et $f(x) \to +\infty$ ;
- quand $x \to 2^-$, $x - 2 \to 0^-$ et $f(x) \to -\infty$.

La droite d'équation $x = 2$ est asymptote verticale à la courbe.`,
    },
    pieges: [
      t`« $\frac30$ » n'est pas une réponse : sans le signe du dénominateur, on ne peut pas conclure.`,
      t`Si le numérateur tend aussi vers 0, ce n'est pas $\pm\infty$ : c'est une forme indéterminée.`,
    ],
    voir: ['lim-asymptotes', 'lim-operations'],
  },

  'lim-croissances': {
    quand: t`Une forme indéterminée mélange $e^x$ ou $\ln x$ avec des puissances de $x$ : $x^2 e^{-x}$, $x - \ln x$, $x \ln x$ en 0…`,
    etapes: [
      t`Retenir (pour $n \geq 1$) :
- $\lim\limits_{x \to +\infty} \dfrac{e^x}{x^n} = +\infty$ et $\lim\limits_{x \to -\infty} x^n e^x = 0$
- $\lim\limits_{x \to +\infty} \dfrac{\ln x}{x^n} = 0$ et $\lim\limits_{x \to 0^+} x^n \ln x = 0$`,
      t`Réécrire l'expression pour faire apparaître **exactement** une de ces formes (factoriser, écrire $e^{-x} = \frac{1}{e^x}$).`,
      t`Idée : l'exponentielle l'emporte sur les puissances, qui l'emportent sur le logarithme.`,
    ],
    exemple: {
      enonce: t`Calculer $\lim\limits_{x \to +\infty} x^2 e^{-x}$ et $\lim\limits_{x \to +\infty} (x - \ln x)$.`,
      solution: t`- $x^2 e^{-x} = \dfrac{x^2}{e^x} = \dfrac{1}{e^x / x^2}$. Par croissances comparées $\dfrac{e^x}{x^2} \to +\infty$, donc $x^2 e^{-x} \to 0$.
- Forme $\infty - \infty$. Pour $x > 0$ : $x - \ln x = x\left(1 - \dfrac{\ln x}{x}\right)$. Par croissances comparées, $\dfrac{\ln x}{x} \to 0$, donc la parenthèse tend vers 1 et $x - \ln x \to +\infty$.`,
    },
    pieges: [
      t`$\dfrac{\ln x}{x} \to 0$ mais $\dfrac{x}{\ln x} \to +\infty$ : bien lire dans quel sens est la fraction.`,
      t`Au bac, il faut **citer** « par croissances comparées ».`,
    ],
    voir: ['lim-fi-exp', 'ln-limites'],
  },

  'lim-composee': {
    quand: t`La fonction est de la forme $v(u(x))$ : $e^{1/x}$, $\sqrt{\frac{4x+1}{x+2}}$, $\ln(1 + \frac1x)$…`,
    etapes: [
      t`Repérer la fonction « intérieure » $u(x)$ et poser $X = u(x)$.`,
      t`Calculer la limite de $X$ quand $x$ tend vers la valeur demandée : $X \to b$.`,
      t`Calculer la limite de $v(X)$ quand $X \to b$.`,
      t`Conclure : « par composition, … ».`,
    ],
    exemple: {
      enonce: t`Calculer $\lim\limits_{x \to +\infty} \sqrt{\dfrac{4x + 1}{x + 2}}$ et $\lim\limits_{x \to 0^-} e^{1/x}$.`,
      solution: t`- On pose $X = \dfrac{4x + 1}{x + 2}$. En $+\infty$, $X \to \dfrac{4}{1} = 4$ (termes de plus haut degré). Et $\lim\limits_{X \to 4} \sqrt X = 2$. Par composition, la limite est **2**.
- On pose $X = \dfrac1x$. Quand $x \to 0^-$, $X \to -\infty$. Et $\lim\limits_{X \to -\infty} e^X = 0$. Par composition, $\lim\limits_{x \to 0^-} e^{1/x} = 0$.`,
    },
    pieges: [
      t`En un point, bien distinguer $0^+$ et $0^-$ : $e^{1/x} \to +\infty$ en $0^+$ mais $\to 0$ en $0^-$.`,
    ],
    voir: ['lim-reference'],
  },

  'lim-taux': {
    quand: t`Forme $\frac00$ en un point $a$ qui ressemble à $\dfrac{f(x) - f(a)}{x - a}$ : $\dfrac{e^x - 1}{x}$, $\dfrac{\ln x}{x - 1}$, $\dfrac{\sin x}{x}$…`,
    etapes: [
      t`Identifier la fonction $f$ et le point $a$ tels que l'expression soit $\dfrac{f(x) - f(a)}{x - a}$.`,
      t`$f$ étant dérivable en $a$, cette expression tend vers $f'(a)$ (définition du nombre dérivé).`,
      t`Calculer $f'(a)$.`,
      t`À connaître : $\lim\limits_{x \to 0} \dfrac{e^x - 1}{x} = 1$, $\lim\limits_{x \to 0} \dfrac{\ln(1 + x)}{x} = 1$, $\lim\limits_{x \to 0} \dfrac{\sin x}{x} = 1$.`,
    ],
    exemple: {
      enonce: t`Calculer $\lim\limits_{x \to 0} \dfrac{e^{2x} - 1}{x}$ et $\lim\limits_{x \to 1} \dfrac{\ln x}{x - 1}$.`,
      solution: t`- Soit $f(x) = e^{2x}$ : $f(0) = 1$, donc $\dfrac{e^{2x} - 1}{x} = \dfrac{f(x) - f(0)}{x - 0}$. $f$ est dérivable en 0 avec $f'(x) = 2e^{2x}$, donc la limite est $f'(0) = 2$.
- Soit $g(x) = \ln x$ : $g(1) = 0$, donc $\dfrac{\ln x}{x - 1} = \dfrac{g(x) - g(1)}{x - 1}$. La limite est $g'(1) = \dfrac11 = 1$.`,
    },
    pieges: [
      t`Bien vérifier que le numérateur est exactement $f(x) - f(a)$ (ici $e^{2x} - 1$ car $e^0 = 1$).`,
    ],
    voir: ['der-derivabilite', 'trigo-limite'],
  },

  'lim-comparaison': {
    quand: t`L'expression contient $\sin x$, $\cos x$ ou une partie « qui oscille » : aucune règle d'opération ne s'applique.`,
    etapes: [
      t`Encadrer le terme qui oscille : $-1 \leq \sin x \leq 1$.`,
      t`**Pour $+\infty$** : minorer $f(x) \geq g(x)$ avec $g(x) \to +\infty$ (théorème de comparaison).`,
      t`**Pour une limite finie** : encadrer $g(x) \leq f(x) \leq h(x)$ avec $g$ et $h$ de même limite $\ell$ (gendarmes).`,
    ],
    exemple: {
      enonce: t`Calculer $\lim\limits_{x \to +\infty} (x + \sin x)$ et $\lim\limits_{x \to +\infty} \dfrac{\sin x}{x}$.`,
      solution: t`- Pour tout $x$, $\sin x \geq -1$ donc $x + \sin x \geq x - 1$. Comme $x - 1 \to +\infty$, par comparaison $x + \sin x \to +\infty$.
- Pour $x > 0$, $-1 \leq \sin x \leq 1$ donne $-\dfrac1x \leq \dfrac{\sin x}{x} \leq \dfrac1x$. Les deux bornes tendent vers 0 : d'après le théorème des gendarmes, $\dfrac{\sin x}{x} \to 0$.`,
    },
    pieges: [
      t`Diviser par $x$ ne garde le sens des inégalités que si $x > 0$ : le préciser.`,
      t`Ne pas confondre avec $\frac{\sin x}{x}$ **en 0**, qui tend vers 1 (nombre dérivé).`,
    ],
    voir: ['suite-gendarmes', 'suite-comparaison'],
  },

  'lim-asymptotes': {
    quand: t`« Interpréter graphiquement le résultat » après un calcul de limite, ou « la courbe admet-elle des asymptotes ? ».`,
    etapes: [
      t`$\lim\limits_{x \to \pm\infty} f(x) = b$ (réel) : la droite d'équation $y = b$ est **asymptote horizontale** en $\pm\infty$.`,
      t`$\lim\limits_{x \to a} f(x) = \pm\infty$ : la droite d'équation $x = a$ est **asymptote verticale**.`,
      t`Pour la position de la courbe par rapport à $y = b$ : étudier le signe de $f(x) - b$.`,
    ],
    exemple: {
      enonce: t`Soit $f(x) = \dfrac{2x + 1}{x - 1}$ sur $\mathbb{R} \setminus \{1\}$. Déterminer les asymptotes de sa courbe.`,
      solution: t`**En $\pm\infty$** : $f(x)$ a la limite de $\dfrac{2x}{x} = 2$. La droite $y = 2$ est asymptote horizontale en $+\infty$ et en $-\infty$.

**En 1** : le numérateur tend vers 3. $x - 1 \to 0^+$ quand $x \to 1^+$ et $0^-$ quand $x \to 1^-$. Donc $f(x) \to +\infty$ en $1^+$ et $-\infty$ en $1^-$ : la droite $x = 1$ est asymptote verticale.

**Position** : $f(x) - 2 = \dfrac{2x + 1 - 2(x - 1)}{x - 1} = \dfrac{3}{x - 1}$. La courbe est au-dessus de l'asymptote pour $x > 1$, en dessous pour $x < 1$.`,
    },
    pieges: [
      t`Asymptote **horizontale** : $y = \dots$ ; asymptote **verticale** : $x = \dots$. Ne pas les inverser.`,
      t`Une limite infinie en $+\infty$ ne donne pas d'asymptote horizontale.`,
    ],
    voir: ['lim-denominateur-nul', 'lim-fi-rationnelle'],
  },
}
