import Vue from 'vue'
import _ from 'lodash'
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
import validators from './validators'

Validator.localize('zh_CN', zhCN)

_.forEach(validators, (value, name) => {
  Validator.extend(name, {
    validate: value.validator,
    getMessage: (field, args) => value.error
  })
})

const config = {
  errorBagName: 'validatorErrors', // change if property conflicts
  fieldsBagName: 'validatorFields',
  delay: 0,
  locale: 'zh_CN',
  dictionary: {
    'zh_CN': {
      messages: {
        required: (field, args) => '必填',
        between: (field, args) => `${field}必须在${args[0]}-${args[1]}之间`
      }
    }
  },
  strict: true,
  classes: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true
}

Vue.use(VeeValidate, config)
