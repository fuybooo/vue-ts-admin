<template>
  <el-container class="h">
    <el-main class="h">
      <base-table
        :columns="columns"
        :url="url"
      >
        <template slot="address">
          <el-table-column prop="address" label="slot地址"></el-table-column>
        </template>
<!--        此处一般不需要作用域，根据需要进行解构 v-slot:ageHeader={column}-->
        <template v-slot:ageHeader>
          <span>不仅仅是标题</span>
        </template>
        <template v-slot:ageContent="{row}">
          <span>不仅仅是内容{{row}}</span>
        </template>
        <template slot="nameHeader">
          <span>slot name header</span>
        </template>
        <template slot="genderContent">
          <span>slot genderContent</span>
        </template>
      </base-table>
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
          width: 200,
          formatter (r: any, c: any, v: any, i: number) {
            return v + i
          }
        },
        headerSlot: 'nameHeader',
      },
      {
        prop: 'gender',
        label: '性别',
        contentSlot: 'genderContent',
      },
      {
        prop: 'age',
        label: '年龄',
        contentSlot: 'ageContent',
        headerSlot: 'ageHeader',
      },
      {
        slot: 'address'
      }
    ]
  }
</script>
<style scoped lang="less">

</style>
