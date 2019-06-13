## 2019-06-08
1. npm -v
2. npm install -g npm
3. yarn global add @vue/cli@latest
4. vue -V
5. vue create vue-ts-admin
6. cd vue-ts-admin
7. 新增配置文件
    1. vue.config.js [配置可参考](https://cli.vuejs.org/zh/config/)
    2. vue的ts写法 [参考该文档](https://github.com/kaorun343/vue-property-decorator)
## 2019-06-11
1. 创建此项目的首要目的是搭建一个大型项目的框架，理清楚在大型项目的开发中遇到的问题，已经总结整体的解决方案
    1. 首先面对的问题是项目的目录结构问题
    2. 路由结构
2. 遇到一些问题
    1. 可以在config.ts中配置一些公共的环境变量，通过process.env.NODE_ENV完成
    2. 将urls 和https 挂载到vue的原型上，这样使用起来更加得心应手
