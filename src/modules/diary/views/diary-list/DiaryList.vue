<template>
  <el-container class="h">
    <el-main class="h">
      <div class="common-query">
        <base-form :schema="schema" v-model="form" inline></base-form>
      </div>
      <base-table
        ref="table"
        :url="url"
        :columns.sync="columns"
        :params.sync="form"
      >
      </base-table>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Column, columnWidth} from '@/components/common-table/table.model'
  import {Schema} from '@/components/common-form/form.model'
  import {fb} from '@/util/common/fns/fns-form'
  import {HttpRes} from '@/model/common/models'

  @Component({})
  export default class DiaryList extends Vue {
    public schema: Schema[] = [
      {
        prop: 'keywords',
        label: '搜索',
      }
    ]
    public form = fb(this.schema)
    public url = this.$urls.diary.list
    public columns: Column[] = [
      {
        prop: 'name',
        label: '名称',
      },
      {
        prop: 'code',
        label: '编码',
      },
    ]
  }
</script>
<style scoped lang="less">

</style>
