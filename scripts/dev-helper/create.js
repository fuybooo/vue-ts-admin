/**
 * @Description: 创建通用模块，页面
 * @author fuyongbo@everjiankang.com
 * @date 2019-07-18
 */
const fs = require('fs')
const path = require('path')
const moduleConfig = require('./create-config')
const util = require('./util')
const mn = util.getLineName(moduleConfig.module.name)
// 创建模块目录结构
function createModule () {
  // 创建该模块的文件夹
  createDir(mn)
  // 静态资源
  createDir(mn, 'assets')
  // less
  createFile('', mn, 'assets', 'style.less')
  // 组件文件夹
  createDir(mn, 'components')
  // 路由文件夹
  createDir(mn, 'router')
  // 路由文件
  createFile(getRouterFileContent(), mn, 'router', 'router.ts')
  // 页面文件夹
  createDir(mn, 'views')
  // 主文件
  createFile(getMainFileContent(), mn, 'views', getMainFileName())
  createPages()
  // 日志
  appendLog()
  // 提示语
  console.log(`
-----
新的模块已经创建成功，请做如下操作：
1. 修改新创建的router.ts
2. 在main.router.ts中引入该模块下的router.ts
-----
`)
}
// 创建页面
function createPages () {
  // 检测模块是否已创建
  const dirPath = path.resolve(moduleConfig.module.baseDir, mn, 'views')
  if (!fs.existsSync(dirPath)) {
    console.log(`
-----
文件夹 ${dirPath} 不存在，请创建该模块先
-----
`)
    return
  }
  moduleConfig.pages.forEach(item => {
    const itemName = util.getLineName(item.name)
    createDir(mn, 'views', `${mn}-${itemName}`)
    createFile(getPageFileContent(item), mn, 'views', `${mn}-${itemName}`, `${util.getClassName(mn, itemName)}.vue`)
    // 默认是打开新的页面进行详情的创建和编辑
    if (!item.dialogDetail) {
      createFile(getPageDetailFileContent(item), mn, 'views', `${mn}-${itemName}`, `${util.getClassName(mn, itemName)}Detail.vue`)
    }
  })
  // 提示语
  console.log(`
-----
新的页面已经创建成功，请检查路由是否正确：
-----
`)
}
function createDir (...paths) {
  const dirPath = path.resolve(moduleConfig.module.baseDir, ...paths)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }
}
function createFile (content, ...paths) {
  const filePath = path.resolve(moduleConfig.module.baseDir, ...paths)
  // 为了安全起见，这里如果文件存在，则不做处理
  if (fs.existsSync(filePath)) {
    console.log(`
-----
文件 ${filePath} 已存在，不处理...
-----
`)
    return
  }
  fs.writeFileSync(filePath, content)
}
function getMainFileName () {
  return `${util.upperCaseFirst(util.getCamelName(mn))}.vue`
}
function appendLog ({type = 'MODULE'} = {}) {
  const filePath = path.resolve('..', __dirname, 'create-file-log.txt')
  const content = `${util.getTime()} ${type} ${JSON.stringify(moduleConfig)}
`
  if (fs.existsSync(filePath)) {
    fs.appendFileSync(filePath, content)
  } else {
    fs.writeFileSync(filePath, content)
  }
}

function getPageFileContent (item) {
  return require('./create-content-page')(item)
}
function getPageDetailFileContent (item) {
  return require('./create-content-detail')(item)
}
function getMainFileContent () {
  return require('./create-content-main')()
}
function getRouterFileContent () {
  return require('./create-content-router')()
}
module.exports = {
  createModule,
}
