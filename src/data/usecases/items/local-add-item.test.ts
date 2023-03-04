import { Item } from '@/src/domain/models/item'
import { fakeItem } from '@/src/tests/fakes/fake-item'
import { StorageMock } from '@/src/tests/mocks/storage-mock'
import LocalAddItem from './local-add-item'

it('Local add item', async () => {
  const storage = new StorageMock<Item[]>()
  const useCase = new LocalAddItem(storage)

  const item = await useCase.add(fakeItem)

  expect(item.id).toBe(fakeItem.id)
  expect((storage.item ?? [])[0].id).toBe(fakeItem.id)
})
