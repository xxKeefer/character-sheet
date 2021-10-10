import { Box } from '@chakra-ui/layout'
import { AspectBlock, NameBlock, EquipmentBlock, SkillBlock, Section } from './libs/components'
import { ExpertiseSkills, KnowledgeSkills, PhysicalSkills, SocialSkills, Skill } from './libs/interfaces'

function App() {
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
    scholarship: { ...noSkill },
    survival: { ...noSkill },
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

  return (
    <Box minW="305px" m="10" border="3px solid" borderColor="gray.200" borderRadius="12" className="App">
      <Box m="2">
        <NameBlock />
      </Box>
      <Box m="2">
        <Section title="Aspects">
          <AspectBlock />
        </Section>
      </Box>
      <Box m="2">
        <Section title="Equipment, Gadgets &amp; Feats">
          <EquipmentBlock />
        </Section>
      </Box>
      <Box m="2">
        <SkillBlock expertise={expertise} knowledge={knowledge} physical={physical} social={social} />
      </Box>
    </Box>
  )
}

export default App
