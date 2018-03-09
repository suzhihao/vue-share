import serializer from '../serializer/json-serializer'

export default class StorageBase {
  constructor(storage) {
    this.storage = storage
  }


  set(key, value) {
    this.storage.setItem(key, value)
  }

  get(key) {
    return this.storage.getItem(key)
  }

  setObject(key, object) {
    this.storage.setItem(key, serializer.serialize(object))
  }

  getObject(key) {
    return serializer.deserialize(this.storage.getItem(key))
  }

  clear(key) {
    this.storage.removeItem(key)
  }

  contains(key) {
    return this.get(key) !== undefined
  }
}
