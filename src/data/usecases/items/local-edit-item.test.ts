import { Item } from '@/src/domain/models/item'
import { fakeItem } from '@/src/tests/fakes/fake-item'
import { StorageMock } from '@/src/tests/mocks/storage-mock'
import LocalEditItem from './local-edit-item'

describe('Local edit item', () => {
  test('should throw error, when not found item', async () => {
    const storage = new StorageMock<Item[]>()
    const useCase = new LocalEditItem(storage)

    await expect(useCase.edit(fakeItem)).rejects.toThrow('Not founded item')
  })

  test('should edit item', async () => {
    const storage = new StorageMock<Item[]>()
    await storage.set('', [fakeItem])
    const useCase = new LocalEditItem(storage)

    const name = 'test 12345'
    await useCase.edit({ ...fakeItem, name })

    expect((storage.item ?? [])[0].name).toBe(name)
  })
})
