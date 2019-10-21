<template>
  <div>
    <h1>产品列表</h1>
    <ul>
      <li><router-link :to="{name: 'login'}">管理系统</router-link></li>
      <li><router-link to="/diary/diary-list">日记</router-link></li>
      <li><router-link to="/plan/plan-list">计划</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class ProductList extends Vue {
  }
</script>
<style scoped lang="less">

</style>
