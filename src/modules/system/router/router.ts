import {ProRouteConfig} from '@/model/project/route/route.model'
import System from '@/modules/system/views/System.vue'
import SystemUser from '@/modules/system/views/system-user/SystemUser.vue'
import SystemUserDetail from '@/modules/system/views/system-user/SystemUserDetail.vue'
import SystemRole from '@/modules/system/views/system-role/SystemRole.vue'
import SystemRoleDetail from '@/modules/system/views/system-role/SystemRoleDetail.vue'
import SystemAuth from '@/modules/system/views/system-auth/SystemAuth.vue'
import SystemAuthDetail from '@/modules/system/views/system-auth/SystemAuthDetail.vue'
import SystemOrganization from '@/modules/system/views/system-organization/SystemOrganization.vue'
import SystemOrganizationDetail from '@/modules/system/views/system-organization/SystemOrganizationDetail.vue'
import SystemMenu from '@/modules/system/views/system-menu/SystemMenu.vue'
import SystemMenuDetail from '@/modules/system/views/system-menu/SystemMenuDetail.vue'
import SystemDictionary from '@/modules/system/views/system-dictionary/SystemDictionary.vue'
import SystemDictionaryDetail from '@/modules/system/views/system-dictionary/SystemDictionaryDetail.vue'

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
      path: 'system-role-detail',
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
      path: 'system-auth-detail',
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
      path: 'system-organization-detail',
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
      path: 'system-menu-detail',
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
      path: 'system-dictionary-detail',
      name: 'system-dictionary-detail',
      component: SystemDictionaryDetail,
      meta: {
        title: '字典管理详情',
        parentName: 'system-dictionary',
      },
    },
  ],
  meta: {
    title: '系统管理',
  },
}
export default router
