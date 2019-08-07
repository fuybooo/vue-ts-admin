import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaaj = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/Systemaaj.vue')
const SystemaajUseraaj = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-useraaj/SystemaajUseraaj.vue')
const SystemaajUseraajDetail = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-useraaj/SystemaajUseraajDetail.vue')
const SystemaajRoleaaj = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-roleaaj/SystemaajRoleaaj.vue')
const SystemaajRoleaajDetail = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-roleaaj/SystemaajRoleaajDetail.vue')
const SystemaajAuthaaj = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-authaaj/SystemaajAuthaaj.vue')
const SystemaajAuthaajDetail = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-authaaj/SystemaajAuthaajDetail.vue')
const SystemaajOrganizationaaj = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-organizationaaj/SystemaajOrganizationaaj.vue')
const SystemaajOrganizationaajDetail = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-organizationaaj/SystemaajOrganizationaajDetail.vue')
const SystemaajMenuaaj = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-menuaaj/SystemaajMenuaaj.vue')
const SystemaajMenuaajDetail = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-menuaaj/SystemaajMenuaajDetail.vue')
const SystemaajDictionaryaaj = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-dictionaryaaj/SystemaajDictionaryaaj.vue')
const SystemaajDictionaryaajDetail = () => import(/* webpackChunkName: "systemaaj" */ '@/modules/systemaaj/views/systemaaj-dictionaryaaj/SystemaajDictionaryaajDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaaj',
  name: 'systemaaj',
  component: Systemaaj,
  children: [
    {
      path: 'systemaaj-useraaj',
      name: 'systemaaj-useraaj',
      component: SystemaajUseraaj,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaaj-useraaj-detail/:pattern/:id?',
      name: 'systemaaj-useraaj-detail',
      component: SystemaajUseraajDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaaj-useraaj',
      },
    },
{
      path: 'systemaaj-roleaaj',
      name: 'systemaaj-roleaaj',
      component: SystemaajRoleaaj,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaaj-roleaaj-detail/:pattern/:id?',
      name: 'systemaaj-roleaaj-detail',
      component: SystemaajRoleaajDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaaj-roleaaj',
      },
    },
{
      path: 'systemaaj-authaaj',
      name: 'systemaaj-authaaj',
      component: SystemaajAuthaaj,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaaj-authaaj-detail/:pattern/:id?',
      name: 'systemaaj-authaaj-detail',
      component: SystemaajAuthaajDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaaj-authaaj',
      },
    },
{
      path: 'systemaaj-organizationaaj',
      name: 'systemaaj-organizationaaj',
      component: SystemaajOrganizationaaj,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaaj-organizationaaj-detail/:pattern/:id?',
      name: 'systemaaj-organizationaaj-detail',
      component: SystemaajOrganizationaajDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaaj-organizationaaj',
      },
    },
{
      path: 'systemaaj-menuaaj',
      name: 'systemaaj-menuaaj',
      component: SystemaajMenuaaj,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaaj-menuaaj-detail/:pattern/:id?',
      name: 'systemaaj-menuaaj-detail',
      component: SystemaajMenuaajDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaaj-menuaaj',
      },
    },
{
      path: 'systemaaj-dictionaryaaj',
      name: 'systemaaj-dictionaryaaj',
      component: SystemaajDictionaryaaj,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaaj-dictionaryaaj-detail/:pattern/:id?',
      name: 'systemaaj-dictionaryaaj-detail',
      component: SystemaajDictionaryaajDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaaj-dictionaryaaj',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
