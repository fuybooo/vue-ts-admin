import {State} from '@/stores/states'
import {toggleLangSetting} from '@/stores/mutation-types'

export default {
  [toggleLangSetting] (state: State, setting: boolean) {
    state.showLangSetting = setting
  },
}
