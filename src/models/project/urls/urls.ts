interface Prefix {
  [x: string]: {
    path?: string,
    value: any,
  }
}
const prefix: Prefix = {
  demo: {
    path: 'demo',
    value: {
      table: 'table',
    },
  },
}
const urlMap = {}
export default urlMap
