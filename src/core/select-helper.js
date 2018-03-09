/**
 * Created by Wu Jian Ping on - 2017/06/01.
 */

import _ from 'lodash'

export const singleSelect = (list, item, predicate = (o) => o.code !== item.code) => {
  item.selected = !item.selected
  if (item.selected) {
    _.chain(list)
      .filter(predicate)
      .each((o) => { o.selected = false })
      .value()
  }
}

export const multipleSelect = (list, item) => {
  item.selected = !item.selected
}

export var buildOptions = (list, type, creator = (o) => _.cloneDeep(o)) => {
  let clone = _.map(list, o => creator(o))
  _.each(clone, o => {
    o.type = type
    o.selected = false
  })
  return clone
}
