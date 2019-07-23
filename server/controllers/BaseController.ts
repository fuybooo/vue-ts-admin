import {routeList} from '../router'
import {getUrl} from '../utils/intercept'
import common from '../common'
import instance from '../utils/instance'
import UserModel from '../models/UserModel'
import {KEY_TOKEN, KEY_UID} from '../utils/shared'

export default class BaseController {
  public ctx
  public roleMap = {
    admin: 'admin',
    member: 'member',
  }
  public $auth = false // 是否拥有权限
  constructor (ctx) {
    this.ctx = ctx
  }
  public async init (ctx) {
    // 判断权限
    const withoutTokenRouteList = routeList.filter(item => item.withoutToken)
    if (withoutTokenRouteList.some(route => ctx.path.includes(getUrl(route)))) {
      this.$auth = true
    } else {
      await this.checkLogin(ctx)
    }
  }
  public async checkLogin (ctx) {
    const token = ctx.cookie.get(KEY_TOKEN)
    const uid = ctx.cookie.get(KEY_UID)
    try {
      if (!token || !uid) {
        return false
      } else {
        // 检查uid和token是否匹配
        // 1. 根据uid查询user 是否能够查到有效的用户
        // 2. 根据token解析出的uid 是否与uid相同
        const userInstance: UserModel = instance.getInstance(UserModel)
        const user = userInstance.findById(uid)
        console.log('checkLogin:', user)
        this.$auth = true
        // if (user) {
        // }
      }
    } catch (e) {
      common.log(e, 'error')
    }
  }

}
