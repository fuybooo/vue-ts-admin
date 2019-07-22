"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../router");
const intercept_1 = require("../utils/intercept");
const base_1 = require("../base");
const common_1 = require("../common");
class BaseController {
    constructor(ctx) {
        this.roleMap = {
            admin: 'admin',
            member: 'member',
        };
        this.ctx = ctx;
    }
    async init(ctx) {
        // 判断权限
        const withoutTokenRouteList = router_1.routeList.filter(item => item.withoutToken);
        if (withoutTokenRouteList.some(route => intercept_1.getUrl(route) === ctx.path)) {
            this.$auth = true;
        }
        else {
            await this.checkLogin(ctx);
        }
    }
    async checkLogin(ctx) {
        const token = ctx.cookie.get(base_1.default.config.projectPrefix + 'TOKEN');
        const uid = ctx.cookie.get(base_1.default.config.projectPrefix + 'UID');
        try {
            if (!token || !uid) {
                return false;
            }
            else {
                // 检查uid和token是否匹配
                // 1. 根据uid查询user 是否能够查到有效的用户
                // 2. 根据token解析出的uid 是否与uid相同
            }
        }
        catch (e) {
            common_1.default.log(e, 'error');
        }
    }
}
exports.default = BaseController;
