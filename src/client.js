/**
 * Created by Wu Jian Ping on - 2017/11/02.
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'bootstrap-sass'
import './styles/main.scss'

// global components
import './components'

// global directives
import './directives'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App />',
  components: { App }
})
