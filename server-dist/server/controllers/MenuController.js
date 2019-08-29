"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("./BaseController");
const instance_1 = require("../utils/instance");
const MenuModel_1 = require("../models/MenuModel");
const intercept_1 = require("../utils/intercept");
class MenuController extends BaseController_1.default {
    constructor(ctx) {
        super(ctx);
        this.Model = instance_1.default.getInstance(MenuModel_1.default);
        this.createSchema();
    }
    async list(ctx) {
        const results = await this.Model.list(Object.assign({}, ctx.params, { findParams: {
                $or: [
                    {
                        name: new RegExp(ctx.params.keywords, 'i'),
                    },
                ],
            } }));
        return (ctx.body = intercept_1.resReturn({ results }));
    }
    async create(ctx) {
        const result = await this.Model.findBy({ code: ctx.params.code });
        if (result) {
            return (ctx.body = intercept_1.resReturn(null, 405, '唯一编码重复'));
        }
        try {
            const menu = await this.Model.create({
                name: ctx.params.name,
                code: ctx.params.code,
                parentId: ctx.params.parentId,
            });
            ctx.body = intercept_1.resReturn(menu, 0, '创建成功');
        }
        catch (e) {
            ctx.body = intercept_1.resReturn(null, 500, e.message);
        }
    }
    async update(ctx) {
        const result = await this.Model.get(ctx.params.id);
        if (!result) {
            return (ctx.body = intercept_1.resReturn(null, 404, '找不到该资源'));
        }
        try {
            if (ctx.params.code !== result.code) {
                const checkRepeatResult = await this.Model.findBy({ code: ctx.params.code });
                if (checkRepeatResult) {
                    return (ctx.body = intercept_1.resReturn(null, 405, '唯一编码重复'));
                }
            }
            // todo 验证其他字段
            const updateResult = await this.Model.update(Object.assign({}, ctx.params));
            if (updateResult) {
                ctx.body = intercept_1.resReturn({ id: ctx.params.id }, 0, '修改成功');
            }
        }
        catch (e) {
            ctx.body = intercept_1.resReturn(null, 500, e.message);
        }
    }
    async delete(ctx) {
        await this.Model.delete(ctx.params.id, true);
        ctx.body = intercept_1.resReturn(null, 0, '删除成功');
    }
    async get(ctx) {
        const menu = await this.Model.get(ctx.params.id);
        ctx.body = intercept_1.resReturn(menu);
    }
    async updateSort(ctx) {
        const sortList = ctx.params.sortList || [];
        sortList.forEach(async (item) => {
            await this.Model.update(item);
        });
        ctx.body = intercept_1.resReturn(null, 0, '顺序更新成功');
    }
    createSchema() {
        const commonCreateUpdate = {
            name: {
                type: 'string',
                max: 20,
                min: 2,
                required: true,
            },
            code: {
                type: 'string',
                max: 100,
                min: 1,
                required: true,
            },
            parentId: {
                type: 'number',
                required: true,
            },
        };
        this.schemaMap = {
            create: Object.assign({}, commonCreateUpdate),
            update: Object.assign({}, commonCreateUpdate, { id: {
                    type: 'number',
                    required: true,
                } }),
            get: {
                id: {
                    type: 'string',
                    required: true,
                },
            },
            delete: {
                id: {
                    type: 'string',
                    required: true,
                },
            },
            updateSort: {
                sortList: {
                    type: 'array',
                    required: true,
                    requiredFields: [
                        'id',
                        'sort',
                    ],
                },
            },
        };
    }
}
exports.default = MenuController;