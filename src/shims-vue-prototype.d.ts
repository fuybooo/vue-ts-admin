// 垫片的正确写法：一定要有这句：import {Vue} from 'vue/types/vue'
import {Vue} from 'vue/types/vue'
import {urlType} from '@/util/project/urls/url-util'
import {AxiosInstance} from 'axios'
import {Urls} from '@/util/project/urls/urls'
import {HttpRes} from '@/model/common/models'

declare module 'vue/types/vue' {
  // 需要扩展的属性
  interface Vue {
    // 自定义vue实例属性
    readonly $urls: Urls
    readonly $req: (url: urlType, data?: any, method?: string, axiosInstance?: AxiosInstance) => Promise<any>
    // 自定义提示方法
    readonly $error: (message: string, title?: string) => void
    readonly $success: (message: string, title?: string) => void
    readonly $tip: (res: HttpRes) => void
  }
}
