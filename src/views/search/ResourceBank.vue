<template>
  <!-- 资源库管理 -->
  <div class="resourceBank">
    <div class="weixiu-btm-title">
      <div class="bread">
        <s-breadcrumb />
      </div>
    </div>

    <!-- 导航 -->
    <div class="weixiu-btm">
      <div class="weixiu-btm-center">
        <div class="center-title" :class="isShow ? 'center-title-active' : ''">
          <!-- 列名 -->
          <p>
            <span class="p-name">列名</span>
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
          <!-- 列名 -->
          <!-- 字段类型 -->
          <p>
            <span class="p-name">字段类型</span>
            <a-select
              labelInValue
              :defaultValue="{ key: 'long' }"
              style="width: 120px"
              @change="selectChange2"
            >
              <a-select-option value="long">long</a-select-option>
              <a-select-option value="short">short</a-select-option>
            </a-select>
          </p>
          <!-- 字段类型 -->
          <!-- 是否显示 -->
          <p>
            <span class="p-name">是否显示</span>
            <a-select
              labelInValue
              :defaultValue="{ key: '显示' }"
              style="width: 120px"
              @change="selectChange3"
            >
              <a-select-option value="显示">显示</a-select-option>
              <a-select-option value="隐藏">隐藏</a-select-option>
            </a-select>
          </p>
          <!-- 是否显示 -->
          <div class="btns" :class="isShow ? 'btns-active': ''">
            <h3 @click="searchList">查询</h3>
            <h4 @click="resetSearch">重置</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- 导航 -->

    <!-- 内容 -->
    <div class="resource-content">
      <div class="resource-left">
        <a-table
          :columns="insideContentColumns"
          :dataSource="insideContentData"
          :pagination="pagination"
          
        >
          <template slot="ziduanType" slot-scope="text">
              <div v-if="!text.isChecked">LONG</div>
              <p v-if="text.isChecked" style="margin:0; position: relative;">
                <a-select
                  labelInValue
                  :defaultValue="{ key: '请选择' }"
                  style="width:96px; position: absolute; top:-15px"
                  @change="selectChange2"
                >
                  <a-select-option value="long">long</a-select-option>
                  <a-select-option value="short">short</a-select-option>
                </a-select>
              </p>
          </template >
          <template slot="isXianShi" slot-scope="text">
              <div v-if="!text.isChecked">否</div>
              <p v-if="text.isChecked" style="margin:0; position: relative;">
                <a-select
                  labelInValue
                  :defaultValue="{ key: '请选择' }"
                  style="width:96px; position: absolute; top:-15px"
                  @change="selectChange2"
                >
                  <a-select-option value="shi">是</a-select-option>
                  <a-select-option value="fou">否</a-select-option>
                </a-select>
              </p>
          </template >
          <template slot="operation" slot-scope="text">
            <div class="editable-row-operations" v-if="!text.isChecked">
             
              <a @click="bianjiHandel(text)">编辑</a>
              <a >删除</a>
            </div>
            <div v-if="text.isChecked" class="editable-row-operations">
              <a >保存</a>
              <a @click="quxiaoHandel(text)">取消</a>
            </div>
          </template >
          <template slot="tags" slot-scope="tags"> 
              <a-tag
                v-for="tag in tags" color="#1C9399" :key="tag"
              >
                {{tag}}
              </a-tag>
          </template>
        </a-table>
      </div>
      <div class="resource-right">
          <h1>
            <p></p>
            <p>标签集</p>
          </h1>

          
          <div>
            <a-collapse defaultActiveKey="1" :bordered="false" accordion>
             
              <a-collapse-panel header="内容类别" key="1" :style="customStyle">
               <div class="coll-content">
                  <p> <span>内容</span> </p>
                  <p><span>文件路径</span> </p>
                 
                  <p><span>文件路径</span> </p>
                  <p><span>内容</span> </p>
               </div>
                
              </a-collapse-panel>
              <a-collapse-panel header="内容类别" key="2" :style="customStyle">
                <div class="coll-content">
                  <p> <span>内容</span> </p>
                  <p><span>文件路径</span> </p>
                  <p><span>内容</span> </p>
                  <p><span>文件路径</span> </p>
                  <p><span>内容</span> </p>
               </div>
              </a-collapse-panel>
              <a-collapse-panel header="内容类别" key="3" :style="customStyle">
               <div class="coll-content">
                  <p> <span>内容</span> </p>
                  <p><span>文件路径</span> </p>
                  <p><span>内容</span> </p>
                  
               </div>
              </a-collapse-panel>
               <a-collapse-panel header="内容类别" key="4" :style="customStyle">
               <div class="coll-content">
                  <p> <span>内容</span> </p>
                  <p><span>文件路径</span> </p>
                  <p><span>内容</span> </p>
                  <p><span>文件路径</span> </p>
                  <p><span>内容</span> </p>
               </div>
              </a-collapse-panel>
              
            </a-collapse>
          </div>
          
      </div>
    </div>
    <!-- 内容 -->
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'

