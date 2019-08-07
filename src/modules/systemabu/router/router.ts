import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemabu = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/Systemabu.vue')
const SystemabuUserabu = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-userabu/SystemabuUserabu.vue')
const SystemabuUserabuDetail = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-userabu/SystemabuUserabuDetail.vue')
const SystemabuRoleabu = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-roleabu/SystemabuRoleabu.vue')
const SystemabuRoleabuDetail = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-roleabu/SystemabuRoleabuDetail.vue')
const SystemabuAuthabu = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-authabu/SystemabuAuthabu.vue')
const SystemabuAuthabuDetail = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-authabu/SystemabuAuthabuDetail.vue')
const SystemabuOrganizationabu = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-organizationabu/SystemabuOrganizationabu.vue')
const SystemabuOrganizationabuDetail = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-organizationabu/SystemabuOrganizationabuDetail.vue')
const SystemabuMenuabu = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-menuabu/SystemabuMenuabu.vue')
const SystemabuMenuabuDetail = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-menuabu/SystemabuMenuabuDetail.vue')
const SystemabuDictionaryabu = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-dictionaryabu/SystemabuDictionaryabu.vue')
const SystemabuDictionaryabuDetail = () => import(/* webpackChunkName: "systemabu" */ '@/modules/systemabu/views/systemabu-dictionaryabu/SystemabuDictionaryabuDetail.vue')

const router: ProRouteConfig = {
  path: 'systemabu',
  name: 'systemabu',
  component: Systemabu,
  children: [
    {
      path: 'systemabu-userabu',
      name: 'systemabu-userabu',
      component: SystemabuUserabu,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemabu-userabu-detail/:pattern/:id?',
      name: 'systemabu-userabu-detail',
      component: SystemabuUserabuDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemabu-userabu',
      },
    },
{
      path: 'systemabu-roleabu',
      name: 'systemabu-roleabu',
      component: SystemabuRoleabu,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemabu-roleabu-detail/:pattern/:id?',
      name: 'systemabu-roleabu-detail',
      component: SystemabuRoleabuDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemabu-roleabu',
      },
    },
{
      path: 'systemabu-authabu',
      name: 'systemabu-authabu',
      component: SystemabuAuthabu,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemabu-authabu-detail/:pattern/:id?',
      name: 'systemabu-authabu-detail',
      component: SystemabuAuthabuDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemabu-authabu',
      },
    },
{
      path: 'systemabu-organizationabu',
      name: 'systemabu-organizationabu',
      component: SystemabuOrganizationabu,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemabu-organizationabu-detail/:pattern/:id?',
      name: 'systemabu-organizationabu-detail',
      component: SystemabuOrganizationabuDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemabu-organizationabu',
      },
    },
{
      path: 'systemabu-menuabu',
      name: 'systemabu-menuabu',
      component: SystemabuMenuabu,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemabu-menuabu-detail/:pattern/:id?',
      name: 'systemabu-menuabu-detail',
      component: SystemabuMenuabuDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemabu-menuabu',
      },
    },
{
      path: 'systemabu-dictionaryabu',
      name: 'systemabu-dictionaryabu',
      component: SystemabuDictionaryabu,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemabu-dictionaryabu-detail/:pattern/:id?',
      name: 'systemabu-dictionaryabu-detail',
      component: SystemabuDictionaryabuDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemabu-dictionaryabu',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
