/**
 * Created by Wu Jian Ping on - 2017/06/15.
 */

import redis from 'redis'
import Promise from 'bluebird'
import logger from '../logger'

Promise.promisifyAll(redis.RedisClient.prototype)
Promise.promisifyAll(redis.Multi.prototype)

const clients = {}

export default (name) => {
  if (!clients[name]) {
    let cfg = {
      host: '120.26.219.80',
      port: 6379,
      password: 'r-bp1bbf44b58d2a14:iwP5Zh1J75E5yjO1xvc8wcOzqNDyRa',
      db: 1
    }
    let client = redis.createClient({
      ...cfg,
      retry_strategy: (options) => {
        return 1000 // retry after 1 second
      }
    })
    client.on('error', function(err) {
      // throw err
      logger.error(err)
    })
    clients[name] = client
  }
  return clients[name]
}
