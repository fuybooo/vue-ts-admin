import * as mongoose from 'mongoose'
import BaseModel from './BaseModel'
export default class UserModel extends BaseModel {
  public getName (): string {
    return 'user'
  }
  public getSchema (): mongoose.SchemaDefinition {
    return {
      username: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      password: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      passSalt: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
    }
  }
}
