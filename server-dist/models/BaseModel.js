"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const common_1 = require("../common");
const mongoose_auto_increment_1 = require("../utils/mongoose-auto-increment");
const db_1 = require("../utils/db");
// import {SchemaDefinition} from 'mongoose'
class BaseModel {
    constructor() {
        this.schema = new mongoose.Schema(this.getSchema());
        this.name = this.getName();
        if (this.isNeedAutoIncrement()) {
            this.schema.plugin(mongoose_auto_increment_1.default.plugin, {
                model: this.name,
                field: this.getPrimaryKey(),
                startAt: 11,
                incrementBy: common_1.default.randomRange(1, 10),
            });
        }
        this.model = db_1.default.createModel(this.name, this.schema);
    }
    // @ts-ignore
    getSchema() {
        common_1.default.log('Model need getSchema function');
    }
    // @ts-ignore
    getName() {
        common_1.default.log('Model need getName function');
    }
    getPrimaryKey() {
        return '_id';
    }
    isNeedAutoIncrement() {
        return true;
    }
}
exports.default = BaseModel;
