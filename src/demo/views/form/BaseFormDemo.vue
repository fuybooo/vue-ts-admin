<template>
  <div class="h">
    {{form}}
    <base-form :schema="schema" v-model="form"></base-form>
    <div class="h"></div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Option, Schema} from '@/components/common-form/form.model'
  import {fb, setOptions, setProps} from '@/util/common/fns/fns-form'
  import {cascaderOptions} from '@/demo/model/demo.model'

  @Component({})
  export default class BaseFormDemo extends Vue {
    public schema: Schema[] = [
      {
        label: '名称',
        prop: 'name',
        props: {
          type: 'number',
        },
        attrs: {
          placeholder: '这是placeholder',
        }
      },
      {
        label: '文本域',
        prop: 'textarea',
        props: {
          type: 'textarea',
        },
        attrs: {
          placeholder: '这是placeholder',
        }
      },
      {
        label: '日期框',
        prop: 'date',
        comp: 'date',
        props: {
          type: 'date',
        },
      },
      {
        label: '年份框',
        prop: 'year',
        comp: 'date',
        props: {
          type: 'year',
        },
      },
      {
        label: '月份框',
        prop: 'month',
        comp: 'date',
        props: {
          type: 'month',
        },
      },
      {
        label: '多个日期框',
        prop: 'dates',
        comp: 'date',
        props: {
          type: 'dates',
        },
      },
      {
        label: '星期框',
        prop: 'week',
        comp: 'date',
        props: {
          type: 'week',
        },
      },
      {
        label: '时间框',
        prop: 'datetime',
        comp: 'date',
        props: {
          type: 'datetime',
        },
      },
      {
        label: '月份范围框',
        prop: 'monthRange',
        comp: 'date',
        startProp: 'startMonthRange',
        endProp: 'endMonthRange',
        props: {
          type: 'monthrange',
          'start-placeholder': '开始',
          'end-placeholder': '结束',
        },
      },
      {
        label: '日期范围框',
        prop: 'dateRange',
        comp: 'date',
        startProp: 'startDate',
        endProp: 'endDate',
        props: {
          type: 'daterange',
          'start-placeholder': '开始',
          'end-placeholder': '结束',
        },
      },
      {
        label: '时间范围框',
        prop: 'datetimeRange',
        comp: 'date',
        startProp: 'startDateTime',
        endProp: 'endDateTime',
        props: {
          type: 'datetimerange',
          'start-placeholder': '开始',
          'end-placeholder': '结束',
        },
      },
      {
        label: '选择框',
        prop: 'select',
        comp: 'select',
        props: {
          options: []
        }
      },
      {
        label: '多选框',
        prop: 'mulSelect',
        comp: 'select',
        props: {
          options: [],
          multiple: true,
        }
      },
      {
        label: '单选组',
        prop: 'radio',
        comp: 'radio',
        initValue: '1',
        props: {
          options: []
        }
      },
      {
        label: '多选组',
        prop: 'checkbox',
        comp: 'checkbox',
        // initValue: ['1'],
        props: {
          options: []
        }
      },
      {
        label: '级联选择',
        prop: 'cascader',
        comp: 'cascader',
        props: {
          options: []
        }
      },
      {
        label: '开关',
        prop: 'switch',
        comp: 'switch',
        initValue: false,
      },
      {
        label: '滑块',
        prop: 'slider',
        comp: 'slider',
      },
      {
        label: '上传',
        prop: 'upload',
        comp: 'upload',
        props: {
          action: 'https://jsonplaceholder.typicode.com/posts/'
        },
      },
      {
        label: '评分',
        prop: 'rate',
        comp: 'rate',
      },
      {
        label: '颜色选择器',
        prop: 'color',
        comp: 'color',
      },
      {
        label: '穿梭框',
        prop: 'transfer',
        comp: 'transfer',
      },
    ]
    public form = fb(this.schema)
    public created () {
      const options: Option[] = [
        {
          id: '1',
          label: '选项一'
        },
        {
          id: '2',
          label: '选项二'
        },
      ]
      setOptions(this.schema, 'select', options.map(item => ({id: item.id, label: `${item.label}(${item.id})`})))
      setOptions(this.schema, 'mulSelect', options)
      setOptions(this.schema, 'radio', options)
      setOptions(this.schema, 'checkbox', options)
      setOptions(this.schema, 'cascader', cascaderOptions)
      setProps(this.schema, 'transfer', {data: Array(15).fill(0).map((item, i) => ({
        key: i, label: `备选项${i}`, disabled: i % 4 === 0
      }))})
      // 赋值
      // this.form.name = 3
      // this.form.date = '2019-06-23'
      // this.form.datetimeRange = ['2019-06-11 12:00:00', '2019-06-13 13:13:13']
    }
  }
</script>
<style scoped lang="less">

</style>
