<template>
  <el-container class="h">
    <el-main class="h">
      <div class="common-query">
        <base-form :schema="schema" v-model="form" inline @btn-click="handleClick"></base-form>
      </div>
      <base-table
        :columns="columns"
        :url="url"
        :params="params"
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
  import {Column, defaultFilterSplit} from '@/components/common-table/table.model'
  import {Schema} from '@/components/common-form/form.model'
  import {fb} from '@/util/common/fns/fns-form'
  import list from '@/components/common-table/table.query.mixin'
  import format from 'date-fns/format'

  @Component({
    mixins: [list]
  })
  export default class BaseTableDemo extends Vue {
    public schema: Schema[] = [
      {
        label: '搜索',
        prop: 'keyword',
      },
      {
        label: '出生日期',
        prop: 'birthday',
        comp: 'date',
        props: {
          type: 'daterange',
        },
        startProp: 'startBirthday',
        endProp: 'endBirthday',
      },
      {
        label: '生日',
        prop: 'birth',
        comp: 'date',
        props: {
          type: 'date',
        },
        aliasProp: 'birthDate',
      }
    ]
    public form = fb(this.schema)
    public params = this.form
    public url = this.$urls.demo.table
    public columns: Column[] = [
      {
        prop: 'name',
        label: '姓名',
        props: {
          width: 200,
          formatter (r: any, c: any, v: any, i: number) {
            return v + i
          },
          sortable: 'custom',
          filters: [
            {text: '张三', value: '1' + defaultFilterSplit + 'name'}, // 此处的'name'使用filterProp || prop 分隔符 defaultFilterSplit 一般使用该值即可
            {text: '李四', value: '2' + defaultFilterSplit + 'name'},
          ],
        },
        headerSlot: 'nameHeader',
      },
      {
        prop: 'gender',
        label: '性别',
        contentSlot: 'genderContent',
        props: {
          filters: [
            {text: 1, value: 11 + defaultFilterSplit + 'gender'},
            {text: 2, value: 22 + defaultFilterSplit + 'gender'},
          ],
        }
      },
      {
        prop: 'age',
        label: '年龄',
        contentSlot: 'ageContent',
        headerSlot: 'ageHeader',
      },
      {
        slot: 'address'
      },
      {
        prop: 'birthday',
        label: '生日',
        props: {
          formatter (row, col, value) {
            return value ? format(value, 'YYYY-MM-DD') : ''
          }
        },
      }
    ]
    public handleClick = () => {
      console.log('click')
    }
  }
</script>
<style scoped lang="less">

</style>
