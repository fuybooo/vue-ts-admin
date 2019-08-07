import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabw = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/Systemabw.vue')
const SystemabwUserabw = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-userabw/SystemabwUserabw.vue')
const SystemabwUserabwDetail = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-userabw/SystemabwUserabwDetail.vue')
const SystemabwRoleabw = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-roleabw/SystemabwRoleabw.vue')
const SystemabwRoleabwDetail = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-roleabw/SystemabwRoleabwDetail.vue')
const SystemabwAuthabw = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-authabw/SystemabwAuthabw.vue')
const SystemabwAuthabwDetail = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-authabw/SystemabwAuthabwDetail.vue')
const SystemabwOrganizationabw = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-organizationabw/SystemabwOrganizationabw.vue')
const SystemabwOrganizationabwDetail = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-organizationabw/SystemabwOrganizationabwDetail.vue')
const SystemabwMenuabw = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-menuabw/SystemabwMenuabw.vue')
const SystemabwMenuabwDetail = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-menuabw/SystemabwMenuabwDetail.vue')
const SystemabwDictionaryabw = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-dictionaryabw/SystemabwDictionaryabw.vue')
const SystemabwDictionaryabwDetail = () => import(/* webpackChunkName: "systemabw" */ '@/modules/systemabw/views/systemabw-dictionaryabw/SystemabwDictionaryabwDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabw',
  name: 'systemabw',
  component: Systemabw,
  children: [
    {
      path: 'systemabw-userabw',
      name: 'systemabw-userabw',
      component: SystemabwUserabw,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabw-userabw-detail/:pattern/:id?',
      name: 'systemabw-userabw-detail',
      component: SystemabwUserabwDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabw-userabw',
      },
    },
{
      path: 'systemabw-roleabw',
      name: 'systemabw-roleabw',
      component: SystemabwRoleabw,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabw-roleabw-detail/:pattern/:id?',
      name: 'systemabw-roleabw-detail',
      component: SystemabwRoleabwDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabw-roleabw',
      },
    },
{
      path: 'systemabw-authabw',
      name: 'systemabw-authabw',
      component: SystemabwAuthabw,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabw-authabw-detail/:pattern/:id?',
      name: 'systemabw-authabw-detail',
      component: SystemabwAuthabwDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabw-authabw',
      },
    },
{
      path: 'systemabw-organizationabw',
      name: 'systemabw-organizationabw',
      component: SystemabwOrganizationabw,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabw-organizationabw-detail/:pattern/:id?',
      name: 'systemabw-organizationabw-detail',
      component: SystemabwOrganizationabwDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabw-organizationabw',
      },
    },
{
      path: 'systemabw-menuabw',
      name: 'systemabw-menuabw',
      component: SystemabwMenuabw,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabw-menuabw-detail/:pattern/:id?',
      name: 'systemabw-menuabw-detail',
      component: SystemabwMenuabwDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabw-menuabw',
      },
    },
{
      path: 'systemabw-dictionaryabw',
      name: 'systemabw-dictionaryabw',
      component: SystemabwDictionaryabw,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabw-dictionaryabw-detail/:pattern/:id?',
      name: 'systemabw-dictionaryabw-detail',
      component: SystemabwDictionaryabwDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabw-dictionaryabw',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
