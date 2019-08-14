import BaseController from './BaseController'
import instance from '../utils/instance'
import OrganizationModel from '../models/OrganizationModel'
import {resReturn} from '../utils/intercept'
import OrganizationInstance from '../models/OrganizationInstance'
import {Ctx, SchemaMap} from '../types'
import FileService from '../services/FileService'

export default class OrganizationController extends BaseController {
  public Model: OrganizationModel
  public schemaMap!: SchemaMap
  constructor (ctx: Ctx) {
    super(ctx)
    this.Model = instance.getInstance(OrganizationModel)
    this.createSchema()
  }
  private async list (ctx: Ctx) {
    const results: OrganizationInstance[] = await this.Model.list(
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
    const result: OrganizationInstance = await this.Model.findBy({code: ctx.params.code})
    if (result) {
      return (ctx.body = resReturn(null, 405, '唯一编码重复'))
    }
    try {
      const organization: OrganizationInstance = await this.Model.create({
        name: ctx.params.name,
        code: ctx.params.code,
        parentId: ctx.params.parentId,
      })
      ctx.body = resReturn(organization, 0, '创建成功')
    } catch (e) {
      ctx.body = resReturn(null, 500, e.message)
    }
  }
  private async update (ctx: Ctx) {
    const result: OrganizationInstance = await this.Model.get(ctx.params.id)
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
    const organization: OrganizationInstance = await this.Model.get(ctx.params.id)
    ctx.body = resReturn(organization)
  }
  private async upload (ctx: Ctx) {
    if (ctx.request.files) {
      const file = ctx.request.files.file
      FileService.readFile(file)
    }
    ctx.body = resReturn(null, 0, '测试结果')
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
