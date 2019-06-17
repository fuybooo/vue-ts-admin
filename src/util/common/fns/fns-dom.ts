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

