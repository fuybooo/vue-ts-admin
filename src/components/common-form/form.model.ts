export declare type ItemComp = 'input' | 'select' | 'date' | 'checkbox' | 'radio' | 'custom'
export interface Schema {
  prop?: string // 字段属性名
  label?: string // 字段名称
  comp?: ItemComp // 控件类型
  props?: any // 控件的props属性
  attrs?: any // 控件的标签属性
  formItemProps?: any // FormItem 的props属性
  formItemAttrs?: any // FormItem 的标签属性
  labelKeyOfOption?: string // 自定义的labelKey
  valueKeyOfOption?: string // 自定义的valueKey
}
export const compMap = {
  input: 'el-input',
  date: 'el-date-picker',
  select: 'el-select',
  checkbox: 'el-checkbox-group',
  radio: 'el-radio-group',
}
export const childrenCompMap = {
  input: '',
  date: '',
  select: 'el-option',
  checkbox: 'el-checkbox',
  radio: 'el-radio',
}
// 创建虚拟DOM时，第二个参数的可选参数
export interface ElementDataObject {
  // 与 `v-bind:class` 的 API 相同，
  // 接受一个字符串、对象或字符串和对象组成的数组
  'class'?: string | any | any[]
  // 与 `v-bind:style` 的 API 相同，
  // 接受一个字符串、对象，或对象组成的数组
  style?: string | any | any[]
  // 普通的 HTML 特性
  attrs?: any
  // 组件 prop
  props?: any
  // DOM 属性
  domProps?: any
  // 事件监听器在 `on` 属性内，
  // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
  // 需要在处理函数中手动检查 keyCode。
  on?: any
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn?: any
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives?: any
  // 作用域插槽的格式为
  // { name?: props => VNode | Array<VNode> }
  scopedSlots?: any
  // 如果组件是其它组件的子组件，需为插槽指定名称
  slot?: string
  // 其它特殊顶层属性
  key?: string
  ref?: string
  // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor?: boolean
}

export interface Option {
  id?: string | number
  key?: string | number
  value?: string | number | boolean
  label?: string | number | boolean
  text?: string | number | boolean
  name?: string | number | boolean
}
