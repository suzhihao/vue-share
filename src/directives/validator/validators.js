/**
 * Created by Wu Jian Ping on - 2017/05/27.
 */

const regexs = {
  number: /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
  // email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
  // email 加入不允许
  // 中文:\u4e00-\u9fa5
  // 日文：\u0800-\u4e00
  // 韩文：\u3130-\u318F
  // 韩文：\uAC00-\uD7A3
  // 其他：不知道了
  email: /^(([^<>()[\]\\.,;:\s@\"\u4e00-\u9fa5\u0800-\u4e00\u3130-\u318F\uAC00-\uD7A3]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
  mobile: /^1[3|4|5|7|8]\d{9}$/,
  telephone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,8}((-\d{1,5})|\(\d{1,5}\))?|400[0-9]{7}$/,
  enterprisePhone: /^400[0-9]{7}$|^800[0-9]{7}$/,
  password: /^[\w\~\!\@\#\$\%\^\&\*\(\)\-\=\+\|\[\]\{\}\;\:\,\.\?\/\`\"\'\\]{8,20}$/,  // eslint-disable-line
  website: /((http|ftp|https):\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/
}

const optional = (val) => (val === '' || val === null || val === undefined)

export default {
  // required: {
  //   validator: (val) => {
  //     if (!optional(val)) {
  //       return !optional(val.trim())
  //     }
  //     return false
  //   },
  //   error: '必填'
  // },

  number: {
    validator: function(val) {
      return optional(val) || regexs.number.test(val)
    },
    error: '只能输入数字'
  },

  email: {
    validator: (val) => (optional(val) || regexs.email.test(val)),
    error: '电子邮件格式错误'
  },

  date: {
    validator: (val) => (optional(val) || !/Invalid|NaN/.test(new Date(val).toString())),
    error: '日期格式错误'
  },

  mobile: { // 手机
    validator: (val) => (optional(val) || regexs.mobile.test(val)),
    error: '手机号码格式错误'
  },

  telephone: { // 座机（区号和分机可选）
    validator: (val) => (optional(val) || regexs.telephone.test(val)),
    error: '电话号码格式错误'
  },

  phone: { // 手机和座机(包括400电话)合在一起
    validator: (val) => (optional(val) || regexs.mobile.test(val) || regexs.telephone.test(val) || regexs.enterprisePhone.test(val)),
    error: '电话号码格式错误'
  },

  phoneOrMail: { // 电话号码或者电子邮件
    validator: (val) => (optional(val) || regexs.mobile.test(val) || regexs.telephone.test(val) || regexs.email.test(val)),
    error: '请输入电话号码或电子邮箱地址'
  },

  ChineseOrEnglish: { // 中英文和空格，不包含特殊字符、标点等
    validator: (val) => (/^[a-z\u4e00-\u9fa5\t\x20]+$/i.test(val)),
    error: '抱歉，只能输入中英文'
  },

  forbiden: { // 含有script
    validator: (val) => !(/(script)/.test(val)),
    error: '存在非法字符'
  },

  password: {
    validator: (val) => (optional(val) || regexs.password.test(val)),
    error: '必须为8-20个字母、数字、特殊符号，但不允许出现空格字符'
  },

  website: {
    validator: (val) => (optional(val) || regexs.website.test(val)),
    error: '网址域名格式错误'
  }
}
