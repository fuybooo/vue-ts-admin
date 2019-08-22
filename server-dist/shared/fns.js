"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 将前后端公用的方法放在此处
 */
function getTime(type = 'yyyy-MM-dd HH:mm:ss', dateInstance) {
    dateInstance = dateInstance || new Date();
    const p0 = (num) => (num + '').padStart(2, '0');
    let date;
    const y = dateInstance.getFullYear();
    const M = p0(dateInstance.getMonth() + 1);
    const d = p0(dateInstance.getDate());
    const H = p0(dateInstance.getHours());
    const m = p0(dateInstance.getMinutes());
    const s = p0(dateInstance.getSeconds());
    if (type === 'yyyy-MM-dd HH:mm:ss') {
        date = `${y}-${M}-${d} ${H}:${m}:${s}`;
    }
    else if (type === 'yyyy-MM') {
        date = `${y}-${M}`;
    }
    return date;
}
exports.getTime = getTime;
/* 生成 uuid */
function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        // tslint:disable-next-line:no-bitwise
        const r = Math.random() * 16 | 0;
        // tslint:disable-next-line:no-bitwise
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
exports.guid = guid;
