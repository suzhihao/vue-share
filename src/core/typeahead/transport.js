/**
 * Created by Wu Jian Ping on - 2017/06/25.
 */
import _ from 'lodash'
import createRequest from '../request'
import queryString from '../query-string'

const request = createRequest()
export default (option, onSuccess, onError) => {
  let start = new Date()
  request
    .get(option.url, {showError: false, showProgress: false})
    .then(data => {
      onSuccess(data)
      let end = new Date()
      let time = end - start
      let keyword = queryString.parse(option.url.split('?')[1]).key
      let total = data.length > 0 ? data[0].total : 0
      // 自动联想加载完成后触发接口
      let params = _.extend({}, { keyword: keyword, resultCount: total, searchType: 'suggestion', timeConsuming: time })
    })
    .catch(err => {
      onError(err)
    })
}
