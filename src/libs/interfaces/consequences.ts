import { PointsData } from './common'

export interface Consequences {
  minor: ConsequenceType
  moderate: ConsequenceType
  major: ConsequenceType
  severe: ConsequenceType
  drastic: ConsequenceType
}

export interface ConsequenceType {
  maximum: number
  current: number
}

export type ConsequenceEntry = [keyof Consequences, ConsequenceType]
export interface ConsequenceStats {
  boxes: PointsData
  damageTracks: Consequences
}
