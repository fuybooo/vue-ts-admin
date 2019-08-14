import * as mongoose from 'mongoose'
import common from '../common'
import autoIncrement from '../utils/mongoose-auto-increment'
import db from '../utils/db'
import BaseModelInterface, {ListParams} from './BaseModelInterface'

export default abstract class BaseModel implements BaseModelInterface {
  public name: string
  public schema: mongoose.Schema
  public model: mongoose.Model<any>
  public currentPage = 1
  public pageSize = 20
  public defaultSchema = {
    createTime: mongoose.Schema.Types.Number,
    updateTime: mongoose.Schema.Types.Number,
    isDeleted: mongoose.Schema.Types.Boolean,
    isDisabled: mongoose.Schema.Types.Boolean,
  }
  constructor () {
    this.schema = new mongoose.Schema(this.getSchema())
    this.name = this.getName()
    if (this.isNeedAutoIncrement()) {
      this.schema.plugin(autoIncrement.plugin, {
        model: this.name,
        field: this.getPrimaryKey(),
        startAt: 11,
        incrementBy: common.randomRange(1, 10),
      })
    }
    this.model = db.createModel(this.name, this.schema)
  }
  // @ts-ignore
  public getSchema (): mongoose.SchemaDefinition {
    common.log('Model need getSchema function')
  }
  // @ts-ignore
  public getName (): string {
    common.log('Model need getName function')
  }

  public getPrimaryKey (): string {
    return '_id'
  }
  public isNeedAutoIncrement (): boolean {
    return true
  }

  public getSortParams (listParams: ListParams = {}) {
    if (listParams.sortField) {
      if (listParams.sortField.includes(',')) {
        return listParams.sortField.split(',').
          // @ts-ignore
          map((item: string, i: number) => ({[item]: listParams.sortOrder.split(',')[i]})).
          reduce((p, c) => ({...p, ...c}), {})
      }
      return {[listParams.sortField]: listParams.sortOrder}
    } else {
      return {_id: -1}
    }
  }
  public getFields (listParams: ListParams = {}, withoutPwd: boolean = true) {
    const defaultExcludes = {
      ...Object.keys(this.defaultSchema).map(p => ({[p]: 0})).reduce((p, c) => ({...p, ...c}), {}),
      __v: 0,
      ...(withoutPwd ? {
        password: 0,
        passSalt: 0,
      } : {}),
      // isDeleted: 1,
    }
    if (typeof listParams.fields === 'undefined') {
      if (!listParams.notExcludesDefaultFields) {
        return defaultExcludes
      } else {
        return ''
      }
    } else if (typeof listParams.fields === 'string') {
      if (!listParams.notExcludesDefaultFields) {
        return Object.keys(defaultExcludes).map(f => `-${f} `).join('') + listParams.fields
      } else {
        return listParams.fields
      }
    } else if (typeof listParams.fields === 'object') {
      if (!listParams.notExcludesDefaultFields) {
        return {...listParams.fields, ...defaultExcludes}
      } else {
        return listParams.fields
      }
    }
  }
  public list (listParams: ListParams = {}) {
    let query = this.model
      .find(...(listParams.findParams ? (Array.isArray(listParams.findParams) ? listParams.findParams : [{isDeleted: {$ne: true}, ...listParams.findParams}]) : [{isDeleted: {$ne: true}}]))
      .sort(this.getSortParams(listParams))
      .skip(((listParams.currentPage || this.currentPage) - 1) * (listParams.pageSize || this.pageSize))
    if (listParams.pageSize) {
      query = query.limit(Math.min(100, listParams.pageSize || this.pageSize))
    }
    return query.select(this.getFields(listParams)).exec()
  }
  public count (countParams: any = {}): any {
    return this.model.countDocuments({isDeleted: {$ne: true}, ...countParams})
  }

  public get (id: number | string, withoutPwd: boolean = true) {
    return this.model.findById(id).select(this.getFields({}, withoutPwd))
  }
  public findBy (map: any, withoutPwd: boolean = true) {
    return this.model.findOne({isDeleted: {$ne: true}, ...map}).select(this.getFields({}, withoutPwd))
  }
  public create (data: any) {
    return new this.model(data).save()
  }
  public update (map: any): any {
    if ('id' in map) {
      const id = map.id
      delete map.id
      return this.model.findByIdAndUpdate(id, map)
    }
  }
  public delete (id: string | number, really: boolean = false): any {
    if (really) {
      return this.model.findByIdAndRemove(id)
    } else {
      return this.update({id, isDeleted: true})
    }
  }
}
