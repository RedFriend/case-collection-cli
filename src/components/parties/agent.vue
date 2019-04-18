<template>
  <div>
    <div class="box-header myDaiLi" style="overflow: visible;margin-bottom: 0">
      <div class="panel-title">
        <i></i>
        <span>代理人信息</span>
      </div>
      <div class="panel-title-right daiLiRen-right">
        <div style="float: right;line-height: 43px;">
          <span @click="addTab(editableTabsValue2)"><i class="el-icon-plus"></i>新建代理人</span>
          <i class="el-icon-arrow-down active2" @click="change2"></i>
        </div>
      </div>
    </div>
    <div class="tab-con con-zuj">
      <el-collapse-transition>
        <div v-show="show3">
            <el-tabs v-model="editableTabsValue2" closable @tab-remove="removeTab">
              <el-tab-pane
                v-for="(item, index) in editableTabs2"
                :key="item.name"
                :label="item.title"
                :name="item.name">
                <div class="transition-box">
                  <el-form :model="editableTabs2[index]"  :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm" :show-message="false" :status-icon="true">
                    <el-row :gutter="80">
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="代理人名称" prop="dlrmc" required>
                          <el-select v-model="editableTabs2[index].dlrmc" filterable  clearable placeholder="请选择">
                            <el-option
                              v-for="item in options_dlrmc"
                              :key="item.value"
                              :label="item.name"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="">

                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="80">
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="与当事人关系">
                          <el-select v-model="editableTabs2[index].ydsrgx" filterable  clearable placeholder="请选择">
                            <el-option
                              v-for="item in options_ydsrgx"
                              :key="item.value"
                              :label="item.name"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="">

                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="80">
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="代理人姓名" prop="dlrxm" required>
                          <el-input v-model="editableTabs2[index].dlrxm" clearable></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="诉讼代理人身份">
                          <el-select v-model="editableTabs2[index].ssdlrsf" filterable  clearable placeholder="请选择">
                            <el-option
                              v-for="item in options_ydsrgx"
                              :key="item.value"
                              :label="item.name"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="80">
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="是否法律援助">
                          <el-radio v-model="editableTabs2[index].sfflyz" label="1">是</el-radio>
                          <el-radio v-model="editableTabs2[index].sfflyz" label="2">否</el-radio>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="">
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="80">
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="代理人证件类型">
                          <el-select v-model="editableTabs2[index].dlrzjlx" filterable  clearable placeholder="请选择">
                            <el-option
                              v-for="item in options_dlrzjlx"
                              :key="item.value"
                              :label="item.name"
                              :value="item.value">
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="代理人证件号码">
                          <el-input v-model="editableTabs2[index].dlrzjhm"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="80">
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="代理人电话">
                          <el-input v-model="editableTabs2[index].dlrdh"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="代理人邮编">
                          <el-input v-model="editableTabs2[index].dlryb"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="80">
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="代理人单位">
                          <el-input v-model="editableTabs2[index].dlrdw"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="代理人单位注册地">
                          <el-input v-model="editableTabs2[index].dlrdwzcd"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="80">
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <el-form-item label="代理人单位地址">
                          <el-input v-model="editableTabs2[index].dlrdwdz"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                      </el-col>
                    </el-row>
                  </el-form>
                </div>
              </el-tab-pane>
            </el-tabs>
    </div>
      </el-collapse-transition>
    </div>
    <!--弹窗-->
    <el-dialog
      title="删除代理人"
      :visible.sync="dialogVisible"
      width="30%">
      <p class="icon-textf"><span><i class="el-icon-warning"></i>确定删除该代理人!!</span></p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="qued">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import SelectTree from '../common/SelectTree.vue';
  import SelectTagTree from '../common/SelecTagTree.vue';
  export default {
    name: 'basicInformation',
    components: {
      'select-tree':SelectTree,
      'select-tag-tree':SelectTagTree,
    },
    data () {
      return {
        show3: true,
        targetName:'',
        dialogVisible: false,
        editableTabsValue2: '2',
        editableTabs2: [],
        tabIndex: 2,
        selfIndex:0,
        ruleForm:{

        },
        rules: {
          data1: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],dlrmc: [
            { required: true,trigger: 'change'}
          ],dlrxm:[
            {required: true, trigger: 'blur'}
          ]
        },
        options_dlrmc:[
          {
            value:'1',
            name:'法定代理人'
          },{
            value:'2',
            name:'代理人'
          },{
            value:'3',
            name:'辩护人'
          },{
            value:'4',
            name:'诉讼代表人'
          },{
            value:'5',
            name:'其他诉讼参与人'
          },
        ],options_ydsrgx:[
          {
            value:'1',
            name:'配偶'
          },{
            value:'2',
            name:'父母'
          },{
            value:'3',
            name:'子女'
          },{
            value:'255',
            name:'其他'
          },
        ],
        options_dlrzjlx:[],
      }
    },
    methods:{
      change2:function (e) {
        if($('.active2').hasClass('el-icon-arrow-right')){
          $('.active2').removeClass('el-icon-arrow-right').addClass('el-icon-arrow-down');
          this.show3 = true;
        }else{
          $('.active2').removeClass('el-icon-arrow-down').addClass('el-icon-arrow-right');
          this.show3 = false;
        }
      },
      removeDomain(item) {
        let index = this.ruleForm.domains.indexOf(item)
        if (index !== -1) {
          this.ruleForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.ruleForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      addTab(targetName) {
        let lengX = this.editableTabs2.length;
        let csdf = lengX + 1 + '';
        if(csdf == '2' && targetName == 2){
          csdf = '1';
        }
        if(lengX > 1){
          this.$notify.info({
            title: '新增代理人',
            message: '最多添加两个代理人',
            type: 'warning'
          });
        }else  if(lengX<2){
          this.editableTabs2.push({
            title: '新建代理人'+csdf,
            name: csdf,
            content: '',
            dlrmc:'',
            ydsrgx:'',
            dlrxm:'',
            ssdlrsf:'',
            sfflyz:'2',
            dlrzjlx:'',
            dlrzjhm:'',
            dlrdh:'',
            dlryb:'',
            dlrdw:'',
            dlrdwzcd:'',
            dlrdwdz:'',
          });
          this.editableTabsValue2 = csdf;
        }
      },
      removeTab(targetName) {
        this.targetName = targetName;
        this.dialogVisible = true;
      },
      qued:function(){
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === this.targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === this.targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== this.targetName);
        this.dialogVisible = false;
      },
    },created(){
      let _this = this;
      //获取证件类型
      this.axios.get('dict/zjlx').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_dlrzjlx = response.data;
      }).catch(function (error) {console.log(error);});
    }
  }
</script>

<style scoped>
  @import '../../assets/css/style.css';
  .el-checkbox{
    margin:0 20px;
  }
</style>
<style>
  .tab-con .el-tabs__nav{
    padding:0;
  }
  .tab-con .is-closable{
    padding: 0 28px!important;
    font-size: 16px;
  }
  .tab-con .el-tabs__nav-wrap{
    width:100%;
    display: flex;
    justify-content: flex-end;
  }
  .icon-textf span,.icon-textf i{font-size: 20px;color: #c00;}
  .icon-textf i{padding-right:10px;}
</style>
