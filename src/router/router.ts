import Vue from 'vue'
import Router, {Route} from 'vue-router'
import Login from '@/views/login/Login.vue'
import Forgot from '@/views/login/Forgot.vue'
import Register from '@/views/login/Register.vue'
import {lg} from '@/util/common/fns/fns'
import {KEY_LANG} from '@/model/project/local-storage-keys/keys'
import {i18n, loadLanguageAsync} from '@/config/i18n-config'
import store from '@/stores/store'
import {toggleLangSetting} from '@/stores/mutation-types'
import {ProRouteConfig} from '@/model/project/route/route.model'
import {mainRoute} from '@/router/main.router'

Vue.use(Router)

const routes: ProRouteConfig[] = [
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
  // demoRouter, // 与main平级的demo 必须写在 /main/demo之上
  mainRoute,
  {
    path: '*',
    name: '*',
    redirect: 'login',
    meta: {
      title: '*',
    },
  },
]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
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
  const title = to.meta ? to.meta.title || defaultTitle : defaultTitle
  // @ts-ignore
  document.title = title === defaultTitle ? defaultTitle : (i18n.t(defaultTitle) + ' - ' + i18n.t(to.meta ? to.meta.title || defaultTitle : defaultTitle))
}
