<template>
  <div class="weixiu">
    <div class="bread">
      <s-breadcrumb />
    </div>
    <div class="weixiu-btm">
      <div class="weixiu-btm-title">
        <div class="weixiu-btm-title-right">
          <router-link :to="{ name: 'securityadd' }" class="right-item">添加</router-link>
          <router-link :to="{ name: 'securityadd' }" class="right-item">导入</router-link>
          <router-link :to="{ name: 'securityadd' }" class="right-item">导出</router-link>
          <!-- <div class="right-item">导入</div> -->
          <!-- <div class="right-item">导出</div> -->
        </div>
      </div>
      <div class="weixiu-btm-center">
        <div class="center-title" :class="isShow ? 'center-title-active' : ''">
          <p>
            <span class="p-name">归属装备</span>
            <a-tree-select
              :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
              :treeData="treeData"
              placeholder="请选择装备"
              treeDefaultExpandAll
              v-model="value"
            >
              <!-- <span slot="title" slot-scope="{ key, value }" v-if="key === '0-0-1'"> Child Node1 {{ value }} </span> -->
            </a-tree-select>
          </p>
          <p>
            <span class="p-name">设备状态</span>
            <input
              v-model="wxPeople"
              type="text"
              placeholder="请输入对应装备"
              placeholder-style="color:rgba(0, 0, 0, 0.65)"
            />
          </p>
          <p>
            <span class="p-name">录入人</span>
            <input v-model="lrPeople" type="text" placeholder="请输入录入人" />
          </p>
          <p>
            <span class="p-name">录入时间</span>
            <a-date-picker v-model="lrTime" />
          </p>
          <p>
            <span class="p-name">检测对象</span>
            <input v-model="lrPeople" type="text" placeholder="请输入关键词" />
          </p>
          <p>
            <span class="p-name">研制单位</span>
            <input v-model="lrPeople" type="text" placeholder="请输入关键词" />
          </p>
          <div class="btns" :class="isShow ? 'btns-active' : ''">
            <h3 @click="searchList">查询</h3>
            <h4 @click="resetSearch">重置</h4>
            <h5 @click="bindShow">
              {{ isShow ? '展开' : '收起' }}
              <i class="el-submenu__icon-arrow" :class="isShow ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"></i>
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div class="wxTable">
      <a-table :columns="columns" :dataSource="data" :pagination="pagination">
        <span slot="customTitle"></span>
        <span slot="action" slot-scope="text, record" class="action-btn-c">
          <a-popconfirm title="是否要删除此行？" okText="好的" cancelText="等一等">
            <a-icon slot="icon" type="question-circle-o" style="color:#38a4a6" />
            <span class="caozuo-btn">删除</span>
          </a-popconfirm>
           <router-link :to="{ name: 'securityedited' }" class="caozuo-btn">编辑</router-link>
          <span class="caozuo-btn" @click="gotoSecurityDetails">详情</span>
        </span>
      </a-table>
      <SecurityDetails v-if="gotoSecurityDetailsVisible" v-on:fn="bol=>{gotoSecurityDetailsVisible=bol}"></SecurityDetails>
    </div>
  </div>
</template>

