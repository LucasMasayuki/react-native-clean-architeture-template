import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import LocalEditItem from '@/src/data/usecases/items/local-edit-item'
import { EditItem } from '@/src/domain/usecases/items/edit-item'

const makeLocalEditItem = (): EditItem =>
  new LocalEditItem(makeAsyncStorageAdapter())

export default makeLocalEditItem
