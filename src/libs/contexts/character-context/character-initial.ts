import { Character, Skill, ExpertiseSkills, KnowledgeSkills, PhysicalSkills, SocialSkills } from '../../interfaces'

const noSkill: Skill = {
  total: 0,
  rank: 0,
  modifier: 0,
}

const expertise: ExpertiseSkills = {
  alertness: { ...noSkill },
  burglary: { ...noSkill },
  investigation: { ...noSkill },
  pilot: { ...noSkill, domain: 'X' },
  shoot: { ...noSkill },
  sneak: { ...noSkill },
}

const knowledge: KnowledgeSkills = {
  craft: { ...noSkill, domain: 'X' },
  knowledge: { ...noSkill, domain: 'X' },
  lore: { ...noSkill },
  medicine: { ...noSkill },
  protocol: { ...noSkill },
  scholarship: { ...noSkill },
}

const physical: PhysicalSkills = {
  acrobatics: { ...noSkill },
  athletics: { ...noSkill },
  conviction: { ...noSkill },
  endurance: { ...noSkill },
  might: { ...noSkill },
  strike: { ...noSkill },
}

const social: SocialSkills = {
  deception: { ...noSkill },
  gossip: { ...noSkill },
  intimidation: { ...noSkill },
  presence: { ...noSkill },
  rapport: { ...noSkill },
  networking: { ...noSkill },
}

export const newCharacter: Character = {
  core: {
    powerLevel: 3,
    buildPoints: {
      total: 0,
      unspent: 0,
    },
    skillPoints: {
      total: 30,
      unspent: 30,
    },
    omen: {
      starSign: 'The Agnostic',
      description: 'The standard array. 5 omens. 3 dark, 2 light.',
      omens: {
        state: 'Neutral',
        light: 2,
        dark: 3,
      },
    },
    name: '',
  },
  aspects: {
    highConcept: '',
    trouble: '',
    profession: '',
    reputation: '',
    loyalty: '',
  },
  consequences: {
    boxes: {
      total: 10,
      unspent: 10,
    },
    damageTracks: {
      minor: {
        maximum: 0,
        current: 0,
      },
      moderate: {
        maximum: 0,
        current: 0,
      },
      major: {
        maximum: 0,
        current: 0,
      },
      severe: {
        maximum: 0,
        current: 0,
      },
      drastic: {
        maximum: 0,
        current: 0,
      },
    },
  },
  equipment: [],
  skills: { expertise, knowledge, physical, social },
}
export default newCharacter
