import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaao = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/Systemaao.vue')
const SystemaaoUseraao = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-useraao/SystemaaoUseraao.vue')
const SystemaaoUseraaoDetail = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-useraao/SystemaaoUseraaoDetail.vue')
const SystemaaoRoleaao = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-roleaao/SystemaaoRoleaao.vue')
const SystemaaoRoleaaoDetail = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-roleaao/SystemaaoRoleaaoDetail.vue')
const SystemaaoAuthaao = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-authaao/SystemaaoAuthaao.vue')
const SystemaaoAuthaaoDetail = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-authaao/SystemaaoAuthaaoDetail.vue')
const SystemaaoOrganizationaao = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-organizationaao/SystemaaoOrganizationaao.vue')
const SystemaaoOrganizationaaoDetail = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-organizationaao/SystemaaoOrganizationaaoDetail.vue')
const SystemaaoMenuaao = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-menuaao/SystemaaoMenuaao.vue')
const SystemaaoMenuaaoDetail = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-menuaao/SystemaaoMenuaaoDetail.vue')
const SystemaaoDictionaryaao = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-dictionaryaao/SystemaaoDictionaryaao.vue')
const SystemaaoDictionaryaaoDetail = () => import(/* webpackChunkName: "systemaao" */ '@/modules/systemaao/views/systemaao-dictionaryaao/SystemaaoDictionaryaaoDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaao',
  name: 'systemaao',
  component: Systemaao,
  children: [
    {
      path: 'systemaao-useraao',
      name: 'systemaao-useraao',
      component: SystemaaoUseraao,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaao-useraao-detail/:pattern/:id?',
      name: 'systemaao-useraao-detail',
      component: SystemaaoUseraaoDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaao-useraao',
      },
    },
{
      path: 'systemaao-roleaao',
      name: 'systemaao-roleaao',
      component: SystemaaoRoleaao,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaao-roleaao-detail/:pattern/:id?',
      name: 'systemaao-roleaao-detail',
      component: SystemaaoRoleaaoDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaao-roleaao',
      },
    },
{
      path: 'systemaao-authaao',
      name: 'systemaao-authaao',
      component: SystemaaoAuthaao,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaao-authaao-detail/:pattern/:id?',
      name: 'systemaao-authaao-detail',
      component: SystemaaoAuthaaoDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaao-authaao',
      },
    },
{
      path: 'systemaao-organizationaao',
      name: 'systemaao-organizationaao',
      component: SystemaaoOrganizationaao,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaao-organizationaao-detail/:pattern/:id?',
      name: 'systemaao-organizationaao-detail',
      component: SystemaaoOrganizationaaoDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaao-organizationaao',
      },
    },
{
      path: 'systemaao-menuaao',
      name: 'systemaao-menuaao',
      component: SystemaaoMenuaao,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaao-menuaao-detail/:pattern/:id?',
      name: 'systemaao-menuaao-detail',
      component: SystemaaoMenuaaoDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaao-menuaao',
      },
    },
{
      path: 'systemaao-dictionaryaao',
      name: 'systemaao-dictionaryaao',
      component: SystemaaoDictionaryaao,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaao-dictionaryaao-detail/:pattern/:id?',
      name: 'systemaao-dictionaryaao-detail',
      component: SystemaaoDictionaryaaoDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaao-dictionaryaao',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
