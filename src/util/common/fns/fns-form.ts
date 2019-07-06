/**
 * @Description: 表单相关的方法
 * @author fuyongbo@everjiankang.com
 * @date 2019-06-17
 */
import {Option, Schema} from '@/components/common-form/form.model'
import {setProp} from '@/util/common/fns/fns'

export function transferRules (rules: any) {
  const newRules: any = {}
  const keys = Object.keys(rules)
  keys.forEach(item => newRules[item] = rules[item].map((rule: any) => {
    let message: string
    if ('required' in rule) {
      // @ts-ignore
      message = this.$t(rule.message)
    } else if ('max' in rule || 'min' in rule) {
      // @ts-ignore
      message = this.$tc(rule.message, rule.max || rule.min)
    } else {
      // @ts-ignore
      message = this.$t(rule.message)
    }
    return {
      ...rule,
      message,
    }
  }))
  return newRules
}
export function formBuilder (schema: Schema[]): any {
  const form: any = {}
  schema.forEach(item => {
    if (item.prop) {
      if (item.startProp && item.endProp) {
        setProp.bind(form)(item.startProp, item.startInitValue === undefined ? '' : item.startInitValue)
        setProp.bind(form)(item.endProp, item.endInitValue === undefined ? '' : item.endInitValue)
      }
      setProp.bind(form)(item.prop, getInitValue(item))
      if (isDateButNotRange(item)) {
        setProp.bind(form)('_' + item.prop, '')
      }
    }
  })
  return form
  function getInitValue (item: Schema) {
    if (item.initValue === undefined) {
      // 该控件没有设置默认值，则根据其组件设置相应的初始值
      // 数字类型的组件
      switch (item.comp) {
        case 'slider':
        case 'rate':
          return 0
        case 'transfer':
          return []
        default:
          return ''
      }
    } else {
      return item.initValue
    }
  }
}
export {
  formBuilder as fb, // 重命名一个简写的名称
}

export function getValueOfOption (option: Option, item: Schema) {
  let res
  if ('id' in option) {
    res = option.id
  } else if (item.valueKeyOfOption) {
    // @ts-ignore
    res = option[item.valueKeyOfOption]
  } else {
    throw Error('请正确定义option中的key或者value')
  }
  return res
}
export function getLabelOfOption (option: Option, item: Schema) {
  let res
  if ('label' in option) {
    res = option.label
  } else if (item.labelKeyOfOption) {
    // @ts-ignore
    res = option[item.labelKeyOfOption]
  } else {
    throw Error('请正确定义option中的key或者value')
  }
  return res
}

export function isCheckbox (item: Schema) {
  return item.comp === 'checkbox'
}
export function isSelect (item: Schema) {
  return item.comp === 'select'
}
export function isRadio (item: Schema) {
  return item.comp === 'radio'
}
export function isDate (item: Schema) {
  return item.comp === 'date'
}
export function isDateButNotRange (item: Schema) {
  return item.comp === 'date' && item.props && item.props.type && !item.props.type.includes('range')
}
export function isDateRange (item: Schema) {
  return item.comp === 'date' && item.props && item.props.type && item.props.type.includes('range')
}
