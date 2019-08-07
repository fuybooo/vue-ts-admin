import {ProRouteConfig} from '@/model/project/route/route.model'
const Systemaaf = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/Systemaaf.vue')
const SystemaafUseraaf = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-useraaf/SystemaafUseraaf.vue')
const SystemaafUseraafDetail = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-useraaf/SystemaafUseraafDetail.vue')
const SystemaafRoleaaf = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-roleaaf/SystemaafRoleaaf.vue')
const SystemaafRoleaafDetail = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-roleaaf/SystemaafRoleaafDetail.vue')
const SystemaafAuthaaf = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-authaaf/SystemaafAuthaaf.vue')
const SystemaafAuthaafDetail = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-authaaf/SystemaafAuthaafDetail.vue')
const SystemaafOrganizationaaf = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-organizationaaf/SystemaafOrganizationaaf.vue')
const SystemaafOrganizationaafDetail = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-organizationaaf/SystemaafOrganizationaafDetail.vue')
const SystemaafMenuaaf = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-menuaaf/SystemaafMenuaaf.vue')
const SystemaafMenuaafDetail = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-menuaaf/SystemaafMenuaafDetail.vue')
const SystemaafDictionaryaaf = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-dictionaryaaf/SystemaafDictionaryaaf.vue')
const SystemaafDictionaryaafDetail = () => import(/* webpackChunkName: "systemaaf" */ '@/modules/systemaaf/views/systemaaf-dictionaryaaf/SystemaafDictionaryaafDetail.vue')

const router: ProRouteConfig = {
  path: 'systemaaf',
  name: 'systemaaf',
  component: Systemaaf,
  children: [
    {
      path: 'systemaaf-useraaf',
      name: 'systemaaf-useraaf',
      component: SystemaafUseraaf,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'systemaaf-useraaf-detail/:pattern/:id?',
      name: 'systemaaf-useraaf-detail',
      component: SystemaafUseraafDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'systemaaf-useraaf',
      },
    },
{
      path: 'systemaaf-roleaaf',
      name: 'systemaaf-roleaaf',
      component: SystemaafRoleaaf,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'systemaaf-roleaaf-detail/:pattern/:id?',
      name: 'systemaaf-roleaaf-detail',
      component: SystemaafRoleaafDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'systemaaf-roleaaf',
      },
    },
{
      path: 'systemaaf-authaaf',
      name: 'systemaaf-authaaf',
      component: SystemaafAuthaaf,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'systemaaf-authaaf-detail/:pattern/:id?',
      name: 'systemaaf-authaaf-detail',
      component: SystemaafAuthaafDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'systemaaf-authaaf',
      },
    },
{
      path: 'systemaaf-organizationaaf',
      name: 'systemaaf-organizationaaf',
      component: SystemaafOrganizationaaf,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'systemaaf-organizationaaf-detail/:pattern/:id?',
      name: 'systemaaf-organizationaaf-detail',
      component: SystemaafOrganizationaafDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'systemaaf-organizationaaf',
      },
    },
{
      path: 'systemaaf-menuaaf',
      name: 'systemaaf-menuaaf',
      component: SystemaafMenuaaf,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'systemaaf-menuaaf-detail/:pattern/:id?',
      name: 'systemaaf-menuaaf-detail',
      component: SystemaafMenuaafDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'systemaaf-menuaaf',
      },
    },
{
      path: 'systemaaf-dictionaryaaf',
      name: 'systemaaf-dictionaryaaf',
      component: SystemaafDictionaryaaf,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'systemaaf-dictionaryaaf-detail/:pattern/:id?',
      name: 'systemaaf-dictionaryaaf-detail',
      component: SystemaafDictionaryaafDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'systemaaf-dictionaryaaf',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
