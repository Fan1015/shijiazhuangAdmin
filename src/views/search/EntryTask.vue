<template>
<!-- 录入任务管理 -->
  <div class="entryTask">
    <div class="weixiu-btm-title">
      <div class="bread">
        <s-breadcrumb />
      </div>
      <div class="weixiu-btm-title-right">
        <div class="right-item" @click="addEntryTask">添加</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="weixiu-btm">
      <div class="weixiu-btm-center">
        <div class="center-title" :class="isShow ? 'center-title-active' : ''">
          <!-- 抽取方式 -->
          <p>
            <span class="p-name">抽取方式</span>
            <a-select
              labelInValue
              :defaultValue="{ key: '全部' }"
              style="width: 120px"
              @change="selectChange1"
            >
              <a-select-option value="全部">全部</a-select-option>
              <a-select-option value="随机">随机</a-select-option>
            </a-select>
          </p>
          <!-- 抽取方式 -->
          <!-- 任务状态 -->
          <p>
            <span class="p-name">任务状态</span>
            <a-select
              labelInValue
              :defaultValue="{ key: '全部' }"
              style="width: 120px"
              @change="selectChange2"
            >
              <a-select-option value="全部">全部</a-select-option>
              <a-select-option value="已完成">已完成</a-select-option>
              <a-select-option value="未完成">未完成</a-select-option>
            </a-select>
          </p>
          <!-- 任务状态 -->
          <!-- 导入状态 -->
          <p>
            <span class="p-name">导入状态</span>
            <a-select
              labelInValue
              :defaultValue="{ key: '全部' }"
              style="width: 120px"
              @change="selectChange3"
            >
              <a-select-option value="全部">全部</a-select-option>
              <a-select-option value="已导入">已导入</a-select-option>
              <a-select-option value="未导入">未导入</a-select-option>
            </a-select>
          </p>
          <!-- 导入状态 -->
          <!-- 任务名称 -->
          <p>
            <span class="p-name">任务名称</span>
            <a-input placeholder="请输入" allowClear @change="e => taskName(e.target.value, e)" />
          </p>
          <!-- 任务名称 -->
          <div class="btns" :class="isShow ? 'btns-active': ''">
            <h3 @click="searchList">查询</h3>
            <h4 @click="resetSearch">重置</h4>
            <h5 @click="bindShow">
              {{isShow ? '展开':'收起'}}
              <i
                class="el-submenu__icon-arrow"
                :class="isShow ? 'el-icon-arrow-down':'el-icon-arrow-up'"
              ></i>
            </h5>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容 -->

    <!-- 表格列表 -->
    <div class="entryTable">
      <!-- 数据-表格 -->
      <a-table :columns="entryColumns" :dataSource="entryData">
        <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record">
          <div :key="col">
            <a-input
              style="margin: -5px 0"
              :value="text"
              @change="e => entryChange(e.target.value, record.key, col)"
            />
            <template>{{ text }}</template>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record">
          <div class="editable-row-operations">
            <a-popconfirm v-if="entryData.length" @confirm="() => tableDelete(record.key)">
              <a href="javascript:;">删除</a>
            </a-popconfirm>
            <a @click="entryTableEdit">编辑</a>
            <a @click="entryTableDateil">详情</a>
          </div>
        </template>
        <template slot="table8" slot-scope="">
          <div style="width: 100%">
            <a-progress :percent="30" size="small" :showInfo="false" strokeColor="#1C9399" />
          </div>
        </template>
      </a-table>
      <!-- 数据-表格 -->
    </div>
    <!-- 表格列表 -->
    <b-e v-if="isShowEntry" v-on:fn="entryDataFn"></b-e>
    <d-e v-if="isShowEntryDetail" v-on:fn="entryDataFnA"></d-e>
    <e-e v-if="isShowEntryEdit" v-on:fn="entryDataFnE"></e-e>
    <router-view></router-view>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
