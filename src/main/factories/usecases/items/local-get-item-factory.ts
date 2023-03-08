import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import { GetItem } from '@/src/domain/usecases/items/get-item'
import LocalGetItem from '@/src/data/usecases/items/local-get-item'

const makeLocalGetItem = (): GetItem =>
  new LocalGetItem(makeAsyncStorageAdapter())

export default makeLocalGetItem
