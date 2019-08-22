"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const common_1 = require("./common");
const base_1 = require("./base");
const db_1 = require("./utils/db");
const instance_1 = require("./utils/instance");
const MenuModel_1 = require("./models/MenuModel");
const env_1 = require("../shared/env");
const fns_1 = require("../shared/fns");
const initLockPath = common_1.default.path.join(base_1.default.runTime, 'init.lock');
function install() {
    const exist = env_1.isDev() ? false : common_1.default.fs.existsSync(initLockPath);
    if (exist) {
        console.error('数据库已经初始化过了，不能再次初始化，如果确实要重新初始化，请删除init.lock文件后再次执行');
    }
    else {
        setupSql();
    }
}
function setupSql() {
    // 连接数据库
    const connect = db_1.default.connect();
    const menuModel = instance_1.default.getInstance(MenuModel_1.default);
    const rootMenu = menuModel.findBy({ code: 'all' });
    const result = menuModel.create({
        name: '全部',
        code: 'all',
        parentId: 0,
    });
    connect.then(() => {
        const userCollection = mongoose.connection.db.collection('user');
        userCollection.createIndex({ username: 1 }, { unique: true });
        const menuCollection = mongoose.connection.db.collection('menu');
        menuCollection.createIndex({ name: 1 });
        menuCollection.createIndex({ code: 1 }, { unique: true });
        rootMenu.then((res) => {
            if (!res) {
                result.then(() => {
                    console.log('根菜单创建成功');
                    process.exit(0);
                });
            }
        });
        common_1.default.fs.writeFileSync(initLockPath, `${fns_1.getTime()} 初始化完成`);
    });
}
install();
