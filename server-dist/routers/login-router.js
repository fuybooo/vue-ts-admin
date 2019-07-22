"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginController_1 = require("../controllers/LoginController");
const routeList = [
    {
        action: 'login',
        controller: LoginController_1.default,
        path: '/login',
        withoutToken: true,
    },
];
exports.default = routeList;
