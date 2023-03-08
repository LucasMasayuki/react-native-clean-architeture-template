import * as React from 'react'
import { StorageAdapterProvider } from '../../contexts/storage-adapter-context'
import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import makeLocalDeleteItem from '../../usecases/items/local-delete-item-factory'
import { HomeScreenProvider } from './home-screen-context'
import HomeScreen from '@/src/presentation/screens/home/home-screen'
import makeLocalGetItems from '../../usecases/items/local-get-items-factory'

const MakeHomeScreen: React.FC = () => {
  return (
    <StorageAdapterProvider storageAdapter={makeAsyncStorageAdapter()}>
      <HomeScreenProvider
        getItemsCase={makeLocalGetItems()}
        deleteItemCase={makeLocalDeleteItem()}
      >
        <HomeScreen />
      </HomeScreenProvider>
    </StorageAdapterProvider>
  )
}

export default MakeHomeScreen
