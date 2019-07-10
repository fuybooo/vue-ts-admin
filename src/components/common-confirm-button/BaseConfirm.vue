<template>
  <el-popover
    :placement="placement"
    :width="width"
    v-model="visible">
    <p v-html="content"></p>
    <div class="base-confirm-btn-box tar m0">
      <el-button size="mini" plain @click="visible = false">取消</el-button>
      <el-button size="mini" type="primary" @click="handleOk">确定</el-button>
    </div>
    <el-button slot="reference" type="danger" plain>{{btnText}}</el-button>
  </el-popover>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator'

  @Component({})
  export default class BaseConfirm extends Vue {
    @Prop({default: 'top'}) placement: string | undefined
    @Prop({default: '160'}) width: string | undefined
    @Prop({default: '确认删除？'}) content: string | undefined
    @Prop({default: '删除'}) btnText: string | undefined
    public visible = false
    public handleOk () {
      this.$emit('confirm')
      this.visible = false
    }
  }
</script>
<style scoped lang="less">
  .base-confirm-btn-box {
    .el-button.el-button--mini {
      padding: 4px 10px;
    }
  }
</style>
