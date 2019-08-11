import * as mongoose from 'mongoose'
import BaseModel from './BaseModel'
export default class DictionaryModel extends BaseModel {
  public getName (): string {
    return 'dictionary'
  }
  public getSchema (): mongoose.SchemaDefinition {
    return {
      typeCode: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      typeName: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      name: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      code: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      parentCode: {
        type: mongoose.Schema.Types.String,
      },
      ...this.defaultSchema,
    }
  }
}
