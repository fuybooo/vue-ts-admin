import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaay = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/Systemaay.vue')
const SystemaayUseraay = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-useraay/SystemaayUseraay.vue')
const SystemaayUseraayDetail = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-useraay/SystemaayUseraayDetail.vue')
const SystemaayRoleaay = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-roleaay/SystemaayRoleaay.vue')
const SystemaayRoleaayDetail = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-roleaay/SystemaayRoleaayDetail.vue')
const SystemaayAuthaay = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-authaay/SystemaayAuthaay.vue')
const SystemaayAuthaayDetail = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-authaay/SystemaayAuthaayDetail.vue')
const SystemaayOrganizationaay = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-organizationaay/SystemaayOrganizationaay.vue')
const SystemaayOrganizationaayDetail = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-organizationaay/SystemaayOrganizationaayDetail.vue')
const SystemaayMenuaay = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-menuaay/SystemaayMenuaay.vue')
const SystemaayMenuaayDetail = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-menuaay/SystemaayMenuaayDetail.vue')
const SystemaayDictionaryaay = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-dictionaryaay/SystemaayDictionaryaay.vue')
const SystemaayDictionaryaayDetail = () => import(/* webpackChunkName: "systemaay" */ '@/modules/systemaay/views/systemaay-dictionaryaay/SystemaayDictionaryaayDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaay',
  name: 'systemaay',
  component: Systemaay,
  children: [
    {
      path: 'systemaay-useraay',
      name: 'systemaay-useraay',
      component: SystemaayUseraay,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaay-useraay-detail/:pattern/:id?',
      name: 'systemaay-useraay-detail',
      component: SystemaayUseraayDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaay-useraay',
      },
    },
{
      path: 'systemaay-roleaay',
      name: 'systemaay-roleaay',
      component: SystemaayRoleaay,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaay-roleaay-detail/:pattern/:id?',
      name: 'systemaay-roleaay-detail',
      component: SystemaayRoleaayDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaay-roleaay',
      },
    },
{
      path: 'systemaay-authaay',
      name: 'systemaay-authaay',
      component: SystemaayAuthaay,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaay-authaay-detail/:pattern/:id?',
      name: 'systemaay-authaay-detail',
      component: SystemaayAuthaayDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaay-authaay',
      },
    },
{
      path: 'systemaay-organizationaay',
      name: 'systemaay-organizationaay',
      component: SystemaayOrganizationaay,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaay-organizationaay-detail/:pattern/:id?',
      name: 'systemaay-organizationaay-detail',
      component: SystemaayOrganizationaayDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaay-organizationaay',
      },
    },
{
      path: 'systemaay-menuaay',
      name: 'systemaay-menuaay',
      component: SystemaayMenuaay,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaay-menuaay-detail/:pattern/:id?',
      name: 'systemaay-menuaay-detail',
      component: SystemaayMenuaayDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaay-menuaay',
      },
    },
{
      path: 'systemaay-dictionaryaay',
      name: 'systemaay-dictionaryaay',
      component: SystemaayDictionaryaay,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaay-dictionaryaay-detail/:pattern/:id?',
      name: 'systemaay-dictionaryaay-detail',
      component: SystemaayDictionaryaayDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaay-dictionaryaay',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
