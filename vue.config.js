module.exports = {
  assetsDir: './',
  css: {
    loaderOptions: {
      sass: {
        test: /\.scss$/,
      },
    },
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
};
