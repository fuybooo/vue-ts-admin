import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaac = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/Systemaac.vue')
const SystemaacUseraac = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-useraac/SystemaacUseraac.vue')
const SystemaacUseraacDetail = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-useraac/SystemaacUseraacDetail.vue')
const SystemaacRoleaac = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-roleaac/SystemaacRoleaac.vue')
const SystemaacRoleaacDetail = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-roleaac/SystemaacRoleaacDetail.vue')
const SystemaacAuthaac = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-authaac/SystemaacAuthaac.vue')
const SystemaacAuthaacDetail = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-authaac/SystemaacAuthaacDetail.vue')
const SystemaacOrganizationaac = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-organizationaac/SystemaacOrganizationaac.vue')
const SystemaacOrganizationaacDetail = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-organizationaac/SystemaacOrganizationaacDetail.vue')
const SystemaacMenuaac = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-menuaac/SystemaacMenuaac.vue')
const SystemaacMenuaacDetail = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-menuaac/SystemaacMenuaacDetail.vue')
const SystemaacDictionaryaac = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-dictionaryaac/SystemaacDictionaryaac.vue')
const SystemaacDictionaryaacDetail = () => import(/* webpackChunkName: "systemaac" */ '@/modules/systemaac/views/systemaac-dictionaryaac/SystemaacDictionaryaacDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaac',
  name: 'systemaac',
  component: Systemaac,
  children: [
    {
      path: 'systemaac-useraac',
      name: 'systemaac-useraac',
      component: SystemaacUseraac,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaac-useraac-detail/:pattern/:id?',
      name: 'systemaac-useraac-detail',
      component: SystemaacUseraacDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaac-useraac',
      },
    },
{
      path: 'systemaac-roleaac',
      name: 'systemaac-roleaac',
      component: SystemaacRoleaac,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaac-roleaac-detail/:pattern/:id?',
      name: 'systemaac-roleaac-detail',
      component: SystemaacRoleaacDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaac-roleaac',
      },
    },
{
      path: 'systemaac-authaac',
      name: 'systemaac-authaac',
      component: SystemaacAuthaac,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaac-authaac-detail/:pattern/:id?',
      name: 'systemaac-authaac-detail',
      component: SystemaacAuthaacDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaac-authaac',
      },
    },
{
      path: 'systemaac-organizationaac',
      name: 'systemaac-organizationaac',
      component: SystemaacOrganizationaac,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaac-organizationaac-detail/:pattern/:id?',
      name: 'systemaac-organizationaac-detail',
      component: SystemaacOrganizationaacDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaac-organizationaac',
      },
    },
{
      path: 'systemaac-menuaac',
      name: 'systemaac-menuaac',
      component: SystemaacMenuaac,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaac-menuaac-detail/:pattern/:id?',
      name: 'systemaac-menuaac-detail',
      component: SystemaacMenuaacDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaac-menuaac',
      },
    },
{
      path: 'systemaac-dictionaryaac',
      name: 'systemaac-dictionaryaac',
      component: SystemaacDictionaryaac,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaac-dictionaryaac-detail/:pattern/:id?',
      name: 'systemaac-dictionaryaac-detail',
      component: SystemaacDictionaryaacDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaac-dictionaryaac',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
