/**
 * @Description: 操作树的函数
 * @author fuyongbo@everjiankang.com
 * @date 2019-06-27
 */

/**
 * 将数组转换为树
 * @param array
 * @returns {any[]}
 */
function convertListToTree (array: any[]) {
  const list = []
  for (const item of array) {
    if (isRoot(item, array)) {
      const children = getChildren(item, array)
      if (children.length > 0) {
        item.children = children
        item.isLeaf = false
      } else {
        item.isLeaf = true
      }
      list.push(item)
    }
  }
  return list
}


/**
 * 判断节点是否为根
 * @param item
 * @param array
 * @returns {boolean}
 */
function isRoot (item: any, array: any[]): boolean {
  const parentString = getParentIdStr(item)
  if (parentString && item[parentString]) {
    for (const a of array) {
      if (a.id === item[parentString]) {
        return false
      }
    }
  }
  return true
}

/**
 * 获取所有的子元素
 * @param item
 * @param array
 * @returns {any[]}
 */
export function getChildren (item: any, array: any[]) {
  const children = []
  for (const data of array) {
    const parentId = getParentIdStr(data)
    if (item.id === data[parentId]) {
      const childList = getChildren(data, array)
      if (childList.length > 0) {
        data.children = childList
        data.isLeaf = false
      } else {
        data.isLeaf = true
      }
      children.push(data)
    }
  }
  return children
}

let resNode

/**
 * 根据 value 和 key 获取当前树中的节点
 */
export function getNodeByValue (nodes: any[], value: any, key = 'id') {
  resNode = null
  reGetNodeByValue(nodes, value, key)
  return resNode
}

function reGetNodeByValue (nodes: any[], value: any, key = 'id') {
  for (let i = 0, l = nodes.length; i < l; i++) {
    const node = nodes[i]
    if (node.origin[key] === value) {
      resNode = node
      break
    } else {
      if (node.children && node.children.length) {
        reGetNodeByValue(node.children, value, key)
      }
    }
  }
}


/**
 * 获取父id的key
 * @param data
 * @returns {string}
 */
function getParentIdStr (data: any): string {
  const parentIds = ['pid', 'parentid', 'parentId', 'pId', 'parent_id']
  for (const item of parentIds) {
    if (item in data) {
      return item
    }
  }
  return ''
}
