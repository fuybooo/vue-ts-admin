"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../router");
function intercept(router, route) {
    // @ts-ignore
    router[route.method || 'post'](getUrl(route), async (ctx) => {
        const controller = new route.controller(ctx);
        try {
            await controller.init(ctx);
            ctx.params = Object.assign({}, ctx.request.query, ctx.request.body, ctx.params);
            if (controller.schemaMap && typeof controller.schemaMap === 'object' && controller.schemaMap[route.action]) {
                // 验证参数是否正确
                const validRes = validateParams(controller.schemaMap[route.action], ctx.params);
                if (!validRes.valid) {
                    return (ctx.body = resReturn(null, 400, validRes.message));
                }
            }
            if (controller.$auth) {
                await controller[route.action](ctx);
            }
            else {
                // todo 未来需要新增ws的情况
                ctx.body = resReturn(null, 40011, '请登录...');
            }
        }
        catch (err) {
            ctx.body = resReturn(null, 500);
        }
    });
}
function validateParams(schema, params) {
    let valid = true;
    let message = '';
    for (const key in schema) {
        if (schema.hasOwnProperty(key)) {
            // @ts-ignore
            const fieldConfig = schema[key];
            const value = params[key];
            const valueType = typeof value;
            if (fieldConfig.required) {
                if (fieldConfig.type === 'array') {
                    if (fieldConfig.requiredFields) {
                        if (Array.isArray(value)) {
                            // @ts-ignore
                            if (!value.every(item => fieldConfig.requiredFields.every(field => item[field] !== undefined))) {
                                valid = false;
                                message = `【${key}】数组中【${fieldConfig.requiredFields.join()}】必填字段`;
                                break;
                            }
                        }
                        else {
                            valid = false;
                            message = `【${key}】是必填字段，类型为数组`;
                            break;
                        }
                    }
                }
                else if (fieldConfig.type !== 'boolean') {
                    if (value === undefined || value === null || value === '') {
                        valid = false;
                        message = `【${key}】是必填字段`;
                        break;
                    }
                }
            }
            if (!(value === undefined || value === null || value === '')) {
                if (fieldConfig.type === 'array') {
                    if (!(valueType === 'object' && Array.isArray(value))) {
                        valid = false;
                        message = `【${key}】是数组类型`;
                        break;
                    }
                }
                if (fieldConfig.type === 'object') {
                    if (valueType !== 'object') {
                        valid = false;
                        message = `【${key}】是对象类型`;
                        break;
                    }
                }
                if (fieldConfig.type === 'string') {
                    if (valueType !== 'string' && valueType !== 'number') {
                        valid = false;
                        message = `【${key}】是字符串类型`;
                        break;
                    }
                    else {
                        if (fieldConfig.max) {
                            if (value.length > fieldConfig.max) {
                                valid = false;
                                message = `【${key}】的长度不能超过${fieldConfig.max}`;
                                break;
                            }
                        }
                        if (fieldConfig.min) {
                            if (value.length < fieldConfig.min) {
                                valid = false;
                                message = `【${key}】的长度不能小于${fieldConfig.min}`;
                                break;
                            }
                        }
                    }
                }
                if (fieldConfig.type === 'number') {
                    if (valueType !== 'number' && isNaN(+value)) {
                        valid = false;
                        message = `【${key}】是数字类型`;
                        break;
                    }
                }
            }
        }
    }
    return {
        valid,
        message,
    };
}
exports.validateParams = validateParams;
function resReturn(data = {}, code = 0, msg = '') {
    const message = msg || (code === 500 ? '服务器出错...' : (code === 400 ? '参数异常...' : ''));
    return {
        data: formatData(data),
        code,
        head: {
            errCode: code,
            errMsg: message,
        },
        msg: message,
    };
}
exports.resReturn = resReturn;
function formatData(data) {
    if (data) {
        if ('_id' in data) {
            data = JSON.parse(JSON.stringify(data || {}));
            const id = data._id;
            delete data._id;
            return Object.assign({}, data, { id });
        }
        if ('results' in data) {
            if (Array.isArray(data.results)) {
                data = JSON.parse(JSON.stringify(data || {}));
                if (data.results[0] && '_id' in (data.results[0])) {
                    return Object.assign({}, data, { results: data.results.map((item) => {
                            const id = item._id;
                            delete item._id;
                            return Object.assign({}, item, { id });
                        }) });
                }
            }
        }
    }
    return data;
}
exports.formatData = formatData;
function getUrl(route) {
    const url = `${router_1.baseUrl}${route.path}`;
    return url.endsWith('/') ? url : `${url}/`;
}
exports.getUrl = getUrl;
exports.default = intercept;
