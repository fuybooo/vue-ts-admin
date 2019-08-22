import common from './common'
// tslint:disable-next-line:no-var-requires
const config = require('./config.json')
// @ts-ignore
const webRoot = common.path.resolve(__dirname, '../..')
const runTime = common.path.resolve(webRoot, '../..')
const staticDir = common.path.resolve(webRoot, '../dist')
export default {
  webRoot,
  runTime,
  staticDir,
  config,
}
