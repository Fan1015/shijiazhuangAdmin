<template>
  <div>
    <router-view></router-view>
    <div class="searchStatistics-box">
      <!-- 第一块  搜索统计 -->
      <div class="statistics-pieChart">
        <!-- 饼图 -->
        <div class="pieChart">
          <div id="piechart1-text">数据源录入统计</div>
          <div id="piechart1"></div>
        </div>
        <div class="pieChart">
          <div id="piechart1-text">接入类型录入统计</div>
          <div id="piechart2"></div>
        </div>
        <!-- 饼图 -->
      </div>
      <!-- 第一块 -->

      <!-- 第二块 -->

      <div class="statistics-pieChart mt20">
        <!-- 进度条 -->
        <div class="pieChart">
          <div id="piechart1-texta" class="piechart1-text">TOP5关键词</div>
          <div class="progress-box" v-for="(progressList, index) in topKeyword" :key="index">
            <div class="progress">
              <div class="progress-name">{{ progressList.title }}</div>
              <a-progress
                class="progress-line"
                :percent="progressList.proportion"
                :strokeColor="progressList.strokeColor"
                :showInfo="false"
              />
              <div class="progress-popularity">搜索量：{{ progressList.popularity }}</div>
              <div class="progress-proportion">占比：{{ progressList.proportion }}%</div>
            </div>
          </div>
        </div>
        <!-- 进度条 -->

        <!-- 折线图 -->
        <div class="pieChart">
          <div class="pieChart-top">
            <div id="piechart1-textb" class="piechart1-text">搜索内容统计</div>
            <router-link
              :exact="false"
              :to="{ path: '/SearchStatistics/SearchStatisticsWrong', params: { index: '1' } }"
              class="pieChart-more"
              >查看详情</router-link
            >
          </div>
          <div class="lineChart-box">
            <div class="lineChart-left">
              <h1 class="lineChart-left-text1">
                {{ ValuepieChartContent3 ? ValuepieChartContent3.name : FYValuepieChartContent3 }}
              </h1>
              <p class="lineChart-left-text2">
                {{ ValuepieChartContent3 ? ValuepieChartContent3.value : FXValuepieChartContent3 }}次
              </p>
              <p class="lineChart-left-text3">
                同比上月
                <span>{{ preValuepieChartContent3 }}%</span>
              </p>
              <p class="lineChart-left-text3">
                同比下月
                <span>{{ nextValuepieChartContent3 }}%</span>
              </p>
            </div>
            <div class="lineChart-right">
              <div id="piechart3"></div>
            </div>
          </div>
        </div>
        <!-- 折线图 -->
      </div>
      <!-- 第二块 -->

      <!-- 第三块 -->
      <div class="thirdContent mt20">
        <!--用户行为统计 - 折线图4-->
        <div class="system-box system-box1">
          <div class="pieChart-top">
            <div id="piechart1-text">用户行为统计</div>
            <router-link :to="{ name: 'SearchStatisticsWrong', params: { index: '2' } }" class="pieChart-more"
              >查看详情</router-link
            >
          </div>
          <div class="lineChart-box">
            <div class="lineChart-left">
              <h1 class="lineChart-left-text1">
                {{ ValuepieChartContent4 ? ValuepieChartContent4.name : FYValuepieChartContent4 }}
              </h1>
              <p class="lineChart-left-text2">
                {{ ValuepieChartContent4 ? ValuepieChartContent4.value : FXValuepieChartContent4 }}次
              </p>
              <p class="lineChart-left-text3">
                同比上月
                <span>{{ preValuepieChartContent4 }}%</span>
              </p>
              <p class="lineChart-left-text3">
                同比下月
                <span>{{ nextValuepieChartContent4 }}%</span>
              </p>
            </div>
            <div class="lineChart-right">
              <div id="piechart4"></div>
            </div>
          </div>
        </div>
        <!-- 折线图4 -->

        <!-- 系统性能统计 - 折线图5-->
        <div class="system-box system-box2">
          <div class="pieChart-top">
            <div id="piechart1-text">系统性能统计</div>
            <router-link :to="{ name: 'SearchStatisticsWrong', params: { index: '3' } }" class="pieChart-more"
              >查看详情</router-link
            >
          </div>
          <div class="lineChart-box">
            <div class="lineChart-left">
              <h1 class="lineChart-left-text1"> {{ ValuepieChartContent5 ? ValuepieChartContent5.name : FYValuepieChartContent5 }}</h1>
              <p class="lineChart-left-text2">{{ ValuepieChartContent5 ? ValuepieChartContent5.value : FXValuepieChartContent5 }}次</p>
              <p class="lineChart-left-text3">
                同比上月
                <span>{{ preValuepieChartContent5 }}%</span>
              </p>
              <p class="lineChart-left-text3">
                同比下月
                <span>{{ nextValuepieChartContent5 }}%</span>
              </p>
            </div>
            <div class="lineChart-right">
              <div id="piechart5"></div>
            </div>
          </div>
        </div>
        <!-- 折线图5-->
      </div>
      <!-- 第三块 -->
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      // 第三个的数据
      data3: [
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
      data3y: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
      preValuepieChartContent3: 0,
      nextValuepieChartContent3: 0,
      FXValuepieChartContent3: 0,
      FYValuepieChartContent3: 0,
      ValuepieChartContent3: null,
      //第四个的数据
      data4y: [
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
      data4x: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
      preValuepieChartContent4: 0,
      nextValuepieChartContent4: 0,
      FXValuepieChartContent4: 0,
      FYValuepieChartContent4: 0,
      ValuepieChartContent4: null,
      //第五个
      data5y: [
        {
          value: 2425,
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#1C9399'
          }
        },
        {
          value: 3240,
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#1C9399'
          }
        },
        {
          value: 3300,
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#1C9399'
          }
        },
        {
          value: 3290,
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#1C9399'
          }
        },
        {
          value: 5104,
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#1C9399'
          }
        },
        {
          value: 5210,
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#1C9399'
          }
        },
        {
          value: 5750,
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#1C9399'
          }
        }
      ],
      data5x: ['03/13', '03/15', '03/17', '03/19', '03/21', '03/23', '03/25'],
      preValuepieChartContent5: 0,
      nextValuepieChartContent5: 0,
      FXValuepieChartContent5: 0,
      FYValuepieChartContent5: 0,
      ValuepieChartContent5: null,
      //top5关键词
      topKeyword: [
        {
          id: 0,
          title: '代伯爱', //名称
          popularity: 118, //搜索量
          proportion: 49.5, //占比
          strokeColor: '#1C9399' //已完成进度条色彩
        },
        {
          id: 0,
          title: '伊娟学', //名称
          popularity: 72, //搜索量
          proportion: 26.4, //占比
          strokeColor: '#1C9399' //已完成进度条色彩
        },
        {
          id: 0,
          title: '潘乐', //名称
          popularity: 24, //搜索量
          proportion: 14.5, //占比
          strokeColor: '#1C9399' //已完成进度条色彩
        },
        {
          id: 0,
          title: '潘俊亮', //名称
          popularity: 19, //搜索量
          proportion: 10.6, //占比
          strokeColor: '#1C9399' //已完成进度条色彩
        },
        {
          id: 0,
          title: '符顺希', //名称
          popularity: 7, //搜索量
          proportion: 6.7, //占比
          strokeColor: '#1C9399' //已完成进度条色彩
        }
      ]
    }
  },
  mounted() {
    // console.log(111,this.preValuepieChartContent3)
    this.echartsNum3()
    this.echartsNum4()
    this.echartsNum5()
    this.statisticsPiechart(this.data3, this.data3y, this.data4y, this.data4x,this.data5y, this.data5x)
    window.addEventListener('resize', () => {
      // console.log(111,this.ValuepieChartContent3)
      //   console.log(111)
      const myChart1 = echarts.init(document.getElementById('piechart1')) //  console.log(111,myChart)
      const myChart2 = echarts.init(document.getElementById('piechart2')) //  console.log(111,myChart)
      const myChart3 = echarts.init(document.getElementById('piechart3')) //  console.log(111,myChart)
      const myChart4 = echarts.init(document.getElementById('piechart4')) //  console.log(111,myChart)
      const myChart5 = echarts.init(document.getElementById('piechart5')) //  console.log(111,myChart)
      myChart1.resize()
      myChart2.resize() // that.pieChart()
      myChart3.resize() // that.pieChart()
      myChart4.resize() // that.pieChart()
      myChart5.resize() // that.pieChart()
    })
  },
  methods: {
    // 第三个
    echartsNum3() {
      let temp3 = 0
      let tempIndex3 = 0
      this.data3.map(v => {
        if (v.value > temp3) {
          temp3 = v.value
        }
        return temp3
      })
      for (let i in this.data3) {
        if (this.data3[i].value === temp3) tempIndex3 = i
      }
      this.FXValuepieChartContent3 = this.data3[tempIndex3].value
      this.FYValuepieChartContent3 = this.data3y[tempIndex3]
      if (tempIndex3 > 0) {
        this.preValuepieChartContent3 = parseInt(
          (this.data3[tempIndex3].value / this.data3[tempIndex3 - 1].value - 1) * 100
        )
      } else {
        this.preValuepieChartContent3 = 0
        // this.nextValuepieChartContent3='空'
      }
      if (tempIndex3 - 0 + 1 < this.data3.length - 1) {
        this.nextValuepieChartContent3 = parseInt(
          (this.data3[tempIndex3].value / this.data3[tempIndex3 - 0 + 1].value - 1) * 100
        )
      } else {
        // this.preValuepieChartContent3='空'
        this.nextValuepieChartContent3 = 0
      }

      // console.log(this.FValuepieChartContent3)
    },

    echartsNum4() {
      let temp4 = 0
      let tempIndex4 = 0
      this.data4y.map(v => {
        if (v.value > temp4) {
          temp4 = v.value
        }
        return temp4
      })
      for (let i in this.data4y) {
        if (this.data4y[i].value === temp4) tempIndex4 = i
      }
      this.FXValuepieChartContent4 = this.data4y[tempIndex4].value
      this.FYValuepieChartContent4 = this.data4x[tempIndex4]
      if (tempIndex4 > 0) {
        this.preValuepieChartContent4 = parseInt(
          (this.data4y[tempIndex4].value / this.data4y[tempIndex4 - 1].value - 1) * 100
        )
      } else {
        this.preValuepieChartContent4 = 0
        // this.nextValuepieChartContent3='空'
      }
      if (tempIndex4 - 0 + 1 < this.data4y.length - 1) {
        this.nextValuepieChartContent4 = parseInt(
          (this.data4y[tempIndex4].value / this.data4y[tempIndex4 - 0 + 1].value - 1) * 100
        )
      } else {
        // this.preValuepieChartContent3='空'
        this.nextValuepieChartContent4 = 0
      }

      // console.log(this.FValuepieChartContent3)
    },

    echartsNum5() {
      let temp5 = 0
      let tempIndex5 = 0
      this.data5y.map(v => {
        if (v.value > temp5) {
          temp5 = v.value
        }
        return temp5
      })
      for (let i in this.data5y) {
        if (this.data5y[i].value === temp5) tempIndex5 = i
      }
      this.FXValuepieChartContent5 = this.data5y[tempIndex5].value
      this.FYValuepieChartContent5 = this.data5x[tempIndex5]
      if (tempIndex5 > 0) {
        this.preValuepieChartContent5 = parseInt(
          (this.data5y[tempIndex5].value / this.data5y[tempIndex5 - 1].value - 1) * 100
        )
      } else {
        this.preValuepieChartContent5 = 0
        // this.nextValuepieChartContent3='空'
      }
      if (tempIndex5 - 0 + 1 < this.data5y.length - 1) {
        this.nextValuepieChartContent5 = parseInt(
          (this.data5y[tempIndex5].value / this.data5y[tempIndex5 - 0 + 1].value - 1) * 100
        )
      } else {
        // this.preValuepieChartContent3='空'
        this.nextValuepieChartContent5 = 0
      }

      // console.log(this.FValuepieChartContent3)
    },

    //   饼图
    statisticsPiechart(data3, data3y, data4y, data4x, data5y, data5x) {
      let pieChartContent1 = echarts.init(document.getElementById('piechart1')) //数据源录入统计
      let pieChartContent2 = echarts.init(document.getElementById('piechart2')) //接入类型录入统计
      let pieChartContent3 = echarts.init(document.getElementById('piechart3')) //搜索内容统计
      let pieChartContent4 = echarts.init(document.getElementById('piechart4')) //用户行为统计
      let pieChartContent5 = echarts.init(document.getElementById('piechart5')) //系统性能统计
      //   console.log(pieChartContent1)
      //   数据源录入统计
      let option1 = {
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
            width: '70%',
            type: 'pie', //通过此项确定系列图表类型
            radius: '55%', //饼图的半径
            center: ['50%', '60%'], //饼图的中心（圆心）坐标，第一项为横坐标，第二项为纵坐标
            left: 'left', //图形距左侧距离
            data: [
              //系列中数据内容数组。name：数据项名称；value：数据值（所占比重）
              { value: 105, name: 'Mpp,10.5%' },
              { value: 225, name: 'Hive,22.5%' },
              { value: 402, name: 'Mysql,40.2%' },
              { value: 268, name: 'Cdps,26.8%' }
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

      // 接入类型录入统计
      let option2 = {
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
            padding: [12, 0, 0, 0]
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
            width: '70%',
            type: 'pie', //通过此项确定系列图表类型
            radius: '55%', //饼图的半径
            center: ['50%', '60%'], //饼图的中心（圆心）坐标，第一项为横坐标，第二项为纵坐标
            left: 'left', //图形距左侧距离
            data: [
              //系列中数据内容数组。name：数据项名称；value：数据值（所占比重）
              { value: 100, name: '元数据,10%' },
              { value: 220, name: '图片,22%' },
              { value: 400, name: '音频,40%' },
              { value: 260, name: '文档,26%' },
              { value: 20, name: '视频,2%%' }
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
        color: ['#F85A52', '#FF7F52', '#216274', '#00434C', '#FFB856'] //调色盘颜色列表。如果系列没有设置颜色，则会依次循环从默认颜色中取颜色作为系列颜色。
      }

      // 搜索内容统计 - 折线图
      let option3 = {
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
            data: data3y
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
            data: data3,
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

      // 用户行为统计 - 折线图
      let option4 = {
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
            data: data4x
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
            data: data4y,
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

      // 系统性能统计 - 折线图
      let option5 = {
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
            data: data5x
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
            smooth: 0, //是否为平滑曲线
            symbol: 'circle', //拐点标记的图形
            symbolSize: 10, //拐点标记的大小
            stack: '总量',
            areaStyle: {},
            data: data5y,
            itemStyle: {
              borderWidth: 2,
              borderColor: 'rgba(255,255,255,1)',
              color: 'transparent'
            },
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
              color: 'rgba(28,147,153,0)' // 0% 处的颜色
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

      pieChartContent1.setOption(option1)
      pieChartContent2.setOption(option2)
      pieChartContent3.setOption(option3)
      pieChartContent4.setOption(option4)
      pieChartContent5.setOption(option5)
      let that = this
      pieChartContent3.on('click', function(params) {
        // console.log(params, op, data3)
        if (params.componentType === 'series') {
          that.ValuepieChartContent3 = params
          if (params.dataIndex > 0) {
            that.preValuepieChartContent3 = parseInt((params.value / data3[params.dataIndex - 1].value - 1) * 100)
          } else {
            that.preValuepieChartContent3 = 0
            //  that.nextValuepieChartContent3 = '空'
          }
          if (params.dataIndex < data3.length - 1) {
            that.nextValuepieChartContent3 = parseInt((params.value / data3[params.dataIndex + 1].value - 1) * 100)
          } else {
            //  that.preValuepieChartContent3 = '空'
            that.nextValuepieChartContent3 = 0
          }
          console.log('您点击了我', that.preValuepieChartContent3, that.nextValuepieChartContent3)
        }
      })
      pieChartContent4.on('click', function(params) {
        // console.log(params, op, data3)
        if (params.componentType === 'series') {
          that.ValuepieChartContent4 = params
          if (params.dataIndex > 0) {
            that.preValuepieChartContent4 = parseInt((params.value / data4y[params.dataIndex - 1].value - 1) * 100)
          } else {
            that.preValuepieChartContent4 = 0
            //  that.nextValuepieChartContent3 = '空'
          }
          if (params.dataIndex < data4y.length - 1) {
            that.nextValuepieChartContent4 = parseInt((params.value / data4y[params.dataIndex + 1].value - 1) * 100)
          } else {
            //  that.preValuepieChartContent3 = '空'
            that.nextValuepieChartContent4 = 0
          }
          console.log('您点击了我', that.preValuepieChartContent4, that.nextValuepieChartContent4)
        }
      })
       pieChartContent5.on('click', function(params) {
        // console.log(params, op, data3)
        if (params.componentType === 'series') {
          that.ValuepieChartContent5 = params
          if (params.dataIndex > 0) {
            that.preValuepieChartContent5 = parseInt((params.value / data5y[params.dataIndex - 1].value - 1) * 100)
          } else {
            that.preValuepieChartContent5 = 0
            //  that.nextValuepieChartContent3 = '空'
          }
          if (params.dataIndex < data5y.length - 1) {
            that.nextValuepieChartContent5 = parseInt((params.value / data5y[params.dataIndex + 1].value - 1) * 100)
          } else {
            //  that.preValuepieChartContent3 = '空'
            that.nextValuepieChartContent5 = 0
          }
          console.log('您点击了我', that.preValuepieChartContent5y, that.nextValuepieChartContent5y)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
/* 公共样式 */
.mt20 {
  margin-top: 20px;
}
/* 饼图 */
.statistics-pieChart {
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pieChart {
  width: 50%;
}
#piechart1,
#piechart2 {
  width: 65%;
  height: 220px;
}

.piechart1-text {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(33, 54, 77, 1);
  line-height: 22px;
}

/* top5关键词 - 进度条 */
.progress {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
.progress-line {
  width: 60%;
}
/deep/.progress-line .ant-progress-inner {
  background: rgba(157, 208, 211, 1);
}
.progress-name {
  width: 62px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 20px;
  padding-right: 20px;
  text-align: right;
}
.progress-popularity {
  margin: 0 10px;
}
.progress-popularity,
.progress-proportion {
  font-size: 14px;
  color: rgba(28, 147, 153, 1);
  font-weight: 400;
  line-height: 20px;
}

/** 折线图 */
.lineChart-right {
  overflow: hidden;
  flex: 1;
}
/* 搜索内容统计 - 折线图 */
.pieChart-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/deep/.pieChart-more {
  width: 92px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: rgba(28, 147, 153, 1);
  border-radius: 3px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  position: relative;
  z-index: 9999;
  cursor: pointer;
  margin-right: 20px;
}
#piechart3 {
  width: 100%;
  height: 230px;
  margin-top: -17px;
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

/**第三块 */
/**用户行为统计&系统性能统计 - 折线图*/
.thirdContent {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.system-box {
  padding: 20px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
}
.system-box1 {
  width: calc(50% - 40px);
  margin-right: 20px;
}
.system-box2 {
  width: calc(50% + 20px);
}
#piechart4,
#piechart5 {
  width: 100%;
  height: 230px;
}
</style>
