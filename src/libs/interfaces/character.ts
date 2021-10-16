import { CoreStats } from './core'
import { AspectStats } from './aspects'
import { ConsequenceStats } from './consequences'
import { EquipmentStats } from './equips'
import { SkillStats } from './skills'

export interface Character {
  core: CoreStats
  aspects: AspectStats
  consequences: ConsequenceStats
  equipment: EquipmentStats
  skills: SkillStats
}
