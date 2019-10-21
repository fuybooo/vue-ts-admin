import {BaseInstance} from './BaseInstance'

export default interface PlanInstance extends BaseInstance {
  name: string,
  code: string,
}
