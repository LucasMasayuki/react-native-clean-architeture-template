import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import LocalToogleColorMode from '@/src/data/usecases/color-modes/local-toogle-color-mode'
import { ToogleColorMode } from '@/src/domain/usecases/color-modes/toogle-color-mode'

const makeLocalToogleColorMode = (): ToogleColorMode =>
  new LocalToogleColorMode(makeAsyncStorageAdapter())

export default makeLocalToogleColorMode