<script>
import SecurityDetails from './operate/SecurityDetails'
import Breadcrumb from '@/components/tools/Breadcrumb'
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1746198_bc3vt2pn0h.js' // 在 iconfont.cn 上生成
})
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
    dataIndex: 'num',
    key: 'num',
    width: 100,
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
  },
  {
    title: '编号',
    dataIndex: 'bianhao',
    key: 'bianhao',
    ellipsis: true,
  },
  {
    title: '检测对象',
    dataIndex: 'duixiang',
    key: 'duixiang',
    ellipsis: true,
    width: 200,
  },
  {
    title: '设备状态',
    dataIndex: 'zhuangtai',
    key: 'zhuangtai',
    ellipsis: true,
  },
  {
    title: '研制单位',
    dataIndex: 'danwei',
    key: 'danwei',
    ellipsis: true,
  },
  {
    title: '录入人',
    dataIndex: 'luru',
    key: 'luru',
    ellipsis: true,
  },
  {
    title: '录入时间',
    dataIndex: 'lurutime',
    key: 'lurutime',
    ellipsis: true,
    // width:133
  },
  {
    title: '操作',
    key: 'caozuo',
    ellipsis: true,
    align: 'center',
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    num: '01',
    name: '火箭炮动力系统',
    bianhao: 'JT100000-002034',
    duixiang: '火箭炮',
    zhuangtai: '正常',
    danwei: '火箭炮部门',
    luru: '木兰长江',
    lurutime: '2019-06-0112：30'
  },
  {
    key: '2',
    num: '01',
    name: '火箭炮动力系统',
    bianhao: 'JT100000-002034',
    duixiang: '火箭炮',
    zhuangtai: '正常',
    danwei: '火箭炮部门',
    luru: '木兰长江',
    lurutime: '2019-06-0112：30'
  },
  {
    key: '3',
    num: '01',
    name: '火箭炮动力系统',
    bianhao: 'JT100000-002034',
    duixiang: '火箭炮',
    zhuangtai: '正常',
    danwei: '火箭炮部门',
    luru: '木兰长江',
    lurutime: '2019-06-0112：30'
  },
  {
    key: '4',
    num: '01',
    name: '火箭炮动力系统',
    bianhao: 'JT100000-002034',
    duixiang: '火箭炮',
    zhuangtai: '正常',
    danwei: '火箭炮部门',
    luru: '木兰长江',
    lurutime: '2019-06-0112：30'
  },
  {
    key: '5',
    num: '01',
    name: '火箭炮动力系统',
    bianhao: 'JT100000-002034',
    duixiang: '火箭炮',
    zhuangtai: '正常',
    danwei: '火箭炮部门',
    luru: '木兰长江',
    lurutime: '2019-06-0112：30'
  },
  {
    key: '6',
    num: '01',
    name: '火箭炮动力系统',
    bianhao: 'JT100000-002034',
    duixiang: '火箭炮',
    zhuangtai: '正常',
    danwei: '火箭炮部门',
    luru: '木兰长江',
    lurutime: '2019-06-0112：30'
  },
  {
    key: '7',
    num: '01',
    name: '火箭炮动力系统',
    bianhao: 'JT100000-002034',
    duixiang: '火箭炮',
    zhuangtai: '正常',
    danwei: '火箭炮部门',
    luru: '木兰长江',
    lurutime: '2019-06-0112：30'
  }
]
export default {
  components: {
    's-breadcrumb': Breadcrumb,
    IconFont,
    SecurityDetails
  },
  data() {
    return {
      data: [],
      //   navIndex: 0,
      isShow: false,
      zbName: null,
      wxPeople: null,
      wxTime: null,
      lrPeople: null,
      zbCode: null,
      wxGongshi: null,
      bdName: null,
      lrTime: null,
      columns,
      data,
      value: undefined,
      treeData,
      gotoSecurityDetailsVisible:false,
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
  methods: {
    
    searchList() {},
    resetSearch() {},
    bindShow() {
      this.isShow = !this.isShow
      console.log(this.lrTime, this.wxTime)
    },
    gotoSecurityDetails(){
        this.gotoSecurityDetailsVisible=true
    },
  },
  watch: {
    value(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>
.weixiu-btm {
  background: #fff;
  border-radius: 8px 8px 0 0;
  margin-top: 24px;
  &-title {
    height: 60px;
    position: relative;
    border-bottom: 1px solid #ebf6f6;
    &-left {
      display: flex;
      align-items: flex-end;
      .left-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        font-size: 14px;
        box-sizing: border-box;
        border-bottom: 2px solid rgba(0, 0, 0, 0);
        padding: 0 10px 5px 10px;
        margin: 0 25px;
        color: #6a7d9e;
        cursor: pointer;
        svg {
          margin-right: 5px;
        }
      }
    }
    &-right {
      display: flex;
      position: absolute;
      top: 16px;
      right: 20px;
      .right-item {
        width: 60px;
        height: 24px;
        text-align: center;
        color: #1c9399;
        font-size: 14px;
        line-height: 24px;
        border-radius: 3px;
        margin-left: 20px;
        cursor: pointer;
        border: 1px solid rgba(28, 147, 153, 1);
      }
    }
  }
  &-center {
    padding: 20px 0;
    .center-title-active {
      transition: all 0.5s;
      height: 55px !important;
      padding-right: 240px !important;
    }
    .center-title {
      transition: all 0.5s;
      // height: 140px;
      background: rgba(255, 255, 255, 0.1);
      padding: 3px 20px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      overflow: hidden;
      > p {
        width: 25%;
        font-size: 14px;
        display: flex;
        align-items: center;
        margin: 0 0 20px 0;
        color: #a0a0a0;
        .p-name {
          display: block;
          width: 80px;
          text-align: right;
          padding-right: 15px;
        }
        > input {
          width: 180px;
          height: 32px;
          border-radius: 3px;
          border: 1px solid rgba(220, 223, 230, 1);
          padding-left: 10px;
          color: #404040;
          &::-webkit-input-placeholder {
            color: #808080;
          }
          &::-moz-placeholder {
            color: #808080;
          }
          &:-moz-placeholder {
            color: #808080;
          }
          &:-ms-input-placeholder {
            color: #808080;
          }
        }
        /deep/.ant-calendar-picker-input.ant-input {
          width: 180px;
        }
        /deep/.ant-time-picker {
          width: 180px;
        }
        // 树状导航选择
        /deep/.ant-select {
          width: 180px;
        }
      }
    }
    .center-center {
      padding-left: 10px;
      display: flex;
      > p {
        font-size: 14px;
        color: #2a3f54;
        margin: 0 10px 0 0;
        > span {
          padding-right: 20px;
          cursor: pointer;
          color: #757575;
        }
        .span-active {
          color: #1c9399;
        }
      }
    }
    .btns-active {
      bottom: 20px !important;
    }
    .btns {
      display: flex;
      align-items: center;
      position: absolute;
      right: 20px;
      bottom: 20px;
      > h3 {
        width: 64px;
        height: 32px;
        background: rgba(17, 144, 185, 1);
        border-radius: 3px;
        margin: 0 20px 0 40px;
        color: #fff;
        font-size: 14px;
        line-height: 32px;
        font-weight: 100;
        text-align: center;
        cursor: pointer;
      }

      > h4 {
        width: 64px;
        height: 32px;
        border-radius: 3px;
        border: 1px solid rgba(28, 147, 153, 1);
        color: #1c9399;
        font-size: 14px;
        line-height: 32px;
        font-weight: 100;
        text-align: center;
        margin: 0;
        cursor: pointer;
      }

      > h5 {
        color: #1c9399;
        font-size: 14px;
        font-weight: 100;
        text-align: center;
        cursor: pointer;
        margin: 0 20px;
        > i {
          right: 0px;
          margin-top: -5px;
        }
      }
    }
  }
}
.wxTable {
  background: #fff;
  border-top: 1px solid #e4e4e4;
  height: 570px;
}
/deep/.ant-table-thead > tr > th {
  background: #fff;
}
/deep/.ant-table-thead > tr > th:last-child {
  width: 150px;
}
/deep/.ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
  background: #f5f5f5;
}
//   .caozuo-btn {
//     font-size: 14px;
//     color: #1c9399;
//     cursor: pointer;
//   }
.caozuo-btn {
    font-size: 14px;
    color: #1c9399;
    cursor: pointer;
    margin-right: 10px;
    &:nth-child(3) {
      margin-right: 0;
    }
  }
.left-item-active {
  border-bottom: 2px solid #1c9399 !important;
  color: #1c9399 !important;
}
.fenxi-top {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  &-l {
    width: 49%;
    background: #fff;
    border-radius: 8px;
  }
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
/deep/.ant-table-pagination.ant-pagination {
  margin-top: 40px;
}
/deep/.ant-pagination-item{
   border: 1px solid #1c9399;
   color:#1c9399 ;
   background: #fff;
}
/deep/.ant-pagination-item-active {
  background: rgba(28, 147, 153, 1);
}
/deep/.ant-pagination-item-active a {
  color: #fff;
}
/deep/.ant-table-thead > tr > th:first-child{
	padding-left: 40px;
}
/deep/.ant-table-row td:first-child{
	padding-left: 40px;
}
</style>
