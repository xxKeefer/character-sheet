import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useDisclosure,
  Text,
  Heading,
  Tag,
  TagLabel,
  TagLeftIcon,
  Stack,
  Box,
} from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import { FaSun, FaMoon } from 'react-icons/fa'
import { Omen } from '../../interfaces'

export interface OmenModalProps {
  omens: Omen[]
  update: (omen: Omen) => void
}

export const OmenModal = (props: OmenModalProps) => {
  const { omens, update } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton aria-label="Edit Star Sign" size="sm" icon={<MdEdit />} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading size="2xl">Select Star Sign</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction="column" spacing={3}>
              {omens.map((omen) => (
                <Box
                  key={omen.starSign}
                  border="1px solid"
                  borderColor="gray.400"
                  borderRadius="10"
                  p="2"
                  _hover={{ bg: '#dadada', cursor: 'pointer' }}
                  _active={{ bg: '#b8b8b8', transform: 'translate(1px, 4px)' }}
                  onClick={() => {
                    update(omen)
                    onClose()
                  }}
                >
                  <Stack direction="column" spacing={4}>
                    <Heading size="lg">{omen.starSign}</Heading>
                    <Text>{omen.description}</Text>
                    <Stack direction="row" spacing={1} justify="end">
                      <Tag size="md" variant="solid" colorScheme="gray">
                        <TagLeftIcon as={FaMoon} />
                        <TagLabel>Dark: {omen.omens.dark}</TagLabel>
                      </Tag>

                      <Tag size="md" variant="outline" colorScheme="gray">
                        <TagLeftIcon as={FaSun} />
                        <TagLabel>Light: {omen.omens.light}</TagLabel>
                      </Tag>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default OmenModal
