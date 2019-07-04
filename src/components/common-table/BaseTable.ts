import Vue, {VNodeChildren} from 'vue'
import {Column} from '@/components/common-table/table.model'
import {HttpRes} from '@/util/project/urls/url-util'
Vue.component('BaseTable', {
  render (createElement: typeof Vue.prototype.$CreateElement) {
    const defaultTableAttrs = {
      ref: 'table',
      class: 'base-table',
    }
    const tableAttrs = {
      ...defaultTableAttrs,
      ...this.tableAttrs,
    }
    const defaultTableProps = {
      data: [],
      border: true,
    }
    const tableProps = {
      ...defaultTableProps,
      ...this.tableProps,
      // @ts-ignore
      ...(this.remoteData.length === 0 ? {} : { data: this.remoteData }),
    }
    return createElement('el-table', {
      props: tableProps,
      ...tableAttrs,
      on: getTableEvent.bind(this)(),
    }, createColumns.bind(this)(createElement))
  },
  created () {
    // 初始化列表
    if (this.url && this.autoSearch) {
      this.search()
    }
  },
  methods: {
    search () {
      // 分页 防抖 滚动加载
      this.$req(this.url, this.params).then((res: HttpRes) => {
        if (res.head.errCode === 0) {
          // 改变remoteData之后会自动执行render
          this.remoteData = res.data.results
        }
      })
    },
  },
  data () {
    return {
      remoteData: [],
    }
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    url: {
      type: [Object, String],
    },
    params: {
      type: Object,
      default () {
        return {}
      },
    },
    autoSearch: {
      type: Boolean,
      default: true,
    },
    tableKey: {
      type: String,
      default: 'results',
    },
    tableAttrs: {
      type: Object,
      default () {
        return {}
      },
    },
    tableProps: {
      type: Object,
      default () {
        return {}
      },
    },
  },
})

function createColumns (createElement: typeof Vue.prototype.$CreateElement): VNodeChildren {
  // @ts-ignore
  const me = this
  let columns: VNodeChildren
  columns = me.columns.map((col: Column) => {
    if (col.slot || col.headerSlot || col.contentSlot) {
      // 使用全slot
      if (col.slot && !col.headerSlot && !col.contentSlot) {
        return me.$slots[col.slot]
      } else {
        if (col.headerSlot) {
          if (col.contentSlot) {
            // header + content
            return createElement('el-table-column', {
              props: getColumnProps.bind(me)(col),
              // @ts-ignore
              // tslint:disable-next-line:max-line-length
              scopedSlots: {default: (props: any) => createElement('span', me.$scopedSlots[col.contentSlot]({...props})), header: (props: any) => createElement('span', me.$scopedSlots[col.headerSlot]({...props}))},
            })
          } else {
            // only header
            return createElement('el-table-column', {
              props: getColumnProps.bind(me)(col),
              // @ts-ignore
              // tslint:disable-next-line:max-line-length
              scopedSlots: {header: (props: any) => createElement('span', me.$scopedSlots[col.headerSlot]({...props}))},
            })
          }
        } else {
          if (col.contentSlot) {
            // only content
            return createElement('el-table-column', {
              props: getColumnProps.bind(me)(col),
              // @ts-ignore
              // tslint:disable-next-line:max-line-length
              scopedSlots: {default: (props: any) => createElement('span', me.$scopedSlots[col.contentSlot]({...props}))},
            })
          }
        }
      }
    } else if (col.prop) {
      return createElement('el-table-column', {
        props: getColumnProps.bind(me)(col),
      })
    }
  })
  return columns
}
function getColumnProps (col: Column) {
  const defaultColumnProps = {
    prop: col.prop,
    label: col.label,
  }
  return {
    ...defaultColumnProps,
    ...(col.props || {}),
  }
}
// el-table绑定的事件
function getTableEvent () {
  // @ts-ignore
  const me = this
  return {
    'select' () {
      me.$emit('select', ...arguments)
    },
    'select-all' () {
      me.$emit('select-all', ...arguments)
    },
    'selection-change' () {
      me.$emit('selection-change', ...arguments)
    },
    'cell-mouse-enter' () {
      me.$emit('cell-mouse-enter', ...arguments)
    },
    'cell-mouse-leave' () {
      me.$emit('cell-mouse-leave', ...arguments)
    },
    'cell-click' () {
      me.$emit('cell-click', ...arguments)
    },
    'cell-dblclick' () {
      me.$emit('cell-dblclick', ...arguments)
    },
    'row-click' () {
      me.$emit('row-click', ...arguments)
    },
    'row-contextmenu' () {
      me.$emit('row-contextmenu', ...arguments)
    },
    'row-dblclick' () {
      me.$emit('row-dblclick', ...arguments)
    },
    'header-click' () {
      me.$emit('header-click', ...arguments)
    },
    'header-contextmenu' () {
      me.$emit('header-contextmenu', ...arguments)
    },
    'sort-change' () {
      me.$emit('sort-change', ...arguments)
    },
    'filter-change' () {
      me.$emit('filter-change', ...arguments)
    },
    'current-change' () {
      me.$emit('current-change', ...arguments)
    },
    'header-dragend' () {
      me.$emit('header-dragend', ...arguments)
    },
    'expand-change' () {
      me.$emit('expand-change', ...arguments)
    },
  }
}
