import * as React from 'react'
import { createContext, useContext } from 'react'
import { GetStorage, SetStorage } from '../../../data/protocols/cache'

type ContextProps = {
  storageAdapter: (GetStorage<unknown> & SetStorage) | undefined
  children?: React.ReactNode
}

const context = createContext<ContextProps>({
  storageAdapter: undefined,
  children: undefined,
})

export const useStorageAdapterContext = (): ContextProps => {
  return useContext(context)
}

export const StorageAdapterProvider: React.FC<ContextProps> = ({
  children,
  ...useCases
}) => <context.Provider value={useCases}>{children}</context.Provider>
