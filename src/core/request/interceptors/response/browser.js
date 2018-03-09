/**
 * Created by Wu Jian Ping on 2017/2/9.
 */

import uiService from '../../../ui-service'
import globalEvents from '../../../global-events'

export default [
  response => {
    if (response && response.config && response.config.showProgress) {
      uiService.progress.done()
    }

    setTimeout(() => {
      globalEvents.emit('responsive')
    }, 200)

    return response.data
  },
  error => {
    // progesss
    if (error && error.config && error.config.showProgress) {
      uiService.progress.done()
    }

    let err = {
      status: 500,
      errcode: '',
      message: (error.response && error.response.data && error.response.data.message) || error.message || '未知错误',
      stack: error.stack || ''
    }

    if (error && error.response && +error.response.status === 401) {
      err.status = 401
      err.message = '该功能要求登录后才能使用'
      window.location = `/?returnUrl=${window.location}`
    }

    if (error && error.response && +error.response.status === 403) {
      err.status = 403
      return new Promise((resolve, reject) => {
        uiService.toastr.error('您无权访问该功能！', '错误')
      })
    }

    if (error && error.response && +error.response.status === 404) {
      err.status = 404
      return new Promise((resolve, reject) => {
        uiService.toastr.error('您请求的资源不存在！', '错误')
      })
    }

    // toastr
    if (error && error.config && error.config.showError) {
      if (error.message === 'Network Error') {
        err.message = '老铁, 网络是不是断了？<br />请检查网络连接是否正常'
      }
      if (error.response &&
        (+error.response.status === 401 || +error.response.status === 403)) { } else {
        uiService.toastr.error(err.message, '错误')
      }
    }

    if (error.response && error.response.data) {
      err.errcode = error.response.data.status
      err.message = error.response.data.message
    }
    return Promise.reject(err)
  }
]
