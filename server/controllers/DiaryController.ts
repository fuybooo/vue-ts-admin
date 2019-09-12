import BaseController from './BaseController'
import instance from '../utils/instance'
import DiaryModel from '../models/DiaryModel'
import {resReturn} from '../utils/intercept'
import DiaryInstance from '../models/DiaryInstance'
import {Ctx, SchemaMap} from '../types'

export default class DiaryController extends BaseController {
  public Model: DiaryModel
  public schemaMap!: SchemaMap
  constructor (ctx: Ctx) {
    super(ctx)
    this.Model = instance.getInstance(DiaryModel)
    this.createSchema()
  }
  private async list (ctx: Ctx) {
    const results: DiaryInstance[] = await this.Model.list(
      {
        ...ctx.params,
        findParams: {
          $or: [
            {
              name: new RegExp(ctx.params.keywords, 'i'),
            },
          ],
        },
      })
    return (ctx.body = resReturn({results}))
  }
  private async create (ctx: Ctx) {
    const result: DiaryInstance = await this.Model.findBy({code: ctx.params.code})
    if (result) {
      return (ctx.body = resReturn(null, 405, '唯一编码重复'))
    }
    try {
      const diary: DiaryInstance = await this.Model.create({
        name: ctx.params.name,
        code: ctx.params.code,
        parentId: ctx.params.parentId,
      })
      ctx.body = resReturn(diary, 0, '创建成功')
    } catch (e) {
      ctx.body = resReturn(null, 500, e.message)
    }
  }
  private async update (ctx: Ctx) {
    const result: DiaryInstance = await this.Model.get(ctx.params.id)
    if (!result) {
      return (ctx.body = resReturn(null, 404, '找不到该资源'))
    }
    try {
      if (ctx.params.code !== result.code) {
        const checkRepeatResult = await this.Model.findBy({code: ctx.params.code})
        if (checkRepeatResult) {
          return (ctx.body = resReturn(null, 405, '唯一编码重复'))
        }
      }
      // todo 验证其他字段
      const updateResult = await this.Model.update({...ctx.params})
      if (updateResult) {
        ctx.body = resReturn({id: ctx.params.id}, 0, '修改成功')
      }
    } catch (e) {
      ctx.body = resReturn(null, 500, e.message)
    }
  }
  private async delete (ctx: Ctx) {
    await this.Model.delete(ctx.params.id, true)
    ctx.body = resReturn(null, 0, '删除成功')
  }
  private async get (ctx: Ctx) {
    const diary: DiaryInstance = await this.Model.get(ctx.params.id)
    ctx.body = resReturn(diary)
  }
  private createSchema () {
    const commonCreateUpdate: SchemaMap = {
      name: {
        type: 'string',
        max: 20,
        min: 2,
        required: true,
      },
      code: {
        type: 'string',
        max: 100,
        min: 1,
        required: true,
      },
    }
    this.schemaMap = {
      create: {
        ...commonCreateUpdate,
      },
      update: {
        ...commonCreateUpdate,
        id: {
          type: 'number',
          required: true,
        },
      },
      get: {
        id : {
          type: 'string',
          required: true,
        },
      },
      delete: {
        id : {
          type: 'string',
          required: true,
        },
      },
    }
  }
}
