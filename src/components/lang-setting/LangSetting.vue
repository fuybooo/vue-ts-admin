<template>
  <el-select class="lang-setting-select" v-model="value" :placeholder="$t('common.pleaseSelect')" @change="changeLang">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {getLanguage, loadLanguageAsync} from '@/config/i18n-config'
  import {langList} from '@/model/common/models'

  @Component({})
  export default class LangSetting extends Vue {
    public value = getLanguage()
    public options = langList
    public changeLang = (val: string) => loadLanguageAsync(val).then()
  }
</script>
<style lang="less">
</style>
