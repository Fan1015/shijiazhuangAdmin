<template>
  <!-- 授权管理下的角色授予权限子页面 -->
  <div class="awardrole">
    <!-- 顶部面包屑导航 -->
    <div class="breadcrumb-nav">
      <!-- 面包屑导航符号 -->
       <s-breadcrumb />
    </div>
    <div class="authorization-con">
      <!-- 按需查询 -->
      <div class="inputselect">
        <div class="inputquery-root">
            <div class="components-input-demo-size ">
              <span class="input-point">用户名</span>
              <a-input placeholder="admin" />
            </div>
            <div class="components-input-demo-size">
              <span class="input-point">所属部门</span>
              <a-input placeholder="请输入" />
            </div>
            <div class="inputquery-button">
              <a-button class="rg-nav-1  rg-nav-active" :size="size">查询</a-button>
              <a-button class="rg-nav-2" :size="size">重置</a-button>
            </div>
        </div>
      </div>
      <!-- table表格 -->
      <div class="table">
        <a-table :pagination="pagination" :columns="columns" :dataSource="data" style="height:10px">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="customTitle"></span>
          <span slot="action" slot-scope="text, record" class="action-btn-c">
            <a class="action-btn">授权</a>
          </span>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script>
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
]

const data = [
  {
    key: '1',
    name: 'admin',
    age: 1,
    address: 'admin',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'admin',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'admin',
    tags: ['cool', 'teacher']
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'admin',
    tags: ['cool', 'teacher']
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'admin',
    tags: ['cool', 'teacher']
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'admin',
    tags: ['cool', 'teacher']
  },
  {
    key: '7',
    name: 'Joe Black',
    age: 32,
    address: 'admin',
    tags: ['cool', 'teacher']
  },
  {
    key: '8',
    name: 'yellow',
    age: 32,
    address: 'admin',
    tags: ['cool', 'teacher']
  },
  {
    key: '9',
    name: 'blue',
    age: 32,
    address: 'admin',
    tags: ['cool', 'teacher']
  }
]
import Breadcrumb from '@/components/tools/Breadcrumb'
export default {
  components: {
    's-breadcrumb': Breadcrumb,
  },
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
.inputquery-button {
  margin-right: 120px;
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
.rg-nav-active {
  background: rgba(28, 147, 153, 1);
  border-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
}
.components-input-demo-size{
    margin-left: 50px;
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
.ant-table-wrapper {
  background: rgba(255, 255, 255, 1);
}
/deep/.ant-table-body > table{
  border-top: 1px solid #E4E4E4;
}
/deep/.ant-table-thead > tr > th, /deep/.ant-table-tbody > tr > td{
    padding:16px 40px;
}

/deep/.ant-table-thead > tr,/deep/.ant-table-tbody > tr,/deep/.ant-table-tbody > tr>td {
    transition:0 !important;
}
/deep/.ant-table-pagination.ant-pagination {
  margin: 45px 0;
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
