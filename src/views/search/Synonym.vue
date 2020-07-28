<template>
<!-- 同义词管理 -->
  <div class="Synonym">
    <div class="weixiu-btm-title">
      <div class="bread">
        <s-breadcrumb />
      </div>
      <div class="weixiu-btm-title-right">
        <div class="right-item" @click="addSynonym">添加</div>
        <div class="right-item" @click="batchSynonym">批量导入</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="weixiu-btm">
      <div class="weixiu-btm-center">
        <div class="center-title" :class="isShow ? 'center-title-active' : ''">
          <!-- 词组名称 -->
          <p>
            <span class="p-name">词组名称</span>
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
          <!-- 词组名称 -->
          <!-- 包含同义词 -->
          <p>
            <span class="p-name">包含同义词</span>
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
          <!-- 包含同义词 -->
          <!-- 修改者 -->
          <p>
            <span class="p-name">修改者</span>
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
          <!-- 修改者 -->
          <!-- 状态 -->
          <p>
            <span class="p-name">状态：</span>
            <span
              class="span-name"
              :class="isShowText == 1 ? 'span-name-active' : ''"
              @click="allStatus"
            >全部</span>
            <span
              class="span-name"
              :class="isShowText == 2 ? 'span-name-active' : ''"
              @click="enableStatus"
            >启用</span>
            <span
              class="span-name"
              :class="isShowText == 3 ? 'span-name-active' : ''"
              @click="disableStatus"
            >禁用</span>
          </p>
          <!-- 状态 -->
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
      <a-table :columns="entryColumns" :dataSource="entryData" :pagination="pagination">
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
        <template slot="table4" slot-scope="text">
          <div style="width: 100%">
            <a-switch
              checkedChildren="启用"
              v-model="text.isChecked"
              unCheckedChildren="禁用"
              defaultChecked
              @change="switchChange(text)"
            />
          </div>
        </template>
      </a-table>
      <!-- 数据-表格 -->
    </div>
    <!-- 表格列表 -->
    <s-a v-if="isShowEntryAdd" v-on:fn="entryDataFnA"></s-a>
    <s-e v-if="isShowEntryEdit" v-on:fn="entryDataFnE"></s-e>
    <s-d v-if="isShowEntryDetail" v-on:fn="entryDataFnD"></s-d>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
