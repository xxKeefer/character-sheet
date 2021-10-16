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
  protocol: Skill
  scholarship: Skill
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
export type SkillStats = SkillsBlockProps
