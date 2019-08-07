import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaat = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/Systemaat.vue')
const SystemaatUseraat = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-useraat/SystemaatUseraat.vue')
const SystemaatUseraatDetail = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-useraat/SystemaatUseraatDetail.vue')
const SystemaatRoleaat = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-roleaat/SystemaatRoleaat.vue')
const SystemaatRoleaatDetail = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-roleaat/SystemaatRoleaatDetail.vue')
const SystemaatAuthaat = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-authaat/SystemaatAuthaat.vue')
const SystemaatAuthaatDetail = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-authaat/SystemaatAuthaatDetail.vue')
const SystemaatOrganizationaat = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-organizationaat/SystemaatOrganizationaat.vue')
const SystemaatOrganizationaatDetail = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-organizationaat/SystemaatOrganizationaatDetail.vue')
const SystemaatMenuaat = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-menuaat/SystemaatMenuaat.vue')
const SystemaatMenuaatDetail = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-menuaat/SystemaatMenuaatDetail.vue')
const SystemaatDictionaryaat = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-dictionaryaat/SystemaatDictionaryaat.vue')
const SystemaatDictionaryaatDetail = () => import(/* webpackChunkName: "systemaat" */ '@/modules/systemaat/views/systemaat-dictionaryaat/SystemaatDictionaryaatDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaat',
  name: 'systemaat',
  component: Systemaat,
  children: [
    {
      path: 'systemaat-useraat',
      name: 'systemaat-useraat',
      component: SystemaatUseraat,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaat-useraat-detail/:pattern/:id?',
      name: 'systemaat-useraat-detail',
      component: SystemaatUseraatDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaat-useraat',
      },
    },
{
      path: 'systemaat-roleaat',
      name: 'systemaat-roleaat',
      component: SystemaatRoleaat,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaat-roleaat-detail/:pattern/:id?',
      name: 'systemaat-roleaat-detail',
      component: SystemaatRoleaatDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaat-roleaat',
      },
    },
{
      path: 'systemaat-authaat',
      name: 'systemaat-authaat',
      component: SystemaatAuthaat,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaat-authaat-detail/:pattern/:id?',
      name: 'systemaat-authaat-detail',
      component: SystemaatAuthaatDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaat-authaat',
      },
    },
{
      path: 'systemaat-organizationaat',
      name: 'systemaat-organizationaat',
      component: SystemaatOrganizationaat,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaat-organizationaat-detail/:pattern/:id?',
      name: 'systemaat-organizationaat-detail',
      component: SystemaatOrganizationaatDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaat-organizationaat',
      },
    },
{
      path: 'systemaat-menuaat',
      name: 'systemaat-menuaat',
      component: SystemaatMenuaat,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaat-menuaat-detail/:pattern/:id?',
      name: 'systemaat-menuaat-detail',
      component: SystemaatMenuaatDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaat-menuaat',
      },
    },
{
      path: 'systemaat-dictionaryaat',
      name: 'systemaat-dictionaryaat',
      component: SystemaatDictionaryaat,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaat-dictionaryaat-detail/:pattern/:id?',
      name: 'systemaat-dictionaryaat-detail',
      component: SystemaatDictionaryaatDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaat-dictionaryaat',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
