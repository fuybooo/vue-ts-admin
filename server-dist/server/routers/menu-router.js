"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MenuController_1 = require("../controllers/MenuController");
const routeList = [
    {
        action: 'list',
        controller: MenuController_1.default,
        path: '/menu/list',
    },
    {
        action: 'create',
        controller: MenuController_1.default,
        path: '/menu/create',
    },
    {
        action: 'update',
        controller: MenuController_1.default,
        path: '/menu/update',
    },
    {
        action: 'delete',
        controller: MenuController_1.default,
        path: '/menu/delete',
    },
    {
        action: 'get',
        controller: MenuController_1.default,
        path: '/menu/get',
    },
    {
        action: 'updateSort',
        controller: MenuController_1.default,
        path: '/menu/updateSort',
    },
];
exports.default = routeList;
