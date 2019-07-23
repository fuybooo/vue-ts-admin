import * as mongoose from 'mongoose'
import common from '../common'
import autoIncrement from '../utils/mongoose-auto-increment'
import db from '../utils/db'
// import {SchemaDefinition} from 'mongoose'

export default abstract class BaseModel {
  public name
  public schema
  public model
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
}
