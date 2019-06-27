<template>
  <el-container>
    <el-header class="main-header" height="50px">
      <el-row type="flex" justify="center" align="middle">
      <el-col :span="8">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            DEMO菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) of demoMenuList" :key="index" :command="item.name">
              <router-link :to="item.to">{{item.name}}</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="8" class="tac">
        当前菜单：<span class="text-primary">{{current}}</span>
      </el-col>
      <el-col :span="8" class="tar">
        <el-button type="text" @click="logout">{{$t('sys.logout')}}</el-button>
      </el-col>
    </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {demoMenus} from '@/model/project/menus/menus'
  import {listDestValue} from '@/util/common/fns/fns-array'

  @Component({})
  export default class Main extends Vue {
    public demoMenuList = demoMenus
    public current = 'main'
    public created () {
      this.current = listDestValue(demoMenus, this.$route.path, 'to')
    }
    public logout () {
      this.$router.push('login')
    }
    public handleCommand (command: string) {
      this.current = command
    }
  }
</script>
