import {Menu} from '@/components/common-menu/menu.model'
import {ProRouteConfig} from '@/model/project/route/route.model'
import {defaultTitle} from '@/model/project/models'
import {mainRoute} from '@/router/main.router'

export function transferRoutesToMenus (routes: ProRouteConfig[], parentRoute?: ProRouteConfig): Menu[] {
  return routes.map(route => {
    // @ts-ignore
    route.meta.pagePath = parentRoute ? [
      ...(parentRoute.meta.pagePath || []),
      parentRoute,
      // 目前只考虑父路由在同级下的情况
      ...(route.meta.parentName ? [routes.find(item => item.name === route.meta.parentName)] : []),
      route,
    ] : []
    return {
      index: route.name, // 这里要求route中的name是必填且唯一的
      hidden: !!route.meta.hidden,
      parentName: route.meta.parentName || '',
      title: route.meta ? (route.meta.menuName || route.meta.title) : defaultTitle,
      ...(route.children ? {children: transferRoutesToMenus(route.children, route)} : {}),
    }
  })
}
export function getDefaultMenus () {
  return transferRoutesToMenus(mainRoute.children || [])
}
