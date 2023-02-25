import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import LocalDeleteItem from '@/src/data/usecases/items/local-delete-item'
import { DeleteItem } from '@/src/domain/usecases/items/delete-item'

const makeLocalDeleteItem = (): DeleteItem =>
  new LocalDeleteItem(makeAsyncStorageAdapter())

export default makeLocalDeleteItem
