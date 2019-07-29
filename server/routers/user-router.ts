import {Route} from '../types'
import UserController from '../controllers/UserController'

const routeList: Route[] = [
  {
    action: 'list',
    controller: UserController,
    path: '/user/list',
  },
  {
    action: 'create',
    controller: UserController,
    path: '/user/create',
  },
  {
    action: 'update',
    controller: UserController,
    path: '/user/update',
  },
  {
    action: 'delete',
    controller: UserController,
    path: '/user/delete',
  },
  {
    action: 'get',
    controller: UserController,
    path: '/user/get',
  },
]
export default routeList
