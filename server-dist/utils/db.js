"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const common_1 = require("../common");
const mongoose_auto_increment_1 = require("../utils/mongoose-auto-increment");
const base_1 = require("../base");
function createModel(model, schema) {
    if (!(schema instanceof mongoose.Schema)) {
        schema = new mongoose.Schema(schema);
    }
    schema.set('autoIndex', false);
    return mongoose.model(model, schema, model);
}
function connect(cb) {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    const options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        user: base_1.default.config.db.user,
        pass: base_1.default.config.db.pass,
    };
    let connectString = base_1.default.config.db.connectString || `mongodb://${base_1.default.config.db.servername}:${base_1.default.config.db.port}/${base_1.default.config.db.DATABASE}`;
    if (!connectString.includes('?authSource=') && base_1.default.config.db.authSource) {
        connectString += `?authSource=${base_1.default.config.db.authSource}`;
    }
    const db = mongoose.connect(connectString, options, err => {
        common_1.default.log(err ? (err + ' [mongodb connect error]') : 'mongodb connect success', err ? 'error' : 'log');
    });
    db.then(() => {
        common_1.default.log('mongodb load success');
        if (cb) {
            cb(db);
        }
    }).catch(err => common_1.default.log(err + ', mongodb load error', 'error'));
    mongoose_auto_increment_1.default.initialize();
    return db;
}
exports.default = {
    createModel,
    connect,
};
