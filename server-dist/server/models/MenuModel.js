"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BaseModel_1 = require("./BaseModel");
class MenuModel extends BaseModel_1.default {
    getName() {
        return 'menu';
    }
    getSchema() {
        return Object.assign({ name: {
                type: mongoose.Schema.Types.String,
                required: true,
            }, code: {
                type: mongoose.Schema.Types.String,
                required: true,
            }, parentId: {
                type: mongoose.Schema.Types.Number,
                required: true,
            }, sort: {
                type: mongoose.Schema.Types.Number,
            }, type: {
                type: mongoose.Schema.Types.Number,
            } }, this.defaultSchema);
    }
}
exports.default = MenuModel;
