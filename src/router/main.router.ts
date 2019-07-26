import {ProRouteConfig} from '@/model/project/route/route.model'
import Main from '@/views/main/Main.vue'
import MainHome from '@/views/main/MainHome.vue'
import demoRouter from '@/demo/router/router'
import systemRouter from '@/modules/system/router/router'

export const mainRoute: ProRouteConfig = {
  path: '/main',
  name: 'main',
  redirect: {name: 'home'},
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
    demoRouter,
    systemRouter,
  ],
  meta: {
    title: 'main',
  },
}