const insideContentColumns = [
  {
    title: '序号',
    dataIndex: 'table1',
    width: '10%',
    scopedSlots: { customRender: 'table1' }
  },
  {
    title: '列名',
    dataIndex: 'table2',
    width: '18%',
    scopedSlots: { customRender: 'table2' },
    // ellipsis: true
  },
  {
    title: '别名',
    dataIndex: 'table3',
    width: '15%',
    scopedSlots: { customRender: 'table3' }
  },
  {
    title: '字段类型',
    // dataIndex: 'ziduanType',
    // width: 145,
    scopedSlots: { customRender: 'ziduanType' },
    // ellipsis: true
  },
  {
    title: '是否显示',
    // dataIndex: 'table5',
    // width: 145,
    scopedSlots: { customRender: 'isXianShi' },
    // ellipsis: true
  },
  
  {
    title: '操作',
    // dataIndex: 'operation',
    width: '15%',
    scopedSlots: { customRender: 'operation' },
    align: 'center'
  },
  {
    title: '标签',
    key: 'tags',
    // width:'82',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
]
const insideContentData = []
for (let i = 0; i < 100; i++) {
  insideContentData.push({
    key: `${i}`,
    table1: `${i}`,
    table2: `captureTime`,
    table3: `拦截时间`,
    isChecked: false,
    // table4: `${ischeck ? 'SQL' : ''}`,
    table5: 'HIVE',
    tags: ['江苏无锡'],
   
  })
}
export default {
  data() {
    return {
       text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
        'background: #fff;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
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
      isShowEntry: false,
      isShowEntryDetail: false,
      isShowEntryEdit: false,
      insideContentColumns, //表格头
      insideContentData, //表身
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
  components: {
    's-breadcrumb': Breadcrumb,
  },
  mounted() {},
  methods: {
    // 列名
    selectChange1(res) {},
    // 字段类型
    selectChange2(res) {},
    // 是否显示
    selectChange3(res) {},
    // 查询
    searchList(res) {},
    // 重置
    resetSearch(res) {},
    // 表格
    handleChange(value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    bianjiHandel(text) {
        console.log(text)
        this.insideContentData.map(item => {
            item.isChecked=false
        })
       this.insideContentData[parseInt(text.key)].isChecked=true
    },
    quxiaoHandel(text) {
        this.insideContentData[parseInt(text.key)].isChecked=false
    }
  }
}
</script>

<style lang="less" scoped>
.weixiu-btm {
  background: #fff;
  border-radius: 8px 8px 0 0;
  margin-top: 20px;
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
      background: rgba(255, 255, 255, 0.1);
      padding: 3px 20px 3px 0px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      overflow: hidden;
      > p {
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
        /deep/.ant-select {
          width: 188px !important;
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
  a{
    color: #d9d9d9 !important;
  }
}

.resource-left{
  width: 65%;
  background: #fff;
  border-radius:8px;
}
.editable-row-operations{
  display: flex;
  justify-content: space-between;
}


//右半部分

.resource-right{
  width:33%;
  // height:680px;
  background:rgba(255,255,255,1);
  border-radius:8px;
  padding: 20px;
  h1{
    display: flex;
    margin-bottom: 10px;
    p:nth-child(1){
      width:2px;
      height:20px;
      background:rgba(28,147,153,1);
      margin-right: 10px;
    }
     p:nth-child(2){
      width:48px;
      height:22px;
      font-size:16px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:22px;
    }
  }
}


/deep/.anticon-right{
  position: relative !important;
  left: 75px !important;
  top: 5px !important;
}
/deep/.ant-collapse-header{
  padding: 12px 16px; 
  padding-left: 0px !important;
}

/deep/.ant-collapse{
  background: #fff;
}
/deep/.ant-collapse-content-active{
  background: #F4F4F4 !important;
  .coll-content{
    display: flex !important;
    flex-wrap: wrap !important;
    margin-top: 20px;
     p{
        width:25%;
        display: flex;
        justify-content: center;
        span{
          display: block;
          width:68px;
          height:21px;
          background:rgba(28,147,153,1);
          border-radius:3px;
          text-align: center;
          line-height: 21px;
          font-size:12px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(234,234,235,1);
        }
      }
  }
 
}
</style>