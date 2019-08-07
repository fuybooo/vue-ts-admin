import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaab = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/Systemaab.vue')
const SystemaabUseraab = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-useraab/SystemaabUseraab.vue')
const SystemaabUseraabDetail = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-useraab/SystemaabUseraabDetail.vue')
const SystemaabRoleaab = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-roleaab/SystemaabRoleaab.vue')
const SystemaabRoleaabDetail = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-roleaab/SystemaabRoleaabDetail.vue')
const SystemaabAuthaab = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-authaab/SystemaabAuthaab.vue')
const SystemaabAuthaabDetail = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-authaab/SystemaabAuthaabDetail.vue')
const SystemaabOrganizationaab = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-organizationaab/SystemaabOrganizationaab.vue')
const SystemaabOrganizationaabDetail = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-organizationaab/SystemaabOrganizationaabDetail.vue')
const SystemaabMenuaab = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-menuaab/SystemaabMenuaab.vue')
const SystemaabMenuaabDetail = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-menuaab/SystemaabMenuaabDetail.vue')
const SystemaabDictionaryaab = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-dictionaryaab/SystemaabDictionaryaab.vue')
const SystemaabDictionaryaabDetail = () => import(/* webpackChunkName: "systemaab" */ '@/modules/systemaab/views/systemaab-dictionaryaab/SystemaabDictionaryaabDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaab',
  name: 'systemaab',
  component: Systemaab,
  children: [
    {
      path: 'systemaab-useraab',
      name: 'systemaab-useraab',
      component: SystemaabUseraab,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaab-useraab-detail/:pattern/:id?',
      name: 'systemaab-useraab-detail',
      component: SystemaabUseraabDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaab-useraab',
      },
    },
{
      path: 'systemaab-roleaab',
      name: 'systemaab-roleaab',
      component: SystemaabRoleaab,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaab-roleaab-detail/:pattern/:id?',
      name: 'systemaab-roleaab-detail',
      component: SystemaabRoleaabDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaab-roleaab',
      },
    },
{
      path: 'systemaab-authaab',
      name: 'systemaab-authaab',
      component: SystemaabAuthaab,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaab-authaab-detail/:pattern/:id?',
      name: 'systemaab-authaab-detail',
      component: SystemaabAuthaabDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaab-authaab',
      },
    },
{
      path: 'systemaab-organizationaab',
      name: 'systemaab-organizationaab',
      component: SystemaabOrganizationaab,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaab-organizationaab-detail/:pattern/:id?',
      name: 'systemaab-organizationaab-detail',
      component: SystemaabOrganizationaabDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaab-organizationaab',
      },
    },
{
      path: 'systemaab-menuaab',
      name: 'systemaab-menuaab',
      component: SystemaabMenuaab,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaab-menuaab-detail/:pattern/:id?',
      name: 'systemaab-menuaab-detail',
      component: SystemaabMenuaabDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaab-menuaab',
      },
    },
{
      path: 'systemaab-dictionaryaab',
      name: 'systemaab-dictionaryaab',
      component: SystemaabDictionaryaab,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaab-dictionaryaab-detail/:pattern/:id?',
      name: 'systemaab-dictionaryaab-detail',
      component: SystemaabDictionaryaabDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaab-dictionaryaab',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
