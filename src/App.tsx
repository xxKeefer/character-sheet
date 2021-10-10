import { Box } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { AspectBlock, NameBlock, EquipmentBlock, SkillBlock, Section, ConsequencesBlock } from './libs/components'
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

  const mobile = useBreakpointValue({ xs: 10, base: 0 })

  return (
    <Box minW="410px" m={mobile ? '0' : '10'} border="3px solid" borderColor="gray.200" borderRadius="12" className="App">
      <Box m="2">
        <NameBlock />
      </Box>
      <Box m="2">
        <Section title="Aspects">
          <AspectBlock />
        </Section>
      </Box>
      <Box m="2">
        <Section title="Consequences &amp; Damage">
          <ConsequencesBlock />
        </Section>
      </Box>
      <Box m="2">
        <Section title="Equipment, Gadgets, Feats &amp; Scars">
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
