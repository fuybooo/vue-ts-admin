<template>
  <el-container class="h">
    <el-main class="h">
      <div class="common-query">
        <base-form :schema="schema" v-model="form" inline @create="handleClick"></base-form>
      </div>
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        :default-expanded-keys="defaultExpandedKeys"
        :default-checked-keys="defaultCheckedKeys">
      </el-tree>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Schema} from '@/components/common-form/form.model'
  import {fb} from '@/util/common/fns/fns-form'

  @Component({})
  export default class BaseTableDemo extends Vue {
    public schema: Schema[] = []
    public form = fb(this.schema)
    public data = [{
      id: 1,
      label: '一级 2',
      children: [{
        id: 3,
        label: '二级 2-1',
        children: [{
          id: 4,
          label: '三级 3-1-1',
        }, {
          id: 5,
          label: '三级 3-1-2',
          disabled: true,
        }],
      }, {
        id: 2,
        label: '二级 2-2',
        disabled: true,
        children: [{
          id: 6,
          label: '三级 3-2-1',
        }, {
          id: 7,
          label: '三级 3-2-2',
          disabled: true,
        }],
      }],
    }]
    public defaultExpandedKeys = [2, 3]
    public defaultCheckedKeys = [5]

    public handleClick () {
    }
  }
</script>
<style scoped lang="less">

</style>
