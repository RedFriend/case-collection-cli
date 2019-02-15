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
          <i class="el-icon-arrow-down active" @click="change"></i>
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
          :name="item.name"
        >
          <newAgent></newAgent>
        </el-tab-pane>
      </el-tabs>
    </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
  import SelectTree from '../common/SelectTree.vue';
  import SelectTagTree from '../common/SelecTagTree.vue';
  import newAgent from './newAgent.vue';
  export default {
    name: 'basicInformation',
    components: {
      'select-tree':SelectTree,
      'select-tag-tree':SelectTagTree,
      'newAgent':newAgent,
    },
    data () {
      return {
        radio7: '1',
        dialogVisible: false,
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
        editableTabsValue2: '2',
        editableTabs2: [],
        tabIndex: 0,
        selfIndex:0,
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
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        let lengX = this.editableTabs2.length;
        if(lengX > 1){
          this.$notify.info({
            title: '新增代理人',
            message: '最多添加两个代理人',
            type: 'warning'
          });
        }else  if(lengX<2){
          this.editableTabs2.push({
            title: '新建代理人'+newTabName,
            name: newTabName,
            content: ''
          });
          this.editableTabsValue2 = newTabName;
        }


      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
</style>
