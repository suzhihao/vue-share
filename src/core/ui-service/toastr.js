/**
 * Created by Wu Jian Ping on - 2017/11/20.
 */

import toastr from 'toastr'

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  preventDuplicates: false,
  onclick: null,
  showDuration: 300,
  hideDuration: 1000,
  timeOut: 3000,
  extendedTimeOut: 1000,
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
}

export default {
  success(message, title = '成功', opt = {}) {
    toastr.success(message, title, Object.assign({}, { timeOut: 3000 }, opt))
  },
  info(message, title = '提醒', opt = {}) {
    toastr.info(message, title, Object.assign({}, { timeOut: 3000 }, opt))
  },
  warning(message, title = '警告', opt = {}) {
    toastr.warning(message, title, Object.assign({}, { timeOut: 5000 }, opt))
  },
  error(message, title = '错误', opt = {}) {
    toastr.error(message, title, Object.assign({}, { timeOut: 5000 }, opt))
  }
}
