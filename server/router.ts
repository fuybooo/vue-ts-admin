import * as Router from 'koa-router'
import {Route} from './types'
import intercept from './utils/intercept'
import loginRouteList from './routers/login-router'
import userRouteList from './routers/user-router'
import menuRouteList from './routers/menu-router'
import tenantRouteList from './routers/tenant-router'
import dictionaryRouteList from './routers/dictionary-router'
// @ts-ignore
const router = new Router()
export const baseUrl = '/api'
export const routeList: Route[] = [
  ...loginRouteList,
  ...userRouteList,
  ...menuRouteList,
  ...tenantRouteList,
  ...dictionaryRouteList,
]
routeList.forEach(route => intercept(router, route))
export default router
