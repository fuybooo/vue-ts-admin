import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabg = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/Systemabg.vue')
const SystemabgUserabg = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-userabg/SystemabgUserabg.vue')
const SystemabgUserabgDetail = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-userabg/SystemabgUserabgDetail.vue')
const SystemabgRoleabg = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-roleabg/SystemabgRoleabg.vue')
const SystemabgRoleabgDetail = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-roleabg/SystemabgRoleabgDetail.vue')
const SystemabgAuthabg = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-authabg/SystemabgAuthabg.vue')
const SystemabgAuthabgDetail = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-authabg/SystemabgAuthabgDetail.vue')
const SystemabgOrganizationabg = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-organizationabg/SystemabgOrganizationabg.vue')
const SystemabgOrganizationabgDetail = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-organizationabg/SystemabgOrganizationabgDetail.vue')
const SystemabgMenuabg = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-menuabg/SystemabgMenuabg.vue')
const SystemabgMenuabgDetail = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-menuabg/SystemabgMenuabgDetail.vue')
const SystemabgDictionaryabg = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-dictionaryabg/SystemabgDictionaryabg.vue')
const SystemabgDictionaryabgDetail = () => import(/* webpackChunkName: "systemabg" */ '@/modules/systemabg/views/systemabg-dictionaryabg/SystemabgDictionaryabgDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabg',
  name: 'systemabg',
  component: Systemabg,
  children: [
    {
      path: 'systemabg-userabg',
      name: 'systemabg-userabg',
      component: SystemabgUserabg,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabg-userabg-detail/:pattern/:id?',
      name: 'systemabg-userabg-detail',
      component: SystemabgUserabgDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabg-userabg',
      },
    },
{
      path: 'systemabg-roleabg',
      name: 'systemabg-roleabg',
      component: SystemabgRoleabg,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabg-roleabg-detail/:pattern/:id?',
      name: 'systemabg-roleabg-detail',
      component: SystemabgRoleabgDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabg-roleabg',
      },
    },
{
      path: 'systemabg-authabg',
      name: 'systemabg-authabg',
      component: SystemabgAuthabg,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabg-authabg-detail/:pattern/:id?',
      name: 'systemabg-authabg-detail',
      component: SystemabgAuthabgDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabg-authabg',
      },
    },
{
      path: 'systemabg-organizationabg',
      name: 'systemabg-organizationabg',
      component: SystemabgOrganizationabg,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabg-organizationabg-detail/:pattern/:id?',
      name: 'systemabg-organizationabg-detail',
      component: SystemabgOrganizationabgDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabg-organizationabg',
      },
    },
{
      path: 'systemabg-menuabg',
      name: 'systemabg-menuabg',
      component: SystemabgMenuabg,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabg-menuabg-detail/:pattern/:id?',
      name: 'systemabg-menuabg-detail',
      component: SystemabgMenuabgDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabg-menuabg',
      },
    },
{
      path: 'systemabg-dictionaryabg',
      name: 'systemabg-dictionaryabg',
      component: SystemabgDictionaryabg,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabg-dictionaryabg-detail/:pattern/:id?',
      name: 'systemabg-dictionaryabg-detail',
      component: SystemabgDictionaryabgDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabg-dictionaryabg',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
