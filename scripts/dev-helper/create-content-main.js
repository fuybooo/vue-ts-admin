const util = require('./util')
const moduleConfig = require('./create-config')
function getContent () {
  const mn = util.getLineName(moduleConfig.module.name)
  return (
    `<template>
  <el-container class="h">
    <el-main class="common-el-main-padding h">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class ${util.upperCaseFirst(mn)} extends Vue {
  }
</script>
<style scoped lang="less">

</style>
`)
}
module.exports = getContent
