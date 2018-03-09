/**
 * Created by Wu Jian Ping on 2017/06/05.
 */

import logger from '../../../logger'
import httpStatus from '../../http-status'

const logResponse = (context) => {
  if (context.config && context.config.requestInfo) {
    let requestInfo = context.config.requestInfo
    requestInfo.end = new Date().getTime()
    requestInfo.elapsed = requestInfo.end - requestInfo.start
    requestInfo.url = context.config.url
    requestInfo.stage = 'response'

    if (context.status) {
      requestInfo.status = context.status
    }
    requestInfo.query = context.config.params
    requestInfo.body = context.config.data
    if (context.data) {
      requestInfo.output = context.data
    }
    logger.debug(requestInfo.requestId, requestInfo)
  }
}

const logError = (error) => {
  if (error.config && error.config.requestInfo) {
    let requestInfo = error.config.requestInfo
    requestInfo.end = new Date().getTime()
    requestInfo.elapsed = requestInfo.end - requestInfo.start
    requestInfo.url = error.config.url
    requestInfo.stage = 'response'

    if (error.response && error.response.status) {
      requestInfo.status = +error.response.status || -1
    }
    requestInfo.query = error.config.params
    requestInfo.body = error.config.data

    if (error.response && error.response.data) {
      requestInfo.output = JSON.stringify(error.response.data || '')
    }

    let message = (error.response && error.response.data && error.response.data.message) || error.message || '未知错误'
    requestInfo.message = message
    let logEntity = {
      eventType: 'api',
      apiRequest: requestInfo
    }

    if (error.config.requestContext) {
      logEntity.requestContext = error.config.requestContext
    }

    logger.error(message, logEntity)
  }
}

const chinese = /[\u4e00-\u9fa5]/

export default [
  response => {
    logResponse(response)
    return response.data.data
  },
  error => {
    logError(error)
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (+error.response.status === 500) {
        let err = new Error(chinese.test(error.response.data.message) ? error.response.data.message : '系统内部错误')
        err.status = 500
        err.errcode = error.response.data.status
        return Promise.reject(err)
      } else {
        let err = httpStatus.getError(error.response.status)
        if (err) {
          return Promise.reject(err)
        } else {
          let err = new Error('未知错误')
          err.status = 500
          return Promise.reject(err)
        }
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      let err = new Error('request error')
      err.status = 500
      return Promise.reject(err)
    } else {
      // something happened in setting up the request that triggered an Error
      let err = new Error(error.message)
      err.status = 500
      return Promise.reject(err)
    }

    // if ((+error.status === 500 || +error.response.status === 500) && error.response && error.response.data) {
    //   let err = new Error(chinese.test(error.response.data.message) ? error.response.data.message : '系统内部错误')
    //   err.status = 500
    //   err.errcode = error.response.data.status
    //   return Promise.reject(err)
    // } else {
    //   let err = httpStatus.getError(error.response.status)
    //   if (err) {
    //     return Promise.reject(err)
    //   } else {
    //     let err = new Error('未知错误')
    //     err.status = 500
    //     return Promise.reject(err)
    //     // return Promise.reject({ status: 500, message: '未知错误' }) // eslint-disable-line
    //   }
    // }
  }
]
