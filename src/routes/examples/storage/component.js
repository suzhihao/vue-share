import localStorage from '../../../core/storage/local-storage'
import sessionStorage from '../../../core/storage/session-storage'
import cookieStorage from '../../../core/storage/cookie-storage'

export default {
  data() {
    return {
      localStorageData: localStorage.getObject('localStorageData'),
      sessionStorageData: sessionStorage.getObject('sessionStorageData'),
      cookieStorageData: cookieStorage.getObject('cookieStorageData')
    }
  },

  methods: {
    // 设置localStorage
    setLocalStorage() {
      let data = {now: new Date()}
      localStorage.setObject('localStorageData', data)
      this.localStorageData = localStorage.getObject('localStorageData')
    },
    // 获取localStorage数据
    getLocalStorage() {
      alert(JSON.stringify(localStorage.getObject('localStorageData')))
    },
    // 清除localStorage数据
    clearLocalStorage() {
      localStorage.clear('localStorageData')
      this.localStorageData = localStorage.getObject('localStorageData')
    },

    // 设置sessionStorage数据
    setSessionStorage() {
      let data = {now: new Date()}
      sessionStorage.setObject('sessionStorageData', data)
      this.sessionStorageData = sessionStorage.getObject('sessionStorageData')
    },
    // 获取sessionStorage数据
    getSessionStorage() {
      alert(JSON.stringify(sessionStorage.getObject('sessionStorageData')))
    },
    // 清除sessionStorage数据
    clearSessionStorage() {
      sessionStorage.clear('sessionStorageData')
      this.sessionStorageData = sessionStorage.getObject('sessionStorageData')
    },

    // 设置cookieStorage数据
    setCookieStorage() {
      let data = {now: new Date()}
      cookieStorage.setObject('cookieStorageData', data)
      this.cookieStorageData = cookieStorage.getObject('cookieStorageData')
    },
    // 获取cookieStorage数据
    getCookieStorage() {
      alert(JSON.stringify(cookieStorage.getObject('cookieStorageData')))
    },
    // 清除cookieStorage数据
    clearCookieStorage() {
      cookieStorage.clear('cookieStorageData')
      this.cookieStorageData = cookieStorage.getObject('cookieStorageData')
    }
  }
}
