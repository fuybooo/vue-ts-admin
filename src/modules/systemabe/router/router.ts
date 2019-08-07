import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabe = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/Systemabe.vue')
const SystemabeUserabe = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-userabe/SystemabeUserabe.vue')
const SystemabeUserabeDetail = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-userabe/SystemabeUserabeDetail.vue')
const SystemabeRoleabe = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-roleabe/SystemabeRoleabe.vue')
const SystemabeRoleabeDetail = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-roleabe/SystemabeRoleabeDetail.vue')
const SystemabeAuthabe = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-authabe/SystemabeAuthabe.vue')
const SystemabeAuthabeDetail = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-authabe/SystemabeAuthabeDetail.vue')
const SystemabeOrganizationabe = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-organizationabe/SystemabeOrganizationabe.vue')
const SystemabeOrganizationabeDetail = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-organizationabe/SystemabeOrganizationabeDetail.vue')
const SystemabeMenuabe = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-menuabe/SystemabeMenuabe.vue')
const SystemabeMenuabeDetail = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-menuabe/SystemabeMenuabeDetail.vue')
const SystemabeDictionaryabe = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-dictionaryabe/SystemabeDictionaryabe.vue')
const SystemabeDictionaryabeDetail = () => import(/* webpackChunkName: "systemabe" */ '@/modules/systemabe/views/systemabe-dictionaryabe/SystemabeDictionaryabeDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabe',
  name: 'systemabe',
  component: Systemabe,
  children: [
    {
      path: 'systemabe-userabe',
      name: 'systemabe-userabe',
      component: SystemabeUserabe,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabe-userabe-detail/:pattern/:id?',
      name: 'systemabe-userabe-detail',
      component: SystemabeUserabeDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabe-userabe',
      },
    },
{
      path: 'systemabe-roleabe',
      name: 'systemabe-roleabe',
      component: SystemabeRoleabe,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabe-roleabe-detail/:pattern/:id?',
      name: 'systemabe-roleabe-detail',
      component: SystemabeRoleabeDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabe-roleabe',
      },
    },
{
      path: 'systemabe-authabe',
      name: 'systemabe-authabe',
      component: SystemabeAuthabe,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabe-authabe-detail/:pattern/:id?',
      name: 'systemabe-authabe-detail',
      component: SystemabeAuthabeDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabe-authabe',
      },
    },
{
      path: 'systemabe-organizationabe',
      name: 'systemabe-organizationabe',
      component: SystemabeOrganizationabe,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabe-organizationabe-detail/:pattern/:id?',
      name: 'systemabe-organizationabe-detail',
      component: SystemabeOrganizationabeDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabe-organizationabe',
      },
    },
{
      path: 'systemabe-menuabe',
      name: 'systemabe-menuabe',
      component: SystemabeMenuabe,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabe-menuabe-detail/:pattern/:id?',
      name: 'systemabe-menuabe-detail',
      component: SystemabeMenuabeDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabe-menuabe',
      },
    },
{
      path: 'systemabe-dictionaryabe',
      name: 'systemabe-dictionaryabe',
      component: SystemabeDictionaryabe,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabe-dictionaryabe-detail/:pattern/:id?',
      name: 'systemabe-dictionaryabe-detail',
      component: SystemabeDictionaryabeDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabe-dictionaryabe',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
