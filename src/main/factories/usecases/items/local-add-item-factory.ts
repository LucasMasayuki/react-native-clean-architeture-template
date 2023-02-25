import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import { AddItem } from '@/src/domain/usecases/items/add-item'
import LocalAddItem from '@/src/data/usecases/items/local-add-item'

const makeLocalAddItem = (): AddItem =>
  new LocalAddItem(makeAsyncStorageAdapter())

export default makeLocalAddItem
