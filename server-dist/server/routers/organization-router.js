"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrganizationController_1 = require("../controllers/OrganizationController");
const routeList = [
    {
        action: 'list',
        controller: OrganizationController_1.default,
        path: '/organization/list',
    },
    {
        action: 'create',
        controller: OrganizationController_1.default,
        path: '/organization/create',
    },
    {
        action: 'update',
        controller: OrganizationController_1.default,
        path: '/organization/update',
    },
    {
        action: 'delete',
        controller: OrganizationController_1.default,
        path: '/organization/delete',
    },
    {
        action: 'get',
        controller: OrganizationController_1.default,
        path: '/organization/get',
    },
    {
        action: 'upload',
        controller: OrganizationController_1.default,
        path: '/organization/upload',
    },
];
exports.default = routeList;
