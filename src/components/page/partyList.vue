<template>
  <div>
    <div class="con-df">
  <div class="top-btn">
    <p>
      <span><router-link to="/addParties">新增</router-link></span>
      <span><router-link to="/">修改</router-link></span>
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
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        prop="date"
        label="诉讼地位"
        sortable>
      </el-table-column>
      <el-table-column
        prop="name"
        label="个人 (单位) 名称"
        sortable>
      </el-table-column>
      <el-table-column
        prop="address"
        sortable
        label="类型">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage4: 10,
        currentRow:null,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '啊海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '吧海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '传海市普陀区金沙江路 1516 弄'
        }],
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
        this.currentRow = val;
      },
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
  }
</style>
