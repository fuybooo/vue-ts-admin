import {ProRouteConfig} from '@/model/project/route/route.model'
import {getNeedNotTokenRouter} from '@/model/project/route/route.fn'
const Diary = () => import(/* webpackChunkName: "diary" */ '@/modules/diary/views/Diary.vue')
const DiaryList = () => import(/* webpackChunkName: "diary" */ '@/modules/diary/views/diary-list/DiaryList.vue')
const DiaryDetail = () => import(/* webpackChunkName: "diary" */ '@/modules/diary/views/diary-list/DiaryDetail.vue')

const router: ProRouteConfig = {
  path: '/diary',
  name: 'diary',
  component: Diary,
  children: [
    {
      path: 'diary-list',
      name: 'diary-list',
      component: DiaryList,
      meta: {
        title: '日记',
      },
    },
    {
      path: 'diary-detail/:pattern/:id?',
      name: 'diary-detail',
      component: DiaryDetail,
      meta: {
        title: '日记详情',
        parentName: 'diary-list',
      },
    },
  ],
  meta: {
    title: '日记',
  },
}
export default getNeedNotTokenRouter(router)
