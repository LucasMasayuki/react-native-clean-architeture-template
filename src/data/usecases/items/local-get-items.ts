import { Item, localStorageKey } from '../../../domain/models/item'
import {
  GetItems,
  GetItemsResponse,
} from '../../../domain/usecases/items/get-items'
import { GetStorage } from '../../protocols/cache'

export default class LocalGetItems implements GetItems {
  constructor(private readonly storage: GetStorage<Item[]>) {}

  async get(): Promise<GetItemsResponse> {
    const items = (await this.storage.get(localStorageKey)) ?? []

    return { items }
  }
}