import SynonymAdd from '@/views/search/synonymAdd'
import SynonymEdit from '@/views/search/synonymEdit'
import SynonymDetail from '@/views/search/synonymDetail'
const entryColumns = [
  {
    title: '序号',
    dataIndex: 'table1',
    width: '5%',
    scopedSlots: { customRender: 'table1' }
  },
  {
    title: '词组名称',
    dataIndex: 'table2',
    width: '6%',
    scopedSlots: { customRender: 'table2' },
    ellipsis: true
  },
  {
    title: '包含同义词',
    dataIndex: 'table3',
    width: '10%',
    scopedSlots: { customRender: 'table3' }
  },
  {
    title: '状态',
    // dataIndex: 'table4',
    width: '6%',
    scopedSlots: { customRender: 'table4' },
    ellipsis: true
  },
  {
    title: '备注说明',
    dataIndex: 'table5',
    width: '12%',
    scopedSlots: { customRender: 'table5' },
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'table6',
    width: '10%',
    scopedSlots: { customRender: 'table6' }
  },
  {
    title: '最后一次修改时间',
    dataIndex: 'table7',
    width: '10%',
    scopedSlots: { customRender: 'table7' },
    align: 'left'
  },
  {
    title: '修改者',
    dataIndex: 'table8',
    width: '8%',
    scopedSlots: { customRender: 'table8' },
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
for (let i = 0; i < 5; i++) {
  entryData.push({
    key: `${i}`,
    table1: `${i}`,
    table2: `同义词组${i}`,
    table3: `中国人/新闻事件`,
    // table4: `1`,
    table5: `备注${i}`,
    table6: `2019-3-26 21:21:21`,
    table7: `2020-06-04 12:12:12`,
    table8: `admin`,
    isChecked: true
  })
}
export default {
  components: {
    's-breadcrumb': Breadcrumb,
    's-a': SynonymAdd,
    's-e': SynonymEdit,
    's-d': SynonymDetail
  },
  data() {
    return {
      data: [],
      navIndex: 0,
      isShow: false,
      isShowText: 1,
      switchBoolean: '',
      wxTime: null,
      lrTime: null,
      entryColumns,
      entryData,
      isShowEntryAdd: false,
      isShowEntryDetail: false,
      isShowEntryEdit: false,
      pagination: {
        total:200,
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
  mounted() {
    console.log(entryData)
  },
  methods: {
    // 分页

    // 开关
    switchChange(text) {

    },
    // 状态
    // 全部
    allStatus(res) {
      console.log(res)
      this.isShowText = 1
    },
    // 启用
    enableStatus(res) {
      console.log(res)
      this.isShowText = 2
      for (let i = 0; i < entryData.length; i++) {
        if (entryData[i].table4 == 1) {
          console.log(entryData[i])
        }
      }
    },
    // 禁用
     disableStatus() {
      let that = this
      let arr=[]
      for(let i in this.entryData){
        
        if(!this.entryData[i].isChecked){
          arr.push(this.entryData[i])
        }
      }
     
      console.log(arr, this.entryData)
      this.entryData = arr
      //  console.log(arr)

      },
   
    // 接收从子页面的值
    entryDataFnD(bol) {
      this.isShowEntryDetail = bol
    },
    entryDataFnA(boo) {
      this.isShowEntryAdd = boo
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
    // 删除
    tableDelete(resDelete) {
      //删除出错
      console.log(resDelete)
      const insideContentData = [...this.insideContentData]
      this.insideContentData = insideContentData.filter(item => item.key !== key)
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
    addSynonym(res) {
      console.log(res)
      this.isShowEntryAdd = true
    },
    // 批量导入
    batchSynonym(res) {
      console.log(res)
    },
    // 表格事件
    entryChange(res) {
      console.log(res)
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
      padding: 0 16px;
      height: 24px;
      text-align: center;
      color: #1c9399;
      font-size: 14px;
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
          width: 90px;
          text-align: right;
          padding-right: 15px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(42, 63, 84, 1);
          line-height: 20px;
        }
        .span-name {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(117, 117, 117, 1);
          line-height: 20px;
          margin-right: 20px;
          cursor: pointer;
        }
        .span-name-active {
          color: rgba(28, 147, 153, 1);
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
// /deep/.ant-pagination-next:hover,
// /deep/.ant-pagination-prev:hover {
//   border-color: #1c9399;
// }
// /deep/.ant-pagination-next:hover a,
// /deep/.ant-pagination-prev:hover a {
//   color: #1c9399;
// }
// /deep/.ant-pagination-disabled.ant-pagination-prev:hover,
// /deep/.ant-pagination-disabled.ant-pagination-next:hover {
//   border: 1px solid #d9d9d9;
// }
// /deep/.ant-pagination-disabled.ant-pagination-prev:hover a,
// /deep/.ant-pagination-disabled.ant-pagination-next:hover a {
//   color: #d9d9d9;
// }
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
/deep/.ant-table-thead > tr > th:first-child{
	padding-left: 40px;
}
/deep/.ant-table-row td:first-child{
	padding-left: 40px;
}
/deep/.ant-pagination-item{
  color: #1c9399;
  background: #fff;
  border:1px solid #1c9399;
}
/deep/.ant-pagination-item-active {
  background: #1c9399;
  > a{
  color: #fff;
  }
}
/deep/.ant-pagination-next,
/deep/.ant-pagination-prev{
  border-color: #1c9399;
  background: #fff;
}
</style>