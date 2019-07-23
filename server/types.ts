import {ExtendableContext, Request} from 'koa'

interface Req extends Request {
  body: any,
}
export interface Cxt extends ExtendableContext {
  request: Req | any,
}
export interface Route {
  path: string
  action: string
  controller: any
  method?: string
  withoutToken?: boolean
}
export interface FieldConfig {
  required: boolean
  type: 'string' | 'boolean' | 'object' | 'array' | 'number',
  max?: number
  min?: number
}
export interface SchemaMap {
  [f: string]: FieldConfig | SchemaMap
}
