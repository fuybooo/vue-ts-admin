import {Route} from '../types'

export function getNeedNotTokenRouter (routerList: Route[]) {
  return routerList.map(item => ({...item, withoutToken: true}))
}
