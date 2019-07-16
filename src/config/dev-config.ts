const debugMap: any = {
  // 如果匹配到url中包含 /unify/ 则将请求发送到 http://api.dev4.everjiankang.com.cn/ 中去
  '/unify/': 'http://api.dev4.everjiankang.com.cn/',
}
export function debugReq (req: any) {
  const debugKey = Object.keys(debugMap).find(key => req.url.includes(key))
  if (debugKey) {
    req.baseURL = debugMap[debugKey]
  }
}
