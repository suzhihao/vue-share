/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */
// import middleware from './core/security/middleware'

export default (app) => {
  // 特殊初始化
  // if (!__PROD__) {
  //   app.get('/i-want-to-initialize-system', securityMiddleware.internalLimit, (req, res, next) => {
  //     require('./core/security/strategy/initialize.js')
  //       .then(() => {
  //         res.send('Successfully')
  //       })
  //       .catch(err => {
  //         next(err)
  //       })
  //   })
  // }

  // app.use('/api/*', [
  //   middleware.tokenLimit,
  //   middleware.restrictWords,
  //   middleware.authentication
  // ])

  app.use('/api/sample', require('./routes/apis/sample'))
}
