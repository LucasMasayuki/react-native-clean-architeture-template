import { Item } from '../../models/item'

export interface AddItem {
  add: (item: Item) => Promise<Item>
}
