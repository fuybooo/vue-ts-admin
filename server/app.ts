import * as Koa from 'koa'
import * as KoaStatic from 'koa-static'
import * as koaWebsocket from 'koa-websocket'
import common from './common'
import base from './base'
import router from './router'
// tslint:disable-next-line:no-var-requires
const koaBody = require('koa-body')
const app = koaWebsocket(new Koa())
app.use(koaBody({ multipart: true, jsonLimit: '2mb', formLimit: '1mb', textLimit: '1mb' }))

app.use(router.routes())
app.use(router.allowedMethods())
app.use(KoaStatic(base.staticDir, {
  gzip: true,
}))
/* 以api开头的请求都将被拦截 */
app.use(async (ctx, next) => {
  if (/^\/(?!api)[a-zA-Z0-9\/\-_]*$/.test(ctx.path)) {
    ctx.path = '/'
  }
  await next()
})
/* 缓存静态资源 */
app.use(async (ctx, next) => {
  if (ctx.path.startsWith('/prd')) {
    ctx.set('Cache-Control', 'max-age=8640000000')
    if (common.isExist(common.path.join(base.staticDir, ctx.path + '.gz'))) {
      ctx.set('Content-Encoding', 'gzip')
      ctx.path = ctx.path + '.gz'
    }
  }
  await next()
})
app.listen(base.config.port)
console.log(`Server running on port ${base.config.port}`)
