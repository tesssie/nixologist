import * as React from 'react'

import { ImageProps } from '@chakra-ui/image'
import { usePrefersReducedMotion } from '@chakra-ui/media-query'
import { chakra } from '@chakra-ui/system'
import { keyframes } from '@chakra-ui/react'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Logo: React.FC = (props) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`

  return (
    <chakra.img
      animation={animation}
      src="logo.svg"
      h="16"
      p="1"
      {...props}
    />
  )
}
