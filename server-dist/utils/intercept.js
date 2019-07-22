"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../router");
function intercept(router, route) {
    router[route.method || 'post'](getUrl(route), async (ctx) => {
        const instance = new route.controller(ctx);
        try {
            await instance.init(ctx);
            ctx.params = Object.assign({}, ctx.request.query, ctx.request.body, ctx.params);
            if (instance.schemaMap && typeof instance.schemaMap === 'object' && instance.schemaMap[route.action]) {
                const validRes = validateParams(instance.schemaMap[route.action], ctx.params);
                if (!validRes.valid) {
                    return (ctx.body = resReturn(null, 400, validRes.message));
                }
            }
        }
        catch (err) {
            ctx.body = resReturn(null, 500);
        }
    });
}
function validateParams(action, params) {
    return {
        valid: true,
        message: '',
    };
}
exports.validateParams = validateParams;
function resReturn(data = {}, code = 200, msg = '') {
    const message = msg || (code === 500 ? '服务器出错...' : (code === 400 ? '参数异常...' : ''));
    return {
        data,
        code,
        msg: message,
    };
}
exports.resReturn = resReturn;
function getUrl(route) {
    return `${router_1.baseUrl}${route.path}`;
}
exports.getUrl = getUrl;
exports.default = intercept;
