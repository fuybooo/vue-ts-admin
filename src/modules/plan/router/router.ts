import {ProRouteConfig} from '@/model/project/route/route.model'
import {getNeedNotTokenRouter} from '@/model/project/route/route.fn'
const Plan = () => import(/* webpackChunkName: "plan" */ '@/modules/plan/views/Plan.vue')
const PlanList = () => import(/* webpackChunkName: "plan" */ '@/modules/plan/views/plan-list/PlanList.vue')
const PlanListDetail = () => import(/* webpackChunkName: "plan" */ '@/modules/plan/views/plan-list/PlanListDetail.vue')

const router: ProRouteConfig = {
  path: '/plan',
  name: 'plan',
  component: Plan,
  children: [
    {
      path: 'plan-list',
      name: 'plan-list',
      component: PlanList,
      meta: {
        title: '计划列表',
      },
    },
    {
      path: 'plan-list-detail/:pattern/:id?',
      name: 'plan-list-detail',
      component: PlanListDetail,
      meta: {
        title: '计划列表详情',
        parentName: 'plan-list',
      },
    },
  ],
  meta: {
    title: '计划',
  },
}
export default getNeedNotTokenRouter(router)
