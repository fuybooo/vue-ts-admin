import * as mongoose from 'mongoose'
import BaseModel from './BaseModel'
export default class MenuModel extends BaseModel {
  public getName (): string {
    return 'menu'
  }
  public getSchema (): mongoose.SchemaDefinition {
    return {
      name: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      code: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      parentId: {
        type: mongoose.Schema.Types.Number,
        required: true,
      },
      sort: {
        type: mongoose.Schema.Types.Number,
      },
      type: {
        type: mongoose.Schema.Types.Number,
      },
      ...this.defaultSchema,
    }
  }
}
