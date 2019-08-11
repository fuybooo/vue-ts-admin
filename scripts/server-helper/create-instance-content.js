const util = require('../util/util')
function getContent (moduleConfig) {
  const mn = util.getCamelName(moduleConfig.name)
  return (
    `import {BaseInstance} from './BaseInstance'

export default interface ${mn}Instance extends BaseInstance {
  name: string,
  code: string,
}
`)
}
module.exports = getContent
