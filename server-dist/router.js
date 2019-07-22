"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const intercept_1 = require("./utils/intercept");
const login_router_1 = require("./routers/login-router");
const user_router_1 = require("./routers/user-router");
const router = new Router();
exports.baseUrl = '/api';
exports.routeList = [
    ...login_router_1.default,
    ...user_router_1.default,
];
exports.routeList.forEach(route => intercept_1.default(router, route));
exports.default = router;
