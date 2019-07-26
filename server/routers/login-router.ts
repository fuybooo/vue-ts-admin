import {Route} from '../types'
import LoginController from '../controllers/LoginController'

const routeList: Route[] = [
  {
    action: 'login',
    controller: LoginController,
    path: '/login',
    withoutToken: true,
  },
  {
    action: 'register',
    controller: LoginController,
    path: '/register',
    withoutToken: true,
  },
]
export default routeList
