// Fiches méthode — Logarithme népérien. Même format que suites.js.
const t = String.raw

export const fichesLogarithme = {
  'ln-simplifier': {
    quand: t`« Simplifier », « écrire en fonction de $\ln 2$ et $\ln 3$ », « calculer sans calculatrice ».`,
    etapes: [
      t`Retenir (pour $a, b > 0$) :
- $\ln(ab) = \ln a + \ln b$ et $\ln\frac ab = \ln a - \ln b$
- $\ln(a^n) = n\ln a$, $\ln\frac1a = -\ln a$, $\ln\sqrt a = \frac12 \ln a$
- $\ln 1 = 0$, $\ln e = 1$, $\ln(e^x) = x$, $e^{\ln a} = a$`,
      t`Décomposer les nombres en produits de facteurs premiers (ex. $72 = 2^3 \times 3^2$).`,
      t`Regrouper les logarithmes en un seul, ou les séparer, selon ce qui est demandé.`,
    ],
    exemple: {
      enonce: t`1) Écrire $\ln 72$ en fonction de $\ln 2$ et $\ln 3$. 2) Simplifier $A = \ln 12 - \ln 3 + 2\ln\frac12$ et $B = \ln(e^3) - \ln\sqrt e$.`,
      solution: t`1) $72 = 2^3 \times 3^2$ donc $\ln 72 = 3\ln 2 + 2\ln 3$.

2) $A = \ln\dfrac{12}{3} + \ln\dfrac14 = \ln 4 - \ln 4 = 0$.

$B = 3 - \dfrac12 = \dfrac52$.`,
    },
    pieges: [
      t`$\ln(a + b) \neq \ln a + \ln b$.`,
      t`$\ln(a^n) = n\ln a$ mais $(\ln a)^n \neq n\ln a$.`,
    ],
    voir: ['ln-equation'],
  },

  'ln-domaine': {
    quand: t`« Déterminer l'ensemble de définition » d'une fonction contenant $\ln(u(x))$. C'est aussi la **première étape** de toute équation avec ln.`,
    etapes: [
      t`$\ln(u(x))$ existe si et seulement si $u(x) > 0$ (strictement).`,
      t`Résoudre l'inéquation $u(x) > 0$ (tableau de signes pour un quotient ou un produit).`,
      t`S'il y a plusieurs ln, prendre l'**intersection** des conditions.`,
    ],
    exemple: {
      enonce: t`Déterminer l'ensemble de définition de $f(x) = \ln(2x - 4)$ et de $g(x) = \ln\left(\dfrac{x + 1}{3 - x}\right)$.`,
      solution: t`- $2x - 4 > 0 \iff x > 2$ : $f$ est définie sur $]2 ; +\infty[$.
- Il faut $\dfrac{x + 1}{3 - x} > 0$. $x + 1$ s'annule en $-1$, $3 - x$ en 3 (valeur interdite).
$$\small \def\arraystretch{1.5} \begin{array}{c|ccccccc} x & -\infty & & -1 & & 3 & & +\infty \\ \hline x + 1 & & - & 0 & + & & + & \\ 3 - x & & + & & + & 0 & - & \\ \hline \text{quotient} & & - & 0 & + & \| & - & \end{array}$$
$g$ est définie sur $]-1 ; 3[$.`,
    },
    pieges: [
      t`$\ln 0$ n'existe pas : l'inégalité est **stricte**.`,
      t`$\ln(x^2 + 1)$ est défini sur tout $\mathbb{R}$ car $x^2 + 1 > 0$.`,
    ],
    voir: ['ln-equation', 'ln-inequation'],
  },

  'ln-equation': {
    quand: t`Équation avec des ln : $\ln(2x - 1) = \ln(x + 3)$, $\ln x + \ln(x - 2) = \ln 3$, $\ln x = 2$…`,
    etapes: [
      t`Déterminer le **domaine de validité** (tous les ln doivent exister).`,
      t`Regrouper pour avoir $\ln A = \ln B$ (avec $\ln a + \ln b = \ln(ab)$…), ou $\ln A = k$.`,
      t`Utiliser $\ln A = \ln B \iff A = B$, ou $\ln A = k \iff A = e^k$.`,
      t`Résoudre, puis **garder seulement les solutions dans le domaine**.`,
    ],
    exemple: {
      enonce: t`Résoudre $\ln x + \ln(x - 2) = \ln 3$.`,
      solution: t`**Domaine** : il faut $x > 0$ et $x - 2 > 0$, soit $x > 2$.

Sur $]2 ; +\infty[$ :
$$\begin{aligned} & \ln x + \ln(x - 2) = \ln 3 \\ \iff \; & \ln\big(x(x - 2)\big) = \ln 3 \\ \iff \; & x^2 - 2x - 3 = 0 \end{aligned}$$
$\Delta = 4 + 12 = 16$, d'où $x = 3$ ou $x = -1$.

$-1$ n'est pas dans $]2 ; +\infty[$. Donc $\mathcal{S} = \{3\}$.`,
    },
    pieges: [
      t`Oublier le domaine : on garderait la fausse solution $-1$.`,
      t`Regrouper $\ln x + \ln(x - 2)$ n'est permis que là où les deux existent.`,
    ],
    voir: ['ln-domaine', 'ln-inequation', 'ln-simplifier'],
  },

  'ln-inequation': {
    quand: t`Inéquation avec des ln : $\ln(3 - x) \leq 0$, $\ln x > 2$, $\ln(x + 1) < \ln(2x)$…`,
    etapes: [
      t`Déterminer le domaine de validité.`,
      t`Se ramener à $\ln A < \ln B$ (rappel : $0 = \ln 1$ et $k = \ln(e^k)$).`,
      t`ln est **strictement croissante** : $\ln A < \ln B \iff A < B$ (le sens ne change pas).`,
      t`Résoudre et **intersecter avec le domaine**.`,
    ],
    exemple: {
      enonce: t`Résoudre $\ln(3 - x) \leq 0$ puis $\ln x > 2$.`,
      solution: t`- Domaine : $3 - x > 0$, soit $x < 3$. Puis $\ln(3 - x) \leq \ln 1 \iff 3 - x \leq 1 \iff x \geq 2$. Avec le domaine : $\mathcal S = [2 ; 3[$.
- Domaine : $x > 0$. $\ln x > 2 \iff \ln x > \ln(e^2) \iff x > e^2$. $\mathcal S = \,]e^2 ; +\infty[$.`,
    },
    pieges: [
      t`Ne pas oublier d'intersecter avec le domaine (ici $x < 3$).`,
    ],
    voir: ['ln-equation', 'ln-signe'],
  },

  'ln-exp-equation': {
    quand: t`L'inconnue est dans une exponentielle : $e^{2x - 1} = 5$, $e^x < 3$, $3e^{-x} + 1 > 7$…`,
    etapes: [
      t`Isoler l'exponentielle d'un côté : $e^{\dots} = k$.`,
      t`Si $k \leq 0$ : pas de solution pour l'égalité (une exponentielle est toujours $> 0$).`,
      t`Si $k > 0$ : appliquer ln, qui est strictement croissant : $e^A = k \iff A = \ln k$, et $e^A < k \iff A < \ln k$.`,
    ],
    exemple: {
      enonce: t`Résoudre $e^{2x - 1} = 5$ puis $3e^{-x} + 1 > 7$.`,
      solution: t`- $e^{2x - 1} = 5 \iff 2x - 1 = \ln 5 \iff x = \dfrac{1 + \ln 5}{2}$.
- $3e^{-x} + 1 > 7 \iff e^{-x} > 2 \iff -x > \ln 2 \iff x < -\ln 2$.

$\mathcal S = \,]-\infty ; -\ln 2[$.`,
    },
    pieges: [
      t`En multipliant par $-1$ ($-x > \ln 2$), le sens de l'inégalité change.`,
      t`$e^x = -2$ n'a pas de solution.`,
    ],
    voir: ['ln-changement', 'ln-seuil'],
  },

  'ln-seuil': {
    quand: t`« À partir de quelle année… ? », « le plus petit $n$ tel que $q^n < s$ » : l'inconnue $n$ est en exposant.`,
    etapes: [
      t`Isoler la puissance : $q^n < s$ (ou $>$).`,
      t`Appliquer ln (strictement croissant) : $n\ln q < \ln s$.`,
      t`Diviser par $\ln q$ **en regardant son signe** : si $0 < q < 1$, $\ln q < 0$ et le sens change ; si $q > 1$, il ne change pas.`,
      t`Conclure avec le premier entier qui convient.`,
    ],
    exemple: {
      enonce: t`Un capital de 1000 € est placé à 5 % par an : $C_n = 1000 \times 1{,}05^n$. Au bout de combien d'années aura-t-il doublé ?`,
      solution: t`$$\begin{aligned} C_n \geq 2000 &\iff 1{,}05^n \geq 2 \\ &\iff n\ln 1{,}05 \geq \ln 2 \\ &\iff n \geq \frac{\ln 2}{\ln 1{,}05} \approx 14{,}2 \end{aligned}$$
(le sens ne change pas car $\ln 1{,}05 > 0$). Le capital aura doublé au bout de **15 ans**.`,
    },
    pieges: [
      t`$\ln q < 0$ quand $0 < q < 1$ : c'est l'erreur la plus fréquente.`,
      t`Répondre avec un **entier** (on arrondit au-dessus quand on cherche « à partir de »).`,
    ],
    voir: ['suite-seuil', 'py-seuil'],
  },

  'ln-changement': {
    quand: t`Équation où $\ln x$ (ou $e^x$) apparaît au carré : $(\ln x)^2 - \ln x - 2 = 0$, $e^{2x} - 3e^x + 2 = 0$.`,
    etapes: [
      t`Poser $X = \ln x$ (ou $X = e^x$, en remarquant que $e^{2x} = (e^x)^2$).`,
      t`Résoudre l'équation du second degré en $X$.`,
      t`Revenir à $x$ : $\ln x = X_1 \iff x = e^{X_1}$, ou $e^x = X_1 \iff x = \ln X_1$ (seulement si $X_1 > 0$).`,
    ],
    exemple: {
      enonce: t`Résoudre $e^{2x} - 3e^x + 2 = 0$.`,
      solution: t`On pose $X = e^x$ (avec $X > 0$). L'équation devient $X^2 - 3X + 2 = 0$.

$\Delta = 9 - 8 = 1$, d'où $X = 1$ ou $X = 2$ (tous deux positifs).

- $e^x = 1 \iff x = 0$
- $e^x = 2 \iff x = \ln 2$

$\mathcal S = \{0 ; \ln 2\}$.`,
    },
    pieges: [
      t`Ne pas oublier de **revenir à $x$** à la fin.`,
      t`Une solution $X \leq 0$ est à rejeter quand $X = e^x$.`,
    ],
    voir: ['ln-exp-equation', 'ln-equation'],
  },

  'ln-deriver': {
    quand: t`Dériver une fonction contenant $\ln x$ ou $\ln(u(x))$.`,
    etapes: [
      t`$(\ln x)' = \dfrac1x$ et $(\ln u)' = \dfrac{u'}{u}$.`,
      t`Pour un produit ou un quotient avec ln, appliquer les formules habituelles.`,
      t`Factoriser le résultat pour étudier son signe.`,
    ],
    exemple: {
      enonce: t`Dériver $f(x) = x^2\ln x$ et $g(x) = \dfrac{\ln x}{x}$ sur $]0 ; +\infty[$.`,
      solution: t`- $f'(x) = 2x\ln x + x^2 \times \dfrac1x = 2x\ln x + x = x(2\ln x + 1)$.
- $g'(x) = \dfrac{\frac1x \times x - \ln x \times 1}{x^2} = \dfrac{1 - \ln x}{x^2}$.`,
    },
    pieges: [
      t`$(\ln u)' = \dfrac{u'}{u}$, pas $\dfrac{1}{u'}$ ni $\dfrac1u$.`,
    ],
    voir: ['der-composee', 'ln-etude'],
  },

  'ln-limites': {
    quand: t`Limites contenant $\ln x$ : en 0, en $+\infty$, avec des puissances de $x$.`,
    etapes: [
      t`Limites de base : $\lim\limits_{x \to 0^+} \ln x = -\infty$ et $\lim\limits_{x \to +\infty} \ln x = +\infty$.`,
      t`Croissances comparées : $\lim\limits_{x \to +\infty} \dfrac{\ln x}{x} = 0$ et $\lim\limits_{x \to 0^+} x\ln x = 0$.`,
      t`Une différence de ln : la regrouper en un seul ln, $\ln a - \ln b = \ln\frac ab$, puis passer par composition.`,
      t`Vérifier d'abord s'il y a vraiment une forme indéterminée : $\dfrac{\ln x}{x}$ en $0^+$ n'en est pas une.`,
    ],
    exemple: {
      enonce: t`Calculer $\lim\limits_{x \to 0^+} \dfrac{\ln x}{x}$, $\lim\limits_{x \to +\infty} \big(\ln(x + 1) - \ln x\big)$ et $\lim\limits_{x \to +\infty} (x - 2\ln x)$.`,
      solution: t`- En $0^+$ : $\ln x \to -\infty$ et $\dfrac1x \to +\infty$, donc par produit $\dfrac{\ln x}{x} \to -\infty$ (pas de forme indéterminée).
- $\ln(x + 1) - \ln x = \ln\dfrac{x + 1}{x}$. Or $\dfrac{x + 1}{x} \to 1$ et $\ln$ est continue en 1, donc la limite est $\ln 1 = 0$.
- $x - 2\ln x = x\left(1 - 2\dfrac{\ln x}{x}\right)$. Par croissances comparées $\dfrac{\ln x}{x} \to 0$, donc la limite est $+\infty$.`,
    },
    pieges: [
      t`$\dfrac{\ln x}{x} \to 0$ en $+\infty$ mais $\to -\infty$ en $0^+$ : bien regarder où on est.`,
    ],
    voir: ['lim-croissances', 'lim-composee'],
  },

  'ln-signe': {
    quand: t`Étudier le signe de $\ln x$, $\ln(u(x))$ ou d'une expression comme $1 - \ln x$ (souvent pour le signe d'une dérivée).`,
    etapes: [
      t`$\ln X > 0 \iff X > 1$ et $\ln X < 0 \iff 0 < X < 1$.`,
      t`Pour $\ln(u(x))$ : résoudre $u(x) > 1$.`,
      t`Pour $a - \ln x$ : $a - \ln x > 0 \iff \ln x < a \iff x < e^a$.`,
    ],
    exemple: {
      enonce: t`Étudier le signe de $\ln(2 - x)$ sur $]-\infty ; 2[$, puis celui de $1 - \ln x$ sur $]0 ; +\infty[$.`,
      solution: t`- $\ln(2 - x) > 0 \iff 2 - x > 1 \iff x < 1$. Donc $\ln(2 - x) > 0$ sur $]-\infty ; 1[$, $= 0$ en 1, et $< 0$ sur $]1 ; 2[$.
- $1 - \ln x > 0 \iff \ln x < 1 \iff x < e$. Donc $1 - \ln x > 0$ sur $]0 ; e[$ et $< 0$ sur $]e ; +\infty[$.`,
    },
    pieges: [
      t`$\ln x$ change de signe en **1**, pas en 0.`,
    ],
    voir: ['ln-inequation', 'der-signe'],
  },

  'ln-etude': {
    quand: t`Étude complète d'une fonction avec ln : domaine, limites, dérivée, variations, tableau.`,
    etapes: [
      t`Ensemble de définition.`,
      t`Limites aux bornes (croissances comparées si besoin) et asymptotes.`,
      t`Dérivée, factorisée, puis signe (penser à « $\ln x > 0 \iff x > 1$ »).`,
      t`Tableau de variations avec les valeurs exactes des extremums.`,
    ],
    exemple: {
      enonce: t`Étudier $f(x) = \dfrac{\ln x}{x}$ sur $]0 ; +\infty[$.`,
      solution: t`**Limites** : en $0^+$, $\ln x \to -\infty$ et $\frac1x \to +\infty$ donc $f(x) \to -\infty$ (asymptote verticale $x = 0$). En $+\infty$, $f(x) \to 0$ par croissances comparées (asymptote horizontale $y = 0$).

**Dérivée** : $f'(x) = \dfrac{1 - \ln x}{x^2}$, du signe de $1 - \ln x$ car $x^2 > 0$ : positive sur $]0 ; e[$, négative sur $]e ; +\infty[$.

**Maximum** : $f(e) = \dfrac{\ln e}{e} = \dfrac1e$.
$$\def\arraystretch{1.6} \begin{array}{c|ccccc} x & 0 & & e & & +\infty \\ \hline f'(x) & & + & 0 & - & \\ \hline f(x) & -\infty & \nearrow & \frac1e & \searrow & 0 \end{array}$$`,
    },
    pieges: [
      t`Donner la valeur **exacte** du maximum ($\frac1e$), pas seulement une valeur approchée.`,
    ],
    voir: ['ln-deriver', 'ln-limites', 'der-variations'],
  },

  'ln-log10': {
    quand: t`pH, décibels, magnitude, nombre de chiffres d'un entier : on utilise le logarithme décimal $\log$.`,
    etapes: [
      t`$\log x = \dfrac{\ln x}{\ln 10}$ : il a les **mêmes propriétés** que ln.`,
      t`$\log(10^n) = n$, et $\log x = y \iff x = 10^y$.`,
      t`Chimie : $\text{pH} = -\log[\text{H}_3\text{O}^+]$, donc $[\text{H}_3\text{O}^+] = 10^{-\text{pH}}$.`,
    ],
    exemple: {
      enonce: t`1) Calculer le pH d'une solution où $[\text{H}_3\text{O}^+] = 2{,}5 \times 10^{-4}$ mol/L. 2) Combien de chiffres a $2^{100}$ ?`,
      solution: t`1) $\text{pH} = -\log(2{,}5 \times 10^{-4}) = -(\log 2{,}5 - 4) = 4 - \log 2{,}5 \approx 3{,}60$.

2) $\log(2^{100}) = 100\log 2 \approx 30{,}1$, donc $10^{30} \leq 2^{100} < 10^{31}$ : $2^{100}$ a **31 chiffres**.`,
    },
    pieges: [
      t`Sur la calculatrice, « log » est le logarithme décimal et « ln » le népérien : ne pas les confondre.`,
    ],
    voir: ['ln-simplifier'],
  },
}
