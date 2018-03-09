/**
 * Created by Wu Jian Ping on - 2017/11/23.
 */
import Vue from 'vue'
import queryString from '../../core/query-string'

const state = () => {
  return {
    navs: []
  }
}

const actions = {
  setSubNavs({commit, state}, {navs}) {
    commit('setSubNavs', {navs})
  },

  setActive({state, commit}, {el}) {
    let navs = [...state.navs]
    for (let i = 0; i < navs.length; ++i) {
      navs[i].active = (navs[i].el === el)
    }
    commit('setActive', {navs})
  }
}

const mutations = {
  setSubNavs(state, {navs}) {
    state.navs = navs

    let sectionId = queryString.query().section
    if (sectionId && $('#' + sectionId).length > 0) {
      Vue.nextTick(() => {
        $('html,body').animate({
          scrollTop: $('#' + sectionId).offset().top - $('#navContainer').height() - $('nav').height()
        }, 600)
      })
    }
  },
  setActive(state, {navs}) {
    state.navs = navs
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
