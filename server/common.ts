import * as path from 'path'
import * as fs from 'fs'
// tslint:disable-next-line:no-var-requires
const sha1 = require('sha1')
// tslint:disable-next-line:no-var-requires
const config = require('../config.json')
// tslint:disable-next-line:no-var-requires
const fns = require('../shared/fns.js')
// tslint:disable-next-line:no-var-requires
const ENV = require('../shared/env')
function isExist (filePath: string): boolean {
  return fs.existsSync(filePath)
}
declare type LogType = 'log' | 'error' | 'warn'
function log (msg: any, type: LogType = 'log', op = '') {
  if (!msg) {
    return
  }
  if (process.env.APP_MODE === ENV.APP_MODE.dev) {
    console[type](type, msg)
  }
  const logDir = path.resolve(__dirname, '../..', config.projectPrefix + 'log')
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir)
  }
  const logfile = path.resolve(logDir, `${fns.getTime('yyyy-MM')}.log`)
  if (typeof msg === 'object') {
    if (msg instanceof Error) {
      msg = msg.message
    } else {
      msg = JSON.stringify(msg)
    }
  }
  const data = `[ ${fns.getTime()} ] [ ${type} ] ${op ? `[ ${op} ] ` : ' '}${msg}\n`
  fs.writeFileSync(logfile, data, {flag: 'a'})
}
function randomRange (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min
}
function randomStr (): string {
  return Math.random().toString(36).slice(2)
}
function generatePassword (password: string, passSalt: string): string {
  return sha1(password + sha1(passSalt))
}
export default {
  path,
  fs,
  isExist,
  log,
  randomRange,
  randomStr,
  generatePassword,
}
