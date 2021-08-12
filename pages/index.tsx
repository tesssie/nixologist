import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  extendTheme,
  useMediaQuery,
} from "@chakra-ui/react"
import { Navbar, Stepper } from "@components"
import useTranslation from "next-translate/useTranslation"
import { StepsStyleConfig as Steps } from "chakra-ui-steps"

const theme = extendTheme({
  components: {
    Steps,
  },
})

export const Chakra = () => {
  const { t, lang } = useTranslation("chakra")
  const documentation = t("documentation")
  const [isMobile] = useMediaQuery("(max-width: 43em)")
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Flex
        p={3}
        maxW={isMobile ? "100%" : "50vmax"}
        margin="0 auto"
        alignItems="center"
        justifyContent="center"
      >
        <Box textAlign="center" fontSize="xl">
          <Grid p={3}>
            <Stepper />
          </Grid>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default Chakra
