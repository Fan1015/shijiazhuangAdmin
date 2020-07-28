<template>
  <div class="custom-content" style="height:100%">
    <!-- 装备器材目录管理 -->
    <div class="router-name">
      <div class="router-name-left">
        <BreadCrumb></BreadCrumb>
      </div>
      <div class="router-name-right">
        <span>添加</span>
        <span>导入</span>
        <span>导出</span>
      </div>
    </div>

    <!--  -->
    <div class="user-form">
      <div class="user-form-header">
        <div class="user-form-list">
          <label class="user-form-list-l" for="">类号</label>
          <a-tree-select
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
              :treeData="treeData"
              placeholder="请选择装备"
              treeDefaultExpandAll
              v-model="value"
            >
              <span slot="title" slot-scope="{ key, value }" v-if="key === '0-0-1'"> Child Node1 {{ value }} </span>
            </a-tree-select>
        </div>

        <div class="user-form-list">
          <label class="user-form-list-l" for="">名称</label>
          <input type="text" placeholder="请输入" />
        </div>
        <div class="user-form-list">
          <div>查询</div>
          <div>重置</div>
        </div>
      </div>
    </div>

   <!--  -->

  <div class="wxTable" style="background:#fff; height:82%">
      <a-table :pagination="pagination" :columns="columns" :dataSource="data" >
        <div slot="guzhang" slot-scope="guzhang" class="guzhang">
          <div class="solt"><span>器材代码：</span>{{guzhang.gzName}}</div>
          <div class="solt"><span>类号：</span>{{guzhang.zbName}}</div>
          <div class="solt"><span>图号规格：</span>{{guzhang.zbCode}}</div>
          <div class="solt"><span>名称：</span>{{guzhang.gzName}}</div>
          <div class="solt"><span>单车基数：</span>{{guzhang.zbName}}</div>
          <div class="solt"><span>单位：</span>{{guzhang.zbCode}}</div>
        </div>
        <div slot="miaoshu" slot-scope="miaoshu" class="miaoshu">
          <div class="solt"><span>故障现象：</span>{{miaoshu.xianxiang}}</div>
          <div class="solt"><span>故障原因：</span>{{miaoshu.yuanyin}}</div>
          <div class="solt"><span>故障关键词：</span>{{miaoshu.guanjianci}}</div>
          <div class="solt"><span>故障关键词：</span>{{miaoshu.guanjianci}}</div>
        </div>
        <div slot="caozuo" class="caozuo">
          <p class="caozuo-btn">删除</p>
          <router-link class="caozuo-btn" :to="{name:'customedit'}">编辑</router-link>
          <p class="caozuo-btn" @click="gotoCustomDetails">详情</p>
        </div>
      </a-table>
      <CustomDetails v-if='gotoCustomDetailsVisible' v-on:fn="bol=>{gotoCustomDetailsVisible=bol}"></CustomDetails>
    </div>

  </div>
</template>

