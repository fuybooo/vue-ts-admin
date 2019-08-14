import {Route} from '../types'
import DictionaryController from '../controllers/DictionaryController'

const routeList: Route[] = [
  {
    action: 'list',
    controller: DictionaryController,
    path: '/dictionary/list',
  },
  {
    action: 'listType',
    controller: DictionaryController,
    path: '/dictionary/listType',
  },
  {
    action: 'create',
    controller: DictionaryController,
    path: '/dictionary/create',
  },
  {
    action: 'update',
    controller: DictionaryController,
    path: '/dictionary/update',
  },
  {
    action: 'delete',
    controller: DictionaryController,
    path: '/dictionary/delete',
  },
  {
    action: 'get',
    controller: DictionaryController,
    path: '/dictionary/get',
  },
]
export default routeList
