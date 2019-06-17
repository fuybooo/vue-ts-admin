<template>
  <div class="app-wrap" id="app">
    <lang-setting :class="['lang-setting', {dn: !$store.state.showLangSetting}]" id="js-lang-setting"></lang-setting>
    <router-view></router-view>
  </div>
</template>
