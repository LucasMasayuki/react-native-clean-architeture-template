import makeAsyncStorageAdapter from '../../cache/async-storage-adapter-factory'
import { GetColorMode } from '@/src/domain/usecases/color-modes/get-color-mode'
import LocalGetColorMode from '@/src/data/usecases/color-modes/local-get-color-mode'

const makeLocalGetColorMode = (): GetColorMode =>
  new LocalGetColorMode(makeAsyncStorageAdapter())

export default makeLocalGetColorMode
