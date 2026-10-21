// Toutes les fiches méthode, indexées par l'id du catalogue (data/methodes.js).
import { fichesSuites } from './suites.js'
import { fichesLimites } from './limites.js'
import { fichesDerivation } from './derivation.js'
import { fichesContinuite } from './continuite.js'
import { fichesLogarithme } from './logarithme.js'
import { fichesTrigo } from './trigo.js'
import { fichesPrimitives } from './primitives.js'
import { fichesIntegrales } from './integrales.js'
import { fichesProbas } from './probas.js'
import { fichesVa } from './va.js'
import { fichesEspace } from './espace.js'
import { fichesProduitScalaire } from './produitScalaire.js'
import { fichesRaisonnement } from './raisonnement.js'
import { fichesCombinatoire } from './combinatoire.js'
import { fichesPython } from './python.js'
import { fichesComplexesAlgebrique } from './complexesAlgebrique.js'
import { fichesComplexesGeometrie } from './complexesGeometrie.js'
import { fichesDivisibilite } from './divisibilite.js'
import { fichesPgcd } from './pgcd.js'
import { fichesMatrices } from './matrices.js'
import { fichesGraphes } from './graphes.js'

export const fiches = {
  ...fichesRaisonnement,
  ...fichesCombinatoire,
  ...fichesSuites,
  ...fichesLimites,
  ...fichesDerivation,
  ...fichesContinuite,
  ...fichesLogarithme,
  ...fichesTrigo,
  ...fichesPrimitives,
  ...fichesIntegrales,
  ...fichesProbas,
  ...fichesVa,
  ...fichesEspace,
  ...fichesProduitScalaire,
  ...fichesPython,
  ...fichesComplexesAlgebrique,
  ...fichesComplexesGeometrie,
  ...fichesDivisibilite,
  ...fichesPgcd,
  ...fichesMatrices,
  ...fichesGraphes,
}
