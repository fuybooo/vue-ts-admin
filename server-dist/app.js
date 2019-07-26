"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koaStatic = require("koa-static");
// import * as koaWebsocket from 'koa-websocket'
const cors = require("koa-cors");
const common_1 = require("./common");
const base_1 = require("./base");
const router_1 = require("./router");
const db_1 = require("./utils/db");
db_1.default.connect();
// tslint:disable-next-line:no-var-requires
const koaBody = require('koa-body');
// tslint:disable-next-line:no-var-requires
const ENV = require('../shared/env');
// const app = koaWebsocket(new Koa())
// @ts-ignore
const app = new Koa();
app.proxy = true;
app.use(koaBody({ multipart: true, jsonLimit: '2mb', formLimit: '1mb', textLimit: '1mb' }));
// 设置 cors 使得 cookie 可以生效
// @ts-ignore
app.use(cors(process.env.APP_MODE === ENV.APP_MODE.dev ? {
    credentials: true,
    origin: base_1.default.config['dev-origin'],
    maxAge: 7 * 24 * 60 * 60 * 1000,
} : undefined));
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
app.use(router_1.default.routes());
app.use(router_1.default.allowedMethods());
// @ts-ignore
app.use(koaStatic(base_1.default.staticDir, {
    gzip: true,
}));
app.listen(base_1.default.config.port);
// tslint:disable-next-line:no-console
console.log(`Server running on port ${base_1.default.config.port}`);
