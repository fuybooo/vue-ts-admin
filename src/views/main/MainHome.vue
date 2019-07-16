<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class MainHome extends Vue {
    public msg = ''
    public created () {
      this.msg = 'welcome'
    }
  }
</script>
<style scoped lang="less">

</style>
