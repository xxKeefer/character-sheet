import { HStack, Wrap, WrapItem } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import { TextInput, OmenButton } from '../../atoms'
import { Input, InputGroup, InputLeftAddon, InputRightElement } from '@chakra-ui/input'
import { useCharacter } from '../../contexts'
import OmenData from './omens.json'
import { Omen } from '../../interfaces'
import { OmenModal } from './omen-modal'

export const CoreBlock = () => {
  const {
    values: { core },
    actions: { setCore },
  } = useCharacter()

  const OmenOptions: Omen[] = OmenData as Omen[]

  return (
    <Wrap>
      <WrapItem flexGrow={1}>
        <InputGroup>
          <InputLeftAddon children="Name" />
          <Input type="text" placeholder="In Game Name" value={core.name ?? undefined} onChange={(e) => setCore({ ...core, name: e.target.value })} />
        </InputGroup>
      </WrapItem>
      <WrapItem flexGrow={1}>
        <InputGroup>
          <InputLeftAddon children="Star" />
          <Input
            readOnly
            type="text"
            placeholder="Your Star Sign"
            value={core.omen.starSign ?? undefined}
            // onChange={(e) => setCore({ ...core, omen: { ...core.omen, starSign: e.target.value } })}
          />
          <InputRightElement>
            <OmenModal omens={OmenOptions} update={(omen: Omen) => setCore({ ...core, omen })} />
          </InputRightElement>
        </InputGroup>
      </WrapItem>
      <WrapItem flexGrow={1}>
        <TextInput label="Skill Points" placeholder="0" value={core.name} update={() => undefined} />
      </WrapItem>
      <WrapItem flexGrow={1}>
        <TextInput label="Build Points" placeholder="0" value={core.name} update={() => undefined} />
      </WrapItem>
      <WrapItem flexGrow={1}>
        <TextInput label="Power" placeholder="Power Level" value={'core.powerLevel'} update={() => undefined} />
      </WrapItem>
      <WrapItem flexGrow={1}>
        <Select placeholder="Omen Layout">
          {OmenOptions.map((opt) => (
            <option key={opt.starSign} value={opt.starSign}>
              {opt.starSign}
            </option>
          ))}
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
