import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'

export interface TextInputProps {
  label: string
  placeholder: string
  //TODO: type update better
  update: () => void
}

export const TextInput = (props: TextInputProps) => {
  const { label, placeholder, update } = props
  return (
    <InputGroup>
      <InputLeftAddon children={label} />
      <Input type="text" placeholder={placeholder} onChange={update} />
    </InputGroup>
  )
}

export default TextInput
