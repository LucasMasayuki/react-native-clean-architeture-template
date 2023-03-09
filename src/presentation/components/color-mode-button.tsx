import React, { useEffect } from 'react'
import { IconButton, MoonIcon, SunIcon, useColorMode } from 'native-base'
import { ColorMode } from '@/src/domain/models/color-mode'
import { useColorModeContext } from '@/src/main/factories/contexts/color-mode-context'

const ColorModeButton: React.FC = () => {
  const { getColorModeCase, toogleColorModeCase } = useColorModeContext()
  const { colorMode, toggleColorMode, setColorMode } = useColorMode()

  useEffect(() => {
    const getColorMode = async () => {
      try {
        const colorMode = (await getColorModeCase?.get()) ?? ColorMode.Light

        setColorMode(colorMode)
      } catch (error) {
        console.log(error)
      }
    }

    getColorMode
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getColorModeCase])

  async function onPressToogleMode() {
    try {
      await toogleColorModeCase?.toogle()
      toggleColorMode()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <IconButton
      icon={colorMode === ColorMode.Light ? <SunIcon /> : <MoonIcon />}
      onPress={onPressToogleMode}
      borderRadius="full"
      _icon={{
        color: 'orange.500',
        size: 'md',
      }}
      _hover={{
        bg: 'orange.600:alpha.20',
      }}
      _pressed={{
        bg: 'orange.600:alpha.20',
        _icon: {
          name: 'emoji-flirt',
        },
        _ios: {
          _icon: {
            size: '2xl',
          },
        },
      }}
      _ios={{
        _icon: {
          size: '2xl',
        },
      }}
    />
  )
}

export default ColorModeButton
