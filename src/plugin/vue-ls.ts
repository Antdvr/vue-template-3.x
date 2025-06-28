import Storage from 'vue-ls'

/**
 * Vue-ls 配置
 */
export const StorageOptions = {
  name: 'ls',
  storage: 'local',
  namespace: '__antdv.pro_'
}
export default Storage.useStorage(StorageOptions).ls
