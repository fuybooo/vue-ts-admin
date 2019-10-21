<template>
  <el-container class="h">
    <el-main class="h">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import '@/modules/plan/assets/style.less'

  @Component({})
  export default class Plan extends Vue {
  }
</script>
<style scoped lang="less">

</style>