import entryTask from '@/views/search/EntryTaskWindow'
import entryTaskDetail from '@/views/search/EntryTaskWindowDetail'
import entryTaskEdit from '@/views/search/EntryTaskWindowEdit'
const entryColumns = [
  {
    title: '序号',
    dataIndex: 'table1',
    width: '5%',
    scopedSlots: { customRender: 'table1' }
  },
  {
    title: '任务名称',
    dataIndex: 'table2',
    width: '6%',
    scopedSlots: { customRender: 'table2' },
    ellipsis: true
  },
  {
    title: '资源库/资源表名称',
    dataIndex: 'table3',
    width: '10%',
    scopedSlots: { customRender: 'table3' }
  },
  {
    title: '数据源-表',
    dataIndex: 'table4',
    width: '10%',
    scopedSlots: { customRender: 'table4' },
    ellipsis: true
  },
  {
    title: '抽取方式-频率',
    dataIndex: 'table5',
    width: '10%',
    scopedSlots: { customRender: 'table5' },
    ellipsis: true
  },
  {
    title: '添加时间',
    dataIndex: 'table6',
    width: '10%',
    scopedSlots: { customRender: 'table6' }
  },
  {
    title: '任务开始/暂停',
    dataIndex: 'table7',
    width: '8%',
    scopedSlots: { customRender: 'table7' },
    align: 'left'
  },
  {
    title: '导入状态',
    dataIndex: 'table8',
    width: '8%',
    scopedSlots: { customRender: 'table8' },
    align: 'center'
  },
  {
    title: '最后完成时间',
    dataIndex: 'table9',
    width: '10%',
    scopedSlots: { customRender: 'table9' },
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: '19%',
    scopedSlots: { customRender: 'operation' },
    align: 'center'
  }
]
const entryData = []
for (let i = 0; i < 100; i++) {
  entryData.push({
    key: `${i}`,
    table1: `${i}`,
    table2: `任务${i}`,
    table3: `中国人/新闻事件`,
    table4: `数据源${i}/glj_test_${i}`,
    table5: '全量/一次',
    table6: `2019-3-26 21:21:21`,
    table7: `--`,
    table8: `${i}`,
    table9: `2019-3-31 21:21:21`
  })
}
export default {
  components: {
    's-breadcrumb': Breadcrumb,
    'b-e': entryTask,
    'd-e': entryTaskDetail,
    'e-e': entryTaskEdit
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
      entryColumns,
      entryData,
      isShowEntry:false,
      isShowEntryDetail:false,
      isShowEntryEdit:false,
    }
  },
  mounted() {},
  methods: {
    // 接收从子页面的值
    entryDataFn(bol) {
      this.isShowEntry = bol
    },
    entryDataFnA(boo) {
      this.isShowEntryDetail = boo
    },
    entryDataFnE(boe) {
      this.isShowEntryEdit = boe
    },
    // 编辑
    entryTableEdit(res) {
      console.log(res)
      this.isShowEntryEdit = true
    },
    // 详情
    entryTableDateil(res) {
      console.log(res)
      this.isShowEntryDetail = true
    },
    // select选择框
    // 抽取方式
    selectChange1(value) {
      console.log(value) // { key: "lucy", label: "Lucy (101)" }
    },
    // 任务状态
    selectChange2(value) {
      console.log(value) // { key: "lucy", label: "Lucy (101)" }
    },
    // 导入状态
    selectChange3(value) {
      console.log(value) // { key: "lucy", label: "Lucy (101)" }
    },
    // 任务名称
    taskName(res) {
      console.log(res)
    },
    // 添加
    addEntryTask(res) {
      console.log(res)
      // this.isShowEntry = true
      this.$router.push({name: 'EntryTaskAdd'})
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
.weixiu-btm-title {
  height: 40px;
  position: relative;
  border-bottom: 1px solid #ebf6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
  &-right {
    display: flex;
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
/deep/.ant-select.ant-select-enabled,
.ant-input-affix-wrapper {
  width: 188px !important;
  flex: 1;
}
.weixiu-btm {
  background: #fff;
  border-radius: 8px 8px 0 0;
  &-center {
    padding: 20px 36px 0;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
    .center-title-active {
      transition: all 0.5s;
      height: 55px !important;
      padding-right: 168px !important;
      > p {
        width: 20% !important;
      }
    }
    .center-title {
      transition: all 0.5s;
      // height: 140px;
      background: rgba(255, 255, 255, 0.1);
      padding: 3px 20px 3px 0px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      overflow: hidden;
      > p {
        width: 30%;
        font-size: 14px;
        display: flex;
        align-items: center;
        margin: 0 0 20px 0;
        color: #a0a0a0;
        margin-right: 3%;
        .p-name {
          display: block;
          width: 80px;
          text-align: right;
          padding-right: 15px;
        }
        > input {
          width: 160px;
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
          width: 160px;
        }
        /deep/.ant-time-picker {
          width: 160px;
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
/deep/.ant-table-wrapper {
  background: rgba(255, 255, 255, 1);
  .ant-table-thead th {
    background: transparent;
  }
  .ant-pagination.ant-table-pagination {
    padding-right: 20px;
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
</style>