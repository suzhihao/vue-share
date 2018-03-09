import StorageBase from './storage-base'

class LocalStorage extends StorageBase {
  constructor() {
    super(window.localStorage)
  }
}

export default new LocalStorage()
