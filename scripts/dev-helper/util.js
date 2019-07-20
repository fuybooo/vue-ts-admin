function upperCaseFirst (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
function getTime () {
  const now = new Date()
  const p0 = num => (num + '').padStart(2, '0')
  return `${now.getFullYear()}-${p0(now.getMonth() + 1)}-${p0(now.getDate())} ${p0(now.getHours())}:${p0(now.getMinutes())}:${p0(now.getSeconds())}`
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
