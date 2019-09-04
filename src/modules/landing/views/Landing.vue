<template>
  <div class="landing-wrap">
<!--    头部 logo 导航-->
    <div class="header" :class="{'header-banner': isHeaderBanner, 'header-scene': isHeaderScene}">
      <div class="header-inner">
        <img src="../assets/img/logo.png" alt="logo" width="200" height="32">
        <div class="nav">
          <div class="nav-menu-item"><a target="_blank" href="http://i.browser.qq.com/?tab=gifts&ADTAG=QB10gw">特权</a></div>
          <div class="nav-menu-item"><a target="_blank" href="http://browser.qq.com/faq/#/index">帮助</a></div>
          <div class="nav-menu-item"><a target="_blank" href="http://browser.qq.com/events/feedback/feedback.html">反馈建议</a></div>
        </div>
      </div>
    </div>
<!--    banner 产品概览 入口-->
    <div class="banner">
      <div class="container">
        <div class="scene scene-1" v-show="isLeft">
          <div class="left-content">
            <img class="w h" src="../assets/img/pc-pic.png" alt="pc-pic">
          </div>
          <div class="right-content">
            <img class="w h" src="../assets/img/pc-tit.png" alt="pc-title">
          </div>
        </div>
        <div class="scene scene-2" v-show="!isLeft">
          <div class="left-content">
            <img class="w h" src="../assets/img/mobile-tit.png" alt="mobile-tit">
          </div>
          <div class="right-content">
            <img class="w h" src="../assets/img/mobile-pic.png" alt="mobile-pic">
          </div>
        </div>
      </div>
      <div class="switcher">
        <div class="sliding-line" :style="slidingLineStyle"></div>
        <div class="switcher-1">
          <img @mouseenter="mouseEnterBannerSwitcher('pc')" :src="leftSwitchImgSrc" alt="pc-blue">
        </div>
        <div class="switcher-2">
          <img @mouseenter="mouseEnterBannerSwitcher('mobile')" :src="rightSwitchImgSrc" alt="mobile-gray">
        </div>
      </div>
    </div>
<!--    产品详细介绍1-->
    <div class="introduce introduce-1"></div>
<!--    产品详细介绍2-->
    <div class="introduce introduce-2"></div>
<!--    产品详细介绍3-->
    <div class="introduce introduce-3"></div>
<!--    产品详细介绍4-->
    <div class="introduce introduce-4"></div>
<!--    产品详细介绍5-->
    <div class="introduce introduce-5"></div>
<!--    产品详细介绍6-->
    <div class="introduce introduce-6"></div>
<!--    底部-->
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import '@/modules/landing/assets/style.less'
  import {debounce} from '@/util/common/fns/fns'
  const pcBlue = require('../assets/img/pc-blue.png')
  const pcGray = require('../assets/img/pc-gray.png')
  const mobileBlue = require('../assets/img/mobile-blue.png')
  const mobileGray = require('../assets/img/mobile-gray.png')

  @Component({})
  export default class Landing extends Vue {
    public showDownBtn = false
    public isHeaderBanner = false
    public isHeaderScene = false
    public leftSwitchImgSrc = pcBlue
    public rightSwitchImgSrc = mobileGray
    public isLeft = true
    public slidingLineStyle: any = {
      left: '42%'
    }
    public getScrollTop = () => {
      return (document.querySelector('#app > .el-main') as any).scrollTop
    }
    public created () {
      window.addEventListener('scroll', this.scrollHandler, true)
    }
    public mouseEnterBannerSwitcher (imgType: string) {
      if (imgType === 'pc') {
        this.isLeft = true
        this.slidingLineStyle.left = '42%'
        this.leftSwitchImgSrc = pcBlue
        this.rightSwitchImgSrc = mobileGray
      } else {
        this.isLeft = false
        this.slidingLineStyle.left = '55%'
        this.leftSwitchImgSrc = pcGray
        this.rightSwitchImgSrc = mobileBlue
      }
    }
    public scrollHandler () {
      debounce(() => {
        const scrollTop = this.getScrollTop()
        if (scrollTop < 50) {
          this.isHeaderBanner = false
          this.isHeaderScene = false
        } else if (scrollTop < 900) {
          this.isHeaderBanner = true
          this.isHeaderScene = false
        }
      })()
    }
  }
</script>
<style scoped lang="less">

</style>
