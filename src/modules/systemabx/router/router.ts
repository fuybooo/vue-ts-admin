import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabx = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/Systemabx.vue')
const SystemabxUserabx = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-userabx/SystemabxUserabx.vue')
const SystemabxUserabxDetail = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-userabx/SystemabxUserabxDetail.vue')
const SystemabxRoleabx = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-roleabx/SystemabxRoleabx.vue')
const SystemabxRoleabxDetail = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-roleabx/SystemabxRoleabxDetail.vue')
const SystemabxAuthabx = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-authabx/SystemabxAuthabx.vue')
const SystemabxAuthabxDetail = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-authabx/SystemabxAuthabxDetail.vue')
const SystemabxOrganizationabx = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-organizationabx/SystemabxOrganizationabx.vue')
const SystemabxOrganizationabxDetail = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-organizationabx/SystemabxOrganizationabxDetail.vue')
const SystemabxMenuabx = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-menuabx/SystemabxMenuabx.vue')
const SystemabxMenuabxDetail = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-menuabx/SystemabxMenuabxDetail.vue')
const SystemabxDictionaryabx = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-dictionaryabx/SystemabxDictionaryabx.vue')
const SystemabxDictionaryabxDetail = () => import(/* webpackChunkName: "systemabx" */ '@/modules/systemabx/views/systemabx-dictionaryabx/SystemabxDictionaryabxDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabx',
  name: 'systemabx',
  component: Systemabx,
  children: [
    {
      path: 'systemabx-userabx',
      name: 'systemabx-userabx',
      component: SystemabxUserabx,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabx-userabx-detail/:pattern/:id?',
      name: 'systemabx-userabx-detail',
      component: SystemabxUserabxDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabx-userabx',
      },
    },
{
      path: 'systemabx-roleabx',
      name: 'systemabx-roleabx',
      component: SystemabxRoleabx,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabx-roleabx-detail/:pattern/:id?',
      name: 'systemabx-roleabx-detail',
      component: SystemabxRoleabxDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabx-roleabx',
      },
    },
{
      path: 'systemabx-authabx',
      name: 'systemabx-authabx',
      component: SystemabxAuthabx,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabx-authabx-detail/:pattern/:id?',
      name: 'systemabx-authabx-detail',
      component: SystemabxAuthabxDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabx-authabx',
      },
    },
{
      path: 'systemabx-organizationabx',
      name: 'systemabx-organizationabx',
      component: SystemabxOrganizationabx,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabx-organizationabx-detail/:pattern/:id?',
      name: 'systemabx-organizationabx-detail',
      component: SystemabxOrganizationabxDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabx-organizationabx',
      },
    },
{
      path: 'systemabx-menuabx',
      name: 'systemabx-menuabx',
      component: SystemabxMenuabx,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabx-menuabx-detail/:pattern/:id?',
      name: 'systemabx-menuabx-detail',
      component: SystemabxMenuabxDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabx-menuabx',
      },
    },
{
      path: 'systemabx-dictionaryabx',
      name: 'systemabx-dictionaryabx',
      component: SystemabxDictionaryabx,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabx-dictionaryabx-detail/:pattern/:id?',
      name: 'systemabx-dictionaryabx-detail',
      component: SystemabxDictionaryabxDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabx-dictionaryabx',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
