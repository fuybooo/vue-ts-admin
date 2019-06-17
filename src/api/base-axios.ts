import axios, {AxiosInstance} from 'axios'
import config from '@/config/base-config'
import {IUrl, staticPath, urlType} from '@/util/project/urls/urls'

function create (options?: any): AxiosInstance {
  const localAxios = axios.create({
    ...(options || {}),
    baseURL: config.baseURL,
  })
  localAxios.interceptors.request.use((req) => {
    // 添加处理入参的代码
    return req
  })
  localAxios.interceptors.response.use((res) => {
    // 添加返回结果的错误拦截等
    return res.data
  })
  return localAxios
}
const getSafeUrl = (url: string): string => {
  return url.endsWith('/') ? url : url + '/'
}
const getUrl = (url: urlType): IUrl => {
  let urlConfig: IUrl
  if (typeof url === 'string') {
    urlConfig = {url: getSafeUrl(url), isStatic: false}
  } else if (url.isStatic) {
    urlConfig = {url: (url.staticPath || staticPath) + (url.prefix || '') + url.url + '.json', isStatic: true}
  } else {
    urlConfig = {url: getSafeUrl((url.prefix || '') + url.url), isStatic: false}
  }
  return urlConfig
}
const getAxiosRes = (url: urlType, params: any, fn: () => any) => {
  const urlConfig = getUrl(url)
  if (urlConfig.isStatic) {
    return axios.get(urlConfig.url, params)
  } else {
    return fn()
  }
}
const methods: any = {
  get (url: urlType, params = {}, axiosInstance: AxiosInstance): any {
    return getAxiosRes(url, {params}, () => axiosInstance.get(getUrl(url).url, {params}))
  },
  post (url: urlType, data = {}, axiosInstance: AxiosInstance): any {
    return getAxiosRes(url, {params: data}, () => axiosInstance.post(getUrl(url).url, data))
  },
  put (url: urlType, data = {}, axiosInstance: AxiosInstance): any {
    return getAxiosRes(url, {params: data}, () => axiosInstance.put(getUrl(url).url, data))
  },
  delete (url: urlType, data = {}, axiosInstance: AxiosInstance): any {
    return getAxiosRes(url, {params: data}, () => axiosInstance.delete(getUrl(url).url, data))
  },
}
const defAxios = create()
export const request = (url: urlType, data = {}, method = 'post', axiosInstance = defAxios) => {
  return methods[method](url, data, axiosInstance)
}
export default {
  request,
  ...methods,
  create,
}
