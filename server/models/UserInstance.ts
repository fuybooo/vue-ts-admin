import {BaseInstance} from './BaseInstance'

export default interface UserInstance extends BaseInstance {
  username: string,
  password: string,
  passSalt: string,
}
