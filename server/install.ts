import * as mongoose from 'mongoose'
import common from './common'
import base from './base'
import db from './utils/db'
import instance from './utils/instance'
import MenuModel from './models/MenuModel'
import {isDev} from '../shared/env'
import {getTime} from '../shared/fns'
const initLockPath = common.path.join(base.runTime, 'init.lock')
function install () {
  const exist = isDev() ? false : common.fs.existsSync(initLockPath)
  if (exist) {
    console.error('数据库已经初始化过了，不能再次初始化，如果确实要重新初始化，请删除init.lock文件后再次执行')
  } else {
    setupSql()
  }
}
function setupSql () {
  // 连接数据库
  const connect = db.connect()
  const menuModel: MenuModel = instance.getInstance(MenuModel)
  const rootMenu = menuModel.findBy({code: 'all'})
  const result = menuModel.create({
    name: '全部',
    code: 'all',
    parentId: 0,
  })
  connect.then(() => {
    const userCollection = mongoose.connection.db.collection('user')
    userCollection.createIndex({username: 1}, {unique: true})
    const menuCollection = mongoose.connection.db.collection('menu')
    menuCollection.createIndex({name: 1})
    menuCollection.createIndex({code: 1}, {unique: true})
    rootMenu.then((res: any) => {
      if (!res) {
        result.then(() => {
          console.log('根菜单创建成功')
          process.exit(0)
        })
      }
    })
    common.fs.writeFileSync(initLockPath, `${getTime()} 初始化完成`)
  })
}

install()
