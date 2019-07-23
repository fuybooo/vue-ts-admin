"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const instances = new Map();
function getInstance(Model, ...args) {
    if (!instances.get(Model)) {
        instances.set(Model, new Model(args));
    }
    return instances.get(Model);
}
function delInstance(Model) {
    try {
        instances.delete(Model);
        common_1.default.log(Model, 'log', 'delete');
    }
    catch (e) {
        common_1.default.log(e, 'error');
    }
}
exports.default = {
    instances,
    getInstance,
    delInstance,
};
