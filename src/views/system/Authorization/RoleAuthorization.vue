<template>
  <!-- 授权管理页面 -->
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
             <router-link ><img src="../../../assets/nav1.png" alt="" srcset="">授权管理</router-link></a-menu-item>
               
            <a-menu-item class="fenxi-nav" key="advanced-analysis">
              <router-link to="/authorization/KnowledgeAnalytics"><img src="../../../assets/nav2.png" alt="" srcset="">角色授权</router-link>
            </a-menu-item>
          </a-menu>
        </div>
        <div class="fenxi-rg-nav">
          <a-button class="rg-nav-1" >添加</a-button>
          <a-button class="rg-nav-1" >导入</a-button>
          <a-button class="rg-nav-1  rg-nav-active" >导出</a-button>
        </div>
      </div>
     <router-view></router-view>
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
    title: '角色名称',
    dataIndex: 'address',
    key: 'address3'
  },
  {
    title: '角色权限',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '角色描述',
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
    name: 'John Brown',
    age: 32,
    address: 'New ',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney',
    tags: ['cool', 'teacher']
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No',
    tags: ['cool', 'teacher']
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney',
    tags: ['cool', 'teacher']
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney',
    tags: ['cool', 'teacher']
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No',
    tags: ['cool', 'teacher']
  }
]

export default {
  data() {
    return {
      // 分析导航当前显示
      current: ['meta-analysis'],
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
   height:24px;
  width: 60px;
  margin-right: 25px;
  border-radius: 3px;
  border: 1px solid rgba(28, 147, 153, 1);
  color: rgba(28, 147, 153, 1);
  font-size: 14px;
}
.rg-nav-2{
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
.inputquery {
  height: 120px;
  background: #fff;
  border-top: 1px solid rgba(235, 246, 246, 1);
  padding-top: 20px;
}
.col1-1 {
  margin-left: 50px;
}
.col1-3 {
  margin-right: 36px;
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
