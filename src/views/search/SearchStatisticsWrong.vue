<template>
  <!-- 用户行为统计 -->
  <div class="search-content">
    <div class="weixiu-btm-title-left">
      <div class="left-item" :class="navIndex == 0 ? 'left-item-active' : ''" @click="switchNav(0)">
        <icon-font type="icon-neirongjiance" />搜索内容统计
      </div>
      <div class="left-item" :class="navIndex == 1 ? 'left-item-active' : ''" @click="switchNav(1)">
        <icon-font type="icon-yonghuxingwei" />用户行为统计
      </div>
      <div class="left-item" :class="navIndex == 2 ? 'left-item-active' : ''" @click="switchNav(2)">
        <icon-font type="icon-xingneng" />系统性能统计
      </div>
    </div>

    <!-- tab1 -->
    <div v-if="navIndex == 0">
      <!--搜索量趋势图 - 折线图6-->
      <div class="system-box">
        <div class="pieChart-top">
          <div id="piechart1-texta" class="piechart1-text">搜索量趋势图</div>
          <div id="piechart1-textb" class="piechart1-text">总搜索次数：{{ allData6y }}</div>
        </div>
        <div class="lineChart-box">
          <div class="lineChart-left">
            <h1 class="lineChart-left-text1">
              {{ ValuepieChartContent6 ? ValuepieChartContent6.name : FYValuepieChartContent6 }}
            </h1>
            <p class="lineChart-left-text2">
              {{ ValuepieChartContent6 ? ValuepieChartContent6.value : FXValuepieChartContent6 }}次
            </p>
            <p class="lineChart-left-text3">
              同比上月
              <span>{{ preValuepieChartContent6 }}%</span>
            </p>
            <p class="lineChart-left-text3">
              同比下月
              <span>{{ nextValuepieChartContent6 }}%</span>
            </p>
          </div>
          <div class="lineChart-right">
            <div id="piechart6"></div>
          </div>
        </div>
      </div>
      <!-- 折线图6 -->

      <!-- 搜索内容统计 -->
      <div class="search-box">
        <div class="search-top">
          <div id="piechart1-textc" class="piechart1-text">搜索内容统计</div>
          <div class="tableSearchInput">
            <a-input-search placeholder="请输入关键字" style="width: 200px" @search="onSearch" />
          </div>
        </div>
        <div class="search-table">
          <!-- 搜索内容统计 表格 -->
          <div class="searchContentList-box">
            <!-- <a-table
              :columns="searchContentTitle"
              :dataSource="searchContentList"
              :pagination="pagination"
            >
              <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>-->
            <a-table :columns="searchContentTitle" :dataSource="searchContentList" :pagination="pagination">
              <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record">
                <div :key="col">
                  <a-input
                    style="margin: -5px 0"
                    :value="text"
                    @change="e => handleChange(e.target.value, record.key, col)"
                  />
                  <template>{{ text }}</template>
                </div>
              </template>
            </a-table>
          </div>
          <!-- 搜索内容统计 表格 -->
        </div>
      </div>
    </div>
    <!-- tab1 -->

    <!-- tab2 -->
    <div v-if="navIndex == 1">
      <div class="thirdContent">
        <!-- 用户行为分类 -->
        <div class="system-box-second system-box1">
          <div class="pieChart-top">
            <div id="piechart1-texte" class="piechart1-text">用户行为数量统计</div>
          </div>
          <div class="behavior-bottom">
            <div class="behavior-item">
              <div class="behavior-item-img">
                <img src="../../assets/behavior01.png" alt />
              </div>
              <div class="behavior-item-text">
                <p>搜索</p>
                <h1>2334</h1>
              </div>
            </div>
            <div class="behavior-item">
              <div class="behavior-item-img">
                <img src="../../assets/behavior02.png" alt />
              </div>
              <div class="behavior-item-text">
                <p>下载</p>
                <h1>2334</h1>
              </div>
            </div>
            <div class="behavior-item">
              <div class="behavior-item-img">
                <img src="../../assets/behavior03.png" alt />
              </div>
              <div class="behavior-item-text">
                <p>浏览</p>
                <h1>2334</h1>
              </div>
            </div>
            <div class="behavior-item">
              <div class="behavior-item-img">
                <img src="../../assets/behavior04.png" alt />
              </div>
              <div class="behavior-item-text">
                <p>反查</p>
                <h1>2334</h1>
              </div>
            </div>
          </div>
        </div>
        <!-- 用户行为分类 -->

        <!-- 用户行为数量统计 - 折线图5-->
        <div class="system-box-second system-box2">
          <div class="pieChart-top">
            <div id="piechart1-textf" class="piechart1-text">用户行为数量统计</div>
          </div>
          <div class="lineChart-right">
            <div id="piechart7"></div>
          </div>
        </div>
        <!-- 用户行为数量统计 - 折线图5-->
      </div>

      <!--用户行为趋势图 - 折线图9-->
      <div class="system-box mt20">
        <div class="pieChart-top">
          <div id="piechart1-texta" class="piechart1-text">用户行为趋势图</div>
        </div>
        <div class="lineChart-box">
          <div class="lineChart-left">
            <h1 class="lineChart-left-text1">
              {{ ValuepieChartContent9 ? ValuepieChartContent9.name : FYValuepieChartContent9 }}
            </h1>
            <p class="lineChart-left-text2">
              {{ ValuepieChartContent9 ? ValuepieChartContent9.value : FXValuepieChartContent9 }}次
            </p>
            <p class="lineChart-left-text3">
              同比上月
              <span>{{ preValuepieChartContent9 }}%</span>
            </p>
            <p class="lineChart-left-text3">
              同比下月
              <span>{{ nextValuepieChartContent9 }}%</span>
            </p>
          </div>
          <div class="lineChart-right">
            <div id="piechart9"></div>
          </div>
        </div>
      </div>
      <!-- 折线图9 -->
    </div>
    <!-- tab2 -->

    <!-- tab3 -->
    <div v-if="navIndex == 2">
      <div class="tab3-lineChart-right">
        <div id="piechart8"></div>
      </div>
    </div>
    <!-- tab3 -->

    <!-- 日期选择框 -->
    <div class="date-box">
      <a-range-picker :disabledDate="disabledDate" format="YYYY-MM-DD" />
      <icon-font class="date-icon" type="icon-rili" />
    </div>
    <!-- 日期选择框 -->
  </div>
