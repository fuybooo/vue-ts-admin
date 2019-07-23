import Vue from 'vue'
import {prefix, urlType} from '@/util/project/urls/url-util'
// 该接口与urls保持一致，保证使用this.$urls时能够通过"."得到提示
export interface Urls {
  demo: {
    table: {
      get: urlType,
      getById: urlType,
      create: urlType,
      edit: urlType,
      del: urlType,
    },
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
    table: {
      get: {url: 'table/get', isStatic: true, prefix: prefix.demo},
      getById: {url: 'table/getById', isStatic: true, prefix: prefix.demo},
      create: {url: 'table/create', isStatic: true, prefix: prefix.demo},
      edit: {url: 'table/edit', isStatic: true, prefix: prefix.demo},
      del: {url: 'table/del', isStatic: true, prefix: prefix.demo},
    },
  },
  login: {
    login: process.env.VUE_APP_SERVICE === 'LOCAL_NODE' ? 'login' : {url: 'unify/userLogin', isStatic: false, prefix: prefix.base},
    forgot: {url: 'forgot', isStatic: true, prefix: prefix.base},
    register: {url: 'register', isStatic: true, prefix: prefix.base},
    logout: {url: 'logout', isStatic: true, prefix: prefix.base},
  },
}
Vue.prototype.$urls = urls
