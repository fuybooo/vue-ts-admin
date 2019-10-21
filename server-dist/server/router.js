"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const intercept_1 = require("./utils/intercept");
const login_router_1 = require("./routers/login-router");
const user_router_1 = require("./routers/user-router");
const menu_router_1 = require("./routers/menu-router");
const tenant_router_1 = require("./routers/tenant-router");
const dictionary_router_1 = require("./routers/dictionary-router");
const organization_router_1 = require("./routers/organization-router");
const diary_router_1 = require("./routers/diary-router");
const plan_router_1 = require("./routers/plan-router");
// @ts-ignore
const router = new Router();
exports.baseUrl = '/api';
exports.routeList = [
    ...login_router_1.default,
    ...user_router_1.default,
    ...menu_router_1.default,
    ...tenant_router_1.default,
    ...dictionary_router_1.default,
    ...organization_router_1.default,
    ...diary_router_1.default,
    ...plan_router_1.default,
];
exports.routeList.forEach(route => intercept_1.default(router, route));
exports.default = router;
