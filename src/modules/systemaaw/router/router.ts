import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaaw = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/Systemaaw.vue')
const SystemaawUseraaw = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-useraaw/SystemaawUseraaw.vue')
const SystemaawUseraawDetail = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-useraaw/SystemaawUseraawDetail.vue')
const SystemaawRoleaaw = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-roleaaw/SystemaawRoleaaw.vue')
const SystemaawRoleaawDetail = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-roleaaw/SystemaawRoleaawDetail.vue')
const SystemaawAuthaaw = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-authaaw/SystemaawAuthaaw.vue')
const SystemaawAuthaawDetail = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-authaaw/SystemaawAuthaawDetail.vue')
const SystemaawOrganizationaaw = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-organizationaaw/SystemaawOrganizationaaw.vue')
const SystemaawOrganizationaawDetail = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-organizationaaw/SystemaawOrganizationaawDetail.vue')
const SystemaawMenuaaw = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-menuaaw/SystemaawMenuaaw.vue')
const SystemaawMenuaawDetail = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-menuaaw/SystemaawMenuaawDetail.vue')
const SystemaawDictionaryaaw = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-dictionaryaaw/SystemaawDictionaryaaw.vue')
const SystemaawDictionaryaawDetail = () => import(/* webpackChunkName: "systemaaw" */ '@/modules/systemaaw/views/systemaaw-dictionaryaaw/SystemaawDictionaryaawDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaaw',
  name: 'systemaaw',
  component: Systemaaw,
  children: [
    {
      path: 'systemaaw-useraaw',
      name: 'systemaaw-useraaw',
      component: SystemaawUseraaw,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaaw-useraaw-detail/:pattern/:id?',
      name: 'systemaaw-useraaw-detail',
      component: SystemaawUseraawDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaaw-useraaw',
      },
    },
{
      path: 'systemaaw-roleaaw',
      name: 'systemaaw-roleaaw',
      component: SystemaawRoleaaw,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaaw-roleaaw-detail/:pattern/:id?',
      name: 'systemaaw-roleaaw-detail',
      component: SystemaawRoleaawDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaaw-roleaaw',
      },
    },
{
      path: 'systemaaw-authaaw',
      name: 'systemaaw-authaaw',
      component: SystemaawAuthaaw,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaaw-authaaw-detail/:pattern/:id?',
      name: 'systemaaw-authaaw-detail',
      component: SystemaawAuthaawDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaaw-authaaw',
      },
    },
{
      path: 'systemaaw-organizationaaw',
      name: 'systemaaw-organizationaaw',
      component: SystemaawOrganizationaaw,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaaw-organizationaaw-detail/:pattern/:id?',
      name: 'systemaaw-organizationaaw-detail',
      component: SystemaawOrganizationaawDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaaw-organizationaaw',
      },
    },
{
      path: 'systemaaw-menuaaw',
      name: 'systemaaw-menuaaw',
      component: SystemaawMenuaaw,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaaw-menuaaw-detail/:pattern/:id?',
      name: 'systemaaw-menuaaw-detail',
      component: SystemaawMenuaawDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaaw-menuaaw',
      },
    },
{
      path: 'systemaaw-dictionaryaaw',
      name: 'systemaaw-dictionaryaaw',
      component: SystemaawDictionaryaaw,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaaw-dictionaryaaw-detail/:pattern/:id?',
      name: 'systemaaw-dictionaryaaw-detail',
      component: SystemaawDictionaryaawDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaaw-dictionaryaaw',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
