/**
 * Created by Wu Jian Ping on - 2017/06/05.
 */

import logger from './core/logger'
import error500 from './routes/errors/500/index.hbs'

const errorLogger = (err, req, res, next) => {
  if (__DEV__) {
    logger.error(err)
  }
  next(err)
}

const errorJson = (err, req, res, next) => {
  if (req.xhr) {
    if (err.status === 401) {
      res.status(401).end() // 直接交给前端处理
    } else if (err.status === 403) { // 权限不足
      res.status(403).end()
    } else if (err.status === 404) {
      res.status(404).end()
    } else {
      let error = {
        status: err.status || 500,
        message: err.message || '未知错误'
      }
      if (!__PROD__) { // PROD不输出stack
        error.stack = err.stack || ''
      }
      res.status(500).json(error)
    }
  } else {
    next(err)
  }
}

const errorPage = (err, req, res, next) => {
  if (!req.xhr) {
    if (err.status === 401) { // 要求登录
      // TODO: 跳转到login
    } else if (err.status === 403) { // 权限不足
      res.status(403).send(403)
    } else if (err.status === 404) {
      res.status(404).end()
    } else if (err.status === 405) {
      res.status(405).send('Method not allowed')
    } else {
      let error = {
        status: err.status || 500,
        message: err.message || '未知错误',
        login: req.session.user != null
      }
      if (!__PROD__) {
        error.stack = err.stack || ''
      }
      res.status(500).send(error500(error))
    }
  } else { // 丢给系统默认处理吧
    next(err)
  }
}

export default {
  all: [errorLogger, errorJson, errorPage],
  errorLogger: errorLogger,
  errorJson: errorJson,
  errorPage: errorPage
}
