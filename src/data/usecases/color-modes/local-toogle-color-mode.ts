import { ColorMode, localStorageKey } from '@/src/domain/models/color-mode'
import { ToogleColorMode } from '@/src/domain/usecases/color-modes/toogle-color-mode'
import { SetStorage, GetStorage } from '../../protocols/cache'

export default class LocalToogleColorMode implements ToogleColorMode {
  constructor(private readonly storage: SetStorage & GetStorage<ColorMode>) {}

  async toogle(): Promise<void> {
    let currentColorMode = await this.storage.get(localStorageKey)

    if (currentColorMode == null) {
      currentColorMode = ColorMode.Light
    } else {
      currentColorMode =
        currentColorMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light
    }

    await this.storage.set(localStorageKey, currentColorMode)
  }
}
