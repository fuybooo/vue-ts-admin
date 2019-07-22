import common from './common'
// tslint:disable-next-line:no-var-requires
const config = require('../config.json')
const webRoot = common.path.resolve(__dirname, '..')
const staticDir = common.path.resolve(webRoot, 'dist')
export default {
  webRoot,
  staticDir,
  config,
}
