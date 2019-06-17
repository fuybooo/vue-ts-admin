import Vue from 'vue'
import Router, {Route} from 'vue-router'
import Login from '@/views/login/Login.vue'
import Main from '@/views/main/Main.vue'
import Forgot from '@/views/login/Forgot.vue'
import Register from '@/views/login/Register.vue'
import {lg} from '@/util/common/fns/fns'
import {KEY_LANG} from '@/model/project/local-storage-keys/keys'
import {loadLanguageAsync} from '@/config/i18n-config'
import store from '@/stores/store'
import {toggleLangSetting} from '@/stores/mutation-types'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: '/login',
      name: 'login',
      component: Login,
      meta: {
        langSetting: true,
      },
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: Forgot,
      meta: {
        langSetting: true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        langSetting: true,
      },
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
    {
      path: '*',
      redirect: 'login',
    },
  ],
})
// 前置守卫
router.beforeEach((to, from, next) => {
  // 根据路由元信息判断是否应该显示语言选择器
  toggleLangSettingByTo(to)
  // 异步加载语言环境
  loadLanguageAsync(lg(KEY_LANG) || 'cn').then(() => next())
})
export default router

function toggleLangSettingByTo (to: Route) {
  store.commit(toggleLangSetting, to.meta.langSetting)
}
