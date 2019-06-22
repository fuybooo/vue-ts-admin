<template>
  <div>
    main<el-button type="text" @click="logout">{{$t('sys.logout')}}</el-button>
    <hr>
    <ul>
      <li><router-link to="/main/demo/base-form">base-demo-demo</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class Main extends Vue {
    public logout () {
      this.$router.push('login')
    }
  }
</script>
