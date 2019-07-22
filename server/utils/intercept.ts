import {Route} from '../types'
import {baseUrl} from '../router'

function intercept (router, route: Route) {
  router[route.method || 'post'](getUrl(route), async ctx => {
    const instance = new route.controller(ctx)
    try {
      await instance.init(ctx)
      ctx.params = {...ctx.request.query, ...ctx.request.body, ...ctx.params}
      if (instance.schemaMap && typeof instance.schemaMap === 'object' && instance.schemaMap[route.action]) {
        const validRes = validateParams(instance.schemaMap[route.action], ctx.params)
        if (!validRes.valid) {
          return (ctx.body = resReturn(null, 400, validRes.message))
        }
      }
    } catch (err) {
      ctx.body = resReturn(null, 500)
    }
  })
}
export function validateParams (action, params) {
  return {
    valid: true,
    message: '',
  }
}
export function resReturn (data = {}, code = 200, msg = '') {
  const message = msg || (code === 500 ? '服务器出错...' : (code === 400 ? '参数异常...' : ''))
  return {
    data,
    code,
    msg: message,
  }
}
export function getUrl (route: Route) {
  return `${baseUrl}${route.path}`
}
export default intercept
