import {ExtendableContext, Request} from 'koa'

interface Req extends Request {
  body: any,
}
export interface Ctx extends ExtendableContext {
  request: Req | any,
  params: any,
  body: any,
}
export interface Route {
  path: string
  action: string
  controller: any
  method?: string
  withoutToken?: boolean
}
export interface FieldConfig {
  type: 'string' | 'boolean' | 'object' | 'array' | 'number',
  required?: boolean
  requiredFields?: string[]
  max?: number
  min?: number
}
export interface SchemaMap {
  [f: string]: FieldConfig | SchemaMap
}
