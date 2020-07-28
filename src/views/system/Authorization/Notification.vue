<template>
  <div class="weixiu">
    <div class="bread">
      <s-breadcrumb />
    </div>
    <div class="weixiu-btm">
      <div class="weixiu-btm-title">
        <div class="weixiu-btm-title-left">
          <div
            class="left-item"
            :class="navIndex == 0 ? 'left-item-active' : ''"
            @click="switchNav(0)"
          >
            <icon-font type="icon-xinxi" />列表显示
          </div>
          <div
            class="left-item"
            :class="navIndex == 1 ? 'left-item-active' : ''"
            @click="switchNav(1)"
          >
            <icon-font type="icon-fenxijuece" />装备备件故障分析
          </div>
          <div
            class="left-item"
            :class="navIndex == 2 ? 'left-item-active' : ''"
            @click="switchNav(2)"
          >
            <icon-font type="icon-fenxixitong" />保障装备故障分析
          </div>
        </div>
        <div class="weixiu-btm-title-right">
          <div class="right-item">添加</div>
          <div class="right-item">导入</div>
          <div class="right-item">导出</div>
        </div>
      </div>
      
      <div class="weixiu-btm-center">
        <div class="center-title" :class="isShow ? 'center-title-active' : ''">
          <p>
            <span class="p-name">装备名称</span>
            <input v-model="zbName" type="text" placeholder="请输入装备名称" placeholder-style="color:rgba(0, 0, 0, 0.65)" />
          </p>
          <p>
            <span class="p-name">维修人员</span>
            <input v-model="wxPeople" type="text" placeholder="请输入维修人员" placeholder-style="color:rgba(0, 0, 0, 0.65)" />
          </p>
          <p>
            <span class="p-name">维修时间</span>
            <a-date-picker v-model="wxTime" />
          </p>
          <p>
            <span class="p-name">录入人</span>
            <input v-model="lrPeople" type="text" placeholder="请输入录入人" />
          </p>
          <p>
            <span class="p-name">装备种类</span>
            <input v-model="zbCode" type="text" placeholder="请输入装备种类" />
          </p>
          <p>
            <span class="p-name">维修工时</span>
            <a-time-picker v-model="wxGongshi" />
          </p>
          <p>
            <span class="p-name">部队名称</span>
            <input v-model="bdName" type="text" placeholder="请输入部队名称" />
          </p>
          <p>
            <span class="p-name">录入时间</span>
            <a-date-picker v-model="lrTime" />
          </p>
          <div class="center-center">
            <p>故障现象：<span class="span-active">全部</span><span>正常</span><span>异常</span></p>
            <p>故障现象：<span class="span-active">全部</span><span>正常</span><span>异常</span></p>
          </div>
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
    <div class="wxTable">
      <a-table :columns="columns" :dataSource="data">
        <template slot="guzhang" slot-scope="guzhang">
          <div class="solt"><span>故障名称：</span>{{guzhang.gzName}}</div>
          <div class="solt"><span>对应装备名称：</span>{{guzhang.zbName}}</div>
          <div class="solt"><span>装备编号：</span>{{guzhang.zbCode}}</div>
        </template>
        <template slot="miaoshu" slot-scope="miaoshu">
          <div class="solt"><span>故障现象：</span>{{miaoshu.xianxiang}}</div>
          <div class="solt"><span>故障原因：</span>{{miaoshu.yuanyin}}</div>
          <div class="solt"><span>故障关键词：</span>{{miaoshu.guanjianci}}</div>
        </template>
        <template slot="caozuo">
          <p class="caozuo-btn">删除</p>
          <p class="caozuo-btn">编辑</p>
          <router-link :to="{ name: 'Write1'}" class="caozuo-btn">详情</router-link>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1746198_j0rledd7fh9.js' // 在 iconfont.cn 上生成
})
const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    width: 60,
    align: 'center'
  },
  {
    title: '方案ID',
    dataIndex: 'fanganID',
    key: 'fanganID',
    align: 'center'
  },
  {
    title: '单位信息',
    dataIndex: 'danwei',
    key: 'danwei',
    ellipsis: true,
    align: 'center'
  },
  {
    title: '故障信息',
    dataIndex: 'guzhang',
    key: 'guzhang',
    ellipsis: true,
    scopedSlots: { customRender: 'guzhang' },
    width: 200,
    align: 'center'
  },
  {
    title: '对应故障部件或分系统',
    dataIndex: 'xitong',
    key: 'xitong',
    align: 'center'
    // ellipsis: true,
  },
  {
    title: '摘要',
    dataIndex: 'zhaiyao',
    key: 'zhaiyao',
    ellipsis: true,
    align: 'center'
  },
  {
    title: '故障描述',
    dataIndex: 'miaoshu',
    key: 'miaoshu',
    ellipsis: true,
    scopedSlots: { customRender: 'miaoshu' },
    align: 'center',
    width: 150,
  },
  {
    title: '目前已完成故障排除描述',
    dataIndex: 'wancheng',
    key: 'wancheng',
    align: 'center'
    // ellipsis: true,
  },
  {
    title: '录入人',
    dataIndex: 'luru',
    key: 'luru',
    ellipsis: true,
    align: 'center'
  },
  {
    title: '录入时间',
    dataIndex: 'lurutime',
    key: 'lurutime',
    ellipsis: true,
    align: 'center'
  },
  {
    title: '操作',
    ellipsis: true,
    align: 'center',
    scopedSlots: { customRender: 'caozuo' },
  },
];

