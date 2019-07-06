import Vue, {VNodeChildren} from 'vue'
import {Column, defaultFilterSplit} from '@/components/common-table/table.model'
import {HttpRes} from '@/util/project/urls/url-util'
import {debounce, deepClone, deepTrim} from '@/util/common/fns/fns'
import {getClientHeight, getSpaceHeight} from '@/util/common/fns/fns-dom'
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
      size: 'mini',
      height: getHeight.bind(this)(),
    }
    const tableProps = {
      ...defaultTableProps,
      ...this.tableProps,
      // @ts-ignore
      ...(this.remoteData.length === 0 ? {} : { data: this.remoteData }),
    }
    const me = this
    return createElement('div', {
      class: 'base-table-wrap',
    }, [createElement('el-table', {
      props: tableProps,
      ...tableAttrs,
      on: getTableEvent.bind(this)(),
      directives: [
        {
          name: 'loading',
          // @ts-ignore
          value: this.loading === '' ? this.innerLoading : this.loading,
        },
      ],
    }, createColumns.bind(this)(createElement)),
      this.isPagination && tableProps.data.length ? createElement('el-pagination', {
        class: 'base-pagination',
        props: {
          pageSizes: [10, 20, 30, 50, 100],
          background: true,
          layout: 'total, sizes, prev, pager, next, jumper',
          // @ts-ignore
          currentPage: this.currentPage,
          // @ts-ignore
          pageSize: this.pageSize,
          // @ts-ignore
          total: this.total,
        },
        on: {
          'current-change' (currentPage: number) {
            // @ts-ignore
            me.currentPage = currentPage
            // @ts-ignore
            me.search()
          },
          'size-change' (pageSize: number) {
            // @ts-ignore
            me.pageSize = pageSize
            // @ts-ignore
            me.search()
          },
        },
      }) : null])
  },
  created () {
    // 根据url页码初始化分页参数
    // @ts-ignore
    const params = JSON.parse(this.$route.query[this.queryKey] || '{}')
    this.currentPage = params.currentPage || 1
    this.pageSize = params.pageSize || 20
    if (this.autoHeight || this.fixedElements || this.fixedHeight) {
      // 添加监听事件
      window.addEventListener('resize', this.resize)
    }
  },
  destroyed () {
    // 组件销毁时必须移除监听
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    search: debounce(function (first = false) {
      // @ts-ignore
      const me = this
      if (first) {
        me.currentPage = 1
      }
      me.innerLoading = true
      const params = getParams.bind(me)()
      // 更改浏览器参数
      if (me.recordParams) {
        changeRouteParams.bind(me)(params)
      }
      // 分页 防抖 滚动加载
      me.$req(me.url, params).then((res: HttpRes) => {
        if (res.head.errCode === 0) {
          // 改变remoteData之后会自动执行render
          me.innerLoading = false
          me.remoteData = res.data.results
          me.total = res.data.total
        }
      })
    }),
    resize () {
      debounce(calcHeight.bind(this), 100)()
    },
  },
  watch: {
    params: {
      handler (params: any = {}) {
        this.search(params._first)
      },
      deep: true,
      immediate: true,
    },
  },
  data () {
    return {
      remoteData: [],
      innerLoading: false,
      currentPage: 1,
      pageSize: 20,
      total: 0,
      sortField: '',
      sortOrder: '',
      localHeight: null,
      filterMap: {},
      filterParams: {},
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
    loading: {
      type: [Boolean, String],
      default: '',
    },
    isPagination: {
      type: Boolean,
      default: true,
    },
    autoSearch: {
      type: Boolean,
      default: true,
    },
    // 自动计算表格高度
    autoHeight: {
      type: Boolean,
      default: true,
    },
    // 自动计算表格高度时需要排除的元素
    fixedElements: {
      type: String,
      default: '',
    },
    // 自动计算高度时需要排除的高度
    fixedHeight: {
      type: Number,
      default: 0,
    },
    recordParams: {
      type: Boolean,
      default: true,
    },
    queryKey: {
      type: String,
      default: 'q',
    },
    // 用于配置该表格的过滤器分割符（仅在极特殊时配置）
    filterSplit: {
      type: String,
      default: defaultFilterSplit,
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
      // todo 若排序需要支持同时按多个字段排序则需要增加逻辑
      const {prop, order} = arguments[0]
      me.sortField = prop
      me.sortOrder = order
      me.search(true)
      me.$emit('sort-change', ...arguments)
    },
    'filter-change' () {
      // @ts-ignore
      const filterKey: string = Object.keys(arguments[0])[0]
      // @ts-ignore
      const filterValueList: string[] = Object.values(arguments[0])[0]
      if (filterValueList.length) {
        me.filterMap[filterKey] = {
          prop: filterValueList[0].split(me.filterSplit)[1],
          value: filterValueList.map(item => item.split(me.filterSplit)[0]),
        }
      } else {
        me.filterMap[filterKey] = {
          prop: '',
          value: [],
        }
      }
      me.filterParams = {}
      Object.keys(me.filterMap).forEach(key => {
        if (me.filterMap[key].prop) {
          me.filterParams[me.filterMap[key].prop] = me.filterMap[key].value.join()
        }
      })
      me.search(true)
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
// 表格高度
function getHeight () {
  // @ts-ignore
  const me = this
  if (me.autoHeight || me.fixedElements || me.fixedHeight) {
    // 计算表格高度
    calcHeight.bind(me)()
    return me.localHeight
  } else {
    return null
  }
}
// 表格高度
function calcHeight () {
  // @ts-ignore
  const me = this
  const headerHeight = getClientHeight('#main-header')
  const paginationHeight = me.isPagination && ({
    data: [],
    ...me.tableProps,
    ...(me.remoteData.length === 0 ? {} : { data: me.remoteData }),
  }).data.length ? 32 : 0
  const wrapperHeight = getSpaceHeight('.common-el-main-padding.el-main')
  const tableSpaceHeight = getSpaceHeight('.base-table')
  const borderHeight = 1
  // 计算fixed element的高度
  let fixedElementsHeight = 0
  me.fixedElements.split('').forEach((selector: string) => {
    fixedElementsHeight += getClientHeight(selector)
  })
  // 默认会排除的高度 这意味着 当查询条件使用 common-query 时无需传参数即可自动计算
  const defaultFixedElementHeight = getClientHeight('.common-query')
  // tslint:disable-next-line:max-line-length
  me.localHeight = window.innerHeight - headerHeight - paginationHeight - wrapperHeight - tableSpaceHeight - borderHeight - me.fixedHeight - defaultFixedElementHeight
}

function getParams () {
  // @ts-ignore
  const me = this
  const params = deepClone(me.params)
  delete params._uuid
  delete params._first
  return {
    ...params,
    currentPage: me.currentPage,
    pageSize: me.pageSize,
    sortField: me.sortField,
    sortOrder: me.sortOrder,
    ...me.filterParams,
  }
}
function changeRouteParams (params: any) {
  // @ts-ignore
  const me = this
  const query = me.$route.query
  me.$router.replace({
    path: me.$route.path,
    query: {
      ...query,
      [me.queryKey]: JSON.stringify(deepTrim(params, true)),
    },
  })
}
