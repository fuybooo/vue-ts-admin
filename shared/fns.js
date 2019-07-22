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
module.exports = {
  getTime,
}
