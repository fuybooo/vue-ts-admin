export interface Column {
  prop?: string
  label?: string
  props?: ColumnProps
  slot?: string
  headerSlot?: string
  contentSlot?: string
}
// baseTable中tableProps
export interface TableProps {
  data?: [],
  size?: string,
  width?: string | number,
  height?: string | number,
  maxHeight?: string | number,
  fit?: boolean,
  stripe?: boolean,
  border?: boolean,
  rowKey?: string | number,
  context?: any,
  showHeader?: boolean,
  showSummary?: boolean,
  sumText?: string,
  summaryMethod?: any,
  rowClassName?: string | any,
  rowStyle?: any,
  cellClassName?: string | any,
  cellStyle?: any,
  headerRowClassName?: string | any,
  headerRowStyle?: any,
  headerCellClassName?: string | any,
  headerCellStyle?: any,
  highlightCurrentRow?: boolean,
  currentRowKey?: string | number,
  emptyText?: string,
  expandRowKeys?: any[],
  defaultExpandAll?: boolean,
  defaultSort?: any,
  tooltipEffect?: string,
  spanMethod?: any,
  selectOnIndeterminate?: boolean,
  indent?: number,
  treeProps?: any,
  lazy?: boolean,
  load?: any
}
// 列的属性
export interface ColumnProps {
  type?: '' | 'index' | 'selection' | null | undefined
  className?: string
  labelClassName?: string
  property?: string
  width?: string | number
  minWidth?: string | number
  renderHeader?: any
  sortable?: string | boolean
  sortMethod?: any
  sortBy?: string | any | any[]
  resizable?: boolean
  columnKey?: string
  align?: string
  headerAlign?: string
  showTooltipWhenOverflow?: boolean
  showOverflowTooltip?: boolean
  fixed?: string | boolean
  formatter?: any
  selectable?: any
  reserveSelection?: any
  filterMethod?: any
  filteredValue?: any[]
  filters?: any[]
  filterPlacement?: string
  filterMultiple?: boolean
  index?: number | any
  sortOrders?: null | 'ascending' | 'descending'
}
