import Vue from 'vue'
import {Menu} from '@/components/common-menu/menu.model'
import './BaseMenu.less'

// @ts-ignore
export default Vue.component('baseMenuComponent', {
  functional: true, // 使用函数式组件可以解决返回多个子元素的问题
  render (createElement, {props}) { // 使用函数式组件时只能在第二个参数中去取menus而不能在this中取
    return (props.menus as Menu[]).filter(menu => !menu.hidden && !menu.parentName).map((menu: Menu) => {
      if (menu.children) {
        return createElement('el-submenu', {
          props: {
            index: menu.index,
          },
        }, [
          createElement('template', {slot: 'title'}, menu.title),
          createElement('base-menu', {props: {menus: menu.children}}),
        ])
      } else {
        return createElement('el-menu-item', {props: {index: menu.index}}, menu.title)
      }
    })
  },
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
})
