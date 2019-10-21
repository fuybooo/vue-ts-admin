"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FriendsController_1 = require("../controllers/FriendsController");
const routeList = [
    {
        action: 'list',
        controller: FriendsController_1.default,
        path: '/friends/list',
    },
    {
        action: 'create',
        controller: FriendsController_1.default,
        path: '/friends/create',
    },
    {
        action: 'update',
        controller: FriendsController_1.default,
        path: '/friends/update',
    },
    {
        action: 'delete',
        controller: FriendsController_1.default,
        path: '/friends/delete',
    },
    {
        action: 'get',
        controller: FriendsController_1.default,
        path: '/friends/get',
    },
];
exports.default = routeList;
