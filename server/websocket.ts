import * as Route from 'koa-route'
import {getTime, getUrlParams} from '../shared/fns'
import {messageType} from '../shared/model'

let ctxList: any[] = []
const websocket = Route.all('*', (ctx: any) => {
  userLogin(ctx)
  ctx.websocket.on('close', () => {
    userLogout(ctx)
  })
  ctx.websocket.on('message', (message: string) => {
    broadcast(getMessage(messageType.MSG, message, ctx))
  })
})
function getUsername (ctx: any) {
  const params = getUrlParams(ctx.URL.search)
  return params.username
}
function getCrtCtx (ctx: any) {
  const params = getUrlParams(ctx.URL.search)
  return ctxList.find(ctxItem => {
    const ctxItemParams = getUrlParams(ctxItem.URL.search)
    return ctxItemParams.username === params.username
  })
}
function userLogin (ctx: any) {
  const params = getUrlParams(ctx.URL.search)
  if (params.username) {
    if (ctxList.length) {
      const hasSame = ctxList.some(ctxItem => {
        const ctxItemParams = getUrlParams(ctxItem.URL.search)
        return ctxItemParams.username === params.username
      })
      if (!hasSame) {
        ctxList.push(ctx)
        broadcast(getMessage(messageType.SYS_LOGIN, '', ctx))
      }
    } else {
      ctxList.push(ctx)
      broadcast(getMessage(messageType.SYS_LOGIN, '', ctx))
    }
  }
}
function userLogout (ctx: any) {
  if (ctxList.length) {
    const theCtx = getCrtCtx(ctx)
    if (theCtx) {
      ctxList = ctxList.filter(ctxItem => {
        const ctxItemParams = getUrlParams(ctxItem.URL.search)
        const theCtxParams = getUrlParams(theCtx.URL.search)
        return ctxItemParams.username !== theCtxParams.username
      })
      broadcast(getMessage(messageType.SYS_LOGOUT, '', ctx))
    }
  }
}
function broadcast (message: string) {
  console.log('进行广播', ctxList.length)
  if (!ctxList.length) {
    return
  }
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < ctxList.length; i++) {
    ctxList[i].websocket.send(message)
  }
}
function getMessage (msgType: number, message: string, ctx: any) {
  const username = getUsername(ctx)
  const msg: any = {
    time: getTime(),
    username,
    msgType: msgType || messageType.MSG,
    content: message,
  }
  if (message) {
    let originMsg = {}
    try {
      originMsg = JSON.parse(message)
    } catch (e) {
      // 错误提示信息
      originMsg = {}
    }
    Object.assign(msg, originMsg)
  }
  switch (msgType) {
    case messageType.SYS_LOGIN:
      // 提示登录信息
      msg.content = `欢迎${msg.username}进入房间`
      break
    case messageType.SYS_LOGOUT:
      msg.content = `${msg.username}离开房间`
      break
    case messageType.MSG:
      break
    default:
      break
  }
  return JSON.stringify(msg)
}
export default websocket
