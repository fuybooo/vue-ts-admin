import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabf = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/Systemabf.vue')
const SystemabfUserabf = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-userabf/SystemabfUserabf.vue')
const SystemabfUserabfDetail = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-userabf/SystemabfUserabfDetail.vue')
const SystemabfRoleabf = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-roleabf/SystemabfRoleabf.vue')
const SystemabfRoleabfDetail = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-roleabf/SystemabfRoleabfDetail.vue')
const SystemabfAuthabf = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-authabf/SystemabfAuthabf.vue')
const SystemabfAuthabfDetail = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-authabf/SystemabfAuthabfDetail.vue')
const SystemabfOrganizationabf = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-organizationabf/SystemabfOrganizationabf.vue')
const SystemabfOrganizationabfDetail = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-organizationabf/SystemabfOrganizationabfDetail.vue')
const SystemabfMenuabf = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-menuabf/SystemabfMenuabf.vue')
const SystemabfMenuabfDetail = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-menuabf/SystemabfMenuabfDetail.vue')
const SystemabfDictionaryabf = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-dictionaryabf/SystemabfDictionaryabf.vue')
const SystemabfDictionaryabfDetail = () => import(/* webpackChunkName: "systemabf" */ '@/modules/systemabf/views/systemabf-dictionaryabf/SystemabfDictionaryabfDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabf',
  name: 'systemabf',
  component: Systemabf,
  children: [
    {
      path: 'systemabf-userabf',
      name: 'systemabf-userabf',
      component: SystemabfUserabf,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabf-userabf-detail/:pattern/:id?',
      name: 'systemabf-userabf-detail',
      component: SystemabfUserabfDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabf-userabf',
      },
    },
{
      path: 'systemabf-roleabf',
      name: 'systemabf-roleabf',
      component: SystemabfRoleabf,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabf-roleabf-detail/:pattern/:id?',
      name: 'systemabf-roleabf-detail',
      component: SystemabfRoleabfDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabf-roleabf',
      },
    },
{
      path: 'systemabf-authabf',
      name: 'systemabf-authabf',
      component: SystemabfAuthabf,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabf-authabf-detail/:pattern/:id?',
      name: 'systemabf-authabf-detail',
      component: SystemabfAuthabfDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabf-authabf',
      },
    },
{
      path: 'systemabf-organizationabf',
      name: 'systemabf-organizationabf',
      component: SystemabfOrganizationabf,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabf-organizationabf-detail/:pattern/:id?',
      name: 'systemabf-organizationabf-detail',
      component: SystemabfOrganizationabfDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabf-organizationabf',
      },
    },
{
      path: 'systemabf-menuabf',
      name: 'systemabf-menuabf',
      component: SystemabfMenuabf,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabf-menuabf-detail/:pattern/:id?',
      name: 'systemabf-menuabf-detail',
      component: SystemabfMenuabfDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabf-menuabf',
      },
    },
{
      path: 'systemabf-dictionaryabf',
      name: 'systemabf-dictionaryabf',
      component: SystemabfDictionaryabf,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabf-dictionaryabf-detail/:pattern/:id?',
      name: 'systemabf-dictionaryabf-detail',
      component: SystemabfDictionaryabfDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabf-dictionaryabf',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
