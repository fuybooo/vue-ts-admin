const pkg = require('../package')
module.exports = {
  publicPath: `/${pkg.name}/prd`,
  outputDir: 'dist/prd',
}
