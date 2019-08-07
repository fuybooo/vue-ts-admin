import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaax = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/Systemaax.vue')
const SystemaaxUseraax = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-useraax/SystemaaxUseraax.vue')
const SystemaaxUseraaxDetail = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-useraax/SystemaaxUseraaxDetail.vue')
const SystemaaxRoleaax = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-roleaax/SystemaaxRoleaax.vue')
const SystemaaxRoleaaxDetail = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-roleaax/SystemaaxRoleaaxDetail.vue')
const SystemaaxAuthaax = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-authaax/SystemaaxAuthaax.vue')
const SystemaaxAuthaaxDetail = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-authaax/SystemaaxAuthaaxDetail.vue')
const SystemaaxOrganizationaax = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-organizationaax/SystemaaxOrganizationaax.vue')
const SystemaaxOrganizationaaxDetail = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-organizationaax/SystemaaxOrganizationaaxDetail.vue')
const SystemaaxMenuaax = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-menuaax/SystemaaxMenuaax.vue')
const SystemaaxMenuaaxDetail = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-menuaax/SystemaaxMenuaaxDetail.vue')
const SystemaaxDictionaryaax = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-dictionaryaax/SystemaaxDictionaryaax.vue')
const SystemaaxDictionaryaaxDetail = () => import(/* webpackChunkName: "systemaax" */ '@/modules/systemaax/views/systemaax-dictionaryaax/SystemaaxDictionaryaaxDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaax',
  name: 'systemaax',
  component: Systemaax,
  children: [
    {
      path: 'systemaax-useraax',
      name: 'systemaax-useraax',
      component: SystemaaxUseraax,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaax-useraax-detail/:pattern/:id?',
      name: 'systemaax-useraax-detail',
      component: SystemaaxUseraaxDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaax-useraax',
      },
    },
{
      path: 'systemaax-roleaax',
      name: 'systemaax-roleaax',
      component: SystemaaxRoleaax,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaax-roleaax-detail/:pattern/:id?',
      name: 'systemaax-roleaax-detail',
      component: SystemaaxRoleaaxDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaax-roleaax',
      },
    },
{
      path: 'systemaax-authaax',
      name: 'systemaax-authaax',
      component: SystemaaxAuthaax,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaax-authaax-detail/:pattern/:id?',
      name: 'systemaax-authaax-detail',
      component: SystemaaxAuthaaxDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaax-authaax',
      },
    },
{
      path: 'systemaax-organizationaax',
      name: 'systemaax-organizationaax',
      component: SystemaaxOrganizationaax,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaax-organizationaax-detail/:pattern/:id?',
      name: 'systemaax-organizationaax-detail',
      component: SystemaaxOrganizationaaxDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaax-organizationaax',
      },
    },
{
      path: 'systemaax-menuaax',
      name: 'systemaax-menuaax',
      component: SystemaaxMenuaax,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaax-menuaax-detail/:pattern/:id?',
      name: 'systemaax-menuaax-detail',
      component: SystemaaxMenuaaxDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaax-menuaax',
      },
    },
{
      path: 'systemaax-dictionaryaax',
      name: 'systemaax-dictionaryaax',
      component: SystemaaxDictionaryaax,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaax-dictionaryaax-detail/:pattern/:id?',
      name: 'systemaax-dictionaryaax-detail',
      component: SystemaaxDictionaryaaxDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaax-dictionaryaax',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
