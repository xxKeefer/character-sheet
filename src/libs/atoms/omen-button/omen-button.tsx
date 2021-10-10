import { Box } from '@chakra-ui/layout'
import { useState } from 'react'

export const OmenButton = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <Box
      as="button"
      h="24px"
      w="24px"
      borderRadius="50%"
      bg={toggle ? 'gray.200' : 'gray.900'}
      outline="1px solid"
      outlineColor={toggle ? 'gray.500' : 'none'}
      _hover={{ bg: toggle ? 'gray.400' : 'gray.600' }}
      onClick={() => setToggle(!toggle)}
    ></Box>
  )
}

export default OmenButton
