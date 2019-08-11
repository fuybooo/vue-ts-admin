import {State} from '@/stores/states'
import {Menu} from '@/components/common-menu/menu.model'
import {toggleLangSetting} from '@/stores/mutation-types'
import {setMenus} from '@/stores/mutation-types'

export default {
  [toggleLangSetting] (state: State, setting: boolean) {
    state.showLangSetting = setting
  },
  [setMenus] (state: State, menus: Menu[]) {
    state.menus = menus
  },
}
