"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BaseModel_1 = require("./BaseModel");
class UserModel extends BaseModel_1.default {
    getName() {
        return 'user';
    }
    getSchema() {
        return {
            username: {
                type: mongoose.Schema.Types.String,
                required: true,
            },
            password: {
                type: mongoose.Schema.Types.String,
                required: true,
            },
            passSalt: {
                type: mongoose.Schema.Types.String,
                required: true,
            },
        };
    }
    findById(id) {
        return this.model.findOne({ _id: id });
    }
    findByUsername(username) {
        return this.model.findOne({ username });
    }
    save(data) {
        return new this.model(data).save();
    }
}
exports.default = UserModel;
