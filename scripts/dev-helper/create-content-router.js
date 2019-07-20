const util = require('./util')
const moduleConfig = require('./create-config')
function getContent () {
  const mn = util.getLineName(moduleConfig.module.name)
  const mt = moduleConfig.module.title
  const importInfo = moduleConfig.pages.map(item => (
    `import ${util.getClassName(mn, util.getLineName(item.name))} from '@/modules/${mn}/views/${mn}-${util.getLineName(item.name)}/${util.getClassName(mn, util.getLineName(item.name))}.vue'` +
    (item.dialogDetail ? '' : `
import ${util.getClassName(mn, util.getLineName(item.name))}Detail from '@/modules/${mn}/views/${mn}-${util.getLineName(item.name)}/${util.getClassName(mn, util.getLineName(item.name))}Detail.vue'
`))).join('')
  const childrenInfo = moduleConfig.pages.map(item => (`{
      path: '${mn}-${util.getLineName(item.name)}',
      name: '${mn}-${util.getLineName(item.name)}',
      component: ${util.getClassName(mn, util.getLineName(item.name))},
      meta: {
        title: '${item.title}',
      },
    },` + (item.dialogDetail ? '' : `
    {
      path: '${mn}-${util.getLineName(item.name)}-detail',
      name: '${mn}-${util.getLineName(item.name)}-detail',
      component: ${util.getClassName(mn, util.getLineName(item.name))}Detail,
      meta: {
        title: '${item.title}详情',
        parentName: '${mn}-${util.getLineName(item.name)}',
      },
    },`))).join('\n')
  return (
    `import {ProRouteConfig} from '@/model/project/route/route.model'
import ${util.upperCaseFirst(mn)} from '@/modules/${mn}/views/${util.upperCaseFirst(mn)}.vue'
${importInfo}
const router: ProRouteConfig = {
  path: '${mn}',
  name: '${mn}',
  component: ${util.upperCaseFirst(mn)},
  children: [
    ${childrenInfo}
  ],
  meta: {
    title: '${mt}',
  },
}
export default router
`)
}
module.exports = getContent