</template>

<script>
import echarts from 'echarts' //可视化图形
import { Icon } from 'ant-design-vue' //icon
import moment from 'moment' //日期
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1753443_pha8nywnoj.js' // 在 iconfont.cn 上生成
})
const searchContentTitle = [
  {
    title: '排名',
    dataIndex: 'rank',
    key: 'rank',
    scopedSlots: { customRender: 'rank' },
    width: '10%',
    align: 'center'
  },
  {
    title: '关键词',
    dataIndex: 'keyWord',
    key: 'keyWord',
    width: '50%',
    align: 'center'
  },
  {
    title: '搜索次数',
    dataIndex: 'searches',
    key: 'searches',
    ellipsis: true,
    width: '20%',
    align: 'center'
  },
  {
    title: '占比',
    dataIndex: 'proportion',
    key: 'proportion',
    ellipsis: true,
    width: '20%',
    align: 'center'
  }
]
const searchContentList = []
for (let i = 0; i < 100; i++) {
  searchContentList.push({
    key: `${i}`,
    rank: `${i}`,
    keyWord: `数据源${i}`,
    searches: `118`,
    proportion: `29.1%`,
    tags: ['nice', 'developer']
  })
}
export default {
  data() {
    return {
      //
      allData6y: 0,
      data6y: [
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
      ],
      data6x: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
      preValuepieChartContent6: 0,
      nextValuepieChartContent6: 0,
      FXValuepieChartContent6: 0,
      FYValuepieChartContent6: 0,
      ValuepieChartContent6: null,
      //

      data9y:[
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
            ],
      data9x: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
      preValuepieChartContent9: 0,
      nextValuepieChartContent9: 0,
      FXValuepieChartContent9: 0,
      FYValuepieChartContent9: 0,
      ValuepieChartContent9: null,

      searchContentList, //搜索内容表格
      searchContentTitle, //搜索内容表格
      navIndex: 0, //tab导航索引
      isNavHide: false, //是否显示
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
  components: {
    IconFont
  },
  mounted() {
    //
    this.allData6yFn()
    //
    this.echartsNum9()

    this.echartsNum6()
    //
    this.statisticsPiechart(this.data6y, this.data6x)

    window.addEventListener('resize', () => {
      //    console.log(111)
      if (this.navIndex === 0) {
        const myChart6 = echarts.init(document.getElementById('piechart6')) //  console.log(111,myChart)
        myChart6.resize() // that.pieChart()
      }

      if (this.navIndex === 1) {
        const myChart7 = echarts.init(document.getElementById('piechart7')) //  console.log(111,myChart)
        const myChart9 = echarts.init(document.getElementById('piechart9')) //  console.log(111,myChart)
        myChart7.resize() // that.pieChart()
        myChart9.resize() // that.pieChart()
      }

      if (this.navIndex === 2) {
        const myChart8 = echarts.init(document.getElementById('piechart8')) //  console.log(111,myChart)
        myChart8.resize() // that.pieChart()
      }
    })
  },
  methods: {
    //计算总值
    allData6yFn() {
      let allData6yArr = []
      this.data6y.map(function(v) {
        return allData6yArr.push(v.value)
      })
      console.log(allData6yArr)
      var sum = 0
      for (var i = 0; i < allData6yArr.length; i++) {
        sum = sum + allData6yArr[i]
      }
      this.allData6y = sum
    },
    //
    echartsNum6() {
      let temp6 = 0
      let tempIndex6 = 0
      this.data6y.map(v => {
        if (v.value > temp6) {
          temp6 = v.value
        }
        return temp6
      })
      for (let i in this.data6y) {
        if (this.data6y[i].value === temp6) tempIndex6 = i
      }
      this.FXValuepieChartContent6 = this.data6y[tempIndex6].value
      this.FYValuepieChartContent6 = this.data6x[tempIndex6]
      if (tempIndex6 > 0) {
        this.preValuepieChartContent6 = parseInt(
          (this.data6y[tempIndex6].value / this.data6y[tempIndex6 - 1].value - 1) * 100
        )
      } else {
        this.preValuepieChartContent6 = 0
        // this.nextValuepieChartContent3='空'
      }
      if (tempIndex6 - 0 + 1 < this.data6y.length - 1) {
        this.nextValuepieChartContent6 = parseInt(
          (this.data6y[tempIndex6].value / this.data6y[tempIndex6 - 0 + 1].value - 1) * 100
        )
      } else {
        // this.preValuepieChartContent3='空'
        this.nextValuepieChartContent6 = 0
      }

      // console.log(this.FValuepieChartContent3)
    },
    //
    echartsNum9() {
      let temp9 = 0
      let tempIndex9 = 0
      this.data9y.map(v => {
        if (v.value > temp9) {
          temp9 = v.value
        }
        return temp9
      })
      for (let i in this.data9y) {
        if (this.data9y[i].value === temp9) tempIndex9 = i
      }
      this.FXValuepieChartContent9 = this.data9y[tempIndex9].value
      this.FYValuepieChartContent9 = this.data9x[tempIndex9]
      if (tempIndex9 > 0) {
        this.preValuepieChartContent9 = parseInt(
          (this.data9y[tempIndex9].value / this.data9y[tempIndex9 - 1].value - 1) * 100
        )
      } else {
        this.preValuepieChartContent9 = 0
        // this.nextValuepieChartContent3='空'
      }
      if (tempIndex9 - 0 + 1 < this.data9y.length - 1) {
        this.nextValuepieChartContent9 = parseInt(
          (this.data9y[tempIndex9].value / this.data9y[tempIndex9 - 0 + 1].value - 1) * 100
        )
      } else {
        // this.preValuepieChartContent3='空'
        this.nextValuepieChartContent9 = 0
      }

      // console.log(this.FValuepieChartContent3)
    },
    // 搜索
    onSearch(res) {
      console.log(res)
    },
    switchNav(value) {
      console.log(value)
      this.navIndex = value
      if (value == 0) {
        setTimeout(() => {
          this.statisticsPiechart(this.data6y, this.data6x)
          console.log(1)
        }, 100)
      } else if (value == 1) {
        setTimeout(() => {
          this.statisticsPiechart2(this.data9y, this.data9x)
          console.log(2)
        }, 100)
      } else if (value == 2) {
        setTimeout(() => {
          this.statisticsPiechart3()
          console.log(3)
        }, 100)
      }
    },
    //   折线图
    statisticsPiechart(data6y, data6x) {
      console.log(111, data6y, data6x)
      let pieChartContent6 = echarts.init(document.getElementById('piechart6')) //搜索量趋势图
      // 搜索量趋势图 - 折线图
      let option6 = {
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
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: data6x
          }
        ],
        yAxis: [
          {
            type: 'value',
            data: [0, 400, 600, 800, 1000, 1200],
            splitLine: {
              lineStyle: {
                type: 'dashed', //线的类型
                color: '#DCDEE3' //线的颜色
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
            data: data6y,
            lineStyle: {
              //线条样式
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
      // 搜索量趋势图 - 折线图
      pieChartContent6.setOption(option6) //搜索量趋势图
      let that = this
      pieChartContent6.on('click', function(params) {
        console.log(data6y, data6x)
        if (params.componentType === 'series') {
          that.ValuepieChartContent6 = params
          if (params.dataIndex > 0) {
            that.preValuepieChartContent6 = parseInt((params.value / data6y[params.dataIndex - 1].value - 1) * 100)
          } else {
            that.preValuepieChartContent6 = 0
            //  that.nextValuepieChartContent3 = '空'
          }
          if (params.dataIndex < data6y.length - 1) {
            that.nextValuepieChartContent6 = parseInt((params.value / data6y[params.dataIndex + 1].value - 1) * 100)
          } else {
            //  that.preValuepieChartContent3 = '空'
            that.nextValuepieChartContent6 = 0
          }
          // console.log('您点击了我', that.preValuepieChartContent6y, that.nextValuepieChartContent6y)
        }
      })
    },

    // 搜索内容统计
    statisticsPiechart2(data9y, data9x) {
      let pieChartContent7 = echarts.init(document.getElementById('piechart7')) //搜索量趋势图
      let pieChartContent9 = echarts.init(document.getElementById('piechart9')) //搜索量趋势图

      // 饼图
      let option7 = {
        title: {},
        tooltip: {
          //提示框组件
          show: false //是否显示提示框组件
        },
        legend: {
          //图例组件
          orient: 'vertical', //图例列表的布局朝向 'vertical'为纵向，'horizontal'为横向
          right: 'left', //标题组件距容器的距离，属性right距右侧距离。
          //图例数据数组。如果 data 没有被指定，会自动从当前系列中获取。多数系列会取自 series.name 或者 series.encode 的 seriesName 所指定的维度。如 饼图 and 漏斗图 等会取自 series.data 中的 name。
          //data:[],
          textStyle: {
            //图例的公用文本样式
            fontStyle: 14,
            color: '#1C9399',
            fontWeight: 400,
            lineHeight: 20,
            padding: [12, 0, 12, 0]
          },
          selectorLabel: {
            //选择器按钮的文本标签样式
            distance: 121 //距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
          }
        },
        series: [
          //系列列表
          {
            //name: '', //系列名称，hover属性提示内容
            width: '80%',
            type: 'pie', //通过此项确定系列图表类型
            radius: ['40%', '80%'], //饼图的半径,第二个值与第一个值的差值为圆环的宽度
            center: ['50%', '60%'], //饼图的中心（圆心）坐标，第一项为横坐标，第二项为纵坐标
            left: 'left', //图形距左侧距离
            data: [
              //系列中数据内容数组。name：数据项名称；value：数据值（所占比重）
              { value: 495, name: '搜索,49.5%' },
              { value: 300, name: '下载' + '30%' },
              { value: 105, name: '浏览,10.5%' },
              { value: 100, name: '反查,10%' }
            ],
            label: {
              normal: {
                position: 'insideRight' //影像selectorLabel.distance 的值
              }
            },
            emphasis: {
              //高亮的扇区和标签样式
              itemStyle: {
                shadowBlur: 10, //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                shadowOffsetX: 0, //阴影水平方向上的偏移距离
                shadowColor: 'rgba(0, 0, 0, 0.5)' //阴影颜色
              }
            }
            // label:{
            //     formatter:'{b}:{d}%'
            // }
          }
        ],
        color: ['#F85A52', '#FF7F52', '#216274', '#FFB856'] //调色盘颜色列表。如果系列没有设置颜色，则会依次循环从默认颜色中取颜色作为系列颜色。
      }

      // 折线图
      let option9 = {
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
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: data9x
          }
        ],
        yAxis: [
          {
            type: 'value',
            data: [0, 400, 600, 800, 1000, 1200],
            splitLine: {
              lineStyle: {
                type: 'dashed', //线的类型
                color: '#DCDEE3' //线的颜色
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
            data:data9y,
            lineStyle: {
              //线条样式
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
      pieChartContent9.setOption(option9) //搜索量趋势图
      pieChartContent7.setOption(option7) //搜索量趋势图
      let that = this
      pieChartContent9.on('click', function(params) {
        console.log(data9y, data9x)
        if (params.componentType === 'series') {
          that.ValuepieChartContent9 = params
          if (params.dataIndex > 0) {
            that.preValuepieChartContent9 = parseInt((params.value / data9y[params.dataIndex - 1].value - 1) * 100)
          } else {
            that.preValuepieChartContent9 = 0
            //  that.nextValuepieChartContent3 = '空'
          }
          if (params.dataIndex < data9y.length - 1) {
            that.nextValuepieChartContent9 = parseInt((params.value / data9y[params.dataIndex + 1].value - 1) * 100)
          } else {
            //  that.preValuepieChartContent3 = '空'
            that.nextValuepieChartContent9 = 0
          }
          // console.log('您点击了我', that.preValuepieChartContent6y, that.nextValuepieChartContent6y)
        }
      })
    },

    // 搜索量趋势图
    statisticsPiechart3() {
      let pieChartContent8 = echarts.init(document.getElementById('piechart8')) //搜索量趋势图
      // 搜索量趋势图 - 折线图
      let option8 = {
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
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            data: [0, 400, 600, 800, 1000, 1200],
            splitLine: {
              lineStyle: {
                type: 'dashed', //线的类型
                color: '#DCDEE3' //线的颜色
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
            data: [
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
            ],
            lineStyle: {
              //线条样式
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
      // 搜索量趋势图 - 折线图
      pieChartContent8.setOption(option8) //搜索量趋势图
    },
    // 日期
    moment,
    range(start, end) {
      const result = []
      for (let i = start; i < end; i++) {
        result.push(i)
      }
      return result
    },

    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day')
    }
    // 日期
  }
}
</script>

<style lang="less" scoped>
.mt20 {
  margin-top: 20px;
}
.search-content {
  position: relative;
}
// tab导航
.weixiu-btm-title-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: clac(100% - 40px);
  padding: 0 20px;
  height: 59px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin-bottom: 20px;
}
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
.left-item-active {
  border-bottom: 2px solid #1c9399 !important;
  color: #1c9399 !important;
}
// 搜索内容统计
.system-box {
  width: 100%;
  padding: 20px 29px 20px 20px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
}
.piechart1-text {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(42, 63, 84, 1);
  line-height: 22px;
}
#piechart1-texta {
  margin-bottom: 20px;
}
.lineChart-left-text1 {
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  color: rgba(28, 147, 153, 1);
  margin-bottom: 10px;
  margin-top: 30px;
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
.lineChart-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.lineChart-left {
  width: 110px;
}
.lineChart-right {
  flex: 1;
  overflow: hidden;
}
.tab3-lineChart-right {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
}

#piechart6 {
  width: 100%;
  height: 260px;
}
#piechart7 {
  width: 100%;
  height: 220px;
}
#piechart9 {
  width: 100%;
  height: 349px;
}
#piechart8 {
  width: 100%;
  height: 750px;
}

// 日期选择
.date-box {
  position: absolute;
  right: 20px;
  top: 14px;
  width: 240px;
}
.date-icon {
  position: absolute;
  right: 12px;
  top: 6px;
  font-size: 20px;
  color: rgba(153, 153, 153, 1);
}

// 搜索内容表格
.search-box {
  width: 100%;
  margin-top: 20px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  padding: 20px;
}
/deep/.ant-input-suffix {
  left: 13px;
  right: auto;
}
/deep/.ant-input {
  padding-left: 30px;
  padding-right: 0px;
}
#piechart1-textc {
  margin-bottom: 0;
}
.search-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

// 用户行为统计
.thirdContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.system-box-second {
  width: 49%;
  padding: 20px 29px 20px 20px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  height: 300px;
}

// 用户行为分类
.behavior-item-img {
  width: 48px;
  height: 48px;
  border-radius: 100%;
  margin-right: 10px;
}
#piechart1-texte {
  margin-bottom: 30px;
}
.behavior-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.behavior-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 15% 50px 15%;
}
.behavior-item-img img {
  width: 100%;
}
.behavior-item-text p {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 17px;
  margin: 0;
}
.behavior-item-text h1 {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(28, 147, 153, 1);
  line-height: 22px;
  margin: 0;
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
/deep/.ant-pagination-disabled.ant-pagination-prev:hover a,
/deep/.ant-pagination-disabled.ant-pagination-next:hover a {
  color: #d9d9d9;
}
</style>
