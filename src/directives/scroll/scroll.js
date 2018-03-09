/**
 * Created by zhihao_su on 2017/11/21.
 */
/**
 * Created by zhihao_su on 2017/11/13.
 */
import IScroll from 'iscroll'
import resizeDetector from 'element-resize-detector'
import _ from 'lodash'

export default {
  install(Vue, options) {
    Vue.directive('scroll', {
      inserted(el, binding, vnode, oldVnode) {
        // 判断输入参数
        let vtype = binding.value ? [].toString.call(binding.value) : undefined

        // 设置iscorll属性的参数
        let iscrollOptions = vtype === '[object Object]' ? binding.value : options

        // 阻止touchmove默认事件
        el.addEventListener('touchmove', event => {
          event.preventDefault()
        })

        // 使用vnode绑定iscroll是为了让iscroll对象能够夸状态传递，避免iscroll重复建立
        el.scroll = new IScroll(el, iscrollOptions)

        let detector = resizeDetector()
        detector.listenTo(el, _.debounce(() => {
          el.scroll.refresh()
        }, 100))
        el.detector = detector
      },
      update(el, binding, vnode, oldVnode) {
        // 使用settimeout让refresh跳到事件流结尾，保证refresh时数据已经更新完毕
        setTimeout(() => {
          el.scroll.refresh()
        }, 0)
      },
      unbind(el, binding, vnode, oldVnode) {
        /**
         * 解除绑定时要把iscroll销毁
         */
        el.scroll.destroy()
        el.scroll = null
        // 将detector销毁
        el.detector.uninstall(el)
        el.detector = null
      }
    })
  }
}
