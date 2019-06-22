import Vue from 'vue'
import Router, {Route} from 'vue-router'
import Login from '@/views/login/Login.vue'
import Main from '@/views/main/Main.vue'
import Forgot from '@/views/login/Forgot.vue'
import Register from '@/views/login/Register.vue'
import {lg} from '@/util/common/fns/fns'
import {KEY_LANG} from '@/model/project/local-storage-keys/keys'
import {i18n, loadLanguageAsync} from '@/config/i18n-config'
import store from '@/stores/store'
import {toggleLangSetting} from '@/stores/mutation-types'
import demoRouter from '@/demo/router/router'

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
        title: 'title.Login',
      },
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: Forgot,
      meta: {
        langSetting: true,
        title: 'title.Forgot',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        langSetting: true,
        title: 'title.Register',
      },
    },
    demoRouter, // 与main平级的demo 必须写在 /main/demo之上
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        demoRouter, // 在main中的demo
      ],
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
  loadLanguageAsync(lg(KEY_LANG) || 'cn').then(() => {
    // 根据语言设置title
    setTitle(to)
    next()
  })
})
export default router

function toggleLangSettingByTo (to: Route) {
  store.commit(toggleLangSetting, to.meta.langSetting)
}
export function setTitle (to: Route) {
  const defaultTitle = 'title.THC'
  // @ts-ignore
  document.title = i18n.t(to.meta ? to.meta.title || defaultTitle : defaultTitle)
}
