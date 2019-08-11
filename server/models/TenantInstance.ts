import {BaseInstance} from './BaseInstance'

export default interface TenantInstance extends BaseInstance {
  name: string,
  code: string,
}
