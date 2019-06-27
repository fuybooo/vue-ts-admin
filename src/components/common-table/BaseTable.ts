import Vue, {VNodeChildren} from 'vue'
Vue.component('BaseTable', {
  render (createElement: typeof Vue.prototype.$CreateElement) {
    const defaultTableAttrs = {}
    return createElement('h1', '测试')
  },
})
