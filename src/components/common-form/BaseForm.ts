import Vue, {VNodeChildren} from 'vue'
import {childrenCompMap, compMap, Schema, Option, FormChangeEvent} from '@/components/common-form/form.model'
import {pattern} from '@/model/common/models'
import {getProp, guid, setProp} from '@/util/common/fns/fns'
import {getLabelOfOption, getValueOfOption, isCheckbox, isDate, isDateRange, isSelect} from '@/util/common/fns/fns-form'
import format from 'date-fns/format'

Vue.component('BaseForm', {
  render (createElement) {
    // el-form 的attr属性
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
      inline: this.inline,
    }
    if (!this.inline) {
      formProps.labelWidth = this.formProps.labelWidth || '120px'
      formProps.labelPosition = this.formProps.labelPosition || 'right'
    }
    const formItems: VNodeChildren = createFormItems.bind(this)(createElement)
    if (this.showBtn) {
      // @ts-ignore
      formItems.push(createBtnItem.bind(this)(createElement))
    }
    return createElement(
      'el-form',
      {
        props: formProps,
        ...formAttrs,
      },
      // @ts-ignore
      this.isRow ? [createElement('el-row', {}, formItems)] : formItems,
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
    span: {
      type: Number,
      default: 24,
    },
    inline: {
      type: Boolean,
      default: true,
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
    btn: {
      type: Object,
      default () {
        return {}
      },
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

/**
 * 创建表单的所有项目
 * @param createElement
 */
function createFormItems (createElement: typeof Vue.prototype.$createElement): VNodeChildren {
  // @ts-ignore
  const me = this
  // 循环处理schema
  const schema: Schema[] = me.schema
  // todo 判断表单的模式 渲染成输入框或者文本
  // const formPattern: pattern = this.formPattern
  const formItems = schema.map(item => {
    let formItem
    // todo 处理slot方式的表单项
    formItem = createFormItem.bind(me)(createElement, item)
    return formItem
  })
  // @ts-ignore
  return formItems
}

/**
 * 根据单个Schema 创建表单的其中一项
 * @param createElement
 * @param item
 */
function createFormItem (createElement: typeof Vue.prototype.$createElement, item: Schema): VNodeChildren {
  // @ts-ignore
  const me = this
  let formControl: VNodeChildren
  if (item.prop) {
    if (item.comp === 'slot') {
      formControl = me.$slots[item.prop]
    } else {
      formControl = createFormControl.bind(me)(createElement, item)
    }
  } else {
    // 处理 prop 为空时的情况
  }
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
      ...getFormItemAttrs(item),
    },
    [formControl], // 此处的参数必须为数组
  )
  return me.isRow ? createElement('el-col', {props: {span: item.span || me.span}}, [formItem]) : formItem
  // return formItem
}

/**
 * 根据单个Schema 创建表单的控件
 * @param createElement
 * @param item
 */
function createFormControl (createElement: typeof Vue.prototype.$createElement, item: Schema): VNodeChildren {
  // @ts-ignore
  const me = this
  let vNodeChildren: VNodeChildren
  vNodeChildren = createFormControlVNodeChildren.bind(me)(createElement, item)
  let formControl: VNodeChildren
  // @ts-ignore
  const tag = compMap[item.comp || 'input']
  formControl = createElement(tag, {
    props: getFormControlProps.bind(me)(item),
    attrs: getFormControlAttrs.bind(me)(item),
    ...getElementDataObject.bind(me)(item),
  }, vNodeChildren)
  return formControl
}

/**
 * 根据单个Schema 创建表单控件的子元素，目前只支持 select radio checkbox
 * @param createElement
 * @param item
 */
// tslint:disable-next-line:max-line-length
function createFormControlVNodeChildren (createElement: typeof Vue.prototype.$createElement, item: Schema): VNodeChildren {
  // @ts-ignore
  const me = this
  let vNodeChildren: VNodeChildren
  // @ts-ignore
  const tag = childrenCompMap[item.comp || 'input']
  // 目前只支持 select radio checkbox 2019-06-25
  if (tag) {
    vNodeChildren = ((item.props || {}).options || []).map((option: Option) => createElement(tag, {
      props: {
        key: getValueOfOption(option, item),
        // 注意： el-checkbox 和el-radio将label属性作为其绑定值
        label: isSelect(item) ? getLabelOfOption(option, item) : getValueOfOption(option, item),
        // value: getValueOfOption(option, item),
        ...(isSelect(item) ? {value: getValueOfOption(option, item)} : {}),
      },
      on: {
        change (val: any) {
          onChildrenChange.bind(me)(val, tag, item, option)
        },
      },
    }, isSelect(item) ? null : getLabelOfOption(option, item)))
  } else {
    vNodeChildren = []
  }
  return vNodeChildren
}

/**
 * 根据单个Schema 获取当前表单控件的props属性
 * @param item
 */
function getFormControlProps (item: Schema) {
  // @ts-ignore
  const me = this
  return {
    value: item.prop ? getProp.bind(me.value)(item.prop) : '',
    ...getDefaultProps.bind(me)(item),
    ...(item.props || {}),
  }
}
/**
 * 根据单个Schema 获取当前表单控件的attrs属性
 * @param item
 */
function getFormControlAttrs (item: Schema) {
  const attrs: any = item.attrs || {}
  if (!item.comp || item.comp === 'input' || item.comp === 'select') {
    attrs.placeholder = attrs.placeholder || item.label
  }
  return attrs
}

function getDefaultProps (item: Schema) {
  const defaultProps: any = {}
  if (!item.comp || item.comp === 'input' || item.comp === 'select') {
    defaultProps.clearable = true
    if (item.comp === 'select') {
      defaultProps.filterable = true
    }
  } else if (item.comp === 'date') {
    const props = item.props || {}
    if (props.type.includes('range')) {
      defaultProps['start-placeholder'] = '开始'
      defaultProps['end-placeholder'] = '结束'
    } else {
      defaultProps.placeholder = props.placeholder || item.label
    }
  }
  return defaultProps
}

/**
 * 根据单个Schema 获取虚拟DOM数据属性
 * @param item
 */
function getElementDataObject (item: Schema) {
  // @ts-ignore
  const me = this
  return {
    class: item.class,
    ref: item.ref,
    refInFor: true,
    on: {
      input (val: any) {
        onInput.bind(me)(val, item)
      },
      change (val: any) {
        onChange.bind(me)(val, item)
      },
    },
  }
}

// 给控件绑定输入事件
function onInput (val: any, item: Schema) {
  // @ts-ignore
  const me = this
  // console.log('input', val, me, item)
  // todo 判断输入框的类型
  if (!isCheckbox(item)) {
    setProp.bind(me.value)(item.prop, val)
    setExtraValue.bind(me)(item, val)
  }
  const changeEvent: FormChangeEvent = {
    type: 'input',
    item,
    value: val,
  }
  me.$emit('change', changeEvent)
}

function onChange (val: any, item: Schema) {
  // @ts-ignore
  const me = this
  const changeEvent: FormChangeEvent = {
    type: 'change',
    item,
    value: val,
  }
  me.$emit('change', changeEvent)
}

// 给控件的子元素绑定change事件
function onChildrenChange (val: any, tag: string, item: Schema, option: Option) {
  // @ts-ignore
  const me = this
  if (isCheckbox(item)) {
    // @ts-ignore
    let options = me.value[item.prop] || item.initValue || []
    const allOptions = item.props.options
    const crtOption = allOptions.find((o: Option) => getValueOfOption(o, item) === getValueOfOption(option, item))
    if (val) {
      if (!options.includes(getValueOfOption(crtOption, item))) {
        options.push(getValueOfOption(crtOption, item))
      }
    } else {
      options = options.filter((o: string | number) => o !== getValueOfOption(crtOption, item))
    }
    const changeEvent: FormChangeEvent = {
      type: 'childChange',
      item,
      value: val,
      option,
    }
    me.$emit('change', changeEvent)
    setProp.bind(me.value)(item.prop, options)
  }
}

// input时 设置表单额外的属性
function setExtraValue (item: Schema, val: any) {
  // @ts-ignore
  const me = this
  if (isDateRange(item)) {
    if (item.startProp && item.endProp) {
      const startDate = new Date(val[0])
      const endDate = new Date(val[1])
      // 设置默认的日期文本
      let start: string = format(startDate, 'YYYY-MM-DD')
      let end: string = format(endDate, 'YYYY-MM-DD')
      if (item.props.type === 'datetimerange') {
        start = format(startDate, 'YYYY-MM-DD HH:mm:ss')
        end = format(endDate, 'YYYY-MM-DD HH:mm:ss')
      } else if (item.props.type === 'monthrange') {
        start = format(startDate, 'YYYY-MM')
        end = format(endDate, 'YYYY-MM')
      }
      setProp.bind(me.value)(item.startProp, val.length === 2 ? start : '')
      setProp.bind(me.value)(item.endProp, val.length === 2 ? end : '')
    }
  } else if (isDate(item)) {
    let date: string = format(new Date(val), 'YYYY-MM-DD')
    if (item.props.type === 'year') {
      date = format(new Date(val), 'YYYY')
    } else if (item.props.type === 'month') {
      date = format(new Date(val), 'YYYY-MM')
    } else if (item.props.type === 'datetime') {
      date = format(new Date(val), 'YYYY-MM-DD HH:mm:ss')
    } else if (item.props.type === 'dates') {
      date = (val || []).map((d: string) => format(new Date(d), 'YYYY-MM-DD'))
    } else if (item.props.type === 'week') {
      date = val
    }
    if (item.aliasProp) {
      setProp.bind(me.value)(item.aliasProp, date)
    }
  }
}
function createBtnItem (createElement: typeof Vue.prototype.$createElement) {
  // @ts-ignore
  const me = this
  // tslint:disable-next-line:max-line-length
  const btnFormItem = createElement('el-form-item', {class: me.btn.class || (me.inline ? 'fr' : '')}, [createElement('el-button', {
    props: {
      type: me.btn.type || 'primary',
    },
    nativeOn: {
      click () {
        me.$emit('btn-click')
      },
    },
  }, [me.btn.text || (me.inline ? '创建' : '保存')])])
  return me.$slots.default || (me.isRow ? [createElement('el-col', {}, [btnFormItem])] : btnFormItem)
}
function getFormItemAttrs (item: Schema) {
  // todo 给每个item加上样式，以控制不同的控件的展示
  return item.formItemAttrs || {}
}
