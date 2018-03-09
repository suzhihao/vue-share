/**
 * Created by Wu Jian Ping on - 2017/06/05.
 */
import Vue from 'vue'
import _ from 'lodash'
import bootbox from './bootbox'
import progress from './progress'
import toastr from './toastr'
import scroller from './scroller'
import router from '../../router'
import store from '../../store'

const showDialog = (component, data, options) => {
  return new Promise((resolve, reject) => {
    let Constructor = Vue.extend(component)
    let modal = new Constructor({
      router,
      store,
      data() { return data || {} }
    })
    let instance = modal.$mount()
    instance.$promise = {resolve, reject}
    $('body').append(instance.$el)
    let opt = _.assignIn({}, options, {show: true})
    instance.$modal = $(instance.$el)
      .modal(opt)
      .on('hidden.bs.modal', () => {
        $(instance.$el).remove()
        instance.$destroy()
        if (options && _.isFunction(options.onClose)) {
          options.onClose()
        }
      })
  })
}

export default {
  progress,
  toastr,
  bootbox,
  showDialog,
  scroller
}
