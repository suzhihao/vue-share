/**
 * Created by Wu Jian Ping on - 2017/11/03.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)

let store = new Vuex.Store({
  actions,
  getters,
  modules
})

if (!__BUILD__) {
  if (module.hot) {
    module.hot.accept([
      './actions',
      './getters',
      './modules'
    ], () => {
      store.hotUpdate({
        actions: require('./actions'),
        getters: require('./getters'),
        modules: require('./modules')
      })
    })
  }
}

export default store
