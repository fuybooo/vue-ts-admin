import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabp = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/Systemabp.vue')
const SystemabpUserabp = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-userabp/SystemabpUserabp.vue')
const SystemabpUserabpDetail = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-userabp/SystemabpUserabpDetail.vue')
const SystemabpRoleabp = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-roleabp/SystemabpRoleabp.vue')
const SystemabpRoleabpDetail = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-roleabp/SystemabpRoleabpDetail.vue')
const SystemabpAuthabp = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-authabp/SystemabpAuthabp.vue')
const SystemabpAuthabpDetail = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-authabp/SystemabpAuthabpDetail.vue')
const SystemabpOrganizationabp = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-organizationabp/SystemabpOrganizationabp.vue')
const SystemabpOrganizationabpDetail = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-organizationabp/SystemabpOrganizationabpDetail.vue')
const SystemabpMenuabp = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-menuabp/SystemabpMenuabp.vue')
const SystemabpMenuabpDetail = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-menuabp/SystemabpMenuabpDetail.vue')
const SystemabpDictionaryabp = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-dictionaryabp/SystemabpDictionaryabp.vue')
const SystemabpDictionaryabpDetail = () => import(/* webpackChunkName: "systemabp" */ '@/modules/systemabp/views/systemabp-dictionaryabp/SystemabpDictionaryabpDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabp',
  name: 'systemabp',
  component: Systemabp,
  children: [
    {
      path: 'systemabp-userabp',
      name: 'systemabp-userabp',
      component: SystemabpUserabp,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabp-userabp-detail/:pattern/:id?',
      name: 'systemabp-userabp-detail',
      component: SystemabpUserabpDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabp-userabp',
      },
    },
{
      path: 'systemabp-roleabp',
      name: 'systemabp-roleabp',
      component: SystemabpRoleabp,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabp-roleabp-detail/:pattern/:id?',
      name: 'systemabp-roleabp-detail',
      component: SystemabpRoleabpDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabp-roleabp',
      },
    },
{
      path: 'systemabp-authabp',
      name: 'systemabp-authabp',
      component: SystemabpAuthabp,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabp-authabp-detail/:pattern/:id?',
      name: 'systemabp-authabp-detail',
      component: SystemabpAuthabpDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabp-authabp',
      },
    },
{
      path: 'systemabp-organizationabp',
      name: 'systemabp-organizationabp',
      component: SystemabpOrganizationabp,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabp-organizationabp-detail/:pattern/:id?',
      name: 'systemabp-organizationabp-detail',
      component: SystemabpOrganizationabpDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabp-organizationabp',
      },
    },
{
      path: 'systemabp-menuabp',
      name: 'systemabp-menuabp',
      component: SystemabpMenuabp,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabp-menuabp-detail/:pattern/:id?',
      name: 'systemabp-menuabp-detail',
      component: SystemabpMenuabpDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabp-menuabp',
      },
    },
{
      path: 'systemabp-dictionaryabp',
      name: 'systemabp-dictionaryabp',
      component: SystemabpDictionaryabp,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabp-dictionaryabp-detail/:pattern/:id?',
      name: 'systemabp-dictionaryabp-detail',
      component: SystemabpDictionaryabpDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabp-dictionaryabp',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
