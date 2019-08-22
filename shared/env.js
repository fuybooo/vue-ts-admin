"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NODE_ENV = {
    production: 'production',
    development: 'development',
};
function isDev() {
    return process.env.NODE_ENV === NODE_ENV.development;
}
exports.isDev = isDev;
function isProd() {
    return process.env.NODE_ENV === NODE_ENV.production;
}
exports.isProd = isProd;
