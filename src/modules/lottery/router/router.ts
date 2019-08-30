import {ProRouteConfig} from '@/model/project/route/route.model'
const Lottery = () => import(/* webpackChunkName: "lottery" */ '@/modules/lottery/views/Lottery.vue')
const LotterySetting = () => import(/* webpackChunkName: "lottery" */ '@/modules/lottery/views/lottery-setting/LotterySetting.vue')
const LotterySettingDetail = () => import(/* webpackChunkName: "lottery" */ '@/modules/lottery/views/lottery-setting/LotterySettingDetail.vue')

const router: ProRouteConfig = {
  path: 'lottery',
  name: 'lottery',
  component: Lottery,
  children: [
    {
      path: 'lottery-setting',
      name: 'lottery-setting',
      component: LotterySetting,
      meta: {
        title: '设置',
      },
    },
    {
      path: 'lottery-setting-detail/:pattern/:id?',
      name: 'lottery-setting-detail',
      component: LotterySettingDetail,
      meta: {
        title: '设置详情',
        parentName: 'lottery-setting',
      },
    },
  ],
  meta: {
    title: '抽奖系统',
  },
}
export default router
