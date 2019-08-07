import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabq = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/Systemabq.vue')
const SystemabqUserabq = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-userabq/SystemabqUserabq.vue')
const SystemabqUserabqDetail = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-userabq/SystemabqUserabqDetail.vue')
const SystemabqRoleabq = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-roleabq/SystemabqRoleabq.vue')
const SystemabqRoleabqDetail = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-roleabq/SystemabqRoleabqDetail.vue')
const SystemabqAuthabq = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-authabq/SystemabqAuthabq.vue')
const SystemabqAuthabqDetail = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-authabq/SystemabqAuthabqDetail.vue')
const SystemabqOrganizationabq = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-organizationabq/SystemabqOrganizationabq.vue')
const SystemabqOrganizationabqDetail = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-organizationabq/SystemabqOrganizationabqDetail.vue')
const SystemabqMenuabq = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-menuabq/SystemabqMenuabq.vue')
const SystemabqMenuabqDetail = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-menuabq/SystemabqMenuabqDetail.vue')
const SystemabqDictionaryabq = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-dictionaryabq/SystemabqDictionaryabq.vue')
const SystemabqDictionaryabqDetail = () => import(/* webpackChunkName: "systemabq" */ '@/modules/systemabq/views/systemabq-dictionaryabq/SystemabqDictionaryabqDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabq',
  name: 'systemabq',
  component: Systemabq,
  children: [
    {
      path: 'systemabq-userabq',
      name: 'systemabq-userabq',
      component: SystemabqUserabq,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabq-userabq-detail/:pattern/:id?',
      name: 'systemabq-userabq-detail',
      component: SystemabqUserabqDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabq-userabq',
      },
    },
{
      path: 'systemabq-roleabq',
      name: 'systemabq-roleabq',
      component: SystemabqRoleabq,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabq-roleabq-detail/:pattern/:id?',
      name: 'systemabq-roleabq-detail',
      component: SystemabqRoleabqDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabq-roleabq',
      },
    },
{
      path: 'systemabq-authabq',
      name: 'systemabq-authabq',
      component: SystemabqAuthabq,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabq-authabq-detail/:pattern/:id?',
      name: 'systemabq-authabq-detail',
      component: SystemabqAuthabqDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabq-authabq',
      },
    },
{
      path: 'systemabq-organizationabq',
      name: 'systemabq-organizationabq',
      component: SystemabqOrganizationabq,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabq-organizationabq-detail/:pattern/:id?',
      name: 'systemabq-organizationabq-detail',
      component: SystemabqOrganizationabqDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabq-organizationabq',
      },
    },
{
      path: 'systemabq-menuabq',
      name: 'systemabq-menuabq',
      component: SystemabqMenuabq,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabq-menuabq-detail/:pattern/:id?',
      name: 'systemabq-menuabq-detail',
      component: SystemabqMenuabqDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabq-menuabq',
      },
    },
{
      path: 'systemabq-dictionaryabq',
      name: 'systemabq-dictionaryabq',
      component: SystemabqDictionaryabq,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabq-dictionaryabq-detail/:pattern/:id?',
      name: 'systemabq-dictionaryabq-detail',
      component: SystemabqDictionaryabqDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabq-dictionaryabq',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
