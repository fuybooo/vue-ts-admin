"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("./BaseController");
const instance_1 = require("../utils/instance");
const UserModel_1 = require("../models/UserModel");
const common_1 = require("../common");
const intercept_1 = require("../utils/intercept");
const jwt = require("jsonwebtoken");
const shared_1 = require("../utils/shared");
class LoginController extends BaseController_1.default {
    constructor(ctx) {
        super(ctx);
        this.Model = instance_1.default.getInstance(UserModel_1.default);
        this.createSchema();
    }
    async login(ctx) {
        const username = ctx.request.body.username;
        const password = ctx.request.body.password;
        const result = await this.Model.findByUsername(username);
        if (!result) {
            return (ctx.body = intercept_1.resReturn(null, 404, '该用户不存在'));
        }
        else if (common_1.default.generatePassword(password, result.passSalt) === result.password) {
            this.setCookie(result._id, result.password);
            return (ctx.body = intercept_1.resReturn(result));
        }
        else {
            return (ctx.body = intercept_1.resReturn(null, 405, '密码错误'));
        }
    }
    async register(ctx) {
        const params = ctx.request.body;
        if (!params.username) {
            return (ctx.body = intercept_1.resReturn(null, 400, 'username 不能为空'));
        }
        if (!params.password) {
            return (ctx.body = intercept_1.resReturn(null, 400, 'password 不能为空'));
        }
        const passSalt = common_1.default.randomStr();
        try {
            const user = await this.Model.save({
                username: params.username,
                password: common_1.default.generatePassword(params.password, passSalt),
                passSalt,
            });
            ctx.body = intercept_1.resReturn(user);
        }
        catch (e) {
            ctx.body = intercept_1.resReturn(null, 401, e.message);
        }
    }
    setCookie(uid, passSalt) {
        const token = jwt.sign({ uid }, passSalt, { expiresIn: '7 days' });
        const expires = new Date();
        expires.setDate(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
        this.ctx.cookie.set(shared_1.KEY_TOKEN, token, {
            expires, httpOnly: true,
        });
        this.ctx.cookie.set(shared_1.KEY_UID, uid, {
            expires, httpOnly: true,
        });
    }
    createSchema() {
        this.schemaMap = {
            login: {
                username: {
                    type: 'string',
                    max: 20,
                    min: 2,
                    required: true,
                },
                password: {
                    type: 'string',
                    max: 20,
                    min: 6,
                    required: true,
                },
            },
        };
    }
}
exports.default = LoginController;
