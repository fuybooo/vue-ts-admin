// tslint:disable-next-line:no-var-requires
const config = require('../../../../config.json')
const p = config.projectPrefix + 'FE_'
// const p = 'VUE_'
export const KEY_LANG = p + 'LANG'
export const KEY_IP = p + 'IP'
export const KEY_TOKEN = p + 'TOKEN'
export const KEY_USERNAME = p + 'USERNAME'
export const KEY_PASSWORD = p + 'PASSWORD'
export const KEY_UID = p + 'UID'
export const KEY_API = p + 'API'
export const KEY_SUB_API = p + 'SUB_API_'
// 通过localStorage调整请求方式
export const KEY_MODE = p + 'MODE' // 值为 LOCAL_NODE 表示请求本地node环境 值为 THC表示请求THC的环境

