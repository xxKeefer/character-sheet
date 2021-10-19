import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { CharacterProvider } from './libs/contexts'
import { Helmet } from 'react-helmet'
import theme from './libs/theme/theme'

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&family=Major+Mono+Display&family=Zilla+Slab:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ChakraProvider theme={theme}>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
