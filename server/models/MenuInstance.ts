import {BaseInstance} from './BaseInstance'

export default interface MenuInstance extends BaseInstance {
  name: string,
  parentId: number,
  code: string,
  sort: number,
  type: number,
}
