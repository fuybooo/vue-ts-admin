import * as Koa from 'koa'
import * as koaStatic from 'koa-static'
// import * as koaWebsocket from 'koa-websocket'
import * as cors from 'koa-cors'
import common from './common'
import base from './base'
import router from './router'
import db from './utils/db'
import {Ctx} from './types'
db.connect()
// tslint:disable-next-line:no-var-requires
const koaBody = require('koa-body')
// tslint:disable-next-line:no-var-requires
const ENV = require('../shared/env')
// const app = koaWebsocket(new Koa())
// @ts-ignore
const app = new Koa()
app.proxy = true
app.use(koaBody({ multipart: true, jsonLimit: '2mb', formLimit: '1mb', textLimit: '1mb' }))
// 设置 cors 使得 cookie 可以生效
// @ts-ignore
app.use(cors(process.env.APP_MODE === ENV.APP_MODE.dev ? {
  credentials: true,
  origin: base.config['dev-origin'],
  maxAge: 7 * 24 * 60 * 60 * 1000,
} : undefined))
/* 以api开头的请求都将被拦截 */
app.use(async (ctx: Ctx, next: () => any) => {
  if (/^\/(?!api)[a-zA-Z0-9\/\-_]*$/.test(ctx.path)) {
    ctx.path = '/'
  }
  await next()
})
/* 缓存静态资源 */
app.use(async (ctx: Ctx, next: () => any) => {
  if (ctx.path.startsWith('/prd')) {
    ctx.set('Cache-Control', 'max-age=8640000000')
    if (common.isExist(common.path.join(base.staticDir, ctx.path + '.gz'))) {
      ctx.set('Content-Encoding', 'gzip')
      ctx.path = ctx.path + '.gz'
    }
  }
  await next()
})
app.use(router.routes())
app.use(router.allowedMethods())
// @ts-ignore
app.use(koaStatic(base.staticDir, {
  gzip: true,
}))
app.listen(base.config.port)
// tslint:disable-next-line:no-console
console.log(`Server running on port ${base.config.port}`)
