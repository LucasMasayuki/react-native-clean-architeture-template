import { Item, localStorageKey } from '@/src/domain/models/item'
import { EditItem } from '@/src/domain/usecases/items/edit-item'
import { SetStorage, GetStorage } from '../../protocols/cache'

export default class LocalEditItem implements EditItem {
  constructor(private readonly storage: SetStorage & GetStorage<Item[]>) {}

  async edit(item: Item): Promise<Item> {
    const items = (await this.storage.get(localStorageKey)) ?? []

    const findIndex = items.findIndex((it) => it.id === item.id)

    if (findIndex <= -1) {
      throw new Error('Not founded item')
    }

    const clone = [...items]
    clone[findIndex] = item

    await this.storage.set(localStorageKey, clone)

    return item
  }
}