<script>
import BreadCrumb from '@/components/tools/Breadcrumb'
import CustomDetails from './operate/CustomDetails'
const treeData = [
  {
    title: '陆军',
    value: '0',
    key: '0',
    children: [
      {
        title: '防空兵',
        value: '0-1',
        key: '0-1'
      },
      {
        title: '炮兵',
        value: '0-2',
        key: '0-2',
        children: [
          {
            title: '火箭炮',
            value: '0-2-1',
            key: '0-2-1',
            children: [
              {
                title: 'PHL11式武器系统',
                value: '0-2-1-1',
                key: '0-2-1-1'
              },
              {
                title: '炮车',
                value: '0-2-1-2',
                key: '0-2-1-2'
              },
              {
                title: '弹药装填车',
                value: '0-2-1-3',
                key: '0-2-1-3'
              },
              {
                title: '动力系统',
                value: '0-2-1-4',
                key: '0-2-1-4'
              },
              {
                title: '瞄准系统',
                value: '0-2-1-5',
                key: '0-2-1-5'
              },
              {
                title: '转向系统',
                value: '0-2-1-6',
                key: '0-2-1-6'
              }
            ]
          },
          {
            title: '榴弹炮',
            value: '0-2-2',
            key: '0-2-2'
          },
          {
            title: '迫击炮',
            value: '0-2-3',
            key: '0-2-3'
          },
          {
            title: '侦察兵',
            value: '0-2-4',
            key: '0-2-4'
          }
        ]
      }
    ]
  },
  {
    title: '空军',
    value: '1',
    key: '1',
    children: [
      {
        title: '开飞机',
        value: '1-1',
        key: '1-1'
      }
    ]
  },
  {
    title: '海军',
    value: '2',
    key: '2',
    children: [
      {
        title: '舰长',
        value: '2-1',
        key: '2-1'
      }
    ]
  }
]
const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    width: 100,
  },
  
  {
    title: '器材信息',
    dataIndex: 'guzhang',
    key: 'guzhang',
    ellipsis: true,
    scopedSlots: { customRender: 'guzhang' },
    width: '18%',
    align: 'left'
  },
  
  {
    title: '定额',
    dataIndex: 'miaoshu',
    key: 'miaoshu',
    ellipsis: true,
    scopedSlots: { customRender: 'miaoshu' },
    align: 'left',
    width: '18%',
  },
 
  {
    title: '百台定额',
    dataIndex: 'danwei',
    key: 'danwei',
    ellipsis: true,
    align: 'left'
  },
  {
    title: '营库标准',
    dataIndex: 'wancheng',
    key: 'wancheng',
    align: 'left'
    // ellipsis: true,
  },
  {
    title: '旅库标准',
    dataIndex: 'luru',
    key: 'luru',
    ellipsis: true,
    align: 'left'
  },
  {
    title: '厂家',
    dataIndex: 'lurutime',
    key: 'lurutime',
    ellipsis: true,
    align: 'left'
  },
  {
    title: '操作',
    ellipsis: true,
    align: 'center',
    width:150,
    scopedSlots: { customRender: 'caozuo' },
  },
];

const data = [
  {
    key: '1',
    fanganID: 'JT100000-002034',
    danwei: 'xxx',
    guzhang: {
      gzName: 'xxx',
      zbName: '火箭炮',
      zbCode: 'jt1'
    },
    xitong: 'xxx',
    zhaiyao: 'xxxx',
    miaoshu: {
      xianxiang: 'xxx',
      yuanyin: '外力因素',
      guanjianci:'扳手'
    },
    wancheng: '描述排除故障',
    luru: '木兰长江',
    lurutime: '2018-03-05',
  },
  {
    key: '2',
    fanganID: 'JT100000-002034',
    danwei: 'xxx',
    guzhang: {
      gzName: 'xxx',
      zbName: '火箭炮',
      zbCode: 'jt1'
    },
    xitong: 'xxx',
    zhaiyao: 'xxxx',
    miaoshu: {
      xianxiang: 'xxx',
      yuanyin: '外力因素',
      guanjianci:'扳手'
    },
    wancheng: '描述排除故障',
    luru: '木兰长江',
    lurutime: '2018-03-05',
  },
  {
    key: '3',
    fanganID: 'JT100000-002034',
    danwei: 'xxx',
    guzhang: {
      gzName: 'xxx',
      zbName: '火箭炮',
      zbCode: 'jt1'
    },
    xitong: 'xxx',
    zhaiyao: 'xxxx',
    miaoshu: {
      xianxiang: 'xxx',
      yuanyin: '外力因素',
      guanjianci:'扳手'
    },
    wancheng: '描述排除故障',
    luru: '木兰长江',
    lurutime: '2018-03-05',
  },
   {
    key: '4',
    fanganID: 'JT100000-002034',
    danwei: 'xxx',
    guzhang: {
      gzName: 'xxx',
      zbName: '火箭炮',
      zbCode: 'jt1'
    },
    xitong: 'xxx',
    zhaiyao: 'xxxx',
    miaoshu: {
      xianxiang: 'xxx',
      yuanyin: '外力因素',
      guanjianci:'扳手'
    },
    wancheng: '描述排除故障',
    luru: '木兰长江',
    lurutime: '2018-03-05',
  },
];
export default {
  components: {
    BreadCrumb,
    CustomDetails
  },
  data() {
    return{
       data,
       columns,
        value: undefined,
      treeData,
       gotoCustomDetailsVisible:false,
       pagination: {
        total: 200,
        itemRender(current, type, originalElement) {
          if (type === 'prev') {
            return <a>Previous</a>
          } else if (type === 'next') {
            return <a>Next</a>
          }
          return originalElement
        }
      }
    }
  },

  methods:{
    gotoCustomDetails(){
      this.gotoCustomDetailsVisible=true;
    }
  }
}
</script>

