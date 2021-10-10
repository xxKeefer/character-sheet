import { Box, Heading } from '@chakra-ui/layout'
import { SpaceProps, BorderProps, LayoutProps } from '@chakra-ui/system'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: string
  p?: SpaceProps['p']
  minW?: LayoutProps['minW']
  border?: BorderProps['border']
  borderColor?: BorderProps['borderColor']
  borderRadius?: BorderProps['borderRadius']
}

export const Section = (props: SectionProps) => {
  const { children, title, p = 2, border = '1px solid', borderColor = 'gray.200', borderRadius = '10' } = props
  return (
    <Box p={p} border={border} borderColor={borderColor} borderRadius={borderRadius}>
      {title && (
        <Heading size="md" marginBottom="2">
          {title}
        </Heading>
      )}

      {children}
    </Box>
  )
}

export default Section
