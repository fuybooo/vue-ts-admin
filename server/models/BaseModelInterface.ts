import * as mongoose from 'mongoose'
export interface ListParams {
  [p: string]: any // 其他参数
  keywords?: string // 模糊匹配
  findParams?: any // 查询参数
  fields?: object | string
  notExcludesDefaultFields?: boolean // 是否排除默认字段
  currentPage?: number
  pageSize?: number
  sortField?: string
  sortOrder?: 'ascending' | 'descending' | null | undefined
}
export default interface BaseModelInterface {
  getName (): string
  getSchema (): mongoose.SchemaDefinition
  list? (listParams: ListParams): any
  get? (id: string | number): any
  create? (model: any): any
  findBy? (map: any): any
}
