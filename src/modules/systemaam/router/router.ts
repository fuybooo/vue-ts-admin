import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaam = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/Systemaam.vue')
const SystemaamUseraam = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-useraam/SystemaamUseraam.vue')
const SystemaamUseraamDetail = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-useraam/SystemaamUseraamDetail.vue')
const SystemaamRoleaam = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-roleaam/SystemaamRoleaam.vue')
const SystemaamRoleaamDetail = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-roleaam/SystemaamRoleaamDetail.vue')
const SystemaamAuthaam = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-authaam/SystemaamAuthaam.vue')
const SystemaamAuthaamDetail = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-authaam/SystemaamAuthaamDetail.vue')
const SystemaamOrganizationaam = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-organizationaam/SystemaamOrganizationaam.vue')
const SystemaamOrganizationaamDetail = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-organizationaam/SystemaamOrganizationaamDetail.vue')
const SystemaamMenuaam = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-menuaam/SystemaamMenuaam.vue')
const SystemaamMenuaamDetail = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-menuaam/SystemaamMenuaamDetail.vue')
const SystemaamDictionaryaam = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-dictionaryaam/SystemaamDictionaryaam.vue')
const SystemaamDictionaryaamDetail = () => import(/* webpackChunkName: "systemaam" */ '@/modules/systemaam/views/systemaam-dictionaryaam/SystemaamDictionaryaamDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaam',
  name: 'systemaam',
  component: Systemaam,
  children: [
    {
      path: 'systemaam-useraam',
      name: 'systemaam-useraam',
      component: SystemaamUseraam,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaam-useraam-detail/:pattern/:id?',
      name: 'systemaam-useraam-detail',
      component: SystemaamUseraamDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaam-useraam',
      },
    },
{
      path: 'systemaam-roleaam',
      name: 'systemaam-roleaam',
      component: SystemaamRoleaam,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaam-roleaam-detail/:pattern/:id?',
      name: 'systemaam-roleaam-detail',
      component: SystemaamRoleaamDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaam-roleaam',
      },
    },
{
      path: 'systemaam-authaam',
      name: 'systemaam-authaam',
      component: SystemaamAuthaam,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaam-authaam-detail/:pattern/:id?',
      name: 'systemaam-authaam-detail',
      component: SystemaamAuthaamDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaam-authaam',
      },
    },
{
      path: 'systemaam-organizationaam',
      name: 'systemaam-organizationaam',
      component: SystemaamOrganizationaam,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaam-organizationaam-detail/:pattern/:id?',
      name: 'systemaam-organizationaam-detail',
      component: SystemaamOrganizationaamDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaam-organizationaam',
      },
    },
{
      path: 'systemaam-menuaam',
      name: 'systemaam-menuaam',
      component: SystemaamMenuaam,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaam-menuaam-detail/:pattern/:id?',
      name: 'systemaam-menuaam-detail',
      component: SystemaamMenuaamDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaam-menuaam',
      },
    },
{
      path: 'systemaam-dictionaryaam',
      name: 'systemaam-dictionaryaam',
      component: SystemaamDictionaryaam,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaam-dictionaryaam-detail/:pattern/:id?',
      name: 'systemaam-dictionaryaam-detail',
      component: SystemaamDictionaryaamDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaam-dictionaryaam',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
