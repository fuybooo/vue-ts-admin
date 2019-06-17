export interface IUrl {
  url: string
  prefix?: string
  isStatic?: boolean
  staticPath?: string
}
export const staticPath = ''
export declare type urlType = string | IUrl
const urlMap = {
  follow: {
    demo: {
      test: {
        add: {url: 'add'},
      },
    },
  },
}
export default urlMap
