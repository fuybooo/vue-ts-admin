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
  import {setProperty} from '@/util/common/fns/fns-common'

  @Component({})
  export default class SystemDictionaryDetail extends Vue {
    public formPattern: Pattern = 'create'
    public id: any = null
    public type: string = 'item'
    // 验证规则写在Schema中
    public schema: Schema[] = [
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
    ]
    public form = fb(this.schema)
    public created () {
      this.formPattern = this.$route.params.pattern as Pattern
      this.type = this.$route.params.type
      if (this.formPattern === 'view' || this.formPattern === 'edit' || (this.formPattern === 'create' && this.type === 'item')) {
        this.id = this.$route.params.id
        this.search()
      }
    }

    public search () {
      this.$req(this.$urls.dictionary.get, {id: this.id}).then((res: HttpRes) => {
        if (res.head.errCode === 0) {
          this.updateForm(res.data)
          setProperty(this.schema, 'typeCode', {pattern: 'view'})
          setProperty(this.schema, 'typeName', {pattern: 'view'})
          if (this.formPattern === 'create' && this.type === 'item') {
            this.form.code = ''
            this.form.name = ''
          }
        }
      })
    }

    public updateForm (formData: any) {
      setFormData(this.form, formData)
    }

    public submit () {
      (this.$refs.form as any).$refs.form.validate((valid: boolean) => {
        if (valid) {
          this.$req(this.$urls.dictionary[this.formPattern === 'create' ? 'create' : 'update'], {...this.form, ...(this.id ? {id: this.id} : {})}).then((res: HttpRes) => {
            if (res.head.errCode === 0) {
              this.$router.back()
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
