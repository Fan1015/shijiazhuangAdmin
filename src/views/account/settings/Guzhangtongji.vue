<template>
  <!-- 故障上报统计 -->
  <div class="statistic">
    <!-- 顶部面包屑导航 -->
    <div class="breadcrumb-nav">
      <!-- 面包屑导航符号 -->
      <s-breadcrumb />
    </div>

    <div class="fenxi-top">
      <div>
        <a-tabs defaultActiveKey="1" @change="callback">
          <a-tab-pane key="1">
            <span slot="tab">
              <icon-font type="icon-zongtifenxi" />
              总体分析
            </span>
            <div class="nav1-content">
              <!-- 故障数量 -->
              <div class="guzhang-number">
                <div class="number-con">
                  <span class="num-title">故障总数</span>
                  <span class="num-number">57</span>
                </div>
                <div class="number">
                  <div class="num-line"></div>
                  <div class="number-con" v-for="(items, index) in numList" :key="index">
                    <span class="num-title title" :class="colorst[index]">{{ items.title }}</span>
                    <span class="num-number">{{ items.number }}</span>
                  </div>
                </div>
              </div>
              <!-- 两个饼状图 -->
              <div class="circle">
                <div class="circle-lf">
                  <span class="circle-title">装备故障分布统计</span>
                  <div id="circle1" style="width:80%;height:220px"></div>
                </div>
                <div class="circle-rg">
                  <span class="circle-title">修竣单位统计</span>
                  <div id="circle2" style="width:80%;height:220px"></div>
                </div>
              </div>

              <!-- 折线图和柱状图 -->
              <div class="linebar">
                <div class="linebar-lf">
                  <span class="linebar-title">装备故障分布统计</span>
                  <div class="linebar-lf-table">
                    <div class="place">
                      <span class="place-lf">{{ address1 }}</span>
                    </div>
                    <div class="table1">
                      <span class="table1-lf">故障数量</span>
                      <span class="table1-rg">{{ guzhangNumber1 }}</span>
                    </div>
                    <div class="table1">
                      <span class="table1-lf">故障率</span>
                      <span class="table1-rg">{{ guzhangRate1 }}%</span>
                    </div>
                    <div class="table1">
                      <span class="table1-lf">排名</span>
                      <span class="table1-rg">{{ ranking1 }}</span>
                    </div>
                    <div class="table-line"></div>
                    <div class="table2">
                      <span class="table2-lf">平均数量</span>
                      <span class="table2-rg">{{ averageNum1 }}</span>
                    </div>
                    <div class="table2">
                      <span class="table2-lf">最高数量</span>
                      <span class="table2-rg">{{ DataMaxName1 }},{{ DataMax1 }}</span>
                    </div>
                    <div class="table2">
                      <span class="table2-lf">最低数量</span>
                      <span class="table2-rg">{{ DataMinName1 }},{{ DataMin1 }}</span>
                    </div>
                  </div>
                </div>
                <div class="linebar-rg">
                  <div id="tubiao" style="width:100%;height:400px"></div>
                </div>
              </div>
              <!-- 底部柱状图 -->
              <div class="bar">
                <span class="bar-title">装备故障数量分析(按厂家分析）</span>
                <div class="bar-foot">
                  <div class="linebar-lf">
                    <div class="linebar-lf-table">
                      <div class="place">
                        <span class="place-lf">{{ address }}</span>
                      </div>
                      <div class="table1">
                        <span class="table1-lf">故障数量</span>
                        <span class="table1-rg">{{ guzhangNumber }}</span>
                      </div>
                      <div class="table1">
                        <span class="table1-lf">故障率</span>
                        <span class="table1-rg">{{ guzhangRate }}%</span>
                      </div>
                      <div class="table1">
                        <span class="table1-lf">排名</span>
                        <span class="table1-rg">{{ ranking }}</span>
                      </div>
                      <div class="table-line"></div>
                      <div class="table2">
                        <span class="table2-lf">平均数量</span>
                        <span class="table2-rg">{{ averageNum }}</span>
                      </div>
                      <div class="table2">
                        <span class="table2-lf">最高数量</span>
                        <!-- <span class="table2-rg">河南,1398</span> -->
                        <span class="table2-rg">{{ DataMaxName }},{{ DataMax }}</span>
                      </div>
                      <div class="table2">
                        <span class="table2-lf">最低数量</span>
                        <!-- <span class="table2-rg">河北,670</span> -->
                        <span class="table2-rg">{{ DataMinName }},{{ DataMin }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="linebar-rg">
                    <div id="zhuxing" style="width:100%;height:400px"></div>
                  </div>
                </div>
              </div>
            </div>
          </a-tab-pane>

          <a-tab-pane key="2">
            <span slot="tab">
              <icon-font type="icon-wujiaoxingxingxing" />
              高级定制分析
            </span>
            <div class="nav2-content">
              <div class="nav2-content-top">
                <!-- 按需查询 -->
                <div class="weixiu-btm-center">
                  <div class="center-title">
                    <p>
                      <span class="p-name">名称</span>
                      <input
                        v-model="zbName"
                        type="text"
                        placeholder="火箭炮动力系统"
                        placeholder-style="color:rgba(0, 0, 0, 0.65)"
                      />
                    </p>
                    <p>
                      <span class="p-name">搜索条件</span>
                      <input
                        v-model="wxPeople"
                        type="text"
                        placeholder="请输入"
                        placeholder-style="color:rgba(0, 0, 0, 0.65)"
                      />
                    </p>
                    <p>
                      <span class="p-name">搜索条件</span>
                      <input
                        v-model="wxPeople"
                        type="text"
                        placeholder="请输入"
                        placeholder-style="color:rgba(0, 0, 0, 0.65)"
                      />
                    </p>
                    <p>
                      <span class="p-name">搜索条件</span>
                      <input v-model="lrPeople" type="text" placeholder="请输入" />
                    </p>
                    <p>
                      <span class="p-name">类别</span>
                      <input v-model="zbCode" type="text" placeholder="全部" />
                    </p>
                    <p>
                      <span class="p-name">图表样式</span>
                      <!-- <select name="" id="" v-model="wxGongshi" value="饼状图">
                      <option value="1">饼状图</option>
                      <option value="2">折线图</option>
                      <option value="3">折线图</option>
                      </select> -->
                      <a-select defaultValue="饼状图" style="width: 120px" @change="handleChange">
                        <a-select-option value="饼状图">饼状图</a-select-option>
                        <a-select-option value="折线图">折线图</a-select-option>
                        <a-select-option value="折线图">折线图</a-select-option>
                      </a-select>
                    </p>
                    <!-- <p>
                      <span class="p-name">部队名称</span>
                      <input v-model="bdName" type="text" placeholder="请输入部队名称" />
                    </p> -->
                    <p>
                      <a-button>查询</a-button>
                      <a-button>重置</a-button>
                    </p>
                  </div>
                </div>
              </div>
              <div class="nav2-content-foot">
                <div class="nav2-content-foot1" v-show="chartshow">
                  <div class="">
                    <p>保障装备故障率</p>
                  </div>
                  <div id="faultrate" style="height:250px"></div>
                </div>
                <div class="nav2-content-foot2">
                  <div class="nav2-content-foot2-1">
                    <span class="nav2-content-foot2-1-title">名称</span>
                    <span v-for="(title, index1) in titleData" :key="index1">{{ title.title }}</span>
                  </div>
                  <div class="nav2-content-foot2-1">
                    <span class="nav2-content-foot2-1-title">数量</span>
                    <span v-for="(num, index2) in numberData" :key="index2">{{ num.number }}</span>
                  </div>
                  <div class="nav2-content-foot2-1">
                    <span class="nav2-content-foot2-1-title">占比</span>
                    <span v-for="(rate, index3) in rateData" :key="index3">{{ rate.rate }}</span>
                  </div>
                </div>
                <div class="nav2-content-foot3">
                  <router-link to="">生成分析报告</router-link>
                  <router-link to="">导出搜索结果至excel</router-link>
                </div>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
      <div class="fenxi-rg">
        <div class="fenxi-rg-con">
          <div class="fenxi-rg-nav">
            <a-button class="rg-nav-1" :size="size">月报</a-button>
            <a-button class="rg-nav-1" :size="size">季报</a-button>
            <a-button class="rg-nav-1  rg-nav-active" :size="size">年报</a-button>
          </div>
          <div class="fenxi-rg-time">
            <a-range-picker
              :placeholder="['开始月份', '结束月份']"
              format="YYYY-MM"
              :value="value"
              :mode="mode2"
              @panelChange="handlePanelChange2"
              @change="handleChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { getProjectList } from '@/api/projectManagement'
import Breadcrumb from '@/components/tools/Breadcrumb'
import echarts from 'echarts'
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  //at.alicdn.com/t/font_1753443_pha8nywnoj.js
  scriptUrl: '//at.alicdn.com/t/font_1753443_vvxdnulrv2.js' // 在 iconfont.cn 上生成
})
// 总体分析第一个折线柱状图
const BarY = [800, 650, 720, 910, 680, 600, 920, 750, 820, 550, 400, 670, 430, 300, 450]

