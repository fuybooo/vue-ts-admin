"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DiaryController_1 = require("../controllers/DiaryController");
const fns_1 = require("../utils/fns");
const routeList = [
    {
        action: 'list',
        controller: DiaryController_1.default,
        path: '/diary/list',
    },
    {
        action: 'create',
        controller: DiaryController_1.default,
        path: '/diary/create',
    },
    {
        action: 'update',
        controller: DiaryController_1.default,
        path: '/diary/update',
    },
    {
        action: 'get',
        controller: DiaryController_1.default,
        path: '/diary/get',
    },
];
exports.default = fns_1.getNeedNotTokenRouter(routeList);
