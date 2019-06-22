import Vue, {VNode, VNodeChildren} from 'vue'
import {childrenCompMap, compMap, Schema, Option} from '@/components/common-form/form.model'
import {pattern} from '@/model/common/models'
import {guid} from '@/util/common/fns/fns'
import {getLabelOfOption, getValueOfOption} from '@/components/common-form/form.fn'

Vue.component('BaseForm', {
  render (createElement) {
    // el-form 的原生属性
    const defaultFormAttrs = {
      ref: 'form',
      class: 'base-form',
    }
    const formAttrs = {
      ...defaultFormAttrs,
      ...this.formAttrs,
    }
    // el-form的props属性
    const defaultFormProps = {
      size: 'small',
    }
    const formProps = {
      ...defaultFormProps,
      ...this.formProps,
    }
    if (!this.formProps.inline) {
      formProps.labelWidth = this.formProps.labelWidth || '120px'
      formProps.labelPosition = this.formProps.labelPosition || 'right'
    }
    // el-form-item的属性
    const formItems: VNodeChildren = createFormItems.bind(this)(createElement)
    return createElement(
      'el-form',
      {
        props: formProps,
        ...formAttrs,
      },
      formItems,
    )
  },
  methods: {},
  props: {
    // 表单的结构
    schema: {
      type: Array,
      required: true,
    },
    // 表单的双向绑定值
    value: {
      type: Object,
    },
    // 是否为栅格化表单
    isRow: {
      type: Boolean,
      default: false,
    },
    // el-form的props属性
    formProps: {
      type: Object,
      default () {
        return {}
      },
    },
    // el-form的attrs属性
    formAttrs: {
      type: Object,
      default () {
        return {}
      },
    },
    formPattern: {
      type: String,
      default: 'create',
    },
  },
})

function createFormItems (createElement: typeof Vue.prototype.$createElement): VNodeChildren {
  // 循环处理schema
  // @ts-ignore
  const schema: Schema[] = this.schema
  // todo 判断表单的模式 渲染成输入框或者文本
  // @ts-ignore
  // const formPattern: pattern = this.formPattern
  const baseItems = schema.map(item => {
    let formItem
    // todo 处理slot方式的表单项
    if (item.comp === 'custom') {
    } else {
      // @ts-ignore
      formItem = createFormItem.bind(this)(createElement, item)
    }
    return formItem
  })
  // @ts-ignore
  return baseItems
}

function createFormItem (createElement: typeof Vue.prototype.$createElement, item: Schema): VNodeChildren {
  let formControl: VNodeChildren
  // @ts-ignore
  formControl = createFormControl.bind(this)(createElement, item)
  let formItem: VNodeChildren
  // todo 第一个版本先创建原生的el-form 也不包含slot的方式 之后在创建栅格化的表单
  formItem = createElement(
    'el-form-item',
    {
      props: {
        ...(item.formItemProps || {}),
        prop: item.prop,
        label: item.label,
      },
      ...(item.formItemAttrs || {}),
    },
    [formControl], // 此处的参数必须为数组
  )
  return formItem
}

function createFormControl (createElement: typeof Vue.prototype.$createElement, item: Schema): VNodeChildren {
  let vNodeChildren: VNodeChildren
  vNodeChildren = createFormControlVNodeChildren(createElement, item)
  let formControl: VNodeChildren
  // @ts-ignore
  const tag = compMap[item.comp || 'input']
  formControl = createElement(tag, {
    props: (item.props || {}),
    ...(item.attrs || {}),
  }, vNodeChildren)
  return formControl
}
// tslint:disable-next-line:max-line-length
function createFormControlVNodeChildren (createElement: typeof Vue.prototype.$createElement, item: Schema): VNodeChildren {
  let vNodeChildren: VNodeChildren
  // @ts-ignore
  const tag = childrenCompMap[item.comp || 'input']
  if (tag) {
    vNodeChildren = ((item.props || {}).options || []).map((option: Option) => createElement(tag, {
      props: {
        key: getValueOfOption(option, item),
        label: getLabelOfOption(option, item),
        value: getValueOfOption(option, item),
      },
    }, tag === 'el-option' ? null : getValueOfOption(option, item)))
  } else {
    vNodeChildren = []
  }
  return vNodeChildren
}
