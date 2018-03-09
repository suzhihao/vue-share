/**
 * Created by Wu Jian Ping on - 2017/11/27.
 */

import scrollMonitor from 'scrollmonitor'

export default {
  install(Vue) {
    Vue.directive('sub-nav-monitor', {
      bind(el, binding, vnode, oldValue) {
        el.monitor = scrollMonitor.create(el, {top: 128})
        el.monitor.stateChange(() => {
          if (el.monitor.isInViewport && el.monitor.isAboveViewport) {
            vnode.context.$store.dispatch('companySubNavs/setActive', {el: '#' + $(el).attr('id')})
          }
        })
      },
      componentUpdated(el, binding, vnode, oldVnode) {
        el.monitor.update()
      },
      unbind(el) {
        el.monitor.destroy()
      }
    })
  }
}
