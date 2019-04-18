<template>
  <div>
    <el-scrollbar style="height: 100%">
    <div class="con-df">
  <div class="top-btn">
    <p class="hoverColor">
      <span><router-link to="/addParties">新增</router-link></span>
      <span @click="toEdit" class="li-cl">修改</span>
      <span><router-link to="/">删除</router-link></span>
      <span><router-link to="/">查看</router-link></span>
    </p>
  </div>
    <el-table
      :data="tableData"
      border
      ref="singleTable"
      highlight-current-row
      style="width: 100%"
      @current-change="handleCurrentChange1"
      :default-sort = "{prop: 'ssdwmc', order: 'descending'}"
    >
      <el-table-column
        prop="ssdwmc"
        label="诉讼地位"
        sortable>
      </el-table-column>
      <el-table-column
        prop="xm"
        label="个人 (单位) 名称"
        sortable>
      </el-table-column>
      <el-table-column
        prop="lx"
        sortable
        label="类型">
      </el-table-column>
      <el-table-column
        prop="lxfs"
        sortable
        label="联系方式">
      </el-table-column>
    </el-table>
    <!--<div class="block">-->
      <!--<el-pagination-->
        <!--@size-change="handleSizeChange"-->
        <!--@current-change="handleCurrentChange"-->
        <!--:current-page="currentPage4"-->
        <!--:page-sizes="[100, 200, 300, 400]"-->
        <!--:page-size="100"-->
        <!--layout="total, sizes, prev, pager, next, jumper"-->
        <!--:total="400">-->
      <!--</el-pagination>-->
    <!--</div>-->
  </div>
    <router-view></router-view>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage4: 10,
        currentRow:null,
        tableData: [],
        sid:'',
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },handleCurrentChange1(val) {
        console.log(val.id)
        this.sid = val.id;
      },
      //跳转至修改当事人页面 传参数
      toEdit:function () {
        let _this = this;
        this.$router.push({
          name: 'addParties',
          params: {
            id: _this.sid
          }
        })
      }
    },created(){
      let _this = this;
      // 保存this变量，防止axios请求回调里面this指向发生变化
      // 获取当事人列表
      let code =   _this.$store.state.code;
      this.axios.get('/dsr/findDsrs?code='+code).then(function (response) {//将获取的数据赋值到下拉树中
        // console.log(response)
        _this.tableData = response.data;
      }).catch(function (error) {console.log(error);});
    }
  }
</script>
<style>
  p{
    margin:0;
  }
  .el-table{
    margin:30px auto;
  }
  .top-btn{
    margin:20px auto;
    text-align: right;
  }
  .con-df{
    width:95%;
    margin:0 auto;
  }
  .block{
    text-align: right;
  }
  .top-btn span{
    margin:0 6px;
  }
  .top-btn span >a{
    color: #666;
    text-decoration: none;
  }
  .li-cl{
    color: #666;
    cursor: pointer;
  }
  .hoverColor span:hover{
    color: red;
  }
  .hoverColor a:hover{
    color: red;
  }
</style>
