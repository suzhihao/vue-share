/**
 * Created by Wu Jian Ping on - 2017/06/05.
 */

import config from '../../config/server'
import axios from 'axios'
import requestInterceptor from './interceptors/request/api'
import responseInterceptor from './interceptors/response/api'

const createApiRequest = (req) => {
  let requestConfig = {
    baseURL: config.api.url,
    headers: {}
  }

  if (req && req.session && req.session.user) {
    if (req.session.user.userId) {
      requestConfig.headers['userId'] = req.session.user.userId
    }
    if (req.session.user.rootId) {
      requestConfig.headers['rootId'] = req.session.user.rootId
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

export default createApiRequest