const LineY = [1000, 1200, 1100, 1250, 1300, 1150, 1350, 1050, 1230, 1030, 980, 1240, 1380, 1240, 1090]
const LineBarX = [
  '新疆',
  '河南',
  '河北',
  '上海',
  '江西',
  '浙江',
  '山东',
  '杭州',
  '北京',
  '陕西',
  '成都',
  '重庆',
  '四川',
  '江苏',
  '南京'
]
//总体分析第二个柱状图数据
const BarDataX = [
  '厂家A',
  '厂家B',
  '厂家C',
  '厂家 D',
  '厂家E',
  '厂家F',
  '厂家G',
  '厂家H',
  '厂家I',
  '厂家J',
  '厂家K',
  '厂家L',
  '厂家M',
  '厂家N',
  '厂家O'
]
const BarDataY = [20, 60, 72, 90, 30, 75, 40, 35, 80, 55, 25, 65, 50, 10, 45]

export default {
  components: {
    's-breadcrumb': Breadcrumb,
    IconFont
  },
  data() {
    return {
      // 分析导航当前显示
      // navIndex: 0,
      keyNum: 1,
      size: 'small',
      chartshow: true,
      zbName: null,
      wxPeople: null,
      wxTime: null,
      lrPeople: null,
      zbCode: null,
      wxGongshi: null,
      bdName: null,
      lrTime: null,

      //故障数量
      numList: [
        {
          title: '维修案例总数',
          number: '3'
        },
        {
          title: '装备知识总量',
          number: '8'
        },
        {
          title: '保障设备总量',
          number: '1'
        },
        {
          title: '系统活跃人数',
          number: '1'
        }
      ],
      titleData: [{ title: '冷却系统' }, { title: '冷却系统' }, { title: '冷却系统' }, { title: '冷却系统' }],
      numberData: [{ number: '50例' }, { number: '50例' }, { number: '50例' }, { number: '50例' }],
      rateData: [{ rate: '25%' }, { rate: '25%' }, { rate: '25%' }, { rate: '25%' }],
      //   圆点颜色
      colorst: ['title1', 'title2', 'title3', 'title4'],
      mode2: ['month', 'month'],
      value: [],
      // 总体分析第一个折线状图数据
      LineBarX,
      LineY,
      BarY,
      averageNum1: 0, //平均值

      DataMax1: 0, //最大值
      DataMaxName1: 0, //最大值地区
      DataMin1: 0, //最小值
      DataMinName1: 0, //最大值地区
      guzhangNumber1: 0,
      address1: 0, //厂家地址
      guzhangRate1: 0, //故障率
      ranking1: 0, //排名
      rateArry1: [],

      //总体分析第二个柱状图数据
      averageNum: 0, //平均值
      BarDataX, //X坐标值
      BarDataY, //y坐标值
      DataMax: 0, //最大值
      DataMaxName: 0, //最大值地区
      DataMin: 0, //最小值
      DataMinName: 0, //最大值地区
      guzhangNumber: 0,
      address: 0, //厂家地址
      guzhangRate: 0, //故障率
      ranking: 0, //排名
      rateArry: []
    }
  },
  mounted() {
    // this.getlist()
    this.BarProcessingMaxData1()
    this.BarProcessingMinData1()
    this.BarProcessingMaxData()
    this.BarProcessingMinData()
    this.pieChart()
    this.linebarChart(this.LineBarX, this.LineY, this.BarY, this.rateArry1)
    this.barChart(this.BarDataX, this.BarDataY, this.rateArry)
    window.onresize = () => {
      if (this.keyNum == 2) {
        const myChart = echarts.init(document.getElementById('faultrate'))
        myChart.resize()
      }
      // console.log(this.keyNum)
      if (this.keyNum == 1) {
        const myChart1 = echarts.init(document.getElementById('circle1'))
        const myChart2 = echarts.init(document.getElementById('circle2'))
        const tubiao = echarts.init(document.getElementById('tubiao'))
        const zhuxing = echarts.init(document.getElementById('zhuxing'))

        myChart1.resize()
        myChart2.resize()
        tubiao.resize()
        zhuxing.resize()
      }
    }
  },
  methods: {
    // getlist() {
    //   getProjectList().then(res => {
    //     console.log(res)
    //     res.data.records.map(item => {
    //       console.log(item)
    //     })
    //     // this.pieChart(arr)
    //     // console.log(arr)
    //   })
    // },
    // 总体分析第一个折线状图数据
    BarProcessingMaxData1() {
      let tempMax = 0 //最大值
      let sum = 0
      let tempMaxIndex = 0 //下标
      // let arry=[]
      this.BarY.map(bardatay => {
        sum += bardatay
        if (bardatay > tempMax) {
          tempMax = bardatay //最大值
          return tempMax
        }
      })

      for (let index in this.BarY) {
        if (this.BarY[index] == tempMax) {
          tempMaxIndex = index
        }
      }
      for (let i in BarY) {
        this.rateArry1.push(this.BarY[i])
      }
      this.rateArry1.sort((a, b) => {
        return b - a
      })
      // console.log(this.rateArry1)
      this.averageNum1 = Math.ceil(sum / this.BarY.length) //平均值
      this.DataMax1 = this.BarY[tempMaxIndex]
      this.DataMaxName1 = this.LineBarX[tempMaxIndex]
      this.address1 = this.LineBarX[tempMaxIndex] //默认厂家最大值得
      this.guzhangNumber1 = this.BarY[tempMaxIndex] //默认最大的
      this.guzhangRate1 = Math.ceil((this.guzhangNumber1 / sum) * 100)
      this.ranking1 = Number(tempMaxIndex) + 1
    },
    BarProcessingMinData1() {
      let tempMin = 10000 //最小值
      let tempMinIndex = 0
      this.BarY.map(bardatay => {
        if (bardatay < tempMin) {
          tempMin = bardatay //最小值
        }
        return tempMin
      })
      for (let index in this.BarY) {
        if (this.BarY[index] === tempMin) tempMinIndex = index
      }
      this.DataMin1 = this.BarY[tempMinIndex]
      this.DataMinName1 = this.LineBarX[tempMinIndex]
    },
    // 柱形图的数据
    BarProcessingMaxData() {
      let tempMax = 0 //最大值
      let sum = 0
      let tempMaxIndex = 0 //下标
      // let arry=[]
      this.BarDataY.map(bardatay => {
        sum += bardatay
        if (bardatay > tempMax) {
          tempMax = bardatay //最大值
          return tempMax
        }
      })

      for (let index in this.BarDataY) {
        if (this.BarDataY[index] == tempMax) {
          tempMaxIndex = index
        }
      }
      for (let i = 0; i < this.BarDataY.length; i++) {
        this.rateArry.push(this.BarDataY[i])
      }
      this.rateArry.sort((a, b) => {
        return b - a
      })
      // console.log(this.rateArry)
      this.averageNum = Math.ceil(sum / this.BarDataY.length) //平均值
      this.DataMax = this.BarDataY[tempMaxIndex]
      this.DataMaxName = this.BarDataX[tempMaxIndex]
      this.address = this.BarDataX[tempMaxIndex] //默认厂家最大值得
      this.guzhangNumber = this.BarDataY[tempMaxIndex] //默认最大的
      this.guzhangRate = Math.ceil((this.guzhangNumber / sum) * 100)
      this.ranking = Number(tempMaxIndex) + 1
    },
    BarProcessingMinData() {
      let tempMin = 10000 //最小值
      let tempMinIndex = 0
      this.BarDataY.map(bardatay => {
        if (bardatay < tempMin) {
          tempMin = bardatay //最小值
        }
        return tempMin
      })
      for (let index in this.BarDataY) {
        if (this.BarDataY[index] === tempMin) tempMinIndex = index
      }
      this.DataMin = this.BarDataY[tempMinIndex]
      this.DataMinName = this.BarDataX[tempMinIndex]
    },

    // 导航
    callback(key) {
      this.keyNum = key
      console.log(key)
      let that = this
      // if (key == 1) {
      //   setTimeout(function() {
      //     that.linebarChart(that.LineBarX, that.LineY, that.BarY, that.rateArry1)
      //     that.barChart(that.BarDataX, that.BarDataY, that.rateArry)
      //   }, 100)
      // }
      if (key == 2) {
        setTimeout(function() {
          that.DingpieChart()
        }, 100)
      }
    },
    handleMenuClick(e) {
      console.log('click', e)
    },
    //   日期
    // onChange(date, dateString) {
    //   console.log(date, dateString)
    // },
    handleChange(value) {
      this.value = value
    },
    handlePanelChange2(value, mode) {
      this.value = value
      this.mode2 = [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]]
    },
    // 两个饼状图
    pieChart() {
      const myChart1 = echarts.init(document.getElementById('circle1'))
      const myChart2 = echarts.init(document.getElementById('circle2'))
      // console.log(myChart1)
      // console.log(myChart2)
      var option1 = {
        title: {},
        legend: {
          // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
          orient: 'vertical',
          // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: 'right',
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: 'center',
          itemWidth: 24, // 设置图例图形的宽
          itemHeight: 18, // 设置图例图形的高
          itemGap: 30,
          left: '70%'
        },
        grid: {
          left: 0,
          top: 50,
          right: 60,
          bottom: 20,
          borderWidth: 1
        },
        series: [
          {
            width: '70%',
            type: 'pie',
            radius: '50%', // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
            center: ['50%', '50%'], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            data: [
              { value: '49.5', name: '冷却系统,49.5%' },
              { value: '17.5', name: '支架,17.5%' },
              { value: '22.5', name: '动力系统,22.5%' },
              { value: '10.5', name: '瞄准系统,10.6%' }
            ],
            // itemStyle 设置饼状图扇形区域样式
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(30, 144, 255，0.5)'
              }
            },
            // 设置值域的那指向线
            labelLine: {
              normal: {
                show: true // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            }
          }
        ]
      }
      setTimeout(() => {
        myChart1.setOption(option1)
        myChart2.setOption(option1)
      }, 500)
    },
    // 折线图和柱状图
    linebarChart(LineBarX, LineY, BarY, rateArry1) {
      const tubiao = echarts.init(document.getElementById('tubiao'))
      var option = {
        grid: {
          bottom: 25,
          left: 60,
          right: 20
        },
        //名称
        title: {},
        tooltip: {}, //提示框
        legend: {}, //标题
        xAxis: {
          data: LineBarX,

          //x轴的刻度
          axisTick: {
            show: false //是否显示刻度
          },
          //x轴的网格线是否显示
          splitLine: {
            show: false, // 网格线是否显示
            //  改变样式
            lineStyle: {
              color: 'red', // x坐标轴的轴线颜色
              type: 'dashed'
              // width: 1, 这里是坐标轴的宽度,可以去掉
            }
          },
          //x轴的文字样式
          axisLabel: {
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            textStyle: {
              color: '#666666', //x轴上的字体颜色
              fontSize: '12' //x轴字体大小
            }
          }
        },
        yAxis: {
          type: 'value', //type确定该轴为值轴或者类目轴 type 可以为value或者category
          //坐标轴刻度相关设置
          axisTick: {
            show: false //是否显示刻度
          },
          // y轴的字体样式
          axisLabel: {
            show: true, //这行代码控制着坐标轴y轴的文字是否显示
            textStyle: {
              color: '#666666', //y轴上的字体颜色
              fontSize: '12' //y轴字体大小
            }
          },
          // 控制网格线是否显示
          splitLine: {
            show: true, // 网格线是否显示
            //  改变样式
            lineStyle: {
              color: '#C6C6C6FF', // 修改网格线颜色
              type: 'dashed' //网格线的类型
              //width: 1,
            }
          },
          // y轴的颜色和宽度
          axisLine: {
            show: false, //是否显示y轴
            lineStyle: {
              color: '#0fff' // y坐标轴的轴线颜色
              // width: 1, 这里是坐标轴的宽度,可以去掉
            }
          }
        },
        //数据
        series: [
          {
            type: 'line', //决定图表的形状（折线、柱状、饼图。。。）这里我选择了曲线
            // stack: '总量',
            symbol: 'circle', // 拐点标记的图形
            symbolSize: 10, //拐点的大小
            smooth: false, // 是否是平滑曲线
            lineStyle: {
              color: '#1C9399', // 线条的颜色
              shadowColor: '#1C9399',
              shadowBlur: 10,
              shadowOffsetY: 10
            },
            itemStyle: {
              //拐点标记的样式
              normal: {
                color: '#1C9399', // 拐点的颜色
                // borderColor: 'rgba(255,255,255,1)',
                barBorderRadius: 8
              }
            },
            hoverAnimation: true, //是否开启 hover 在拐点标志上的提示动画效果
            emphasis: {
              //拐点高亮的样式
              //   show: false,
              itemStyle: {
                color: '#1C9399'
              }
            },
            data: LineY
          },
          {
            type: 'bar',
            barWidth: 25,
            // 颜色设置
            itemStyle: {
              normal: {
                color: '#1C9399'
              }
            },
            data: BarY
          }
        ]
      }
      // 进行图表配置
      setTimeout(() => {
        tubiao.setOption(option)
      }, 500)
      let that = this
      tubiao.on('click', function(params) {
        // console.log(params)
        let sumNumber = 0
        that.guzhangNumber1 = params.value
        that.BarY.map(bardatay => {
          sumNumber += bardatay
        })
        that.guzhangRate1 = Math.ceil((that.guzhangNumber1 / sumNumber) * 100)
        let tempi = 0
        for (let i in rateArry1) {
          if (rateArry1[i] == params.value) {
            tempi = i
          }
        }
        //  console.log(rateArry1, that.guzhangRate1)
        that.ranking1 = tempi - 0 + 1
        that.address1 = params.name
        // console.log(rateArry1, that.guzhangRate1, that.ranking1)
      })
    },
    // 底部柱形图
    barChart(BarDataX, BarDataY, rateArry) {
      const zhuxing = echarts.init(document.getElementById('zhuxing'))
      var option = {
        grid: {
          bottom: 25,
          left: 60,
          right: 20
        },
        //名称
        title: {},
        tooltip: {}, //提示框
        legend: {}, //标题
        xAxis: {
          data: BarDataX,
          //x轴的刻度
          axisTick: {
            show: false //是否显示刻度
          },
          //x轴的文字样式
          axisLabel: {
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            textStyle: {
              color: '#666666', //x轴上的字体颜色
              fontSize: '12' //x轴字体大小
            }
          }
        },
        yAxis: {
          type: 'value', //type确定该轴为值轴或者类目轴 type 可以为value或者category
          //坐标轴刻度相关设置
          axisTick: {
            show: false //是否显示刻度
          },
          // y轴的字体样式
          axisLabel: {
            show: true, //这行代码控制着坐标轴y轴的文字是否显示
            textStyle: {
              color: '#666666', //y轴上的字体颜色
              fontSize: '12' //y轴字体大小
            }
          },
          // 控制网格线是否显示
          splitLine: {
            show: true, // 网格线是否显示
            //  改变样式
            lineStyle: {
              color: '#C6C6C6FF', // 修改网格线颜色
              type: 'dashed' //网格线的类型
              //width: 1,
            }
          },
          // y轴的颜色和宽度
          axisLine: {
            show: false, //是否显示y轴
            lineStyle: {
              color: '#0fff' // y坐标轴的轴线颜色
              // width: 1, 这里是坐标轴的宽度,可以去掉
            }
          }
        },
        //数据
        series: [
          {
            type: 'bar',
            barWidth: 30,
            // 颜色设置
            itemStyle: {
              normal: {
                color: '#1C9399'
              }
            },
            data: BarDataY
            // data: [80, 65, 72, 90, 65, 60, 90, 75, 80, 55, 40, 65, 45, 30, 45, 60, 55, 70, 90]
          }
        ]
      }
      // 进行图表配置
      setTimeout(() => {
        this.$nextTick()
        zhuxing.setOption(option)
      }, 500)
      // console.log(rateArry)
      let that = this
      zhuxing.on('click', function(params) {
        console.log(params)
        let sumNumber = 0
        that.guzhangNumber = params.value
        that.BarDataY.map(bardatay => {
          sumNumber += bardatay
        })
        that.guzhangRate = Math.ceil((that.guzhangNumber / sumNumber) * 100)
        // console.log(rateArry, that.guzhangRate)
        let tempi = 0
        for (let i = 0; i < rateArry.length; i++) {
          if (rateArry[i] == params.value) {
            tempi = i
          }
        }
        that.ranking = tempi - 0 + 1
        that.address = params.name
        // console.log(rateArry, that.guzhangRate, that.ranking)
      })
    },
    // 定制分析页的饼状图
    DingpieChart() {
      // console.log(document.getElementById('faultrate'))
      const myChart = echarts.init(document.getElementById('faultrate'))
      // 基于准备好的dom，初始化echarts实例
      //var bar_dv = document.getElementById('bar_dv');

      var option1 = {
        title: {},
        legend: {
          // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
          orient: 'horizontal',
          // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: 'center',
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: 'bottom',
          itemWidth: 24, // 设置图例图形的宽
          itemHeight: 18, // 设置图例图形的高
          itemGap: 30,

          data: ['冷却系统', '支架', '动力系统', '瞄准系统']
        },
        series: [
          {
            type: 'pie',
            radius: '50%', // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
            center: ['50%', '50%'], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            data: [
              { value: '10', name: '冷却系统' },
              { value: '25', name: '支架' },
              { value: '20', name: '动力系统' },
              { value: '45', name: '瞄准系统' }
            ],
            // itemStyle 设置饼状图扇形区域样式
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(30, 144, 255，0.5)'
              }
            },
            // 设置值域的那指向线
            labelLine: {
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            label: {
              normal: {
                position: 'inner',
                show: false
              }
            }
          }
        ]
      }
      myChart.setOption(option1)
    }
  }
}
</script>
<style lang="less" scoped>
.statistic {
  background: rgba(244, 244, 244, 1);
}
/* 面包屑导航 */
.breadcrumb-nav {
  margin: 0 0 20px 32px;
}

