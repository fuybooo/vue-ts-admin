import BaseController from './BaseController'
import instance from '../utils/instance'
import UserModel from '../models/UserModel'
import common from '../common'
import {resReturn} from '../utils/intercept'
import UserInstance from '../models/UserInstance'
import * as jwt from 'jsonwebtoken'
import {KEY_TOKEN, KEY_UID} from '../utils/shared'
import {Ctx, SchemaMap} from '../types'

export default class LoginController extends BaseController {
  public Model: UserModel
  // @ts-ignore
  public schemaMap: SchemaMap
  constructor (ctx: Ctx) {
    super(ctx)
    this.Model = instance.getInstance(UserModel)
    this.createSchema()
  }
  private async login (ctx: Ctx) {
    const username = ctx.params.username
    const password = ctx.params.password
    const result: UserInstance = await this.Model.findBy({username}, false)
    if (!result) {
      return (ctx.body = resReturn(null, 404, '该用户不存在'))
    } else if (common.generatePassword(password, result.passSalt) === result.password) {
      const uid = result._id
      const passSalt = result.passSalt
      const token = jwt.sign({uid}, passSalt, {expiresIn: '7 days'})
      this.setCookie(uid + '', token)
      return (ctx.body = resReturn({
        username: result.username,
        uid,
        token,
      }))
    } else {
      return (ctx.body = resReturn(null, 403, '密码错误'))
    }
  }
  private async register (ctx: Ctx) {
    const params = ctx.params
    const passSalt = common.randomStr()
    try {
      const user = await this.Model.create({
        username: params.username,
        password: common.generatePassword(params.password, passSalt),
        passSalt,
      })
      ctx.body = resReturn({name: user.name})
    } catch (e) {
      ctx.body = resReturn(null, 500, e.message)
    }
  }
  private setCookie (uid: string | undefined, token: string) {
    const expires = new Date()
    expires.setDate(expires.getTime() + 7 * 24 * 60 * 60 * 1000)
    this.ctx.cookies.set(KEY_UID, uid, {
      expires, httpOnly: true,
    })
    this.ctx.cookies.set(KEY_TOKEN, token, {
      expires, httpOnly: true,
    })
  }
  private createSchema () {
    const commonLoginRegister: SchemaMap = {
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
    }
    this.schemaMap = {
      login: {
        ...commonLoginRegister,
      },
      register: {
        ...commonLoginRegister,
      },
    }
  }
}
