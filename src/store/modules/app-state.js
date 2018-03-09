/**
 * Created by Wu Jian Ping on - 2017/11/06.
 */
import _ from 'lodash'
import localStorage from '../../core/storage/local-storage'

const isTheSamePath = (a, b) => {
  // return b.indexOf(a) !== -1
  return a === b
}

const isTheSameCategory = (a, b) => {
  return a === b
}

const state = () => {
  return {
    mini: localStorage.get('sidebar-mini') === 'true',
    collapsed: true,
    fixed: localStorage.get('sidebar-fixed') === 'true',
    menus: [],
    pageInfo: {
      title: '',
      subtitle: '',
      breadcrumb: []
    },
    funcs: [],
    user: {},
    showTitle: true,
    showBreadCrumb: true
  }
}

const actions = {
  setMenus({commit}, {menus}) {
    commit('setMenus', {menus})
  },
  setActive({commit}, {from, to}) {
    commit('setActive', {from, to})
  },
  setOpen({commit}, {menu}) {
    commit('setOpen', {menu})
  },
  setMini({commit}, {mini, persist}) {
    commit('setMini', {mini, persist})
  },
  setCollapsed({commit}, {collapsed}) {
    commit('setCollapsed', {collapsed})
  },
  initPageInfo({commit}, {currentRoute}) {
    commit('initPageInfo', {currentRoute})
  },
  setFuncs({commit}, {funcs}) {
    commit('setFuncs', {funcs})
  },
  setUser({commit}, {user}) {
    commit('setUser', {user})
  },
  setTitleVisiable({commit}, visible) {
    commit('setTitleVisiable', visible)
  },
  setBreadcrumbVisiable({commit}, visible) {
    commit('setBreadcrumbVisiable', visible)
  },
  setSidebarFixed({commit}, fixed) {
    commit('setSidebarFixed', fixed)
  }
}

const mutations = {
  setMenus(state, data) {
    if (data) {
      state.menus = data.menus
    }
  },

  setActive(state, data) {
    if (data) {
      let tmp = [...state.menus]
      _.each(tmp, menu => {
        if (menu.path) {
          menu.active = isTheSamePath(data.to.path, menu.path)
        } else {
          _.each(menu.children, child => {
            child.active = isTheSamePath(data.to.path, child.path)
            if (child.active) {
              menu.open = true
            }
          })
        }
      })

      state.menus = tmp
    }
  },

  setOpen(state, data) {
    if (data) {
      let tmp = [...state.menus]
      _.each(tmp, o => {
        if (isTheSameCategory(o.text, data.menu.text)) {
          o.open = !o.open
        }
      })

      state.menus = tmp
    }
  },

  setMini(state, data) {
    state.mini = data.mini
    if (data.persist) {
      localStorage.set('sidebar-mini', data.mini.toString())
    }
  },

  setCollapsed(state, data) {
    state.collapsed = data.collapsed
  },

  initPageInfo(state, data) {
    if (data) {
      let tmp = {
        title: '',
        subtitle: '',
        breadcrumb: []
      }
      _.each(state.menus, menu => {
        if (menu.path) {
          if (isTheSamePath(data.currentRoute.path, menu.path)) {
            tmp.title = menu.title || ''
            tmp.subtitle = menu.subtitle || ''
            let item = {
              text: menu.text
            }
            if (menu.icon) {
              item.icon = menu.icon
            }
            tmp.breadcrumb.push(item)
            return false
          }
        } else {
          _.each(menu.children, child => {
            if (isTheSamePath(data.currentRoute.path, child.path)) {
              tmp.title = child.title
              tmp.subtitle = child.subtitle

              // level1
              let item = {
                text: menu.text
              }
              if (menu.icon) {
                item.icon = menu.icon
              }
              tmp.breadcrumb.push(item)

              // level2
              let item2 = {
                text: child.text || ''
              }
              if (child.icon) {
                item2.icon = child.icon
              }

              tmp.breadcrumb.push(item2)
              return false
            }
          })
        }
      })
      state.pageInfo = tmp
    }
  },

  setFuncs(state, data) {
    state.funcs = data.funcs
  },

  setUser(state, data) {
    state.user = data.user
  },

  setTitleVisiable(state, visible) {
    state.showTitle = visible
  },

  setBreadcrumbVisiable(state, visible) {
    state.showBreadCrumb = visible
  },

  setSidebarFixed(state, fixed) {
    state.fixed = fixed
    localStorage.set('sidebar-fixed', fixed.toString())
  }
}

const getters = {
  isActive: state => o => {
    return o.active || (o.children && _.some(o.children, c => c.active))
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
