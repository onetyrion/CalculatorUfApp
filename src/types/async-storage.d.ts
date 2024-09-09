declare module '@react-native-async-storage/async-storage' {
  /**
   * AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage
   * system that is global to the app.  It should be used instead of LocalStorage.
   *
   * It is recommended that you use an abstraction on top of `AsyncStorage`
   * instead of `AsyncStorage` directly for anything more than light usage since
   * it operates globally.
   *
   * On iOS, `AsyncStorage` is backed by native code that stores small values in a
   * serialized dictionary and larger values in separate files. On Android,
   * `AsyncStorage` will use either [RocksDB](http://rocksdb.org/) or SQLite
   * based on what is available.
   *
   * @see https://react-native-async-storage.github.io/async-storage/docs/api
   */
  export function useAsyncStorage(key: string): AsyncStorageHook;
  const AsyncStorageLib: AsyncStorage;
  export default AsyncStorageLib;
}
