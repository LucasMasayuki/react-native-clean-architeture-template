import { Item } from '../../models/item'

export interface DeleteItem {
  delete: (key: string, item: Item) => Promise<void>
}
