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
  public findById (id) {
    return this.model.findOne({_id: id})
  }
  public findByUsername (username) {
    return this.model.findOne({username})
  }
  public save (data) {
    return new this.model(data).save()
  }
}
