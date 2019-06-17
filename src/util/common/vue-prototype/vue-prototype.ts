import Vue from 'vue'
import {Notification} from 'element-ui'
import {MessageType} from 'element-ui/types/message'
import urlMap from '@/util/project/urls/urls'
import {request} from '@/api/base-axios'
import {i18n} from '@/config/i18n-config'
// notify 通知
function notify (type: MessageType, message: string, title: string | undefined) {
  // @ts-ignore
  Notification[type]({message, title:  title || i18n.t('common.Tip')})
}
Vue.prototype.$error = (message: string, title?: string) => {
  notify('error', message, title)
}
Vue.prototype.$success = (message: string, title?: string) => {
  notify('success', message, title)
}
// 在vue原型上挂载常用属性
Vue.prototype.$urls = urlMap
// 在vue原型上挂载常用函数
Vue.prototype.$req = request
