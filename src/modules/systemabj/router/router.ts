import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabj = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/Systemabj.vue')
const SystemabjUserabj = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-userabj/SystemabjUserabj.vue')
const SystemabjUserabjDetail = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-userabj/SystemabjUserabjDetail.vue')
const SystemabjRoleabj = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-roleabj/SystemabjRoleabj.vue')
const SystemabjRoleabjDetail = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-roleabj/SystemabjRoleabjDetail.vue')
const SystemabjAuthabj = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-authabj/SystemabjAuthabj.vue')
const SystemabjAuthabjDetail = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-authabj/SystemabjAuthabjDetail.vue')
const SystemabjOrganizationabj = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-organizationabj/SystemabjOrganizationabj.vue')
const SystemabjOrganizationabjDetail = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-organizationabj/SystemabjOrganizationabjDetail.vue')
const SystemabjMenuabj = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-menuabj/SystemabjMenuabj.vue')
const SystemabjMenuabjDetail = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-menuabj/SystemabjMenuabjDetail.vue')
const SystemabjDictionaryabj = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-dictionaryabj/SystemabjDictionaryabj.vue')
const SystemabjDictionaryabjDetail = () => import(/* webpackChunkName: "systemabj" */ '@/modules/systemabj/views/systemabj-dictionaryabj/SystemabjDictionaryabjDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabj',
  name: 'systemabj',
  component: Systemabj,
  children: [
    {
      path: 'systemabj-userabj',
      name: 'systemabj-userabj',
      component: SystemabjUserabj,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabj-userabj-detail/:pattern/:id?',
      name: 'systemabj-userabj-detail',
      component: SystemabjUserabjDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabj-userabj',
      },
    },
{
      path: 'systemabj-roleabj',
      name: 'systemabj-roleabj',
      component: SystemabjRoleabj,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabj-roleabj-detail/:pattern/:id?',
      name: 'systemabj-roleabj-detail',
      component: SystemabjRoleabjDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabj-roleabj',
      },
    },
{
      path: 'systemabj-authabj',
      name: 'systemabj-authabj',
      component: SystemabjAuthabj,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabj-authabj-detail/:pattern/:id?',
      name: 'systemabj-authabj-detail',
      component: SystemabjAuthabjDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabj-authabj',
      },
    },
{
      path: 'systemabj-organizationabj',
      name: 'systemabj-organizationabj',
      component: SystemabjOrganizationabj,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabj-organizationabj-detail/:pattern/:id?',
      name: 'systemabj-organizationabj-detail',
      component: SystemabjOrganizationabjDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabj-organizationabj',
      },
    },
{
      path: 'systemabj-menuabj',
      name: 'systemabj-menuabj',
      component: SystemabjMenuabj,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabj-menuabj-detail/:pattern/:id?',
      name: 'systemabj-menuabj-detail',
      component: SystemabjMenuabjDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabj-menuabj',
      },
    },
{
      path: 'systemabj-dictionaryabj',
      name: 'systemabj-dictionaryabj',
      component: SystemabjDictionaryabj,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabj-dictionaryabj-detail/:pattern/:id?',
      name: 'systemabj-dictionaryabj-detail',
      component: SystemabjDictionaryabjDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabj-dictionaryabj',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
