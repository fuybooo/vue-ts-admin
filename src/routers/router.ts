import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login.vue'
import Main from '@/views/main/Main.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: '/login',
      name: 'login',
      component: Login,
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
