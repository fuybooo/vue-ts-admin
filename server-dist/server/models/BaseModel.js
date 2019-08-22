"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const common_1 = require("../common");
const mongoose_auto_increment_1 = require("../utils/mongoose-auto-increment");
const db_1 = require("../utils/db");
class BaseModel {
    constructor() {
        this.currentPage = 1;
        this.pageSize = 20;
        this.defaultSchema = {
            createTime: mongoose.Schema.Types.Number,
            updateTime: mongoose.Schema.Types.Number,
            isDeleted: mongoose.Schema.Types.Boolean,
            isDisabled: mongoose.Schema.Types.Boolean,
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
            if (listParams.sortField.includes(',')) {
                return listParams.sortField.split(',').
                    // @ts-ignore
                    map((item, i) => ({ [item]: listParams.sortOrder.split(',')[i] })).
                    reduce((p, c) => (Object.assign({}, p, c)), {});
            }
            return { [listParams.sortField]: listParams.sortOrder };
        }
        else {
            return { _id: -1 };
        }
    }
    getFields(listParams = {}, withoutPwd = true) {
        const defaultExcludes = Object.assign({}, Object.keys(this.defaultSchema).map(p => ({ [p]: 0 })).reduce((p, c) => (Object.assign({}, p, c)), {}), { __v: 0 }, (withoutPwd ? {
            password: 0,
            passSalt: 0,
        } : {}));
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
        let query = this.model
            .find(...(listParams.findParams ? (Array.isArray(listParams.findParams) ? listParams.findParams : [Object.assign({ isDeleted: { $ne: true } }, listParams.findParams)]) : [{ isDeleted: { $ne: true } }]))
            .sort(this.getSortParams(listParams))
            .skip(((listParams.currentPage || this.currentPage) - 1) * (listParams.pageSize || this.pageSize));
        if (listParams.pageSize) {
            query = query.limit(Math.min(100, listParams.pageSize || this.pageSize));
        }
        return query.select(this.getFields(listParams)).exec();
    }
    count(countParams = {}) {
        return this.model.countDocuments(Object.assign({ isDeleted: { $ne: true } }, countParams));
    }
    get(id, withoutPwd = true) {
        return this.model.findById(id).select(this.getFields({}, withoutPwd));
    }
    findBy(map, withoutPwd = true) {
        return this.model.findOne(Object.assign({ isDeleted: { $ne: true } }, map)).select(this.getFields({}, withoutPwd));
    }
    create(data) {
        return new this.model(data).save();
    }
    update(map) {
        if ('id' in map) {
            const id = map.id;
            delete map.id;
            return this.model.findByIdAndUpdate(id, map);
        }
    }
    delete(id, really = false) {
        if (really) {
            return this.model.findByIdAndRemove(id);
        }
        else {
            return this.update({ id, isDeleted: true });
        }
    }
}
exports.default = BaseModel;
