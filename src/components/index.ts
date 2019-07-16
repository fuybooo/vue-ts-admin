import Vue from 'vue'
import '@/components/common-form/BaseForm'
import '@/components/common-table/BaseTable'
import '@/components/common-view-html/BaseViewHtml'
import BaseMenu from '@/components/common-menu/BaseMenu'
import BaseConfirm from '@/components/common-confirm-button/BaseConfirm.vue'
import LangSetting from '@/components/lang-setting/LangSetting.vue'
import PageHeader from '@/components/page-header/PageHeader.vue'

// 注册全局组件
Vue.component('LangSetting', LangSetting)
Vue.component('BaseConfirm', BaseConfirm)
Vue.component('PageHeader', PageHeader)
Vue.component('BaseMenu', BaseMenu)
