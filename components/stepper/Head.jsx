import React from "react"

import { Code, Flex, Heading, Text, VStack } from "@chakra-ui/react"

const subheading = (
  <Text align="left">
    By using the <Code>orientation</Code> prop you are able to switch between{" "}
    <Code>horizontal</Code> (default) and <Code>vertical</Code> layouts. By
    default, when in mobile view the <Code>Steps</Code> component will switch to{" "}
    <Code>vertical</Code> orientation. To disable this behaviour you can use the{" "}
    <Code>responsive</Code> prop.
  </Text>
)

export const Head = () => (
  <Flex width="100%" align="center" justify="flex-start">
    <VStack pr={6} py={6} flex={1} align="flex-start" justify="flex-start">
      <Heading fontSize="xl" textAlign="left">
        Title goes here
      </Heading>
      {subheading}
    </VStack>
  </Flex>
)
