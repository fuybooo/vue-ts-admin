function getTime (type = 'yyyy-MM-dd HH:mm:ss') {
  const now = new Date()
  const p0 = num => (num + '').padStart(2, '0')
  let date
  const y = now.getFullYear()
  const M = p0(now.getMonth() + 1)
  const d = p0(now.getDate())
  const H = p0(now.getHours())
  const m = p0(now.getMinutes())
  const s = p0(now.getSeconds())
  if (type === 'yyyy-MM-dd HH:mm:ss') {
    date = `${y}-${M}-${d} ${H}:${m}:${s}`
  } else if (type === 'yyyy-MM') {
    date = `${y}-${M}`
  }
  return date
}
function guid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // tslint:disable-next-line:no-bitwise
    const r = Math.random() * 16 | 0
    // tslint:disable-next-line:no-bitwise
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}
module.exports = {
  getTime,
  guid,
}
