<template>
  <div>
    <div class="box-header">
      <div class="panel-title">
        <i></i>
        <span>基本信息</span>
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
                  <el-form-item label="案件地位" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="自然人" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="姓名">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="别名">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="曾用名">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="英文名" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="性别" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="出生日期">
                    <el-form-item>
                      <el-date-picker
                        v-model="ruleForm.data1"
                        type="date"
                        placeholder="选择出生日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="年龄">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="">
                    <!--<el-input></el-input>-->
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="婚姻状况" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="">
                    <!--<el-input></el-input>-->
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="证件类型" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="身份证号码">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否身份信息验证">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                      <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="">
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="身份证件截止日期">
                    <el-form-item>
                      <el-date-picker
                        v-model="ruleForm.data1"
                        type="date"
                        placeholder="选择身份证件截止日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="文化程度" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="民族" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="政治面貌" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="身份" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="年龄（作案时）">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="身份证件截止日期">
                    <el-form-item>
                      <el-date-picker
                        v-model="ruleForm.data1"
                        type="date"
                        placeholder="选择身份证件截止日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="年龄（审判时）">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="">

                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="行为能力状况" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="刑事责任能力" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="国别或地区" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col>
                  <el-form-item label="流动人员">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="户籍所在地" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-input></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="经常居住地" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-input></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="现地址" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-input></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="涉军情况" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <!--<el-input></el-input>-->
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="特殊生理或病理">
                    <el-checkbox-group v-model="checkList" size="">
                      <el-checkbox label="又聋又哑"></el-checkbox>
                      <el-checkbox label="患精神病"></el-checkbox>
                      <el-checkbox label="患恶性传染病"></el-checkbox>
                      <el-checkbox label="盲人"></el-checkbox>
                      <el-checkbox label="聋人"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="">
                    <el-checkbox-group v-model="checkList" size="">
                      <el-checkbox label="哑人"></el-checkbox>
                      <el-checkbox label="孕妇"></el-checkbox>
                      <el-checkbox label="其他"></el-checkbox>
                    </el-checkbox-group>
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
                      <select-tree v-model="selected" :options="options" :props="defaultProps" />
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
                  <el-form-item label="单位犯罪责任人">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="罪犯类型" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>

            </el-form>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <!--工作单位信息-->
    <div class="box-header">
      <div class="panel-title">
        <i></i>
        <span>工作单位信息</span>
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
                  <el-form-item label="工作单位名称">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="工作单位类型" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否中央国家机关">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
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

    <!--涉人大代表/政协委员信息-->
    <div class="box-header">
      <div class="panel-title">
        <i></i>
        <span>涉人大代表/政协委员信息</span>
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
                  <el-form-item label="是否人大代表">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
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

    <!--涉侨信息-->
    <div class="box-header">
      <div class="panel-title">
        <i></i>
        <span>涉侨信息</span>
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
                  <el-form-item label="是否外籍华人">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否涉侨">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
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

    <!--送达地址信息-->
    <div class="box-header">
      <div class="panel-title">
        <i></i>
        <span>送达地址信息</span>
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
                  <el-form-item label="是否接受电子送达">
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="指定签收人">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="确定送达地址">
                    <el-input
                      type="textarea"
                      :rows="3"
                      placeholder="请输入确定送达地址">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </el-collapse-transition>
    </div>

    <!--联系方式信息-->
    <div class="box-header">
      <div class="panel-title">
        <i></i>
        <span>联系方式信息</span>
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
                  <el-form-item label="联系方式类型" prop="select">
                    <select-tree v-model="selected" :options="options" :props="defaultProps" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="联系方式">
                    <el-input></el-input>
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
    name: 'basicInformation',
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
