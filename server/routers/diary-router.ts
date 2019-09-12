import {Route} from '../types'
import DiaryController from '../controllers/DiaryController'

const routeList: Route[] = [
  {
    action: 'list',
    controller: DiaryController,
    path: '/diary/list',
    withoutToken: true,
  },
  {
    action: 'create',
    controller: DiaryController,
    path: '/diary/create',
    withoutToken: true,
  },
  {
    action: 'update',
    controller: DiaryController,
    path: '/diary/update',
    withoutToken: true,
  },
  {
    action: 'get',
    controller: DiaryController,
    path: '/diary/get',
    withoutToken: true,
  },
]
export default routeList
