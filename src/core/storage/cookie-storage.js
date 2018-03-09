/**
 * Created by Wu Jian Ping on - 2017/07/18.
 */

import jsCookie from 'js-cookie'
import serializer from '../serializer/json-serializer'

class CookieStorage {
  get(name) {
    return jsCookie.get(name)
  }

  getObject(name) {
    let s = this.get(name)
    if (s) {
      return serializer.deserialize(s)
    }
    return null
  }

  /**
   * [set description]
   * @param {[type]} name        [description]
   * @param {[type]} val         [description]
   * @param {Object} [option={}] { expires: ?, path: ?, domain: ?, secure: ? }
   */
  set(name, val, option = {}) {
    jsCookie.set(name, val, option)
  }

  /**
   * [setObject description]
   * @param {[type]} name        [description]
   * @param {[type]} obj         [description]
   * @param {Object} [option={}] { expires: ?, path: ?, domain: ?, secure: ? }
   */
  setObject(name, obj, option = {}) {
    let s = serializer.serialize(obj)
    this.set(name, s, option)
  }

  clear(name) {
    jsCookie.remove(name)
  }

  contains(name) {
    return this.get(name) !== undefined
  }
}

export default new CookieStorage()
