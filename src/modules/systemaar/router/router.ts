import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaar = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/Systemaar.vue')
const SystemaarUseraar = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-useraar/SystemaarUseraar.vue')
const SystemaarUseraarDetail = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-useraar/SystemaarUseraarDetail.vue')
const SystemaarRoleaar = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-roleaar/SystemaarRoleaar.vue')
const SystemaarRoleaarDetail = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-roleaar/SystemaarRoleaarDetail.vue')
const SystemaarAuthaar = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-authaar/SystemaarAuthaar.vue')
const SystemaarAuthaarDetail = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-authaar/SystemaarAuthaarDetail.vue')
const SystemaarOrganizationaar = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-organizationaar/SystemaarOrganizationaar.vue')
const SystemaarOrganizationaarDetail = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-organizationaar/SystemaarOrganizationaarDetail.vue')
const SystemaarMenuaar = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-menuaar/SystemaarMenuaar.vue')
const SystemaarMenuaarDetail = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-menuaar/SystemaarMenuaarDetail.vue')
const SystemaarDictionaryaar = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-dictionaryaar/SystemaarDictionaryaar.vue')
const SystemaarDictionaryaarDetail = () => import(/* webpackChunkName: "systemaar" */ '@/modules/systemaar/views/systemaar-dictionaryaar/SystemaarDictionaryaarDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaar',
  name: 'systemaar',
  component: Systemaar,
  children: [
    {
      path: 'systemaar-useraar',
      name: 'systemaar-useraar',
      component: SystemaarUseraar,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaar-useraar-detail/:pattern/:id?',
      name: 'systemaar-useraar-detail',
      component: SystemaarUseraarDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaar-useraar',
      },
    },
{
      path: 'systemaar-roleaar',
      name: 'systemaar-roleaar',
      component: SystemaarRoleaar,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaar-roleaar-detail/:pattern/:id?',
      name: 'systemaar-roleaar-detail',
      component: SystemaarRoleaarDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaar-roleaar',
      },
    },
{
      path: 'systemaar-authaar',
      name: 'systemaar-authaar',
      component: SystemaarAuthaar,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaar-authaar-detail/:pattern/:id?',
      name: 'systemaar-authaar-detail',
      component: SystemaarAuthaarDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaar-authaar',
      },
    },
{
      path: 'systemaar-organizationaar',
      name: 'systemaar-organizationaar',
      component: SystemaarOrganizationaar,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaar-organizationaar-detail/:pattern/:id?',
      name: 'systemaar-organizationaar-detail',
      component: SystemaarOrganizationaarDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaar-organizationaar',
      },
    },
{
      path: 'systemaar-menuaar',
      name: 'systemaar-menuaar',
      component: SystemaarMenuaar,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaar-menuaar-detail/:pattern/:id?',
      name: 'systemaar-menuaar-detail',
      component: SystemaarMenuaarDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaar-menuaar',
      },
    },
{
      path: 'systemaar-dictionaryaar',
      name: 'systemaar-dictionaryaar',
      component: SystemaarDictionaryaar,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaar-dictionaryaar-detail/:pattern/:id?',
      name: 'systemaar-dictionaryaar-detail',
      component: SystemaarDictionaryaarDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaar-dictionaryaar',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
