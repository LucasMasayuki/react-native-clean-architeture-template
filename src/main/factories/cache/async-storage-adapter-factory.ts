import { GetStorage, SetStorage } from '@/src/data/protocols/cache'
import AsyncStorageAdapter from '../../../infra/cache/async-storage-adapter'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeAsyncStorageAdapter = (): GetStorage<any> & SetStorage =>
  new AsyncStorageAdapter()

export default makeAsyncStorageAdapter
