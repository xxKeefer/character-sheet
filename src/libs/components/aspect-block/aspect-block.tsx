import { VStack } from '@chakra-ui/layout'
import { TextInput } from '../../atoms'

export const AspectBlock = () => {
  return (
    <VStack>
      <TextInput label="High Concept" placeholder="Your character in five words or less" update={() => undefined} />
      <TextInput label="Trouble" placeholder="Why they end up in trouble" update={() => undefined} />
      <TextInput label="Profession" placeholder="How do they fill up their credstick" update={() => undefined} />
      <TextInput label="Reputation" placeholder="In some circles, they are known as" update={() => undefined} />
      <TextInput label="Loyalty" placeholder="When push comes to shove, what do they protect" update={() => undefined} />
    </VStack>
  )
}

export default AspectBlock
