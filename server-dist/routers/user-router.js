"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../controllers/UserController");
const routeList = [
    {
        action: 'list',
        controller: UserController_1.default,
        path: '/user/list',
    },
    {
        action: 'create',
        controller: UserController_1.default,
        path: '/user/create',
    },
    {
        action: 'update',
        controller: UserController_1.default,
        path: '/user/update',
    },
    {
        action: 'delete',
        controller: UserController_1.default,
        path: '/user/delete',
    },
    {
        action: 'get',
        controller: UserController_1.default,
        path: '/user/get',
    },
];
exports.default = routeList;
