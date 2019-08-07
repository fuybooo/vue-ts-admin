import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaap = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/Systemaap.vue')
const SystemaapUseraap = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-useraap/SystemaapUseraap.vue')
const SystemaapUseraapDetail = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-useraap/SystemaapUseraapDetail.vue')
const SystemaapRoleaap = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-roleaap/SystemaapRoleaap.vue')
const SystemaapRoleaapDetail = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-roleaap/SystemaapRoleaapDetail.vue')
const SystemaapAuthaap = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-authaap/SystemaapAuthaap.vue')
const SystemaapAuthaapDetail = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-authaap/SystemaapAuthaapDetail.vue')
const SystemaapOrganizationaap = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-organizationaap/SystemaapOrganizationaap.vue')
const SystemaapOrganizationaapDetail = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-organizationaap/SystemaapOrganizationaapDetail.vue')
const SystemaapMenuaap = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-menuaap/SystemaapMenuaap.vue')
const SystemaapMenuaapDetail = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-menuaap/SystemaapMenuaapDetail.vue')
const SystemaapDictionaryaap = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-dictionaryaap/SystemaapDictionaryaap.vue')
const SystemaapDictionaryaapDetail = () => import(/* webpackChunkName: "systemaap" */ '@/modules/systemaap/views/systemaap-dictionaryaap/SystemaapDictionaryaapDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaap',
  name: 'systemaap',
  component: Systemaap,
  children: [
    {
      path: 'systemaap-useraap',
      name: 'systemaap-useraap',
      component: SystemaapUseraap,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaap-useraap-detail/:pattern/:id?',
      name: 'systemaap-useraap-detail',
      component: SystemaapUseraapDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaap-useraap',
      },
    },
{
      path: 'systemaap-roleaap',
      name: 'systemaap-roleaap',
      component: SystemaapRoleaap,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaap-roleaap-detail/:pattern/:id?',
      name: 'systemaap-roleaap-detail',
      component: SystemaapRoleaapDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaap-roleaap',
      },
    },
{
      path: 'systemaap-authaap',
      name: 'systemaap-authaap',
      component: SystemaapAuthaap,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaap-authaap-detail/:pattern/:id?',
      name: 'systemaap-authaap-detail',
      component: SystemaapAuthaapDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaap-authaap',
      },
    },
{
      path: 'systemaap-organizationaap',
      name: 'systemaap-organizationaap',
      component: SystemaapOrganizationaap,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaap-organizationaap-detail/:pattern/:id?',
      name: 'systemaap-organizationaap-detail',
      component: SystemaapOrganizationaapDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaap-organizationaap',
      },
    },
{
      path: 'systemaap-menuaap',
      name: 'systemaap-menuaap',
      component: SystemaapMenuaap,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaap-menuaap-detail/:pattern/:id?',
      name: 'systemaap-menuaap-detail',
      component: SystemaapMenuaapDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaap-menuaap',
      },
    },
{
      path: 'systemaap-dictionaryaap',
      name: 'systemaap-dictionaryaap',
      component: SystemaapDictionaryaap,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaap-dictionaryaap-detail/:pattern/:id?',
      name: 'systemaap-dictionaryaap-detail',
      component: SystemaapDictionaryaapDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaap-dictionaryaap',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
