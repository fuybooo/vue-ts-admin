import {Route} from '../types'
import OrganizationController from '../controllers/OrganizationController'

const routeList: Route[] = [
  {
    action: 'list',
    controller: OrganizationController,
    path: '/organization/list',
  },
  {
    action: 'create',
    controller: OrganizationController,
    path: '/organization/create',
  },
  {
    action: 'update',
    controller: OrganizationController,
    path: '/organization/update',
  },
  {
    action: 'delete',
    controller: OrganizationController,
    path: '/organization/delete',
  },
  {
    action: 'get',
    controller: OrganizationController,
    path: '/organization/get',
  },
  {
    action: 'upload',
    controller: OrganizationController,
    path: '/organization/upload',
  },
]
export default routeList
