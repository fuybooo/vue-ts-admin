import {Route} from '../types'
import TenantController from '../controllers/TenantController'

const routeList: Route[] = [
  {
    action: 'list',
    controller: TenantController,
    path: '/tenant/list',
  },
  {
    action: 'create',
    controller: TenantController,
    path: '/tenant/create',
  },
  {
    action: 'update',
    controller: TenantController,
    path: '/tenant/update',
  },
  {
    action: 'delete',
    controller: TenantController,
    path: '/tenant/delete',
  },
  {
    action: 'get',
    controller: TenantController,
    path: '/tenant/get',
  },
]
export default routeList
