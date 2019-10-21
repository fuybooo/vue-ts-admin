import {Route} from '../types'
import DiaryController from '../controllers/DiaryController'
import {getNeedNotTokenRouter} from '../utils/fns'

const routeList: Route[] = [
  {
    action: 'list',
    controller: DiaryController,
    path: '/diary/list',
  },
  {
    action: 'create',
    controller: DiaryController,
    path: '/diary/create',
  },
  {
    action: 'update',
    controller: DiaryController,
    path: '/diary/update',
  },
  {
    action: 'get',
    controller: DiaryController,
    path: '/diary/get',
  },
]
export default getNeedNotTokenRouter(routeList)
