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
  import {dic} from '@/stores/action-types'
  import {DIC, DicItem} from '@/model/project/dic/dic'
  import {KEY_TYPE} from '@/model/project/local-storage-keys/keys'
  import {gc} from '@/util/common/fns/fns'

  @Component({})
  export default class SystemUserDetail extends Vue {
    public formPattern: Pattern = 'create'
    public id: any = null
    // 验证规则写在Schema中
    public schema: Schema[] = [
      {
        prop: 'username',
        label: '用户名',
      },
      {
        prop: 'type',
        label: '用户类型',
        comp: 'select',
      },
    ]
    public form = fb(this.schema)

    public async created () {
      this.formPattern = this.$route.params.pattern as Pattern
      if (this.formPattern === 'view' || this.formPattern === 'edit') {
        this.id = this.$route.params.id
        this.search()
      }
      // 获取用户类型
      await this.$store.dispatch(dic, DIC.SYS_USER_TYPE)
      // 不允许创建god用户
      let options = this.$store.state.dic.SYS_USER_TYPE.filter((item: DicItem) => item.code !== 'god')
      // 不允许创建级别大于等于自己的用户
      const userType = gc(KEY_TYPE)
      if (userType === 'tenant') {
        options = options.filter((item: DicItem) => item.code !== 'tenant')
      } else if (userType === 'admin') {
        options = options.filter((item: DicItem) => item.code !== 'tenant' && item.code !== 'admin')
      }
      this.schema = setProperty(this.schema, 'type', {props: {options}}) as Schema[]
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
