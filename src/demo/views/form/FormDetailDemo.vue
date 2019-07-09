<template>
  <el-container class="h">
    <el-header height="24" class="p0i">
      <el-page-header @back="goBack" :content="pageTitle"></el-page-header>
    </el-header>
    <el-main class="h pt20i">
      <el-row>
        <el-col :span="8">
          {{form}}
          <base-form
            ref="form"
            :schema="schema"
            v-model="form"
            is-row
            :inline="false"
            :form-props="formProps"
            @submit="save"
            :form-pattern.sync="formPattern"
          ></base-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {getPageTitle} from '@/util/project/fns/fns-project'
  import {Pattern} from '@/model/common/models'
  import {Schema} from '@/components/common-form/form.model'
  import {fb} from '@/util/common/fns/fns-form'

  @Component({})
  export default class FormDetailDemo extends Vue {
    public pageTitle = ''
    public formPattern = 'create'
    public schema: Schema[] = [
      {
        prop: 'name',
        label: '名称',
        formItemProps: {
          rules: [
            {required: true, message: '必填'},
            {max: 10, min: 3, message: '不合法'},
          ],
        },
      },
    ]
    public form = fb(this.schema)
    public formProps = {
      // rules: {
      //   name: [
      //     {required: true, massage: '必填'},
      //     {max: 10, min: 3, massage: '不合法'},
      //   ]
      // }
    }

    public created () {
      this.formPattern = this.$route.params.pattern
      this.pageTitle = getPageTitle(this.$route.params.pattern as Pattern)
    }

    public goBack = () => {
      window.history.back()
    }

    public save () {
      (this.$refs.form as any).$refs.form.validate((valid: boolean) => {
        if (valid) {
          // todo 使用mongodb保存数据
          this.formPattern = 'view'
        } else {
          return false
        }
      })
    }
  }
</script>
<style scoped lang="less">

</style>
