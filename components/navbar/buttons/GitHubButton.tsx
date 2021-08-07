import React from 'react'

import { IconButton } from '@chakra-ui/button'

import { AiFillGithub } from 'react-icons/ai'

export const GitHubButton = (props) => (
  <IconButton
    as="a"
    size="md"
    fontSize="lg"
    variant="ghost"
    color="current"
    marginLeft="2"
    icon={<AiFillGithub />}
    aria-label="Check source"
    href="https://github.com/execat/nixologist"
    {...props}
  />
)
