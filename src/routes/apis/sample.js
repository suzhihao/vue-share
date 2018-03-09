/**
 * Created by zhihao_su on 2017/11/14.
 */
import { Router } from 'express'
import moment from 'moment'

let router = new Router()

router.get('/', (req, res) => {
  // NOTE： 这边最终会换成请求api组提供的http接口
  let page = req.query.page || 1
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
  res.json({
    status: 1,
    message: '操作成功',
    data: {
      items,
      total
    }
  })
})

export default router
