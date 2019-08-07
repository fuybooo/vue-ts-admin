import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaak = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/Systemaak.vue')
const SystemaakUseraak = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-useraak/SystemaakUseraak.vue')
const SystemaakUseraakDetail = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-useraak/SystemaakUseraakDetail.vue')
const SystemaakRoleaak = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-roleaak/SystemaakRoleaak.vue')
const SystemaakRoleaakDetail = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-roleaak/SystemaakRoleaakDetail.vue')
const SystemaakAuthaak = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-authaak/SystemaakAuthaak.vue')
const SystemaakAuthaakDetail = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-authaak/SystemaakAuthaakDetail.vue')
const SystemaakOrganizationaak = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-organizationaak/SystemaakOrganizationaak.vue')
const SystemaakOrganizationaakDetail = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-organizationaak/SystemaakOrganizationaakDetail.vue')
const SystemaakMenuaak = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-menuaak/SystemaakMenuaak.vue')
const SystemaakMenuaakDetail = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-menuaak/SystemaakMenuaakDetail.vue')
const SystemaakDictionaryaak = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-dictionaryaak/SystemaakDictionaryaak.vue')
const SystemaakDictionaryaakDetail = () => import(/* webpackChunkName: "systemaak" */ '@/modules/systemaak/views/systemaak-dictionaryaak/SystemaakDictionaryaakDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaak',
  name: 'systemaak',
  component: Systemaak,
  children: [
    {
      path: 'systemaak-useraak',
      name: 'systemaak-useraak',
      component: SystemaakUseraak,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaak-useraak-detail/:pattern/:id?',
      name: 'systemaak-useraak-detail',
      component: SystemaakUseraakDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaak-useraak',
      },
    },
{
      path: 'systemaak-roleaak',
      name: 'systemaak-roleaak',
      component: SystemaakRoleaak,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaak-roleaak-detail/:pattern/:id?',
      name: 'systemaak-roleaak-detail',
      component: SystemaakRoleaakDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaak-roleaak',
      },
    },
{
      path: 'systemaak-authaak',
      name: 'systemaak-authaak',
      component: SystemaakAuthaak,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaak-authaak-detail/:pattern/:id?',
      name: 'systemaak-authaak-detail',
      component: SystemaakAuthaakDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaak-authaak',
      },
    },
{
      path: 'systemaak-organizationaak',
      name: 'systemaak-organizationaak',
      component: SystemaakOrganizationaak,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaak-organizationaak-detail/:pattern/:id?',
      name: 'systemaak-organizationaak-detail',
      component: SystemaakOrganizationaakDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaak-organizationaak',
      },
    },
{
      path: 'systemaak-menuaak',
      name: 'systemaak-menuaak',
      component: SystemaakMenuaak,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaak-menuaak-detail/:pattern/:id?',
      name: 'systemaak-menuaak-detail',
      component: SystemaakMenuaakDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaak-menuaak',
      },
    },
{
      path: 'systemaak-dictionaryaak',
      name: 'systemaak-dictionaryaak',
      component: SystemaakDictionaryaak,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaak-dictionaryaak-detail/:pattern/:id?',
      name: 'systemaak-dictionaryaak-detail',
      component: SystemaakDictionaryaakDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaak-dictionaryaak',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
