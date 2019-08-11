import {BaseInstance} from './BaseInstance'

export declare type userType =
  '' | // 普通用户，与normal相同
  'normal' | // 普通用户，根据其 role 进行权限操作
  'admin' | // 普通管理员，能够管理租户内的数据，但是不能对 admin 用户进行增删改查
  'tenant' | // 租户管理员，能够管理租户内的所有数据
  'god' // 超级管理员，能够为所欲为，管理所有租户的所有数据
export default interface UserInstance extends BaseInstance {
  username: string,
  password: string,
  passSalt: string,
  type: userType,
}
