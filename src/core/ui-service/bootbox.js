/**
 * Created by Wu Jian Ping on - 2017/11/21.
 */

import bootbox from 'bootbox'
bootbox.setLocale('zh_CN')

export default {
  alert(message) {
    bootbox.dialog({
      title: '提示',
      message: `<span class='h4'>${message}</span>`,
      buttons: {
        cancel: {
          label: '关闭',
          className: 'btn-primary'
        }
      }
    })
  },

  confirm(message, cb) {
    bootbox.dialog({
      title: '请确认',
      message: `<span class='h4'>${message}</span>`,
      backdrop: true,
      onEscape: true,
      buttons: {
        ok: {
          label: '确定',
          className: 'btn-primary',
          callback: () => {
            cb(true) // eslint-disable-line
          }
        },
        close: {
          label: '取消',
          className: 'btn-default',
          callback: () => {
            cb(false) // eslint-disable-line
          }
        }
      }
    })
  },

  dialog: bootbox.dialog
}
