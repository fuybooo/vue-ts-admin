import {Menu} from '@/components/common-menu/menu.model'

export interface State {
  showLangSetting: boolean
  menus: Menu[]
}

export default {
  showLangSetting: true, // 是否显示语言选择器
  menus: [],
}
