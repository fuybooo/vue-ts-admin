import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabt = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/Systemabt.vue')
const SystemabtUserabt = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-userabt/SystemabtUserabt.vue')
const SystemabtUserabtDetail = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-userabt/SystemabtUserabtDetail.vue')
const SystemabtRoleabt = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-roleabt/SystemabtRoleabt.vue')
const SystemabtRoleabtDetail = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-roleabt/SystemabtRoleabtDetail.vue')
const SystemabtAuthabt = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-authabt/SystemabtAuthabt.vue')
const SystemabtAuthabtDetail = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-authabt/SystemabtAuthabtDetail.vue')
const SystemabtOrganizationabt = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-organizationabt/SystemabtOrganizationabt.vue')
const SystemabtOrganizationabtDetail = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-organizationabt/SystemabtOrganizationabtDetail.vue')
const SystemabtMenuabt = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-menuabt/SystemabtMenuabt.vue')
const SystemabtMenuabtDetail = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-menuabt/SystemabtMenuabtDetail.vue')
const SystemabtDictionaryabt = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-dictionaryabt/SystemabtDictionaryabt.vue')
const SystemabtDictionaryabtDetail = () => import(/* webpackChunkName: "systemabt" */ '@/modules/systemabt/views/systemabt-dictionaryabt/SystemabtDictionaryabtDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabt',
  name: 'systemabt',
  component: Systemabt,
  children: [
    {
      path: 'systemabt-userabt',
      name: 'systemabt-userabt',
      component: SystemabtUserabt,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabt-userabt-detail/:pattern/:id?',
      name: 'systemabt-userabt-detail',
      component: SystemabtUserabtDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabt-userabt',
      },
    },
{
      path: 'systemabt-roleabt',
      name: 'systemabt-roleabt',
      component: SystemabtRoleabt,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabt-roleabt-detail/:pattern/:id?',
      name: 'systemabt-roleabt-detail',
      component: SystemabtRoleabtDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabt-roleabt',
      },
    },
{
      path: 'systemabt-authabt',
      name: 'systemabt-authabt',
      component: SystemabtAuthabt,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabt-authabt-detail/:pattern/:id?',
      name: 'systemabt-authabt-detail',
      component: SystemabtAuthabtDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabt-authabt',
      },
    },
{
      path: 'systemabt-organizationabt',
      name: 'systemabt-organizationabt',
      component: SystemabtOrganizationabt,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabt-organizationabt-detail/:pattern/:id?',
      name: 'systemabt-organizationabt-detail',
      component: SystemabtOrganizationabtDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabt-organizationabt',
      },
    },
{
      path: 'systemabt-menuabt',
      name: 'systemabt-menuabt',
      component: SystemabtMenuabt,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabt-menuabt-detail/:pattern/:id?',
      name: 'systemabt-menuabt-detail',
      component: SystemabtMenuabtDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabt-menuabt',
      },
    },
{
      path: 'systemabt-dictionaryabt',
      name: 'systemabt-dictionaryabt',
      component: SystemabtDictionaryabt,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabt-dictionaryabt-detail/:pattern/:id?',
      name: 'systemabt-dictionaryabt-detail',
      component: SystemabtDictionaryabtDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabt-dictionaryabt',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
