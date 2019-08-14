import BaseController from './BaseController'
import instance from '../utils/instance'
import DictionaryModel from '../models/DictionaryModel'
import {resReturn} from '../utils/intercept'
import DictionaryInstance from '../models/DictionaryInstance'
import {Ctx, SchemaMap} from '../types'
import {ListParams} from '../models/BaseModelInterface'

export default class DictionaryController extends BaseController {
  public Model: DictionaryModel
  public schemaMap!: SchemaMap
  constructor (ctx: Ctx) {
    super(ctx)
    this.Model = instance.getInstance(DictionaryModel)
    this.createSchema()
  }
  private async list (ctx: Ctx) {
    const keywordsReg = new RegExp(ctx.params.keywords, 'i')
    const results: DictionaryInstance[] = await this.Model.list(
      {
        ...ctx.params,
        findParams: {
          $or: [
            {
              name: keywordsReg,
              code: keywordsReg,
              typeName: keywordsReg,
              typeCode: keywordsReg,
            },
          ],
        },
        sortField: 'typeCode,code',
        sortOrder: '-1,-1',
      })
    return (ctx.body = resReturn({results}))
  }
  private async listType (ctx: Ctx) {
    const listParams: ListParams = {
      sortField: 'typeCode,code',
      sortOrder: '-1,-1',
    }
    if (!ctx.params.type.includes(',')) {
      listParams.findParams = {
        typeCode: ctx.params.type,
      }
    } else {
      listParams.findParams = {
        $or: ctx.params.type.map((item: string) => ({typeCode: item})),
      }
    }
    const results: DictionaryInstance[] = await this.Model.list(listParams)
    return (ctx.body = resReturn({results}))
  }
  private async create (ctx: Ctx) {
    const result: DictionaryInstance = await this.Model.findBy({code: ctx.params.code})
    if (result) {
      return (ctx.body = resReturn(null, 405, '唯一编码重复'))
    }
    try {
      const dictionary: DictionaryInstance = await this.Model.create({
        name: ctx.params.name,
        code: ctx.params.code,
        typeName: ctx.params.typeName,
        typeCode: ctx.params.typeCode,
      })
      ctx.body = resReturn(dictionary, 0, '创建成功')
    } catch (e) {
      ctx.body = resReturn(null, 500, e.message)
    }
  }
  private async update (ctx: Ctx) {
    const result: DictionaryInstance = await this.Model.get(ctx.params.id)
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
    const dictionary: DictionaryInstance = await this.Model.get(ctx.params.id)
    ctx.body = resReturn(dictionary)
  }
  private createSchema () {
    const commonCreateUpdate: SchemaMap = {
      typeName: {
        type: 'string',
        max: 20,
        min: 2,
        required: true,
      },
      typeCode: {
        type: 'string',
        max: 100,
        min: 1,
        required: true,
      },
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
      listType: {
        type : {
          type: 'string',
          required: true,
        },
      },
    }
  }
}
