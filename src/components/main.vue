<template>
  <div class="main-content content-container1"  ref="viewBox">
    <el-scrollbar style="height: 100%;" ref="scrollDown">
    <div class="body-left">
      <v-cognizanceInformation ref="addForm"></v-cognizanceInformation>
    </div>
    <div class="body-com">
      <div style="height: 300px;" class="fix-enDa">
        <el-steps direction="vertical" :active="1">
          <el-step title="1 收案信息" icon="el-icon-edit"></el-step>
          <el-step title="2 "></el-step>
          <el-step title="3 "></el-step>
          <el-step title="4 "></el-step>
          <el-step title="5 "></el-step>
        </el-steps>
      </div>
    </div>
    <div class="body-right">
      <div class="right-btn-ground">
        <!--<el-button type="primary">保存并新增<br>当事人</el-button>-->
        <el-button icon="el-icon-success" type="primary" @click="saveCase">保存</el-button>
        <!--<el-button type="primary">立案</el-button>-->
        <!--<el-button type="primary">提交审批</el-button>-->
        <!--<el-button type="primary">转立案法官</el-button>-->
        <!--<el-button type="primary">返回</el-button>-->
      </div>
    </div>
    </el-scrollbar>
  </div>
</template>

<script>
  import  cognizanceInformation from './page/cognizanceInformation';
  import axios from 'axios'
export default {
  name: 'IndexMain',
  data () {
    return {
      msg:''
    }
  }
  ,components: {
    'v-cognizanceInformation': cognizanceInformation
  },methods:{
    saveCase:function () {
      //提交表单验证
      let _this = this;
      this.$refs.addForm.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          let data = this.$refs.addForm.$refs['ruleForm'].model;
          axios.post('/case/addUpdCase', data)
            .then(function (response) {
              console.log(response)
              if(response.status == 200){
                _this.$notify({
                  title: '保存案件信息',
                  message: '成功保存案件信息',
                  type: 'success'
                });
                _this.$store.commit('showAge', response.data.data.code);  //保存案件信息返回的code值
              }
            })
            .catch(function (error) {
            });
        } else {
          this.$notify.error({
            title: '保存案件信息',
            message: '必填项不能为空!!'
          });
          return false;
        }
      });
    }
  },updated: function() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  html,body{
    height:100%;
  }
.main-content{
  height: calc(100% - 90px);
  overflow-x: hidden;
}
  .body-left{
    float: left;
    width:80%;

  }
  .el-scrollbar{
    overflow: hidden;
    position: relative;
  }
  .el-scrollbar__wrap{
    overflow: scroll;
    height: 100%;
  }
.body-com{
  float: left;
  text-align: center;
  position: relative;
}
.body-right{
  float: left;
  text-align: center;
  position: relative;
}
  .fix-enDa{
    position: fixed;
    top:20%;
    width:10%;
    margin-left:2%;
  }
  .right-btn-ground{
    position: fixed;
    top:20%;
    width:10%;
    right:0;
  }
  .right-btn-ground>.el-button{
    width: 100px;
    margin-left:10px;
    margin-top:3px;
    height:58px;
    padding: 12px 0;
  }
  .el-step__head.is-process{
    color: #666!important;
    border-color:#666;
  }
</style>
<style>
  .el-step__head.is-process{
    color:#ccc;
    border-color:#ccc;
  }
  .el-step__title.is-process{
    color:#ccc;
  }
  .el-scrollbar__view{
    height:100%;
  }
</style>
