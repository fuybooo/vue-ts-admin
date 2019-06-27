/**
 * @Description: 基础而且通用的函数卸载此处
 * @author fuyongbo@everjiankang.com
 * @date 2019-06-17
 */
// 简化localStorage.getItem的写法
export function lg (key: string): string {
  return localStorage.getItem(key) || ''
}

// 简化localStorage.setItem的写法
export function ls (key: string, value: string): void {
  localStorage.setItem(key, value)
}

export function guid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // tslint:disable-next-line:no-bitwise
    const r = Math.random() * 16 | 0
    // tslint:disable-next-line:no-bitwise
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

/**
 * 根据属性获取值
 * @example getProp.bind({a:{b:1}})('a.b') 即可得到该对象中a.b的值
 * @param prop
 */
export function getProp (prop: string): any {
  if (!prop) {
    return null
  }
  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  return prop.split('.').reduce((p, c) => (p && p[c] && typeof p[c] === 'string') ? p[c] : ((p && typeof p[c] !== 'undefined') ? p[c] : null), this)
}

export function setProp (prop: string | undefined, value: any): void {
  if (!prop) {
    return
  }
  const path = prop.split('.')
  if (path.length > 1) {
    // @ts-ignore
    if (!this[path[0]]) {
      // @ts-ignore
      this[path[0]] = {}
    }
    // @ts-ignore
    let obj: any = this[path[0]]
    path.slice(1, path.length - 1).forEach(p => {
      obj = obj[p]
      if (!obj) {
        obj = {}
      }
    })
    obj[path[path.length - 1]] = value
  } else {
    // @ts-ignore
    this[path[0]] = value
  }
}
/**
 * @Description: 深度trim对象
 * @param obj 原对象
 * @param filterNone 是否删除 '' null undefined
 * @param onlyClone 是否为深拷贝，注意仅为深拷贝时，第二个参数需保证为false
 * @return 返回一个新的对象
 * @author fuyongbo@everjiankang.com
 * @date 2019-06-27
 */
export function deepTrim (obj: any, filterNone = false, onlyClone = false) {
  let type = ''
  switch (typeof obj) {
    case 'object':
      if (Array.isArray(obj)) {
        type = 'array'
      } else if (obj) {
        type = 'object'
      }
      break
    case 'string':
      return onlyClone ? obj : obj.trim()
    default:
      return obj
  }
  const newObj: any = type === 'array' ? [] : (type === 'object' ? {} : obj)
  if (type) {
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        const objValue = obj[i]
        if (filterNone) {
          if ((typeof objValue === 'string' && objValue.trim() === '') || objValue === null || objValue === undefined) {
            continue
          }
        }
        newObj[type === 'array' ? newObj.length : i] = deepTrim(objValue, filterNone, onlyClone)
      }
    }
  }
  return newObj
}

export function deepClone (obj: any) {
  return deepTrim(obj, false, true)
}
