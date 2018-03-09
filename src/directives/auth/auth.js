/**
 * Created by zhihao_su on 2017/11/21.
 */
import _ from 'lodash'
export default {
  install(Vue) {
    Vue.directive('auth', (el, binding, vnode, oldVnode) => {
      let funcs = vnode.context.$store.state.appState.funcs
      let values = _.split(binding.value, '|')
      let modifiers = binding.modifiers
      let display = ''

      if (modifiers.all) {
        for (let value of values) {
          if (_.indexOf(funcs, value) === -1) {
            display = 'none'
            break
          }
        }
      } else {
        display = 'none'
        for (let value of values) {
          if (_.indexOf(funcs, value) !== -1) {
            display = ''
            break
          }
        }
      }
      el.style.display = display
    }
    )
  }
}

