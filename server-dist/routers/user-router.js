"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../controllers/UserController");
const routeList = [
    {
        action: 'list',
        controller: UserController_1.default,
        path: '/user/list',
    },
];
exports.default = routeList;
