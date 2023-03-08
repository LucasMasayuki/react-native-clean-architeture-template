import { Item } from '../../models/item'

export type GetItemResponse = {
  item: Item | undefined
}

export interface GetItem {
  get: (id: number) => Promise<GetItemResponse>
}
