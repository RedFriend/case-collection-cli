<template>
  <div>
    <div class="box-header">
      <div class="panel-title">
        <i></i>
        <span>收案信息</span>
      </div>
      <div class="panel-title-right" @click="change">
        <i class="el-icon-arrow-down active"></i>
      </div>
    </div>
    <div class="con-zuj">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">
            <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm" :show-message="false" :status-icon="true">
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="案件名称">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="本院案号">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="收案日期"  required>
                    <el-form-item  prop="data1">
                      <el-date-picker
                        v-model="ruleForm.data1"
                        type="date"
                        placeholder="选择收案日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="收案登记人">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="承办部门" prop="select">
                    <select-tree v-model="ruleForm.selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="收案来源" prop="selected" required>
                    <select-tree v-model="ruleForm.selected" :options="caseSaly" :props="caseSalyProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="适用程序" prop="select" required>
                    <select-tree v-model="ruleForm.selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="适用审限" prop="select">
                    <select-tree v-model="ruleForm.selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="">
                    <!--<el-input></el-input>-->
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="公诉机关">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="公诉人">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="公诉书编号">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="扫黑除恶案件确认" prop="select">
                    <select-tree v-model="ruleForm.selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="管辖依据" prop="select">
                    <select-tag-tree :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否跨行政区划">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="类型代字">
                    <el-select  v-model="value1" disabled>
                      <el-option
                        v-for="item in options5"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否审判流程公开">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="诉讼请求">
                    <el-input
                      type="textarea"
                      :rows="3"
                      placeholder="请输入诉讼请求">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="事实与理由">
                    <el-input
                      type="textarea"
                      :rows="3"
                      placeholder="请输入事实与理由">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="备注">
                    <el-input
                      type="textarea"
                      :rows="3"
                      placeholder="请输入备注">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="立案案由" prop="select">
                    <select-tree v-model="ruleForm.selected" :options="options" :props="defaultProps" />
                    <!--<el-button type="primary" icon="el-icon-share"></el-button>-->
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="案由具体描述">
                    <el-input
                      type="textarea"
                      :rows="3"
                      placeholder="请输入案由具体描述">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="">
                    <el-button type="primary" @click="addDomain"><i class="el-icon-plus"></i>增加附加案由</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
              <div
                v-for="(domain, index) in ruleForm.domains"
                :key="domain.key"
                :prop="'domains.' + index + '.value'">
                <el-row>
                  <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item  label="立案案由">
                      <select-tree v-model="ruleForm.selected" :options="options" :props="defaultProps" />
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="btn-rights">
                    <el-button type="primary" @click.prevent="removeDomain(domain)" plain><i class="el-icon-delete"></i>删除</el-button>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-form-item label="案由具体描述">
                      <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入案由具体描述">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>

              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="检察院建议适用程序" prop="select">
                    <select-tree v-model="ruleForm.selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>

            </el-form>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
  import SelectTree from '../common/SelectTree.vue';
  import SelectTagTree from '../common/SelecTagTree.vue';
  import axios from 'axios'
  export default {
    name: 'cognizanceInformation',
    components: {
      'select-tree':SelectTree,
      'select-tag-tree':SelectTagTree
    },
    data () {
      return {
        radio: '1',
        show3: true,
        ruleForm: {
          data1: '',
          select:'',
          resource:0,
          domains: [],
          // 默认选中值
          selected: '',
        },rules: {
          data1: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],selected: [
            { required: true, message: '必填项不能为空', trigger: 'change',type: "string"}
          ],name:[
            { required: true, message: '必填项不能为空', trigger: 'blur'}
          ]
        },
        options5: [{
          value: '选项1',
          label: '黄金糕'
        }],
        value1: '',
        // 数据默认字段
        defaultProps: {
          parent: 'id',   // 父级唯一标识
          value: 'ayDm',          // 唯一标识
          label: 'ayMc',       // 标签显示
          children: 'chirldAy', // 子级
        },
        // 数据默认字段
        caseSalyProps: {
          name: '',   // 父级唯一标识
          value: 'code',          // 唯一标识
          label: 'name',       // 标签显示
          children: '', // 子级
        },
        // 下拉树数据列表
        options: [],caseSaly: [],
      }
    },
    methods:{
      change:function () {
        if($('.active').hasClass('el-icon-arrow-right')){
          $('.active').removeClass('el-icon-arrow-right').addClass('el-icon-arrow-down');
          this.show3 = true;
        }else{
          $('.active').removeClass('el-icon-arrow-down').addClass('el-icon-arrow-right');
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
    },created(){
      var _this = this;
      // 保存this变量，防止axios请求回调里面this指向发生变化
      // 获取案由
      axios.get('/ay')
        .then(function (response) {
          //将获取的数据赋值到下拉树中
          _this.options = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      // 收案来源
      axios.get('/saly')
        .then(function (response) {
          //将获取的数据赋值到下拉树中
          _this.caseSaly = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

<style scoped>
  @import '../../assets/css/style.css';
</style>
