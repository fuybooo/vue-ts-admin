import {lg} from '@/util/common/fns/fns'
import {KEY_API, KEY_MODE} from '@/model/project/local-storage-keys/keys'

// tslint:disable-next-line:no-var-requires
const ENV = require('../../shared/env.js')

// 可以在这里切换调试的服务器【这里是整体切换，相对而言 dev-config中是局部切换】
// const baseURL = 'http://api.testsyzx.everjiankang.com.cn' // 尚医至信测试环境
let baseURL = 'http://localhost:3002/api' // nodejs 环境
export const mode = lg(KEY_MODE) || process.env.VUE_APP_SERVICE
if (mode === ENV.DEV_MODE.LOCAL_NODE) {
  baseURL = 'http://localhost:3002/api' // nodejs 环境
} else if (mode === ENV.DEV_MODE.THC) {
  baseURL = 'http://api.testsyzx.everjiankang.com.cn'
}
// window的最小高度
const MIN_WIN_HEIGHT = 450
export default {
  /**
   * 这里的配置可以使得在不方便改代码进行调试时，可以在浏览器控制台输入相应的代码进行路径的切换
   * 例如 localStorage.setItem('FUYBOOO_API', 'http://api.dev3.everjiankang.com.cn/')
   * 表示，所有所有请求都将被发送到 http://api.dev3.everjiankang.com.cn/ 上
   */
  baseURL: lg(KEY_API) || baseURL,
  MIN_WIN_HEIGHT,
}
