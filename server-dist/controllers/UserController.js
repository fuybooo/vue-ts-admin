"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("./BaseController");
const instance_1 = require("../utils/instance");
const UserModel_1 = require("../models/UserModel");
const common_1 = require("../common");
const intercept_1 = require("../utils/intercept");
const settings_1 = require("../utils/settings");
// tslint:disable-next-line:no-var-requires
const ENV = require('../../shared/env');
class UserController extends BaseController_1.default {
    constructor(ctx) {
        super(ctx);
        this.Model = instance_1.default.getInstance(UserModel_1.default);
        this.createSchema();
    }
    async list(ctx) {
        const results = await this.Model.list(Object.assign({}, ctx.params, { findParams: {
                $or: [
                    {
                        username: new RegExp(ctx.params.keywords, 'i'),
                    },
                ],
            } }));
        const total = await this.Model.count();
        return (ctx.body = intercept_1.resReturn({ results, total }));
    }
    async create(ctx, isRegister = false) {
        const result = await this.Model.findBy({ username: ctx.params.username });
        if (result) {
            return (ctx.body = intercept_1.resReturn(null, 405, '该用户名已存在'));
        }
        const passSalt = common_1.default.randomStr();
        const password = common_1.default.generatePassword(isRegister ? ctx.params.password : settings_1.default.defaultPassword, passSalt);
        try {
            const user = await this.Model.create({
                username: ctx.params.username,
                password: common_1.default.generatePassword(password, passSalt),
                passSalt,
            });
            ctx.body = intercept_1.resReturn({ username: user.username, _id: user._id }, 0, isRegister ? '注册成功' : '创建成功');
        }
        catch (e) {
            ctx.body = intercept_1.resReturn(null, 500, e.message);
        }
    }
    async update(ctx) {
        const result = await this.Model.get(ctx.params.id);
        if (!result) {
            return (ctx.body = intercept_1.resReturn(null, 404, '该用户不存在'));
        }
        try {
            if (ctx.params.username && ctx.params.username !== result.username) {
                const checkRepeatResult = await this.Model.findBy({ username: ctx.params.username });
                if (checkRepeatResult) {
                    return (ctx.body = intercept_1.resReturn(null, 405, '该用户名已存在'));
                }
            }
            // todo 验证其他字段
            const updateResult = await this.Model.update(Object.assign({}, ctx.params));
            if (updateResult) {
                ctx.body = intercept_1.resReturn({ id: ctx.params.id }, 0, '用户修改成功');
            }
        }
        catch (e) {
            ctx.body = intercept_1.resReturn(null, 500, e.message);
        }
    }
    async delete(ctx) {
        // 在测试环境下 做真实删除
        await this.Model.delete(ctx.params.id, process.env.APP_MODE === ENV.APP_MODE.dev);
        ctx.body = intercept_1.resReturn(null, 0, '用户删除成功');
    }
    async get(ctx) {
        const user = await this.Model.get(ctx.params.id);
        ctx.body = intercept_1.resReturn({ _id: user._id, username: user.username });
    }
    createSchema() {
        const commonCreateUpdate = {
            username: {
                type: 'string',
                max: 20,
                min: 2,
                required: true,
            },
        };
        this.schemaMap = {
            create: Object.assign({}, commonCreateUpdate),
            update: Object.assign({}, commonCreateUpdate),
            get: {
                id: {
                    type: 'string',
                    required: true,
                },
            },
        };
    }
}
exports.default = UserController;
