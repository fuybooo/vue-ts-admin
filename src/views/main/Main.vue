<template>
  <div>
    main<el-button type="text" @click="logout">{{$t('sys.logout')}}</el-button>
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
