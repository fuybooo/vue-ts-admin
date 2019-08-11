<template>
  <el-container class="h">
    <el-main class="h">
      <div class="common-query">
        <base-form :schema="schema" v-model="form" inline @create="handleClick"></base-form>
      </div>
      <base-table
        ref="table"
        :url="url"
        :columns.sync="columns"
        :params.sync="form"
      >
        <template v-slot:op="{row}">
          <el-button type="primary" plain @click="toNew(row)">创建</el-button>
          <el-button type="primary" plain @click="toEdit(row)">编辑</el-button>
          <base-confirm class="ml10" @confirm="del(row)"></base-confirm>
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
  export default class SystemDictionary extends Vue {
    public schema: Schema[] = [
      {
        prop: 'keywords',
        label: '搜索',
      }
    ]
    public form = fb(this.schema)
    public url = this.$urls.dictionary.list
    public columns: Column[] = [
      {
        prop: 'typeCode',
        label: '类别编码',
      },
      {
        prop: 'typeName',
        label: '类别名称',
      },
      {
        prop: 'code',
        label: '编码',
      },
      {
        prop: 'name',
        label: '名称',
      },
      {
        contentSlot: 'op',
        label: '操作',
        props: {
          width: columnWidth.w180,
        },
      },
    ]
    // 跳转到创建类别页面
    public handleClick () {
      this.$router.push({name: 'system-dictionary-detail', params: {pattern: 'create', type: 'type'}})
    }
    // 跳转到创建条目的页面
    public toNew ({id}: any) {
      this.$router.push({name: 'system-dictionary-detail', params: {pattern: 'create', type: 'item', id}})
    }
    // 执行删除
    public del (row: any) {
      this.$req(this.$urls.dictionary.delete, {id: row.id}).then((res: HttpRes) => {
        if (res.head.errCode === 0) {
          (this.$refs.table as any).search(true)
        }
        // 根据请求结果进行提示
        this.$tip(res)
      })
    }
    // 跳转到编辑页面
    public toEdit (row: any) {
      this.$router.push({name: 'system-dictionary-detail', params: {pattern: 'edit', type: 'item', id: row.id}})
    }
  }
</script>
<style scoped lang="less">

</style>
