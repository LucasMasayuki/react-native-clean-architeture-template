import { GetColorMode } from '@/src/domain/usecases/color-modes/get-color-mode'
import { ToogleColorMode } from '@/src/domain/usecases/color-modes/toogle-color-mode'
import * as React from 'react'
import { createContext, useContext } from 'react'

type ContextProps = {
  getColorModeCase: GetColorMode | undefined
  toogleColorModeCase: ToogleColorMode | undefined
  children?: React.ReactNode
}

const context = createContext<ContextProps>({
  getColorModeCase: undefined,
  toogleColorModeCase: undefined,
  children: undefined,
})

export const useColorModeContext = (): ContextProps => {
  return useContext(context)
}

export const ColorModeProvider: React.FC<ContextProps> = ({
  children,
  ...useCases
}) => <context.Provider value={useCases}>{children}</context.Provider>
