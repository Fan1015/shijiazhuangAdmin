<template>
  <div class="weixiu">
    <div class="bread">
      <s-breadcrumb />
    </div>
    <div class="weixiu-btm">
      <div class="weixiu-btm-title">
        <div class="weixiu-btm-title-left">
          <div class="left-item" :class="navIndex == 0 ? 'left-item-active' : ''" @click="switchNav(0)">
            <icon-font type="icon-zhishi" />装备知识
          </div>
          <div class="left-item" :class="navIndex == 1 ? 'left-item-active' : ''" @click="switchNav(1)">
            <icon-font type="icon-fenxijuece" />知识分析
          </div>
        </div>
        <div class="weixiu-btm-title-right" v-if="navIndex == 0">
          <router-link class="right-item" :to="{ name: 'eqadd' }">添加</router-link>
          <div class="right-item">导入</div>
          <div class="right-item">导出</div>
        </div>
      </div>
      <div class="weixiu-btm-center" v-if="navIndex == 0">
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
              <span slot="title" slot-scope="{ key, value }" v-if="key === '0-0-1'"> Child Node1 {{ value }} </span>
            </a-tree-select>
          </p>
          <p>
            <span class="p-name">对应装备</span>
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
            <span class="p-name">关键词</span>
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
    <div class="wxTable" v-if="navIndex == 0">
      <a-table :pagination="pagination" :columns="columns" :dataSource="data">
        <template slot="guzhang" slot-scope="guzhang">
          <div class="solt"><span>故障名称：</span>{{ guzhang.gzName }}</div>
          <div class="solt"><span>对应装备名称：</span>{{ guzhang.zbName }}</div>
          <div class="solt"><span>装备编号：</span>{{ guzhang.zbCode }}</div>
        </template>
        <template slot="miaoshu" slot-scope="miaoshu">
          <div class="solt"><span>故障现象：</span>{{ miaoshu.xianxiang }}</div>
          <div class="solt"><span>故障原因：</span>{{ miaoshu.yuanyin }}</div>
          <div class="solt"><span>故障关键词：</span>{{ miaoshu.guanjianci }}</div>
        </template>
        <template slot="caozuo">
          <!-- <p class="caozuo-btn">删除</p> -->
          <a-popconfirm title="是否要删除此行？" okText="好的" cancelText="等一等">
            <a-icon slot="icon" type="question-circle-o" style="color:#38a4a6" />
            <p class="caozuo-btn">删除</p>
          </a-popconfirm>
          <router-link class="caozuo-btn" :to="{ name: 'eqmodify' }">编辑</router-link>
          <p class="caozuo-btn" @click="gotoEqDetails">详情</p>
        </template>
      </a-table>
      <EqDetail
        v-if="gotoEqDetailsVisible"
        v-on:fn="
          bol => {
            gotoEqDetailsVisible = bol
          }
        "
      ></EqDetail>
    </div>
    <div class="wx-fenxi" v-if="navIndex == 1">
      <div class="fenxi-top">
        <div class="fenxi-top-l">
          <h3>装备故障上报数趋势</h3>
          <div class="lineChart-box">
            <div class="lineChart-left">
              <h1 class="lineChart-left-text1">
                {{ ValuepieChartContent1 ? ValuepieChartContent1.name : FYValuepieChartContent1 }}
              </h1>
              <p class="lineChart-left-text2">
                {{ ValuepieChartContent1 ? ValuepieChartContent1.value : FXValuepieChartContent1 }}人
              </p>
              <p class="lineChart-left-text3">
                同比上月
                <span>{{ preValuepieChartContent1 }}%</span>
              </p>
              <p class="lineChart-left-text3">
                同比下月
                <span>{{ nextValuepieChartContent2 }}%</span>
              </p>
            </div>
            <div id="myEchart1" style="width:80%; height:200px"></div>
          </div>
        </div>
        <div class="fenxi-top-l">
          <h3>装备故障上报数趋势</h3>
          <div class="lineChart-box">
            <div class="lineChart-left">
              <h1 class="lineChart-left-text1">
                {{ ValuepieChartContent2 ? ValuepieChartContent2.name : FYValuepieChartContent2 }}
              </h1>
              <p class="lineChart-left-text2">
                {{ ValuepieChartContent2 ? ValuepieChartContent2.value : FXValuepieChartContent2 }}人
              </p>
              <p class="lineChart-left-text3">
                同比上月
                <span>{{ preValuepieChartContent2 }}%</span>
              </p>
              <p class="lineChart-left-text3">
                同比下月
                <span>{{ nextValuepieChartContent2 }}%</span>
              </p>
            </div>
            <div id="myEchart2" style="width:80%; height:200px"></div>
          </div>
        </div>

        <div class="fenxi-top-l">
          <div class="lineChart-box-content">
            <div class="lineChart-box-content-c">
              <h3>知识分类</h3>
              <div class="lineChart-c-box">
                <div class="lineChart-left">
                  <h1 class="lineChart-left-text1">{{title2}}</h1>
                  <p class="lineChart-left-text2">{{number2}}</p>
                  <p class="lineChart-left-text3">
                    预计数量
                    <span>{{estimatNumber2}}</span>
                  </p>
                  <p class="lineChart-left-text3">
                    同比相差
                    <span>{{differNumber2}}</span>
                  </p>
                </div>
                <div id="myEchart3" style="width:80%; height:260px"></div>
              </div>
            </div>

            <div class="lineChart-box-content-c">
              <h3>装备类别</h3>
              <div class="lineChart-c-box">
                <div class="lineChart-left">
                  <h1 class="lineChart-left-text1">{{ title1 }}</h1>
                  <p class="lineChart-left-text2">{{ number1 }}</p>
                  <p class="lineChart-left-text3">
                    数量排名
                    <span>{{ rankingNum1 }}</span>
                  </p>
                  <p class="lineChart-left-text3">
                    平均数量
                    <span>{{ averageNum1 }}</span>
                  </p>
                </div>
                <div id="myEchart4" style="width:80%; height:260px"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="fenxi-top-l">
          <div class="fenxi-top-l-header">
            <span>最高评分知识分析</span>
            <span>查看全部</span>
          </div>

          <template>
            <a-table :pagination="false" :columns="columns1" :dataSource="data1" @change="onChange" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import Breadcrumb from '@/components/tools/Breadcrumb'
