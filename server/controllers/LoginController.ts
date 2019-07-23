import BaseController from './BaseController'
import instance from '../utils/instance'
import UserModel from '../models/UserModel'
import common from '../common'
import {resReturn} from '../utils/intercept'
import UserInstance from '../models/UserInstance'
import * as jwt from 'jsonwebtoken'
import {KEY_TOKEN, KEY_UID} from '../utils/shared'
import {SchemaMap} from '../types'

export default class LoginController extends BaseController {
  public Model: UserModel
  public schemaMap: SchemaMap
  constructor (ctx) {
    super(ctx)
    this.Model = instance.getInstance(UserModel)
    this.createSchema()
  }
  private async login (ctx) {
    const username = ctx.request.body.username
    const password = ctx.request.body.password
    const result: UserInstance = await this.Model.findByUsername(username)
    if (!result) {
      return (ctx.body = resReturn(null, 404, '该用户不存在'))
    } else if (common.generatePassword(password, result.passSalt) === result.password) {
      this.setCookie(result._id, result.password)
      return (ctx.body = resReturn(result))
    } else {
      return (ctx.body = resReturn(null, 405, '密码错误'))
    }
  }
  private async register (ctx) {
    const params = ctx.request.body
    if (!params.username) {
      return (ctx.body = resReturn(null, 400, 'username 不能为空'))
    }
    if (!params.password) {
      return (ctx.body = resReturn(null, 400, 'password 不能为空'))
    }
    const passSalt = common.randomStr()
    try {
      const user = await this.Model.save({
        username: params.username,
        password: common.generatePassword(params.password, passSalt),
        passSalt,
      })
      ctx.body = resReturn(user)
    } catch (e) {
      ctx.body = resReturn(null, 401, e.message)
    }
  }
  private setCookie (uid, passSalt) {
    const token = jwt.sign({uid}, passSalt, {expiresIn: '7 days'})
    const expires = new Date()
    expires.setDate(expires.getTime() + 7 * 24 * 60 * 60 * 1000)
    this.ctx.cookie.set(KEY_TOKEN, token, {
      expires, httpOnly: true,
    })
    this.ctx.cookie.set(KEY_UID, uid, {
      expires, httpOnly: true,
    })
  }
  private createSchema () {
    this.schemaMap = {
      login: {
        username: {
          type: 'string',
          max: 20,
          min: 2,
          required: true,
        },
        password: {
          type: 'string',
          max: 20,
          min: 6,
          required: true,
        },
      },
    }
  }
}
