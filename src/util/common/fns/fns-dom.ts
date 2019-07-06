/**
 * @Description: 通用的DOM函数写在此处
 * @author fuyongbo@everjiankang.com
 * @date 2019-06-17
 */
/**
 * 给元素添加类
 * @param el
 * @param className
 */
export function addClassName (el: Element, className: string): void {
  if (el) {
    const classList = Array.from(el.classList)
    if (!classList.includes(className)) {
      el.className = [...classList, className].join(' ')
    }
  }
}
/**
 * 给元素删除类
 * @param el
 * @param className
 */
export function removeClassName (el: Element, className: string): void {
  if (el) {
    const classList = Array.from(el.classList)
    if (classList.includes(className)) {
      el.className = classList.filter(item => item === className).join(' ')
    }
  }
}
/**
 * 切换元素的类
 * @param el
 * @param className
 */
export function toggleClassName (el: Element, className: string): void {
  if (el) {
    const classList = Array.from(el.classList)
    if (classList.includes(className)) {
      el.className = classList.filter(item => item !== className).join(' ')
    } else {
      el.className = [...classList, className].join(' ')
    }
  }
}

export function getStyle (selector: string, attr: string, isNumber = true) {
  const el = document.querySelector(selector)
  if (el) {
    if (isNumber) {
      // @ts-ignore
      return Number.parseFloat(window.getComputedStyle(el)[attr]) || 0
    } else {
      // @ts-ignore
      return window.getComputedStyle(el)[attr]
    }
  }
  return 0
}
export function getClientHeight (selector: string) {
  const el = document.querySelector(selector)
  if (el) {
    return el.clientHeight +
      getStyle(selector, 'margin-top') +
      getStyle(selector, 'margin-bottom')
  }
  return 0
}
export function getSpaceHeight (selector: string) {
  return getStyle(selector, 'padding-top') +
    getStyle(selector, 'padding-bottom') +
    getStyle(selector, 'margin-top') +
    getStyle(selector, 'margin-bottom')
}
