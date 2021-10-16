import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, IconButton } from '@chakra-ui/react'
import { Input, InputGroup } from '@chakra-ui/input'
import { HStack, Text } from '@chakra-ui/layout'
import { MdEdit } from 'react-icons/md'

export interface EditableLabelProps {
  skill: string
  domain?: string
  update: (value?: string) => void
  compact?: boolean
}

export const EditableLabel = (props: EditableLabelProps) => {
  const { update, domain, skill, compact } = props

  return (
    <Popover placement={compact ? 'bottom-end' : 'auto-start'}>
      <PopoverTrigger>
        <HStack>
          <Text>
            {skill} ( {domain} )
          </Text>
          <IconButton aria-label="edit" size="xs" variant="ghost" borderRadius="full" icon={<MdEdit />} />
        </HStack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{skill} domain</PopoverHeader>
        <PopoverBody>
          <InputGroup>
            <Input type="text" placeholder={'eg: Starship'} value={domain} onChange={(e) => update(e.target.value)} />
          </InputGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default EditableLabel
