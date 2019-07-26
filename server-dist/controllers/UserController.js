"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("./BaseController");
const instance_1 = require("../utils/instance");
const UserModel_1 = require("../models/UserModel");
const common_1 = require("../common");
const intercept_1 = require("../utils/intercept");
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
        ctx.body = intercept_1.resReturn({ results });
    }
    async create(ctx, isRegister = false) {
        const result = await this.Model.findBy({ username: ctx.params.username });
        if (result) {
            return (ctx.body = intercept_1.resReturn(null, 405, '该用户名已存在'));
        }
        const passSalt = common_1.default.randomStr();
        const password = common_1.default.generatePassword(isRegister ? ctx.params.password : '111111', passSalt);
        try {
            const user = await this.Model.create({
                username: ctx.params.username,
                password: common_1.default.generatePassword(password, passSalt),
                passSalt,
            });
            ctx.body = intercept_1.resReturn({ name: user.username, _id: user._id });
        }
        catch (e) {
            ctx.body = intercept_1.resReturn(null, 500, e.message);
        }
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
        };
    }
}
exports.default = UserController;
