<template>
  <!-- 授权管理页面下的知识分析子页面-->
  <div class="authorization">
    <!-- 顶部面包屑导航 -->
    <div class="breadcrumb-nav">
      <!-- 面包屑导航符号 -->
      <a-breadcrumb separator=">">
        <!-- <a-breadcrumb-item>Home</a-breadcrumb-item> -->
        <a-breadcrumb-item href="" class="breadcrumb1">{{ $route.matched[1].meta.title }}</a-breadcrumb-item>
        <a-breadcrumb-item class="breadcrumb2">{{ $route.meta.title }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="authorization-con">
      <!-- 分析 -->
      <div class="fenxi">
        <div class="fenxi-lf">
          <a-menu v-model="current" mode="horizontal">
            <!-- <a-icon type="clock-circle" /> -->
            <a-menu-item key="meta-analysis">
              <img src="../../../assets/nav1.png" alt="" srcset="" />角色授权
            </a-menu-item>

            <a-menu-item class="fenxi-nav" key="advanced-analysis">
              <img src="../../../assets/nav2.png" alt="" srcset="" />权限授权
            </a-menu-item>
          </a-menu>
        </div>
        <div class="fenxi-rg-nav">
          <a-button class="rg-nav-1">添加</a-button>
          <a-button class="rg-nav-1">导入</a-button>
          <a-button class="rg-nav-1  rg-nav-active">导出</a-button>
        </div>
      </div>
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
            <a-button class="rg-nav-1  rg-nav-active" >查询</a-button>
            <a-button class="rg-nav-2" >重置</a-button>
          </div>
        </div>
      </div>
      <!-- table表格 -->
      <div class="table">
        <a-table :pagination="pagination" :columns="columns" :dataSource="data" style="height:10px">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="customTitle"></span>
          <span slot="action" slot-scope="text,record" class="action-btn-c">
            <a class="action-btn">授权</a>
          </span>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
// table表格的数据
const columns = [
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

export default {
  data() {
    return {
      // 分析导航当前显示
      current: ['advanced-analysis'],
      // 监听时间
      value: null,
      // table表格
      data,
      columns,
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
  methods: {}
}
</script>

<style lang="less" scoped>
.authorization-con {
  background: #fff;
  height: 740px;
}
/* 面包屑导航 */
.breadcrumb-nav {
  margin: 0 0 20px 32px;
}
.breadcrumb1 {
  font-size: 14px;
  font-weight: 400;
  color: rgba(160, 160, 160, 1);
}
.breadcrumb2 {
  color: rgba(33, 54, 77, 1);
}
/* 故障分析 */
.fenxi {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 1);
}
.fenxi-lf {
  margin-left: 46px;
}
.fenxi-nav {
  margin-left: 37px;
}
.rg-nav-1 {
  width: 60px;
  height: 24px;
  margin-right: 25px;
  border-radius: 3px;
  border: 1px solid rgba(28, 147, 153, 1);
  color: rgba(28, 147, 153, 1);
  font-size: 14px;
}
.rg-nav-2 {
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
.inputquery-root-lf{
  width: 70%;
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
.packup {
  font-size: 14px;
  color: rgba(28, 147, 153, 1);
  margin-top: 5px;
}
.icon {
  width: 10px;
  height: 10px;
  border-top: 2px solid #1c9399;
  border-right: 2px solid #1c9399;
  transform: rotate(-45deg);
  margin-top: 12px;
}
.ant-table-wrapper {
  background: rgba(255, 255, 255, 1);
}
/deep/.ant-table-thead > tr > th, /deep/.ant-table-tbody > tr > td{
    padding:16px 40px;
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
  margin: 47px 0;
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
