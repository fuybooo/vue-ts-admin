import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabn = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/Systemabn.vue')
const SystemabnUserabn = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-userabn/SystemabnUserabn.vue')
const SystemabnUserabnDetail = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-userabn/SystemabnUserabnDetail.vue')
const SystemabnRoleabn = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-roleabn/SystemabnRoleabn.vue')
const SystemabnRoleabnDetail = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-roleabn/SystemabnRoleabnDetail.vue')
const SystemabnAuthabn = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-authabn/SystemabnAuthabn.vue')
const SystemabnAuthabnDetail = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-authabn/SystemabnAuthabnDetail.vue')
const SystemabnOrganizationabn = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-organizationabn/SystemabnOrganizationabn.vue')
const SystemabnOrganizationabnDetail = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-organizationabn/SystemabnOrganizationabnDetail.vue')
const SystemabnMenuabn = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-menuabn/SystemabnMenuabn.vue')
const SystemabnMenuabnDetail = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-menuabn/SystemabnMenuabnDetail.vue')
const SystemabnDictionaryabn = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-dictionaryabn/SystemabnDictionaryabn.vue')
const SystemabnDictionaryabnDetail = () => import(/* webpackChunkName: "systemabn" */ '@/modules/systemabn/views/systemabn-dictionaryabn/SystemabnDictionaryabnDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabn',
  name: 'systemabn',
  component: Systemabn,
  children: [
    {
      path: 'systemabn-userabn',
      name: 'systemabn-userabn',
      component: SystemabnUserabn,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabn-userabn-detail/:pattern/:id?',
      name: 'systemabn-userabn-detail',
      component: SystemabnUserabnDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabn-userabn',
      },
    },
{
      path: 'systemabn-roleabn',
      name: 'systemabn-roleabn',
      component: SystemabnRoleabn,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabn-roleabn-detail/:pattern/:id?',
      name: 'systemabn-roleabn-detail',
      component: SystemabnRoleabnDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabn-roleabn',
      },
    },
{
      path: 'systemabn-authabn',
      name: 'systemabn-authabn',
      component: SystemabnAuthabn,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabn-authabn-detail/:pattern/:id?',
      name: 'systemabn-authabn-detail',
      component: SystemabnAuthabnDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabn-authabn',
      },
    },
{
      path: 'systemabn-organizationabn',
      name: 'systemabn-organizationabn',
      component: SystemabnOrganizationabn,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabn-organizationabn-detail/:pattern/:id?',
      name: 'systemabn-organizationabn-detail',
      component: SystemabnOrganizationabnDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabn-organizationabn',
      },
    },
{
      path: 'systemabn-menuabn',
      name: 'systemabn-menuabn',
      component: SystemabnMenuabn,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabn-menuabn-detail/:pattern/:id?',
      name: 'systemabn-menuabn-detail',
      component: SystemabnMenuabnDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabn-menuabn',
      },
    },
{
      path: 'systemabn-dictionaryabn',
      name: 'systemabn-dictionaryabn',
      component: SystemabnDictionaryabn,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabn-dictionaryabn-detail/:pattern/:id?',
      name: 'systemabn-dictionaryabn-detail',
      component: SystemabnDictionaryabnDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabn-dictionaryabn',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
