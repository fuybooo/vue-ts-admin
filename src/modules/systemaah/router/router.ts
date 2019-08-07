import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaah = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/Systemaah.vue')
const SystemaahUseraah = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-useraah/SystemaahUseraah.vue')
const SystemaahUseraahDetail = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-useraah/SystemaahUseraahDetail.vue')
const SystemaahRoleaah = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-roleaah/SystemaahRoleaah.vue')
const SystemaahRoleaahDetail = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-roleaah/SystemaahRoleaahDetail.vue')
const SystemaahAuthaah = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-authaah/SystemaahAuthaah.vue')
const SystemaahAuthaahDetail = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-authaah/SystemaahAuthaahDetail.vue')
const SystemaahOrganizationaah = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-organizationaah/SystemaahOrganizationaah.vue')
const SystemaahOrganizationaahDetail = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-organizationaah/SystemaahOrganizationaahDetail.vue')
const SystemaahMenuaah = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-menuaah/SystemaahMenuaah.vue')
const SystemaahMenuaahDetail = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-menuaah/SystemaahMenuaahDetail.vue')
const SystemaahDictionaryaah = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-dictionaryaah/SystemaahDictionaryaah.vue')
const SystemaahDictionaryaahDetail = () => import(/* webpackChunkName: "systemaah" */ '@/modules/systemaah/views/systemaah-dictionaryaah/SystemaahDictionaryaahDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaah',
  name: 'systemaah',
  component: Systemaah,
  children: [
    {
      path: 'systemaah-useraah',
      name: 'systemaah-useraah',
      component: SystemaahUseraah,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaah-useraah-detail/:pattern/:id?',
      name: 'systemaah-useraah-detail',
      component: SystemaahUseraahDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaah-useraah',
      },
    },
{
      path: 'systemaah-roleaah',
      name: 'systemaah-roleaah',
      component: SystemaahRoleaah,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaah-roleaah-detail/:pattern/:id?',
      name: 'systemaah-roleaah-detail',
      component: SystemaahRoleaahDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaah-roleaah',
      },
    },
{
      path: 'systemaah-authaah',
      name: 'systemaah-authaah',
      component: SystemaahAuthaah,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaah-authaah-detail/:pattern/:id?',
      name: 'systemaah-authaah-detail',
      component: SystemaahAuthaahDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaah-authaah',
      },
    },
{
      path: 'systemaah-organizationaah',
      name: 'systemaah-organizationaah',
      component: SystemaahOrganizationaah,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaah-organizationaah-detail/:pattern/:id?',
      name: 'systemaah-organizationaah-detail',
      component: SystemaahOrganizationaahDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaah-organizationaah',
      },
    },
{
      path: 'systemaah-menuaah',
      name: 'systemaah-menuaah',
      component: SystemaahMenuaah,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaah-menuaah-detail/:pattern/:id?',
      name: 'systemaah-menuaah-detail',
      component: SystemaahMenuaahDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaah-menuaah',
      },
    },
{
      path: 'systemaah-dictionaryaah',
      name: 'systemaah-dictionaryaah',
      component: SystemaahDictionaryaah,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaah-dictionaryaah-detail/:pattern/:id?',
      name: 'systemaah-dictionaryaah-detail',
      component: SystemaahDictionaryaahDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaah-dictionaryaah',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
