<template>
  <el-container class="h">
    <el-main class="h oh">
<!--      <div class="background-wrap">-->
<!--        <div v-for="item in 20" class="background-item" :class="{'background-item-odd': item % 2, 'background-item-even': !(item % 2)}" :key="item"></div>-->
<!--      </div>-->
      <div class="plan-box plan-today-box">
        <div class="title">
          <div class="title-content">今日计划</div>
        </div>
        <div class="content">
          <div v-if="planList.length" class="plan-item">
            <div class="plan-content"></div>
            <div class="plan-status"></div>
          </div>
          <div v-else class="empty">暂无计划，<el-button type="text">创建计划</el-button></div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class PlanList extends Vue {
    public planList: any[] = []
  }
</script>
<style scoped lang="less">

</style>