/* 故障分析 */
.fenxi-top {
  position: relative;
  .fenxi-rg {
    position: absolute;
    top: 0;
    right: 0;
    .fenxi-rg-con {
      display: flex;
      justify-content: space-evenly;
      .fenxi-rg-nav {
        margin-top: 20px;
        > button {
          border-radius: 3px;
          font-size: 14px;
        }
        > button:nth-child(1),
        > button:nth-child(2) {
          margin-right: 20px;
          border: 1px solid #1c9399;
          color: #1c9399;
        }
        > button:nth-child(3) {
          background-color: #1c9399;
          color: #fff;
        }
      }
      .fenxi-rg-time {
        margin-top: 15px;
      }
    }
  }
}

// 导航nav
/deep/.ant-tabs-top-bar {
  height: 60px;
  background: #fff;
}
/deep/.ant-tabs-nav-scroll {
  padding-left: 45px;
}
/deep/.ant-tabs-nav .ant-tabs-tab {
  padding: 20px 16px;
}
/* 日期选择器 */
.fenxi-rg-time {
  margin-right: 40px;
  width: 35%;
}
.guzhang-number {
  display: flex;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  margin-top: 19px;
}
.number {
  width: 80%;
  display: flex;
  justify-content: space-around;
  /* padding-left: 20px; */
}
.number-con {
  width: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 24px 0 24px 0;
  margin-left: 30px;
}
.num-title {
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 22px;
  position: relative;
}
.num-number {
  font-size: 30px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  line-height: 38px;
}
.num-line {
  width: 1px;
  height: 60px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.09;
  margin: 24px 0 0 0;
}
.title:before {
  content: '';
  width: 8px;
  height: 8px;
  background: rgba(102, 182, 112, 1);
  opacity: 0.45;
  position: absolute;
  right: 95px;
  top: 7px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
}
.title1:before {
  background: rgba(102, 182, 112, 1);
}
.title2:before {
  background: rgba(24, 144, 255, 1);
}
.title3:before {
  background: rgba(53, 77, 103, 1);
}
.title4:before {
  background: rgba(253, 119, 61, 1);
}
/* 饼状图样式 */
.circle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.circle-lf,
.circle-rg {
  width: 49%;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  padding-top: 20px;
  padding-right: 30px;
  box-sizing: border-box;
}
.circle1,
.circle2 {
  padding-left: 40px;
}
.circle-title {
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(33, 54, 77, 1);
  line-height: 22px;
}
/* 折线图和柱状图样式 */
.linebar {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
}
.linebar-lf {
  padding: 20px 0 10px 20px;
  width: 168px;
}
.linebar-title,
.bar-title {
  font-size: 16px;
  font-weight: 500;
  color: rgba(33, 54, 77, 1);
  line-height: 22px;
}
.linebar-lf-table {
  padding: 50px 0 20px 0;
}
.place {
  margin-bottom: 15px;
}
.place-lf {
  font-size: 16px;
  font-weight: 500;
  color: rgba(28, 147, 153, 1);
}
.table1,
.table2 {
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
}
.table-line {
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  opacity: 0.1;
  margin: 19px 0 18px 0;
}
.table1-lf {
  font-size: 14px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.table1-rg {
  font-size: 14px;
  font-weight: 400;
  color: rgba(28, 147, 153, 1);
}
.table2-lf,
.table2-rg {
  font-weight: 400;
  color: rgba(28, 147, 153, 1);
}
/* 柱状图样式 */
.bar {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin-top: 20px;
  padding-top: 20px;
}
.bar-foot {
  display: flex;
  padding-bottom: 10px;
}
.bar-title {
  padding-left: 20px;
}
.linebar-rg {
  flex: 1;
  overflow: hidden;
}

// 高级定制样式
/* 按需查询inputquery */
.nav2-content-top {
  height: 125px;
  background-color: #fff;
}
.weixiu-btm-center {
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
    > p:last-child {
      padding-left: 10px;
      width: 50%;
      justify-content: flex-end;
      padding-right: 245px;
    }
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
      > button {
        font-size: 14px;
        background: #fff;
        border-radius: 3px;
        color: rgba(28, 147, 153, 1);
        border: 1px solid rgba(28, 147, 153, 1);
      }
      > button:first-child {
        background: rgba(28, 147, 153, 1);
        color: #fff;
        margin-right: 20px;
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
      /deep/.ant-select-selection {
        width: 160px;
      }
    }
  }
}

