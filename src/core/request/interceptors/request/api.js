/**
 * Created by Wu Jian Ping on 2017/06/07.
 */

import uuid from 'uuid'
import _ from 'lodash'
import logger from '../../../logger'

export default [
  config => {
    config.requestInfo = {
      requestId: uuid(),
      start: new Date().getTime()
    }
    if (config.headers && config.headers['userId']) {
      config.requestInfo.userId = config.headers['user-id']
    }
    if (config.headers && config.headers['rootId']) {
      config.requestInfo.rootId = config.headers['root-id']
    }
    config.timeout = 20000
    return config
  },
  error => {
    if (error.config && error.config.requestInfo) {
      let requestInfo = _.pick(error.config, ['requestInfo'])
      requestInfo.end = new Date().getTime()
      requestInfo.elapsed = requestInfo.end - requestInfo.start
      requestInfo.url = error.config.url
      requestInfo.stage = 'request'

      logger.error(requestInfo.requestId, requestInfo)
    } else {
      logger.error(error.message, error)
    }
    return Promise.reject(error)
  }
]
