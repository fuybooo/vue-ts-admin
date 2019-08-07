import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabc = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/Systemabc.vue')
const SystemabcUserabc = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-userabc/SystemabcUserabc.vue')
const SystemabcUserabcDetail = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-userabc/SystemabcUserabcDetail.vue')
const SystemabcRoleabc = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-roleabc/SystemabcRoleabc.vue')
const SystemabcRoleabcDetail = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-roleabc/SystemabcRoleabcDetail.vue')
const SystemabcAuthabc = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-authabc/SystemabcAuthabc.vue')
const SystemabcAuthabcDetail = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-authabc/SystemabcAuthabcDetail.vue')
const SystemabcOrganizationabc = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-organizationabc/SystemabcOrganizationabc.vue')
const SystemabcOrganizationabcDetail = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-organizationabc/SystemabcOrganizationabcDetail.vue')
const SystemabcMenuabc = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-menuabc/SystemabcMenuabc.vue')
const SystemabcMenuabcDetail = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-menuabc/SystemabcMenuabcDetail.vue')
const SystemabcDictionaryabc = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-dictionaryabc/SystemabcDictionaryabc.vue')
const SystemabcDictionaryabcDetail = () => import(/* webpackChunkName: "systemabc" */ '@/modules/systemabc/views/systemabc-dictionaryabc/SystemabcDictionaryabcDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabc',
  name: 'systemabc',
  component: Systemabc,
  children: [
    {
      path: 'systemabc-userabc',
      name: 'systemabc-userabc',
      component: SystemabcUserabc,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabc-userabc-detail/:pattern/:id?',
      name: 'systemabc-userabc-detail',
      component: SystemabcUserabcDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabc-userabc',
      },
    },
{
      path: 'systemabc-roleabc',
      name: 'systemabc-roleabc',
      component: SystemabcRoleabc,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabc-roleabc-detail/:pattern/:id?',
      name: 'systemabc-roleabc-detail',
      component: SystemabcRoleabcDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabc-roleabc',
      },
    },
{
      path: 'systemabc-authabc',
      name: 'systemabc-authabc',
      component: SystemabcAuthabc,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabc-authabc-detail/:pattern/:id?',
      name: 'systemabc-authabc-detail',
      component: SystemabcAuthabcDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabc-authabc',
      },
    },
{
      path: 'systemabc-organizationabc',
      name: 'systemabc-organizationabc',
      component: SystemabcOrganizationabc,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabc-organizationabc-detail/:pattern/:id?',
      name: 'systemabc-organizationabc-detail',
      component: SystemabcOrganizationabcDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabc-organizationabc',
      },
    },
{
      path: 'systemabc-menuabc',
      name: 'systemabc-menuabc',
      component: SystemabcMenuabc,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabc-menuabc-detail/:pattern/:id?',
      name: 'systemabc-menuabc-detail',
      component: SystemabcMenuabcDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabc-menuabc',
      },
    },
{
      path: 'systemabc-dictionaryabc',
      name: 'systemabc-dictionaryabc',
      component: SystemabcDictionaryabc,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabc-dictionaryabc-detail/:pattern/:id?',
      name: 'systemabc-dictionaryabc-detail',
      component: SystemabcDictionaryabcDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabc-dictionaryabc',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
