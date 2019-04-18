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
    <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm" :show-message="false" :status-icon="true">
    <div class="con-zuj">
      <el-collapse-transition>
        <div class="ifShowDown">
          <div class="transition-box">
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="诉讼地位" prop="ssdw" required>
                    <el-select v-model="ruleForm.ssdw" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_ssdw"
                        :label="item.ssdwName"
                        :value="item.ssdw">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="自然人" prop="lx" required>
                    <el-select v-model="ruleForm.lx" filterable  clearable placeholder="请选择" @change="typeIf">
                      <el-option
                        v-for="item in options_lx"
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
                  <el-form-item label="姓名" prop="xm" required>
                    <el-input v-model="ruleForm.xm" clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="别名">
                    <el-input v-model="ruleForm.bm" clearable></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="曾用名" clearable>
                    <el-input v-model="ruleForm.cym"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="英文名">
                    <el-input v-model="ruleForm.ywm" clearable></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="性别" prop="xb" required>
                    <el-select v-model="ruleForm.xb" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_xb"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="出生日期" required>
                    <el-form-item prop="csrq">
                      <el-date-picker
                        v-model="ruleForm.csrq"
                        type="date"
                        suffix-icon="el-icon-date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择出生日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="年龄">
                    <el-input v-model="ruleForm.nl" clearable></el-input>
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
                  <el-form-item label="婚姻状况">
                    <el-select v-model="ruleForm.hyzk" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_hyzk"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
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
                  <el-form-item label="证件类型" prop="zjlx" required>
                    <el-select v-model="ruleForm.zjlx" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_zjlx"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="身份证号码">
                    <el-input v-model="ruleForm.sfzhm"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否身份信息验证">
                    <el-radio v-model="ruleForm.sfsfzxxyz" label="1">是</el-radio>
                      <el-radio v-model="ruleForm.sfsfzxxyz" label="2">否</el-radio>
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
                        v-model="ruleForm.sfzjjzrq"
                        type="date"
                        suffix-icon="el-icon-date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择身份证件截止日期">
                      </el-date-picker>
                    </el-form-item>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="文化程度">
                    <el-select v-model="ruleForm.whcd" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_whcd"
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
                  <el-form-item label="民族" prop="mz" required>
                    <el-select v-model="ruleForm.mz" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_mz"
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
                  <el-form-item label="政治面貌" prop="zzmm" required>
                    <el-select v-model="ruleForm.zzmm" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_zzmm"
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
                  <el-form-item label="身份" prop="sf" required>
                    <el-select v-model="ruleForm.sf" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_sf"
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
                  <el-form-item label="年龄（作案时）" prop="zanl" required>
                    <el-input v-model="ruleForm.zanl" clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="作案时间">
                    <el-form-item>
                      <el-date-picker
                        v-model="ruleForm.zasj"
                        type="date"
                        placeholder="选择作案时间">
                      </el-date-picker>
                    </el-form-item>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="年龄（审判时）">
                    <el-input v-model="ruleForm.spnl"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="">

                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="行为能力状况">
                    <el-select v-model="ruleForm.xwnlzk" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_xwnlzk"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="刑事责任能力">
                    <el-select v-model="ruleForm.xszrnl" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_xszrnl"
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
                  <el-form-item label="国别或地区">
                    <el-select v-model="ruleForm.gjdq" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_gjdq"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="流动人员">
                    <el-radio v-model="ruleForm.sfldry" label="1">是</el-radio>
                    <el-radio v-model="ruleForm.sfldry" label="2">否</el-radio>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="户籍所在地">
                    <select-tree v-model="ruleForm.hjszd" :options="options_hjszd" :props="defaultProps_hjszd" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-input></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="经常居住地">
                    <select-tree v-model="ruleForm.jcjzd" :options="options_jcjzd" :props="defaultProps_hjszd" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-input></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="现地址">
                    <select-tree v-model="ruleForm.xzz" :options="options_xzz" :props="defaultProps_hjszd" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-input></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="涉军情况">
                    <el-select v-model="ruleForm.sjqk" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_sjqk"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <!--<el-input></el-input>-->
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="特殊生理或病理">
                    <el-checkbox-group v-model="tssLhbl1" size="" @change="gaibxuanz">
                      <el-checkbox label="1">又聋又哑</el-checkbox>
                      <el-checkbox label="2">患精神病</el-checkbox>
                      <el-checkbox label="3">患恶性传染病</el-checkbox>
                      <el-checkbox label="4">聋人</el-checkbox>
                      <el-checkbox label="5">哑人</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="">
                    <el-checkbox-group v-model="tssLhbl1" size="" @change="gaibxuanz">
                      <el-checkbox label="6">盲人</el-checkbox>
                      <el-checkbox label="7">孕妇</el-checkbox>
                      <el-checkbox label="255">其他</el-checkbox>
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
                    <el-radio v-model="ruleForm.sfdwfzzrr" label="1">是</el-radio>
                    <el-radio v-model="ruleForm.sfdwfzzrr" label="2">否</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="罪犯类型" prop="select">
                    <el-select v-model="ruleForm.zflx" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_zflx"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
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
        <div  class="ifShowDown">
          <div class="transition-box">
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="工作单位名称">
                    <el-input v-model="ruleForm.gzdwmc"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="工作单位类型">
                    <el-select v-model="ruleForm.gzdwlx" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_gzdwlx"
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
                  <el-form-item label="是否中央国家机关">
                    <el-radio v-model="ruleForm.sfzygjjg" label="1">是</el-radio>
                    <el-radio v-model="ruleForm.sfzygjjg" label="2">否</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
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
        <div  class="ifShowDown">
          <div class="transition-box">
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否人大代表">
                    <el-radio v-model="ruleForm.sfrddb" label="1">是</el-radio>
                    <el-radio v-model="ruleForm.sfrddb" label="2">否</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
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
        <div  class="ifShowDown">
          <div class="transition-box">
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否外籍华人">
                    <el-radio v-model="ruleForm.sfwjhr" label="1">是</el-radio>
                    <el-radio v-model="ruleForm.sfwjhr" label="2">否</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否涉侨">
                    <el-radio v-model="ruleForm.sfsq" label="1">是</el-radio>
                    <el-radio v-model="ruleForm.sfsq" label="2">否</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
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
        <div  class="ifShowDown">
          <div class="transition-box">
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="是否接受电子送达">
                    <el-radio v-model="ruleForm.sfjsdzsd" label="1">是</el-radio>
                    <el-radio v-model="ruleForm.sfjsdzsd" label="2">否</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="指定签收人">
                    <el-input v-model="ruleForm.zdqsr"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">

                </el-col>
              </el-row>
              <el-row :gutter="80">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <el-form-item label="确定送达地址">
                    <el-input
                      v-model="ruleForm.qdsddz"
                      type="textarea"
                      :rows="3"
                      placeholder="请输入确定送达地址">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
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
        <div  class="ifShowDown">
          <div class="transition-box">
              <el-row :gutter="80">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="联系方式类型">
                    <el-select v-model="ruleForm.lxfslx" filterable  clearable placeholder="请选择">
                      <el-option
                        v-for="item in options_lxfslx"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="联系方式">
                    <el-input v-model="ruleForm.lxfs"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    </el-form>
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
        tssLhbl1:[],
        ruleForm: {
          // select:'',
          // domains: [],
          tssLhbl:'',
          // 基本信息
          ssdw:'',
          lx:'',
          xm:'',
          bm:'',
          cym:'',
          ywm:'',
          xb:'',
          csrq:'',
          nl:'',
          hyzk:'',
          zjlx:'',
          sfzhm:'',
          sfsfzxxyz:'2',
          sfzjjzrq:'',
          whcd:'',
          mz:'',
          zzmm:'',
          sf:'',
          zanl:'',
          zasj:'',
          spnl:'',
          xwnlzk:'',
          xszrnl:'',
          gjdq:'',
          sfldry:'2',
          hjszd:'',
          jcjzd:'',
          xzz:'',
          sjqk:'',
          sfdwfzzrr:'2',
          zflx:'',
          //工作单位信息
          gzdwmc:'',
          gzdwlx:'',
          sfzygjjg:'2',
          sfrddb:'2',
          sqxx:'',
          sfwjhr:'2',
          sfsq:'2',
          sfjsdzsd:'2',
          zdqsr:'',
          qdsddz:'',
          lxfslx:'',
          lxfs:'',
        },rules: {
          csrq: [
            { required: true, message: '请选择收案日期'}
          ],ssdw: [
            { required: true, trigger: 'change'}
          ],lx:[
            {required: true, trigger: 'change'}
          ],xm:[
            {required: true, trigger: 'blur'}
          ],mz:[
            {required: true, trigger: 'change'}
          ],zzmm:[
            {required: true, trigger: 'change'}
          ],sf:[
            {required: true, trigger: 'change'}
          ],zanl:[
            {required: true, trigger: 'blur'}
          ]
        },
        // 类型
        options_lx: [{
          value: '1',
          label: '自然人'
        },{
          value: '2',
          label: '法人'
        },{
          value: '3',
          label: '非法人组织'
        }],
        options_xb:[{
          value: '0',
          label: '未知'
        },{
          value: '1',
          label: '男'
        },{
          value: '2',
          label: '女'
        }],
        options_sjqk:[
          {
            value: '1',
            label: '无'
          },{
            value: '2',
            label: '军人'
          },{
            value: '3',
            label: '军队'
          },{
            value: '4',
            label: '军属'
          },
        ],
        options_zflx:[
          {
            value: '1',
            label: '曾犯罪'
          },{
            value: '2',
            label: '曾劳教'
          },{
            value: '3',
            label: '累犯'
          }
        ],
        options_hyzk:[],
        options_zjlx:[],
        options_whcd:[],
        options_mz:[],
        options_zzmm:[],
        options_sf:[],
        options_xwnlzk:[],
        options_xszrnl:[],
        options_gjdq:[],
        options_hjszd:[],
        options_jcjzd:[],
        options_xzz:[],
        options_gzdwlx:[],
        options_lxfslx:[],
        value1: '',
        // 默认选中值
        selected: 'A',
        // 数据默认字段
        defaultProps: {
          parent: 'id',   // 父级唯一标识
          value: 'value',          // 唯一标识
          label: 'name',       // 标签显示
          children: [], // 子级
        },
        defaultProps_hjszd:{
          parent: 'parentId',   // 父级唯一标识
          value: 'id',          // 唯一标识
          label: 'cityName',       // 标签显示
          children: 'children', // 子级
        },
        // 下拉树数据列表
        options: [],
        options_ssdw:[],  //诉讼地位数组
      }
    },
    methods:{
      // 点击收缩
      change:function (e) {
        if($(e.path[0]).hasClass('el-icon-arrow-right')){
          $(e.path[0]).removeClass('el-icon-arrow-right').addClass('el-icon-arrow-down');
          $(e.path[0]).parents('.box-header').next('.con-zuj').find('.ifShowDown').slideDown();
        }else{
          $(e.path[0]).removeClass('el-icon-arrow-down').addClass('el-icon-arrow-right');
          $(e.path[0]).parents('.box-header').next('.con-zuj').find('.ifShowDown').slideUp();
        }
      },
      typeIf : function(value){
        console.log(value);
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
      },gaibxuanz:function (val) {
        this.ruleForm.tssLhbl = val.join(',');
      }
    },created(){
      let _this = this;
      // 保存this变量，防止axios请求回调里面this指向发生变化
      // 获取诉讼地位
      this.axios.get('dict/ssdw').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_ssdw = response.data;
      }).catch(function (error) {console.log(error);});
      //获取婚姻状况
      this.axios.get('dict/hyzk').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_hyzk = response.data;
      }).catch(function (error) {console.log(error);});
      //获取证件类型
      this.axios.get('dict/zjlx').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_zjlx = response.data;
      }).catch(function (error) {console.log(error);});
      //获取文化程度
      this.axios.get('dict/whcd').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_whcd = response.data;
      }).catch(function (error) {console.log(error);});
      //获取民族
      this.axios.get('dict/mz').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_mz = response.data;
      }).catch(function (error) {console.log(error);});
      //获取政治面貌
      this.axios.get('dict/zzmm').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_zzmm = response.data;
      }).catch(function (error) {console.log(error);});
      //获取身份
      this.axios.get('dict/sf').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_sf = response.data;
      }).catch(function (error) {console.log(error);});
      //获取行为状况能力
      this.axios.get('dict/xwnlzk').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_xwnlzk = response.data;
      }).catch(function (error) {console.log(error);});
      //获取刑事责任能力
      this.axios.get('dict/xszrnl').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_xszrnl = response.data;
      }).catch(function (error) {console.log(error);});
      //获取国别或地区
      this.axios.get('dict/gbhdq').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_gjdq = response.data;
      }).catch(function (error) {console.log(error);});
      //获取户籍所在地 和 经常居住地 和现住址
      this.axios.get('dict/szd').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_hjszd = response.data;
        _this.options_jcjzd = response.data;
        _this.options_xzz = response.data;
      }).catch(function (error) {console.log(error);});
      //获取工作单位类型
      this.axios.get('dict/gzdwlx').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_gzdwlx = response.data;
      }).catch(function (error) {console.log(error);});
      //获取工作单位类型
      this.axios.get('dict/lxfslx').then(function (response) {//将获取的数据赋值到下拉树中
        _this.options_lxfslx = response.data;
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
