// Fiches méthode — Sommes de variables aléatoires, concentration, loi des grands nombres.
// Même format que suites.js.
const t = String.raw

export const fichesVa = {
  'va-affine': {
    quand: t`On connaît $E(X)$ et $V(X)$, et on étudie $Y = aX + b$ (un gain transformé, un changement d'unité…).`,
    etapes: [
      t`$E(aX + b) = aE(X) + b$.`,
      t`$V(aX + b) = a^2 V(X)$ : le $b$ disparaît, le $a$ est **au carré**.`,
      t`$\sigma(aX + b) = |a|\,\sigma(X)$.`,
    ],
    exemple: {
      enonce: t`$E(X) = 1{,}2$ et $V(X) = 0{,}36$. On pose $Y = 5X - 2$. Calculer $E(Y)$, $V(Y)$ et $\sigma(Y)$.`,
      solution: t`- $E(Y) = 5 \times 1{,}2 - 2 = 4$
- $V(Y) = 5^2 \times 0{,}36 = 9$
- $\sigma(Y) = \sqrt9 = 3$`,
    },
    pieges: [
      t`$V(5X - 2) \neq 5V(X) - 2$ : c'est $25\,V(X)$.`,
    ],
    voir: ['pb-esperance', 'va-somme'],
  },

  'va-somme': {
    quand: t`On ajoute (ou soustrait) deux variables aléatoires : $X + Y$, $X - Y$.`,
    etapes: [
      t`**Espérance** : toujours $E(X + Y) = E(X) + E(Y)$ et $E(X - Y) = E(X) - E(Y)$.`,
      t`**Variance** : seulement si $X$ et $Y$ sont **indépendantes**, $V(X + Y) = V(X) + V(Y)$.`,
      t`Et aussi $V(X - Y) = V(X) + V(Y)$ (les variances s'ajoutent toujours).`,
    ],
    exemple: {
      enonce: t`$X$ et $Y$ sont indépendantes, avec $E(X) = 2$, $V(X) = 1$, $E(Y) = -1$, $V(Y) = 4$. Calculer l'espérance et la variance de $X + Y$ et de $X - Y$.`,
      solution: t`- $E(X + Y) = 2 + (-1) = 1$ et $V(X + Y) = 1 + 4 = 5$.
- $E(X - Y) = 2 - (-1) = 3$ et $V(X - Y) = V(X) + (-1)^2 V(Y) = 1 + 4 = 5$.`,
    },
    pieges: [
      t`$V(X - Y) \neq V(X) - V(Y)$ : une variance ne peut pas diminuer en ajoutant du hasard.`,
      t`Sans indépendance, on ne peut pas additionner les variances.`,
    ],
    voir: ['va-affine', 'va-decomposer'],
  },

  'va-decomposer': {
    quand: t`Une variable compliquée est la somme de plusieurs variables simples : somme de plusieurs dés, nombre de succès, gain total sur plusieurs parties.`,
    etapes: [
      t`Écrire $S = X_1 + X_2 + \dots + X_n$ où chaque $X_i$ est simple (un dé, une épreuve de Bernoulli…).`,
      t`Calculer $E(X_i)$ et $V(X_i)$ pour une seule variable.`,
      t`Linéarité : $E(S) = E(X_1) + \dots + E(X_n)$. Si les $X_i$ sont indépendantes : $V(S) = V(X_1) + \dots + V(X_n)$.`,
    ],
    exemple: {
      enonce: t`On lance 3 dés équilibrés. $S$ est la somme des résultats. Calculer $E(S)$ et $V(S)$.`,
      solution: t`$S = X_1 + X_2 + X_3$ où $X_i$ est le résultat du $i$-ème dé, et les $X_i$ sont indépendantes.

Pour un dé : $E(X_i) = \dfrac{1 + 2 + \dots + 6}{6} = 3{,}5$ et $E(X_i^2) = \dfrac{1 + 4 + \dots + 36}{6} = \dfrac{91}{6}$, donc $V(X_i) = \dfrac{91}{6} - 3{,}5^2 = \dfrac{35}{12}$.

Donc $E(S) = 3 \times 3{,}5 = 10{,}5$ et $V(S) = 3 \times \dfrac{35}{12} = \dfrac{35}{4}$.`,
    },
    pieges: [
      t`C'est aussi comme ça qu'on démontre $E(X) = np$ pour une loi binomiale : somme de $n$ variables de Bernoulli d'espérance $p$.`,
    ],
    voir: ['va-somme', 'va-echantillon'],
  },

  'va-echantillon': {
    quand: t`On répète $n$ fois la même expérience : « échantillon de taille $n$ », avec la somme $S_n$ ou la moyenne $M_n$.`,
    etapes: [
      t`Un échantillon $(X_1, \dots, X_n)$ : variables **indépendantes** et de **même loi** que $X$.`,
      t`Somme $S_n = X_1 + \dots + X_n$ : $E(S_n) = nE(X)$ et $V(S_n) = nV(X)$.`,
      t`Moyenne $M_n = \dfrac{S_n}{n}$ : $E(M_n) = E(X)$ et $V(M_n) = \dfrac{V(X)}{n}$.`,
    ],
    exemple: {
      enonce: t`On lance 100 fois un dé ($E(X) = 3{,}5$, $V(X) = \frac{35}{12}$). Calculer l'espérance et la variance de la somme $S_{100}$ et de la moyenne $M_{100}$.`,
      solution: t`- $E(S_{100}) = 100 \times 3{,}5 = 350$ et $V(S_{100}) = 100 \times \dfrac{35}{12} = \dfrac{875}{3} \approx 291{,}7$.
- $E(M_{100}) = 3{,}5$ et $V(M_{100}) = \dfrac{35/12}{100} = \dfrac{7}{240} \approx 0{,}029$.`,
    },
    pieges: [
      t`$V(M_n) = \dfrac{V(X)}{n}$ et non $\dfrac{V(X)}{n^2}$ : c'est $\dfrac{1}{n^2} \times V(S_n) = \dfrac{1}{n^2} \times nV(X)$.`,
    ],
    voir: ['va-decomposer', 'va-concentration'],
  },

  'va-bt': {
    quand: t`« Majorer la probabilité que $X$ s'écarte de son espérance d'au moins $\delta$ » : inégalité de Bienaymé-Tchebychev.`,
    etapes: [
      t`Calculer (ou lire) $E(X)$ et $V(X)$.`,
      t`Repérer l'écart $\delta$ dans l'événement $|X - E(X)| \geq \delta$.`,
      t`Appliquer $P\big(|X - E(X)| \geq \delta\big) \leq \dfrac{V(X)}{\delta^2}$.`,
    ],
    exemple: {
      enonce: t`$X$ a pour espérance 50 et pour variance 25. Majorer $P(|X - 50| \geq 10)$.`,
      solution: t`D'après l'inégalité de Bienaymé-Tchebychev avec $\delta = 10$ :
$$P(|X - 50| \geq 10) \leq \frac{25}{10^2} = 0{,}25$$`,
    },
    pieges: [
      t`On divise par $\delta^2$, pas par $\delta$.`,
      t`Le résultat n'est qu'une **majoration**, souvent grossière.`,
    ],
    voir: ['va-bt-intervalle', 'va-concentration'],
  },

  'va-bt-intervalle': {
    quand: t`« Minorer la probabilité que $X$ soit dans l'intervalle $]40 ; 60[$ » (intervalle centré sur l'espérance).`,
    etapes: [
      t`Vérifier que l'intervalle est **centré** sur $E(X)$ et réécrire : $40 < X < 60 \iff |X - 50| < 10$.`,
      t`Passer à l'événement contraire : $P(|X - 50| < 10) = 1 - P(|X - 50| \geq 10)$.`,
      t`Appliquer Bienaymé-Tchebychev à l'événement contraire, puis conclure par une minoration.`,
    ],
    exemple: {
      enonce: t`$E(X) = 50$ et $V(X) = 25$. Minorer $P(40 < X < 60)$.`,
      solution: t`$40 < X < 60 \iff |X - 50| < 10$. Donc
$$P(40 < X < 60) = 1 - P(|X - 50| \geq 10)$$
Par Bienaymé-Tchebychev, $P(|X - 50| \geq 10) \leq 0{,}25$.

Donc $P(40 < X < 60) \geq 1 - 0{,}25 = 0{,}75$.`,
    },
    pieges: [
      t`Si l'intervalle n'est pas centré sur l'espérance, la méthode ne s'applique pas directement.`,
      t`On obtient un **minorant** ($\geq$), pas une valeur exacte.`,
    ],
    voir: ['va-bt'],
  },

  'va-concentration': {
    quand: t`On s'intéresse à la **moyenne** $M_n$ d'un échantillon : « majorer la probabilité que la moyenne s'écarte de $E(X)$ d'au moins $\delta$ ».`,
    etapes: [
      t`Identifier $E(X)$, $V(X)$, la taille $n$ et l'écart $\delta$.`,
      t`Appliquer l'inégalité de concentration : $P\big(|M_n - E(X)| \geq \delta\big) \leq \dfrac{V(X)}{n\delta^2}$.`,
    ],
    exemple: {
      enonce: t`On lance 1000 fois un dé ($E(X) = 3{,}5$, $V(X) = \frac{35}{12}$). Majorer la probabilité que la moyenne des résultats s'écarte de 3,5 d'au moins 0,1.`,
      solution: t`D'après l'inégalité de concentration avec $n = 1000$ et $\delta = 0{,}1$ :
$$\begin{aligned} P(|M_{1000} - 3{,}5| \geq 0{,}1) &\leq \frac{35/12}{1000 \times 0{,}1^2} \\ &\approx 0{,}29 \end{aligned}$$`,
    },
    pieges: [
      t`C'est Bienaymé-Tchebychev appliquée à $M_n$, dont la variance est $\dfrac{V(X)}{n}$ : d'où le $n$ au dénominateur.`,
    ],
    voir: ['va-echantillon', 'va-taille', 'va-bt'],
  },

  'va-taille': {
    quand: t`« Déterminer la taille $n$ de l'échantillon pour que la probabilité que la moyenne s'écarte de plus de $\delta$ soit inférieure à $\alpha$ ».`,
    etapes: [
      t`Écrire l'inégalité de concentration : la probabilité est $\leq \dfrac{V(X)}{n\delta^2}$.`,
      t`Il **suffit** que $\dfrac{V(X)}{n\delta^2} \leq \alpha$.`,
      t`Résoudre en $n$ : $n \geq \dfrac{V(X)}{\alpha\delta^2}$, et prendre le premier entier.`,
    ],
    exemple: {
      enonce: t`Avec un dé ($V(X) = \frac{35}{12}$), combien de lancers faut-il pour être sûr que la probabilité que la moyenne s'écarte de 3,5 d'au moins 0,1 soit au plus 0,05 ?`,
      solution: t`Il suffit que $\dfrac{35/12}{n \times 0{,}1^2} \leq 0{,}05$, c'est-à-dire
$$n \geq \frac{35/12}{0{,}05 \times 0{,}01} \approx 5833{,}3$$
Il suffit de faire **5834 lancers**.`,
    },
    pieges: [
      t`On répond « il suffit de… » : l'inégalité donne une condition suffisante, pas forcément la plus petite taille possible.`,
    ],
    voir: ['va-concentration'],
  },

  'va-lgn': {
    quand: t`« Interpréter », « que se passe-t-il quand $n$ devient grand ? » : loi faible des grands nombres.`,
    etapes: [
      t`Énoncé : pour tout $\delta > 0$, $\lim\limits_{n \to +\infty} P\big(|M_n - E(X)| \geq \delta\big) = 0$.`,
      t`Traduction : plus l'échantillon est grand, plus la moyenne $M_n$ a de chances d'être proche de l'espérance.`,
      t`Cas des fréquences : si $X$ vaut 1 en cas de succès et 0 sinon, $M_n$ est la fréquence des succès, qui se rapproche de $p$.`,
    ],
    exemple: {
      enonce: t`On lance un dé $n$ fois et on note $F_n$ la fréquence d'apparition du 6. Que dit la loi des grands nombres ?`,
      solution: t`$F_n$ est la moyenne de $n$ variables de Bernoulli de paramètre $p = \frac16$, d'espérance $\frac16$ et de variance $\frac16 \times \frac56 = \frac{5}{36}$.

D'après la loi des grands nombres, pour tout $\delta > 0$ :
$$\lim_{n \to +\infty} P\left(\left|F_n - \frac16\right| \geq \delta\right) = 0$$
La fréquence du 6 se rapproche de $\frac16$ quand le nombre de lancers augmente. C'est ce qui justifie l'estimation d'une probabilité par une fréquence.`,
    },
    pieges: [
      t`La loi des grands nombres ne dit pas que $F_n = \frac16$ exactement, ni que les résultats « se compensent » à court terme.`,
    ],
    voir: ['va-concentration', 'py-simulation'],
  },
}
