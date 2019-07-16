<template>
  <el-container class="h">
    <el-main class="h">
      <div class="login-wrap">
        <div class="login-box">
          <div class="logo"></div>
          <div class="login-form">
            <el-form :model="formModel" :rules="rules" size="medium" ref="form" label-position="left" label-width="0px">
              <el-form-item>
                <h3 class="title">{{$t('login.title')}}</h3>
              </el-form-item>
              <el-form-item label="" prop="name">
                <el-input v-model="formModel.name" :placeholder="$t('login.inputUser')">
                  <template slot="prepend"><i class="el-icon-user"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item label="" prop="pwd">
                <el-input type="password" v-model="formModel.pwd" :placeholder="$t('login.inputPassword')">
                  <template slot="prepend"><i class="el-icon-lock"></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop="type">
                <el-row :gutter="10">
                  <el-col :span="12">
                    <el-checkbox v-model="formModel.remember" checked>{{$t('login.remember')}}</el-checkbox>
                  </el-col>
                  <el-col :span="12" class="tar">
                    <router-link to="/register">{{$t('login.register')}}</router-link>
                    /
                    <router-link to="/forgot">{{$t('login.forgot')}}</router-link>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login()" class="login-button">{{$t('sys.login')}}</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import './assets/less/index.less'
  import {transferRules} from '@/util/common/fns/fns-form'
  import {dc, gc, sc} from '@/util/common/fns/fns'
  import {KEY_PASSWORD, KEY_TOKEN, KEY_USERNAME} from '@/model/project/local-storage-keys/keys'

  const rules = {
    name: [
      {required: true},
      {max: 30},
    ],
    pwd: [
      {required: true},
      {max: 20},
    ],
  }
  @Component({})
  export default class Login extends Vue {
    public formModel = {
      name: '13260357718',
      pwd: 'Aa111111',
      remember: true,
    }
    public rules: any = rules
    private created () {
      if (gc(KEY_TOKEN)) {
        this.$router.push('/main')
      }
      this.rules = transferRules.bind(this)(rules)
    }
    public login () {
      (this.$refs.form as any).validate((valid: boolean) => {
        if (!valid) {
          this.$error(this.$t('login.tip.userNameOrPasswordError') as string)
          return false
        } else {
          this.$req(this.$urls.login.login, {
            name: this.formModel.name,
            password: this.formModel.pwd,
          }).then(res => {
            if (res.head.errCode === 0) {
              // 设置token 用户信息等
              dc(KEY_TOKEN)
              dc(KEY_USERNAME)
              dc(KEY_PASSWORD)
              sc(KEY_TOKEN, res.data.token)
              if (this.formModel.remember) {
                sc(KEY_USERNAME, this.formModel.name)
                sc(KEY_PASSWORD, this.formModel.pwd)
              }
              this.$success(this.$t('login.tip.loginSuccess') as string)
              this.$router.push('main')
            }
          })
        }
      })
    }
  }
</script>
