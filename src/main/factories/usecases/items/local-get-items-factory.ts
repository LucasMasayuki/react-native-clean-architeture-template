import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import { GetItems } from '@/src/domain/usecases/items/get-items'
import LocalGetItems from '@/src/data/usecases/items/local-get-items'

const makeLocalGetItem = (): GetItems =>
  new LocalGetItems(makeAsyncStorageAdapter())

export default makeLocalGetItem
