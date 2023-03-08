import * as React from 'react'
import { StorageAdapterProvider } from '../../contexts/storage-adapter-context'
import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import { EditItemScreenProvider } from './edit-item-screen-context'
import EditItemScreen from '@/src/presentation/screens/item/edit-item-screen'
import makeLocalEditItem from '../../usecases/items/local-edit-item-factory'
import makeLocalGetItem from '../../usecases/items/local-get-item-factory'

const MakeEditItemScreen: React.FC = () => {
  return (
    <StorageAdapterProvider storageAdapter={makeAsyncStorageAdapter()}>
      <EditItemScreenProvider
        getItemCase={makeLocalGetItem()}
        editItemCase={makeLocalEditItem()}
      >
        <EditItemScreen />
      </EditItemScreenProvider>
    </StorageAdapterProvider>
  )
}

export default MakeEditItemScreen
