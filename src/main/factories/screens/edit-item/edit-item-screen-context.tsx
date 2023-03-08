import { EditItem } from '@/src/domain/usecases/items/edit-item'
import { GetItem } from '@/src/domain/usecases/items/get-item'
import * as React from 'react'
import { createContext, useContext } from 'react'

type ContextProps = {
  getItemCase: GetItem | undefined
  editItemCase: EditItem | undefined
  children?: React.ReactNode
}

const context = createContext<ContextProps>({
  getItemCase: undefined,
  editItemCase: undefined,
  children: undefined,
})

export const useEditItemScreenContext = (): ContextProps => {
  return useContext(context)
}

export const EditItemScreenProvider: React.FC<ContextProps> = ({
  children,
  ...useCases
}) => <context.Provider value={useCases}>{children}</context.Provider>
