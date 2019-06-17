import Vue from 'vue'
import ElementUI from 'element-ui'
import './assets/less/common/element-variable.scss'
import './assets/less/common/index.less'
import './assets/less/project/index.less'
import App from './App.vue'
import router from './router/router'
import store from './stores/store'
import './registerServiceWorker'
import '@/util/common/vue-prototype/vue-prototype'
import {i18n} from '@/config/i18n-config'
import '@/components/index'

Vue.use(ElementUI, {
  size: 'mini',
  zIndex: 3000,
})
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