<style lang="less" scoped>
.router-name {
  background: #fff;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #a0a0a0;
  // margin-top: 12px;
  padding-left: 12px;
  // background-color: #F4F4F4;
  .user-router-name {
    color: #21364d;
  }
  .router-name-right {
    // border-top-left-radius: 40px;
    // border-bottom-left-radius: 0px;
    padding-right: 40px;
    height: 60px;
    display: flex;
    align-items: center;
    background: #fff;
  }
  .router-name-right span {
    display: inline-block;
    text-align: center;
    width: 60px;
    height: 24px;
    border-radius: 3px;
    border: 1px solid rgba(28, 147, 153, 1);
    margin-left: 40px;
    font-size: 14px;
    color: #1c9399;
  }
}

.user-form {
  // margin-top: 70px;
  border-bottom: 1px solid #E4E4E4;
  background: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  .user-form-header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .user-form-list {
      display: flex;
      width: 33%;
      // margin-bottom: 20px;
      align-items: center;

      .user-form-list-l {
        margin-right: 20px;
        color: #a0a0a0;
      }
      &:nth-child(1) {
       justify-content: center;
      }
      &:nth-child(2) {
        justify-content: center;
      }
      
      &:nth-child(3) {
        justify-content: flex-end;
        padding-right: 76px;
        div {
          margin-left: 20px;
          width: 68px;
          height: 32px;
          border-radius: 3px;
          border: 1px solid rgba(28, 147, 153, 1);
          text-align: center;
          line-height: 32px;
        }
      }
      input {
        width: 256px;
        height: 32px;
        border: 1px solid #dcdfe6;
        outline: none;
        padding-left: 10px;
        color: #808080;
      }
      select {
        width: 188px;
        height: 32px;
        border: 1px solid #dcdfe6;
        outline: none;
        padding-left: 10px;
        color: #808080;
      }
       // 树状导航选择
        /deep/.ant-select {
          width: 225px;
        }
    }
  }
}

//分页
/deep/.ant-table-pagination{
  margin-right: 30px;
}
.resource-content{
  // background: #fff;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
/deep/.ant-pagination-next,
/deep/.ant-pagination-prev {
  display: inline-block;
  min-width: 32px;
  height: 32px;
  margin-right: 8px;
  font-family: Arial;
  line-height: 30px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  outline: 0;
  padding: 0 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/deep/.ant-pagination-item{
 background-color: #fff;
  border: 1px solid #1c9399;
  color: #1c9399;
}

/deep/.ant-table-pagination.ant-pagination {
  margin-top: 50px;
}
/deep/.ant-pagination-prev {
  border: 1px solid #1c9399;
  width: 85px;
}
/deep/.ant-pagination-next {
  border: 1px solid #1c9399;
  width: 63px;
  margin-right: 20px;
}
/deep/.ant-pagination-item-active {
  background: rgba(28, 147, 153, 1);
}
/deep/.ant-pagination-item-active a {
  color: #fff;
}

.guzhang{
  display: flex;
  flex-wrap: wrap;
  .solt{
    width: 45%;
    span{
      color: #59ACFF;
    }
  }
  .solt:nth-child(2n){
    margin-left: 5%;
  }
}

.miaoshu{
  display: flex;
  flex-wrap: wrap;
  .solt{
    width: 45%;
    span{
      color: #59ACFF;
    }
  }
  .solt:nth-child(2n){
    margin-left: 5%;
  }
}

.caozuo{
  display: flex;
  justify-content: space-between;
  color: #1C9399;
}
.caozuo-btn{
  cursor: pointer;
}

/deep/.ant-pagination{
  margin: 8% 2% 0 0;
}
/deep/.ant-table-thead > tr > th:first-child{
	padding-left: 30px;
}
/deep/.ant-table-row td:first-child{
	padding-left: 30px;
}
</style>
