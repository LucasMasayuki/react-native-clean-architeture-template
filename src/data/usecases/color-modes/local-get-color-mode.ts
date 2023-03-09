import { ColorMode, localStorageKey } from '@/src/domain/models/color-mode'
import { GetColorMode } from '@/src/domain/usecases/color-modes/get-color-mode'
import { SetStorage, GetStorage } from '../../protocols/cache'

export default class LocalGetColorMode implements GetColorMode {
  constructor(private readonly storage: SetStorage & GetStorage<ColorMode>) {}

  async get(): Promise<ColorMode> {
    return (await this.storage.get(localStorageKey)) ?? ColorMode.Light
  }
}
