<template>
  <el-container class="h">
    <el-main class="h">
      <base-table
        :columns="columns"
        :url="url"
        :auto-search="true"
      ></base-table>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Column} from '@/components/common-table/table.model'

  @Component({})
  export default class BaseTableDemo extends Vue {
    public url = this.$urls.demo.table
    public columns: Column[] = [
      {
        prop: 'name',
        label: '姓名',
        props: {
          width: 200
        },
      },
      {
        prop: 'age',
        label: '年龄'
      },
    ]
  }
</script>
<style scoped lang="less">

</style>
