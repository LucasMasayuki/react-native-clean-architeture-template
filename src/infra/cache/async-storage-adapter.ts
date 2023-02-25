/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { SetStorage, GetStorage } from '@/src/data/protocols/cache'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class AsyncStorageAdapter<T>
  implements SetStorage, GetStorage<T>
{
  async set(key: string, value?: unknown): Promise<void> {
    if (value != null) {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } else {
      await AsyncStorage.removeItem(key)
    }
  }

  async get(key: string): Promise<T | undefined> {
    const value = await AsyncStorage.getItem(key)

    if (value == null) {
      return
    }

    return JSON.parse(value)
  }
}
