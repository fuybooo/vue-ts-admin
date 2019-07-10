import Vue from 'vue'
import '@/components/common-form/BaseForm'
import '@/components/common-table/BaseTable'
import '@/components/common-view-html/BaseViewHtml'
import LangSetting from '@/components/lang-setting/LangSetting.vue'
import BaseConfirm from '@/components/common-confirm-button/BaseConfirm.vue'

// 注册全局组件
Vue.component('LangSetting', LangSetting)
Vue.component('BaseConfirm', BaseConfirm)
