import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabb = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/Systemabb.vue')
const SystemabbUserabb = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-userabb/SystemabbUserabb.vue')
const SystemabbUserabbDetail = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-userabb/SystemabbUserabbDetail.vue')
const SystemabbRoleabb = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-roleabb/SystemabbRoleabb.vue')
const SystemabbRoleabbDetail = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-roleabb/SystemabbRoleabbDetail.vue')
const SystemabbAuthabb = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-authabb/SystemabbAuthabb.vue')
const SystemabbAuthabbDetail = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-authabb/SystemabbAuthabbDetail.vue')
const SystemabbOrganizationabb = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-organizationabb/SystemabbOrganizationabb.vue')
const SystemabbOrganizationabbDetail = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-organizationabb/SystemabbOrganizationabbDetail.vue')
const SystemabbMenuabb = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-menuabb/SystemabbMenuabb.vue')
const SystemabbMenuabbDetail = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-menuabb/SystemabbMenuabbDetail.vue')
const SystemabbDictionaryabb = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-dictionaryabb/SystemabbDictionaryabb.vue')
const SystemabbDictionaryabbDetail = () => import(/* webpackChunkName: "systemabb" */ '@/modules/systemabb/views/systemabb-dictionaryabb/SystemabbDictionaryabbDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabb',
  name: 'systemabb',
  component: Systemabb,
  children: [
    {
      path: 'systemabb-userabb',
      name: 'systemabb-userabb',
      component: SystemabbUserabb,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabb-userabb-detail/:pattern/:id?',
      name: 'systemabb-userabb-detail',
      component: SystemabbUserabbDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabb-userabb',
      },
    },
{
      path: 'systemabb-roleabb',
      name: 'systemabb-roleabb',
      component: SystemabbRoleabb,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabb-roleabb-detail/:pattern/:id?',
      name: 'systemabb-roleabb-detail',
      component: SystemabbRoleabbDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabb-roleabb',
      },
    },
{
      path: 'systemabb-authabb',
      name: 'systemabb-authabb',
      component: SystemabbAuthabb,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabb-authabb-detail/:pattern/:id?',
      name: 'systemabb-authabb-detail',
      component: SystemabbAuthabbDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabb-authabb',
      },
    },
{
      path: 'systemabb-organizationabb',
      name: 'systemabb-organizationabb',
      component: SystemabbOrganizationabb,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabb-organizationabb-detail/:pattern/:id?',
      name: 'systemabb-organizationabb-detail',
      component: SystemabbOrganizationabbDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabb-organizationabb',
      },
    },
{
      path: 'systemabb-menuabb',
      name: 'systemabb-menuabb',
      component: SystemabbMenuabb,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabb-menuabb-detail/:pattern/:id?',
      name: 'systemabb-menuabb-detail',
      component: SystemabbMenuabbDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabb-menuabb',
      },
    },
{
      path: 'systemabb-dictionaryabb',
      name: 'systemabb-dictionaryabb',
      component: SystemabbDictionaryabb,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabb-dictionaryabb-detail/:pattern/:id?',
      name: 'systemabb-dictionaryabb-detail',
      component: SystemabbDictionaryabbDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabb-dictionaryabb',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
