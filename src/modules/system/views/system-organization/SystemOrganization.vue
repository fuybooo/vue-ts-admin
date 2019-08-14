<template>
  <el-container class="h">
    <el-main class="h">
      <div class="common-query">
        <base-form :schema="schema" v-model="form" inline>
          <template v-slot:default>
            <el-form-item class="fr">
              <el-button type="primary" @click="importFile">导入</el-button>
              <el-button type="primary" @click="toNew">创建</el-button>
            </el-form-item>
          </template>
        </base-form>
      </div>
      <el-row>
        <el-col :span="12">
          <el-tree
            ref="tree"
            node-key="id"
            :data="treeData"
            :props="defaultProps"
            :default-expanded-keys="expandedKeys"
            :auto-expand-parent="false"
            draggable
            :filter-node-method="filterNode"
            :allow-drop="allowDrop"
            :allow-drag="allowDrag"
            @node-click="nodeClick"
            @node-expand="changeExpand"
            @node-collapse="changeCollapse"
            @node-drop="handleDrop"
          >
            <template v-slot:default="{node, data}">
              <div class="tree-content">
                <span class="node-label">{{node.label}}</span>
                <span class="node-button">
                <el-button class="ml20" type="text" @click.prevent="toNew(data.id)">创建子节点</el-button>
                <el-button v-if="node.level !== 1" type="text" @click.prevent="toEdit(data.id)">编辑</el-button>
                <base-confirm v-if="data._isLeaf && node.level !== 1" class="ml10" btn-type="text" :btn-plain="false"
                              @confirm="del(data.id)"></base-confirm>
              </span>
              </div>
            </template>
          </el-tree>
        </el-col>
      </el-row>
      <import-dialog :visible.sync="visible" :upload-props="uploadProps"></import-dialog>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import {Schema} from '@/components/common-form/form.model'
  import {fb} from '@/util/common/fns/fns-form'
  import {HttpRes} from '@/model/common/models'
  import {convertListToTree, getRoot, getAllParentAndChildren} from '@/util/common/fns/fns-tree'
  import {ElTree} from 'element-ui/types/tree'
  import ImportDialog from '@/components/common-dialog/ImportDialog.vue'

  @Component({components: {ImportDialog}})
  export default class SystemOrganization extends Vue {
    public schema: Schema[] = [
      {
        prop: 'keywords',
        label: '搜索',
      },
    ]
    public form = fb(this.schema)
    public defaultProps = {children: 'children', label: 'name'}
    public treeData: any[] = []
    public expandedKeys: number[] = []
    public fromQuery: any = {}
    public currentKey: number | null = null
    public originData: any[] = []
    public visible = false
    public uploadProps = {
      actionUrl: this.$urls.organization.upload,
      showFileList: false,
      onSuccess (res: any) {
        console.log('onSuccess', res)
      },
    }

    public allowDrop = (draggingNode: any, dropNode: any, dropType: string) => {
      return draggingNode.level === dropNode.level && dropType !== 'inner' && draggingNode.data.parentId === dropNode.data.parentId
    }
    public allowDrag = (draggingNode: any) => {
      return draggingNode.level !== 1
    }
    public created () {
      // 根据参数回显应该展开的节点
      if (this.$route.query && this.$route.query.q) {
        const query = JSON.parse(this.$route.query.q as string)
        this.expandedKeys = query.expandKeys || this.expandedKeys
        if (query.currentKey) {
          this.currentKey = query.currentKey
        }
      }
      this.search()
    }

    public search () {
      this.$req(this.$urls.menu.list).then((res: HttpRes) => {
        if (res.head.errCode === 0) {
          const root = getRoot(res.data.results)
          this.originData = res.data.results
          this.treeData = convertListToTree(res.data.results)
          this.setCurrentKey()
          this.pushExpandedKeys(root.id)
        }
      })
    }

    public setCurrentKey () {
      this.$nextTick(() => {
        const tree = this.$refs.tree as ElTree
        if (this.currentKey) {
          tree.setCurrentKey(this.currentKey)
        }
      })
    }

    // 跳转到创建页面
    public toNew (id: string = '0') {
      this.pushExpandedKeys(+id)
      const query = this.fromQuery
      setTimeout(() => {
        this.$router.push({
          name: 'system-menu-detail',
          params: {pattern: 'create', id},
          query,
        })
      })
    }

    // 执行删除
    public del (id: string) {
      this.$req(this.$urls.menu.delete, {id}).then((res: HttpRes) => {
        if (res.head.errCode === 0) {
          this.removeExpandedKeys(+id)
          this.search()
        }
        // 根据请求结果进行提示
        this.$tip(res)
      })
    }

    // 跳转到编辑页面
    public toEdit (id: string) {
      this.currentKey = null
      const query = this.fromQuery
      setTimeout(() => {
        this.$router.push({name: 'system-menu-detail', params: {pattern: 'edit', id}, query})
      })
    }

    public filterNode (value: any, data: any) {
      // filter 逻辑：如果该节点包含 value 或者 该节点的任意父节点包含 value 或者 该节点的任意子节点包含 value
      return getAllParentAndChildren(this.originData, data.id).some((l: any) => l.name.includes(value.trim()))
    }

    public nodeClick () {
      this.currentKey = null
    }

    public pushExpandedKeys (key: number) {
      if (!this.expandedKeys.includes(key)) {
        this.expandedKeys.push(key)
      }
    }

    public removeExpandedKeys (key: number) {
      if (this.expandedKeys.includes(key)) {
        this.expandedKeys = [...this.expandedKeys.filter(item => item !== key)]
      }
    }

    public changeExpand (data: any) {
      this.pushExpandedKeys(data.id)
    }

    public changeCollapse (data: any) {
      this.removeExpandedKeys(data.id)
    }

    @Watch('form', {deep: true})
    public changeKeywords () {
      const tree = this.$refs.tree as ElTree
      tree.filter(this.form.keywords)
    }

    @Watch('currentKey')
    public changeCurrentKey () {
      this.replaceRoute()
    }

    @Watch('expandedKeys')
    public changeExpandKeys () {
      this.replaceRoute()
    }

    public replaceRoute () {
      this.fromQuery = {
        q: JSON.stringify({
          expandKeys: this.expandedKeys,
          ...(this.currentKey ? {currentKey: this.currentKey} : {}),
        }),
      }
      this.$router.replace({
        path: this.$route.path,
        query: this.fromQuery,
      })
    }
    public handleDrop (draggingNode: any, dropNode: any) {
      this.$req(this.$urls.menu.updateSort, {sortList: dropNode.parent.data.children.map((item: any, i: number) => ({
          id: item.id,
          sort: i + 1,
        }))}).then((res: HttpRes) => {
        this.$tip(res)
      })
    }
    public importFile () {
      this.visible = true
    }
  }
</script>
<style scoped lang="less">

</style>
