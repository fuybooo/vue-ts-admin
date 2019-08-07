import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaaq = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/Systemaaq.vue')
const SystemaaqUseraaq = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-useraaq/SystemaaqUseraaq.vue')
const SystemaaqUseraaqDetail = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-useraaq/SystemaaqUseraaqDetail.vue')
const SystemaaqRoleaaq = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-roleaaq/SystemaaqRoleaaq.vue')
const SystemaaqRoleaaqDetail = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-roleaaq/SystemaaqRoleaaqDetail.vue')
const SystemaaqAuthaaq = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-authaaq/SystemaaqAuthaaq.vue')
const SystemaaqAuthaaqDetail = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-authaaq/SystemaaqAuthaaqDetail.vue')
const SystemaaqOrganizationaaq = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-organizationaaq/SystemaaqOrganizationaaq.vue')
const SystemaaqOrganizationaaqDetail = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-organizationaaq/SystemaaqOrganizationaaqDetail.vue')
const SystemaaqMenuaaq = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-menuaaq/SystemaaqMenuaaq.vue')
const SystemaaqMenuaaqDetail = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-menuaaq/SystemaaqMenuaaqDetail.vue')
const SystemaaqDictionaryaaq = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-dictionaryaaq/SystemaaqDictionaryaaq.vue')
const SystemaaqDictionaryaaqDetail = () => import(/* webpackChunkName: "systemaaq" */ '@/modules/systemaaq/views/systemaaq-dictionaryaaq/SystemaaqDictionaryaaqDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaaq',
  name: 'systemaaq',
  component: Systemaaq,
  children: [
    {
      path: 'systemaaq-useraaq',
      name: 'systemaaq-useraaq',
      component: SystemaaqUseraaq,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaaq-useraaq-detail/:pattern/:id?',
      name: 'systemaaq-useraaq-detail',
      component: SystemaaqUseraaqDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaaq-useraaq',
      },
    },
{
      path: 'systemaaq-roleaaq',
      name: 'systemaaq-roleaaq',
      component: SystemaaqRoleaaq,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaaq-roleaaq-detail/:pattern/:id?',
      name: 'systemaaq-roleaaq-detail',
      component: SystemaaqRoleaaqDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaaq-roleaaq',
      },
    },
{
      path: 'systemaaq-authaaq',
      name: 'systemaaq-authaaq',
      component: SystemaaqAuthaaq,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaaq-authaaq-detail/:pattern/:id?',
      name: 'systemaaq-authaaq-detail',
      component: SystemaaqAuthaaqDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaaq-authaaq',
      },
    },
{
      path: 'systemaaq-organizationaaq',
      name: 'systemaaq-organizationaaq',
      component: SystemaaqOrganizationaaq,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaaq-organizationaaq-detail/:pattern/:id?',
      name: 'systemaaq-organizationaaq-detail',
      component: SystemaaqOrganizationaaqDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaaq-organizationaaq',
      },
    },
{
      path: 'systemaaq-menuaaq',
      name: 'systemaaq-menuaaq',
      component: SystemaaqMenuaaq,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaaq-menuaaq-detail/:pattern/:id?',
      name: 'systemaaq-menuaaq-detail',
      component: SystemaaqMenuaaqDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaaq-menuaaq',
      },
    },
{
      path: 'systemaaq-dictionaryaaq',
      name: 'systemaaq-dictionaryaaq',
      component: SystemaaqDictionaryaaq,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaaq-dictionaryaaq-detail/:pattern/:id?',
      name: 'systemaaq-dictionaryaaq-detail',
      component: SystemaaqDictionaryaaqDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaaq-dictionaryaaq',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
