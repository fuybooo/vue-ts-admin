import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaav = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/Systemaav.vue')
const SystemaavUseraav = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-useraav/SystemaavUseraav.vue')
const SystemaavUseraavDetail = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-useraav/SystemaavUseraavDetail.vue')
const SystemaavRoleaav = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-roleaav/SystemaavRoleaav.vue')
const SystemaavRoleaavDetail = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-roleaav/SystemaavRoleaavDetail.vue')
const SystemaavAuthaav = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-authaav/SystemaavAuthaav.vue')
const SystemaavAuthaavDetail = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-authaav/SystemaavAuthaavDetail.vue')
const SystemaavOrganizationaav = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-organizationaav/SystemaavOrganizationaav.vue')
const SystemaavOrganizationaavDetail = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-organizationaav/SystemaavOrganizationaavDetail.vue')
const SystemaavMenuaav = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-menuaav/SystemaavMenuaav.vue')
const SystemaavMenuaavDetail = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-menuaav/SystemaavMenuaavDetail.vue')
const SystemaavDictionaryaav = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-dictionaryaav/SystemaavDictionaryaav.vue')
const SystemaavDictionaryaavDetail = () => import(/* webpackChunkName: "systemaav" */ '@/modules/systemaav/views/systemaav-dictionaryaav/SystemaavDictionaryaavDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaav',
  name: 'systemaav',
  component: Systemaav,
  children: [
    {
      path: 'systemaav-useraav',
      name: 'systemaav-useraav',
      component: SystemaavUseraav,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaav-useraav-detail/:pattern/:id?',
      name: 'systemaav-useraav-detail',
      component: SystemaavUseraavDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaav-useraav',
      },
    },
{
      path: 'systemaav-roleaav',
      name: 'systemaav-roleaav',
      component: SystemaavRoleaav,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaav-roleaav-detail/:pattern/:id?',
      name: 'systemaav-roleaav-detail',
      component: SystemaavRoleaavDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaav-roleaav',
      },
    },
{
      path: 'systemaav-authaav',
      name: 'systemaav-authaav',
      component: SystemaavAuthaav,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaav-authaav-detail/:pattern/:id?',
      name: 'systemaav-authaav-detail',
      component: SystemaavAuthaavDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaav-authaav',
      },
    },
{
      path: 'systemaav-organizationaav',
      name: 'systemaav-organizationaav',
      component: SystemaavOrganizationaav,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaav-organizationaav-detail/:pattern/:id?',
      name: 'systemaav-organizationaav-detail',
      component: SystemaavOrganizationaavDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaav-organizationaav',
      },
    },
{
      path: 'systemaav-menuaav',
      name: 'systemaav-menuaav',
      component: SystemaavMenuaav,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaav-menuaav-detail/:pattern/:id?',
      name: 'systemaav-menuaav-detail',
      component: SystemaavMenuaavDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaav-menuaav',
      },
    },
{
      path: 'systemaav-dictionaryaav',
      name: 'systemaav-dictionaryaav',
      component: SystemaavDictionaryaav,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaav-dictionaryaav-detail/:pattern/:id?',
      name: 'systemaav-dictionaryaav-detail',
      component: SystemaavDictionaryaavDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaav-dictionaryaav',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
