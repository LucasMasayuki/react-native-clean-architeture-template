import { Item } from '@/src/domain/models/item'
import { hookstate } from '@hookstate/core'

const itemStore = hookstate<Item[]>([])

export default itemStore
