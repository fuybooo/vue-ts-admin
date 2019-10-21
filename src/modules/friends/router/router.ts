import {ProRouteConfig} from '@/model/project/route/route.model'
import {getNeedNotTokenRouter} from '@/model/project/route/route.fn'
const Friends = () => import(/* webpackChunkName: "friends" */ '@/modules/friends/views/Friends.vue')
const FriendsList = () => import(/* webpackChunkName: "friends" */ '@/modules/friends/views/friends-list/FriendsList.vue')
const FriendsListDetail = () => import(/* webpackChunkName: "friends" */ '@/modules/friends/views/friends-list/FriendsListDetail.vue')

const router: ProRouteConfig = {
  path: '/friends',
  name: 'friends',
  component: Friends,
  children: [
    {
      path: 'friends-list',
      name: 'friends-list',
      component: FriendsList,
      meta: {
        title: '好友列表',
      },
    },
    {
      path: 'friends-list-detail/:pattern/:id?',
      name: 'friends-list-detail',
      component: FriendsListDetail,
      meta: {
        title: '好友列表详情',
        parentName: 'friends-list',
      },
    },
  ],
  meta: {
    title: '交友',
  },
}
export default getNeedNotTokenRouter(router)
