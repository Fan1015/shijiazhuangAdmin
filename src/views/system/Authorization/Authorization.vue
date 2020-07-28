<template>
  <div class="weixiu">
    <div class="bread">
      <s-breadcrumb />
    </div>
    <div class="weixiu-btm">
      <div class="weixiu-btm-title">
        <div class="weixiu-btm-title-left">
          <div class="left-item" :class="navIndex == 0 ? 'left-item-active' : ''" @click="switchNav(0)">
            <icon-font type="icon-zhishi" />角色授权
          </div>
          <div class="left-item" :class="navIndex == 1 ? 'left-item-active' : ''" @click="switchNav(1)">
            <icon-font type="icon-fenxijuece" />权限授权
          </div>
        </div>
        <div class="weixiu-btm-title-right">
          <div class="right-item">添加</div>
          <div class="right-item">导入</div>
          <div class="right-item">导出</div>
        </div>
      </div>
      <div class="weixiu-btm-center" v-if="navIndex == 0">
        <div class="center-title" :class="isShow ? 'center-title-active' : ''">
          <p>
            <span class="p-name">角色名</span>
            <input v-model="zbName" type="text" placeholder="admin" />
          </p>
          <p>
            <span class="p-name">角色权限</span>
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
      <div v-if="navIndex == 0">
        <a-table :pagination="pagination" :columns="columns" :dataSource="data">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="customTitle"></span>
          <span slot="action" slot-scope="text, record" class="action-btn-c">
            <router-link class="action-btn" :to="{name:'awardrole'}">授权</router-link>
          </span>
        </a-table>
      </div>
    </div>
    <div class="wx-fenxi" v-if="navIndex == 1">
      <div class="fenxi-top">
        <div class="fenxi-top-l">
          <!-- 按需查询 -->
          <div class="inputselect">
            <div class="inputquery-root">
              <div class="inputquery-root-lf">
                <a-row type="flex" justify="space-between">
                  <a-col class="col1-1">
                    <div class="components-input-demo-size ">
                      <span class="input-point">权限名称</span>
                      <a-input placeholder="用户添加" />
                    </div>
                  </a-col>
                  <a-col class="col1-2">
                    <div class="components-input-demo-size">
                      <span class="input-point">录入人</span>
                      <a-input placeholder="请输入" />
                    </div>
                  </a-col>
                  <a-col class="col1-3">
                    <div class="components-input-demo-size">
                      <span class="input-point">录入时间</span>
                      <a-time-picker v-model="value" />
                    </div>
                  </a-col>
                </a-row>
              </div>
              <div class="inputquery-button">
                <a-button class="rg-nav-1  rg-nav-active">查询</a-button>
                <a-button class="rg-nav-2">重置</a-button>
              </div>
            </div>
          </div>
          <!-- table表格 -->
          <div class="table" v-if="navIndex == 1">
            <a-table :pagination="pagination" :columns="columns1" :dataSource="data1" style="height:10px">
              <a slot="name" slot-scope="text">{{ text }}</a>
              <span slot="customTitle"></span>
              <span slot="action" slot-scope="text, record" class="action-btn-c">
                <router-link class="action-btn" :to="{name:'grantpermissions'}">授权</router-link>
              </span>
            </a-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1746198_bc3vt2pn0h.js' // 在 iconfont.cn 上生成
})
const columns = [
  {
    title: '序号',
    dataIndex: 'age',
    key: 'age',
    width:150
  },
  {
    title: '角色名称',
    dataIndex: 'address',
    key: 'address3',
  },
  {
    title: '角色权限',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '角色描述',
    key: 'address1',
    dataIndex: 'address',
    scopedSlots: { customRender: 'address' },
  },
  {
    title: '录入人',
    dataIndex: 'address',
    key: 'address4',
    align: 'center'
  },
  {
    title: '录入时间',
    dataIndex: 'address',
    key: 'address5',
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
    align: 'center'
  }
]

