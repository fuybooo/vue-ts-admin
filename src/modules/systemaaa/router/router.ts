import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaaa = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/Systemaaa.vue')
const SystemaaaUseraaa = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-useraaa/SystemaaaUseraaa.vue')
const SystemaaaUseraaaDetail = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-useraaa/SystemaaaUseraaaDetail.vue')
const SystemaaaRoleaaa = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-roleaaa/SystemaaaRoleaaa.vue')
const SystemaaaRoleaaaDetail = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-roleaaa/SystemaaaRoleaaaDetail.vue')
const SystemaaaAuthaaa = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-authaaa/SystemaaaAuthaaa.vue')
const SystemaaaAuthaaaDetail = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-authaaa/SystemaaaAuthaaaDetail.vue')
const SystemaaaOrganizationaaa = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-organizationaaa/SystemaaaOrganizationaaa.vue')
const SystemaaaOrganizationaaaDetail = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-organizationaaa/SystemaaaOrganizationaaaDetail.vue')
const SystemaaaMenuaaa = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-menuaaa/SystemaaaMenuaaa.vue')
const SystemaaaMenuaaaDetail = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-menuaaa/SystemaaaMenuaaaDetail.vue')
const SystemaaaDictionaryaaa = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-dictionaryaaa/SystemaaaDictionaryaaa.vue')
const SystemaaaDictionaryaaaDetail = () => import(/* webpackChunkName: "systemaaa" */ '@/modules/systemaaa/views/systemaaa-dictionaryaaa/SystemaaaDictionaryaaaDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaaa',
  name: 'systemaaa',
  component: Systemaaa,
  children: [
    {
      path: 'systemaaa-useraaa',
      name: 'systemaaa-useraaa',
      component: SystemaaaUseraaa,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaaa-useraaa-detail/:pattern/:id?',
      name: 'systemaaa-useraaa-detail',
      component: SystemaaaUseraaaDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaaa-useraaa',
      },
    },
{
      path: 'systemaaa-roleaaa',
      name: 'systemaaa-roleaaa',
      component: SystemaaaRoleaaa,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaaa-roleaaa-detail/:pattern/:id?',
      name: 'systemaaa-roleaaa-detail',
      component: SystemaaaRoleaaaDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaaa-roleaaa',
      },
    },
{
      path: 'systemaaa-authaaa',
      name: 'systemaaa-authaaa',
      component: SystemaaaAuthaaa,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaaa-authaaa-detail/:pattern/:id?',
      name: 'systemaaa-authaaa-detail',
      component: SystemaaaAuthaaaDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaaa-authaaa',
      },
    },
{
      path: 'systemaaa-organizationaaa',
      name: 'systemaaa-organizationaaa',
      component: SystemaaaOrganizationaaa,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaaa-organizationaaa-detail/:pattern/:id?',
      name: 'systemaaa-organizationaaa-detail',
      component: SystemaaaOrganizationaaaDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaaa-organizationaaa',
      },
    },
{
      path: 'systemaaa-menuaaa',
      name: 'systemaaa-menuaaa',
      component: SystemaaaMenuaaa,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaaa-menuaaa-detail/:pattern/:id?',
      name: 'systemaaa-menuaaa-detail',
      component: SystemaaaMenuaaaDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaaa-menuaaa',
      },
    },
{
      path: 'systemaaa-dictionaryaaa',
      name: 'systemaaa-dictionaryaaa',
      component: SystemaaaDictionaryaaa,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaaa-dictionaryaaa-detail/:pattern/:id?',
      name: 'systemaaa-dictionaryaaa-detail',
      component: SystemaaaDictionaryaaaDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaaa-dictionaryaaa',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
