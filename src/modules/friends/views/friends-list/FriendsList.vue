<template>
  <el-container class="h">
    <el-main class="h">
      <div class="login">
        <div class="login-area" :class="{'has-logged': hasLogged}">
          <template v-if="hasLogged">
            欢迎您，{{username}}
            <el-button type="text" @click="closeWs">退出</el-button>
          </template>
          <div class="login-box" v-else>
            <el-input v-model="username"></el-input>
            <el-button class="mt20 w" type="primary" @click="connectWs">登录</el-button>
          </div>
        </div>
      </div>
      <div class="chat-room" id="chat-room" v-if="hasLogged">
        <div class="chat-content-list" id="chat-content-list">
          <div class="chat-content-item" v-for="(item, i) in chatList">
<!--            两条记录之间的间隔时间超过1分钟则显示时间-->
            <div class="time"></div>
            <div class="content-item-box" :class="{right: isMe(item), sys: messageType.MSG !== item.msgType}">
              <div class="avatar" :class="item.avatar" v-if="messageType.MSG === item.msgType"></div>
              <div>
                <div class="item-title" v-if="messageType.MSG === item.msgType">{{item.username}}</div>
                <div class="item-content" :class="{sys: item.msgType !== messageType.MSG}">
                  <span>{{item.content}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="enter-content">
          <div class="tool"></div>
          <div ref="content" class="content" contenteditable @keyup.enter="send"></div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {getTime} from '@shared/fns.ts'
  import {messageType} from '@shared/model.ts'
  import {createWebsocket} from '@/util/project/fns/fns-ws'
  import {KEY_WS_USERNAME} from '@/model/project/local-storage-keys/keys'
  import { ls, lr, lg } from '@/util/common/fns/fns';
  interface WsMessage {
    time: string
    username: string
    avatar: string
    msgType: number
    content: string
  }

  @Component({})
  export default class FriendsList extends Vue {
    public username = ''
    public gender = 1
    public messageType = messageType
    public chatList: any = []
    public hasLogged = false
    public cbMap = {
      onopen: function () {
        // @ts-ignore
        this.hasLogged = true
      },
      onclose: function () {
        // @ts-ignore
        this.hasLogged = false
      },
      onmessage: function (evt: any) {
        const message: WsMessage = JSON.parse(evt.data)
        if (messageType.SYS_LOGOUT === message.msgType || messageType.SYS_LOGIN === message.msgType) {
          // @ts-ignore
          if (decodeURIComponent(message.username) === this.username) {
            return
          }
        }
        // @ts-ignore
        this.chatList.push(this.getUnescapeMsg(message))
        // @ts-ignore
        this.afterMessage()
      }
    }
    public getUnescapeMsg = (message: WsMessage) => {
      message.username = decodeURIComponent(message.username)
      message.content = decodeURIComponent(message.content)
      return message
    }
    public created () {
      createWebsocket.bind(this)(this.cbMap)
      if (this.$ws) {
        this.hasLogged = true
        this.username = lg(KEY_WS_USERNAME)
        this.gender = Math.random() > 0.5 ? 1 : 0
      }
    }
    public afterMessage () {
      this.$nextTick(() => {
        const chatRoom = document.getElementById('chat-content-list')
        // @ts-ignore
        chatRoom.scrollTop = chatRoom.scrollHeight
      })
    }
    public connectWs () {
      if (!this.username.trim()) {
        this.$error('请填写用户名')
        return
      }
      ls(KEY_WS_USERNAME, this.username)
      this.gender = Math.random() > 0.5 ? 1 : 0
      createWebsocket.bind(this)(this.cbMap, this.username.trim())
    }
    public isMe (item: WsMessage) {
      return item.username === this.username
    }
    public closeWs () {
      if (this.$ws && this.$ws.close) {
        lr(KEY_WS_USERNAME)
        this.username = ''
        this.$ws.close()
      }
    }
    public send () {
      const content = (this.$refs.content as any).textContent
      if (content) {
        this.$ws.send(this.getContent(content));
        (this.$refs.content as any).innerHTML = ''
      }
    }
    public getContent (content: string) {
      return JSON.stringify({
        username: this.username,
        content: content,
        time: getTime(),
        msgType: messageType.MSG,
        avatar: this.gender ? 'boy' : 'girl'
      })
    }
  }

</script>
<style scoped lang="less">

</style>
