"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BaseModel_1 = require("./BaseModel");
class OrganizationModel extends BaseModel_1.default {
    getName() {
        return 'organization';
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
exports.default = OrganizationModel;
