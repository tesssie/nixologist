import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { SiNixos, SiApple, SiLinux } from "react-icons/si"

interface OSCardProps {
  title: string
  icon: ReactNode
}

const OSCard = ({ title, icon }: OSCardProps) => (
  <Box
    as="button"
    px={{ base: 2, md: 5 }}
    py={"5"}
    shadow={"xl"}
    border={"1px solid"}
    color={useColorModeValue("gray.800", "gray.200")}
    borderColor={useColorModeValue("gray.500", "gray.500")}
    backgroundColor={useColorModeValue("green.100", "gray.700")}
    rounded={"lg"}
    my={"auto"}
    alignContent={"center"}
    onClick={() => console.log(`Clicked ${title}`)}
  >
    {icon}
  </Box>
)

export const OSSelection = () => (
  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
    <OSCard title={"NixOS"} icon={<SiNixos size={"5em"} />} />
    <OSCard title={"macOS"} icon={<SiApple size={"5em"} />} />
    <OSCard title={"Others"} icon={<SiLinux size={"5em"} />} />
  </SimpleGrid>
)
