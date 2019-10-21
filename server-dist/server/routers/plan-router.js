"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlanController_1 = require("../controllers/PlanController");
const fns_1 = require("../utils/fns");
const routeList = [
    {
        action: 'list',
        controller: PlanController_1.default,
        path: '/plan/list',
    },
    {
        action: 'create',
        controller: PlanController_1.default,
        path: '/plan/create',
    },
    {
        action: 'update',
        controller: PlanController_1.default,
        path: '/plan/update',
    },
    {
        action: 'delete',
        controller: PlanController_1.default,
        path: '/plan/delete',
    },
    {
        action: 'get',
        controller: PlanController_1.default,
        path: '/plan/get',
    },
];
exports.default = fns_1.getNeedNotTokenRouter(routeList);