import { Icon } from 'ant-design-vue'
import EqDetail from './operate/EquipmentKnowledgeDetail'
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
const columns1 = [
  {
    title: '排名',
    dataIndex: '排名',
    width: 80,
    sortDirections: ['descend']
  },
  {
    title: '方案',
    dataIndex: '方案',
    width: 220,
    sortDirections: ['descend']
  },
  {
    title: '阅读量',
    dataIndex: '阅读量',
    width: 120,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.阅读量 - b.阅读量
  },
  {
    title: '收藏量',
    dataIndex: '收藏量',
    width: 120,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.收藏量 - b.收藏量
  },
  {
    title: '平均评分',
    width: 150,
    dataIndex: '平均评分',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age
  }
]

const data1 = [
  {
    key: '1',
    排名: '1',
    阅读量: 32,
    方案: '火箭炮冷却系统检修'
  },
  {
    key: '2',
    排名: '2',
    阅读量: 42,
    方案: '火箭炮冷却系统检修'
  },
  {
    key: '3',
    排名: '3',
    阅读量: 32,
    方案: '火箭炮冷却系统检修'
  },
  {
    key: '4',
    排名: '4',
    阅读量: 32,
    方案: '火箭炮冷却系统检修'
  },
  {
    key: '5',
    排名: '1',
    阅读量: 32,
    方案: '火箭炮冷却系统检修'
  },
  {
    key: '6',
    排名: '2',
    阅读量: 42,
    方案: '火箭炮冷却系统检修'
  },
  {
    key: '7',
    排名: '3',
    阅读量: 32,
    方案: '火箭炮冷却系统检修'
  },
  {
    key: '8',
    排名: '4',
    阅读量: 32,
    方案: '火箭炮冷却系统检修'
  },
  {
    key: '9',
    排名: '3',
    阅读量: 32,
    方案: '火箭炮冷却系统检修'
  },
  {
    key: '10',
    排名: '4',
    阅读量: 32,
    方案: '火箭炮冷却系统检修'
  }
]

