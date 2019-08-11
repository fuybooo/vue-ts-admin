import Vue from 'vue'
import {prefix, urlType} from '@/util/project/urls/url-util'
import {mode} from '@/config/base-config'
// tslint:disable-next-line:no-var-requires
const ENV = require('../../../../shared/env.js')

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
  test: {
    getRules: urlType,
  },
  user: {
    list: urlType,
    get: urlType,
    create: urlType,
    delete: urlType,
    update: urlType,
  },
  menu: {
    list: urlType,
    get: urlType,
    create: urlType,
    delete: urlType,
    update: urlType,
    updateSort: urlType,
  },
  tenant: {
    list: urlType,
    get: urlType,
    create: urlType,
    delete: urlType,
    update: urlType,
  },
  dictionary: {
    list: urlType,
    get: urlType,
    create: urlType,
    delete: urlType,
    update: urlType,
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
    login: mode === ENV.DEV_MODE.LOCAL_NODE ? 'login' : {url: 'unify/userLogin', isStatic: false, prefix: prefix.base},
    forgot: {url: 'forgot', isStatic: true, prefix: prefix.base},
    register: {url: 'register'},
    logout: {url: 'logout', isStatic: true, prefix: prefix.base},
  },
  test: {
    getRules: 'platform-extend/rule/rule/search',
  },
  user: {
    list: 'user/list',
    get: 'user/get',
    delete: 'user/delete',
    create: 'user/create',
    update: 'user/update',
  },
  menu: {
    list: 'menu/list',
    get: 'menu/get',
    delete: 'menu/delete',
    create: 'menu/create',
    update: 'menu/update',
    updateSort: 'menu/updateSort',
  },
  tenant: {
    list: 'tenant/list',
    get: 'tenant/get',
    delete: 'tenant/delete',
    create: 'tenant/create',
    update: 'tenant/update',
  },
  dictionary: {
    list: 'dictionary/list',
    get: 'dictionary/get',
    delete: 'dictionary/delete',
    create: 'dictionary/create',
    update: 'dictionary/update',
  },
}
Vue.prototype.$urls = urls
