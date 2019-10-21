"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koaStatic = require("koa-static");
const koaWebsocket = require("koa-websocket");
const cors = require("koa-cors");
const common_1 = require("./common");
const base_1 = require("./base");
const db_1 = require("./utils/db");
const router_1 = require("./router");
const websocket_1 = require("./websocket");
const env_1 = require("../shared/env");
db_1.default.connect();
// tslint:disable-next-line:no-var-requires
const koaBody = require('koa-body');
// @ts-ignore
// const app = new Koa()
const app = koaWebsocket(new Koa());
app.proxy = true;
app.use(koaBody({ multipart: true }));
// 设置 cors 使得 cookie 可以生效
// @ts-ignore
app.use(cors(env_1.isDev() ? {
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
    if (!ctx.path.startsWith('/api')) {
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
app.ws.use(websocket_1.default);
// @ts-ignore
app.use(koaStatic(base_1.default.staticDir, {
    gzip: true,
}));
app.listen(base_1.default.config.port);
// tslint:disable-next-line:no-console
console.log(`Server running on port ${base_1.default.config.port}`);
