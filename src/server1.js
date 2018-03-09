/**
 * Created by Wu Jian Ping on - 2017/11/02.
 */

import express from 'express'
import compression from 'compression'
import path from 'path'
import helmet from 'helmet'
import fs from 'fs'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
// import prepareContext from './core/security/prepare-context'
// import middleware from './core/security/middleware'
// import session from './core/session'
import Context from './core/context'
import config from '../tools/config'
// import errorHandlers from './handlers'
import logger from './core/logger'

import http from 'http'
import https from 'https'

http.globalAgent.keepAlive = true
http.globalAgent.keepAliveMsecs = 60 * 1000

https.globalAgent.keepAlive = true
https.globalAgent.keepAliveMsecs = 60 * 1000

if (!__DEV__) {
  process.on('uncaughtException', (err) => {
    logger.fatal('uncaughtException', err)
    setTimeout(() => {
      process.exit(1)
    }, 0)
  })
}

const PORT = process.env.PORT || config.backendPort || 9000
const app = express()

app.use(helmet())
app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))

// setup body-parser
app.use(bodyParser.json({limit: '5000kb'}))
app.use(bodyParser.raw({limit: '5000kb'}))
app.use(bodyParser.urlencoded({extended: false, limit: '5000kb'}))
app.use(bodyParser.text({type: 'text/xml'}))

app.use((req, res, next) => {
  let context = new Context()
  req.context = context
  next()
})

// setup cookie-parser
app.use(cookieParser())

// attach session middleware
// app.use(session)

// prepeare context & requestContext
// app.use(prepareContext)

// http logger
// app.use(middleware.httpLogger)

// xss
// app.use(middleware.xssLimit)

// attach public routers
// require('./router-public')(app)

// attach apis
require('./router-api')(app)

if (__BUILD__) {
// 这么干着先，回头优化
  app.get('*', (req, res, next) => {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, content) => {
      if (err) {
        next(err)
      } else {
        res.send(content)
      }
    })
  })
}

// handle 500
// app.use(errorHandlers.all)

let consoleLogger = console
app.listen(PORT, function(err) {
  if (err) {
    throw err
  }
  consoleLogger.log(`Listening at http://localhost:${PORT}/`) // eslint-disable-line
})
