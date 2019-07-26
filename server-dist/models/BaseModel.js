"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const common_1 = require("../common");
const mongoose_auto_increment_1 = require("../utils/mongoose-auto-increment");
const db_1 = require("../utils/db");
// import {SchemaDefinition} from 'mongoose'
class BaseModel {
    constructor() {
        this.currentPage = 1;
        this.pageSize = 20;
        this.defaultSchema = {
            createTime: mongoose.Schema.Types.Number,
            updateTime: mongoose.Schema.Types.Number,
        };
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
    getSortParams(listParams = {}) {
        if (listParams.sortField) {
            return { [listParams.sortField]: listParams.sortOrder };
        }
        else {
            return { _id: -1 };
        }
    }
    getFields(listParams = {}) {
        const defaultExcludes = Object.assign({}, Object.keys(this.defaultSchema).map(p => ({ [p]: 0 })).reduce((p, c) => (Object.assign({}, p, c)), {}), { __v: 0, password: 0, passSalt: 0 });
        if (typeof listParams.fields === 'undefined') {
            if (!listParams.notExcludesDefaultFields) {
                return defaultExcludes;
            }
            else {
                return '';
            }
        }
        else if (typeof listParams.fields === 'string') {
            if (!listParams.notExcludesDefaultFields) {
                return Object.keys(defaultExcludes).map(f => `-${f} `).join('') + listParams.fields;
            }
            else {
                return listParams.fields;
            }
        }
        else if (typeof listParams.fields === 'object') {
            if (!listParams.notExcludesDefaultFields) {
                return Object.assign({}, listParams.fields, defaultExcludes);
            }
            else {
                return listParams.fields;
            }
        }
    }
    list(listParams = {}) {
        return this.model
            .find(...(listParams.findParams ? (Array.isArray(listParams.findParams) ? listParams.findParams : [listParams.findParams]) : []))
            .sort(this.getSortParams(listParams))
            .skip(((listParams.currentPage || this.currentPage) - 1) * (listParams.pageSize || this.pageSize))
            .limit(listParams.pageSize || this.pageSize)
            .select(this.getFields(listParams))
            .exec();
    }
    get(id) {
        return this.model.findOne({ _id: id });
    }
    findBy(map) {
        return this.model.findOne(map);
    }
    create(data) {
        return new this.model(data).save();
    }
}
exports.default = BaseModel;
