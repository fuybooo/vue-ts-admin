import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaag = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/Systemaag.vue')
const SystemaagUseraag = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-useraag/SystemaagUseraag.vue')
const SystemaagUseraagDetail = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-useraag/SystemaagUseraagDetail.vue')
const SystemaagRoleaag = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-roleaag/SystemaagRoleaag.vue')
const SystemaagRoleaagDetail = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-roleaag/SystemaagRoleaagDetail.vue')
const SystemaagAuthaag = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-authaag/SystemaagAuthaag.vue')
const SystemaagAuthaagDetail = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-authaag/SystemaagAuthaagDetail.vue')
const SystemaagOrganizationaag = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-organizationaag/SystemaagOrganizationaag.vue')
const SystemaagOrganizationaagDetail = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-organizationaag/SystemaagOrganizationaagDetail.vue')
const SystemaagMenuaag = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-menuaag/SystemaagMenuaag.vue')
const SystemaagMenuaagDetail = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-menuaag/SystemaagMenuaagDetail.vue')
const SystemaagDictionaryaag = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-dictionaryaag/SystemaagDictionaryaag.vue')
const SystemaagDictionaryaagDetail = () => import(/* webpackChunkName: "systemaag" */ '@/modules/systemaag/views/systemaag-dictionaryaag/SystemaagDictionaryaagDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaag',
  name: 'systemaag',
  component: Systemaag,
  children: [
    {
      path: 'systemaag-useraag',
      name: 'systemaag-useraag',
      component: SystemaagUseraag,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaag-useraag-detail/:pattern/:id?',
      name: 'systemaag-useraag-detail',
      component: SystemaagUseraagDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaag-useraag',
      },
    },
{
      path: 'systemaag-roleaag',
      name: 'systemaag-roleaag',
      component: SystemaagRoleaag,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaag-roleaag-detail/:pattern/:id?',
      name: 'systemaag-roleaag-detail',
      component: SystemaagRoleaagDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaag-roleaag',
      },
    },
{
      path: 'systemaag-authaag',
      name: 'systemaag-authaag',
      component: SystemaagAuthaag,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaag-authaag-detail/:pattern/:id?',
      name: 'systemaag-authaag-detail',
      component: SystemaagAuthaagDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaag-authaag',
      },
    },
{
      path: 'systemaag-organizationaag',
      name: 'systemaag-organizationaag',
      component: SystemaagOrganizationaag,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaag-organizationaag-detail/:pattern/:id?',
      name: 'systemaag-organizationaag-detail',
      component: SystemaagOrganizationaagDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaag-organizationaag',
      },
    },
{
      path: 'systemaag-menuaag',
      name: 'systemaag-menuaag',
      component: SystemaagMenuaag,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaag-menuaag-detail/:pattern/:id?',
      name: 'systemaag-menuaag-detail',
      component: SystemaagMenuaagDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaag-menuaag',
      },
    },
{
      path: 'systemaag-dictionaryaag',
      name: 'systemaag-dictionaryaag',
      component: SystemaagDictionaryaag,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaag-dictionaryaag-detail/:pattern/:id?',
      name: 'systemaag-dictionaryaag-detail',
      component: SystemaagDictionaryaagDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaag-dictionaryaag',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
