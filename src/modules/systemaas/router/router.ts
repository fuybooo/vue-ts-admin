import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaas = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/Systemaas.vue')
const SystemaasUseraas = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-useraas/SystemaasUseraas.vue')
const SystemaasUseraasDetail = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-useraas/SystemaasUseraasDetail.vue')
const SystemaasRoleaas = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-roleaas/SystemaasRoleaas.vue')
const SystemaasRoleaasDetail = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-roleaas/SystemaasRoleaasDetail.vue')
const SystemaasAuthaas = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-authaas/SystemaasAuthaas.vue')
const SystemaasAuthaasDetail = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-authaas/SystemaasAuthaasDetail.vue')
const SystemaasOrganizationaas = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-organizationaas/SystemaasOrganizationaas.vue')
const SystemaasOrganizationaasDetail = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-organizationaas/SystemaasOrganizationaasDetail.vue')
const SystemaasMenuaas = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-menuaas/SystemaasMenuaas.vue')
const SystemaasMenuaasDetail = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-menuaas/SystemaasMenuaasDetail.vue')
const SystemaasDictionaryaas = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-dictionaryaas/SystemaasDictionaryaas.vue')
const SystemaasDictionaryaasDetail = () => import(/* webpackChunkName: "systemaas" */ '@/modules/systemaas/views/systemaas-dictionaryaas/SystemaasDictionaryaasDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaas',
  name: 'systemaas',
  component: Systemaas,
  children: [
    {
      path: 'systemaas-useraas',
      name: 'systemaas-useraas',
      component: SystemaasUseraas,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaas-useraas-detail/:pattern/:id?',
      name: 'systemaas-useraas-detail',
      component: SystemaasUseraasDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaas-useraas',
      },
    },
{
      path: 'systemaas-roleaas',
      name: 'systemaas-roleaas',
      component: SystemaasRoleaas,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaas-roleaas-detail/:pattern/:id?',
      name: 'systemaas-roleaas-detail',
      component: SystemaasRoleaasDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaas-roleaas',
      },
    },
{
      path: 'systemaas-authaas',
      name: 'systemaas-authaas',
      component: SystemaasAuthaas,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaas-authaas-detail/:pattern/:id?',
      name: 'systemaas-authaas-detail',
      component: SystemaasAuthaasDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaas-authaas',
      },
    },
{
      path: 'systemaas-organizationaas',
      name: 'systemaas-organizationaas',
      component: SystemaasOrganizationaas,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaas-organizationaas-detail/:pattern/:id?',
      name: 'systemaas-organizationaas-detail',
      component: SystemaasOrganizationaasDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaas-organizationaas',
      },
    },
{
      path: 'systemaas-menuaas',
      name: 'systemaas-menuaas',
      component: SystemaasMenuaas,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaas-menuaas-detail/:pattern/:id?',
      name: 'systemaas-menuaas-detail',
      component: SystemaasMenuaasDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaas-menuaas',
      },
    },
{
      path: 'systemaas-dictionaryaas',
      name: 'systemaas-dictionaryaas',
      component: SystemaasDictionaryaas,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaas-dictionaryaas-detail/:pattern/:id?',
      name: 'systemaas-dictionaryaas-detail',
      component: SystemaasDictionaryaasDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaas-dictionaryaas',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
