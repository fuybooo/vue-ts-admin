const date = new Date()
process.env.VUE_APP_VERSION = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
module.exports = {
}