// .user-form-button {
//   width: 50%;
//   display: flex;
//   justify-content: flex-end;
//   padding-right: 215px;
//   > button {
//     border-radius: 3px;
//     font-size: 14px;
//   }
//   > button:first-child {
//     margin-right: 20px;
//     background: rgba(28, 147, 153, 1);
//     color: #fff;
//   }
//   > button:nth-child(2) {
//     background-color: #fff;
//     color: rgba(28, 147, 153, 1);
//     border: 1px solid rgba(28, 147, 153, 1);
//   }
// }

// .inputquery {
//   height: 120px;
//   background: #fff;
//   border-top: 1px solid rgba(235, 246, 246, 1);
//   padding-top: 20px;
// }
// .col1-1 {
//   margin-left: 50px;
// }
// .col1-3 {
//   margin-right: 36px;
// }
// .inputquery-foot-bottom-2 {
//   /deep/.components-input-demo-size{
//     margin-left: 23px;
//      /deep/.ant-input {
//     margin-left: 20px;
//     }
//   }

// }
// .components-input-demo-size .ant-input {
//   width: 200px;
//   margin: 0 8px 0 0;
//   border-radius: 3px;
//   border: 1px solid rgba(220, 223, 230, 1);
// }
// .input-point {
//   padding: 0 20px;
//   font-size: 14px;
//   color: rgba(160, 160, 160, 1);
//   line-height: 20px;
// }
// .inputquery-foot {
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;
// }

