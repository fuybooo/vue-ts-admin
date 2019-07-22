"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const KoaStatic = require("koa-static");
const koaWebsocket = require("koa-websocket");
const common_1 = require("./common");
const base_1 = require("./base");
const router_1 = require("./router");
// tslint:disable-next-line:no-var-requires
const koaBody = require('koa-body');
const app = koaWebsocket(new Koa());
app.use(koaBody({ multipart: true, jsonLimit: '2mb', formLimit: '1mb', textLimit: '1mb' }));
app.use(router_1.default.routes());
app.use(router_1.default.allowedMethods());
app.use(KoaStatic(base_1.default.staticDir, {
    gzip: true,
}));
/* 以api开头的请求都将被拦截 */
app.use(async (ctx, next) => {
    if (/^\/(?!api)[a-zA-Z0-9\/\-_]*$/.test(ctx.path)) {
        ctx.path = '/';
    }
    await next();
});
/* 缓存静态资源 */
app.use(async (ctx, next) => {
    if (ctx.path.startsWith('/prd')) {
        ctx.set('Cache-Control', 'max-age=8640000000');
        if (common_1.default.isExist(common_1.default.path.join(base_1.default.staticDir, ctx.path + '.gz'))) {
            ctx.set('Content-Encoding', 'gzip');
            ctx.path = ctx.path + '.gz';
        }
    }
    await next();
});
app.listen(base_1.default.config.port);
console.log(`Server running on port ${base_1.default.config.port}`);
