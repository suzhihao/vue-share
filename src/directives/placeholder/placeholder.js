/**
 * Created by zhihao_su on 2017/11/21.
 */

import resizeDetector from 'element-resize-detector'

let nativeSupport = document.createElement('input').placeholder !== void 0

// nativeSupport = false // 测试用

export default {
  install(Vue, options) {
    Vue.directive('placeholder', {
      inserted(el, binding, vnode, oldVnode) {
        let $input = /INPUT|TEXTAREA/.test(el.nodeName) ? $(el) : $(el).find('input')
        if (nativeSupport) {
          binding.value && $input.length && $input.attr('placeholder', binding.value)
          return
        }
        if (el.$placeholder) {
          return
        }
        if (!$input.length) {
          $input = $(el)
        }
        let $parent = $input.parent()
        let $placeholder = $(`<div style="position: absolute;z-index: 10">${binding.value}</div>`)
        setTimeout(() => {
          let position = $input.position()
          $placeholder.css({
            'top': `${position.top}px`,
            'left': `${position.left + 1}px`,
            'padding-left': $input.css('padding-left'),
            'font-size': $input.css('font-size'),
            'line-height': $input.css('height'),
            'height': $input.css('height'),
            'color': $input.css('color')
          })
        }, 100)
        $placeholder
          .bind('click', () => {
            $input.focus()
          })
        if ($parent.css('position') === 'static') {
          $parent.css('position', 'relative')
        }
        $parent.append($placeholder)
        let detector = resizeDetector()
        detector.listenTo($parent[0], () => {
          let position = $input.position()
          $placeholder.css({
            'top': `${position.top}px`,
            'left': `${position.left + 1}px`
          })
        })
        $input.on('input', () => {
          if ($input.val()) {
            el.$placeholder.hide()
          } else {
            el.$placeholder.show()
          }
        })
        el.detector = detector
        el.$input = $input
        el.$placeholder = $placeholder
      },
      update(el, binding, vnode, oldVnode) {
        if (nativeSupport) {
          return
        }
        if (/INPUT|TEXTAREA/.test(el.nodeName)) {
          if (el.value) {
            el.$placeholder.hide()
          } else {
            el.$placeholder.show()
          }
        } else {
          if (vnode.data.model.value && vnode.data.model.value.length) {
            el.$placeholder.hide()
          } else {
            el.$placeholder.show()
          }
        }
      },
      unbind(el) {
        if (nativeSupport) {
          return
        }
        // 将detector销毁
        el.detector.uninstall(el.$placeholder.parent()[0])
        el.detector = null
        el.$placeholder.unbind('click').remove()
        el.$placeholder = null
        el.$input.unbind('input')
        el.$input = null
      }
    })
  }
}
