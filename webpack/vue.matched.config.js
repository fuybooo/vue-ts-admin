const devConfig = require('./vue.dev.config')
const prodConfig = require('./vue.prod.config')
const BUILD_MODE = process.env.BUILD_MODE
function getConfig () {
  let config
  switch (BUILD_MODE) {
    case 'dev':
      config = devConfig
      break
    case 'node':
    case 'prod':
      config = prodConfig
      break
    default:
      config = devConfig
      break
  }
  return config
}
module.exports = getConfig()
