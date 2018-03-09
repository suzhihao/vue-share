/**
 * Created by Wu Jian Ping on - 2017/11/01.
 */

const securityKeyPrefix = 'ent-web:security'

export default {
  session: {
    name: 'sid',
    secret: 'idontknownthesecurity',
    prefix: 'ent-web:session:runtime:',
    mapping: 'ent-web:session:mapping:',
    thridLoginPrefix: 'ent-web:thrid-login:',
    pendingSessionPrefix: 'ent-web:session-pedding:'
  },
  gt: {
    geetest_id: '8bcf3d20b76a7ec3b81d503168fc34be',
    geetest_key: '2c8b8dc79a2be69e902d22644479fd71'
  },
  security: {
    securityPrefix: securityKeyPrefix,
    blacklist: securityKeyPrefix + ':config:black-list', // hset
    whitelist: securityKeyPrefix + ':config:white-list', // hset
    spiderlist: 'white', // key
    config: securityKeyPrefix + ':config', // hash
    runtime: securityKeyPrefix + ':runtime',
    userCheckingTask: securityKeyPrefix + ':user-checking-task'
  }
}
