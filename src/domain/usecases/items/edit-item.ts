import { Item } from '../../models/item'

export interface EditItem {
  edit: (item: Item) => Promise<Item>
}
