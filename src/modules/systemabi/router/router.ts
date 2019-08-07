import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabi = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/Systemabi.vue')
const SystemabiUserabi = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-userabi/SystemabiUserabi.vue')
const SystemabiUserabiDetail = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-userabi/SystemabiUserabiDetail.vue')
const SystemabiRoleabi = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-roleabi/SystemabiRoleabi.vue')
const SystemabiRoleabiDetail = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-roleabi/SystemabiRoleabiDetail.vue')
const SystemabiAuthabi = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-authabi/SystemabiAuthabi.vue')
const SystemabiAuthabiDetail = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-authabi/SystemabiAuthabiDetail.vue')
const SystemabiOrganizationabi = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-organizationabi/SystemabiOrganizationabi.vue')
const SystemabiOrganizationabiDetail = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-organizationabi/SystemabiOrganizationabiDetail.vue')
const SystemabiMenuabi = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-menuabi/SystemabiMenuabi.vue')
const SystemabiMenuabiDetail = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-menuabi/SystemabiMenuabiDetail.vue')
const SystemabiDictionaryabi = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-dictionaryabi/SystemabiDictionaryabi.vue')
const SystemabiDictionaryabiDetail = () => import(/* webpackChunkName: "systemabi" */ '@/modules/systemabi/views/systemabi-dictionaryabi/SystemabiDictionaryabiDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabi',
  name: 'systemabi',
  component: Systemabi,
  children: [
    {
      path: 'systemabi-userabi',
      name: 'systemabi-userabi',
      component: SystemabiUserabi,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabi-userabi-detail/:pattern/:id?',
      name: 'systemabi-userabi-detail',
      component: SystemabiUserabiDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabi-userabi',
      },
    },
{
      path: 'systemabi-roleabi',
      name: 'systemabi-roleabi',
      component: SystemabiRoleabi,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabi-roleabi-detail/:pattern/:id?',
      name: 'systemabi-roleabi-detail',
      component: SystemabiRoleabiDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabi-roleabi',
      },
    },
{
      path: 'systemabi-authabi',
      name: 'systemabi-authabi',
      component: SystemabiAuthabi,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabi-authabi-detail/:pattern/:id?',
      name: 'systemabi-authabi-detail',
      component: SystemabiAuthabiDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabi-authabi',
      },
    },
{
      path: 'systemabi-organizationabi',
      name: 'systemabi-organizationabi',
      component: SystemabiOrganizationabi,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabi-organizationabi-detail/:pattern/:id?',
      name: 'systemabi-organizationabi-detail',
      component: SystemabiOrganizationabiDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabi-organizationabi',
      },
    },
{
      path: 'systemabi-menuabi',
      name: 'systemabi-menuabi',
      component: SystemabiMenuabi,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabi-menuabi-detail/:pattern/:id?',
      name: 'systemabi-menuabi-detail',
      component: SystemabiMenuabiDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabi-menuabi',
      },
    },
{
      path: 'systemabi-dictionaryabi',
      name: 'systemabi-dictionaryabi',
      component: SystemabiDictionaryabi,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabi-dictionaryabi-detail/:pattern/:id?',
      name: 'systemabi-dictionaryabi-detail',
      component: SystemabiDictionaryabiDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabi-dictionaryabi',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
