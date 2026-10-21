// Fiches méthode — Fonctions trigonométriques. Même format que suites.js.
const t = String.raw

export const fichesTrigo = {
  'trigo-valeurs': {
    quand: t`Calculer le cosinus ou le sinus d'un angle « remarquable » sans calculatrice : $\cos\frac{2\pi}{3}$, $\sin\frac{7\pi}{6}$…`,
    etapes: [
      t`Connaître les valeurs de base :
- $\cos 0 = 1$, $\cos\frac\pi6 = \frac{\sqrt3}{2}$, $\cos\frac\pi4 = \frac{\sqrt2}{2}$, $\cos\frac\pi3 = \frac12$, $\cos\frac\pi2 = 0$
- $\sin 0 = 0$, $\sin\frac\pi6 = \frac12$, $\sin\frac\pi4 = \frac{\sqrt2}{2}$, $\sin\frac\pi3 = \frac{\sqrt3}{2}$, $\sin\frac\pi2 = 1$`,
      t`Placer l'angle sur le **cercle trigonométrique** et repérer l'angle de référence dans $\left[0 ; \frac\pi2\right]$ ($\frac{2\pi}{3} = \pi - \frac\pi3$, $\frac{7\pi}{6} = \pi + \frac\pi6$…).`,
      t`Le cosinus se lit sur l'axe horizontal, le sinus sur l'axe vertical : le quadrant donne les **signes**.`,
    ],
    exemple: {
      enonce: t`Calculer $\cos\frac{2\pi}{3}$, $\sin\frac{5\pi}{6}$, $\cos\left(-\frac\pi4\right)$ et $\sin\frac{7\pi}{6}$.`,
      solution: t`- $\frac{2\pi}{3} = \pi - \frac\pi3$ (en haut à gauche) : $\cos\frac{2\pi}{3} = -\cos\frac\pi3 = -\frac12$.
- $\frac{5\pi}{6} = \pi - \frac\pi6$ (en haut à gauche) : $\sin\frac{5\pi}{6} = \sin\frac\pi6 = \frac12$.
- $\cos$ est paire : $\cos\left(-\frac\pi4\right) = \cos\frac\pi4 = \frac{\sqrt2}{2}$.
- $\frac{7\pi}{6} = \pi + \frac\pi6$ (en bas à gauche) : $\sin\frac{7\pi}{6} = -\sin\frac\pi6 = -\frac12$.`,
    },
    pieges: [
      t`Ne pas inverser $\cos\frac\pi6 = \frac{\sqrt3}{2}$ et $\cos\frac\pi3 = \frac12$ : plus l'angle grandit, plus le cosinus diminue.`,
    ],
    voir: ['trigo-formules', 'trigo-equation'],
  },

  'trigo-equation': {
    quand: t`Résoudre $\cos x = a$ ou $\sin x = a$, sur $\mathbb{R}$ ou sur un intervalle donné.`,
    etapes: [
      t`Trouver un angle remarquable $\theta$ tel que $\cos\theta = a$ (ou $\sin\theta = a$).`,
      t`Appliquer :
- $\cos x = \cos\theta \iff x = \theta + 2k\pi$ ou $x = -\theta + 2k\pi$
- $\sin x = \sin\theta \iff x = \theta + 2k\pi$ ou $x = \pi - \theta + 2k\pi$`,
      t`Sur un intervalle : ne garder que les valeurs qui y sont (en essayant $k = 0$, $1$, $-1$…). Le cercle trigonométrique permet de vérifier.`,
    ],
    exemple: {
      enonce: t`Résoudre $\cos x = \frac12$ sur $]-\pi ; \pi]$, puis $\sin x = -\frac{\sqrt2}{2}$ sur $[0 ; 2\pi[$.`,
      solution: t`- $\cos\frac\pi3 = \frac12$, donc $x = \frac\pi3$ ou $x = -\frac\pi3$ (modulo $2\pi$). Sur $]-\pi ; \pi]$ : $\mathcal S = \left\{-\frac\pi3 ; \frac\pi3\right\}$.
- $\sin\left(-\frac\pi4\right) = -\frac{\sqrt2}{2}$, donc $x = -\frac\pi4 + 2k\pi$ ou $x = \pi + \frac\pi4 + 2k\pi$. Sur $[0 ; 2\pi[$ : $\mathcal S = \left\{\frac{5\pi}{4} ; \frac{7\pi}{4}\right\}$.`,
    },
    pieges: [
      t`Il y a en général **deux** solutions par tour : ne pas en oublier une.`,
      t`Pour le sinus, la deuxième solution est $\pi - \theta$, pas $-\theta$.`,
    ],
    voir: ['trigo-valeurs', 'trigo-inequation'],
  },

  'trigo-inequation': {
    quand: t`Résoudre $\cos x \geq a$ ou $\sin x < a$ sur un intervalle (souvent pour le signe d'une dérivée).`,
    etapes: [
      t`Résoudre d'abord l'**équation** $\cos x = a$ (ou $\sin x = a$) sur l'intervalle.`,
      t`Sur le cercle, tracer la droite verticale $x = a$ (pour cos) ou horizontale $y = a$ (pour sin).`,
      t`Repérer l'arc de cercle qui vérifie l'inégalité, et le traduire en intervalle.`,
    ],
    exemple: {
      enonce: t`Résoudre $\cos x \geq \frac12$ sur $[-\pi ; \pi]$, puis $\sin x > \frac12$ sur $[0 ; 2\pi]$.`,
      solution: t`- $\cos x = \frac12$ pour $x = \pm\frac\pi3$. Le cosinus est plus grand que $\frac12$ sur l'arc à droite de la droite verticale : $\mathcal S = \left[-\frac\pi3 ; \frac\pi3\right]$.
- $\sin x = \frac12$ pour $x = \frac\pi6$ ou $\frac{5\pi}{6}$. Le sinus est plus grand sur l'arc au-dessus : $\mathcal S = \left]\frac\pi6 ; \frac{5\pi}{6}\right[$.`,
    },
    pieges: [
      t`Bien faire le dessin : c'est le moyen le plus sûr de ne pas se tromper d'arc.`,
    ],
    voir: ['trigo-equation', 'trigo-etude'],
  },

  'trigo-parite': {
    quand: t`« Montrer que $f$ est paire (impaire, périodique) » ou « justifier qu'on peut étudier $f$ sur $[0 ; \pi]$ ».`,
    etapes: [
      t`**Parité** : calculer $f(-x)$ avec $\cos(-x) = \cos x$ et $\sin(-x) = -\sin x$. Si $f(-x) = f(x)$, $f$ est paire (courbe symétrique par rapport à l'axe des ordonnées) ; si $f(-x) = -f(x)$, elle est impaire (symétrique par rapport à l'origine).`,
      t`**Périodicité** : calculer $f(x + T)$ et montrer que c'est $f(x)$. $\cos(ax)$ et $\sin(ax)$ sont $\frac{2\pi}{a}$-périodiques.`,
      t`**Conséquence** : une fonction paire et $2\pi$-périodique s'étudie sur $[0 ; \pi]$, puis on complète par symétrie et translation.`,
    ],
    exemple: {
      enonce: t`Soit $f(x) = \cos(2x) - 2\cos x$. Montrer qu'on peut l'étudier sur $[0 ; \pi]$.`,
      solution: t`**Parité** : $f(-x) = \cos(-2x) - 2\cos(-x) = \cos(2x) - 2\cos x = f(x)$. $f$ est paire.

**Périodicité** : $f(x + 2\pi) = \cos(2x + 4\pi) - 2\cos(x + 2\pi) = f(x)$. $f$ est $2\pi$-périodique.

On l'étudie donc sur $[0 ; \pi]$ ; on obtient la courbe sur $[-\pi ; \pi]$ par symétrie par rapport à l'axe des ordonnées, puis sur $\mathbb{R}$ par translations de $2\pi$.`,
    },
    pieges: [
      t`Il faut un ensemble de définition symétrique par rapport à 0 pour parler de parité.`,
    ],
    voir: ['trigo-etude'],
  },

  'trigo-formules': {
    quand: t`Connaissant $\sin x$, trouver $\cos x$ (ou l'inverse), ou simplifier $\cos(\pi - x)$, $\sin\left(\frac\pi2 - x\right)$…`,
    etapes: [
      t`$\cos^2 x + \sin^2 x = 1$, donc $\cos^2 x = 1 - \sin^2 x$.`,
      t`Pour choisir le signe de la racine, regarder dans quel **quadrant** est $x$.`,
      t`Angles associés :
- $\cos(\pi - x) = -\cos x$, $\sin(\pi - x) = \sin x$
- $\cos(\pi + x) = -\cos x$, $\sin(\pi + x) = -\sin x$
- $\cos\left(\frac\pi2 - x\right) = \sin x$, $\sin\left(\frac\pi2 - x\right) = \cos x$`,
    ],
    exemple: {
      enonce: t`On sait que $\sin x = \frac35$ et $x \in \left[\frac\pi2 ; \pi\right]$. Calculer $\cos x$.`,
      solution: t`$\cos^2 x = 1 - \sin^2 x = 1 - \dfrac{9}{25} = \dfrac{16}{25}$, donc $\cos x = \dfrac45$ ou $\cos x = -\dfrac45$.

Comme $x \in \left[\frac\pi2 ; \pi\right]$, $\cos x \leq 0$. Donc $\cos x = -\dfrac45$.`,
    },
    pieges: [
      t`Ne pas oublier de choisir le signe : $\sqrt{\frac{16}{25}}$ donne deux possibilités.`,
    ],
    voir: ['trigo-valeurs', 'cx-trigo'],
  },

  'trigo-deriver': {
    quand: t`Dériver une fonction avec $\cos$, $\sin$, $\cos(ax + b)$, $\sin^2 x$…`,
    etapes: [
      t`$(\cos x)' = -\sin x$ et $(\sin x)' = \cos x$.`,
      t`$(\cos(ax + b))' = -a\sin(ax + b)$ et $(\sin(ax + b))' = a\cos(ax + b)$.`,
      t`Pour $\sin^2 x = (\sin x)^2$ : formule $(u^2)' = 2u'u$.`,
    ],
    exemple: {
      enonce: t`Dériver $f(x) = 3\cos\left(2x - \frac\pi3\right)$, $g(x) = \sin^2 x$ et $h(x) = x\cos x$.`,
      solution: t`- $f'(x) = 3 \times \left(-2\sin\left(2x - \frac\pi3\right)\right) = -6\sin\left(2x - \frac\pi3\right)$.
- $g'(x) = 2\cos x \sin x$.
- $h'(x) = \cos x - x\sin x$ (produit).`,
    },
    pieges: [
      t`Le signe moins de $(\cos x)' = -\sin x$ est l'oubli classique.`,
      t`Ne pas oublier le facteur $a$ dans $\cos(ax + b)$.`,
    ],
    voir: ['der-composee', 'trigo-etude'],
  },

  'trigo-etude': {
    quand: t`Étude complète d'une fonction trigonométrique sur un intervalle (souvent après une réduction par parité et périodicité).`,
    etapes: [
      t`Réduire l'intervalle d'étude si possible (parité, périodicité).`,
      t`Calculer $f'(x)$.`,
      t`Étudier son signe : cela revient souvent à une **inéquation trigonométrique** ($\sin x < \frac12$…), qu'on résout avec le cercle.`,
      t`Dresser le tableau de variations avec les valeurs exactes.`,
    ],
    exemple: {
      enonce: t`Étudier les variations de $f(x) = x + 2\cos x$ sur $[0 ; \pi]$.`,
      solution: t`$f'(x) = 1 - 2\sin x$, et $f'(x) > 0 \iff \sin x < \frac12$.

Sur $[0 ; \pi]$, $\sin x = \frac12$ pour $x = \frac\pi6$ et $x = \frac{5\pi}{6}$. Donc $f' > 0$ sur $\left[0 ; \frac\pi6\right[$ et $\left]\frac{5\pi}{6} ; \pi\right]$, et $f' < 0$ sur $\left]\frac\pi6 ; \frac{5\pi}{6}\right[$.

Valeurs : $f(0) = 2$, $f\left(\frac\pi6\right) = \frac\pi6 + \sqrt3$, $f\left(\frac{5\pi}{6}\right) = \frac{5\pi}{6} - \sqrt3$, $f(\pi) = \pi - 2$.

$f$ est croissante sur $\left[0 ; \frac\pi6\right]$, décroissante sur $\left[\frac\pi6 ; \frac{5\pi}{6}\right]$, croissante sur $\left[\frac{5\pi}{6} ; \pi\right]$.`,
    },
    pieges: [
      t`$\cos\frac{5\pi}{6} = -\frac{\sqrt3}{2}$ (négatif) : attention aux signes dans les valeurs.`,
    ],
    voir: ['trigo-inequation', 'trigo-deriver', 'der-variations'],
  },

  'trigo-limite': {
    quand: t`Limite en 0 avec $\sin$ ou $\cos$ qui donne $\frac00$ : $\dfrac{\sin(3x)}{x}$, $\dfrac{\cos x - 1}{x}$…`,
    etapes: [
      t`Retenir : $\lim\limits_{x \to 0} \dfrac{\sin x}{x} = 1$ (c'est le nombre dérivé de $\sin$ en 0).`,
      t`Méthode 1 : faire apparaître $\dfrac{\sin X}{X}$ avec $X \to 0$.`,
      t`Méthode 2 : reconnaître un taux d'accroissement $\dfrac{f(x) - f(0)}{x}$, qui tend vers $f'(0)$.`,
    ],
    exemple: {
      enonce: t`Calculer $\lim\limits_{x \to 0} \dfrac{\sin(3x)}{x}$ et $\lim\limits_{x \to 0} \dfrac{\cos x - 1}{x}$.`,
      solution: t`- $\dfrac{\sin(3x)}{x} = 3 \times \dfrac{\sin(3x)}{3x}$. Avec $X = 3x \to 0$, $\dfrac{\sin X}{X} \to 1$, donc la limite est **3**.
- $\dfrac{\cos x - 1}{x} = \dfrac{\cos x - \cos 0}{x - 0}$ : c'est le taux d'accroissement de $\cos$ en 0. Il tend vers $\cos'(0) = -\sin 0 = $ **0**.`,
    },
    pieges: [
      t`$\dfrac{\sin(3x)}{x}$ ne tend pas vers 1 : il faut le facteur 3.`,
    ],
    voir: ['lim-taux', 'lim-comparaison'],
  },
}
