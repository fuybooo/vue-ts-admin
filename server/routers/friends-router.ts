import {Route} from '../types'
import FriendsController from '../controllers/FriendsController'

const routeList: Route[] = [
  {
    action: 'list',
    controller: FriendsController,
    path: '/friends/list',
  },
  {
    action: 'create',
    controller: FriendsController,
    path: '/friends/create',
  },
  {
    action: 'update',
    controller: FriendsController,
    path: '/friends/update',
  },
  {
    action: 'delete',
    controller: FriendsController,
    path: '/friends/delete',
  },
  {
    action: 'get',
    controller: FriendsController,
    path: '/friends/get',
  },
]
export default routeList
