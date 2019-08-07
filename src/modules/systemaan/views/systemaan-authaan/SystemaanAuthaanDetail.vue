<template>
  <el-container class="h">
    <el-main class="h">
      <el-row>
        <el-col :span="8">
          <base-form
            ref="form"
            :schema="schema"
            v-model="form"
            is-row
            :inline="false"
            :form-pattern.sync="formPattern"
            @submit="submit"
          ></base-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Pattern, HttpRes} from '@/model/common/models'
  import {Schema} from '@/components/common-form/form.model'
  import {fb, setFormData} from '@/util/common/fns/fns-form'

  @Component({})
  export default class SystemaanAuthaanDetail extends Vue {
    public formPattern: Pattern = 'create'
    public id: any = null
    // 验证规则写在Schema中
    public schema: Schema[] = [
      {
        prop: 'username',
        label: '用户名',
      },
    ]
    public form = fb(this.schema)
    public created () {
      this.formPattern = this.$route.params.pattern as Pattern
      if (this.formPattern === 'view' || this.formPattern === 'edit') {
        this.id = this.$route.params.id
        this.search()
      }
    }

    public search () {
      this.$req(this.$urls.user.get, {id: this.id}).then((res: HttpRes) => {
        if (res.head.errCode === 0) {
          this.updateForm(res.data)
        }
      })
    }

    public updateForm (formData: any) {
      setFormData(this.form, formData)
    }

    public submit () {
      (this.$refs.form as any).$refs.form.validate((valid: boolean) => {
        if (valid) {
          this.$req(this.$urls.user[this.formPattern === 'create' ? 'create' : 'update'], {...this.form, ...(this.id ? {id: this.id} : {})}).then((res: HttpRes) => {
            if (res.head.errCode === 0) {
              this.id = res.data.id
              this.$router.push({name: 'systemaan-authaan-detail', params: {pattern: 'view', id: res.data.id}})
              this.formPattern = 'view'
            }
            this.$tip(res)
          })
        } else {
          return false
        }
      })
    }
  }
</script>
<style scoped lang="less">

</style>
