import { Item } from '../../models/item'

export interface AddItem {
  add: (key: string, item: Item) => Promise<Item>
}
