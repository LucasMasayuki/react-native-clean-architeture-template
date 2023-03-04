import { Item } from '@/src/domain/models/item'
import { fakeItem } from '@/src/tests/fakes/fake-item'
import { StorageMock } from '@/src/tests/mocks/storage-mock'
import LocalGetItems from './local-get-items'

it('Local get items', async () => {
  const storage = new StorageMock<Item[]>()
  await storage.set('', [fakeItem])
  const useCase = new LocalGetItems(storage)

  const { items } = await useCase.get()

  expect(storage.item?.length).toBe(1)
  expect((storage.item ?? [])[0].id).toBe(items[0].id)
})
