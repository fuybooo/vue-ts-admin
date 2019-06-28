export interface Column {
  prop?: string
  label?: string
  props?: any
  slot?: string
  headerSlot?: string
}
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
