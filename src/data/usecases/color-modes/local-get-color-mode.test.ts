import { ColorMode } from '@/src/domain/models/color-mode'
import { StorageMock } from '@/src/tests/mocks/storage-mock'
import LocalGetColorMode from './local-get-color-mode'

describe('Local get color mode', () => {
  test('should get light color, when storage is undefined', async () => {
    const storage = new StorageMock<ColorMode>()
    const useCase = new LocalGetColorMode(storage)

    const mode = await useCase.get()
    expect(mode).toBe(ColorMode.Light)
  })

  test('should return current color, when storage is defined', async () => {
    const storage = new StorageMock<ColorMode>()
    storage.item = ColorMode.Dark
    const useCase = new LocalGetColorMode(storage)

    const mode = await useCase.get()
    expect(mode).toBe(ColorMode.Dark)
  })
})
