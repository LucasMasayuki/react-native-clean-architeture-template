import { Item } from '../../models/item'

export type GetItemsResponse = {
  items: Item[]
}

export interface GetItems {
  get: (key: string) => Promise<GetItemsResponse>
}
