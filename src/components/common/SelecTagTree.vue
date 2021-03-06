<template>
  <div>
    <div class="tag-x">
      <el-tag
        :key="tag.name"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag.name}}
      </el-tag>
    </div>
    <el-popover
      ref="popover"
      placement="bottom-start"
      trigger="click"
      class="select-tree scrollbar"
      @show="onShowPopover"
      @hide="onHidePopover">
      <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
      <div style="height:300px">
        <el-scrollbar style="height:100%;">
      <el-tree
        ref="tree"
        highlight-current
        :style="`min-width: ${treeWidth}`"
        :data="data"
        :props="props"
        :expand-on-click-node="false"
        :filter-node-method="filterNode"
        :default-expand-all="false"
        @node-click="onClickNode">
      </el-tree>
        </el-scrollbar>
      </div>
      <el-input
        slot="reference"
        ref="input"
        v-model="labelModel"
        clearable
        suffix-icon="el-icon-arrow-down"
        :style="`width: ${width}px`"
        class="sel-input1"
        :placeholder="placeholder">
      </el-input>
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      // 接收绑定参数
      value: String,
      // 输入框宽度
      width: String,
      // 选项数据
      options: {
        type: Array,
        required: true,
      },
      // 输入框占位符
      placeholder: {
        type: String,
        required: false,
        default: '',
      },
      // 树节点配置选项
      props: {
        type: Object,
        required: false,
        default: () => ({
          parent: 'parentId',
          value: 'rowGuid',
          label: 'areaName',
          children: 'children',
        }),
      },
    },
    // 设置绑定参数
    model: {
      prop: 'label',
      event: 'selected',
    },
    computed: {
      // 是否为树状结构数据
      dataType() {
        const jsonStr = JSON.stringify(this.options);
        return jsonStr.indexOf(this.props.children) !== -1;
      },
      // 若非树状结构，则转化为树状结构数据
      data() {
        return this.dataType ? this.options : this.switchTree();
      },
    },
    watch: {
      labelModel(val) {
        if (!val) {
          this.valueModel = '';
        }
        this.$refs.tree.filter(val);
      },
      value(val) {
        this.labelModel = this.queryTree(this.data, val);
      },
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    data() {
      return {
        // 树状菜单显示状态
        showStatus: false,
        // 菜单宽度
        treeWidth: 'auto',
        // 输入框显示值
        labelModel: '',
        // 实际请求传值
        valueModel: '0',
        filterText:'',
        dynamicTags: [],
        thisVal:[],
        indexZt:'',
        panXif:''
      };
    },
    created() {
      // 检测输入框原有值并显示对应 label
      if (this.value) {
        this.labelModel = this.queryTree(this.data, this.value);
      }
      // 获取输入框宽度同步至树状菜单宽度
      this.$nextTick(() => {
        this.treeWidth = `${(this.width || this.$refs.input.$refs.input.clientWidth) - 24}px`;
      });
    },
    updated: function () {
      if(this.indexZt == 1){
        $('.scrollbar').find('.sel-input1').find('input').css('height',$('.tag-x').height()+'px');
      }
    },
    methods: {
      // 单击节点
      onClickNode(node) {
        // this.labelModel = node[this.props.label];
        // this.valueModel = node[this.props.value];
        this.onCloseTree();
        this.panXif = node.name;
        this.indexZt = 1;
        for(let i = 0;i<this.dynamicTags.length;i++){
          if(this.dynamicTags[i].name==this.panXif){
            this.dynamicTags.splice(this.dynamicTags.indexOf(this.panXif), 1);
          }
        }
        let obj = {
          name:node.name,
          value:node.value
        }
        this.dynamicTags.push(obj);
        this.$emit('func',this.dynamicTags);
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        $('.scrollbar').find('.sel-input1').find('input').css('height',$('.tag-x').height()+'px');
        // 点击关闭标签动态删除传的父参数
        this.$emit('func',this.dynamicTags);
      },
      // 偏平数组转化为树状层级结构
      switchTree() {
        return this.cleanChildren(this.buildTree(this.options, '0'));
      },
      // 隐藏树状菜单
      onCloseTree() {
        this.$refs.popover.showPopper = false;
      },
      // 显示时触发
      onShowPopover() {
        this.showStatus = true;
        this.$refs.tree.filter(false);
      },
      // 隐藏时触发
      onHidePopover() {
        this.showStatus = false;
        this.$emit('selected', this.valueModel);
      },
      // 树节点过滤方法
      filterNode(query, data) {
        if (!query) return true;
        return data[this.props.label].indexOf(query) !== -1;
      },
      // 搜索树状数据中的 ID
      queryTree(tree, id) {
        let stark = [];
        stark = stark.concat(tree);
        while (stark.length) {
          const temp = stark.shift();
          if (temp[this.props.children]) {
            stark = stark.concat(temp[this.props.children]);
          }
          if (temp[this.props.value] === id) {
            return temp[this.props.name];
          }
        }
        return '';
      },
      // 将一维的扁平数组转换为多层级对象
      buildTree(data, id = '0') {
        const fa = (parentId) => {
          const temp = [];
          for (let i = 0; i < data.length; i++) {
            const n = data[i];
            if (n[this.props.parent] === parentId) {
              n.children = fa(n.rowGuid);
              temp.push(n);
            }
          }
          return temp;
        };
        return fa(id);
      },
      // 清除空 children项
      cleanChildren(data) {
        const fa = (list) => {
          list.map((e) => {
            if (e.children.length) {
              fa(e.children);
            } else {
              delete e.children;
            }
            return e;
          });
          return list;
        };
        return fa(data);
      },
    },
  };
</script>

<style scoped>

</style>
<style>
  .el-tree{
    margin-top:12px;
  }
  .el-tree-node__content{
    height: 36px!important;
  }
  .scrollbar .el-input__inner{
    cursor: pointer;
  }
  .tag-x{
    position: absolute;
    top: 0;
    z-index: 999;
    pointer-events:none;
  }
  .el-tag{
    margin:4px;
    float: left;
  }
  .el-tag .el-icon-close{
    pointer-events:auto;
  }
</style>
