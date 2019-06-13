import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './routers/router'
import store from './stores/store'
import './registerServiceWorker'

Vue.use(ElementUI, {
  size: 'mini',
  zIndex: 3000,
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
