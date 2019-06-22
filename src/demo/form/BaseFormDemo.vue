<template>
  <div>
    <base-form :schema="schema" v-model="form"></base-form>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Schema} from '@/components/common-form/form.model'

  @Component({})
  export default class BaseFormDemo extends Vue {
    public schema: Schema[] = [
      {
        label: '名称',
        prop: 'name'
      }
    ]
    public form = {name: '1'}
  }
</script>
<style scoped lang="less">

</style>
