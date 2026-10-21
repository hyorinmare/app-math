// Fiches méthode — Raisonnement et rédaction. Même format que suites.js.
const t = String.raw

export const fichesRaisonnement = {
  'rai-absurde': {
    quand: t`On veut montrer qu'une chose est **impossible** (« n'est pas rationnel », « n'est pas majorée », « il n'existe pas… »), et la preuve directe ne vient pas.`,
    etapes: [
      t`Écrire : « **Supposons par l'absurde** que… » (le contraire de ce qu'on veut montrer).`,
      t`Dérouler les conséquences de cette hypothèse avec des arguments valides.`,
      t`Arriver à une **contradiction** (avec l'hypothèse, avec un résultat connu, ou une impossibilité comme $0 = 1$).`,
      t`Conclure : « l'hypothèse est donc fausse, et… ».`,
    ],
    exemple: {
      enonce: t`Montrer que $\sqrt2$ n'est pas un nombre rationnel.`,
      solution: t`Supposons par l'absurde que $\sqrt2 = \dfrac pq$ avec $p$, $q$ entiers et la fraction **irréductible**.

Alors $p^2 = 2q^2$ : $p^2$ est pair, donc $p$ est pair (voir la contraposée). On écrit $p = 2k$.

Alors $4k^2 = 2q^2$, soit $q^2 = 2k^2$ : $q^2$ est pair, donc $q$ est pair.

$p$ et $q$ sont tous deux pairs : la fraction n'est pas irréductible. C'est une contradiction.

Donc $\sqrt2$ n'est pas rationnel.`,
    },
    pieges: [
      t`Bien annoncer « par l'absurde » au début : sinon le correcteur croit qu'on affirme quelque chose de faux.`,
    ],
    voir: ['rai-contraposee', 'suite-diverge'],
  },

  'rai-contraposee': {
    quand: t`On doit montrer « si $P$ alors $Q$ », mais il est plus simple de partir de « non $Q$ » (souvent quand $Q$ est une propriété « positive » comme « $n$ est pair »).`,
    etapes: [
      t`La contraposée de « $P \Rightarrow Q$ » est « non $Q \Rightarrow$ non $P$ » : elles sont **équivalentes**.`,
      t`Annoncer : « Montrons la contraposée : si non $Q$, alors non $P$ ».`,
      t`Démontrer cette implication directement.`,
    ],
    exemple: {
      enonce: t`Montrer que pour tout entier $n$ : si $n^2$ est pair, alors $n$ est pair.`,
      solution: t`Montrons la contraposée : si $n$ est impair, alors $n^2$ est impair.

Si $n$ est impair, $n = 2k + 1$ avec $k$ entier. Alors
$$n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$$
qui est impair.

La contraposée est vraie, donc la propriété aussi : si $n^2$ est pair, $n$ est pair.`,
    },
    pieges: [
      t`Ne pas confondre la contraposée (« non $Q \Rightarrow$ non $P$ », toujours équivalente) et la **réciproque** (« $Q \Rightarrow P$ », qui peut être fausse).`,
    ],
    voir: ['rai-absurde', 'rai-cas'],
  },

  'rai-contre-exemple': {
    quand: t`« Vrai ou faux ? Justifier » : une affirmation du type « pour tout… » semble douteuse.`,
    etapes: [
      t`Pour montrer qu'une affirmation « pour tout $x$, … » est **fausse**, il suffit d'**un seul** contre-exemple.`,
      t`Chercher parmi les cas simples ou « limites » : 0, 1, des valeurs négatives, des suites classiques…`,
      t`Présenter le contre-exemple avec le calcul qui montre que l'affirmation échoue.`,
      t`Pour montrer qu'elle est **vraie**, en revanche, des exemples ne suffisent pas : il faut une démonstration.`,
    ],
    exemple: {
      enonce: t`Vrai ou faux ? 1) « Pour tout entier $n$, $n^2 + n + 41$ est premier. » 2) « Toute suite croissante tend vers $+\infty$. »`,
      solution: t`1) **Faux.** Pour $n = 40$ : $40^2 + 40 + 41 = 1681 = 41^2$, qui n'est pas premier. (Pourtant, c'est vrai pour $n$ de 0 à 39 !)

2) **Faux.** $u_n = 1 - \dfrac{1}{n + 1}$ est croissante, mais tend vers 1.`,
    },
    pieges: [
      t`Vérifier plusieurs exemples qui marchent ne prouve **rien** (cf. $n^2 + n + 41$).`,
    ],
    voir: ['rai-absurde', 'suite-conv-monotone'],
  },

  'rai-cas': {
    quand: t`La propriété dépend d'une situation : $n$ pair ou impair, $x$ positif ou négatif, reste de la division par 3…`,
    etapes: [
      t`Lister des cas qui **couvrent toutes** les possibilités (pair / impair ; $x \geq 0$ / $x < 0$…).`,
      t`Démontrer la propriété dans chaque cas séparément.`,
      t`Conclure : « dans tous les cas, … ».`,
    ],
    exemple: {
      enonce: t`Montrer que pour tout entier $n$, $n^2 + n$ est pair.`,
      solution: t`- **Si $n$ est pair**, $n = 2k$ : $n^2 + n = 4k^2 + 2k = 2(2k^2 + k)$, pair.
- **Si $n$ est impair**, $n = 2k + 1$ : $n^2 + n = 4k^2 + 4k + 1 + 2k + 1 = 2(2k^2 + 3k + 1)$, pair.

Dans tous les cas, $n^2 + n$ est pair.

(Autre méthode : $n^2 + n = n(n + 1)$ est le produit de deux entiers consécutifs, dont l'un est pair.)`,
    },
    pieges: [
      t`Ne pas oublier de cas : les cas doivent recouvrir **toutes** les possibilités.`,
    ],
    voir: ['ar-tableau', 'rai-contraposee'],
  },

  'rai-equivalence': {
    quand: t`Résoudre une équation ou une inéquation en rédigeant proprement : quand écrire $\iff$, quand écrire $\Rightarrow$ ?`,
    etapes: [
      t`Écrire $\iff$ seulement si chaque étape est **réversible** (ajouter, multiplier par un nombre non nul, appliquer une fonction strictement monotone).`,
      t`Si une étape n'est pas réversible (élever au carré, multiplier par une expression qui peut s'annuler), écrire $\Rightarrow$.`,
      t`Avec des $\Rightarrow$, on obtient seulement des **candidats** : il faut les **vérifier** à la fin.`,
    ],
    exemple: {
      enonce: t`Résoudre $\sqrt{x + 2} = x$ sur $[-2 ; +\infty[$.`,
      solution: t`On élève au carré (étape non réversible) :
$$\sqrt{x + 2} = x \Rightarrow x + 2 = x^2 \Rightarrow x^2 - x - 2 = 0$$
d'où $x = 2$ ou $x = -1$.

Vérification : $\sqrt{2 + 2} = 2$ ✓ ; mais $\sqrt{-1 + 2} = 1 \neq -1$ ✗.

$\mathcal S = \{2\}$.`,
    },
    pieges: [
      t`Élever au carré peut **ajouter** des solutions fausses : toujours vérifier.`,
    ],
    voir: ['ln-equation', 'suite-point-fixe'],
  },
}
