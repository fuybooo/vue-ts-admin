import BaseController from './BaseController'
import instance from '../utils/instance'
import UserModel from '../models/UserModel'
import common from '../common'
import {resReturn} from '../utils/intercept'
import UserInstance from '../models/UserInstance'
import {Ctx, SchemaMap} from '../types'

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
    ctx.body = resReturn({results})
  }
  private async create (ctx: Ctx, isRegister = false) {
    const result: UserInstance = await this.Model.findBy({username: ctx.params.username})
    if (result) {
      return (ctx.body = resReturn(null, 405, '该用户名已存在'))
    }
    const passSalt = common.randomStr()
    const password = common.generatePassword(isRegister ? ctx.params.password : '111111', passSalt)
    try {
      const user: UserInstance = await this.Model.create({
        username: ctx.params.username,
        password: common.generatePassword(password, passSalt),
        passSalt,
      })
      ctx.body = resReturn({name: user.username, _id: user._id})
    } catch (e) {
      ctx.body = resReturn(null, 500, e.message)
    }
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
    }
  }
}