const data = [
  {
    key: '1',
    fanganID: 'JT100000-002034',
    danwei: 'xxx',
    guzhang: {
      gzName: '火箭炮动力系统',
      zbName: '火箭炮',
      zbCode: 'JT10054'
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
      gzName: '火箭炮动力系统',
      zbName: '火箭炮',
      zbCode: 'JT10054'
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
      gzName: '火箭炮动力系统',
      zbName: '火箭炮',
      zbCode: 'JT10054'
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
      data
    }
  },
  methods: {
    switchNav(value) {
      this.navIndex = value
    },
    searchList(){},
    resetSearch(){},
    bindShow(){
      this.isShow = !this.isShow
      console.log(this.lrTime,this.wxTime)
    },
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
        color: #A0A0A0;
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
          border:1px solid rgba(220,223,230,1);
          padding-left: 10px;
          color: #404040;
          &::-webkit-input-placeholder{
            color:#808080;
          }
          &::-moz-placeholder{
            color:#808080;
          }
          &:-moz-placeholder{
            color:#808080;
          }
          &:-ms-input-placeholder{
            color:#808080;
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
    .center-center{
      padding-left: 10px;
      display: flex;
      >p{
        font-size: 14px;
        color: #2A3F54;
        margin: 0 10px 0 0;
        >span{
          padding-right: 20px;
          cursor: pointer;
          color: #757575;
        }
        .span-active{
          color: #1C9399;
        }
      }
    }
    .btns-active{
      bottom: 20px !important;
    }
    .btns {
      display: flex;
      align-items: center;
      position: absolute;
      right: 20px;
      bottom: 0px;
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
        border:1px solid rgba(28,147,153,1);
        color: #1C9399;
        font-size: 14px;
        line-height: 32px;
        font-weight: 100;
        text-align: center;
        margin: 0;
        cursor: pointer;
      }

      > h5 {
        color: #1C9399;
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
.wxTable{
  background: #fff;
  border-top: 1px solid #E4E4E4;
  .solt{
    display: flex;
    color: #666666;
    >span{
      color: #3399FF;
    }
  }
  /deep/.ant-table-thead > tr > th{
    background: #fff;
  }
  /deep/.ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td{
    background: #f5f5f5;
  }
  .caozuo-btn{
    font-size: 14px;
    color: #1C9399;
    cursor: pointer;
  }
}
.left-item-active {
  border-bottom: 2px solid #1c9399 !important;
  color: #1c9399 !important;
}
</style>
