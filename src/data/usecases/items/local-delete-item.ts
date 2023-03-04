import { Item, localStorageKey } from '@/src/domain/models/item'
import { DeleteItem } from '@/src/domain/usecases/items/delete-item'
import { SetStorage, GetStorage } from '../../protocols/cache'

export default class LocalDeleteItem implements DeleteItem {
  constructor(private readonly storage: SetStorage & GetStorage<Item[]>) {}

  async delete(item: Item): Promise<void> {
    const items = await this.storage.get(localStorageKey)

    if (items == null) {
      throw new Error('Not found item to delete')
    }

    const selectedItemIndex = items.findIndex((it) => it.name === item.name)
    items.splice(selectedItemIndex, 1)

    await this.storage.set(localStorageKey, items)
  }
}
