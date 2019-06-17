/**
 * @Description: 表单相关的方法
 * @author fuyongbo@everjiankang.com
 * @date 2019-06-17
 */
export function transferRules (rules: any) {
  const newRules: any = {}
  const keys = Object.keys(rules)
  keys.forEach(item => newRules[item] = rules[item].map((rule: any) => {
    let message: string
    if ('required' in rule) {
      // @ts-ignore
      message = this.$t(rule.message)
    } else if ('max' in rule || 'min' in rule) {
      // @ts-ignore
      message = this.$tc(rule.message, rule.max || rule.min)
    } else {
      // @ts-ignore
      message = this.$t(rule.message)
    }
    return {
      ...rule,
      message,
    }
  }))
  return newRules
}
