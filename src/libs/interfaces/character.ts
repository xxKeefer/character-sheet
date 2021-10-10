export interface NameBlockProps {
  name: string
  star: string
  omens: OmenCount | OmenCoin
}

interface OmenCount {
  dark: number
  light: number
}

interface OmenCoin {
  string: 'Coin'
}

export interface AspectBlockProps {
  highConcept: string
  trouble: string
  profession: string
  reputation: string
  loyalty: string
}

export interface BoonBlockProps {
  name: string
  description: string
}

export interface Skill {
  rank: number | 0
  modifier: number | 0
  total: number
  domain?: string | 'X'
}

export interface SpecificSkill extends Skill {
  domain: string | 'X'
}

export interface ExpertiseSkills {
  alertness: Skill
  burglary: Skill
  investigation: Skill
  pilot: SpecificSkill
  shoot: Skill
  sneak: Skill
}

export interface KnowledgeSkills {
  craft: SpecificSkill
  knowledge: SpecificSkill
  lore: Skill
  medicine: Skill
  scholarship: Skill
  survival: Skill
}

export interface PhysicalSkills {
  acrobatics: Skill
  athletics: Skill
  conviction: Skill
  endurance: Skill
  might: Skill
  strike: Skill
}

export interface SocialSkills {
  deception: Skill
  gossip: Skill
  intimidation: Skill
  presence: Skill
  rapport: Skill
  networking: Skill
}

export type SkillsBlock = ExpertiseSkills | KnowledgeSkills | PhysicalSkills | SocialSkills

export type SkillEntry = [string, Skill]

export interface SkillsBlockProps {
  expertise: ExpertiseSkills
  knowledge: KnowledgeSkills
  physical: PhysicalSkills
  social: SocialSkills
}

export interface EquipmentDetails {
  name: string
  effect?: string
  description?: string
  type: EquipmentType
}

export type EquipmentType = 'Boon' | 'Feat' | 'Gear' | 'Scar'

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
