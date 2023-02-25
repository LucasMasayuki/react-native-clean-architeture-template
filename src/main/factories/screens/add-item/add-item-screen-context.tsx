import { AddItem } from '@/src/domain/usecases/items/add-item'
import * as React from 'react'
import { createContext, useContext } from 'react'

type ContextProps = {
  addItemCase: AddItem | undefined
  children?: React.ReactNode
}

const context = createContext<ContextProps>({
  addItemCase: undefined,
  children: undefined,
})

export const useAddItemScreenContext = (): ContextProps => {
  return useContext(context)
}

export const AddItemScreenProvider: React.FC<ContextProps> = ({
  children,
  ...useCases
}) => <context.Provider value={useCases}>{children}</context.Provider>
