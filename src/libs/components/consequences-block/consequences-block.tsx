import { Stack } from '@chakra-ui/layout'
import { DamageSlider } from '../../atoms'
import { Section } from '../../components'
import { Consequences, ConsequenceEntry } from '../../interfaces'

export const ConsequencesBlock = () => {
  const consequences: Consequences = {
    minor: { maximum: 4, current: 4 },
    moderate: { maximum: 4, current: 4 },
    major: { maximum: 0, current: 0 },
    severe: { maximum: 2, current: 2 },
    drastic: { maximum: 0, current: 0 },
  }

  const makeConsequences = (block: Consequences) => {
    return (Object.entries(block) as ConsequenceEntry[])
      .filter(([_, data]) => data.maximum > 0)
      .map(([type, data]) => {
        return <DamageSlider key={type} name={type} data={data} />
      })
  }

  return (
    <Section>
      <Stack w="full" dir="row">
        {makeConsequences(consequences)}
      </Stack>
    </Section>
  )
}

export default ConsequencesBlock
