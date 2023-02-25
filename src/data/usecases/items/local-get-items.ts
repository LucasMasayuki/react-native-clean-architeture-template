import { Item } from '../../../domain/models/item'
import {
  GetItems,
  GetItemsResponse,
} from '../../../domain/usecases/items/get-items'
import { GetStorage } from '../../protocols/cache'

export default class LocalGetItems implements GetItems {
  constructor(private readonly storage: GetStorage<Item[]>) {}

  async get(key: string): Promise<GetItemsResponse> {
    const items = (await this.storage.get(key)) ?? []

    return { items }
  }
}
