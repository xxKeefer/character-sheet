import { HStack, Wrap, WrapItem } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import { TextInput, OmenButton } from '../../atoms'

export const CoreBlock = () => {
  return (
    <Wrap>
      <WrapItem flexGrow={1}>
        <TextInput label="Name" placeholder="In Game Name" update={() => undefined} />
      </WrapItem>
      <WrapItem flexGrow={1}>
        <TextInput label="Star" placeholder="Your Star Sign" update={() => undefined} />
      </WrapItem>
      <WrapItem flexGrow={1}>
        <TextInput label="Bp Total" placeholder="0" update={() => undefined} />
      </WrapItem>
      <WrapItem flexGrow={1}>
        <TextInput label="BP Bank" placeholder="0" update={() => undefined} />
      </WrapItem>
      <WrapItem flexGrow={1}>
        <TextInput label="Power" placeholder="Power Level" update={() => undefined} />
      </WrapItem>
      <WrapItem flexGrow={1}>
        <Select placeholder="Omen Layout">
          <option value="option1">Light & Dark</option>
          <option value="option2">Chance Coin</option>
        </Select>
        <HStack p="2">
          {[...Array(5)].map((_, i) => (
            <OmenButton key={`OmenButton-${i}`} />
          ))}
        </HStack>
      </WrapItem>
    </Wrap>
  )
}

export default CoreBlock
