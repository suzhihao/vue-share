import _ from 'lodash'
import moment from 'moment'
import searchScope from '../data/search-scope'
import registCapital from '../data/regist-capital'
import registYear from '../data/regist-year'
import operationStatus from '../data/operation-status'
import advanceFilter from '../data/advance-filter'
import organizationType from '../data/organization-type'
import enterpriseType from '../data/enterprise-type'
// import sorterData from '../data/sorter-data'

const createQueryForApi = params => {
  // 处理查询关键字
  let option = {}

  if (params.keyword) {
    option.keyword = params.keyword
  }

  if (params.pScope) {
    option.pScope = params.pScope
  }

  if (params.gScope) {
    option.gScope = params.gScope
  }

  // 处理搜索范围
  let list = []
  if (params.scope && params.scope.length > 0) {
    _.each(params.scope, o => {
      let tmp = _.find(searchScope, n => n.code === +o)
      if (tmp) {
        list.push(tmp.qname)
      }
    })
  }
  // 处理组织类型
  if (params.organizationTypes && params.organizationTypes.length > 0) {
    _.each(params.organizationTypes, o => {
      let tmp = _.find(organizationType, n => n.code === +o)
      if (tmp) {
        list.push(tmp.qname)
      }
    })
  }

  if (list.length > 0) {
    option.method = _.chain(list).join().value()
  }

  // 处理企业类型
  if (params.enterpriseTypes && params.enterpriseTypes.length > 0) {
    option.econType = []
    _.each(params.enterpriseTypes, o => {
      let tmp = _.find(enterpriseType, n => n.code === +o)
      if (tmp) {
        option.econType.push(tmp.qname)
      }
    })
  }

  // 处理注册资本
  if (params.capital) {
    let tmp = _.find(registCapital, o => o.code === +params.capital)
    if (tmp) {
      if (tmp.min) {
        option.capiFrom = tmp.min
      }
      if (tmp.max) {
        option.capiTo = tmp.max
      }
    }
  }
  if (params.capitalInput) {
    if (params.capitalInput.min) {
      option.capiFrom = params.capitalInput.min
    }
    if (params.capitalInput.max) {
      option.capiTo = params.capitalInput.max
    }
  }


  // 处理注册年限
  if (params.year) {
    let tmp = _.find(registYear, o => o.code === +params.year)
    if (tmp) {
      if (tmp.from) {
        option.yearFrom = moment().add(tmp.from, 'years').add(1, 'days').format('YYYY-MM-DD')
      }
      if (tmp.to) {
        option.yearTo = moment().add(tmp.to, 'years').format('YYYY-MM-DD')
      }
    }
  }
  if (params.dateInput) {
    if (params.dateInput.from) {
      option.yearFrom = params.dateInput.from
    }
    if (params.dateInput.to) {
      option.yearTo = params.dateInput.to
    }
  }

  // 处理经营状态
  if (params.status && params.status.length > 0) {
    let list = []
    _.each(params.status, o => {
      let tmp = _.find(operationStatus, n => n.code === +o)
      if (tmp) {
        list.push(tmp.qname)
      }
    })
    if (list.length > 0) {
      // option.status = _.chain(list).join().value()
      option.status = list
    }
  }

  // 处理省市区
  if (params.area) {
    if (params.area.province) {
      option.province = params.area.province
    }
    if (params.area.city) {
      option.city = params.area.city
    }
    if (params.area.district) {
      option.district = params.area.district
    }
  }

  // 处理行业
  if (params.industry) {
    if (params.industry.l1) {
      option.parentDomain = params.industry.l1
    }
    if (params.industry.l2) {
      option.domain = params.industry.l2
    }
  }

  // 处理高级筛选
  if (params.advanced) {
    if (params.advanced.brand) {
      let tmp = _.find(advanceFilter, o => o.filterType === 1 && o.code === +params.advanced.brand)
      if (tmp) {
        option.trademarkCount = tmp.qval
      }
    }
    if (params.advanced.copyright) {
      let tmp = _.find(advanceFilter, o => o.filterType === 2 && o.code === +params.advanced.copyright)
      if (tmp) {
        option.patentCount = tmp.qval
      }
    }
    if (params.advanced.faith) {
      let tmp = _.find(advanceFilter, o => o.filterType === 3 && o.code === +params.advanced.faith)
      if (tmp) {
        option.executionCount = tmp.qval
      }
    }
    if (params.advanced.contact) {
      let tmp = _.find(advanceFilter, o => o.filterType === 4 && o.code === +params.advanced.contact)
      if (tmp) {
        option.phoneCount = tmp.qval
      }
    }
  }

  // 处理排序
  // if (params.sorter) {
  //   let tmp = _.find(sorterData, o => +params.sorter === o.id)
  //   if (tmp) {
  //     option.sortBy = tmp.qval
  //   }
  // }

  // 处理分页
  let page = +params.page || 1 // 没有page给个1
  if (page > 500) {
    page = 500
  }
  option.page = page < 1 ? 1 : page // page小于1的时候给个1

  option.hit = params.hit || 10

  return option
}

export default {
  createQueryForApi
}
