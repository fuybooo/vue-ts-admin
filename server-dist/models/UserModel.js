"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BaseModel_1 = require("./BaseModel");
class UserModel extends BaseModel_1.default {
    getName() {
        return 'user';
    }
    getSchema() {
        return Object.assign({ username: {
                type: mongoose.Schema.Types.String,
                required: true,
            }, password: {
                type: mongoose.Schema.Types.String,
                required: true,
            }, passSalt: {
                type: mongoose.Schema.Types.String,
                required: true,
            } }, this.defaultSchema);
    }
}
exports.default = UserModel;
