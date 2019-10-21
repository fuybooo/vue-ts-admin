"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNeedNotTokenRouter(routerList) {
    return routerList.map(item => (Object.assign({}, item, { withoutToken: true })));
}
exports.getNeedNotTokenRouter = getNeedNotTokenRouter;
