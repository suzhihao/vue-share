/**
 * Created by Wu Jian Ping on - 2017/08/01.
 */

import config from '../../config/server'
import axios from 'axios'
import requestInterceptor from './interceptors/request/api'
import responseInterceptor from './interceptors/response/api'

export const createMsRequest = (endpoint, req) => {
  let requestConfig = {
    baseURL: config.api.ms.replace('{endpoint}', endpoint),
    // baseURL: 'http://localhost:8888',
    headers: {}
  }

  if (req && req.session && req.session.user) {
    if (req.session.user.userId) {
      requestConfig.headers['user-id'] = req.session.user.userId
    }
    if (req.session.user.rootId) {
      requestConfig.headers['root-id'] = req.session.user.rootId
    }
  }

  requestConfig.requestContext = req.requestContext

  const client = axios.create(requestConfig)
  // setup interceptor for request
  const [requestResolve, requestReject] = requestInterceptor
  client.interceptors.request.use(requestResolve, requestReject)
  // setup interceptor for response
  const [responseResolve, responseReject] = responseInterceptor
  client.interceptors.response.use(responseResolve, responseReject)

  return client
}

export const createDefaultMsRequest = req => {
  return createMsRequest('backend-gdyt', req)
}

export default {
  createMsRequest,
  createDefaultMsRequest
}
