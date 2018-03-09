/**
 * Created by Wu Jian Ping on 2017/2/9.
 */

import fingerprint from '../../fingerprint'

export default [
  config => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest' // setup xhr flag
    config.withCredentials = true
    fingerprint(config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
]