// .foot-point {
//   margin-left: 35px;
// }
// .foot-button {
//   display: flex;
//   width: 25%;
//   justify-content: space-evenly;
//   // margin-right: 70px;
// }
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
.nav2-content-foot {
  background: #fff;
  margin-top: 20px;
}
#faultrate {
  margin: auto;
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
}
.nav2-content-foot p {
  padding: 20px 0 0 20px;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: rgba(33, 54, 77, 1);
}
.nav2-content-foot2 {
  display: flex;
  justify-content: space-evenly;
  padding-top: 40px;
}
.nav2-content-foot2-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav2-content-foot2-1 span:not(.nav2-content-foot2-1-title) {
  margin-top: 20px;
}
.nav2-content-foot2-1 span:first-child:not(.nav2-content-foot2-1-title) {
  margin-top: 30px;
}
// .nav2-content-foot2-1-title{
//   margin-bottom: 30px;
// }
.nav2-content-foot3 {
  padding: 40px 0;
  text-align: center;
  /deep/.router-link-active {
    background-color: #1c9399;
    color: #fff;
    padding: 6px 20px;
    border: 1px solid #1c9399;
    border-radius: 3px;
    &:first-child {
      margin-right: 30px;
    }
  }
}
// .nav2-content-foot3:first-child{
//     margin-right: 50px;
//   }
</style>
