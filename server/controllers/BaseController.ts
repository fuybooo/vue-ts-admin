import {routeList} from '../router'
import {getUrl} from '../utils/intercept'
import common from '../common'
import instance from '../utils/instance'
import UserModel from '../models/UserModel'
import {KEY_TOKEN, KEY_UID} from '../utils/shared'
import UserInstance from '../models/UserInstance'
import * as jwt from 'jsonwebtoken'
import {Ctx} from '../types'

export default abstract class BaseController {
  public ctx: Ctx
  public roleMap = {
    admin: 'admin',
    member: 'member',
  }
  public $auth = false // 是否拥有权限
  public $uid: number | string | null = null // 当前验证过的用户id
  public $user: UserInstance | null = null // 当前验证过的用户对象
  protected constructor (ctx: Ctx) {
    this.ctx = ctx
  }

  public async init (ctx: Ctx) {
    // 判断权限
    const withoutTokenRouteList = routeList.filter(item => item.withoutToken)
    if (withoutTokenRouteList.some(route => ctx.path.includes(getUrl(route)))) {
      this.$auth = true
    } else {
      await this.checkLogin(ctx)
    }
  }

  public async checkLogin (ctx: Ctx) {
    const token = ctx.cookies.get(KEY_TOKEN)
    // @ts-ignore
    const uid = +ctx.cookies.get(KEY_UID)
    try {
      if (token && uid) {
        // 检查uid和token是否匹配
        // 1. 根据uid查询user 是否能够查到有效的用户
        // 2. 根据token解析出的uid 是否与uid相同
        const userModel: UserModel = instance.getInstance(UserModel)
        const user: UserInstance = await userModel.get(uid, false)
        if (user) {
          let decoded: any
          try {
            decoded = jwt.verify(token, user.passSalt)
          } catch (err) {
            common.log(err, 'error')
            return false
          }
          if (decoded.uid === uid) {
            this.$uid = uid
            this.$user = user
            this.$auth = true
            return true
          }
        }
      }
      return false
    } catch (e) {
      common.log(e, 'error')
      return false
    }
  }

}
