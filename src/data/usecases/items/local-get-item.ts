import { GetItem, GetItemResponse } from '@/src/domain/usecases/items/get-item'
import { Item, localStorageKey } from '../../../domain/models/item'
import { GetStorage } from '../../protocols/cache'

export default class LocalGetItem implements GetItem {
  constructor(private readonly storage: GetStorage<Item[]>) {}

  async get(id: number): Promise<GetItemResponse> {
    const items = (await this.storage.get(localStorageKey)) ?? []

    const item = items.find((it) => it.id === id)

    return { item: item }
  }
}
