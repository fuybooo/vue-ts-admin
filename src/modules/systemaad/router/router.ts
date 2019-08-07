import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaad = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/Systemaad.vue')
const SystemaadUseraad = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-useraad/SystemaadUseraad.vue')
const SystemaadUseraadDetail = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-useraad/SystemaadUseraadDetail.vue')
const SystemaadRoleaad = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-roleaad/SystemaadRoleaad.vue')
const SystemaadRoleaadDetail = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-roleaad/SystemaadRoleaadDetail.vue')
const SystemaadAuthaad = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-authaad/SystemaadAuthaad.vue')
const SystemaadAuthaadDetail = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-authaad/SystemaadAuthaadDetail.vue')
const SystemaadOrganizationaad = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-organizationaad/SystemaadOrganizationaad.vue')
const SystemaadOrganizationaadDetail = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-organizationaad/SystemaadOrganizationaadDetail.vue')
const SystemaadMenuaad = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-menuaad/SystemaadMenuaad.vue')
const SystemaadMenuaadDetail = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-menuaad/SystemaadMenuaadDetail.vue')
const SystemaadDictionaryaad = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-dictionaryaad/SystemaadDictionaryaad.vue')
const SystemaadDictionaryaadDetail = () => import(/* webpackChunkName: "systemaad" */ '@/modules/systemaad/views/systemaad-dictionaryaad/SystemaadDictionaryaadDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaad',
  name: 'systemaad',
  component: Systemaad,
  children: [
    {
      path: 'systemaad-useraad',
      name: 'systemaad-useraad',
      component: SystemaadUseraad,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaad-useraad-detail/:pattern/:id?',
      name: 'systemaad-useraad-detail',
      component: SystemaadUseraadDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaad-useraad',
      },
    },
{
      path: 'systemaad-roleaad',
      name: 'systemaad-roleaad',
      component: SystemaadRoleaad,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaad-roleaad-detail/:pattern/:id?',
      name: 'systemaad-roleaad-detail',
      component: SystemaadRoleaadDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaad-roleaad',
      },
    },
{
      path: 'systemaad-authaad',
      name: 'systemaad-authaad',
      component: SystemaadAuthaad,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaad-authaad-detail/:pattern/:id?',
      name: 'systemaad-authaad-detail',
      component: SystemaadAuthaadDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaad-authaad',
      },
    },
{
      path: 'systemaad-organizationaad',
      name: 'systemaad-organizationaad',
      component: SystemaadOrganizationaad,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaad-organizationaad-detail/:pattern/:id?',
      name: 'systemaad-organizationaad-detail',
      component: SystemaadOrganizationaadDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaad-organizationaad',
      },
    },
{
      path: 'systemaad-menuaad',
      name: 'systemaad-menuaad',
      component: SystemaadMenuaad,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaad-menuaad-detail/:pattern/:id?',
      name: 'systemaad-menuaad-detail',
      component: SystemaadMenuaadDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaad-menuaad',
      },
    },
{
      path: 'systemaad-dictionaryaad',
      name: 'systemaad-dictionaryaad',
      component: SystemaadDictionaryaad,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaad-dictionaryaad-detail/:pattern/:id?',
      name: 'systemaad-dictionaryaad-detail',
      component: SystemaadDictionaryaadDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaad-dictionaryaad',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
