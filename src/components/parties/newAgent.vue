<template>
  <div>
    <!--代理人信息-->
    <div class="con-zuj daiLir">
        <div>
          <div class="transition-box">
            <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm" :show-message="false" :status-icon="true">
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="代理人名称" prop="dlrmc" required>
                    <el-select v-model="ruleForm.dlrmc" filterable  clearable placeholder="请选择">
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
                    <el-select v-model="ruleForm.ydsrgx" filterable  clearable placeholder="请选择">
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
                    <el-input v-model="ruleForm.dlrxm" clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="诉讼代理人身份">
                    <el-select v-model="ruleForm.ssdlrsf" filterable  clearable placeholder="请选择">
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
                    <el-radio v-model="ruleForm.sfflyz" label="1">是</el-radio>
                    <el-radio v-model="ruleForm.sfflyz" label="2">否</el-radio>
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
                    <el-select v-model="ruleForm.dlrzjlx" filterable  clearable placeholder="请选择">
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
                    <el-input v-model="ruleForm.dlrzjhm"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="代理人电话">
                    <el-input v-model="ruleForm.dlrdh"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="代理人邮编">
                    <el-input v-model="ruleForm.dlryb"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="代理人单位">
                    <el-input v-model="ruleForm.dlrdw"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="代理人单位注册地">
                    <el-input v-model="ruleForm.dlrdwzcd"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="代理人单位地址">
                    <el-input v-model="ruleForm.dlrdwdz"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'basicInformation',
    data () {
      return {
        ruleForm: {
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
        },rules: {
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
</style>
