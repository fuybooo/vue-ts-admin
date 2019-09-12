import * as mongoose from 'mongoose'
import BaseModel from './BaseModel'
export default class DiaryModel extends BaseModel {
  public getName (): string {
    return 'diary'
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
      ...this.defaultSchema,
    }
  }
}
