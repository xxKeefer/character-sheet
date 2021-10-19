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

export interface CharacterActions {
  setCore: React.Dispatch<React.SetStateAction<CoreStats>>
  setAspects: React.Dispatch<React.SetStateAction<AspectStats>>
  setConsequences: React.Dispatch<React.SetStateAction<ConsequenceStats>>
  setEquipment: React.Dispatch<React.SetStateAction<EquipmentStats>>
  setSkills: React.Dispatch<React.SetStateAction<SkillStats>>
}

export interface CharacterSheet {
  values: Character
  actions: CharacterActions
}
