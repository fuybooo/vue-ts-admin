"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BaseModel_1 = require("./BaseModel");
class DictionaryModel extends BaseModel_1.default {
    getName() {
        return 'dictionary';
    }
    getSchema() {
        return Object.assign({ typeCode: {
                type: mongoose.Schema.Types.String,
                required: true,
            }, typeName: {
                type: mongoose.Schema.Types.String,
                required: true,
            }, name: {
                type: mongoose.Schema.Types.String,
                required: true,
            }, code: {
                type: mongoose.Schema.Types.String,
                required: true,
            }, parentCode: {
                type: mongoose.Schema.Types.String,
            } }, this.defaultSchema);
    }
}
exports.default = DictionaryModel;
