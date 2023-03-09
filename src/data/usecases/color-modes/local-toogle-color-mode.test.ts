import { ColorMode } from '@/src/domain/models/color-mode'
import { StorageMock } from '@/src/tests/mocks/storage-mock'
import LocalToogleColorMode from './local-toogle-color-mode'

describe('Local toogle color mode', () => {
  test('should change to dark, when is light', async () => {
    const storage = new StorageMock<ColorMode>()
    const useCase = new LocalToogleColorMode(storage)
    storage.item = ColorMode.Light

    await useCase.toogle()
    expect(storage.item).toBe(ColorMode.Dark)
  })

  test('should change to light, when is dark', async () => {
    const storage = new StorageMock<ColorMode>()
    storage.item = ColorMode.Dark
    const useCase = new LocalToogleColorMode(storage)

    await useCase.toogle()
    expect(storage.item).toBe(ColorMode.Light)
  })
})
