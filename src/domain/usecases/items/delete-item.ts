import { Item } from '../../models/item'

export interface DeleteItem {
  delete: (item: Item) => Promise<void>
}
