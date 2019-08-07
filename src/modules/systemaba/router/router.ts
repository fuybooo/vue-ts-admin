import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaba = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/Systemaba.vue')
const SystemabaUseraba = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-useraba/SystemabaUseraba.vue')
const SystemabaUserabaDetail = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-useraba/SystemabaUserabaDetail.vue')
const SystemabaRoleaba = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-roleaba/SystemabaRoleaba.vue')
const SystemabaRoleabaDetail = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-roleaba/SystemabaRoleabaDetail.vue')
const SystemabaAuthaba = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-authaba/SystemabaAuthaba.vue')
const SystemabaAuthabaDetail = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-authaba/SystemabaAuthabaDetail.vue')
const SystemabaOrganizationaba = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-organizationaba/SystemabaOrganizationaba.vue')
const SystemabaOrganizationabaDetail = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-organizationaba/SystemabaOrganizationabaDetail.vue')
const SystemabaMenuaba = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-menuaba/SystemabaMenuaba.vue')
const SystemabaMenuabaDetail = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-menuaba/SystemabaMenuabaDetail.vue')
const SystemabaDictionaryaba = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-dictionaryaba/SystemabaDictionaryaba.vue')
const SystemabaDictionaryabaDetail = () => import(/* webpackChunkName: "systemaba" */ '@/modules/systemaba/views/systemaba-dictionaryaba/SystemabaDictionaryabaDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaba',
  name: 'systemaba',
  component: Systemaba,
  children: [
    {
      path: 'systemaba-useraba',
      name: 'systemaba-useraba',
      component: SystemabaUseraba,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaba-useraba-detail/:pattern/:id?',
      name: 'systemaba-useraba-detail',
      component: SystemabaUserabaDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaba-useraba',
      },
    },
{
      path: 'systemaba-roleaba',
      name: 'systemaba-roleaba',
      component: SystemabaRoleaba,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaba-roleaba-detail/:pattern/:id?',
      name: 'systemaba-roleaba-detail',
      component: SystemabaRoleabaDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaba-roleaba',
      },
    },
{
      path: 'systemaba-authaba',
      name: 'systemaba-authaba',
      component: SystemabaAuthaba,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaba-authaba-detail/:pattern/:id?',
      name: 'systemaba-authaba-detail',
      component: SystemabaAuthabaDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaba-authaba',
      },
    },
{
      path: 'systemaba-organizationaba',
      name: 'systemaba-organizationaba',
      component: SystemabaOrganizationaba,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaba-organizationaba-detail/:pattern/:id?',
      name: 'systemaba-organizationaba-detail',
      component: SystemabaOrganizationabaDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaba-organizationaba',
      },
    },
{
      path: 'systemaba-menuaba',
      name: 'systemaba-menuaba',
      component: SystemabaMenuaba,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaba-menuaba-detail/:pattern/:id?',
      name: 'systemaba-menuaba-detail',
      component: SystemabaMenuabaDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaba-menuaba',
      },
    },
{
      path: 'systemaba-dictionaryaba',
      name: 'systemaba-dictionaryaba',
      component: SystemabaDictionaryaba,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaba-dictionaryaba-detail/:pattern/:id?',
      name: 'systemaba-dictionaryaba-detail',
      component: SystemabaDictionaryabaDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaba-dictionaryaba',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
