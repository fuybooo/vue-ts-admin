import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaau = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/Systemaau.vue')
const SystemaauUseraau = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-useraau/SystemaauUseraau.vue')
const SystemaauUseraauDetail = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-useraau/SystemaauUseraauDetail.vue')
const SystemaauRoleaau = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-roleaau/SystemaauRoleaau.vue')
const SystemaauRoleaauDetail = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-roleaau/SystemaauRoleaauDetail.vue')
const SystemaauAuthaau = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-authaau/SystemaauAuthaau.vue')
const SystemaauAuthaauDetail = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-authaau/SystemaauAuthaauDetail.vue')
const SystemaauOrganizationaau = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-organizationaau/SystemaauOrganizationaau.vue')
const SystemaauOrganizationaauDetail = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-organizationaau/SystemaauOrganizationaauDetail.vue')
const SystemaauMenuaau = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-menuaau/SystemaauMenuaau.vue')
const SystemaauMenuaauDetail = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-menuaau/SystemaauMenuaauDetail.vue')
const SystemaauDictionaryaau = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-dictionaryaau/SystemaauDictionaryaau.vue')
const SystemaauDictionaryaauDetail = () => import(/* webpackChunkName: "systemaau" */ '@/modules/systemaau/views/systemaau-dictionaryaau/SystemaauDictionaryaauDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaau',
  name: 'systemaau',
  component: Systemaau,
  children: [
    {
      path: 'systemaau-useraau',
      name: 'systemaau-useraau',
      component: SystemaauUseraau,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaau-useraau-detail/:pattern/:id?',
      name: 'systemaau-useraau-detail',
      component: SystemaauUseraauDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaau-useraau',
      },
    },
{
      path: 'systemaau-roleaau',
      name: 'systemaau-roleaau',
      component: SystemaauRoleaau,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaau-roleaau-detail/:pattern/:id?',
      name: 'systemaau-roleaau-detail',
      component: SystemaauRoleaauDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaau-roleaau',
      },
    },
{
      path: 'systemaau-authaau',
      name: 'systemaau-authaau',
      component: SystemaauAuthaau,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaau-authaau-detail/:pattern/:id?',
      name: 'systemaau-authaau-detail',
      component: SystemaauAuthaauDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaau-authaau',
      },
    },
{
      path: 'systemaau-organizationaau',
      name: 'systemaau-organizationaau',
      component: SystemaauOrganizationaau,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaau-organizationaau-detail/:pattern/:id?',
      name: 'systemaau-organizationaau-detail',
      component: SystemaauOrganizationaauDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaau-organizationaau',
      },
    },
{
      path: 'systemaau-menuaau',
      name: 'systemaau-menuaau',
      component: SystemaauMenuaau,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaau-menuaau-detail/:pattern/:id?',
      name: 'systemaau-menuaau-detail',
      component: SystemaauMenuaauDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaau-menuaau',
      },
    },
{
      path: 'systemaau-dictionaryaau',
      name: 'systemaau-dictionaryaau',
      component: SystemaauDictionaryaau,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaau-dictionaryaau-detail/:pattern/:id?',
      name: 'systemaau-dictionaryaau-detail',
      component: SystemaauDictionaryaauDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaau-dictionaryaau',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
