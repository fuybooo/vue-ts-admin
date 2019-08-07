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
        const username = ctx.params.username;
        const password = ctx.params.password;
        const result = await this.Model.findBy({ username }, false);
        if (!result) {
            return (ctx.body = intercept_1.resReturn(null, 404, '该用户不存在'));
        }
        else if (common_1.default.generatePassword(password, result.passSalt) === result.password) {
            const uid = result._id;
            const passSalt = result.passSalt;
            const token = jwt.sign({ uid }, passSalt, { expiresIn: '7 days' });
            this.setCookie(uid + '', token);
            return (ctx.body = intercept_1.resReturn({
                username: result.username,
                uid,
                token,
            }));
        }
        else {
            return (ctx.body = intercept_1.resReturn(null, 403, '密码错误'));
        }
    }
    async register(ctx) {
        const params = ctx.params;
        const passSalt = common_1.default.randomStr();
        try {
            const user = await this.Model.create({
                username: params.username,
                password: common_1.default.generatePassword(params.password, passSalt),
                passSalt,
            });
            ctx.body = intercept_1.resReturn({ name: user.name });
        }
        catch (e) {
            ctx.body = intercept_1.resReturn(null, 500, e.message);
        }
    }
    setCookie(uid, token) {
        const expires = new Date();
        expires.setDate(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
        this.ctx.cookies.set(shared_1.KEY_UID, uid, {
            expires, httpOnly: true,
        });
        this.ctx.cookies.set(shared_1.KEY_TOKEN, token, {
            expires, httpOnly: true,
        });
    }
    createSchema() {
        const commonLoginRegister = {
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
        };
        this.schemaMap = {
            login: Object.assign({}, commonLoginRegister),
            register: Object.assign({}, commonLoginRegister),
        };
    }
}
exports.default = LoginController;
