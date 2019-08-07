import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaaz = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/Systemaaz.vue')
const SystemaazUseraaz = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-useraaz/SystemaazUseraaz.vue')
const SystemaazUseraazDetail = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-useraaz/SystemaazUseraazDetail.vue')
const SystemaazRoleaaz = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-roleaaz/SystemaazRoleaaz.vue')
const SystemaazRoleaazDetail = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-roleaaz/SystemaazRoleaazDetail.vue')
const SystemaazAuthaaz = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-authaaz/SystemaazAuthaaz.vue')
const SystemaazAuthaazDetail = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-authaaz/SystemaazAuthaazDetail.vue')
const SystemaazOrganizationaaz = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-organizationaaz/SystemaazOrganizationaaz.vue')
const SystemaazOrganizationaazDetail = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-organizationaaz/SystemaazOrganizationaazDetail.vue')
const SystemaazMenuaaz = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-menuaaz/SystemaazMenuaaz.vue')
const SystemaazMenuaazDetail = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-menuaaz/SystemaazMenuaazDetail.vue')
const SystemaazDictionaryaaz = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-dictionaryaaz/SystemaazDictionaryaaz.vue')
const SystemaazDictionaryaazDetail = () => import(/* webpackChunkName: "systemaaz" */ '@/modules/systemaaz/views/systemaaz-dictionaryaaz/SystemaazDictionaryaazDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaaz',
  name: 'systemaaz',
  component: Systemaaz,
  children: [
    {
      path: 'systemaaz-useraaz',
      name: 'systemaaz-useraaz',
      component: SystemaazUseraaz,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaaz-useraaz-detail/:pattern/:id?',
      name: 'systemaaz-useraaz-detail',
      component: SystemaazUseraazDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaaz-useraaz',
      },
    },
{
      path: 'systemaaz-roleaaz',
      name: 'systemaaz-roleaaz',
      component: SystemaazRoleaaz,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaaz-roleaaz-detail/:pattern/:id?',
      name: 'systemaaz-roleaaz-detail',
      component: SystemaazRoleaazDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaaz-roleaaz',
      },
    },
{
      path: 'systemaaz-authaaz',
      name: 'systemaaz-authaaz',
      component: SystemaazAuthaaz,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaaz-authaaz-detail/:pattern/:id?',
      name: 'systemaaz-authaaz-detail',
      component: SystemaazAuthaazDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaaz-authaaz',
      },
    },
{
      path: 'systemaaz-organizationaaz',
      name: 'systemaaz-organizationaaz',
      component: SystemaazOrganizationaaz,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaaz-organizationaaz-detail/:pattern/:id?',
      name: 'systemaaz-organizationaaz-detail',
      component: SystemaazOrganizationaazDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaaz-organizationaaz',
      },
    },
{
      path: 'systemaaz-menuaaz',
      name: 'systemaaz-menuaaz',
      component: SystemaazMenuaaz,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaaz-menuaaz-detail/:pattern/:id?',
      name: 'systemaaz-menuaaz-detail',
      component: SystemaazMenuaazDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaaz-menuaaz',
      },
    },
{
      path: 'systemaaz-dictionaryaaz',
      name: 'systemaaz-dictionaryaaz',
      component: SystemaazDictionaryaaz,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaaz-dictionaryaaz-detail/:pattern/:id?',
      name: 'systemaaz-dictionaryaaz-detail',
      component: SystemaazDictionaryaazDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaaz-dictionaryaaz',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
