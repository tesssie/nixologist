import React from "react"

import { Box, Flex, Link, HStack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"

import { useViewportScroll } from "framer-motion"

import {
  ColorModeSwitcher,
  GitHubButton,
  LanguageSwitcher,
  SponsorButton,
} from "./buttons"
import { Logo } from "./logo"

export const Navbar = () => {
  const ref = React.useRef()
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {}

  const { scrollY } = useViewportScroll()
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <Box pos="relative">
      <chakra.header
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Logo />
                </HStack>
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <LanguageSwitcher />
              <GitHubButton />
              <ColorModeSwitcher />
              <SponsorButton />
            </Flex>
          </Flex>
        </chakra.div>
      </chakra.header>
    </Box>
  )
}
