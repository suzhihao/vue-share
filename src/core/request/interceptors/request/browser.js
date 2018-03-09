/**
 * Created by Wu Jian Ping on 2017/2/9.
 */

import uiService from '../../../ui-service'

export default [
  config => {
    if (config.showProgress !== false) {
      config.showProgress = true
      uiService.progress.start()
    }
    if (config.showError !== false) {
      config.showError = true
    }
    config.headers['X-Requested-With'] = 'XMLHttpRequest' // setup xhr flag
    config.withCredentials = true
    return config
  },
  error => {
    if (error && error.config && error.config.showProgress) {
      uiService.progress.done()
    }
    if (error && error.config && error.config.showError) {
      uiService.toastr.error('请求错误', '错误')
    }
    return Promise.reject(error)
  }
]
