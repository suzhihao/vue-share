/**
 * Created by Wu Jian Ping on - 2017/11/01.
 */

import shared from './shared'
import allShared from '../shared'

let config = {}

if (!__BROWSER__) { // avoid import at client js by mistake
  let tmp = {}

  // dev
  if (__DEV__) {
    tmp.api = require('./dev/api')
    tmp.log4js = require('./dev/log4js')
  }
  // sit
  if (__SIT__) {
    tmp.api = require('./sit/api')
    tmp.log4js = require('./sit/log4js')
  }
  // uat
  if (__UAT__) {
    tmp.api = require('./uat/api')
    tmp.log4js = require('./uat/log4js')
  }
  // prod
  if (__PROD__) {
    tmp.api = require('./prod/api')
    tmp.log4js = require('./prod/log4js')
  }

  config = Object.assign({}, allShared, shared, tmp)
}

export default config
