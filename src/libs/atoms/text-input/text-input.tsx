import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'

export interface TextInputProps {
  label: string
  placeholder: string
  value?: string
  type?: string
  update: () => void
}

export const TextInput = (props: TextInputProps) => {
  const { label, placeholder, type, value, update } = props
  return (
    <InputGroup>
      <InputLeftAddon children={label} />
      <Input type={type ?? 'text'} placeholder={placeholder} value={value ?? ''} onChange={update} />
    </InputGroup>
  )
}

export default TextInput
