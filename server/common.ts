import * as path from 'path'
import * as fs from 'fs'
// tslint:disable-next-line:no-var-requires
const config = require('../config.json')
// tslint:disable-next-line:no-var-requires
const getTime = require('../shared/fns.js')
function isExist (filePath) {
  return fs.existsSync(filePath)
}
declare type LogType = 'log' | 'error' | 'warn'
function log (msg: any, type: LogType = 'log') {
  if (!msg) {
    return
  }
  console[type](type, msg)
  const logfile = path.resolve(__dirname, '../..', config.projectPrefix + 'log', `${getTime('yyyy-MM')}.log`)
  if (typeof msg === 'object') {
    if (msg instanceof Error) {
      msg = msg.message
    } else {
      msg = JSON.stringify(msg)
    }
  }
  const data = `[ ${getTime()} ] [ ${type} ] ${msg}\n`
  fs.writeFileSync(logfile, data, {flag: 'a'})
}
export default {
  isExist,
  path,
  fs,
  log,
}
