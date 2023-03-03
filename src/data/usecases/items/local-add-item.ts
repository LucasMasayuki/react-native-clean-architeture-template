import { Item, localStorageKey } from '@/src/domain/models/item'
import { AddItem } from '@/src/domain/usecases/items/add-item'
import { SetStorage, GetStorage } from '../../protocols/cache'

export default class LocalAddItem implements AddItem {
  constructor(private readonly storage: SetStorage & GetStorage<Item[]>) {}

  async add(item: Item): Promise<Item> {
    const items = (await this.storage.get(localStorageKey)) ?? []

    items.push(item)

    await this.storage.set(localStorageKey, items)

    return item
  }
}
