import {RouteConfig} from 'vue-router'
import Demo from '@/demo/Demo.vue'
import BaseFormDemo from '@/demo/form/BaseFormDemo.vue'

const demoRouter: RouteConfig = {
  path: 'demo',
  alias: '/demo', // 与main平级的demo
  component: Demo,
  children: [
    {
      path: 'base-form',
      component: BaseFormDemo,
    },
  ],
}
export default demoRouter
