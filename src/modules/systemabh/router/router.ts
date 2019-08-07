import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabh = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/Systemabh.vue')
const SystemabhUserabh = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-userabh/SystemabhUserabh.vue')
const SystemabhUserabhDetail = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-userabh/SystemabhUserabhDetail.vue')
const SystemabhRoleabh = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-roleabh/SystemabhRoleabh.vue')
const SystemabhRoleabhDetail = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-roleabh/SystemabhRoleabhDetail.vue')
const SystemabhAuthabh = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-authabh/SystemabhAuthabh.vue')
const SystemabhAuthabhDetail = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-authabh/SystemabhAuthabhDetail.vue')
const SystemabhOrganizationabh = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-organizationabh/SystemabhOrganizationabh.vue')
const SystemabhOrganizationabhDetail = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-organizationabh/SystemabhOrganizationabhDetail.vue')
const SystemabhMenuabh = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-menuabh/SystemabhMenuabh.vue')
const SystemabhMenuabhDetail = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-menuabh/SystemabhMenuabhDetail.vue')
const SystemabhDictionaryabh = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-dictionaryabh/SystemabhDictionaryabh.vue')
const SystemabhDictionaryabhDetail = () => import(/* webpackChunkName: "systemabh" */ '@/modules/systemabh/views/systemabh-dictionaryabh/SystemabhDictionaryabhDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabh',
  name: 'systemabh',
  component: Systemabh,
  children: [
    {
      path: 'systemabh-userabh',
      name: 'systemabh-userabh',
      component: SystemabhUserabh,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabh-userabh-detail/:pattern/:id?',
      name: 'systemabh-userabh-detail',
      component: SystemabhUserabhDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabh-userabh',
      },
    },
{
      path: 'systemabh-roleabh',
      name: 'systemabh-roleabh',
      component: SystemabhRoleabh,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabh-roleabh-detail/:pattern/:id?',
      name: 'systemabh-roleabh-detail',
      component: SystemabhRoleabhDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabh-roleabh',
      },
    },
{
      path: 'systemabh-authabh',
      name: 'systemabh-authabh',
      component: SystemabhAuthabh,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabh-authabh-detail/:pattern/:id?',
      name: 'systemabh-authabh-detail',
      component: SystemabhAuthabhDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabh-authabh',
      },
    },
{
      path: 'systemabh-organizationabh',
      name: 'systemabh-organizationabh',
      component: SystemabhOrganizationabh,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabh-organizationabh-detail/:pattern/:id?',
      name: 'systemabh-organizationabh-detail',
      component: SystemabhOrganizationabhDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabh-organizationabh',
      },
    },
{
      path: 'systemabh-menuabh',
      name: 'systemabh-menuabh',
      component: SystemabhMenuabh,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabh-menuabh-detail/:pattern/:id?',
      name: 'systemabh-menuabh-detail',
      component: SystemabhMenuabhDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabh-menuabh',
      },
    },
{
      path: 'systemabh-dictionaryabh',
      name: 'systemabh-dictionaryabh',
      component: SystemabhDictionaryabh,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabh-dictionaryabh-detail/:pattern/:id?',
      name: 'systemabh-dictionaryabh-detail',
      component: SystemabhDictionaryabhDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabh-dictionaryabh',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
