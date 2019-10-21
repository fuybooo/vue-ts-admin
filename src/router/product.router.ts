import {ProRouteConfig} from '@/model/project/route/route.model'
import diaryRoute from '@/modules/diary/router/router'
import planRoute from '@/modules/plan/router/router'
import friendsRoute from '@/modules/friends/router/router'
const ProductList = () => import(/* webpackChunkName: "productList" */ '@/modules/product-list/ProductList.vue')
const router: ProRouteConfig[] = [
  {
    path: '/product-list',
    name: 'product-list',
    component: ProductList,
    meta: {
      title: '产品列表',
      needNotToken: true,
    },
  },
  // @ts-ignore
  diaryRoute,
  // @ts-ignore
  planRoute,
  // @ts-ignore
  friendsRoute,
]
export default router
