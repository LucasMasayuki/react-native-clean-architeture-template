import * as React from 'react'
import { StorageAdapterProvider } from '../../contexts/storage-adapter-context'
import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import { AddItemScreenProvider } from './add-item-screen-context'
import makeLocalAddItem from '../../usecases/items/local-add-item-factory'
import AddItemScreen from '@/src/presentation/screens/item/add-item-screen'

const MakeAddItemScreen: React.FC = () => {
  return (
    <StorageAdapterProvider storageAdapter={makeAsyncStorageAdapter()}>
      <AddItemScreenProvider addItemCase={makeLocalAddItem()}>
        <AddItemScreen />
      </AddItemScreenProvider>
    </StorageAdapterProvider>
  )
}

export default MakeAddItemScreen
