<template>
  <div>
    <h3>测试input的双向绑定</h3>
    <el-input v-model="row.width" placeholder="placeholder" @change="changeInput"></el-input>
    <hr>
    <h3>测试循环中input的双向绑定</h3>
    {{list}}
    <ul>
      <li v-for="(item, i) of list" :key="i" class="flex-box">
        <span>{{i}}</span>
        <el-input v-model="item.width" placeholder="placeholder" @change="changeListInput(item, $event)"></el-input>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class Input extends Vue {
    public row = {
      width: 'auto'
    }
    public list = [
      {
        width: '1'
      },
      {
      },
      {
        width: 'auto'
      },
      {
        width: ''
      },
    ]
    public changeInput (value: string) {
      if (isNaN(+value)) {
        this.row.width = 'auto'
      } else {
        this.row.width = value || 'auto'
      }
    }
    public changeListInput (item: any, value: string) {
      if (isNaN(+value)) {
        item.width = 'auto'
      } else {
        item.width = value || 'auto'
      }
    }
  }
</script>
<style scoped lang="less">

</style>
