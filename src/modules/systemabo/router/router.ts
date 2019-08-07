import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabo = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/Systemabo.vue')
const SystemaboUserabo = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-userabo/SystemaboUserabo.vue')
const SystemaboUseraboDetail = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-userabo/SystemaboUseraboDetail.vue')
const SystemaboRoleabo = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-roleabo/SystemaboRoleabo.vue')
const SystemaboRoleaboDetail = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-roleabo/SystemaboRoleaboDetail.vue')
const SystemaboAuthabo = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-authabo/SystemaboAuthabo.vue')
const SystemaboAuthaboDetail = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-authabo/SystemaboAuthaboDetail.vue')
const SystemaboOrganizationabo = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-organizationabo/SystemaboOrganizationabo.vue')
const SystemaboOrganizationaboDetail = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-organizationabo/SystemaboOrganizationaboDetail.vue')
const SystemaboMenuabo = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-menuabo/SystemaboMenuabo.vue')
const SystemaboMenuaboDetail = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-menuabo/SystemaboMenuaboDetail.vue')
const SystemaboDictionaryabo = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-dictionaryabo/SystemaboDictionaryabo.vue')
const SystemaboDictionaryaboDetail = () => import(/* webpackChunkName: "systemabo" */ '@/modules/systemabo/views/systemabo-dictionaryabo/SystemaboDictionaryaboDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabo',
  name: 'systemabo',
  component: Systemabo,
  children: [
    {
      path: 'systemabo-userabo',
      name: 'systemabo-userabo',
      component: SystemaboUserabo,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabo-userabo-detail/:pattern/:id?',
      name: 'systemabo-userabo-detail',
      component: SystemaboUseraboDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabo-userabo',
      },
    },
{
      path: 'systemabo-roleabo',
      name: 'systemabo-roleabo',
      component: SystemaboRoleabo,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabo-roleabo-detail/:pattern/:id?',
      name: 'systemabo-roleabo-detail',
      component: SystemaboRoleaboDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabo-roleabo',
      },
    },
{
      path: 'systemabo-authabo',
      name: 'systemabo-authabo',
      component: SystemaboAuthabo,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabo-authabo-detail/:pattern/:id?',
      name: 'systemabo-authabo-detail',
      component: SystemaboAuthaboDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabo-authabo',
      },
    },
{
      path: 'systemabo-organizationabo',
      name: 'systemabo-organizationabo',
      component: SystemaboOrganizationabo,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabo-organizationabo-detail/:pattern/:id?',
      name: 'systemabo-organizationabo-detail',
      component: SystemaboOrganizationaboDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabo-organizationabo',
      },
    },
{
      path: 'systemabo-menuabo',
      name: 'systemabo-menuabo',
      component: SystemaboMenuabo,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabo-menuabo-detail/:pattern/:id?',
      name: 'systemabo-menuabo-detail',
      component: SystemaboMenuaboDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabo-menuabo',
      },
    },
{
      path: 'systemabo-dictionaryabo',
      name: 'systemabo-dictionaryabo',
      component: SystemaboDictionaryabo,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabo-dictionaryabo-detail/:pattern/:id?',
      name: 'systemabo-dictionaryabo-detail',
      component: SystemaboDictionaryaboDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabo-dictionaryabo',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
