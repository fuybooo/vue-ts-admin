import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaal = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/Systemaal.vue')
const SystemaalUseraal = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-useraal/SystemaalUseraal.vue')
const SystemaalUseraalDetail = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-useraal/SystemaalUseraalDetail.vue')
const SystemaalRoleaal = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-roleaal/SystemaalRoleaal.vue')
const SystemaalRoleaalDetail = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-roleaal/SystemaalRoleaalDetail.vue')
const SystemaalAuthaal = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-authaal/SystemaalAuthaal.vue')
const SystemaalAuthaalDetail = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-authaal/SystemaalAuthaalDetail.vue')
const SystemaalOrganizationaal = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-organizationaal/SystemaalOrganizationaal.vue')
const SystemaalOrganizationaalDetail = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-organizationaal/SystemaalOrganizationaalDetail.vue')
const SystemaalMenuaal = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-menuaal/SystemaalMenuaal.vue')
const SystemaalMenuaalDetail = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-menuaal/SystemaalMenuaalDetail.vue')
const SystemaalDictionaryaal = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-dictionaryaal/SystemaalDictionaryaal.vue')
const SystemaalDictionaryaalDetail = () => import(/* webpackChunkName: "systemaal" */ '@/modules/systemaal/views/systemaal-dictionaryaal/SystemaalDictionaryaalDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaal',
  name: 'systemaal',
  component: Systemaal,
  children: [
    {
      path: 'systemaal-useraal',
      name: 'systemaal-useraal',
      component: SystemaalUseraal,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaal-useraal-detail/:pattern/:id?',
      name: 'systemaal-useraal-detail',
      component: SystemaalUseraalDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaal-useraal',
      },
    },
{
      path: 'systemaal-roleaal',
      name: 'systemaal-roleaal',
      component: SystemaalRoleaal,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaal-roleaal-detail/:pattern/:id?',
      name: 'systemaal-roleaal-detail',
      component: SystemaalRoleaalDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaal-roleaal',
      },
    },
{
      path: 'systemaal-authaal',
      name: 'systemaal-authaal',
      component: SystemaalAuthaal,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaal-authaal-detail/:pattern/:id?',
      name: 'systemaal-authaal-detail',
      component: SystemaalAuthaalDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaal-authaal',
      },
    },
{
      path: 'systemaal-organizationaal',
      name: 'systemaal-organizationaal',
      component: SystemaalOrganizationaal,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaal-organizationaal-detail/:pattern/:id?',
      name: 'systemaal-organizationaal-detail',
      component: SystemaalOrganizationaalDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaal-organizationaal',
      },
    },
{
      path: 'systemaal-menuaal',
      name: 'systemaal-menuaal',
      component: SystemaalMenuaal,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaal-menuaal-detail/:pattern/:id?',
      name: 'systemaal-menuaal-detail',
      component: SystemaalMenuaalDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaal-menuaal',
      },
    },
{
      path: 'systemaal-dictionaryaal',
      name: 'systemaal-dictionaryaal',
      component: SystemaalDictionaryaal,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaal-dictionaryaal-detail/:pattern/:id?',
      name: 'systemaal-dictionaryaal-detail',
      component: SystemaalDictionaryaalDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaal-dictionaryaal',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