const data = [
  {
    key: '1',
    name: 'admin',
    age: 1,
    address: '超级管理员',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: '超级管理员',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: '超级管理员',
    tags: ['cool', 'teacher']
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: '超级管理员',
    tags: ['cool', 'teacher']
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: '超级管理员',
    tags: ['cool', 'teacher']
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: '超级管理员',
    tags: ['cool', 'teacher']
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    address: '超级管理员',
    tags: ['cool', 'teacher']
  }
]
const columns1 = [
  {
    title: '序号',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '权限名称',
    dataIndex: 'address',
    key: 'address3'
  },
  {
    title: '权限链接',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '权限描述',
    key: 'address1',
    dataIndex: 'address',
    scopedSlots: { customRender: 'address' }
  },
  {
    title: '录入人',
    dataIndex: 'address',
    key: 'address4'
  },
  {
    title: '录入时间',
    dataIndex: 'address',
    key: 'address5'
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

const data1 = [
  {
    key: '1',
    name: 'admin',
    age: 1,
    address: '超级管理员',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: '超级管理员',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: '超级管理员',
    tags: ['cool', 'teacher']
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: '超级管理员',
    tags: ['cool', 'teacher']
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: '超级管理员',
    tags: ['cool', 'teacher']
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: '超级管理员',
    tags: ['cool', 'teacher']
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    address: '超级管理员',
    tags: ['cool', 'teacher']
  }
]

export default {
  components: {
    's-breadcrumb': Breadcrumb,
    IconFont
  },
  data() {
    return {
      data: [],
      navIndex: 0,
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
      columns1,
      data1,
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
    switchNav(value) {
      this.navIndex = value
    },
    searchList() {},
    resetSearch() {},
    bindShow() {
      this.isShow = !this.isShow
      console.log(this.lrTime, this.wxTime)
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
        width: 32%;
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
          width: 220px;
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
          width: 220px;
        }
        /deep/.ant-time-picker {
          width: 220px;
        }
        // 树状导航选择
        /deep/.ant-select {
          width: 220px;
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
  .solt {
    display: flex;
    color: #666666;
    > span {
      color: #3399ff;
    }
  }
  /deep/.ant-table-thead > tr > th {
    background: #fff;
  }
  /deep/.ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
    background: #f5f5f5;
  }

  .caozuo-btn {
    font-size: 14px;
    color: #1c9399;
    cursor: pointer;
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
/deep/.ant-table-wrapper {
  height: 560px;
}
/deep/.ant-table-body > table{
  border-top: 1px solid #E4E4E4;
}
/deep/.ant-table-pagination.ant-pagination {
  margin-top: 40px;
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
/deep/.ant-table-thead tr th:nth-child(7) {
  text-align: center;
}
/deep/.ant-table-row-level-0 td:nth-child(7) {
  text-align: center;
}
// 知识分析
.fenxi-top {
  margin: 0;
  .fenxi-top-l {
    width: 100%;
  }
}

/deep/.ant-spin-container{
  margin-top: 30px;
}
/* 按需查询inputquery */
.inputselect {
  height: 72px;
  background: #fff;
  border-top: 1px solid rgba(235, 246, 246, 1);
  padding-top: 20px;
}
// 知识分析input样式
.inputquery-root {
  display: flex;
  justify-content: space-between;
}
.inputquery-root-lf {
  width: 70%;
}
.rg-nav-1 {
  width: 64px;
  height: 32px;
  margin-right: 25px;
  border-radius: 3px;
  border: 1px solid rgba(28, 147, 153, 1);
  color: rgba(28, 147, 153, 1);
  font-size: 14px;
}
.rg-nav-2 {
  width: 64px;
  height: 32px;
  border-radius: 3px;
  border: 1px solid rgba(28, 147, 153, 1);
  color: rgba(28, 147, 153, 1);
  font-size: 14px;
}
.rg-nav-active {
  background: rgba(28, 147, 153, 1);
  border-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
}
.col1-1 {
  margin-left: 36px;
}
.inputquery-button {
  margin-right: 100px;
}
.components-input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 0 0;
  border-radius: 3px;
  border: 1px solid rgba(220, 223, 230, 1);
}
.input-point {
  padding: 0 20px;
  font-size: 14px;
  color: rgba(160, 160, 160, 1);
  line-height: 20px;
}
.inputquery-foot {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.foot-point {
  margin-left: 35px;
}
.foot-button {
  display: flex;
  width: 25%;
  justify-content: space-evenly;
  // margin-right: 70px;
}
.button-rg {
  display: flex;
  width: 20%;
  justify-content: space-evenly;
}
// .icon {
//   width: 10px;
//   height: 10px;
//   border-top: 2px solid #1c9399;
//   border-right: 2px solid #1c9399;
//   transform: rotate(-45deg);
//   margin-top: 12px;
// }
.ant-table-wrapper {
  background: rgba(255, 255, 255, 1);
}
/deep/.table{
  height: 640px;
}
/deep/.ant-table-thead > tr > th,
/deep/.ant-table-tbody > tr > td {
  padding: 16px 40px;
}
// 选择时间input框
/deep/.ant-time-picker-input {
  width: 200px;
}
// 时间图标
/deep/.ant-time-picker-clock-icon {
  padding-left: 65px;
}
/deep/.ant-table-pagination.ant-pagination {
  margin-top: 40px;
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
/deep/.ant-table-thead tr th:nth-child(7) {
  text-align: center;
}
/deep/.ant-table-row-level-0 td:nth-child(7) {
  text-align: center;
}
</style>
