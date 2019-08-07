import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabl = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/Systemabl.vue')
const SystemablUserabl = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-userabl/SystemablUserabl.vue')
const SystemablUserablDetail = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-userabl/SystemablUserablDetail.vue')
const SystemablRoleabl = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-roleabl/SystemablRoleabl.vue')
const SystemablRoleablDetail = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-roleabl/SystemablRoleablDetail.vue')
const SystemablAuthabl = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-authabl/SystemablAuthabl.vue')
const SystemablAuthablDetail = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-authabl/SystemablAuthablDetail.vue')
const SystemablOrganizationabl = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-organizationabl/SystemablOrganizationabl.vue')
const SystemablOrganizationablDetail = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-organizationabl/SystemablOrganizationablDetail.vue')
const SystemablMenuabl = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-menuabl/SystemablMenuabl.vue')
const SystemablMenuablDetail = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-menuabl/SystemablMenuablDetail.vue')
const SystemablDictionaryabl = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-dictionaryabl/SystemablDictionaryabl.vue')
const SystemablDictionaryablDetail = () => import(/* webpackChunkName: "systemabl" */ '@/modules/systemabl/views/systemabl-dictionaryabl/SystemablDictionaryablDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabl',
  name: 'systemabl',
  component: Systemabl,
  children: [
    {
      path: 'systemabl-userabl',
      name: 'systemabl-userabl',
      component: SystemablUserabl,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabl-userabl-detail/:pattern/:id?',
      name: 'systemabl-userabl-detail',
      component: SystemablUserablDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabl-userabl',
      },
    },
{
      path: 'systemabl-roleabl',
      name: 'systemabl-roleabl',
      component: SystemablRoleabl,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabl-roleabl-detail/:pattern/:id?',
      name: 'systemabl-roleabl-detail',
      component: SystemablRoleablDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabl-roleabl',
      },
    },
{
      path: 'systemabl-authabl',
      name: 'systemabl-authabl',
      component: SystemablAuthabl,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabl-authabl-detail/:pattern/:id?',
      name: 'systemabl-authabl-detail',
      component: SystemablAuthablDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabl-authabl',
      },
    },
{
      path: 'systemabl-organizationabl',
      name: 'systemabl-organizationabl',
      component: SystemablOrganizationabl,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabl-organizationabl-detail/:pattern/:id?',
      name: 'systemabl-organizationabl-detail',
      component: SystemablOrganizationablDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabl-organizationabl',
      },
    },
{
      path: 'systemabl-menuabl',
      name: 'systemabl-menuabl',
      component: SystemablMenuabl,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabl-menuabl-detail/:pattern/:id?',
      name: 'systemabl-menuabl-detail',
      component: SystemablMenuablDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabl-menuabl',
      },
    },
{
      path: 'systemabl-dictionaryabl',
      name: 'systemabl-dictionaryabl',
      component: SystemablDictionaryabl,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabl-dictionaryabl-detail/:pattern/:id?',
      name: 'systemabl-dictionaryabl-detail',
      component: SystemablDictionaryablDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabl-dictionaryabl',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
