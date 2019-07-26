import * as mongoose from 'mongoose'
import common from '../common'
import autoIncrement from '../utils/mongoose-auto-increment'
import base from '../base'

function createModel (model: string, schema: mongoose.Schema | mongoose.SchemaDefinition) {
  if (!(schema instanceof mongoose.Schema)) {
    schema = new mongoose.Schema(schema)
  }
  (schema as mongoose.Schema).set('autoIndex', false)
  return mongoose.model(model, schema as mongoose.Schema, model)
}
function connect (cb?: (db: any) => any) {
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  const options: any = {
    useNewUrlParser: true,
    useCreateIndex: true,
    user: base.config.db.user,
    pass: base.config.db.pass,
  }
  let connectString = base.config.db.connectString || `mongodb://${base.config.db.servername}:${base.config.db.port}/${base.config.db.DATABASE}`
  if (!connectString.includes('?authSource=') && base.config.db.authSource) {
    connectString += `?authSource=${base.config.db.authSource}`
  }
  const db = mongoose.connect(
    connectString,
    options,
    err => {
      if (err) {
        common.log(err + ' [mongodb connect error]', 'error')
      }
    },
  )
  db.then(() => {
    common.log('mongodb load success')
    if (cb) {cb(db)}
  }).catch(err => common.log(err + ', mongodb load error', 'error'))
  autoIncrement.initialize()
  return db
}
export default {
  createModel,
  connect,
}
