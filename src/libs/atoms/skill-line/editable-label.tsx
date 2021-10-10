import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react'

export interface EditableLabelProps {
  domain: string
  update: (value: React.SetStateAction<string | undefined>) => void
}

export const EditableLabel = (props: EditableLabelProps) => {
  const { domain, update } = props
  return (
    <Editable onChange={update} as="span" p="0" h="28px" defaultValue={domain}>
      <EditablePreview p="0" maxW="180px" overflow="hidden" style={{ textOverflow: 'ellipsis' }} />
      <EditableInput />
    </Editable>
  )
}

export default EditableLabel
