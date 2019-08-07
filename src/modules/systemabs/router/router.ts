import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabs = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/Systemabs.vue')
const SystemabsUserabs = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-userabs/SystemabsUserabs.vue')
const SystemabsUserabsDetail = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-userabs/SystemabsUserabsDetail.vue')
const SystemabsRoleabs = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-roleabs/SystemabsRoleabs.vue')
const SystemabsRoleabsDetail = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-roleabs/SystemabsRoleabsDetail.vue')
const SystemabsAuthabs = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-authabs/SystemabsAuthabs.vue')
const SystemabsAuthabsDetail = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-authabs/SystemabsAuthabsDetail.vue')
const SystemabsOrganizationabs = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-organizationabs/SystemabsOrganizationabs.vue')
const SystemabsOrganizationabsDetail = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-organizationabs/SystemabsOrganizationabsDetail.vue')
const SystemabsMenuabs = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-menuabs/SystemabsMenuabs.vue')
const SystemabsMenuabsDetail = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-menuabs/SystemabsMenuabsDetail.vue')
const SystemabsDictionaryabs = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-dictionaryabs/SystemabsDictionaryabs.vue')
const SystemabsDictionaryabsDetail = () => import(/* webpackChunkName: "systemabs" */ '@/modules/systemabs/views/systemabs-dictionaryabs/SystemabsDictionaryabsDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabs',
  name: 'systemabs',
  component: Systemabs,
  children: [
    {
      path: 'systemabs-userabs',
      name: 'systemabs-userabs',
      component: SystemabsUserabs,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabs-userabs-detail/:pattern/:id?',
      name: 'systemabs-userabs-detail',
      component: SystemabsUserabsDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabs-userabs',
      },
    },
{
      path: 'systemabs-roleabs',
      name: 'systemabs-roleabs',
      component: SystemabsRoleabs,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabs-roleabs-detail/:pattern/:id?',
      name: 'systemabs-roleabs-detail',
      component: SystemabsRoleabsDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabs-roleabs',
      },
    },
{
      path: 'systemabs-authabs',
      name: 'systemabs-authabs',
      component: SystemabsAuthabs,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabs-authabs-detail/:pattern/:id?',
      name: 'systemabs-authabs-detail',
      component: SystemabsAuthabsDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabs-authabs',
      },
    },
{
      path: 'systemabs-organizationabs',
      name: 'systemabs-organizationabs',
      component: SystemabsOrganizationabs,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabs-organizationabs-detail/:pattern/:id?',
      name: 'systemabs-organizationabs-detail',
      component: SystemabsOrganizationabsDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabs-organizationabs',
      },
    },
{
      path: 'systemabs-menuabs',
      name: 'systemabs-menuabs',
      component: SystemabsMenuabs,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabs-menuabs-detail/:pattern/:id?',
      name: 'systemabs-menuabs-detail',
      component: SystemabsMenuabsDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabs-menuabs',
      },
    },
{
      path: 'systemabs-dictionaryabs',
      name: 'systemabs-dictionaryabs',
      component: SystemabsDictionaryabs,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabs-dictionaryabs-detail/:pattern/:id?',
      name: 'systemabs-dictionaryabs-detail',
      component: SystemabsDictionaryabsDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabs-dictionaryabs',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
