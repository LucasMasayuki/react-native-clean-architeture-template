import { Item } from '@/src/domain/models/item'
import { fakeItem } from '@/src/tests/fakes/fake-item'
import { StorageMock } from '@/src/tests/mocks/storage-mock'
import LocalGetItem from './local-get-item'

it('Local get item', async () => {
  const storage = new StorageMock<Item[]>()
  await storage.set('', [fakeItem])
  const useCase = new LocalGetItem(storage)

  const { item } = await useCase.get(fakeItem.id)

  expect(fakeItem.id).toBe(item?.id)
})
