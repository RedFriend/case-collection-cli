<!--suppress ALL -->
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
        <div class="ifShowDown">
          <div class="transition-box">
            <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm" :show-message="false" :status-icon="true">
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="案件名称">
                    <el-input v-model="ruleForm.ajmc"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="本院案号">
                    <el-input v-model="ruleForm.byha"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="收案日期"  required>
                    <el-form-item  prop="sarq">
                      <el-date-picker
                        v-model="ruleForm.sarq"
                        type="date"
                        suffix-icon="el-icon-date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择收案日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="收案登记人">
                    <el-input v-model="ruleForm.sadjr"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="适用程序" prop="sycx" required>
                    <el-select v-model="ruleForm.sycx" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_sycx"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <!--<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">-->
                  <!--<el-form-item label="承办部门" prop="cbbm" required>-->
                    <!--<select-tree v-model="ruleForm.cbbm" :options="options100" :props="defaultProps" disabled />-->
                  <!--</el-form-item>-->
                <!--</el-col>-->
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="收案来源" prop="ajly" required>
                    <el-select v-model="ruleForm.ajly" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <!--<el-row :gutter="80">-->
                <!--<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">-->
                  <!--&lt;!&ndash;<el-form-item label="适用审限" prop="select">&ndash;&gt;-->
                    <!--&lt;!&ndash;<select-tree v-model="ruleForm.selected" :options="options" :props="defaultProps" />&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
                <!--</el-col>-->
              <!--</el-row>-->
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="">
                    <!--<el-input></el-input>-->
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="公诉机关">
                    <el-input v-model="ruleForm.gsjg"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="公诉人">
                    <el-input v-model="ruleForm.gsr1"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="公诉书编号">
                    <el-input v-model="ruleForm.gssbh"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="" prop="select">
                    <!--<select-tree v-model="ruleForm.selected" :options="options_shce" :props="defaultProps_shce" />-->
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="管辖依据" prop="lagxyj1" required>
                    <el-select v-model="ruleForm.lagxyj1" multiple filterable placeholder="请选择" @change="lacgyij">
                      <el-option
                        v-for="item in options_gxyj"
                        :key="item.value"
                        :label="item.name"
                        :value="item.name">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否跨行政区划">
                    <el-radio v-model="ruleForm.kxzqh" label="1">是</el-radio>
                    <el-radio v-model="ruleForm.kxzqh" label="2">否</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="类型代字">
                    <el-select  v-model="ruleForm.value1" disabled>
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
                    <el-radio @change="ifspan" v-model="ruleForm.splcgk" label="1">是</el-radio>
                    <el-radio @change="ifspan" v-model="ruleForm.splcgk" label="2">否</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="审判流程不公开原因" v-show="ifshenpan">
                    <el-select  v-model="ruleForm.value2">
                      <el-option
                        v-for="item in options6"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="诉讼请求">
                    <el-input
                      v-model="ruleForm.ssqq"
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
                      v-model="ruleForm.ssyly"
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
                      v-model="ruleForm.remark"
                      type="textarea"
                      :rows="3"
                      placeholder="请输入备注">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="立案案由" prop="laay">
                    <select-tree v-model="ruleForm.laay" :options="options" :props="defaultProps" />
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
              <!--<el-row :gutter="80">-->
                <!--<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
                  <!--<el-form-item label="">-->
                    <!--<el-button type="primary" @click="addDomain"><i class="el-icon-plus"></i>增加附加案由</el-button>-->
                  <!--</el-form-item>-->
                <!--</el-col>-->
              <!--</el-row>-->
              <div
                v-for="(domain, index) in ruleForm.domains"
                :key="domain.key"
                :prop="'domains.' + index + '.value'">
                <el-row>
                  <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form-item  label="立案案由">
                      <select-tree v-model="ruleForm.laay" :options="options" :props="defaultProps" />
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
                        v-model="ruleForm.ayjtms"
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
                  <el-form-item label="检察院建议适用程序">
                    <el-select v-model="ruleForm.jxyspcx" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_jc"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
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
        ifshenpan:false,
        ruleForm: {
          lagxyj1:[],
          lagxyj:'',
          ajmc:'',
          byha:'',
          sarq: '',
          sadjr:'',
          cbbm:'',
          ajly:'',
          sycx:'',
          gsjg:'',
          gsr1:'',
          gssbh:'',
          kxzqh:'',
          splcgk:'',
          select:'',
          value1: '',
          value2: '',
          ssqq:'',
          ssyly:'',
          // domains: [],
          // 默认选中值
          jxyspcx: '',
          ayjtms:'',
          laay:'',
          cbfy:'2583',
        },rules: {
          sarq: [
            { required: true, message: '请选择收案日期'}
          ],ajly: [
            { required: true}
          ],cbbm: [
            { required: true, message: '承办部门不能为空', trigger: 'change'}
          ],sycx: [
            { required: true, trigger: 'change'}
          ],lagxyj1: [
            { required: true, message: '立案管辖依据不能为空', trigger: 'change'}
          ],laay: [
            { required: true, message: '立案案由不能为空', trigger: 'change'}
          ]
        },
        options5: [{
          value: '选项1',
          label: '黄金糕'
        }],options6: [{
          value: '1',
          label: '涉及国家机密'
        },{
          value: '2',
          label: '涉及商业机密'
        },{
          value: '3',
          label: '涉及个人隐私'
        },{
          value: '4',
          label: '其他不应公开的情形'
        },],
        options100:[],
        // 数据默认字段
        defaultProps: {
          parent: 'id',   // 父级唯一标识
          value: 'ayDm',          // 唯一标识
          label: 'ayMc',       // 标签显示
          children: 'children', // 子级
        },defaultProps1: {
          parent: 'id',   // 父级唯一标识
          value: 'value',          // 唯一标识
          label: 'name',       // 标签显示
          children: [], // 子级
        },defaultProps_jc:{
          parent: 'id',   // 父级唯一标识
          value: 'value',          // 唯一标识
          label: 'name',       // 标签显示
          children: [], // 子级
        },defaultProps_gxyj:{
          parent: 'id',   // 父级唯一标识
          value: 'value',          // 唯一标识
          label: 'name',       // 标签显示
          children: [], // 子级
        },
        // 下拉树数据列表
        options: [],
        options1: [],
        options_jc:[],
        options_gxyj:[],
        options_sycx:[]
      }
    },
    methods:{
      change:function (e) {
        if($(e.path[0]).hasClass('el-icon-arrow-right')){
          $(e.path[0]).removeClass('el-icon-arrow-right').addClass('el-icon-arrow-down');
          $(e.path[0]).parents('.box-header').next('.con-zuj').find('.ifShowDown').slideDown();
        }else{
          $(e.path[0]).removeClass('el-icon-arrow-down').addClass('el-icon-arrow-right');
          $(e.path[0]).parents('.box-header').next('.con-zuj').find('.ifShowDown').slideUp();
        }
      },
      lacgyij:function(value){
        this.ruleForm.lagxyj = value.join(',');
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
      },ifspan(){
        if(this.ruleForm.splcgk == 2){
          this.ifshenpan = true;
        }else{
          this.ifshenpan = false;
        }
      },
    },created(){
      let _this = this;
      // 保存this变量，防止axios请求回调里面this指向发生变化
      // 获取案由
      this.axios.get('dict/ay').then(function (response) {//将获取的数据赋值到下拉树中
          _this.options = response.data;
        }).catch(function (error) {console.log(error);});

      // 获取收案来源
      this.axios.get('dict/saly').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options1 = response.data;
      }).catch(function (error) {console.log(error);});

      // 获取检察院建议适用程序
      this.axios.get('dict/jcyjycycx').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_jc = response.data;
      }).catch(function (error) {console.log(error);});

      // 获取管辖依据
      this.axios.get('dict/gxyj?ajlx=0200').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_gxyj = response.data;
      }).catch(function (error) {console.log(error);});

      // 获取适用程序
      this.axios.get('dict/sycx').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_sycx = response.data;
      }).catch(function (error) {console.log(error);});
    }
  }
</script>

<style scoped>
  @import '../../assets/css/style.css';
</style>
