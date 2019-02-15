<template>
  <div>
    <!--起诉情况-->
    <div class="box-header" style="width:100%">
      <div class="panel-title">
        <i></i>
        <span>起诉情况</span>
      </div>
      <div class="panel-title-right" @click="change">
        <i class="el-icon-arrow-down active1"></i>
      </div>
    </div>
    <div class="con-zuj">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">
            <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm" :show-message="false" :status-icon="true">
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="羁押日期">
                    <el-form-item>
                      <el-date-picker
                        v-model="ruleForm.data1"
                        type="date"
                        placeholder="选择羁押日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="羁押到期时间">
                    <el-form-item>
                      <el-date-picker
                        v-model="ruleForm.data1"
                        type="date"
                        placeholder="选择羁押到期时间">
                      </el-date-picker>
                    </el-form-item>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-form-item label="羁押场所">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <el-form-item label="羁押仓号">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="附带民诉">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="非法取得财产价值">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="强制实施种类">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item>
                    <el-date-picker
                      v-model="ruleForm.data1"
                      type="date"
                      placeholder="选择羁押到期时间">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="保证人">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="保证金额">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="犯罪金额无法计算">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="犯罪金额">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="在押">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="累犯">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="曾犯罪">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="曾劳教">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="数罪并罚">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="">

                  </el-form-item>
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
  export default {
    name: 'qiSu',
    components: {
      'select-tree':SelectTree,
      'select-tag-tree':SelectTagTree
    },
    data () {
      return {
        radio: '1',
        show3: true,
        checkList:[],
        ruleForm: {
          data1: '',
          select:'',
          resource:0,
          domains: [],
        },rules: {
          data1: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],select: [
            // { required: true, message: '必填项不能为空', trigger: 'blur'}
          ]
        },
        options5: [{
          value: '选项1',
          label: '黄金糕'
        }],
        value1: '',
        // 默认选中值
        selected: 'A',
        // 数据默认字段
        defaultProps: {
          parent: 'parentId',   // 父级唯一标识
          value: 'id',          // 唯一标识
          label: 'label',       // 标签显示
          children: 'children', // 子级
        },
        // 下拉树数据列表
        options: [
          {
            parentId: '0',
            id: 'A',
            label: 'label-A',
          },
          {
            parentId: '0',
            value: 'B',
            label: 'label-B',
            children: [],
          },{
            parentId: '0',
            value: 'B',
            label: 'label-c',
            children: [],
          },{
            parentId: '0',
            value: 'B',
            label: 'label-d',
            children: [],
          }
        ],
      }
    },
    methods:{
      change:function (e) {
        if($('.active1').hasClass('el-icon-arrow-right')){
          $('.active1').removeClass('el-icon-arrow-right').addClass('el-icon-arrow-down');
          this.show3 = true;
        }else{
          $('.active1').removeClass('el-icon-arrow-down').addClass('el-icon-arrow-right');
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
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/style.css';
  .el-checkbox{
    margin:0 20px;
  }
</style>
