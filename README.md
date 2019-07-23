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
## 2019-06-13
1. 解决vue垫片不识别的问题：定义接口之前，需要先导入vue
## 2019-06-14
1. 搭建项目目录
2. 初始化工程，实现登录
3. 困难
    1. css的摇树优化不知如何实现
## 2019-06-17
1. 初步完成国际化
2. 待实现：title的切换与国际化
## 2019-06-18
1. mock数据应该放在public文件夹中
## 2019-07-08
1. 截至目前，已初步完成table和form两大通用组件
## 2019-07-16
1. 指定环境
    1. 启动项目时
    ```bash
      --open    在服务器启动时打开浏览器
      --copy    在服务器启动时将 URL 复制到剪切版
      --mode    指定环境模式 (默认值：development)
      --host    指定 host (默认值：0.0.0.0)
      --port    指定 port (默认值：8080)
      --https   使用 https (默认值：false)
    ```
## 2019-07-20
1. 将代码部署到github上去 git subtree push --prefix=dist origin gh-pages
## 2019-07-22
1. 开始使用node + mongodb 提供服务端功能
    1. 搭建node开发环境
    2. 搭建框架 - 到达 controller 层
## 2019-07-23
1. 后端已经能够基本运行起来
2. 现在做个小结
    1. 开发
        1. 前端
            1. 执行yarn s 使用 BUILD_MODE 作为环境变量，启动不同的功能
            2. 打包部署时需要注意跟路径
            3. 连接后端api的域名配置需要做到可切换
            4. 难点：当项目足够大时，打包是否会成为一个难点
                1. 可以使用create.js批量生产module，当module足够大时，进行打包优化测试
        2. 后端
            1. 开发阶段需要执行 yarn g ---- 将ts转化为js
            2. yarn w ---- 监听nodejs的变化并启动后端服务
            3. 使用nodemon运行时加上--inspect可以在chrome中进行后端代码的调试
            4. 难点：启用websocket plugin时如何处理
        3. 数据库
            1. 开发阶段启动数据库 /usr/local/momgodb../bin 执行 ./mongod --dbpath ~/Data/db
            2. 创建admin下的用户，该用户将具有较高权限
            3. 难点：在新环境上模拟给客户部署服务
                1. 需要初始化数据的脚本
                2. 需要安装各种软件
