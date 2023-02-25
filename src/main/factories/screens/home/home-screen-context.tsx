import { DeleteItem } from '@/src/domain/usecases/items/delete-item'
import { GetItems } from '@/src/domain/usecases/items/get-items'
import * as React from 'react'
import { createContext, useContext } from 'react'

type ContextProps = {
  getItemsCase: GetItems | undefined
  deleteItemCase: DeleteItem | undefined
  children?: React.ReactNode
}

const context = createContext<ContextProps>({
  getItemsCase: undefined,
  deleteItemCase: undefined,
  children: undefined,
})

export const useHomeScreenContext = (): ContextProps => {
  return useContext(context)
}

export const HomeScreenProvider: React.FC<ContextProps> = ({
  children,
  ...useCases
}) => <context.Provider value={useCases}>{children}</context.Provider>
