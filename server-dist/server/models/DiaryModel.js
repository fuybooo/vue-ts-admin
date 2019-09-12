"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BaseModel_1 = require("./BaseModel");
class DiaryModel extends BaseModel_1.default {
    getName() {
        return 'diary';
    }
    getSchema() {
        return Object.assign({ name: {
                type: mongoose.Schema.Types.String,
                required: true,
            }, code: {
                type: mongoose.Schema.Types.String,
                required: true,
            } }, this.defaultSchema);
    }
}
exports.default = DiaryModel;
