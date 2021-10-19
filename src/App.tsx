import { Box } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { AspectBlock, CoreBlock, EquipmentBlock, SkillBlock, Section, ConsequencesBlock } from './libs/components'
import { useCharacter } from './libs/contexts'

function App() {
  const mobile = useBreakpointValue({ xs: 10, base: 0 })
  const {
    values: { skills },
  } = useCharacter()

  return (
    <Box minW="410px" m={mobile ? '0' : '10'} border="3px solid" borderColor="gray.200" borderRadius="12" className="App">
      <Box m="2">
        <Section title="Core">
          <CoreBlock />
        </Section>
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
        <SkillBlock expertise={skills.expertise} knowledge={skills.knowledge} physical={skills.physical} social={skills.social} />
      </Box>
    </Box>
  )
}

export default App
