import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaan = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/Systemaan.vue')
const SystemaanUseraan = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-useraan/SystemaanUseraan.vue')
const SystemaanUseraanDetail = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-useraan/SystemaanUseraanDetail.vue')
const SystemaanRoleaan = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-roleaan/SystemaanRoleaan.vue')
const SystemaanRoleaanDetail = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-roleaan/SystemaanRoleaanDetail.vue')
const SystemaanAuthaan = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-authaan/SystemaanAuthaan.vue')
const SystemaanAuthaanDetail = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-authaan/SystemaanAuthaanDetail.vue')
const SystemaanOrganizationaan = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-organizationaan/SystemaanOrganizationaan.vue')
const SystemaanOrganizationaanDetail = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-organizationaan/SystemaanOrganizationaanDetail.vue')
const SystemaanMenuaan = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-menuaan/SystemaanMenuaan.vue')
const SystemaanMenuaanDetail = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-menuaan/SystemaanMenuaanDetail.vue')
const SystemaanDictionaryaan = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-dictionaryaan/SystemaanDictionaryaan.vue')
const SystemaanDictionaryaanDetail = () => import(/* webpackChunkName: "systemaan" */ '@/modules/systemaan/views/systemaan-dictionaryaan/SystemaanDictionaryaanDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaan',
  name: 'systemaan',
  component: Systemaan,
  children: [
    {
      path: 'systemaan-useraan',
      name: 'systemaan-useraan',
      component: SystemaanUseraan,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaan-useraan-detail/:pattern/:id?',
      name: 'systemaan-useraan-detail',
      component: SystemaanUseraanDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaan-useraan',
      },
    },
{
      path: 'systemaan-roleaan',
      name: 'systemaan-roleaan',
      component: SystemaanRoleaan,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaan-roleaan-detail/:pattern/:id?',
      name: 'systemaan-roleaan-detail',
      component: SystemaanRoleaanDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaan-roleaan',
      },
    },
{
      path: 'systemaan-authaan',
      name: 'systemaan-authaan',
      component: SystemaanAuthaan,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaan-authaan-detail/:pattern/:id?',
      name: 'systemaan-authaan-detail',
      component: SystemaanAuthaanDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaan-authaan',
      },
    },
{
      path: 'systemaan-organizationaan',
      name: 'systemaan-organizationaan',
      component: SystemaanOrganizationaan,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaan-organizationaan-detail/:pattern/:id?',
      name: 'systemaan-organizationaan-detail',
      component: SystemaanOrganizationaanDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaan-organizationaan',
      },
    },
{
      path: 'systemaan-menuaan',
      name: 'systemaan-menuaan',
      component: SystemaanMenuaan,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaan-menuaan-detail/:pattern/:id?',
      name: 'systemaan-menuaan-detail',
      component: SystemaanMenuaanDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaan-menuaan',
      },
    },
{
      path: 'systemaan-dictionaryaan',
      name: 'systemaan-dictionaryaan',
      component: SystemaanDictionaryaan,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaan-dictionaryaan-detail/:pattern/:id?',
      name: 'systemaan-dictionaryaan-detail',
      component: SystemaanDictionaryaanDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaan-dictionaryaan',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