function onChange(pagination, filters, sorter) {
  // console.log('params', pagination, filters, sorter);
}

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1746198_bc3vt2pn0h.js' // 在 iconfont.cn 上生成
})
const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    width: 100
  },
  {
    title: '名称',
    dataIndex: 'fanganID',
    key: 'fanganID'
  },
  {
    title: '类别',
    dataIndex: 'danwei',
    key: 'danwei',
    ellipsis: true
  },
  {
    title: '所属分系统',
    dataIndex: 'guzhang',
    key: 'guzhang',
    ellipsis: true,
    width: 200
  },
  {
    title: '对应装备',
    dataIndex: 'xitong',
    key: 'xitong'
    // ellipsis: true,
  },
  {
    title: '维修知识摘要',
    dataIndex: 'zhaiyao',
    key: 'zhaiyao',
    ellipsis: true
  },
  {
    title: '维修知识内容',
    dataIndex: 'miaoshu',
    key: 'miaoshu',
    ellipsis: true,
    width: 150
  },
  {
    title: '关键词',
    dataIndex: 'wancheng',
    key: 'wancheng'
    // ellipsis: true,
  },
  {
    title: '录入人',
    dataIndex: 'luru',
    key: 'luru',
    ellipsis: true
  },
  {
    title: '录入时间',
    dataIndex: 'lurutime',
    key: 'lurutime',
    ellipsis: true
  },
  {
    title: '操作',
    ellipsis: true,
    align: 'center',
    scopedSlots: { customRender: 'caozuo' }
  }
]

