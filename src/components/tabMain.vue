<template>
  <div class="content-container">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-com">
      <el-tab-pane name="0">
        <span slot="label"><i class="el-icon-message"></i> 案件信息</span>
      </el-tab-pane>
      <el-tab-pane name="1">
        <span slot="label"><i class="el-icon-tickets"></i> 当事人</span>
      </el-tab-pane>
    </el-tabs>
    <!--<stick-tabs></stick-tabs>-->
    <router-view></router-view>
    <!--返回顶部组件-->
    <div class="content-container-top">
      <back-to-top></back-to-top>
       </div>
  </div>
</template>

<script>
  import BackToTop from './common/BackToTop.vue'
  import stickTabs from './common/stickyTabs.vue'
  export default {
    name: 'tabMain',
    components: {
      'back-to-top':BackToTop,
      'stick-tabs':stickTabs
    },
    data () {
      return {
        activeName: '0',
      }
    } ,methods: {
      handleClick(tab, event) {
        this.activeName = '0';
        let index = tab.index;
        sessionStorage.setItem('tabXiIndex',index);
        if(index==0){
          this.$router.push({
            path:"/indexMain"
          })
        }else if(index==1){
          let code = this.$store.state.code;
          let _this = this;
          if(code){
            this.$router.push({
              path:"/partyList"
            })
          }else{
            _this.$notify.error({
              title: '查看当事人列表',
              message: '请先保存案件信息!!'
            });
            this.activeName = '0';
          }

        }
      },
    },
    created(){
      // 页面重新加载的时候保存当前tabs状态
      if(sessionStorage.getItem('tabXiIndex')){
        this.activeName = sessionStorage.getItem('tabXiIndex');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<style lang="scss">
  html,body{
    height:100%;
    margin: 0;
  }
  .el-tabs__item{
    font-size: 20px;
    font-weight: bold;
    color: #666;
    padding:0 42px;
  }
  .el-tabs__nav-scroll{
    display: flex;
    justify-content: center;
  }
  body{
    font-family:'PingFang SC';
  }

  .el-tabs__nav{
    padding:10px 0;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .content-container{
    height:100%;
  }
  .el-select-dropdown__wrap{
    overflow-x: scroll;
  }
</style>

