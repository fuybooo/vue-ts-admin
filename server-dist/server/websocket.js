"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route = require("koa-route");
const fns_1 = require("../shared/fns");
const model_1 = require("../shared/model");
let ctxList = [];
const websocket = Route.all('*', (ctx) => {
    userLogin(ctx);
    ctx.websocket.on('close', () => {
        userLogout(ctx);
    });
    ctx.websocket.on('message', (message) => {
        broadcast(getMessage(model_1.messageType.MSG, message, ctx));
    });
});
function getUsername(ctx) {
    const params = fns_1.getUrlParams(ctx.URL.search);
    return params.username;
}
function getCrtCtx(ctx) {
    const params = fns_1.getUrlParams(ctx.URL.search);
    return ctxList.find(ctxItem => {
        const ctxItemParams = fns_1.getUrlParams(ctxItem.URL.search);
        return ctxItemParams.username === params.username;
    });
}
function userLogin(ctx) {
    const params = fns_1.getUrlParams(ctx.URL.search);
    if (params.username) {
        if (ctxList.length) {
            const hasSame = ctxList.some(ctxItem => {
                const ctxItemParams = fns_1.getUrlParams(ctxItem.URL.search);
                return ctxItemParams.username === params.username;
            });
            if (!hasSame) {
                ctxList.push(ctx);
                broadcast(getMessage(model_1.messageType.SYS_LOGIN, '', ctx));
            }
        }
        else {
            ctxList.push(ctx);
            broadcast(getMessage(model_1.messageType.SYS_LOGIN, '', ctx));
        }
    }
}
function userLogout(ctx) {
    if (ctxList.length) {
        const theCtx = getCrtCtx(ctx);
        if (theCtx) {
            ctxList = ctxList.filter(ctxItem => {
                const ctxItemParams = fns_1.getUrlParams(ctxItem.URL.search);
                const theCtxParams = fns_1.getUrlParams(theCtx.URL.search);
                return ctxItemParams.username !== theCtxParams.username;
            });
            broadcast(getMessage(model_1.messageType.SYS_LOGOUT, '', ctx));
        }
    }
}
function broadcast(message) {
    console.log('进行广播', ctxList.length);
    if (!ctxList.length) {
        return;
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < ctxList.length; i++) {
        ctxList[i].websocket.send(message);
    }
}
function getMessage(msgType, message, ctx) {
    const username = getUsername(ctx);
    const msg = {
        time: fns_1.getTime(),
        username,
        msgType: msgType || model_1.messageType.MSG,
        content: message,
    };
    if (message) {
        let originMsg = {};
        try {
            originMsg = JSON.parse(message);
        }
        catch (e) {
            // 错误提示信息
            originMsg = {};
        }
        Object.assign(msg, originMsg);
    }
    switch (msgType) {
        case model_1.messageType.SYS_LOGIN:
            // 提示登录信息
            msg.content = `欢迎${msg.username}进入房间`;
            break;
        case model_1.messageType.SYS_LOGOUT:
            msg.content = `${msg.username}离开房间`;
            break;
        case model_1.messageType.MSG:
            break;
        default:
            break;
    }
    return JSON.stringify(msg);
}
exports.default = websocket;
