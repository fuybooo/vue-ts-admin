<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="18">
      <el-menu :default-active="activeIndex" class="main-header-menu" mode="horizontal" @select="handleSelect">
        <base-menu :menus="menus"></base-menu>
      </el-menu>
    </el-col>
    <el-col :span="6" class="tar">
      <el-button type="text" @click="logout">{{$t('sys.logout')}}</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import {getDefaultMenus} from '@/components/common-menu/menu.fn'
  import {ProRouteConfig} from '@/model/project/route/route.model'
  import {debounce, dc} from '@/util/common/fns/fns'
  import {KEY_TOKEN} from '@/model/project/local-storage-keys/keys'

  @Component({})
  export default class MainHeader extends Vue {
    public menus = getDefaultMenus()
    public activeIndex: string = ''

    public created () {
    }

    @Watch('$route', {immediate: true})
    public routeChange (crtRoute: ProRouteConfig) {
      const me = this
      debounce(() => {
        me.activeIndex = crtRoute.meta.parentName || crtRoute.name
      }, 100)()
    }

    public handleSelect (name: string) {
      this.$router.push({name})
    }

    public logout () {
      dc(KEY_TOKEN)
      this.$router.push({name: 'login'})
    }
  }
</script>
<style scoped lang="less">

</style>
