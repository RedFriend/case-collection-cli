<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import SelectTree from './common/SelectTree.vue';
  export default {
    name: 'indexDiog',
    components: {
      'select-tree':SelectTree,
    },
    data () {
      return {
        dialogVisible: true
      }
    },
    methods:{

    },created(){
      //获取案件类型列表
      // this.axios.get('dict/zjlx').then(function (response) {//将获取的数据赋值到下拉树中
      //   _this.options_dlrzjlx = response.data;
      // }).catch(function (error) {console.log(error);});
    }
  }
</script>

<style scoped>
  @import '../assets/css/style.css';
</style>
<style>

</style>
