import * as mongoose from 'mongoose'
import BaseModel from './BaseModel'
export default class FriendsModel extends BaseModel {
  public getName (): string {
    return 'friends'
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
