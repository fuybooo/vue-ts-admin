import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabv = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/Systemabv.vue')
const SystemabvUserabv = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-userabv/SystemabvUserabv.vue')
const SystemabvUserabvDetail = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-userabv/SystemabvUserabvDetail.vue')
const SystemabvRoleabv = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-roleabv/SystemabvRoleabv.vue')
const SystemabvRoleabvDetail = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-roleabv/SystemabvRoleabvDetail.vue')
const SystemabvAuthabv = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-authabv/SystemabvAuthabv.vue')
const SystemabvAuthabvDetail = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-authabv/SystemabvAuthabvDetail.vue')
const SystemabvOrganizationabv = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-organizationabv/SystemabvOrganizationabv.vue')
const SystemabvOrganizationabvDetail = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-organizationabv/SystemabvOrganizationabvDetail.vue')
const SystemabvMenuabv = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-menuabv/SystemabvMenuabv.vue')
const SystemabvMenuabvDetail = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-menuabv/SystemabvMenuabvDetail.vue')
const SystemabvDictionaryabv = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-dictionaryabv/SystemabvDictionaryabv.vue')
const SystemabvDictionaryabvDetail = () => import(/* webpackChunkName: "systemabv" */ '@/modules/systemabv/views/systemabv-dictionaryabv/SystemabvDictionaryabvDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabv',
  name: 'systemabv',
  component: Systemabv,
  children: [
    {
      path: 'systemabv-userabv',
      name: 'systemabv-userabv',
      component: SystemabvUserabv,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabv-userabv-detail/:pattern/:id?',
      name: 'systemabv-userabv-detail',
      component: SystemabvUserabvDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabv-userabv',
      },
    },
{
      path: 'systemabv-roleabv',
      name: 'systemabv-roleabv',
      component: SystemabvRoleabv,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabv-roleabv-detail/:pattern/:id?',
      name: 'systemabv-roleabv-detail',
      component: SystemabvRoleabvDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabv-roleabv',
      },
    },
{
      path: 'systemabv-authabv',
      name: 'systemabv-authabv',
      component: SystemabvAuthabv,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabv-authabv-detail/:pattern/:id?',
      name: 'systemabv-authabv-detail',
      component: SystemabvAuthabvDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabv-authabv',
      },
    },
{
      path: 'systemabv-organizationabv',
      name: 'systemabv-organizationabv',
      component: SystemabvOrganizationabv,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabv-organizationabv-detail/:pattern/:id?',
      name: 'systemabv-organizationabv-detail',
      component: SystemabvOrganizationabvDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabv-organizationabv',
      },
    },
{
      path: 'systemabv-menuabv',
      name: 'systemabv-menuabv',
      component: SystemabvMenuabv,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabv-menuabv-detail/:pattern/:id?',
      name: 'systemabv-menuabv-detail',
      component: SystemabvMenuabvDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabv-menuabv',
      },
    },
{
      path: 'systemabv-dictionaryabv',
      name: 'systemabv-dictionaryabv',
      component: SystemabvDictionaryabv,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabv-dictionaryabv-detail/:pattern/:id?',
      name: 'systemabv-dictionaryabv-detail',
      component: SystemabvDictionaryabvDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabv-dictionaryabv',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
