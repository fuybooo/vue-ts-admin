const util = require('../util/util')
const createFile = util.createFile
function create (moduleConfig) {
  // 创建 controller
  createFile(moduleConfig, getControllerContent(moduleConfig), 'server/controllers', `${util.getCamelName(moduleConfig.name)}Controller.ts`)
  // 创建 instance
  createFile(moduleConfig, getInstanceContent(moduleConfig), 'server/models', `${util.getCamelName(moduleConfig.name)}Instance.ts`)
  // 创建 model
  createFile(moduleConfig, getModelContent(moduleConfig), 'server/models', `${util.getCamelName(moduleConfig.name)}Model.ts`)
  // 创建 router
  createFile(moduleConfig, getRouterContent(moduleConfig), 'server/routers', `${util.getLineName(moduleConfig.name)}-router.ts`)
}
function getControllerContent (moduleConfig) {
  return require('./create-controller-content')(moduleConfig)
}
function getInstanceContent (moduleConfig) {
  return require('./create-instance-content')(moduleConfig)
}
function getModelContent (moduleConfig) {
  return require('./create-model-content')(moduleConfig)
}
function getRouterContent (moduleConfig) {
  return require('./create-router-content')(moduleConfig)
}
module.exports = create
