import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabr = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/Systemabr.vue')
const SystemabrUserabr = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-userabr/SystemabrUserabr.vue')
const SystemabrUserabrDetail = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-userabr/SystemabrUserabrDetail.vue')
const SystemabrRoleabr = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-roleabr/SystemabrRoleabr.vue')
const SystemabrRoleabrDetail = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-roleabr/SystemabrRoleabrDetail.vue')
const SystemabrAuthabr = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-authabr/SystemabrAuthabr.vue')
const SystemabrAuthabrDetail = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-authabr/SystemabrAuthabrDetail.vue')
const SystemabrOrganizationabr = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-organizationabr/SystemabrOrganizationabr.vue')
const SystemabrOrganizationabrDetail = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-organizationabr/SystemabrOrganizationabrDetail.vue')
const SystemabrMenuabr = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-menuabr/SystemabrMenuabr.vue')
const SystemabrMenuabrDetail = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-menuabr/SystemabrMenuabrDetail.vue')
const SystemabrDictionaryabr = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-dictionaryabr/SystemabrDictionaryabr.vue')
const SystemabrDictionaryabrDetail = () => import(/* webpackChunkName: "systemabr" */ '@/modules/systemabr/views/systemabr-dictionaryabr/SystemabrDictionaryabrDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabr',
  name: 'systemabr',
  component: Systemabr,
  children: [
    {
      path: 'systemabr-userabr',
      name: 'systemabr-userabr',
      component: SystemabrUserabr,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabr-userabr-detail/:pattern/:id?',
      name: 'systemabr-userabr-detail',
      component: SystemabrUserabrDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabr-userabr',
      },
    },
{
      path: 'systemabr-roleabr',
      name: 'systemabr-roleabr',
      component: SystemabrRoleabr,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabr-roleabr-detail/:pattern/:id?',
      name: 'systemabr-roleabr-detail',
      component: SystemabrRoleabrDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabr-roleabr',
      },
    },
{
      path: 'systemabr-authabr',
      name: 'systemabr-authabr',
      component: SystemabrAuthabr,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabr-authabr-detail/:pattern/:id?',
      name: 'systemabr-authabr-detail',
      component: SystemabrAuthabrDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabr-authabr',
      },
    },
{
      path: 'systemabr-organizationabr',
      name: 'systemabr-organizationabr',
      component: SystemabrOrganizationabr,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabr-organizationabr-detail/:pattern/:id?',
      name: 'systemabr-organizationabr-detail',
      component: SystemabrOrganizationabrDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabr-organizationabr',
      },
    },
{
      path: 'systemabr-menuabr',
      name: 'systemabr-menuabr',
      component: SystemabrMenuabr,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabr-menuabr-detail/:pattern/:id?',
      name: 'systemabr-menuabr-detail',
      component: SystemabrMenuabrDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabr-menuabr',
      },
    },
{
      path: 'systemabr-dictionaryabr',
      name: 'systemabr-dictionaryabr',
      component: SystemabrDictionaryabr,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabr-dictionaryabr-detail/:pattern/:id?',
      name: 'systemabr-dictionaryabr-detail',
      component: SystemabrDictionaryabrDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabr-dictionaryabr',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
