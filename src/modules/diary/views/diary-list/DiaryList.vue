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
        :handle-result="handleResult"
      >
        <template v-slot:expand="props">
          {{testProps(props)}}
        </template>
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
        prop: 'expand',
        props: {
          type: 'expand'
        },
      },
      {
        prop: 'date',
        label: '日期',
        props: {
          width: columnWidth.date,
        },
      },
      {
        prop: 'content',
        label: '内容',
      },
    ]
    // 测试
    public handleResult = () => {
      return [
        {
          date: '2019-01-01',
          content: '今天加入了一个群聊',
        },
        {
          date: '2019-01-02',
          content: '今天加入了一个群聊',
        },
        {
          date: '2019-01-03',
          content: '今天加入了一个群聊',
        },
      ]
    }
    public testProps (p: any) {
      console.log(p)
    }
  }
</script>
<style scoped lang="less">

</style>
