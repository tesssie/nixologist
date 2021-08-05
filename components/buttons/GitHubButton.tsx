import React from 'react'

import { Link } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'

import { AiFillGithub } from 'react-icons/ai'

export const GitHubButton = (props) => (
  <Link href="https://github.com/execat/nixologist">
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      icon={<AiFillGithub />}
      aria-label="Check source"
      {...props}
    />
  </Link>
)
