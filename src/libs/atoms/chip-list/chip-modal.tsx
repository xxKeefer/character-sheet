import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  useDisclosure,
  Text,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react'
import { EquipmentDetails } from '../../interfaces'
import { MdDeleteForever } from 'react-icons/md'
import { Icon } from '../../utils'

export interface ChipModalProps {
  item: EquipmentDetails
  removeFn: (item: EquipmentDetails) => void
}

export const ChipModal = (props: ChipModalProps) => {
  const { item, removeFn } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button size="xs" rightIcon={Icon(item.type)} borderRadius="full" variant="solid" colorScheme="gray" onClick={onOpen}>
        {item.name}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text mr="2">
              {item.name}
              <Tag ml="2" mt="1" size="sm" variant="solid" colorScheme="gray">
                <TagLeftIcon as={() => Icon(item.type)} />
                <TagLabel ml="2">{item.type}</TagLabel>
              </Tag>
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{item.description}</ModalBody>

          <ModalFooter>
            <IconButton mr="auto" colorScheme="red" aria-label="Delete Item" size="sm" icon={<MdDeleteForever />} onClick={() => removeFn(item)} />
            <Text ml="2">{item.effect}</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ChipModal
