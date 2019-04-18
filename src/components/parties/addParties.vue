<template>
  <div class="main-content">
    <el-scrollbar style="height: 100%">
      <div class="body-left">
        <v-basicInformation  ref="baseInfo"></v-basicInformation>
        <v-agent ref="daili"></v-agent>
        <v-sue ref="qisu"></v-sue>
      </div>
      <div class="body-com">
        <div style="height: 420px;" class="fix-enDa">
          <!--<el-scrollbar style="height: 100%">-->
          <el-steps direction="vertical" :active="1">
            <el-step @click.native="on_click(0)" title="1 基本信息" icon="el-icon-edit"></el-step>
            <el-step @click.native="on_click(1)" title="2 工作单位信息" icon="el-icon-goods"></el-step>
            <el-step @click.native="on_click(2)" title="3 涉人大代表/政协委员信息" icon="el-icon-news"></el-step>
            <el-step @click.native="on_click(3)" title="4 涉侨信息" icon="el-icon-message"></el-step>
            <el-step @click.native="on_click(4)" title="5 送达地址信息" icon="el-icon-message"></el-step>
            <el-step @click.native="on_click(5)" title="6 联系方式信息" icon="el-icon-message"></el-step>
            <el-step @click.native="on_click(6)" title="7 代理人信息" icon="el-icon-message"></el-step>
            <el-step @click.native="on_click(7)" title="8 起诉情况" icon="el-icon-info"></el-step>
          </el-steps>
          <!--</el-scrollbar>-->
        </div>
      </div>
      <div class="body-right">
        <div class="right-btn-ground">
          <el-button type="primary" @click="backTo">返回</el-button>
          <el-button type="primary" @click="addBaseInfo">保存</el-button>
          <el-button type="primary">保存并新增</el-button>
          <el-button type="primary">立案</el-button>
          <el-button type="primary">提交审批</el-button>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
  import  basicInformation from '../page/basicInformation';
  import  agent from './agent';
  import  Sue from './Sue';
  export default {
    name: 'addParties',
    data () {
      return {
        arr1:[],
        xFalg:false,
        dailiIf:false,
        zhengq:false,
        dangrjib:false,
        qisuqk:false,
        dengg:false,
      }
    }
    ,components: {
      'v-basicInformation': basicInformation,
      'v-agent': agent,
      'v-sue':Sue
    },methods:{
      // 右侧边栏点击滚动
      on_click:function (index) {
        this.xFalg = true;
          // 步骤条样式修改
          $('.el-step__head').eq(0).addClass('is-wait');
          $('.el-step__title').eq(0).addClass('is-wait');
          $('.el-step__head').eq(1).addClass('is-wait');
          $('.el-step__title').eq(1).addClass('is-wait');
          $('.el-step__head').removeClass('is-finish');
          $('.el-step__title').removeClass('is-finish');
          $('.el-step__head').removeClass('is-process');
          $('.el-step__title').removeClass('is-process');
          $('.el-step__head').eq(index).addClass('is-finish');
          $('.el-step__title').eq(index).addClass('is-finish');
           $('.el-scrollbar__wrap').animate({"scrollTop":this.arr1[index]},function(){});  //加载滚动动画
      },
      handleScroll1() {
        /* 获取回到顶部的位置元素 .content-container-top */
        let dom =document.getElementsByClassName('el-scrollbar__wrap')[0];
        this.scrollTop = dom.scrollTop;
        let xList = this.arr1;
        for (let i = 0;i<xList.length;i++){
          if(xList[i]-120<=this.scrollTop){
              $('.el-step__head').eq(0).addClass('is-wait');
              $('.el-step__title').eq(0).addClass('is-wait');
              $('.el-step__head').eq(1).addClass('is-wait');
              $('.el-step__title').eq(1).addClass('is-wait');
              $('.el-step__head').removeClass('is-finish');
              $('.el-step__title').removeClass('is-finish');
              $('.el-step__head').removeClass('is-process');
              $('.el-step__title').removeClass('is-process');
              $('.el-step__head').eq(i).addClass('is-finish');
              $('.el-step__title').eq(i).addClass('is-finish');
          }
        }
        // console.log(this.scrollTop)
      },
      //点击保存新增当事人信息
      addBaseInfo:function () {
        let _this = this;
        this.dengg = false;
        this.dangrjib = false;
        this.qisuqk = false;
        let liatDlir = _this.$refs.daili.editableTabs2.length;
        if(liatDlir){
          _this.$refs.daili.$refs['ruleForm'][0].validate((valid) => {
            if (valid) {
              this.dailiIf = true;
            } else {
              this.dailiIf = false;
              this.$notify.error({
                title: '新增当事人-新增代理人',
                message: '必填项不能为空!!'
              });
              return false;
            }
          });
          if(_this.$refs.daili.$refs['ruleForm'][1]){
            _this.$refs.daili.$refs['ruleForm'][1].validate((valid) => {
              if (valid) {
                this.zhengq = true;
              } else {
                this.zhengq = false;
                this.$notify.error({
                  title: '新增当事人-新增代理人',
                  message: '必填项不能为空!!'
                });
                return false;
              }
            });
          }
        }else{
          _this.dengg = true;
        }
        if(liatDlir == 1){
          if(_this.dailiIf){
            _this.dengg = true;
          }else{
            _this.dengg = false;
          }
        }if(liatDlir == 2){
          if(_this.dailiIf&&_this.dailiIf){
            _this.dengg = true;
          }else{
            _this.dengg = false;
          }
        }
        this.$refs.baseInfo.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            this.dangrjib  = true;
          } else {
            this.$notify.error({
              title: '新增当事人-基本信息',
              message: '必填项不能为空!!'
            });
            return false;
          }
        });
        _this.$refs.qisu.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            this.qisuqk  = true;
          } else {
            this.$notify.error({
              title: '新增当事人-起诉情况',
              message: '必填项不能为空!!'
            });
            return false;
          }

        });
        if(this.dengg&& this.dangrjib && this.qisuqk){
            let baseInfoList = this.$refs.baseInfo.$refs['ruleForm'].model;
            let dailiList = this.$refs.daili.editableTabs2;
            let qisuList = this.$refs.qisu.$refs['ruleForm'].model;
            let daliffd = {
              bhrVos:dailiList
            }
            //各个表单数据对象拼接
            let codeObj = {
              code: _this.$store.state.code,
              id: ""
            };
            let cdObj = $.extend(baseInfoList, qisuList,daliffd,codeObj);
            let dataList = {
              caseVo: {
                code: _this.$store.state.code,
                id: ""
              },dsrVos:[
                cdObj
              ]
            }
            console.log(dataList)
            this.axios.post('/dsr/addUpdDsr', dataList)
              .then(function (response) {
                console.log(response)
                if(response.status == 200){
                  _this.$notify({
                    title: '新增当事人',
                    message: '成功新增当事人',
                    type: 'success'
                  });
                }
              })
            .catch(function (error) {
            });
        }
      },
      //返回到当事人列表
      backTo:function () {
        this.$router.go(-1);//返回上一层
      }
    },mounted(){
      console.log(this.$route.params.id);
      let dId = this.$route.params.id;
      let code =  _this.$store.state.code;
      let _this = this;
      if(dId){   //编辑和获取详情接口所需要的当事人id
        // 保存this变量，防止axios请求回调里面this指向发生变化
        // 获取当事人详细信息
        this.axios.get('/dsr/selectDsr?code='+code+'&id='+dId).then(function (response) {//将获取的数据赋值到下拉树中
          console.log(response)
        }).catch(function (error) {console.log(error);});
      }
      // 必须在html实例被创建完成的时候获取dom节点
      let list = $('.box-header'); //获取节点距顶部的距离
      for (let i = 0;i<list.length;i++){
          this.arr1.push($(list[i]).offset().top-74);
      }
      // 监听滚动事件
      this.$nextTick(function () {
        window.addEventListener('scroll', this.handleScroll1,true);// 取消事件冒泡，防止绑定失败
      });
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll1,true);// 取消事件冒泡
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  html,body{
    height:100%;
  }
  .main-content{
    overflow: hidden;
    height: calc(100% - 90px);
    overflow-y: auto;
  }
  .body-left{
    float: left;
    width:80%;

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
  .el-steps--vertical{
    margin-right:20px;
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
  .el-step.is-vertical{
    cursor: pointer;
  }
  /*.el-step__head:hover {*/
    /*color: #409EFF;*/
    /*border-color: #409EFF;*/
  /*}*/
  /*.el-step__title:hover {*/
    /*color: #409EFF;*/
    /*border-color: #409EFF;*/
  /*}*/
</style>
