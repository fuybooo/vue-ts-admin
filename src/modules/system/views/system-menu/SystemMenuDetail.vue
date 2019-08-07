<template>
  <el-container class="h">
    <el-main class="h">
      <el-row>
        <el-col :span="8">
          {{form}}{{testSchema()}}
          <base-form
            ref="form"
            :schema="schema"
            v-model="form"
            is-row
            :inline="false"
            :form-pattern.sync="formPattern"
            :form-change-done="formChangeDone"
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
  import {getRoot, getAllParentById, getParentId} from '@/util/common/fns/fns-tree'
  import {setProperty} from '@/util/common/fns/fns-common'

  @Component({})
  export default class SystemMenuDetail extends Vue {
    public formPattern: Pattern = 'create'
    public id: any = null
    public originData: any[] = []
    public formChangeDone = false
    // 验证规则写在Schema中
    public schema: Schema[] = [
      {
        prop: 'parentIdList',
        label: '父级',
        pattern: 'view',
        viewValue: '',
      },
      {
        prop: 'name',
        label: '名称',
      },
      {
        prop: 'code',
        label: '唯一编码',
      },
    ]
    public form = fb(this.schema, {parentId: 0})

    public created () {
      this.formPattern = this.$route.params.pattern as Pattern
      this.formChangeDone = false
      // 查询树
      this.searchAll()
    }

    public searchAll () {
      this.$req(this.$urls.menu.list).then((res: HttpRes) => {
        if (res.head.errCode === 0) {
          this.originData = res.data.results
          this.initData()
        }
      })
    }

    public initData () {
      if (this.formPattern === 'view' || this.formPattern === 'edit') {
        this.id = +this.$route.params.id
        this.form.parentId = getParentId(this.originData, this.id)
        const parentList = getAllParentById(this.originData, this.id)
        this.setParentList(parentList)
        this.search()
      } else if (this.formPattern === 'create') {
        const root = getRoot(this.originData)
        const routeId = +this.$route.params.id
        if (routeId === 0) {
          // 创建一级菜单
          this.form.parentId = root.id
          setProperty(this.schema, 'parentIdList', {
            viewValue: root.name,
          })
        } else {
          this.form.parentId = routeId
          const parentList = [...getAllParentById(this.originData, routeId), this.originData.find(item => item.id === routeId)]
          this.setParentList(parentList)
        }
        setTimeout(() => this.formChangeDone = true)
      }
    }

    public setParentList (parentList: any[]) {
      setProperty(this.schema, 'parentIdList', {
        viewValue: parentList.map(item => item.name).join(' / '),
      })
    }

    public search () {
      this.$req(this.$urls.menu.get, {id: this.id}).then((res: HttpRes) => {
        if (res.head.errCode === 0) {
          this.updateForm(res.data)
          // 这段代码保证此前对 form 的修改不会使得表单的isEdited字段变为true，因为这些改变都是赋值操作，不能算作用户的主动修改
          setTimeout(() => this.formChangeDone = true)
        }
      })
    }

    public updateForm (formData: any) {
      setFormData(this.form, formData)
    }

    public submit () {
      (this.$refs.form as any).$refs.form.validate((valid: boolean) => {
        if (valid) {
          this.$req(this.$urls.menu[this.formPattern === 'create' ? 'create' : 'update'], {...this.form, ...(this.id ? {id: this.id} : {})}).then((res: HttpRes) => {
            if (res.head.errCode === 0) {
              // this.id = res.data.id
              // this.$router.push({name: 'system-menu-detail', params: {pattern: 'view', id: res.data.id}})
              // this.formPattern = 'view'
              // this.searchAll()
              // 新增完成之后回到树页面
              let fromQuery: any = {}
              if (this.$route.query && this.$route.query.q) {
                fromQuery = JSON.parse(this.$route.query.q as string)
              }
              fromQuery.currentKey = res.data.id
              this.$router.push({name: 'system-menu', query: {q: JSON.stringify(fromQuery)}})
            }
            this.$tip(res)
          })
        } else {
          return false
        }
      })
    }

    public testSchema () {
      // console.log('testSchema', this.schema)
    }
  }
</script>
<style scoped lang="less">

</style>
