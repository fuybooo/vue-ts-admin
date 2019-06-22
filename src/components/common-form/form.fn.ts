import {Option, Schema} from '@/components/common-form/form.model'

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
