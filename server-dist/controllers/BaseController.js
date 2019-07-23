"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../router");
const intercept_1 = require("../utils/intercept");
const common_1 = require("../common");
const instance_1 = require("../utils/instance");
const UserModel_1 = require("../models/UserModel");
const shared_1 = require("../utils/shared");
class BaseController {
    constructor(ctx) {
        this.roleMap = {
            admin: 'admin',
            member: 'member',
        };
        this.$auth = false; // 是否拥有权限
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
        const token = ctx.cookie.get(shared_1.KEY_TOKEN);
        const uid = ctx.cookie.get(shared_1.KEY_UID);
        try {
            if (!token || !uid) {
                return false;
            }
            else {
                // 检查uid和token是否匹配
                // 1. 根据uid查询user 是否能够查到有效的用户
                // 2. 根据token解析出的uid 是否与uid相同
                const userInstance = instance_1.default.getInstance(UserModel_1.default);
                const user = userInstance.findById(uid);
                console.log('checkLogin:', user);
                this.$auth = true;
                // if (user) {
                // }
            }
        }
        catch (e) {
            common_1.default.log(e, 'error');
        }
    }
}
exports.default = BaseController;
