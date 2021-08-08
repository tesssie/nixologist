import React from 'react'

import { Button } from '@chakra-ui/button'
import {
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Popover,
} from '@chakra-ui/popover'

import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

const languages = {
  en: '🇺🇸 English',
  mr: '🇮🇳 मराठी',
}

const popoverTrigger = (lang: string) => (
  <PopoverTrigger>
    <Button
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      aria-label="Switch language"
    >
      {languages[lang]}
    </Button>
  </PopoverTrigger>
)

const popoverContent = (onClose: () => void) => (
  <PopoverContent>
    <PopoverArrow />
    <PopoverBody align="center">
      {Object.keys(languages).map((key) => (
        <Button
          variant="ghost"
          onClick={async () => {
            await setLanguage(key)
            onClose()
          }}
          mr="2"
          mb="2"
          key={key}
        >
          {languages[key]}
        </Button>
      ))}
    </PopoverBody>
  </PopoverContent>
)

export const LanguageSwitcher = () => {
  const { lang } = useTranslation('chakra')

  return (
    <Popover>
      {({ onClose }) => (
        <>
          {popoverTrigger(lang)}
          {popoverContent(onClose)}
        </>
      )}
    </Popover>
  )
}
