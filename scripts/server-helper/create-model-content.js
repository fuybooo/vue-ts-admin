const util = require('../util/util')
function getContent (moduleConfig) {
  const mn = util.getCamelName(moduleConfig.name)
  return (
    `import * as mongoose from 'mongoose'
import BaseModel from './BaseModel'
export default class ${mn}Model extends BaseModel {
  public getName (): string {
    return '${util.getLineName(moduleConfig.name)}'
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
`)
}
module.exports = getContent
