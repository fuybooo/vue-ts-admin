import {guid} from '@/util/common/fns/fns'
import {Column, defaultFilterSplit} from '@/components/common-table/table.model'
import {setProperty} from '@/util/common/fns/fns-common'

export default {
  created () {
    // @ts-ignore
    const params = JSON.parse(this.$route.query[this.queryKey || 'q'] || '{}')
    // 给过滤项赋值
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    const filteredPropList = this.columns.filter((col: Column) => col.props && col.props.filters).map((col: Column) => col.filterProp || col.prop)
    filteredPropList.forEach((item: string) => {
      if (params[item] !== undefined) {
        // @ts-ignore
        // tslint:disable-next-line:max-line-length
        setProperty(this.columns, item, {props: {filteredValue: params[item].split(',').map(v => v + (this.filterSplit || defaultFilterSplit) + item)}})
      }
    })
    // 给表单赋值
    // @ts-ignore
    this.form = {...this.form, ...params}
    // 此时需要按照url地址栏的页码进行查询 (即不按照第一页去查)
    // @ts-ignore
    this.list(false)
    // 开始侦听queryObj的变化，当queryObj变化时，进行查询
    // @ts-ignore
    if (this.autoSearch !== false) {
      // @ts-ignore
      this.$watch('form', function () {
        // @ts-ignore
        this.list()
      }, {deep: true})
    }
  },
  methods: {
    // 查询方法
    list (first = true) {
      // 查询条件改变时触发查询
      // @ts-ignore
      this.params = {
        // @ts-ignore
        ...this.form,
        _uuid: guid(), // 当没有条件改变时也触发查询
        _first: first,
      }
    },
  },
}
