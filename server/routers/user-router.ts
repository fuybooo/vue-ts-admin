import {Route} from '../types'
import UserController from '../controllers/UserController'

const routeList: Route[] = [
  {
    action: 'list',
    controller: UserController,
    path: '/user/list',
  },
]
export default routeList
