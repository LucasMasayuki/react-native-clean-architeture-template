import * as React from 'react'
import { StorageAdapterProvider } from '../../contexts/storage-adapter-context'
import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import makeLocalGetItem from '../../usecases/items/local-get-items-factory'
import makeLocalDeleteItem from '../../usecases/items/local-delete-item-factory'
import { HomeScreenProvider } from './home-screen-context'
import HomeScreen from '@/src/presentation/screens/home/home-screen'

const MakeHomeScreen: React.FC = () => {
  return (
    <StorageAdapterProvider storageAdapter={makeAsyncStorageAdapter()}>
      <HomeScreenProvider
        getItemsCase={makeLocalGetItem()}
        deleteItemCase={makeLocalDeleteItem()}
      >
        <HomeScreen />
      </HomeScreenProvider>
    </StorageAdapterProvider>
  )
}

export default MakeHomeScreen
