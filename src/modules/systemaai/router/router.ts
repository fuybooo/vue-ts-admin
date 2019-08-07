import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaai = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/Systemaai.vue')
const SystemaaiUseraai = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-useraai/SystemaaiUseraai.vue')
const SystemaaiUseraaiDetail = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-useraai/SystemaaiUseraaiDetail.vue')
const SystemaaiRoleaai = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-roleaai/SystemaaiRoleaai.vue')
const SystemaaiRoleaaiDetail = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-roleaai/SystemaaiRoleaaiDetail.vue')
const SystemaaiAuthaai = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-authaai/SystemaaiAuthaai.vue')
const SystemaaiAuthaaiDetail = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-authaai/SystemaaiAuthaaiDetail.vue')
const SystemaaiOrganizationaai = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-organizationaai/SystemaaiOrganizationaai.vue')
const SystemaaiOrganizationaaiDetail = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-organizationaai/SystemaaiOrganizationaaiDetail.vue')
const SystemaaiMenuaai = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-menuaai/SystemaaiMenuaai.vue')
const SystemaaiMenuaaiDetail = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-menuaai/SystemaaiMenuaaiDetail.vue')
const SystemaaiDictionaryaai = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-dictionaryaai/SystemaaiDictionaryaai.vue')
const SystemaaiDictionaryaaiDetail = () => import(/* webpackChunkName: "systemaai" */ '@/modules/systemaai/views/systemaai-dictionaryaai/SystemaaiDictionaryaaiDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaai',
  name: 'systemaai',
  component: Systemaai,
  children: [
    {
      path: 'systemaai-useraai',
      name: 'systemaai-useraai',
      component: SystemaaiUseraai,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaai-useraai-detail/:pattern/:id?',
      name: 'systemaai-useraai-detail',
      component: SystemaaiUseraaiDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaai-useraai',
      },
    },
{
      path: 'systemaai-roleaai',
      name: 'systemaai-roleaai',
      component: SystemaaiRoleaai,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaai-roleaai-detail/:pattern/:id?',
      name: 'systemaai-roleaai-detail',
      component: SystemaaiRoleaaiDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaai-roleaai',
      },
    },
{
      path: 'systemaai-authaai',
      name: 'systemaai-authaai',
      component: SystemaaiAuthaai,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaai-authaai-detail/:pattern/:id?',
      name: 'systemaai-authaai-detail',
      component: SystemaaiAuthaaiDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaai-authaai',
      },
    },
{
      path: 'systemaai-organizationaai',
      name: 'systemaai-organizationaai',
      component: SystemaaiOrganizationaai,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaai-organizationaai-detail/:pattern/:id?',
      name: 'systemaai-organizationaai-detail',
      component: SystemaaiOrganizationaaiDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaai-organizationaai',
      },
    },
{
      path: 'systemaai-menuaai',
      name: 'systemaai-menuaai',
      component: SystemaaiMenuaai,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaai-menuaai-detail/:pattern/:id?',
      name: 'systemaai-menuaai-detail',
      component: SystemaaiMenuaaiDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaai-menuaai',
      },
    },
{
      path: 'systemaai-dictionaryaai',
      name: 'systemaai-dictionaryaai',
      component: SystemaaiDictionaryaai,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaai-dictionaryaai-detail/:pattern/:id?',
      name: 'systemaai-dictionaryaai-detail',
      component: SystemaaiDictionaryaaiDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaai-dictionaryaai',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
