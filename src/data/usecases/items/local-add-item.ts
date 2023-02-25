import { Item } from '@/src/domain/models/item'
import { AddItem } from '@/src/domain/usecases/items/add-item'
import { SetStorage, GetStorage } from '../../protocols/cache'

export default class LocalAddItem implements AddItem {
  constructor(private readonly storage: SetStorage & GetStorage<Item[]>) {}

  async add(key: string, item: Item): Promise<Item> {
    const items = (await this.storage.get(key)) ?? []

    items.push(item)

    await this.storage.set(key, items)

    return item
  }
}
