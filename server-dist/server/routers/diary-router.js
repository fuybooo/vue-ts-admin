"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DiaryController_1 = require("../controllers/DiaryController");
const routeList = [
    {
        action: 'list',
        controller: DiaryController_1.default,
        path: '/diary/list',
        withoutToken: true,
    },
    {
        action: 'create',
        controller: DiaryController_1.default,
        path: '/diary/create',
        withoutToken: true,
    },
    {
        action: 'update',
        controller: DiaryController_1.default,
        path: '/diary/update',
        withoutToken: true,
    },
    {
        action: 'get',
        controller: DiaryController_1.default,
        path: '/diary/get',
        withoutToken: true,
    },
];
exports.default = routeList;
