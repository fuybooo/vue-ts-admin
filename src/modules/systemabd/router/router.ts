import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabd = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/Systemabd.vue')
const SystemabdUserabd = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-userabd/SystemabdUserabd.vue')
const SystemabdUserabdDetail = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-userabd/SystemabdUserabdDetail.vue')
const SystemabdRoleabd = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-roleabd/SystemabdRoleabd.vue')
const SystemabdRoleabdDetail = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-roleabd/SystemabdRoleabdDetail.vue')
const SystemabdAuthabd = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-authabd/SystemabdAuthabd.vue')
const SystemabdAuthabdDetail = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-authabd/SystemabdAuthabdDetail.vue')
const SystemabdOrganizationabd = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-organizationabd/SystemabdOrganizationabd.vue')
const SystemabdOrganizationabdDetail = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-organizationabd/SystemabdOrganizationabdDetail.vue')
const SystemabdMenuabd = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-menuabd/SystemabdMenuabd.vue')
const SystemabdMenuabdDetail = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-menuabd/SystemabdMenuabdDetail.vue')
const SystemabdDictionaryabd = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-dictionaryabd/SystemabdDictionaryabd.vue')
const SystemabdDictionaryabdDetail = () => import(/* webpackChunkName: "systemabd" */ '@/modules/systemabd/views/systemabd-dictionaryabd/SystemabdDictionaryabdDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabd',
  name: 'systemabd',
  component: Systemabd,
  children: [
    {
      path: 'systemabd-userabd',
      name: 'systemabd-userabd',
      component: SystemabdUserabd,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabd-userabd-detail/:pattern/:id?',
      name: 'systemabd-userabd-detail',
      component: SystemabdUserabdDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabd-userabd',
      },
    },
{
      path: 'systemabd-roleabd',
      name: 'systemabd-roleabd',
      component: SystemabdRoleabd,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabd-roleabd-detail/:pattern/:id?',
      name: 'systemabd-roleabd-detail',
      component: SystemabdRoleabdDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabd-roleabd',
      },
    },
{
      path: 'systemabd-authabd',
      name: 'systemabd-authabd',
      component: SystemabdAuthabd,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabd-authabd-detail/:pattern/:id?',
      name: 'systemabd-authabd-detail',
      component: SystemabdAuthabdDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabd-authabd',
      },
    },
{
      path: 'systemabd-organizationabd',
      name: 'systemabd-organizationabd',
      component: SystemabdOrganizationabd,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabd-organizationabd-detail/:pattern/:id?',
      name: 'systemabd-organizationabd-detail',
      component: SystemabdOrganizationabdDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabd-organizationabd',
      },
    },
{
      path: 'systemabd-menuabd',
      name: 'systemabd-menuabd',
      component: SystemabdMenuabd,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabd-menuabd-detail/:pattern/:id?',
      name: 'systemabd-menuabd-detail',
      component: SystemabdMenuabdDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabd-menuabd',
      },
    },
{
      path: 'systemabd-dictionaryabd',
      name: 'systemabd-dictionaryabd',
      component: SystemabdDictionaryabd,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabd-dictionaryabd-detail/:pattern/:id?',
      name: 'systemabd-dictionaryabd-detail',
      component: SystemabdDictionaryabdDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabd-dictionaryabd',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
