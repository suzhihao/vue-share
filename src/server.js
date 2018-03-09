/*
 Created by zhihao_su on 2018/2/23.
*/
import 'babel-polyfill' // async await

import Koa from 'koa'
import helmet from 'koa-helmet'
import compress from 'koa-compress'
import koaBody from 'koa-body'
import koaStatic from 'koa-static'

import Router from 'koa-router'
import moment from 'moment'

import session from 'koa-session'
import redisStore from './core/koa-redis'

import path from 'path'
import config from '../tools/config'
import serverConfig from './config/server'

import request from 'request'

const PORT = process.env.PORT || config.backendPort || 9000

const app = new Koa()
const router = new Router()

app.keys = ['some secret hurr']

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(helmet())

app.use(compress())

app.use(koaBody())

app.use(koaStatic(path.join(__dirname, 'public')))

import {mainRedis} from './core/redis/redis-server'

app.use(session({
  key: 'sid', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 60 * 60 * 24 * 1000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  // store: redisStore({
  //   client: mainRedis,
  //   prefix: 'koa:session:runtime:'
  // })
}, app))


// 图片上传相关请求
router.all('/app-upload', async ctx => {
  let reqUrl = serverConfig.api.ms.replace('{endpoint}', 'upload')
  // let reqUrl = 'http://localhost:8888'
  let x = request(reqUrl)
  ctx.respond = false
  ctx.req.pipe(x)
  x.pipe(ctx.res)
})
router.all('/preview-upload/:images', ctx => {
  let reqUrl = `${serverConfig.api.ms.replace('{endpoint}', 'upload')}/files/${encodeURIComponent(ctx.params.images)}`
  // let reqUrl = `http://localhost:8888/files/${req.params.images}`
  let x = request(reqUrl)
  ctx.respond = false
  ctx.req.pipe(x)
  x.pipe(ctx.res)
})

router.get('/api/sample', async ctx => {
  // NOTE： 这边最终会换成请求api组提供的http接口
  let page = ctx.query.page || 1
  let total = 1000
  let start = (page - 1) * 10
  let end = page * 10

  let items = []
  for (let i = start; i < end; ++i) {
    items.push({
      title: `Task - ${i + 1}`,
      lastUpdateUser: '系统管理员',
      lastUpdateTime: moment().format('YYYY-MM-DD HH:mm:ss')
    })
  }
  let n = ctx.session.user
  if (!n) {
    ctx.session.user = {a: 1}
  } else {
    ctx.session.user.a = ctx.session.user.a + 1
  }
  await new Promise(resolve => {
    setTimeout(resolve, 500)
  })
  try {
    ctx.assert(true, 401, 'error 333')
    ctx.body = {
      status: 1,
      message: '操作成功',
      data: {
        items,
        total
      }
    }
  } catch (e) {
    console.log('123123:' + e)
  }
})

app.use(router.routes(), router.allowedMethods())

app.on('error', (error, ctx) => {
  console.log('server error:' + error)
})

app.listen(PORT)