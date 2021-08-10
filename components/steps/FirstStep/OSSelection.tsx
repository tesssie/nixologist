import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { SiNixos, SiApple, SiLinux } from "react-icons/si"

interface OSCardProps {
  title: string
  stat: string
  icon: ReactNode
}

const OSCard = ({ title, stat, icon }: OSCardProps) => (
  <Stat
    px={{ base: 2, md: 8 }}
    py={"5"}
    shadow={"xl"}
    border={"1px solid"}
    borderColor={useColorModeValue("gray.500", "gray.500")}
    backgroundColor={useColorModeValue("green.100", "gray.700")}
    rounded={"lg"}
  >
    <Flex justifyContent={"space-between"}>
      <Box pl={{ base: 2, md: 4 }}>
        <StatLabel fontWeight={"medium"} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
          {stat}
        </StatNumber>
      </Box>
      <Box
        my={"auto"}
        color={useColorModeValue("gray.800", "gray.200")}
        alignContent={"center"}
      >
        {icon}
      </Box>
    </Flex>
  </Stat>
)

export const OSSelection = () => (
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
    <OSCard title={"NixOS"} stat={"NixOS"} icon={<SiNixos size={"3em"} />} />
    <OSCard title={"macOS"} stat={"macOS"} icon={<SiApple size={"3em"} />} />
    <OSCard title={"Others"} stat={"Others"} icon={<SiLinux size={"3em"} />} />
  </SimpleGrid>
)
