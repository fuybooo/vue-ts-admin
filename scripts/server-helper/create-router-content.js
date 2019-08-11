const util = require('../util/util')
function getContent (moduleConfig) {
  const mn = util.getCamelName(moduleConfig.name)
  const smallMn = util.getSmallCamelName(moduleConfig.name)
  return (
    `import {Route} from '../types'
import ${mn}Controller from '../controllers/${mn}Controller'

const routeList: Route[] = [
  {
    action: 'list',
    controller: ${mn}Controller,
    path: '/${smallMn}/list',
  },
  {
    action: 'create',
    controller: ${mn}Controller,
    path: '/${smallMn}/create',
  },
  {
    action: 'update',
    controller: ${mn}Controller,
    path: '/${smallMn}/update',
  },
  {
    action: 'delete',
    controller: ${mn}Controller,
    path: '/${smallMn}/delete',
  },
  {
    action: 'get',
    controller: ${mn}Controller,
    path: '/${smallMn}/get',
  },
]
export default routeList
`)
}
module.exports = getContent
