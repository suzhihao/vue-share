/**
 * Created by Wu Jian Ping on - 2017/11/01.
 */

export default {
  appenders: {
    app: {
      type: 'console'
    }
  },
  categories: {
    default: {
      appenders: ['app'],
      level: 'debug'
    }
  }
}
