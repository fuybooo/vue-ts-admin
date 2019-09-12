<template>
  <div class="landing-wrap">
<!--    头部 logo 导航-->
    <div class="header" :class="{'header-banner': isHeaderBanner, 'header-scene': isHeaderScene}">
      <div class="header-inner">
        <img :src="logo" alt="logo" width="200" height="32">
        <div class="nav">
          <div class="nav-menu-item"><router-link :to="{name: 'product-list'}">全部产品</router-link></div>
          <div class="nav-menu-item"><a target="_blank" href="http://i.browser.qq.com/?tab=gifts&ADTAG=QB10gw">特权</a></div>
          <div class="nav-menu-item"><a target="_blank" href="http://browser.qq.com/faq/#/index">帮助</a></div>
          <div class="nav-menu-item"><a target="_blank" href="http://browser.qq.com/events/feedback/feedback.html">反馈建议</a></div>
          <div class="nav-menu-item" v-if="showDownBtn"><el-button type="logo-down">立即下载</el-button></div>
        </div>
      </div>
    </div>
<!--    banner 产品概览 入口-->
    <div class="banner">
      <div class="container">
        <div class="scene scene-1" v-show="!isBannerInit && isLeft">
          <transition name="banner-scene-1-left">
            <div class="left-content" v-show="!isBannerInit && isLeft">
              <img class="w h" src="../assets/img/pc-pic.png" alt="pc-pic">
            </div>
          </transition>
          <transition name="banner-scene-1-right">
            <div class="right-content" v-show="!isBannerInit && isLeft">
              <img class="w h" src="../assets/img/pc-tit.png" alt="pc-title">
            </div>
          </transition>
        </div>
        <div class="scene scene-2" v-show="!isBannerInit && !isLeft">
          <transition name="banner-scene-2-left">
            <div class="left-content" v-show="!isBannerInit && !isLeft">
              <img class="w h" src="../assets/img/mobile-tit.png" alt="mobile-tit">
            </div>
          </transition>
          <transition name="banner-scene-2-right">
            <div class="right-content" v-show="!isBannerInit && !isLeft">
              <img class="w h" src="../assets/img/mobile-pic.png" alt="mobile-pic">
            </div>
          </transition>
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
    <div class="introduce introduce-1">
      <div class="side">
        <div class="side-content">
          <h1 :class="commonTransition">看文档，更方便</h1>
          <p :class="commonTransition2">全新文档功能，支持Word、Excel、PDF等多种格式文档打开、编辑，使用更加方便。</p>
          <div class="side-switcher" :class="commonTransition3">
            <div class="side-switcher-item" v-for="doc in docs">
              <div class="doc-icon" :class="[doc.icon, {active: doc.index === crtDocIndex}]"></div>
              <div class="doc-title">{{doc.alt}}</div>
            </div>
            <div class="progress">
              <div class="current" :style="{left: 33.33 * crtDocIndex + '%', width: crtDocProgressWidth + '%'}"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="main" :class="commonTransition">
        <img v-for="crtDoc in docs" :src="crtDoc.src" :alt="crtDoc.alt" :key="crtDoc.alt" :class="{active: crtDoc.index === crtDocIndex}">
      </div>
    </div>
<!--    产品详细介绍2-->
    <div class="introduce introduce-2">
      <div class="container"></div>
    </div>
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
  const logo = require('../assets/img/logo.png')
  const logo2 = require('../assets/img/logo2.png')
  const pcBlue = require('../assets/img/pc-blue.png')
  const pcGray = require('../assets/img/pc-gray.png')
  const mobileBlue = require('../assets/img/mobile-blue.png')
  const mobileGray = require('../assets/img/mobile-gray.png')
  const docsWord = require('../assets/img/docs-word.png')
  const docsExcel = require('../assets/img/docs-excel.png')
  const docPdf = require('../assets/img/docs-pdf.png')
  const docs = [
    {
      src: docsWord,
      alt: 'Word',
      icon: 'Word',
      index: 0,
    },
    {
      src: docsExcel,
      alt: 'Excel',
      icon: 'Excel',
      index: 1,
    },
    {
      src: docPdf,
      alt: 'PDF',
      icon: 'PDF',
      index: 2,
    },
  ]
  let timer: any = null
  let timer2: any = null

  @Component({})
  export default class Landing extends Vue {
    public showDownBtn = false
    public isHeaderBanner = false
    public isHeaderScene = false
    public logo = logo
    public leftSwitchImgSrc = pcBlue
    public rightSwitchImgSrc = mobileGray
    public docs = docs
    public crtDocIndex = 0
    public crtDocProgressWidth = 0
    public isBannerInit = true
    public isIntroduce1Loaded = false
    public isLeft = true
    public slidingLineStyle: any = {
      left: '42%'
    }
    public get commonTransition () {
      return this.getCommonTransition()
    }
    // 同一个画面中的不同部分的动画要有延迟
    public get commonTransition2 () {
      return this.getCommonTransition(2)
    }
    public get commonTransition3 () {
      return this.getCommonTransition(3)
    }
    public getCommonTransition (num?: number) {
      return {
        ['common-transform' + (num ? ('-' + num) : '')]: true,
        'common-hidden': !this.isIntroduce1Loaded,
        'common-visible': this.isIntroduce1Loaded,
      }
    }
    public getScrollTop = () => {
      return (document.querySelector('#app > .el-main') as any).scrollTop
    }
    public created () {
      setTimeout(() => {
        // 使得 banner 拥有一个初始的动画效果
        this.isBannerInit = false
        this.scrollHandler()
      }, 100)
      window.addEventListener('scroll', this.scrollHandler, true)
    }
    public numberGrow (cb: (g: number) => void, start: number = 0, end: number = 33.33, interval: number = 20, total: number = 3000) {
      clearInterval(timer)
      const grow = (end - start) / (total / interval)
      timer = setInterval(() => {
        cb(grow)
      }, interval)
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
          this.logo = logo
          this.showDownBtn = false
          // 控制 header 的样式
          this.isHeaderBanner = false
          this.isHeaderScene = false
          this.isIntroduce1Loaded = false
        } else if (scrollTop < 366) {
          this.logo = logo
          this.showDownBtn = false
          // 控制 header 的样式
          this.isHeaderBanner = true
          this.isHeaderScene = false
          this.isIntroduce1Loaded = false
        } else if (scrollTop < 741) {
          this.logo = logo2
          this.showDownBtn = true
          this.isHeaderBanner = false
          this.isHeaderScene = true
          if (!this.isIntroduce1Loaded) {
            this.isIntroduce1Loaded = true
            this.startIntroduce(1)
          }
        } else if (scrollTop < 1472) {

        }
      })()
    }
    public startIntroduce (index: number) {
      clearInterval(timer2)
      if (index === 1) {
        const doInterval = () => {
          this.crtDocIndex = (this.crtDocIndex + 1) % 3
          this.crtDocProgressWidth = 0
          this.numberGrow((grow) => {
            this.crtDocProgressWidth += grow
          })
        }
        doInterval()
        timer2 = setInterval(() => {
          doInterval()
        }, 3000)
      }
    }
  }
</script>
<style scoped lang="less">

</style>