const data = [
  {
    key: '1',
    fanganID: 'JT100000-002034',
    danwei: 'xxx',
    guzhang: 'JT10054',
    xitong: 'xxx',
    zhaiyao: 'xxxx',
    miaoshu: 'xxx',
    wancheng: '描述排除故障',
    luru: '木兰长江',
    lurutime: '2018-03-05'
  },
  {
    key: '2',
    fanganID: 'JT100000-002034',
    danwei: 'xxx',
    guzhang: 'JT10054',
    xitong: 'xxx',
    zhaiyao: 'xxxx',
    miaoshu: 'xxx',
    wancheng: '描述排除故障',
    luru: '木兰长江',
    lurutime: '2018-03-05'
  },
  {
    key: '3',
    fanganID: 'JT100000-002034',
    danwei: 'xxx',
    guzhang: 'JT10054',
    xitong: 'xxx',
    zhaiyao: 'xxxx',
    miaoshu: 'xxx',
    wancheng: '描述排除故障',
    luru: '木兰长江',
    lurutime: '2018-03-05'
  }
]
// 第一个折线图
const dataChartY1 = [
  {
    value: 600, //左侧起点
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 1150,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 810,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 640,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 570,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 799,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 547,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  }
]
const dataChartX1 = ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
// 第二个折线图
const dataChartY2 = [
  {
    value: 600,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 1150,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 810,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 640,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 570,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 799,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  },
  {
    value: 547,
    symbol: 'circle',
    symbolSize: 5,
    itemStyle: {
      color: '#1C9399',
      shadowColor: 'rgba(28,147,153,.5)'
    }
  }
]
const dataChartX2 = ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
//第三个柱形图
const dataChartY3 =  [130, 120, 140, 150, 100]
const dataChartX3 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
// 第四个柱形图
const dataChartY4 = [60, 50, 40, 80, 70]
const dataChartX4 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
export default {
  components: {
    's-breadcrumb': Breadcrumb,
    IconFont,
    EqDetail
  },
  data() {
    return {
      data: [],
      navIndex: 0,
      isShow: false,
      // zbName: null,
      wxPeople: null,
      wxTime: null,
      lrPeople: null,
      zbCode: null,
      wxGongshi: null,
      bdName: null,
      lrTime: null,
      gotoEqDetailsVisible: false,
      columns,
      data,
      data1,
      columns1,
      value: undefined,
      treeData,
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
      },
      // 第一个折线图
      dataChartX1,
      dataChartY1,
      preValuepieChartContent1: 0,
      nextValuepieChartContent1: 0,
      FXValuepieChartContent1: 0,
      FYValuepieChartContent1: 0,
      ValuepieChartContent1: null,
      // 第二个折线图
      dataChartX2,
      dataChartY2,
      preValuepieChartContent2: 0,
      nextValuepieChartContent2: 0,
      FXValuepieChartContent2: 0,
      FYValuepieChartContent2: 0,
      ValuepieChartContent2: null,
      // 第三个柱形图
      dataChartX3,
      dataChartY3,
      title2:0,
      number2:0,
      estimatNumber2:0,//预计数量
      maxNumber2:200,//最大数量
      differNumber2:0,
      // 第四个柱状图
      title1: 0,
      number1: 0,
      rankingNum1: 0,
      averageNum1: 0,
      dataChartY4,
      dataChartX4,
      arryNum: []
    }
  },
  mounted() {
    // console.log(222,this.arryNum)
    this.echartsNum1()
    this.echartsNum2()
    this.echartsNum3()
    this.echartsNum4()
    // this.myEchart(this.arryNum)
    window.addEventListener('resize', () => {
      if (this.navIndex == 1) {
        let myEchart1 = echarts.init(document.getElementById('myEchart1'))
        let myEchart2 = echarts.init(document.getElementById('myEchart2'))
        let myEchart3 = echarts.init(document.getElementById('myEchart3'))
        let myEchart4 = echarts.init(document.getElementById('myEchart4'))
        myEchart1.resize()
        myEchart2.resize()
        myEchart3.resize()
        myEchart4.resize()
      }
    })
  },
  methods: {
    switchNav(value) {
      this.navIndex = value
      let that = this
      if (value == 1) {
        setTimeout(() => {
          that.myEchart(dataChartX1, dataChartY1, dataChartX2, dataChartY2,dataChartX3,dataChartY3,that.maxNumber2, dataChartX4, dataChartY4, that.arryNum)
        }, 200)
      }
    },
    gotoEqDetails() {
      this.gotoEqDetailsVisible = true
    },
    searchList() {},
    resetSearch() {},
    bindShow() {
      this.isShow = !this.isShow
      console.log(this.lrTime, this.wxTime)
    },
    // 第一个折线图
    echartsNum1() {
      let temp2 = 0
      let tempIndex2 = 0
      this.dataChartY1.map(v => {
        if (v.value > temp2) {
          temp2 = v.value
        }
        return temp2
      })
      for (let i in this.dataChartY1) {
        if (this.dataChartY1[i].value === temp2) tempIndex2 = i
      }
      this.FXValuepieChartContent1 = this.dataChartY1[tempIndex2].value
      this.FYValuepieChartContent1 = this.dataChartX1[tempIndex2]
      if (tempIndex2 > 0) {
        this.preValuepieChartContent1 = parseInt(
          (this.dataChartY1[tempIndex2].value / this.dataChartY1[tempIndex2 - 1].value - 1) * 100
        )
      } else {
        this.preValuepieChartContent1 = 0 // this.nextValuepieChartContent3='空'
      }
      if (tempIndex2 - 0 + 1 < this.dataChartY1.length - 1) {
        this.nextValuepieChartContent1 = parseInt(
          (this.dataChartY1[tempIndex2].value / this.dataChartY1[tempIndex2 - 0 + 1].value - 1) * 100
        )
      } else {
        this.nextValuepieChartContent2 = 0
      }
    },
    // 第二个折线图
    echartsNum2() {
      let temp2 = 0
      let tempIndex2 = 0
      this.dataChartY2.map(v => {
        if (v.value > temp2) {
          temp2 = v.value
        }
        return temp2
      })
      for (let i in this.dataChartY2) {
        if (this.dataChartY2[i].value === temp2) tempIndex2 = i
      }
      this.FXValuepieChartContent2 = this.dataChartY2[tempIndex2].value
      this.FYValuepieChartContent2 = this.dataChartX2[tempIndex2]
      if (tempIndex2 > 0) {
        this.preValuepieChartContent2 = parseInt(
          (this.dataChartY2[tempIndex2].value / this.dataChartY2[tempIndex2 - 1].value - 1) * 100
        )
      } else {
        this.preValuepieChartContent2 = 0 // this.nextValuepieChartContent3='空'
      }
      if (tempIndex2 - 0 + 1 < this.dataChartY2.length - 1) {
        this.nextValuepieChartContent2 = parseInt(
          (this.dataChartY2[tempIndex2].value / this.dataChartY2[tempIndex2 - 0 + 1].value - 1) * 100
        )
      } else {
        // this.preValuepieChartContent3='空'
        this.nextValuepieChartContent2 = 0
      } // console.log(this.FValuepieChartContent3)
    },
     // 第三个柱形图
    echartsNum3() {
      let tempMax = 0 //最大值
      let tempMaxIndex = 0 //下标
      this.dataChartY3.map(bardatay => {
        if (bardatay > tempMax) {
          tempMax = bardatay //最大值
          return tempMax
        }
      })

      for (let index in this.dataChartY3) {
        if (this.dataChartY3[index] == tempMax) {
          tempMaxIndex = index//最大值下标
        }
      }
      this.number2 = this.dataChartY3[tempMaxIndex]
      this.title2 = this.dataChartX3[tempMaxIndex]
    },
    // 第四个柱形图
    echartsNum4() {
      let tempMax = 0 //最大值
      let sum = 0
      let tempMaxIndex = 0 //下标
      // let arry=[]
      this.dataChartY4.map(bardatay => {
        sum += bardatay
        if (bardatay > tempMax) {
          tempMax = bardatay //最大值
          return tempMax
        }
      })

      for (let index in this.dataChartY4) {
        if (this.dataChartY4[index] == tempMax) {
          tempMaxIndex = index
        }
      }
      for (let i in dataChartY4) {
        this.arryNum.push(this.dataChartY4[i])
      }
      this.arryNum.sort((a, b) => {
        return b - a
      })
      this.averageNum1 = Math.ceil(sum / this.dataChartY4.length) //平均值
      this.number1 = this.dataChartY4[tempMaxIndex]
      this.title1 = this.dataChartX4[tempMaxIndex]
      this.rankingNum1 = tempMaxIndex - 0 + 1
    },
    onChange,
    myEchart(dataChartX1, dataChartY1, dataChartX2, dataChartY2,dataChartX3,dataChartY3,maxNumber2,dataChartX4, dataChartY4, arryNum) {
      let myEchart1 = echarts.init(document.getElementById('myEchart1'))
      let myEchart2 = echarts.init(document.getElementById('myEchart2'))
      let myEchart3 = echarts.init(document.getElementById('myEchart3'))
      let myEchart4 = echarts.init(document.getElementById('myEchart4'))

      let option1 = {
        title: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: []
        },
        grid: {
          //整体距上下左右的距离
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            // boundaryGap:false,
            // min:[10],
            type: 'category',
            data: dataChartX1,
            axisTick: {
              show: false
            },
            axisLine: {
              //去掉线
              show: true,
              lineStyle: {
                //线的颜色
                color: '#DCDEE3'
              }
            },
            axisLabel: {
              // interval:1,
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            textStyle: { //x轴上的字体颜色
              fontSize: '12' //x轴字体大小
            }
          }
          }
        ],
        yAxis: [
          {
            type: 'value',
            // data: [0, 400, 600, 800, 1000, 1200],
            splitLine: {
              lineStyle: {
                type: 'dashed', //线的类型 中间横条的线
                color: '#DCDEE3' //线的颜色
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              //去掉线
              show: false,
              lineStyle: {
                //线的颜色
                color: '#DCDEE3'
              }
            },
            axisLabel: {
              //字体颜色
              textStyle: {
                color: '#333333'
                //color: 'transparent'可以去掉字
              }
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'line',
            smooth: 0.4, //是否为平滑曲线
            symbol: 'circle', //拐点标记的图形
            symbolSize: 5, //拐点标记的大小
            stack: '总量',
            areaStyle: {},
            data: dataChartY1,

            lineStyle: {
              //折线的颜色
              color: '#1C9399'
            },
            emphasis: {
              itemStyle: {
                color: '#1C9399',
                shadowColor: '#1C9399'
              }
            },
            markLine: {
              //图标标线
              lineStyle: {
                //标线样式
                type: 'dashed', //线的类型
                color: '#DCDEE3' //线的颜色
              }
            }
          }
        ],

        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(28,147,153,.5)' // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(118,190,193,0)' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        backgroundColor: 'transparent'
      }

      let option2 = {
        title: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: []
        },
        grid: {
          //整体距上下左右的距离
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis:
          {
            type: 'category',
            // boundaryGap: false,
            data: dataChartX2,
            axisTick: {
              show: false
            },
            axisLine: {
              //去掉线
              show: true,
              lineStyle: {
                //线的颜色
                color: '#DCDEE3'
              }
            }
          }
        ,
        yAxis: [
          {
            type: 'value',
            data: [0, 400, 600, 800, 1000, 1200],
            splitLine: {
              lineStyle: {
                type: 'dashed', //线的类型 中间横条的线
                color: '#DCDEE3' //线的颜色
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              //去掉线
              show: false,
              lineStyle: {
                //线的颜色
                color: '#DCDEE3'
              }
            },
            axisLabel: {
              //字体颜色
              textStyle: {
                color: '#333333'
                //color: 'transparent'可以去掉字
              }
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'line',
            smooth: 0.4, //是否为平滑曲线
            symbol: 'circle', //拐点标记的图形
            symbolSize: 5, //拐点标记的大小
            stack: '总量',
            areaStyle: {},
            data: dataChartY2,
            lineStyle: {
              //折线的颜色
              color: '#1C9399'
            },
            emphasis: {
              itemStyle: {
                color: '#1C9399',
                shadowColor: '#1C9399'
              }
            },
            markLine: {
              //图标标线
              lineStyle: {
                //标线样式
                type: 'dashed', //线的类型
                color: '#DCDEE3' //线的颜色
              }
            }
          }
        ],

        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(28,147,153,.5)' // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(118,190,193,0)' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        backgroundColor: 'transparent'
      }

      let option3 = {
        color: ['#1C9399'],
        barWidth: 40, //柱图宽度，
        xAxis: {
          type: 'category',
          data: dataChartX3,
          axisLine: {
            //去掉线
            show: true,
            lineStyle: {
              //线的颜色
              color: '#DCDEE3'
            }
          },
          axisTick: {
            //去掉锯齿状
            show: false
          },
          axisLabel: {
            //字体颜色
            textStyle: {
              color: '#999999'
              //color: 'transparent'可以去掉字
            }
          },
          splitLine: {
            //去掉轴上中间的线，具体看线的方向
            lineStyle: {
              //标线样式
              type: 'dashed', //线的类型
              color: '#DCDEE3' //线的颜色
            }
          }
        },
        yAxis: {
          type: 'value',
          max: maxNumber2,
          min: 0,
          axisLine: {
            //去掉线
            show: false,
            lineStyle: {
              //线的颜色
              color: 'transparent'
            }
          },
          axisTick: {
            //去掉锯齿状
            show: false
          },
          axisLabel: {
            show: true,
            //字体颜色
            textStyle: {
              color: '#333333'
              //color: 'transparent'可以去掉字
            }
          },
          splitLine: {
            //去掉轴上中间的线，具体看线的方向
            lineStyle: {
              //标线样式
              type: 'dashed', //线的类型
              color: '#DCDEE3' //线的颜色
            }
          }
        },
        series: [
          {
            data:dataChartY3,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: '#9DD0D3'
            }
          }
        ]
      }

      let option4 = {
        color: ['#1C9399'],
        barWidth: 40, //柱图宽度，
        xAxis: {
          type: 'category',
          data: dataChartX4,
          axisLine: {
            //去掉线
            show: true,
            lineStyle: {
              //线的颜色
              color: '#DCDEE3'
            }
          },
          axisTick: {
            //去掉锯齿状
            show: false
          },
          axisLabel: {
            //字体颜色
            textStyle: {
              color: '#999999'
              //color: 'transparent'可以去掉字
            }
          },
          splitLine: {
            //去掉轴上中间的线，具体看线的方向
            lineStyle: {
              //标线样式
              type: 'dashed', //线的类型
              color: '#DCDEE3' //线的颜色
            }
          }
        },
        yAxis: {
          type: 'value',
          max: 200,
          min: 0,
          axisLine: {
            //去掉线
            show: false,
            lineStyle: {
              //线的颜色
              color: 'transparent'
            }
          },
          axisTick: {
            //去掉锯齿状
            show: false
          },
          axisLabel: {
            //字体颜色
            textStyle: {
              color: '#333333'
              //color: 'transparent'可以去掉字
            }
          },
          splitLine: {
            //去掉轴上中间的线，具体看线的方向
            lineStyle: {
              //标线样式
              type: 'dashed', //线的类型
              color: '#DCDEE3' //线的颜色
            }
          }
        },
        series: [
          {
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'transparent'
            },
            data: dataChartY4
          }
        ]
      }
      myEchart1.setOption(option1)
      myEchart2.setOption(option2)
      myEchart3.setOption(option3)
      myEchart4.setOption(option4)
      let that = this
      myEchart1.on('click', function(params) {
        // console.log(params, op, data3)
        if (params.componentType === 'series') {
          that.nextValuepieChartContent1 = params
          if (params.dataIndex > 0) {
            that.preValuepieChartContent1 = parseInt((params.value / dataChartY1[params.dataIndex - 1].value - 1) * 100)
          } else {
            that.preValuepieChartContent1 = 0 //  that.nextValuepieChartContent3 = '空'
          }
          if (params.dataIndex < dataChartY1.length - 1) {
            that.nextValuepieChartContent1 = parseInt(
              (params.value / dataChartY1[params.dataIndex + 1].value - 1) * 100
            )
          } else {
            //  that.preValuepieChartContent3 = '空'
            that.nextValuepieChartContent1 = 0
          }
          // console.log('您点击了我', that.preValuepieChartContent2, that.nextValuepieChartContent2)
        }
      })
      myEchart2.on('click', function(params) {
        // console.log(params, op, data3)
        if (params.componentType === 'series') {
          that.ValuepieChartContent2 = params
          if (params.dataIndex > 0) {
            that.preValuepieChartContent2 = parseInt((params.value / dataChartY2[params.dataIndex - 1].value - 1) * 100)
          } else {
            that.preValuepieChartContent2 = 0 //  that.nextValuepieChartContent3 = '空'
          }
          if (params.dataIndex < dataChartY2.length - 1) {
            that.nextValuepieChartContent2 = parseInt(
              (params.value / dataChartY2[params.dataIndex + 1].value - 1) * 100
            )
          } else {
            //  that.preValuepieChartContent3 = '空'
            that.nextValuepieChartContent2 = 0
          }
          // console.log('您点击了我', that.preValuepieChartContent2, that.nextValuepieChartContent2)
        }
      })
      myEchart4.on('click', function(params) {
        // console.log(params)
        // console.log(arryNum)
        let tempi = 0
        for (let i in arryNum) {
          if (arryNum[i] == params.value) {
            tempi = i
          }
        }
        that.rankingNum1 = tempi - 0 + 1
        that.title1 = params.name
        that.number1 = params.value
        // console.log(that.rankingNum1)
      })
      myEchart3.on('click', function(params) {
        that.number2=params.value
        that.title2=params.name
        that.estimatNumber2=maxNumber2
        that.differNumber2=(maxNumber2 - params.value)
      })
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
        // 树状导航选择
        /deep/.ant-select {
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
  // .caozuo-btn{
  //   font-size: 14px;
  //   color: #1C9399;
  //   cursor: pointer;
  // }
  .caozuo-btn {
    font-size: 14px;
    color: #1c9399;
    cursor: pointer;
  }
  .caozuo-btn:last-child {
    margin-top: 15px;
  }
}
.left-item-active {
  border-bottom: 2px solid #1c9399 !important;
  color: #1c9399 !important;
}

//分析
.fenxi-top {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  flex-wrap: wrap;
  &-l {
    width: 49%;
    background: #fff;
    border-radius: 8px;
    height: 260px;
    margin-bottom: 20px;
    padding: 20px;
    // display: flex;
    h3 {
      color: #21364d;
      font-size: 16px;
      font-weight: 500;
    }
    .lineChart-box {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .lineChart-left-text1 {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      color: rgba(28, 147, 153, 1);
      margin-bottom: 10px;
      margin-top: 20px;
    }
    .lineChart-left p {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 30px;
    }
    .lineChart-left-text2 {
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
    .lineChart-left-text3 {
      color: rgba(153, 153, 153, 1);
    }
    .lineChart-left p span {
      color: rgba(28, 147, 153, 1);
    }
  }
}

.fenxi-top-l:nth-child(3) {
  height: 640px;
  background: #f4f4f4;
  padding: 0;
}

.fenxi-top-l:nth-child(4) {
  height: 640px;
}

.lineChart-box-content {
  display: flex;
  flex-direction: column;
}
.lineChart-box-content-c {
  border-radius: 8px;
  margin-bottom: 20px;
  background: #fff;
  height: 310px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.lineChart-c-box {
  display: flex;
}

//最后一个的样式

.fenxi-top-l-header {
  display: flex;
  justify-content: space-between;
  span:nth-child(1) {
    width: 128px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(33, 54, 77, 1);
    line-height: 22px;
  }
  span:nth-child(2) {
    width: 64px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 22px;
  }
  /deep/table > .ant-table-tbody > tr {
    background: red !important;
  }
}

/deep/.ant-table-thead > tr > th {
}
/deep/.ant-table-thead > tr > th {
  color: #6a7d9e;
  font-size: 16px;
  background: #fff;
  // border: none;
}
.fenxi-top-l /deep/.ant-table-tbody > tr > td {
  color: #666666;
  font-size: 14px;
  border-bottom: 10px solid #ffffff;
  padding: 10px 16px;
}
.fenxi-top-l /deep/.ant-table-row.ant-table-row-level-0 > td {
  background: rgba(235, 246, 246, 1);
}

/deep/.ant-layout-footer {
  // display: none;
  // height: 0;
  padding: 0 !important;
}
/deep/.ant-table-pagination.ant-pagination {
  margin-top: 50px;
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
/deep/.ant-pagination-item {
  border: 1px solid #1c9399;
  color: #1c9399;
  background: #fff;
}
/deep/.ant-pagination-item-active {
  background: rgba(28, 147, 153, 1);
}
/deep/.ant-pagination-item-active a {
  color: #fff;
}
/deep/.ant-table-thead tr th:nth-child(7) {
  text-align: center;
}
/deep/.ant-table-row-level-0 td:nth-child(7) {
  text-align: center;
}
</style>
