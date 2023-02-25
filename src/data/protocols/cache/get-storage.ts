export interface GetStorage<T> {
  get: (key: string) => Promise<T | undefined> | T | undefined
}
