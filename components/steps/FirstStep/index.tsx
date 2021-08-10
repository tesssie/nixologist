import React from "react"
import { Flex } from "@chakra-ui/react"

import { OSSelection } from "./OSSelection"

export const FirstStep = () => (
  <Flex textAlign="left" py={2} px={4}>
    <OSSelection />
  </Flex>
)
