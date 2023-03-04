import { GetStorage, SetStorage } from '@/src/data/protocols/cache'

export class StorageMock<T> implements SetStorage, GetStorage<T> {
  item?: T

  get(): T | Promise<T | undefined> | undefined {
    return this.item
  }

  set(key: string, value?: unknown): void | Promise<void> {
    this.item = value as T
  }
}
