import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabk = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/Systemabk.vue')
const SystemabkUserabk = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-userabk/SystemabkUserabk.vue')
const SystemabkUserabkDetail = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-userabk/SystemabkUserabkDetail.vue')
const SystemabkRoleabk = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-roleabk/SystemabkRoleabk.vue')
const SystemabkRoleabkDetail = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-roleabk/SystemabkRoleabkDetail.vue')
const SystemabkAuthabk = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-authabk/SystemabkAuthabk.vue')
const SystemabkAuthabkDetail = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-authabk/SystemabkAuthabkDetail.vue')
const SystemabkOrganizationabk = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-organizationabk/SystemabkOrganizationabk.vue')
const SystemabkOrganizationabkDetail = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-organizationabk/SystemabkOrganizationabkDetail.vue')
const SystemabkMenuabk = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-menuabk/SystemabkMenuabk.vue')
const SystemabkMenuabkDetail = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-menuabk/SystemabkMenuabkDetail.vue')
const SystemabkDictionaryabk = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-dictionaryabk/SystemabkDictionaryabk.vue')
const SystemabkDictionaryabkDetail = () => import(/* webpackChunkName: "systemabk" */ '@/modules/systemabk/views/systemabk-dictionaryabk/SystemabkDictionaryabkDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabk',
  name: 'systemabk',
  component: Systemabk,
  children: [
    {
      path: 'systemabk-userabk',
      name: 'systemabk-userabk',
      component: SystemabkUserabk,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabk-userabk-detail/:pattern/:id?',
      name: 'systemabk-userabk-detail',
      component: SystemabkUserabkDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabk-userabk',
      },
    },
{
      path: 'systemabk-roleabk',
      name: 'systemabk-roleabk',
      component: SystemabkRoleabk,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabk-roleabk-detail/:pattern/:id?',
      name: 'systemabk-roleabk-detail',
      component: SystemabkRoleabkDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabk-roleabk',
      },
    },
{
      path: 'systemabk-authabk',
      name: 'systemabk-authabk',
      component: SystemabkAuthabk,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabk-authabk-detail/:pattern/:id?',
      name: 'systemabk-authabk-detail',
      component: SystemabkAuthabkDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabk-authabk',
      },
    },
{
      path: 'systemabk-organizationabk',
      name: 'systemabk-organizationabk',
      component: SystemabkOrganizationabk,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabk-organizationabk-detail/:pattern/:id?',
      name: 'systemabk-organizationabk-detail',
      component: SystemabkOrganizationabkDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabk-organizationabk',
      },
    },
{
      path: 'systemabk-menuabk',
      name: 'systemabk-menuabk',
      component: SystemabkMenuabk,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabk-menuabk-detail/:pattern/:id?',
      name: 'systemabk-menuabk-detail',
      component: SystemabkMenuabkDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabk-menuabk',
      },
    },
{
      path: 'systemabk-dictionaryabk',
      name: 'systemabk-dictionaryabk',
      component: SystemabkDictionaryabk,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabk-dictionaryabk-detail/:pattern/:id?',
      name: 'systemabk-dictionaryabk-detail',
      component: SystemabkDictionaryabkDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabk-dictionaryabk',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
