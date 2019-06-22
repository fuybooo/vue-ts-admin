export interface IUrl {
  url: string
  prefix?: string
  isStatic?: boolean
  staticPath?: string
}
export const staticPath = 'mock/'
export declare type urlType = string | IUrl
const prefix = {
  base: 'platform/',
}
interface IUrlMap {
  [k: string]: any | IUrl | IUrlMap
}
const urlMap = {
  login: {
    login: {url: 'login', isStatic: true, prefix: prefix.base},
    forgot: {url: 'forgot', isStatic: true, prefix: prefix.base},
    register: {url: 'register', isStatic: true, prefix: prefix.base},
    logout: {url: 'logout', isStatic: true, prefix: prefix.base},
  },
}
export default urlMap
