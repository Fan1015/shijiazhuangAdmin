<template>
<!-- 数据源管理 -->
  <div class="dataSource-box">
    <div class="bread">
      <s-breadcrumb />
    </div>
    <!--  -->
    <div class="dataSourceTableBox">
      <div class="dataSourceAddBtn">
        <a-button type="primary" ghost @click="addContent1">添加</a-button>
      </div>
      <a-tabs defaultActiveKey="1" @change="dataSourceTable" class="dataSourceTableBox-title">
        <!-- 内部数据源 -->
        <a-tab-pane tab="内部数据源" key="1">
          <!-- 搜索内容 -->
          <div class="dataSourceTableBox-search">
            <div class="dataSourceTableBox-search-box">
              <!-- 数据源类型 -->
              <div class="dataSourceTableBox-search-input">
                <p>数据源类型</p>
                <a-select
                  labelInValue
                  :defaultValue="{ key: '数据源2' }"
                  style="width: 120px"
                  @change="selectChange1"
                >
                  <a-select-option value="数据源1">数据源1</a-select-option>
                  <a-select-option value="数据源2">数据源2</a-select-option>
                </a-select>
              </div>
              <!-- 对应资源表 -->
              <div class="dataSourceTableBox-search-input">
                <p>对应资源表</p>
                <a-input
                  placeholder="请输入"
                  allowClear
                  @change="e => inputChange1(e.target.value, e)"
                />
              </div>
            </div>
            <div class="dataSourceTableBox-search-btn">
              <a-button class="submitBtn" type="primary" @click="submitBtn1">查询</a-button>
              <a-button type="primary" ghost @click="resetBtn1">重置</a-button>
            </div>
          </div>
          <!-- 搜索内容 -->

          <!-- 数据-表格 -->
          <a-table
            :columns="insideContentColumns"
            :dataSource="insideContentData"
            :pagination="pagination"
          >
            <template
              v-for="col in ['name', 'age', 'address']"
              :slot="col"
              slot-scope="text, record"
            >
              <div :key="col">
                <a-input
                  style="margin: -5px 0"
                  :value="text"
                  @change="e => handleChange(e.target.value, record.key, col)"
                />
                <template>{{ text }}</template>
              </div>
            </template>
            <template slot="operation" slot-scope="text, record">
              <div class="editable-row-operations">
                <a-popconfirm
                  v-if="insideContentData.length"
                  @confirm="() => tableDelete(record.key)"
                >
                  <a href="javascript:;">删除</a>
                </a-popconfirm>
                <a @click="tableEdit">编辑</a>
                <a @click="tableDateil">详情</a>
                <a @click="tableTest">测试连接</a>
              </div>
            </template>
          </a-table>
          <!-- 数据-表格 -->
        </a-tab-pane>
        <!-- 内部数据源 -->

        <!-- 外部数据源 -->
        <!-- forceRender：被隐藏是是否渲染数据结构，boolean型 -->
        <a-tab-pane tab="外部数据源" key="2" forceRender>
          <!-- 搜索内容 -->
          <div class="dataSourceTableBox-search">
            <div class="dataSourceTableBox-search-box">
              <!-- 数据源类型 -->
              <div class="dataSourceTableBox-search-input">
                <p>数据源类型</p>
                <a-select
                  labelInValue
                  :defaultValue="{ key: '数据源2' }"
                  style="width: 120px"
                  @change="selectChange1"
                >
                  <a-select-option value="数据源1">数据源1</a-select-option>
                  <a-select-option value="数据源2">数据源2</a-select-option>
                </a-select>
              </div>
              <!-- 对应资源表 -->
              <div class="dataSourceTableBox-search-input">
                <p>对应资源表</p>
                <a-input
                  placeholder="请输入"
                  allowClear
                  @change="e => inputChange1(e.target.value, e)"
                />
              </div>
            </div>
            <div class="dataSourceTableBox-search-btn">
              <a-button class="submitBtn" type="primary" @click="submitBtn1">查询</a-button>
              <a-button type="primary" ghost @click="resetBtn1">重置</a-button>
            </div>
          </div>
          <!-- 搜索内容 -->

          <!-- 数据-表格 -->
          <a-table
            :columns="insideContentColumns"
            :dataSource="insideContentData"
            :pagination="pagination"
          >
            <template
              v-for="col in ['name', 'age', 'address']"
              :slot="col"
              slot-scope="text, record"
            >
              <div :key="col">
                <a-input
                  style="margin: -5px 0"
                  :value="text"
                  @change="e => handleChange(e.target.value, record.key, col)"
                />
                <template>{{ text }}</template>
              </div>
            </template>
            <template slot="operation" slot-scope="text, record">
              <div class="editable-row-operations">
                <a-popconfirm
                  v-if="insideContentData.length"
                  @confirm="() => tableDelete(record.key)"
                >
                  <a href="javascript:;">删除</a>
                </a-popconfirm>
                <a @click="tableEdit">编辑</a>
                <a @click="tableDateil">详情</a>
                <a @click="tableTest">测试连接</a>
              </div>
            </template>
          </a-table>
          <!-- 数据-表格 -->
        </a-tab-pane>
        <!-- 外部数据源 -->
      </a-tabs>
    </div>
    <b-w v-if="dialogVisible" v-on:fn="sourceDataFn"></b-w>
    <d-w v-if="dialogVisibleDetail" v-on:fn="sourceDataFnA"></d-w>
    <e-w v-if="dialogVisibleEdit" v-on:fn="sourceDataFnE"></e-w>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
