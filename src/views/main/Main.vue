<template>
  <el-container class="h">
    <el-header class="main-header" id="main-header" height="50px">
      <main-header></main-header>
    </el-header>
    <el-main class="h">
      <el-container class="h">
        <el-header height="24">
          <page-header class="pt20"></page-header>
        </el-header>
        <el-main class="h"><router-view></router-view></el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import MainHeader from '@/views/main/MainHeader.vue'

  @Component({components: {MainHeader}})
  export default class Main extends Vue {
  }
</script>
