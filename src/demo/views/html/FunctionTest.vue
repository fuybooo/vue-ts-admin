<template>
  <div></div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {deepTrim, deepClone} from '@/util/common/fns/fns'

  @Component({})
  export default class FunctionTest extends Vue {
    public created () {
      const v0 = {
        a: 0,
        b: null,
        c: undefined,
        d: '',
        e: false,
        f: true,
        g: 1,
        h: [
          null,
          undefined,
          '',
          false,
          0,
          1
        ],
        i: {
          a: 0,
          b: null,
          c: undefined,
          d: false,
          e: '',
          f: ' hah  ',
          g: '  '
        }
      }
      console.log('深度trim：', JSON.stringify(deepTrim(v0, true)))
      const v1: any = {
        a: {
          a: {
            a: [
              {
                a: {
                  a: 'a'
                }
              }
            ]
          }
        }
      }
      const v2: any = {
        b: v1,
        c: {
          a: {
            a: [
              v1, v1
            ]
          }
        }
      }
      const v3 = deepClone(v1)
      v1.a.a.a = '变1'
      console.log(v3)
      console.log(v2)
    }
  }
</script>
<style scoped lang="less">

</style>
