import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabm = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/Systemabm.vue')
const SystemabmUserabm = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-userabm/SystemabmUserabm.vue')
const SystemabmUserabmDetail = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-userabm/SystemabmUserabmDetail.vue')
const SystemabmRoleabm = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-roleabm/SystemabmRoleabm.vue')
const SystemabmRoleabmDetail = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-roleabm/SystemabmRoleabmDetail.vue')
const SystemabmAuthabm = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-authabm/SystemabmAuthabm.vue')
const SystemabmAuthabmDetail = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-authabm/SystemabmAuthabmDetail.vue')
const SystemabmOrganizationabm = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-organizationabm/SystemabmOrganizationabm.vue')
const SystemabmOrganizationabmDetail = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-organizationabm/SystemabmOrganizationabmDetail.vue')
const SystemabmMenuabm = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-menuabm/SystemabmMenuabm.vue')
const SystemabmMenuabmDetail = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-menuabm/SystemabmMenuabmDetail.vue')
const SystemabmDictionaryabm = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-dictionaryabm/SystemabmDictionaryabm.vue')
const SystemabmDictionaryabmDetail = () => import(/* webpackChunkName: "systemabm" */ '@/modules/systemabm/views/systemabm-dictionaryabm/SystemabmDictionaryabmDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabm',
  name: 'systemabm',
  component: Systemabm,
  children: [
    {
      path: 'systemabm-userabm',
      name: 'systemabm-userabm',
      component: SystemabmUserabm,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabm-userabm-detail/:pattern/:id?',
      name: 'systemabm-userabm-detail',
      component: SystemabmUserabmDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabm-userabm',
      },
    },
{
      path: 'systemabm-roleabm',
      name: 'systemabm-roleabm',
      component: SystemabmRoleabm,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabm-roleabm-detail/:pattern/:id?',
      name: 'systemabm-roleabm-detail',
      component: SystemabmRoleabmDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabm-roleabm',
      },
    },
{
      path: 'systemabm-authabm',
      name: 'systemabm-authabm',
      component: SystemabmAuthabm,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabm-authabm-detail/:pattern/:id?',
      name: 'systemabm-authabm-detail',
      component: SystemabmAuthabmDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabm-authabm',
      },
    },
{
      path: 'systemabm-organizationabm',
      name: 'systemabm-organizationabm',
      component: SystemabmOrganizationabm,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabm-organizationabm-detail/:pattern/:id?',
      name: 'systemabm-organizationabm-detail',
      component: SystemabmOrganizationabmDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabm-organizationabm',
      },
    },
{
      path: 'systemabm-menuabm',
      name: 'systemabm-menuabm',
      component: SystemabmMenuabm,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabm-menuabm-detail/:pattern/:id?',
      name: 'systemabm-menuabm-detail',
      component: SystemabmMenuabmDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabm-menuabm',
      },
    },
{
      path: 'systemabm-dictionaryabm',
      name: 'systemabm-dictionaryabm',
      component: SystemabmDictionaryabm,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabm-dictionaryabm-detail/:pattern/:id?',
      name: 'systemabm-dictionaryabm-detail',
      component: SystemabmDictionaryabmDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabm-dictionaryabm',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
