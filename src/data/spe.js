// Fiches de cours — Spécialité mathématiques (Terminale).
// Format d'un bloc : { k: type, t: titre, c: contenu }
// Types : def (définition), thm (théorème), prop (propriété), meth (méthode), ex (exemple), rem (remarque)
// Contenu : $...$ en ligne, $$...$$ centré, **gras**, listes avec "- ".
const t = String.raw

export const spe = [
  {
    id: 'combinatoire',
    title: 'Combinatoire et dénombrement',
    theme: 'Algèbre',
    blocks: [
      { k: 'def', t: 'Principe multiplicatif', c: t`Le nombre d'éléments du produit cartésien $E_1 \times E_2 \times \dots \times E_p$ est $\operatorname{Card}(E_1) \times \dots \times \operatorname{Card}(E_p)$.` },
      { k: 'prop', t: 'p-uplets', c: t`Le nombre de $p$-uplets (listes ordonnées avec répétition possible) d'un ensemble à $n$ éléments est $n^p$.

Le nombre de parties d'un ensemble à $n$ éléments est $2^n$.` },
      { k: 'prop', t: 'Arrangements et permutations', c: t`Le nombre de $p$-uplets d'éléments **distincts** (arrangements) d'un ensemble à $n$ éléments est
$$\frac{n!}{(n-p)!} = n(n-1)\cdots(n-p+1)$$
Le nombre de permutations d'un ensemble à $n$ éléments est $n!$.` },
      { k: 'def', t: 'Combinaisons', c: t`Une combinaison de $k$ éléments est une **partie** à $k$ éléments (l'ordre ne compte pas). Leur nombre est
$$\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$$` },
      { k: 'prop', t: 'Propriétés des coefficients binomiaux', c: t`- Symétrie : $\binom{n}{k} = \binom{n}{n-k}$
- Relation de Pascal : $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$
- Somme : $\sum_{k=0}^{n} \binom{n}{k} = 2^n$` },
      { k: 'meth', t: 'Choisir la bonne formule', c: t`- L'ordre compte et répétitions possibles → $n^p$
- L'ordre compte, sans répétition → $\frac{n!}{(n-p)!}$
- L'ordre ne compte pas, sans répétition → $\binom{n}{p}$` },
      { k: 'ex', t: 'Exemple', c: t`Nombre de mains de 5 cartes dans un jeu de 32 : $\binom{32}{5} = 201\,376$.` },
    ],
    quiz: [
      { q: t`Combien de codes à 4 chiffres (de 0 à 9) existe-t-il ?`, o: [t`$10^4$`, t`$4^{10}$`, t`$\binom{10}{4}$`, t`$\frac{10!}{6!}$`], a: 0, e: t`Ordre important, répétitions autorisées : $10^4 = 10\,000$.` },
      { q: t`Que vaut $\binom{6}{2}$ ?`, o: ['12', '15', '30', '36'], a: 1, e: t`$\binom{6}{2} = \frac{6 \times 5}{2} = 15$.` },
      { q: t`Nombre de podiums (1er, 2e, 3e) possibles avec 8 coureurs ?`, o: ['56', '336', '512', '24'], a: 1, e: t`Arrangements : $8 \times 7 \times 6 = 336$.` },
      { q: t`Combien de parties possède un ensemble à 5 éléments ?`, o: ['10', '25', '32', '120'], a: 2, e: t`$2^5 = 32$.` },
    ],
  },
  {
    id: 'suites',
    title: 'Suites : récurrence et limites',
    theme: 'Analyse',
    blocks: [
      { k: 'thm', t: 'Raisonnement par récurrence', c: t`Soit $P(n)$ une propriété. Si :
- **Initialisation** : $P(n_0)$ est vraie ;
- **Hérédité** : pour tout $n \geq n_0$, $P(n) \Rightarrow P(n+1)$ ;

alors $P(n)$ est vraie pour tout $n \geq n_0$.` },
      { k: 'def', t: 'Limite d\'une suite', c: t`- $(u_n)$ converge vers $\ell$ si tout intervalle ouvert contenant $\ell$ contient tous les $u_n$ à partir d'un certain rang.
- $(u_n)$ tend vers $+\infty$ si tout intervalle $]A ; +\infty[$ contient tous les $u_n$ à partir d'un certain rang.` },
      { k: 'thm', t: 'Théorèmes de comparaison', c: t`- Si $u_n \leq v_n$ à partir d'un certain rang et $u_n \to +\infty$, alors $v_n \to +\infty$.
- **Gendarmes** : si $v_n \leq u_n \leq w_n$ et $v_n \to \ell$, $w_n \to \ell$, alors $u_n \to \ell$.` },
      { k: 'thm', t: 'Convergence monotone', c: t`- Toute suite **croissante majorée** converge.
- Toute suite **décroissante minorée** converge.
- Une suite croissante non majorée tend vers $+\infty$.` },
      { k: 'prop', t: 'Suites géométriques', c: t`Limite de $q^n$ :
- si $q > 1$ : $q^n \to +\infty$
- si $q = 1$ : $q^n = 1$
- si $-1 < q < 1$ : $q^n \to 0$
- si $q \leq -1$ : pas de limite

Somme : $1 + q + \dots + q^n = \frac{1 - q^{n+1}}{1 - q}$ pour $q \neq 1$.` },
      { k: 'prop', t: 'Suite $u_{n+1} = f(u_n)$', c: t`Si $(u_n)$ converge vers $\ell$ et $f$ est continue en $\ell$, alors $\ell$ vérifie $f(\ell) = \ell$ (point fixe).` },
      { k: 'meth', t: 'Lever une forme indéterminée', c: t`Pour $u_n = 3n^2 - 5n + 1$ : on factorise par le terme dominant, $u_n = n^2\left(3 - \frac{5}{n} + \frac{1}{n^2}\right) \to +\infty$.` },
    ],
    quiz: [
      { q: t`Limite de $\left(\frac{2}{3}\right)^n$ ?`, o: ['0', '1', t`$+\infty$`, 'Pas de limite'], a: 0, e: t`$-1 < \frac{2}{3} < 1$ donc $q^n \to 0$.` },
      { q: t`Une suite croissante et majorée par 5…`, o: ['tend vers 5', 'converge vers une limite $\\leq 5$', 'tend vers $+\\infty$', 'peut diverger'], a: 1, e: t`Théorème de convergence monotone : elle converge, et sa limite est $\leq 5$ (pas forcément égale à 5).` },
      { q: t`Limite de $\frac{2n+1}{n+3}$ ?`, o: ['0', '1', '2', t`$\frac{1}{3}$`], a: 2, e: t`$\frac{n(2 + 1/n)}{n(1 + 3/n)} \to 2$.` },
      { q: t`$1 + 2 + 4 + \dots + 2^{9}$ vaut :`, o: ['511', '1023', '1024', '2047'], a: 1, e: t`$\frac{1 - 2^{10}}{1 - 2} = 2^{10} - 1 = 1023$.` },
    ],
  },
  {
    id: 'limites-fonctions',
    title: 'Limites de fonctions',
    theme: 'Analyse',
    blocks: [
      { k: 'def', t: 'Asymptotes', c: t`- Si $\lim_{x \to a} f(x) = \pm\infty$ : la droite $x = a$ est **asymptote verticale**.
- Si $\lim_{x \to \pm\infty} f(x) = b$ : la droite $y = b$ est **asymptote horizontale**.` },
      { k: 'prop', t: 'Formes indéterminées', c: t`Les quatre formes indéterminées : $\infty - \infty$, $0 \times \infty$, $\frac{\infty}{\infty}$, $\frac{0}{0}$.` },
      { k: 'thm', t: 'Croissances comparées', c: t`Pour tout entier $n \geq 1$ :
$$\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty \qquad \lim_{x \to -\infty} x^n e^x = 0$$
$$\lim_{x \to +\infty} \frac{\ln x}{x^n} = 0 \qquad \lim_{x \to 0^+} x^n \ln x = 0$$` },
      { k: 'prop', t: 'Limites de référence', c: t`$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1 \qquad \lim_{x \to 0} \frac{\ln(1+x)}{x} = 1 \qquad \lim_{x \to 0} \frac{\sin x}{x} = 1$$` },
      { k: 'thm', t: 'Composition', c: t`Si $\lim_{x \to a} u(x) = b$ et $\lim_{X \to b} v(X) = c$, alors $\lim_{x \to a} v(u(x)) = c$.` },
      { k: 'meth', t: 'Fraction rationnelle en l\'infini', c: t`En $\pm\infty$, une fraction rationnelle a la même limite que le quotient de ses termes de plus haut degré : $\frac{3x^2 + 1}{x^2 - 4} \to 3$.` },
    ],
    quiz: [
      { q: t`$\lim_{x \to +\infty} \frac{e^x}{x^3}$ = ?`, o: ['0', '1', t`$+\infty$`, 'Forme indéterminée'], a: 2, e: t`Croissances comparées : l'exponentielle l'emporte.` },
      { q: t`$\lim_{x \to 0^+} x \ln x$ = ?`, o: [t`$-\infty$`, '0', '1', t`$+\infty$`], a: 1, e: t`Croissances comparées : $x \ln x \to 0$.` },
      { q: t`$f(x) = \frac{1}{x - 2}$ admet pour asymptote verticale :`, o: [t`$y = 2$`, t`$x = 2$`, t`$x = -2$`, t`$y = 0$`], a: 1, e: t`$f$ tend vers l'infini quand $x \to 2$.` },
      { q: t`$\lim_{x \to -\infty} \frac{2x^3 - x}{x^2 + 1}$ = ?`, o: [t`$-\infty$`, '0', '2', t`$+\infty$`], a: 0, e: t`Même limite que $\frac{2x^3}{x^2} = 2x \to -\infty$.` },
    ],
  },
  {
    id: 'derivation',
    title: 'Dérivation et convexité',
    theme: 'Analyse',
    blocks: [
      { k: 'prop', t: 'Dérivées usuelles', c: t`- $(x^n)' = nx^{n-1}$, $\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$, $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$
- $(e^x)' = e^x$, $(\ln x)' = \frac{1}{x}$
- $(\sin x)' = \cos x$, $(\cos x)' = -\sin x$` },
      { k: 'prop', t: 'Opérations', c: t`- $(uv)' = u'v + uv'$
- $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$
- $(e^u)' = u'e^u$, $(\ln u)' = \frac{u'}{u}$, $(u^n)' = nu'u^{n-1}$
- Composée : $(v \circ u)' = u' \times (v' \circ u)$` },
      { k: 'def', t: 'Tangente', c: t`L'équation de la tangente à $\mathcal{C}_f$ au point d'abscisse $a$ est
$$y = f'(a)(x - a) + f(a)$$` },
      { k: 'def', t: 'Convexité', c: t`$f$ est **convexe** sur $I$ si sa courbe est au-dessus de ses tangentes (et en dessous de ses cordes). Elle est **concave** dans le cas contraire.` },
      { k: 'thm', t: 'Convexité et dérivée seconde', c: t`- $f$ convexe $\iff$ $f'$ croissante $\iff$ $f'' \geq 0$
- $f$ concave $\iff$ $f'$ décroissante $\iff$ $f'' \leq 0$` },
      { k: 'def', t: 'Point d\'inflexion', c: t`Point où la courbe **traverse sa tangente** : la convexité change. Si $f''$ s'annule en changeant de signe en $a$, le point d'abscisse $a$ est un point d'inflexion.` },
      { k: 'rem', t: 'Inégalités classiques', c: t`Par convexité : $e^x \geq 1 + x$ pour tout $x$, et $\ln x \leq x - 1$ pour tout $x > 0$.` },
    ],
    quiz: [
      { q: t`Dérivée de $e^{3x^2}$ ?`, o: [t`$e^{3x^2}$`, t`$6x\,e^{3x^2}$`, t`$3x^2 e^{3x^2 - 1}$`, t`$6x\,e^{6x}$`], a: 1, e: t`$(e^u)' = u'e^u$ avec $u' = 6x$.` },
      { q: t`Si $f''(x) = x - 1$, $f$ est convexe sur :`, o: [t`$]-\infty ; 1]$`, t`$[1 ; +\infty[$`, t`$\mathbb{R}$`, t`$[0 ; 1]$`], a: 1, e: t`$f'' \geq 0 \iff x \geq 1$.` },
      { q: t`Dérivée de $\ln(x^2 + 1)$ ?`, o: [t`$\frac{1}{x^2+1}$`, t`$\frac{2x}{x^2+1}$`, t`$2x \ln(x^2+1)$`, t`$\frac{2}{x}$`], a: 1, e: t`$(\ln u)' = \frac{u'}{u}$.` },
      { q: t`Tangente à $y = x^2$ en $a = 1$ :`, o: [t`$y = 2x - 1$`, t`$y = 2x + 1$`, t`$y = x$`, t`$y = 2x$`], a: 0, e: t`$y = 2(x - 1) + 1 = 2x - 1$.` },
    ],
  },
  {
    id: 'continuite',
    title: 'Continuité',
    theme: 'Analyse',
    blocks: [
      { k: 'def', t: 'Continuité', c: t`$f$ est continue en $a$ si $\lim_{x \to a} f(x) = f(a)$. Elle est continue sur $I$ si elle l'est en tout point de $I$.` },
      { k: 'prop', t: 'Fonctions continues', c: t`Les fonctions usuelles (polynômes, exp, ln, racine, sin, cos, fractions rationnelles) sont continues sur leur ensemble de définition. Toute fonction **dérivable** est continue (la réciproque est fausse : $|x|$ en 0).` },
      { k: 'thm', t: 'Théorème des valeurs intermédiaires (TVI)', c: t`Si $f$ est continue sur $[a ; b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet **au moins** une solution dans $[a ; b]$.` },
      { k: 'thm', t: 'Corollaire (bijection)', c: t`Si $f$ est continue et **strictement monotone** sur $[a ; b]$, alors pour tout $k$ entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet une **unique** solution dans $[a ; b]$.` },
      { k: 'meth', t: 'Encadrer la solution', c: t`On utilise la **dichotomie** ou un tableau de valeurs à la calculatrice pour encadrer la solution $\alpha$ à $10^{-n}$ près.` },
      { k: 'prop', t: 'Suites et continuité', c: t`Si $u_n \to \ell$ et $f$ est continue en $\ell$, alors $f(u_n) \to f(\ell)$.` },
    ],
    quiz: [
      { q: t`$f$ est continue sur $[0;2]$, $f(0) = -1$, $f(2) = 3$. Alors :`, o: [t`$f(x)=0$ a exactement une solution`, t`$f(x) = 0$ a au moins une solution`, t`$f(1) = 1$`, t`$f$ est croissante`], a: 1, e: t`TVI : au moins une solution. L'unicité demande la stricte monotonie.` },
      { q: t`Une fonction continue est-elle toujours dérivable ?`, o: ['Oui', 'Non'], a: 1, e: t`Contre-exemple : $|x|$ est continue en 0 mais pas dérivable.` },
      { q: t`Que faut-il en plus du TVI pour avoir l'unicité ?`, o: ['La dérivabilité', 'La stricte monotonie', 'La positivité', 'La convexité'], a: 1, e: t`C'est le corollaire du TVI (théorème de la bijection).` },
    ],
  },
  {
    id: 'logarithme',
    title: 'Fonction logarithme népérien',
    theme: 'Analyse',
    blocks: [
      { k: 'def', t: 'Définition', c: t`Pour $x > 0$, $\ln x$ est l'unique réel $y$ tel que $e^y = x$. Ainsi $e^{\ln x} = x$ pour $x > 0$ et $\ln(e^x) = x$ pour tout réel $x$.` },
      { k: 'prop', t: 'Propriétés algébriques', c: t`Pour $a, b > 0$ et $n \in \mathbb{Z}$ :
- $\ln(ab) = \ln a + \ln b$
- $\ln\left(\frac{a}{b}\right) = \ln a - \ln b$
- $\ln(a^n) = n \ln a$, $\ln \sqrt{a} = \frac{1}{2}\ln a$
- $\ln 1 = 0$, $\ln e = 1$` },
      { k: 'prop', t: 'Étude de la fonction', c: t`- $\ln$ est définie, continue, dérivable sur $]0 ; +\infty[$ avec $\ln'(x) = \frac{1}{x}$.
- Elle est strictement croissante et concave.
- $\lim_{x \to 0^+} \ln x = -\infty$ et $\lim_{x \to +\infty} \ln x = +\infty$.` },
      { k: 'meth', t: 'Résoudre une équation / inéquation', c: t`$\ln a = \ln b \iff a = b$ et $\ln a < \ln b \iff a < b$ (pour $a, b > 0$).

$e^x = k$ avec $k > 0$ $\iff x = \ln k$.

Ne pas oublier de déterminer le **domaine de validité** d'abord !` },
      { k: 'ex', t: 'Exemple', c: t`Plus petit $n$ tel que $0{,}8^n < 0{,}01$ : $n \ln 0{,}8 < \ln 0{,}01 \iff n > \frac{\ln 0{,}01}{\ln 0{,}8} \approx 20{,}6$ (on change le sens car $\ln 0{,}8 < 0$). Donc $n = 21$.` },
    ],
    quiz: [
      { q: t`$\ln(8)$ vaut :`, o: [t`$8 \ln 1$`, t`$3 \ln 2$`, t`$2 \ln 3$`, t`$\ln 2 + \ln 4 + 1$`], a: 1, e: t`$\ln(2^3) = 3 \ln 2$.` },
      { q: t`Solution de $e^{2x} = 5$ ?`, o: [t`$x = \frac{\ln 5}{2}$`, t`$x = 2 \ln 5$`, t`$x = \ln \frac{5}{2}$`, t`$x = \frac{5}{2}$`], a: 0, e: t`$2x = \ln 5$.` },
      { q: t`Dérivée de $x \ln x$ ?`, o: [t`$\frac{1}{x}$`, t`$\ln x$`, t`$\ln x + 1$`, t`$1$`], a: 2, e: t`$(uv)' = 1 \cdot \ln x + x \cdot \frac{1}{x}$.` },
      { q: t`$\ln x < 0$ équivaut à :`, o: [t`$x < 0$`, t`$0 < x < 1$`, t`$x < 1$`, t`$x > 1$`], a: 1, e: t`$\ln x < \ln 1$ avec $x > 0$.` },
    ],
  },
  {
    id: 'trigo',
    title: 'Fonctions trigonométriques',
    theme: 'Analyse',
    blocks: [
      { k: 'prop', t: 'Propriétés', c: t`- $\cos$ et $\sin$ sont définies sur $\mathbb{R}$ et **$2\pi$-périodiques**.
- $\cos$ est **paire** : $\cos(-x) = \cos x$.
- $\sin$ est **impaire** : $\sin(-x) = -\sin x$.
- $\cos^2 x + \sin^2 x = 1$` },
      { k: 'prop', t: 'Dérivées', c: t`$\cos' = -\sin$, $\sin' = \cos$, et pour $a, b$ réels :
$$(\cos(ax+b))' = -a\sin(ax+b) \qquad (\sin(ax+b))' = a\cos(ax+b)$$` },
      { k: 'prop', t: 'Valeurs remarquables', c: t`- $\cos 0 = 1$, $\cos \frac{\pi}{6} = \frac{\sqrt3}{2}$, $\cos \frac{\pi}{4} = \frac{\sqrt2}{2}$, $\cos \frac{\pi}{3} = \frac12$, $\cos \frac{\pi}{2} = 0$
- $\sin 0 = 0$, $\sin \frac{\pi}{6} = \frac12$, $\sin \frac{\pi}{4} = \frac{\sqrt2}{2}$, $\sin \frac{\pi}{3} = \frac{\sqrt3}{2}$, $\sin \frac{\pi}{2} = 1$` },
      { k: 'meth', t: 'Équations trigonométriques', c: t`- $\cos x = \cos a \iff x = a + 2k\pi$ ou $x = -a + 2k\pi$
- $\sin x = \sin a \iff x = a + 2k\pi$ ou $x = \pi - a + 2k\pi$` },
      { k: 'rem', t: 'Limite', c: t`$\lim_{x \to 0} \frac{\sin x}{x} = 1$ (c'est le nombre dérivé de $\sin$ en 0).` },
    ],
    quiz: [
      { q: t`Période de $x \mapsto \cos(3x)$ ?`, o: [t`$2\pi$`, t`$\frac{2\pi}{3}$`, t`$6\pi$`, t`$\frac{\pi}{3}$`], a: 1, e: t`$\cos(3(x + \frac{2\pi}{3})) = \cos(3x + 2\pi)$.` },
      { q: t`Dérivée de $\sin(2x)$ ?`, o: [t`$\cos(2x)$`, t`$2\cos(2x)$`, t`$-2\cos(2x)$`, t`$2\sin(2x)$`], a: 1, e: t`$(\sin(ax+b))' = a\cos(ax+b)$.` },
      { q: t`$\sin(-x)$ = ?`, o: [t`$\sin x$`, t`$-\sin x$`, t`$\cos x$`, t`$-\cos x$`], a: 1, e: t`$\sin$ est impaire.` },
    ],
  },
  {
    id: 'primitives',
    title: 'Primitives et équations différentielles',
    theme: 'Analyse',
    blocks: [
      { k: 'def', t: 'Primitive', c: t`$F$ est une primitive de $f$ sur $I$ si $F$ est dérivable sur $I$ et $F' = f$. Toute fonction continue sur un intervalle admet des primitives, et elles diffèrent toutes d'une constante.` },
      { k: 'prop', t: 'Primitives usuelles', c: t`- $x^n \to \frac{x^{n+1}}{n+1}$ ($n \neq -1$), $\frac{1}{x} \to \ln x$ (sur $]0;+\infty[$), $\frac{1}{\sqrt x} \to 2\sqrt x$
- $e^x \to e^x$, $\cos x \to \sin x$, $\sin x \to -\cos x$
- $u'e^u \to e^u$, $\frac{u'}{u} \to \ln u$ ($u > 0$), $u'u^n \to \frac{u^{n+1}}{n+1}$, $\frac{u'}{\sqrt u} \to 2\sqrt u$` },
      { k: 'thm', t: 'Équation $y\' = ay$', c: t`Les solutions de $y' = ay$ ($a \neq 0$) sont les fonctions $x \mapsto Ce^{ax}$, $C \in \mathbb{R}$.` },
      { k: 'thm', t: 'Équation $y\' = ay + b$', c: t`Les solutions de $y' = ay + b$ ($a \neq 0$) sont les fonctions
$$x \mapsto Ce^{ax} - \frac{b}{a}, \quad C \in \mathbb{R}$$
$-\frac{b}{a}$ est la solution constante.` },
      { k: 'meth', t: 'Équation $y\' = ay + f$', c: t`On cherche une **solution particulière** $y_p$ (souvent indiquée par l'énoncé). Les solutions sont alors $y = y_p + Ce^{ax}$.` },
      { k: 'meth', t: 'Condition initiale', c: t`Avec $y(x_0) = y_0$, on remplace pour trouver l'unique constante $C$.` },
    ],
    quiz: [
      { q: t`Une primitive de $3x^2 + 2$ :`, o: [t`$6x$`, t`$x^3 + 2x$`, t`$x^3 + 2$`, t`$3x^3 + 2x$`], a: 1, e: t`$(x^3 + 2x)' = 3x^2 + 2$.` },
      { q: t`Solutions de $y' = -2y$ :`, o: [t`$Ce^{2x}$`, t`$Ce^{-2x}$`, t`$-2e^x + C$`, t`$e^{-2x} + C$`], a: 1, e: t`Forme $Ce^{ax}$ avec $a = -2$.` },
      { q: t`Solution constante de $y' = 3y - 6$ :`, o: ['-2', '2', '3', '6'], a: 1, e: t`$y' = 0 \Rightarrow 3y = 6 \Rightarrow y = 2$.` },
      { q: t`Une primitive de $\frac{2x}{x^2+1}$ :`, o: [t`$\ln(x^2+1)$`, t`$\frac{1}{x^2+1}$`, t`$2\ln x$`, t`$x^2 \ln x$`], a: 0, e: t`Forme $\frac{u'}{u}$.` },
    ],
  },
  {
    id: 'integrales',
    title: 'Calcul intégral',
    theme: 'Analyse',
    blocks: [
      { k: 'def', t: 'Intégrale', c: t`Si $f$ est continue et positive sur $[a ; b]$, $\int_a^b f(x)\,dx$ est l'**aire** (en u.a.) entre la courbe, l'axe des abscisses et les droites $x = a$, $x = b$.

Plus généralement, si $F$ est une primitive de $f$ :
$$\int_a^b f(x)\,dx = F(b) - F(a)$$` },
      { k: 'prop', t: 'Propriétés', c: t`- **Linéarité** : $\int_a^b (\alpha f + \beta g) = \alpha\int_a^b f + \beta \int_a^b g$
- **Chasles** : $\int_a^b f + \int_b^c f = \int_a^c f$
- **Positivité** : si $f \geq 0$ et $a \leq b$ alors $\int_a^b f \geq 0$
- **Croissance** : si $f \leq g$ et $a \leq b$, $\int_a^b f \leq \int_a^b g$` },
      { k: 'def', t: 'Valeur moyenne', c: t`$$\mu = \frac{1}{b - a}\int_a^b f(x)\,dx$$` },
      { k: 'thm', t: 'Intégration par parties (IPP)', c: t`Si $u$ et $v$ sont dérivables à dérivées continues :
$$\int_a^b u(x)v'(x)\,dx = \big[u(x)v(x)\big]_a^b - \int_a^b u'(x)v(x)\,dx$$` },
      { k: 'meth', t: 'Aire entre deux courbes', c: t`Si $f \geq g$ sur $[a;b]$, l'aire entre les deux courbes est $\int_a^b (f(x) - g(x))\,dx$.` },
      { k: 'thm', t: 'Fonction intégrale', c: t`Si $f$ est continue sur $I$ et $a \in I$, $F(x) = \int_a^x f(t)\,dt$ est **l'unique** primitive de $f$ qui s'annule en $a$.` },
      { k: 'ex', t: 'Exemple d\'IPP', c: t`$\int_0^1 xe^x\,dx$ : $u = x$, $v' = e^x$. On obtient $[xe^x]_0^1 - \int_0^1 e^x\,dx = e - (e - 1) = 1$.` },
    ],
    quiz: [
      { q: t`$\int_0^2 x\,dx$ = ?`, o: ['1', '2', '4', t`$\frac12$`], a: 1, e: t`$\left[\frac{x^2}{2}\right]_0^2 = 2$.` },
      { q: t`$\int_0^1 e^x\,dx$ = ?`, o: [t`$e$`, t`$e - 1$`, t`$1$`, t`$e + 1$`], a: 1, e: t`$[e^x]_0^1 = e - 1$.` },
      { q: t`Valeur moyenne de $f(x) = x^2$ sur $[0 ; 3]$ :`, o: ['3', '9', '1', '27'], a: 0, e: t`$\frac13 \int_0^3 x^2\,dx = \frac13 \times 9 = 3$.` },
      { q: t`$\int_1^e \frac{1}{x}\,dx$ = ?`, o: ['0', '1', t`$e$`, t`$e - 1$`], a: 1, e: t`$[\ln x]_1^e = 1 - 0$.` },
    ],
  },
  {
    id: 'espace',
    title: 'Vecteurs, droites et plans de l\'espace',
    theme: 'Géométrie',
    blocks: [
      { k: 'def', t: 'Colinéarité et coplanarité', c: t`- $\vec u$ et $\vec v$ sont **colinéaires** s'il existe $k$ tel que $\vec v = k\vec u$ (ou $\vec u = \vec 0$).
- $\vec u$, $\vec v$, $\vec w$ sont **coplanaires** s'il existe $a, b$ tels que $\vec w = a\vec u + b\vec v$ (avec $\vec u$, $\vec v$ non colinéaires).` },
      { k: 'def', t: 'Représentation paramétrique d\'une droite', c: t`La droite passant par $A(x_A ; y_A ; z_A)$ de vecteur directeur $\vec u(a ; b ; c)$ :
$$\begin{cases} x = x_A + at \\ y = y_A + bt \\ z = z_A + ct \end{cases} \quad t \in \mathbb{R}$$` },
      { k: 'def', t: 'Plan', c: t`Un plan est défini par un point $A$ et deux vecteurs non colinéaires $\vec u$, $\vec v$ : $M \in \mathcal{P} \iff \overrightarrow{AM} = s\vec u + t\vec v$.` },
      { k: 'prop', t: 'Positions relatives', c: t`- Deux droites : sécantes, parallèles (strictement ou confondues), ou **non coplanaires**.
- Droite et plan : sécants (un point), droite incluse, ou strictement parallèles.
- Deux plans : sécants (selon une droite) ou parallèles.` },
      { k: 'meth', t: 'Intersection de deux droites', c: t`On écrit les deux représentations avec des paramètres **différents** ($t$ et $s$), puis on résout le système. Pas de solution → droites parallèles ou non coplanaires.` },
    ],
    quiz: [
      { q: t`Deux droites de l'espace sans point commun sont :`, o: ['toujours parallèles', 'parallèles ou non coplanaires', 'sécantes', 'orthogonales'], a: 1, e: t`Dans l'espace, deux droites peuvent ne pas être dans un même plan.` },
      { q: t`Vecteur directeur de $\begin{cases}x = 1 + 2t \\ y = -t \\ z = 3\end{cases}$ :`, o: [t`$(1;0;3)$`, t`$(2;-1;0)$`, t`$(2;-1;3)$`, t`$(1;-1;0)$`], a: 1, e: t`Coefficients de $t$.` },
      { q: t`$\vec u(1;2;3)$ et $\vec v(-2;-4;-6)$ sont :`, o: ['colinéaires', 'orthogonaux', 'ni l\'un ni l\'autre'], a: 0, e: t`$\vec v = -2\vec u$.` },
    ],
  },
  {
    id: 'produit-scalaire',
    title: 'Produit scalaire et orthogonalité',
    theme: 'Géométrie',
    blocks: [
      { k: 'def', t: 'Produit scalaire', c: t`Dans un repère orthonormé, pour $\vec u(x;y;z)$ et $\vec v(x';y';z')$ :
$$\vec u \cdot \vec v = xx' + yy' + zz'$$
et $\|\vec u\| = \sqrt{x^2 + y^2 + z^2}$. Aussi $\vec u \cdot \vec v = \|\vec u\|\,\|\vec v\| \cos(\vec u, \vec v)$.` },
      { k: 'prop', t: 'Orthogonalité', c: t`$\vec u \perp \vec v \iff \vec u \cdot \vec v = 0$.

Une droite est orthogonale à un plan si elle est orthogonale à **deux droites sécantes** de ce plan.` },
      { k: 'def', t: 'Vecteur normal', c: t`Un vecteur $\vec n \neq \vec 0$ est **normal** au plan $\mathcal P$ s'il est orthogonal à deux vecteurs non colinéaires de $\mathcal P$.` },
      { k: 'thm', t: 'Équation cartésienne d\'un plan', c: t`Un plan de vecteur normal $\vec n(a;b;c)$ a une équation de la forme
$$ax + by + cz + d = 0$$
On trouve $d$ en remplaçant par les coordonnées d'un point du plan.` },
      { k: 'meth', t: 'Projeté orthogonal sur un plan', c: t`Pour projeter $M$ sur $\mathcal P$ : on écrit la droite passant par $M$ dirigée par $\vec n$, puis on cherche son intersection avec $\mathcal P$.

Distance de $M$ au plan = $MH$ où $H$ est le projeté.` },
    ],
    quiz: [
      { q: t`$\vec u(1;2;-1) \cdot \vec v(3;-1;1)$ = ?`, o: ['0', '2', '4', '-2'], a: 0, e: t`$3 - 2 - 1 = 0$ : les vecteurs sont orthogonaux.` },
      { q: t`Vecteur normal au plan $2x - y + 3z - 5 = 0$ :`, o: [t`$(2;-1;3)$`, t`$(2;1;3)$`, t`$(-5;0;0)$`, t`$(2;-1;-5)$`], a: 0, e: t`Coefficients de $x$, $y$, $z$.` },
      { q: t`Norme de $\vec u(2;-1;2)$ :`, o: ['3', '5', '9', t`$\sqrt5$`], a: 0, e: t`$\sqrt{4 + 1 + 4} = 3$.` },
    ],
  },
  {
    id: 'probas',
    title: 'Probabilités conditionnelles et loi binomiale',
    theme: 'Probabilités',
    blocks: [
      { k: 'def', t: 'Probabilité conditionnelle', c: t`$$P_A(B) = \frac{P(A \cap B)}{P(A)} \quad (P(A) \neq 0)$$` },
      { k: 'thm', t: 'Probabilités totales', c: t`Si $A_1, \dots, A_n$ forment une partition de l'univers :
$$P(B) = P(A_1 \cap B) + \dots + P(A_n \cap B)$$` },
      { k: 'def', t: 'Indépendance', c: t`$A$ et $B$ sont indépendants si $P(A \cap B) = P(A) \times P(B)$.` },
      { k: 'def', t: 'Schéma de Bernoulli', c: t`Répétition de $n$ épreuves de Bernoulli **identiques et indépendantes** de paramètre $p$. La variable $X$ qui compte les succès suit la **loi binomiale** $\mathcal{B}(n ; p)$.` },
      { k: 'thm', t: 'Loi binomiale', c: t`$$P(X = k) = \binom{n}{k} p^k (1 - p)^{n-k}$$
$$E(X) = np \qquad V(X) = np(1-p) \qquad \sigma(X) = \sqrt{np(1-p)}$$` },
      { k: 'meth', t: '« Au moins un »', c: t`$P(X \geq 1) = 1 - P(X = 0) = 1 - (1 - p)^n$.` },
    ],
    quiz: [
      { q: t`$X \sim \mathcal B(10 ; 0{,}3)$. $E(X)$ = ?`, o: ['0,3', '3', '2,1', '7'], a: 1, e: t`$np = 10 \times 0{,}3 = 3$.` },
      { q: t`$X \sim \mathcal B(4 ; 0{,}5)$. $P(X = 2)$ = ?`, o: [t`$\frac14$`, t`$\frac38$`, t`$\frac12$`, t`$\frac{1}{16}$`], a: 1, e: t`$\binom42 \times 0{,}5^4 = \frac{6}{16} = \frac38$.` },
      { q: t`$P(A) = 0{,}5$, $P_A(B) = 0{,}4$. $P(A \cap B)$ = ?`, o: ['0,9', '0,2', '0,8', '0,1'], a: 1, e: t`$P(A \cap B) = P(A) \times P_A(B)$.` },
      { q: t`$V(X)$ pour $X \sim \mathcal B(100 ; 0{,}2)$ :`, o: ['20', '16', '4', '80'], a: 1, e: t`$100 \times 0{,}2 \times 0{,}8 = 16$.` },
    ],
  },
  {
    id: 'va-concentration',
    title: 'Sommes de variables aléatoires, loi des grands nombres',
    theme: 'Probabilités',
    blocks: [
      { k: 'prop', t: 'Linéarité de l\'espérance', c: t`$E(X + Y) = E(X) + E(Y)$ et $E(aX + b) = aE(X) + b$.` },
      { k: 'prop', t: 'Variance', c: t`$V(aX + b) = a^2 V(X)$.

Si $X$ et $Y$ sont **indépendantes** : $V(X + Y) = V(X) + V(Y)$.` },
      { k: 'def', t: 'Échantillon', c: t`Un échantillon de taille $n$ est une liste $(X_1, \dots, X_n)$ de variables indépendantes de même loi. Avec $S_n = X_1 + \dots + X_n$ et $M_n = \frac{S_n}{n}$ :
$$E(S_n) = nE(X),\; V(S_n) = nV(X),\; E(M_n) = E(X),\; V(M_n) = \frac{V(X)}{n}$$` },
      { k: 'thm', t: 'Inégalité de Bienaymé-Tchebychev', c: t`Pour tout $\delta > 0$ :
$$P\big(|X - E(X)| \geq \delta\big) \leq \frac{V(X)}{\delta^2}$$` },
      { k: 'thm', t: 'Inégalité de concentration', c: t`$$P\big(|M_n - E(X)| \geq \delta\big) \leq \frac{V(X)}{n\delta^2}$$` },
      { k: 'thm', t: 'Loi faible des grands nombres', c: t`Pour tout $\delta > 0$ : $\lim_{n \to +\infty} P\big(|M_n - E(X)| \geq \delta\big) = 0$.

La moyenne d'un échantillon se rapproche de l'espérance quand $n$ grandit.` },
    ],
    quiz: [
      { q: t`$V(X) = 4$. $V(3X + 1)$ = ?`, o: ['12', '13', '36', '37'], a: 2, e: t`$V(aX + b) = a^2V(X) = 9 \times 4$.` },
      { q: t`$V(X) = 2$, majoration de $P(|X - E(X)| \geq 2)$ par Bienaymé-Tchebychev :`, o: ['1', '0,5', '0,25', '2'], a: 1, e: t`$\frac{V(X)}{\delta^2} = \frac24$.` },
      { q: t`$V(M_n)$ pour un échantillon de taille $n$ :`, o: [t`$nV(X)$`, t`$\frac{V(X)}{n}$`, t`$V(X)$`, t`$\frac{V(X)}{n^2}$`], a: 1, e: t`La dispersion de la moyenne diminue quand $n$ grandit.` },
    ],
  },
]
