import {ProRouteConfig} from '@/model/project/route/route.model'

const System = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/System.vue')
const SystemUser = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-user/SystemUser.vue')
const SystemUserDetail = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-user/SystemUserDetail.vue')
const SystemRole = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-role/SystemRole.vue')
const SystemRoleDetail = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-role/SystemRoleDetail.vue')
const SystemAuth = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-auth/SystemAuth.vue')
const SystemAuthDetail = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-auth/SystemAuthDetail.vue')
const SystemOrganization = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-organization/SystemOrganization.vue')
const SystemOrganizationDetail = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-organization/SystemOrganizationDetail.vue')
const SystemMenu = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-menu/SystemMenu.vue')
const SystemMenuDetail = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-menu/SystemMenuDetail.vue')
const SystemDictionary = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-dictionary/SystemDictionary.vue')
const SystemDictionaryDetail = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-dictionary/SystemDictionaryDetail.vue')
const SystemTenant = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-tenant/SystemTenant.vue')
const SystemTenantDetail = () => import(/* webpackChunkName: "system" */ '@/modules/system/views/system-tenant/SystemTenantDetail.vue')

const router: ProRouteConfig = {
  path: 'system',
  name: 'system',
  component: System,
  children: [
    {
      path: 'system-user',
      name: 'system-user',
      component: SystemUser,
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'system-user-detail/:pattern/:id?',
      name: 'system-user-detail',
      component: SystemUserDetail,
      meta: {
        title: '用户管理详情',
        parentName: 'system-user',
      },
    },
    {
      path: 'system-role',
      name: 'system-role',
      component: SystemRole,
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'system-role-detail/:pattern/:id?',
      name: 'system-role-detail',
      component: SystemRoleDetail,
      meta: {
        title: '角色管理详情',
        parentName: 'system-role',
      },
    },
    {
      path: 'system-auth',
      name: 'system-auth',
      component: SystemAuth,
      meta: {
        title: '权限管理',
      },
    },
    {
      path: 'system-auth-detail/:pattern/:id?',
      name: 'system-auth-detail',
      component: SystemAuthDetail,
      meta: {
        title: '权限管理详情',
        parentName: 'system-auth',
      },
    },
    {
      path: 'system-organization',
      name: 'system-organization',
      component: SystemOrganization,
      meta: {
        title: '组织管理',
      },
    },
    {
      path: 'system-organization-detail/:pattern/:id?',
      name: 'system-organization-detail',
      component: SystemOrganizationDetail,
      meta: {
        title: '组织管理详情',
        parentName: 'system-organization',
      },
    },
    {
      path: 'system-menu',
      name: 'system-menu',
      component: SystemMenu,
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'system-menu-detail/:pattern/:id',
      name: 'system-menu-detail',
      component: SystemMenuDetail,
      meta: {
        title: '菜单管理详情',
        parentName: 'system-menu',
      },
    },
    {
      path: 'system-dictionary',
      name: 'system-dictionary',
      component: SystemDictionary,
      meta: {
        title: '字典管理',
      },
    },
    {
      path: 'system-dictionary-detail/:pattern/:type/:id?',
      name: 'system-dictionary-detail',
      component: SystemDictionaryDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'system-dictionary',
      },
    },
    {
      path: 'system-tenant',
      name: 'system-tenant',
      component: SystemTenant,
      meta: {
        title: '租户管理',
      },
    },
    {
      path: 'system-tenant-detail/:pattern/:id?',
      name: 'system-tenant-detail',
      component: SystemTenantDetail,
      meta: {
        title: '租户管理详情',
        parentName: 'system-tenant',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
