/**
 * Created by Wu Jian Ping on - 2017/06/15.
 */

import redisClient from './redis-client'

const mainRedis = redisClient('mainRedis')
const authRedis = redisClient('authRedis')
const securityRedis = redisClient('securityRedis')
const spiderRedis = redisClient('spiderRedis')

export {
  mainRedis,
  authRedis,
  securityRedis,
  spiderRedis
}

export default {
  mainRedis,
  authRedis,
  securityRedis,
  spiderRedis
}
