import * as mongoose from 'mongoose'
import BaseModel from './BaseModel'
export default class TenantModel extends BaseModel {
  public getName (): string {
    return 'tenant'
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
