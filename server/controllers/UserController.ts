import BaseController from './BaseController'
import instance from '../utils/instance'
import UserModel from '../models/UserModel'
import common from '../common'
import {resReturn} from '../utils/intercept'
import UserInstance from '../models/UserInstance'
import {Ctx, SchemaMap} from '../types'
import settings from '../utils/settings'
// tslint:disable-next-line:no-var-requires
const ENV = require('../../shared/env')

export default class UserController extends BaseController {
  public Model: UserModel
  public schemaMap!: SchemaMap
  constructor (ctx: Ctx) {
    super(ctx)
    this.Model = instance.getInstance(UserModel)
    this.createSchema()
  }
  private async list (ctx: Ctx) {
    const results: UserInstance[] = await this.Model.list(
      {
        ...ctx.params,
        findParams: {
          $or: [
            {
              username: new RegExp(ctx.params.keywords, 'i'),
            },
          ],
        },
      })
    const total = await this.Model.count()
    return (ctx.body = resReturn({results, total}))
  }
  private async create (ctx: Ctx, isRegister = false) {
    const result: UserInstance = await this.Model.findBy({username: ctx.params.username})
    if (result) {
      return (ctx.body = resReturn(null, 405, '该用户名已存在'))
    }
    const passSalt = common.randomStr()
    const password = common.generatePassword(isRegister ? ctx.params.password : settings.defaultPassword, passSalt)
    try {
      const user: UserInstance = await this.Model.create({
        username: ctx.params.username,
        password: common.generatePassword(password, passSalt),
        passSalt,
      })
      ctx.body = resReturn({username: user.username, _id: user._id}, 0, isRegister ? '注册成功' : '创建成功')
    } catch (e) {
      ctx.body = resReturn(null, 500, e.message)
    }
  }
  private async update (ctx: Ctx) {
    const result: UserInstance = await this.Model.get(ctx.params.id)
    if (!result) {
      return (ctx.body = resReturn(null, 404, '该用户不存在'))
    }
    try {
      if (ctx.params.username && ctx.params.username !== result.username) {
        const checkRepeatResult = await this.Model.findBy({username: ctx.params.username})
        if (checkRepeatResult) {
          return (ctx.body = resReturn(null, 405, '该用户名已存在'))
        }
      }
      // todo 验证其他字段
      const updateResult = await this.Model.update({...ctx.params})
      if (updateResult) {
        ctx.body = resReturn({id: ctx.params.id}, 0, '用户修改成功')
      }
    } catch (e) {
      ctx.body = resReturn(null, 500, e.message)
    }
  }
  private async delete (ctx: Ctx) {
    // 在测试环境下 做真实删除
    await this.Model.delete(ctx.params.id, process.env.APP_MODE === ENV.APP_MODE.dev)
    ctx.body = resReturn(null, 0, '用户删除成功')
  }
  private async get (ctx: Ctx) {
    const user: UserInstance = await this.Model.get(ctx.params.id)
    ctx.body = resReturn({_id: user._id, username: user.username})
  }
  private createSchema () {
    const commonCreateUpdate: SchemaMap = {
      username: {
        type: 'string',
        max: 20,
        min: 2,
        required: true,
      },
      // password: {
      //   type: 'string',
      //   max: 20,
      //   min: 6,
      //   required: true,
      // },
    }
    this.schemaMap = {
      create: {
        ...commonCreateUpdate,
      },
      update: {
        ...commonCreateUpdate,
      },
      get: {
        id : {
          type: 'string',
          required: true,
        },
      },
    }
  }
}
