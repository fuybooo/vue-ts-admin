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
