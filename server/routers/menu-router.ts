import {Route} from '../types'
import MenuController from '../controllers/MenuController'

const routeList: Route[] = [
  {
    action: 'list',
    controller: MenuController,
    path: '/menu/list',
  },
  {
    action: 'create',
    controller: MenuController,
    path: '/menu/create',
  },
  {
    action: 'update',
    controller: MenuController,
    path: '/menu/update',
  },
  {
    action: 'delete',
    controller: MenuController,
    path: '/menu/delete',
  },
  {
    action: 'get',
    controller: MenuController,
    path: '/menu/get',
  },
  {
    action: 'updateSort',
    controller: MenuController,
    path: '/menu/updateSort',
  },
]
export default routeList
