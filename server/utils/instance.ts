import common from '../common'
const instances = new Map()
function getInstance (Model, ...args) {
  if (!instances.get(Model)) {
    instances.set(Model, new Model(args))
  }
  return instances.get(Model)
}
function delInstance (Model) {
  try {
    instances.delete(Model)
    common.log(Model, 'log', 'delete')
  } catch (e) {
    common.log(e, 'error')
  }
}
export default {
  instances,
  getInstance,
  delInstance,
}
