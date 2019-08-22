"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TenantController_1 = require("../controllers/TenantController");
const routeList = [
    {
        action: 'list',
        controller: TenantController_1.default,
        path: '/tenant/list',
    },
    {
        action: 'create',
        controller: TenantController_1.default,
        path: '/tenant/create',
    },
    {
        action: 'update',
        controller: TenantController_1.default,
        path: '/tenant/update',
    },
    {
        action: 'delete',
        controller: TenantController_1.default,
        path: '/tenant/delete',
    },
    {
        action: 'get',
        controller: TenantController_1.default,
        path: '/tenant/get',
    },
];
exports.default = routeList;
