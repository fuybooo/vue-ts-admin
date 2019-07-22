const package = require('./package')
module.exports = {
  assetsDir: './',
  css: {
    loaderOptions: {
      sass: {
        test: /\.scss$/,
      },
    },
  },
  configureWebpack: config => {
    const date = new Date()
    process.env.VUE_APP_VERSION = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  },
  devServer: {
    // 环境配置
    host: "localhost",
    hotOnly: false,
    https: false,
    open: true, // 配置自动启动浏览器,
    port: 4001,
  },
  lintOnSave: true, // 是否在保存的时候检查
  publicPath: process.env.BUILD_MODE === 'dev' ? '/prd' : `/${package.name}/prd`,
  outputDir: 'dist/prd'
};
