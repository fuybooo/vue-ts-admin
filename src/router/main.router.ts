import demoRouter from '@/demo/router/router'
import Main from '@/views/main/Main.vue'
import {ProRouteConfig} from '@/model/project/route/route.model'
import MainHome from '@/views/main/MainHome.vue'

export const mainRoute: ProRouteConfig = {
  path: '/main',
  name: 'main',
  component: Main,
  children: [
    {
      path: '',
      name: 'home',
      component: MainHome,
      meta: {
        title: 'Home',
        hideBread: true,
      },
    },
    demoRouter, // 在main中的demo
  ],
  meta: {
    title: 'main',
  },
}
