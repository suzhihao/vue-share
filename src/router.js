/**
 * Created by Wu Jian Ping on - 2017/11/02.
 */

import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
