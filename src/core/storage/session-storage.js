import StorageBase from './storage-base'

class SessionStorage extends StorageBase {
  constructor() {
    super(window.sessionStorage)
  }
}

export default new SessionStorage()
