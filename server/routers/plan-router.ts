import {Route} from '../types'
import PlanController from '../controllers/PlanController'
import {getNeedNotTokenRouter} from '../utils/fns'

const routeList: Route[] = [
  {
    action: 'list',
    controller: PlanController,
    path: '/plan/list',
  },
  {
    action: 'create',
    controller: PlanController,
    path: '/plan/create',
  },
  {
    action: 'update',
    controller: PlanController,
    path: '/plan/update',
  },
  {
    action: 'delete',
    controller: PlanController,
    path: '/plan/delete',
  },
  {
    action: 'get',
    controller: PlanController,
    path: '/plan/get',
  },
]
export default getNeedNotTokenRouter(routeList)
