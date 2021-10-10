import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  xs: '320px',
  sm: '480px',
  md: '625px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1660px',
})

export const theme = extendTheme({ breakpoints })

export default theme
