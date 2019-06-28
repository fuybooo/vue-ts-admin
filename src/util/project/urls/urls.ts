import Vue from 'vue'
import {prefix, urlType} from '@/util/project/urls/url-util'
// 该接口与urls保持一致，保证使用this.$urls时能够通过"."得到提示
export interface Urls {
  demo: {
    table: urlType,
  },
  login: {
    login: urlType,
    forgot: urlType,
    register: urlType,
    logout: urlType,
  },
}
const urls: Urls = {
  demo: {
    table: {url: 'table/get', isStatic: true, prefix: prefix.demo},
  },
  login: {
    login: {url: 'login', isStatic: true, prefix: prefix.base},
    forgot: {url: 'forgot', isStatic: true, prefix: prefix.base},
    register: {url: 'register', isStatic: true, prefix: prefix.base},
    logout: {url: 'logout', isStatic: true, prefix: prefix.base},
  },
}
Vue.prototype.$urls = urls
