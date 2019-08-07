"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../router");
const intercept_1 = require("../utils/intercept");
const common_1 = require("../common");
const instance_1 = require("../utils/instance");
const UserModel_1 = require("../models/UserModel");
const shared_1 = require("../utils/shared");
const jwt = require("jsonwebtoken");
class BaseController {
    constructor(ctx) {
        this.roleMap = {
            admin: 'admin',
            member: 'member',
        };
        this.$auth = false; // 是否拥有权限
        this.$uid = null; // 当前验证过的用户id
        this.$user = null; // 当前验证过的用户对象
        this.ctx = ctx;
    }
    async init(ctx) {
        // 判断权限
        const withoutTokenRouteList = router_1.routeList.filter(item => item.withoutToken);
        if (withoutTokenRouteList.some(route => ctx.path.includes(intercept_1.getUrl(route)))) {
            this.$auth = true;
        }
        else {
            await this.checkLogin(ctx);
        }
    }
    async checkLogin(ctx) {
        const token = ctx.cookies.get(shared_1.KEY_TOKEN);
        // @ts-ignore
        const uid = +ctx.cookies.get(shared_1.KEY_UID);
        try {
            if (token && uid) {
                // 检查uid和token是否匹配
                // 1. 根据uid查询user 是否能够查到有效的用户
                // 2. 根据token解析出的uid 是否与uid相同
                const userModel = instance_1.default.getInstance(UserModel_1.default);
                const user = await userModel.get(uid, false);
                if (user) {
                    let decoded;
                    try {
                        decoded = jwt.verify(token, user.passSalt);
                    }
                    catch (err) {
                        common_1.default.log(err, 'error');
                        return false;
                    }
                    if (decoded.uid === uid) {
                        this.$uid = uid;
                        this.$user = user;
                        this.$auth = true;
                        return true;
                    }
                }
            }
            return false;
        }
        catch (e) {
            common_1.default.log(e, 'error');
            return false;
        }
    }
}
exports.default = BaseController;
