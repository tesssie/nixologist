import React from "react"

import Icon from "@chakra-ui/icon"
import { Box } from "@chakra-ui/layout"

import { FaHeart } from "react-icons/fa"

export const SponsorButton = () => (
  <Box
    display={{ base: "none", md: "flex" }}
    alignItems="center"
    as="a"
    aria-label="Sponsor Nixologist"
    href={""}
    target="_blank"
    rel="noopener noreferrer"
    bg="gray.50"
    borderWidth="1px"
    borderColor="gray.200"
    px="1em"
    minH="36px"
    rounded="md"
    fontSize="sm"
    color="gray.800"
    outline="0"
    transition="all 0.3s"
    _hover={{
      bg: "gray.100",
      borderColor: "gray.300",
    }}
    _active={{
      borderColor: "gray.200",
    }}
    _focus={{
      boxShadow: "outline",
    }}
    ml={5}
  >
    <Icon as={FaHeart} w="4" h="4" color="red.500" mr="2" />
    <Box as="strong" lineHeight="inherit" fontWeight="semibold">
      Sponsor
    </Box>
  </Box>
)
