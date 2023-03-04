import { Item } from '@/src/domain/models/item'
import { fakeItem } from '@/src/tests/fakes/fake-item'
import { StorageMock } from '@/src/tests/mocks/storage-mock'
import LocalDeleteItem from './local-delete-item'

it('Local delete item', async () => {
  const storage = new StorageMock<Item[]>()
  await storage.set('', [fakeItem])
  const useCase = new LocalDeleteItem(storage)

  await useCase.delete(fakeItem)

  expect(storage.item?.length).toBe(0)
})
