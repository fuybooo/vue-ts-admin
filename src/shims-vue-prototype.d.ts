// 垫片的正确写法：一定要有这句：import {Vue} from 'vue/types/vue'
import {Vue} from 'vue/types/vue'

declare module 'vue/types/vue' {
  // 需要扩展的属性

  interface Vue {
    // 自定义vue实例属性
    readonly $urls: any
    readonly $req: any
    // vue引用的方法，属性等
    readonly validate: any
    // 自定义提示方法
    readonly $error: any
    readonly $success: any
  }
}
