"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DictionaryController_1 = require("../controllers/DictionaryController");
const routeList = [
    {
        action: 'list',
        controller: DictionaryController_1.default,
        path: '/dictionary/list',
    },
    {
        action: 'create',
        controller: DictionaryController_1.default,
        path: '/dictionary/create',
    },
    {
        action: 'update',
        controller: DictionaryController_1.default,
        path: '/dictionary/update',
    },
    {
        action: 'delete',
        controller: DictionaryController_1.default,
        path: '/dictionary/delete',
    },
    {
        action: 'get',
        controller: DictionaryController_1.default,
        path: '/dictionary/get',
    },
];
exports.default = routeList;
