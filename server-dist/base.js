"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
// tslint:disable-next-line:no-var-requires
const config = require('../config.json');
const webRoot = common_1.default.path.resolve(__dirname, '..');
const staticDir = common_1.default.path.resolve(webRoot, 'dist');
exports.default = {
    webRoot,
    staticDir,
    config,
};
