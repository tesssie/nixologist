import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'
import { Navbar, Logo } from '@components'
import useTranslation from 'next-translate/useTranslation'

export const Chakra = () => {
  const { t, lang } = useTranslation('chakra')
  const documentation = t('documentation')
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Logo h="24px" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang} {documentation}
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default Chakra
