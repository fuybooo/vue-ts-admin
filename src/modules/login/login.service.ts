import {sc} from '@/util/common/fns/fns'
import {KEY_PASSWORD, KEY_TOKEN, KEY_USERNAME, KEY_UID, KEY_TYPE} from '@/model/project/local-storage-keys/keys'
import {mode} from '@/config/base-config'
import {HttpRes} from '@/model/common/models'
// tslint:disable-next-line:no-var-requires
const ENV = require('../../../shared/env.js')

export function login (username: string, password: string) {
  // @ts-ignore
  const me = this
  me.$req(me.$urls.login.login, mode === ENV.DEV_MODE.LOCAL_NODE ? {
    username,
    password,
  } : {
    name: username,
    password,
  }).then((res: HttpRes) => {
    if (res.head.errCode === 0) {
      // 设置token 用户信息等
      sc(KEY_TOKEN, res.data.token)
      sc(KEY_UID, res.data.uid)
      sc(KEY_USERNAME, username)
      sc(KEY_TYPE, res.data.type)
      if (mode !== ENV.DEV_MODE.LOCAL_NODE) {
        sc(KEY_PASSWORD, password)
      }
      me.$success(me.$t('login.tip.loginSuccess') as string)
      me.$router.push({name: 'main'})
    }
  })
}
