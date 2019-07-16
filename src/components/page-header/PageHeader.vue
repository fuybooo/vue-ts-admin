<template>
  <el-page-header v-if="!hidden" @back="goBack">
    <template v-slot:content>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item of breadList"><router-link :to="{ name: item.name }">{{item.title}}</router-link></el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </el-page-header>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import {ProRouteConfig} from '@/model/project/route/route.model'
  import {debounce} from '@/util/common/fns/fns'
  import {RouteConfig, Route} from 'vue-router'
  import {getPageTitle} from '@/util/project/fns/fns-project'
  import {Pattern} from '@/model/common/models'

  @Component({})
  export default class PageHeader extends Vue {
    hidden = false
    baseBread = [{name: 'home', title: '首页'}]
    breadList = [...this.baseBread]
    public created () {
    }
    @Watch('$route', {immediate: true})
    routeChange (crtRoute: Route) {
      const me = this
      debounce(function () {
        // 自动根据路由关系生成面包屑导航只能展示简单的通用的导航信息，如果导航信息过于复杂，则需要通过自定义实现
        me.hidden = !!crtRoute.meta.hideBread
        me.breadList = [...me.baseBread, ...(crtRoute.meta.pagePath ? crtRoute.meta.pagePath.map((item: ProRouteConfig, i: number) => {
          return {
            name: item.name,
            title: i === crtRoute.meta.pagePath.length - 1 ? (crtRoute.params.pattern ? getPageTitle(crtRoute.params.pattern as Pattern) : item.meta.title) : item.meta.title,
          }
        }) : [])]
      }, 100)()
    }
    public goBack () {
      this.$router.back()
    }
  }
</script>
<style scoped lang="less">
  .el-page-header .el-breadcrumb {
    line-height: inherit;
  }
</style>
