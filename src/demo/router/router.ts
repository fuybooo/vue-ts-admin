import {RouteConfig} from 'vue-router'
import Demo from '@/demo/Demo.vue'
import BaseFormDemo from '@/demo/views/form/BaseFormDemo.vue'
import Checkbox from '@/demo/views/checkbox/Checkbox.vue'
import SlotFormDemo from '@/demo/views/form/SlotFormDemo.vue'
import BaseTableDemo from '@/demo/views/table/BaseTableDemo.vue'
import FunctionTest from '@/demo/views/html/FunctionTest.vue'

const demoRouter: RouteConfig = {
  path: 'demo',
  alias: '/model', // 与main平级的demo
  component: Demo,
  children: [
    {
      path: 'base-form',
      component: BaseFormDemo,
    },
    {
      path: 'slot-form',
      component: SlotFormDemo,
    },
    {
      path: 'checkbox',
      component: Checkbox,
    },
    {
      path: 'base-table',
      component: BaseTableDemo,
    },
    {
      path: 'function-test',
      component: FunctionTest,
    },
  ],
}
export default demoRouter
