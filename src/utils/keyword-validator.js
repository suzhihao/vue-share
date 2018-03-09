/**
 * Created by Wu Jian Ping on - 2017/06/06.
 */

import _ from 'lodash'

const dictionary = [
  // '有限',
  // '公司',
  // '有限公司',
  // '有限责任',
  // '有限責任',
  // '限公',
  // '科技',
  // '发展',
  // '發展'
]

const contains = (val) => {
  return _.some(dictionary, o => o === val)
}

const isValid = (val) => {
  return val && val.length >= 2 && !contains(val) // keyword长度>=2 并且不在字典中
}

export default {
  contains,
  isValid
}
