/**
 * Created by Wu Jian Ping on - 2017/06/15.
 */
import session from './express-session'
import connectRedis from 'connect-redis'
import config from '../../config/server'
import {mainRedis} from '../redis/redis-server'

const RedisStore = connectRedis(session)

export default session({
  name: config.session.name,
  store: new RedisStore({
    client: mainRedis,
    prefix: config.session.prefix,
    ttl: 60 * 60 // 1 hour
  }),
  resave: true,
  saveUninitialized: false,
  secret: config.session.secret
})
