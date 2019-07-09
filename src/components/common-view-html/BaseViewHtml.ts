import Vue from 'vue'
import './BaseViewHtml.less'
Vue.component('BaseViewHtml', {
  render (createElement) {
    return createElement('span', {
      class: (this.formItem.viewClassName || (this.value === '' || this.value === undefined || this.value === null) ? 'base-view-none' : '') + ' base-view-html',
    }, [getHtmlValue.bind(this)()])
  },
  props: {
    value: [Object, String, Number, Boolean],
    formItem: {
      type: Object,
      default () {
        return {}
      },
    },
  },
})

function getHtmlValue () {
  // @ts-ignore
  const me = this
  if (me.formItem.viewValue) {
    return me.formItem.viewValue
  } else {
    if (me.value === '' || me.value === undefined || me.value === null) {
      return me.formItem.viewDefaultValue === undefined ? '无' : me.formItem.viewDefaultValue
    } else {
      if (me.formItem.viewFilter) {
        return me.formItem.viewFilter(me.value)
      } else {
        return me.value
      }
    }
  }
}
