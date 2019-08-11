import {BaseInstance} from './BaseInstance'

export default interface DictionaryInstance extends BaseInstance {
  typeCode: string,
  typeName: string,
  name: string,
  code: string,
  parentCode: string,
}
