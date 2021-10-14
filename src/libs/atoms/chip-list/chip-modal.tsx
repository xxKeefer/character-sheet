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
  Stack,
} from '@chakra-ui/react'
import { EquipmentDetails } from '../../interfaces'
import { MdDeleteForever } from 'react-icons/md'
import { GiSevenPointedStar as BuildPoints } from 'react-icons/gi'
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
      <Button size="sm" rightIcon={Icon(item.type)} borderRadius="full" variant="solid" colorScheme="gray" onClick={onOpen}>
        {item.name}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Stack direction="column" spacing={1}>
              <Text>{item.name}</Text>
              <Stack direction="row" spacing={1}>
                <Tag size="sm" variant="solid" colorScheme="gray">
                  <TagLeftIcon as={() => Icon(item.type)} />
                  <TagLabel ml="7px">{item.type}</TagLabel>
                </Tag>
                {item.buildPoints > 0 && (
                  <Tag size="sm" variant="solid" colorScheme="gray">
                    <TagLeftIcon as={BuildPoints} />
                    <TagLabel>{`${item.buildPoints} BP`}</TagLabel>
                  </Tag>
                )}
              </Stack>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{item.description}</Text>
          </ModalBody>

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
