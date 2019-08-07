import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaae = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/Systemaae.vue')
const SystemaaeUseraae = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-useraae/SystemaaeUseraae.vue')
const SystemaaeUseraaeDetail = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-useraae/SystemaaeUseraaeDetail.vue')
const SystemaaeRoleaae = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-roleaae/SystemaaeRoleaae.vue')
const SystemaaeRoleaaeDetail = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-roleaae/SystemaaeRoleaaeDetail.vue')
const SystemaaeAuthaae = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-authaae/SystemaaeAuthaae.vue')
const SystemaaeAuthaaeDetail = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-authaae/SystemaaeAuthaaeDetail.vue')
const SystemaaeOrganizationaae = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-organizationaae/SystemaaeOrganizationaae.vue')
const SystemaaeOrganizationaaeDetail = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-organizationaae/SystemaaeOrganizationaaeDetail.vue')
const SystemaaeMenuaae = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-menuaae/SystemaaeMenuaae.vue')
const SystemaaeMenuaaeDetail = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-menuaae/SystemaaeMenuaaeDetail.vue')
const SystemaaeDictionaryaae = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-dictionaryaae/SystemaaeDictionaryaae.vue')
const SystemaaeDictionaryaaeDetail = () => import(/* webpackChunkName: "systemaae" */ '@/modules/systemaae/views/systemaae-dictionaryaae/SystemaaeDictionaryaaeDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaae',
  name: 'systemaae',
  component: Systemaae,
  children: [
    {
      path: 'systemaae-useraae',
      name: 'systemaae-useraae',
      component: SystemaaeUseraae,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaae-useraae-detail/:pattern/:id?',
      name: 'systemaae-useraae-detail',
      component: SystemaaeUseraaeDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaae-useraae',
      },
    },
{
      path: 'systemaae-roleaae',
      name: 'systemaae-roleaae',
      component: SystemaaeRoleaae,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaae-roleaae-detail/:pattern/:id?',
      name: 'systemaae-roleaae-detail',
      component: SystemaaeRoleaaeDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaae-roleaae',
      },
    },
{
      path: 'systemaae-authaae',
      name: 'systemaae-authaae',
      component: SystemaaeAuthaae,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaae-authaae-detail/:pattern/:id?',
      name: 'systemaae-authaae-detail',
      component: SystemaaeAuthaaeDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaae-authaae',
      },
    },
{
      path: 'systemaae-organizationaae',
      name: 'systemaae-organizationaae',
      component: SystemaaeOrganizationaae,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaae-organizationaae-detail/:pattern/:id?',
      name: 'systemaae-organizationaae-detail',
      component: SystemaaeOrganizationaaeDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaae-organizationaae',
      },
    },
{
      path: 'systemaae-menuaae',
      name: 'systemaae-menuaae',
      component: SystemaaeMenuaae,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaae-menuaae-detail/:pattern/:id?',
      name: 'systemaae-menuaae-detail',
      component: SystemaaeMenuaaeDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaae-menuaae',
      },
    },
{
      path: 'systemaae-dictionaryaae',
      name: 'systemaae-dictionaryaae',
      component: SystemaaeDictionaryaae,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaae-dictionaryaae-detail/:pattern/:id?',
      name: 'systemaae-dictionaryaae-detail',
      component: SystemaaeDictionaryaaeDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaae-dictionaryaae',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
