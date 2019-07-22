import {routeList} from '../router'
import {getUrl} from '../utils/intercept'
import base from '../base'
import common from '../common'

export default class BaseController {
  public ctx
  public roleMap = {
    admin: 'admin',
    member: 'member',
  }
  public $auth // 是否拥有权限
  constructor (ctx) {
    this.ctx = ctx
  }
  public async init (ctx) {
    // 判断权限
    const withoutTokenRouteList = routeList.filter(item => item.withoutToken)
    if (withoutTokenRouteList.some(route => getUrl(route) === ctx.path)) {
      this.$auth = true
    } else {
      await this.checkLogin(ctx)
    }
  }
  public async checkLogin (ctx) {
    const token = ctx.cookie.get(base.config.projectPrefix + 'TOKEN')
    const uid = ctx.cookie.get(base.config.projectPrefix + 'UID')
    try {
      if (!token || !uid) {
        return false
      } else {
        // 检查uid和token是否匹配
        // 1. 根据uid查询user 是否能够查到有效的用户
        // 2. 根据token解析出的uid 是否与uid相同
      }
    } catch (e) {
      common.log(e, 'error')
    }
  }

}
