import {ProRouteConfig} from '@/model/project/route/route.model'
const Landing = () => import(/* webpackChunkName: "landing" */ '@/modules/landing/views/Landing.vue')
const router: ProRouteConfig = {
  path: '/',
  name: 'landing',
  component: Landing,
  meta: {
    title: '首页',
    needNotToken: true,
  },
}
export default router
