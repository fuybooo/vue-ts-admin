import * as mongoose from 'mongoose'
import BaseModel from './BaseModel'
export default class PlanModel extends BaseModel {
  public getName (): string {
    return 'plan'
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
