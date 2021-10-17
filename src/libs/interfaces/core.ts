import { PointsData } from './common'
export interface CoreStats {
  powerLevel: number
  buildPoints: PointsData
  skillPoints: PointsData
  omen: Omen
  name: string
}
export interface Omen {
  starSign: string
  description: string
  omens: OmenLayout
}

interface OmenLayout {
  state: OmenState
  light: number
  dark: number
}

type OmenState = 'Blessed' | 'Cursed' | 'Neutral'
