import * as React from 'react'
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}

export const LanguageSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { lang } = useTranslation('chakra')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={async () => await setLanguage(lang === 'en' ? 'mr' : 'en')}
      icon={<SwitchIcon />}
      aria-label={`Switch to en`}
      {...props}
    />
  )
}
