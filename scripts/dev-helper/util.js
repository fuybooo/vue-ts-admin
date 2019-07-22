const getTime = require('../../shared/fns').getTime
function upperCaseFirst (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
// 得到驼峰名称
function getCamelName (str) {
  return str.split('-').map(item => upperCaseFirst(item)).join('')
}
// 得到中划线名称
function getLineName (str) {
  return str.split('').map(item => item === item.toUpperCase() ? `-${item.toLowerCase()}` : item).join('')
}
function getClassName (mn, itemName) {
  return `${upperCaseFirst(getCamelName(mn))}${upperCaseFirst(getCamelName(itemName))}`
}
module.exports = {
  upperCaseFirst,
  getTime,
  getCamelName,
  getLineName,
  getClassName,
}