import WindowBg from '@/views/search/DataSourceWindow'
import WindowBgDetail from '@/views/search/DataSourceWindowDetail'
import WindowBgEdit from '@/views/search/DataSourceWindowEdit'
const insideContentColumns = [
  {
    title: '序号',
    dataIndex: 'table1',
    width: '8%',
    scopedSlots: { customRender: 'table1' }
  },
  {
    title: '数据源名称',
    dataIndex: 'table2',
    width: '12%',
    scopedSlots: { customRender: 'table2' },
    ellipsis: true
  },
  {
    title: '数据库IP',
    dataIndex: 'table3',
    width: '12%',
    scopedSlots: { customRender: 'table3' }
  },
  {
    title: '数据库名称',
    dataIndex: 'table4',
    width: '18%',
    scopedSlots: { customRender: 'table4' },
    ellipsis: true
  },
  {
    title: '数据源类型',
    dataIndex: 'table5',
    width: '10%',
    scopedSlots: { customRender: 'table5' },
    ellipsis: true
  },
  {
    title: '对应资源表',
    dataIndex: 'table6',
    width: '10%',
    scopedSlots: { customRender: 'table6' }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: '30%',
    scopedSlots: { customRender: 'operation' },
    align: 'center'
  }
]
const insideContentData = []
for (let i = 0; i < 100; i++) {
  insideContentData.push({
    key: `${i}`,
    table1: `${i}`,
    table2: `数据源${i}`,
    table3: `192.168.80.81`,
    table4: `SQL${i}`,
    table5: 'HIVE',
    table6: `table ${i}`
  })
}
export default {
  components: {
    's-breadcrumb': Breadcrumb,
    'b-w': WindowBg,
    'd-w': WindowBgDetail,
    'e-w': WindowBgEdit
  },
  data() {
    this.cacheData = insideContentData.map(item => ({ ...item }))
    return {
      selectContent: [
        {
          id: 0,
          selectName: '数据源'
        }
      ],
      inputContent1: '', //输入框内容
      insideContentColumns, //表格头
      insideContentData, //表身
      dialogVisible: false, //是否显示添加弹窗
      dialogVisibleDetail: false, //是否显示详情弹窗
      dialogVisibleEdit: false, //是否显示编辑弹窗
      // sourceData: true,
      // 分页
      pagination: {
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
  mounted() {},
  methods: {
    // 接收从子页面的值
    sourceDataFn(bol) {
      this.dialogVisible = bol
    },
    sourceDataFnA(boo) {
      this.dialogVisibleDetail = boo
    },
    sourceDataFnE(boe) {
      this.dialogVisibleEdit = boe
    },
    // tab标签切换
    dataSourceTable(res) {
      console.log(res)
    },

    // 添加数据
    addContent1(res) {
      console.log(res)
      this.dialogVisible = true
    },
    // select选择框
    selectChange1(value) {
      console.log(value) // { key: "lucy", label: "Lucy (101)" }
    },
    // input输入框
    inputChange1(res) {
      console.log(res)
      // this.inputContent1 = res.data
    },
    // sumbit按钮
    submitBtn1(e) {
      e.preventDefault()
      console.log(e)
    },
    // reset按钮
    resetBtn1(res) {
      console.log(res)
    },
    // 表格
    handleChange(value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    // 删除
    tableDelete(resDelete) {
      //删除出错
      console.log(resDelete)
      const insideContentData = [...this.insideContentData]
      this.insideContentData = insideContentData.filter(item => item.key !== key)
    },
    //  编辑
    tableEdit(resEdit) {
      console.log(resEdit)
      this.dialogVisibleEdit = true
    },
    // 详情
    tableDateil(resDateil) {
      console.log(resDateil)
      this.dialogVisibleDetail = true
    },
    // 测试连接
    tableTest(resTest) {
      console.log(resTest)
    }
  }
}
</script>

<style  lang="less" scoped>
.dataSourceTableBox {
  margin-top: 20px;
  position: relative;
  padding-bottom: 20px;
  .dataSourceAddBtn {
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 999;
  }
  &-title {
    width: 100%;
    line-height: 60px;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px 8px 0 0;
  }
}
/deep/.ant-tabs-tab {
  line-height: 60px;
}
/deep/.ant-table-wrapper {
  background: rgba(255, 255, 255, 1);
  .ant-table-thead th {
    background: transparent;
  }
  .ant-pagination.ant-table-pagination {
    padding-right: 20px;
  }
}
.dataSourceTableBox-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 14px;
  &-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &-input {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 5%;
    > p {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(160, 160, 160, 1);
      line-height: 20px;
      margin: 0 20px 0 0;
      flex: none;
    }
    /deep/.ant-select.ant-select-enabled,
    .ant-input-affix-wrapper {
      width: 224px !important;
      height: 32px;
      border-radius: 3px;
      border: 1px solid rgba(220, 223, 230, 1);
    }
  }
}
.dataSourceTableBox-search-btn {
  .submitBtn {
    margin-right: 20px;
  }
}
.editable-row-operations {
  display: flex;
  justify-content: center;
  align-items: center;
}
.editable-row-operations a {
  margin-right: 30px;
}
// 分页
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
/deep/.ant-pagination-next:hover,
/deep/.ant-pagination-prev:hover {
  border-color: #1c9399;
}
/deep/.ant-pagination-next:hover a,
/deep/.ant-pagination-prev:hover a {
  color: #1c9399;
}
/deep/.ant-pagination-disabled.ant-pagination-prev:hover,
/deep/.ant-pagination-disabled.ant-pagination-next:hover {
  border: 1px solid #d9d9d9;
}
/deep/.ant-table-thead > tr > th:first-child{
	padding-left: 40px;
}
/deep/.ant-table-row td:first-child{
	padding-left: 40px;
}
</style>