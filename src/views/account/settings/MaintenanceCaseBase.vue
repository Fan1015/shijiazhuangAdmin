<template>
  <div class="maintenanceCaseBase">
    <!-- 维修案例库管理 -->

    <div class="maintenanceCaseBase-router">
      <s-breadcrumb />
    </div>
    <div class="maintenanceCaseBase-tabs">
      <a-tabs defaultActiveKey="1" @change="keyActive">
        <a-tab-pane key="1">
          <span slot="tab">
            <icon-font type="icon-xingxing" />
            装备信息
          </span>
          <div>
            <div>
              1232
            </div>
            <div>
              456
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <icon-font type="icon-baogongtongji-" />
            统计分析
          </span>
          <div class="maintenanceCaseBase-tabs-tongjifx">
            <div class="maintenanceCaseBase-tabs-tongjifx-list">
              <h3>装备故障上报数趋势</h3>
              <div class="lineChart-box">
                <div class="lineChart-left">
                  <h1 class="lineChart-left-text1">5月</h1>
                  <p class="lineChart-left-text2">645次</p>
                  <p class="lineChart-left-text3">
                    同比上月
                    <span>-19%</span>
                  </p>
                  <p class="lineChart-left-text3">
                    同比下月
                    <span>-15%</span>
                  </p>
                </div>
                <div id="myEchart1" style="width:80%; height:200px"></div>
              </div>
            </div>
            <div class="maintenanceCaseBase-tabs-tongjifx-list">
              <h3>数据统计</h3>
              <div class="maintenanceCaseBase-tabs-tongjifx-list-m">
                <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                  <img src="../../../assets/shujutj01.png" alt="" />
                  <div>
                    <span>维修知识方案</span>
                    <span>2334</span>
                  </div>
                </div>
                <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                  <img src="../../../assets/shujutj02.png" alt="" />
                  <div>
                    <span>维修知识方案平均评分</span>
                    <span>2334</span>
                  </div>
                </div>
                <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                  <img src="../../../assets/shujutj03.png" alt="" />
                  <div>
                    <span>维修知识库总数</span>
                    <span>2334</span>
                  </div>
                </div>
                <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                  <img src="../../../assets/shujutj04.png" alt="" />
                  <div>
                    <span>方案贡献单位分析</span>
                    <span>2334</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="maintenanceCaseBase-tabs-tongjifx-list">
              <h3>故障方案被浏览趋势</h3>
              <div class="lineChart-box">
                <div class="lineChart-left">
                  <h1 class="lineChart-left-text1">5月</h1>
                  <p class="lineChart-left-text2">645次</p>
                  <p class="lineChart-left-text3">
                    同比上月
                    <span>-19%</span>
                  </p>
                  <p class="lineChart-left-text3">
                    同比下月
                    <span>-15%</span>
                  </p>
                </div>
                <div id="myEchart2" style="width:80%; height:200px"></div>
              </div>
            </div>
            <div class="maintenanceCaseBase-tabs-tongjifx-list">
              <h3>故障有方案和未有方案占比分析</h3>
              <div class="lineChart-box">
                <div class="lineChart-left dierhang-left">
                  <h1 class="lineChart-left-text1">问题五</h1>
                  <div class="lineChart-left-text2">
                    <p></p>
                    <p>有方案</p>
                    <p>5544</p>
                  </div>
                  <div class="lineChart-left-text2">
                    <p id="lineChart-left-text2-s"></p>
                    <p>未有方案</p>
                    <p>5544</p>
                  </div>
                </div>
                <div id="myEchart3" style="width:80%; height:230px"></div>
              </div>
            </div>
            <div class="maintenanceCaseBase-tabs-tongjifx-list">
              <div class="maintenanceCaseBase-tabs-tongjifx-list-l">
                <div id="myEchart4" style="width:90%; height:379px"></div>
              </div>
              <div class="maintenanceCaseBase-tabs-tongjifx-list-l">
                <div id="myEchart5" style="width:90%; height:379px"></div>
              </div>
            </div>
            <div class="maintenanceCaseBase-tabs-tongjifx-list">
              <div id="myEchart6" style="width:90%; height:780px"></div>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3">
          <span slot="tab">
            <icon-font type="icon-shu" />
            方案审核
          </span>
          Tab 3
        </a-tab-pane>
      </a-tabs>

      <a-range-picker
        class="maintenanceCaseBase-picker"
        :placeholder="['开始时间', '结束时间']"
        @change="onChange"
        separator="→"
        :mode="['date', 'date']"
      >
        <icon-font slot="suffixIcon" type="icon-shijian" />
      </a-range-picker>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
import echarts from 'echarts'
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1754008_ww8hexrv3g.js' // 在 iconfont.cn 上生成
})

export default {
  components: {
    's-breadcrumb': Breadcrumb,
    IconFont
  },
  data() {
    return {
      navIndex: 0
    }
  },
  mounted() {
    //   this.myEchart()
    window.addEventListener('resize', () => {
      let myEchart1 = echarts.init(document.getElementById('myEchart1')) //装备故障上报
      let myEchart2 = echarts.init(document.getElementById('myEchart2')) //故障方案被浏览趋势
      let myEchart3 = echarts.init(document.getElementById('myEchart3')) //故障有方案和未有方案占比分析
      let myEchart4 = echarts.init(document.getElementById('myEchart4'))
      let myEchart5 = echarts.init(document.getElementById('myEchart5'))
      let myEchart6 = echarts.init(document.getElementById('myEchart6'))
      myEchart1.resize()
      myEchart2.resize()
      myEchart3.resize()
      myEchart4.resize()
      myEchart5.resize()
      myEchart6.resize()
    })
  },
  methods: {
    keyActive(key) {
      let that = this
      if (key == 2) {
        setTimeout(function() {
          //   console.log(111);
          that.myEchart()
        }, 500)
      }
    },
    onChange(date, dateString) {
      console.log(date, dateString)
    },
    myEchart() {
      let myEchart1 = echarts.init(document.getElementById('myEchart1')) //装备故障上报
      let myEchart2 = echarts.init(document.getElementById('myEchart2')) //故障方案被浏览趋势
      let myEchart3 = echarts.init(document.getElementById('myEchart3')) //故障有方案和未有方案占比分析
      let myEchart4 = echarts.init(document.getElementById('myEchart4'))
      let myEchart5 = echarts.init(document.getElementById('myEchart5'))
      let myEchart6 = echarts.init(document.getElementById('myEchart6'))

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
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
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
        ],
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
            data: [
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
            ],
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
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
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
        ],
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
            data: [
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
            ],
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
        color: ['#1C9399', '#1C6E99'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // legend: {
        //     data: ['利润', '支出', '收入']
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '30%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['问题一', '问题二', '问题三', '问题四', '问题五'],
            axisTick: {
              //去掉锯齿状
              show: false
            },
            splitLine: {
              //去掉轴上中间的线，具体看线的方向
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
        ],
        yAxis: [
          {
            type: 'value',
            data: [0, 500, 1000],
            axisTick: {
              show: false
            },
            splitLine: {
              //去掉轴上中间的线，具体看线的方向
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
            name: '收入',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 0, 0]
              }
            },
            label: {
              show: true
            },
            data: [320, 900, 341, 374, 890],
            barWidth: 13, //柱图宽度
            label: {
              show: false, //开启显示
              position: 'right', //在上方显示
              textStyle: {
                //数值样式
                color: '#999999',
                fontSize: 12,
                fontWeight: 400
              }
            }
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'left'
            },
            data: [-520, -732, -201, -434, -900],
            barWidth: 13, //柱图宽度
            label: {
              show: false, //开启显示
              position: 'right', //在上方显示
              textStyle: {
                //数值样式
                color: '#999999',
                fontSize: 12,
                fontWeight: 400
              }
            },

            itemStyle: {
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [0, 0, 10, 10]
              }
            }
          }
        ]
      }

      let option4 = {
        title: {
          //标题组件
          text: '部件故障方案占比', //主标题文本
          subtext: '', //副标题文本
          left: 'left', //标题组件距容器的距离，属性left距左侧距离，值为'left', 'center', 'right'，组件会根据相应的位置自动对齐。
          id: 'piechart1-text' //组件ID，可以在style更改样式
        },
        tooltip: {
          //提示框组件
          show: false //是否显示提示框组件
        },

        series: [
          //系列列表
          {
            //name: '', //系列名称，hover属性提示内容
            type: 'pie', //通过此项确定系列图表类型
            radius: '55%', //饼图的半径
            center: ['50%', '50%'], //饼图的中心（圆心）坐标，第一项为横坐标，第二项为纵坐标
            data: [
              //系列中数据内容数组。name：数据项名称；value：数据值（所占比重）
              { value: 105, name: 'Mpp,(10.5%)' },
              { value: 225, name: 'Hive,22.5%' },
              { value: 402, name: 'Mysql,40.2%' },
              { value: 268, name: 'Cdps,26.8%' }
            ],

            label: {
              color: '#999999'
            },
            labelLine: {
              lineStyle: {
                // color: 'rgba(255, 255, 255, 0.3)'
                color: 'transparent'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },

            emphasis: {
              //高亮的扇区和标签样式
              itemStyle: {
                shadowBlur: 10, //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                shadowOffsetX: 0, //阴影水平方向上的偏移距离
                shadowColor: 'rgba(0, 0, 0, 0.5)' //阴影颜色
              }
            }
          }
        ]
      }

      let option5 = {
        title: {
          //标题组件
          text: '方案贡献单位分析', //主标题文本
          subtext: '', //副标题文本
          left: 'left', //标题组件距容器的距离，属性left距左侧距离，值为'left', 'center', 'right'，组件会根据相应的位置自动对齐。
          id: 'piechart1-text' //组件ID，可以在style更改样式
        },
        tooltip: {
          //提示框组件
          show: false //是否显示提示框组件
        },

        series: [
          //系列列表
          {
            //name: '', //系列名称，hover属性提示内容
            type: 'pie', //通过此项确定系列图表类型
            radius: '55%', //饼图的半径
            center: ['50%', '50%'], //饼图的中心（圆心）坐标，第一项为横坐标，第二项为纵坐标
            data: [
              //系列中数据内容数组。name：数据项名称；value：数据值（所占比重）
              { value: 105, name: 'Mpp,(10.5%)' },
              { value: 225, name: 'Hive,22.5%' },
              { value: 402, name: 'Mysql,40.2%' },
              { value: 268, name: 'Cdps,26.8%' }
            ],

            label: {
              color: '#999999'
            },
            labelLine: {
              lineStyle: {
                // color: 'rgba(255, 255, 255, 0.3)'
                color: 'transparent'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },

            emphasis: {
              //高亮的扇区和标签样式
              itemStyle: {
                shadowBlur: 10, //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                shadowOffsetX: 0, //阴影水平方向上的偏移距离
                shadowColor: 'rgba(0, 0, 0, 0.5)' //阴影颜色
              }
            }
          }
        ]
      }

      let option6 = {
        color: ['#1C9399'],
        title: {
          text: '故障案例名称分析', //主标题文本
          subtext: '', //副标题文本
          left: 'left', //标题组件距容器的距离，属性left距左侧距离，值为'left', 'center', 'right'，组件会根据相应的位置自动对齐。
          id: 'piechart1-text' //组件ID，可以在style更改样式
        },

        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: 'transparent'
            }
          },
          splitLine: {
            show: false
          }
          // type: 'value',
          // boundaryGap: [0, 0.01]
        },
        yAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#DCDEE3'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          },
          type: 'category',
          data: ['装备1', '装备2', '装备3', '装备4', '装备5', '装备6', '装备7', '装备8', '装备9', '装备10']
        },
        series: [
          {
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230, 18203, 23489, 29034, 104970, 131744],
            barWidth: 32, //柱图宽度
            label: {
              show: true, //开启显示
              position: 'right', //在上方显示
              textStyle: {
                //数值样式
                color: '#999999',
                fontSize: 12,
                fontWeight: 400
              }
            }
          }
        ]
      }

      myEchart1.setOption(option1)
      myEchart2.setOption(option2)
      myEchart3.setOption(option3)
      myEchart4.setOption(option4)
      myEchart5.setOption(option5)
      myEchart6.setOption(option6)
    }
  }
}
</script>

<style lang="less" scoped>
/* .weixiu-btm-title-left{
    width: 100%;
    height: 60px;
    background: #fff;
    display: flex;
}
.left-item-active {
  border-bottom: 2px solid #1c9399 !important;
  color: #1c9399 !important;
} */

.maintenanceCaseBase-router {
  margin-bottom: 20px;
}
/deep/.ant-tabs-bar {
  border-bottom: none;
}
/deep/.ant-tabs-tab {
  height: 60px;
}
.maintenanceCaseBase-tabs {
  position: relative;
  /deep/.ant-tabs-nav-wrap {
    background: #fff;
    border-radius: 8px;
  }
  .maintenanceCaseBase-picker {
    position: absolute;
    right: 20px;
    top: 14px;
  }

  .maintenanceCaseBase-tabs-tongjifx {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .maintenanceCaseBase-tabs-tongjifx-list {
      width: 49%;
      background: #fff;
      height: 260px;
      margin-bottom: 20px;
      padding: 20px;
      border-radius: 8px;
      h3 {
        color: #21364d;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}

//第一行第一个折线图

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

//第一行第二个表

.maintenanceCaseBase-tabs-tongjifx-list-m {
  padding-left: 50px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .maintenanceCaseBase-tabs-tongjifx-list-m-l {
    width: 50%;
    display: flex;
    margin-bottom: 50px;
    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      justify-content: space-around;
      font-size: 12px;
      span:nth-child(1) {
        color: #000;
        font-weight: 400;
      }
      span:nth-child(2) {
        color: #1c9399;
        font-weight: 500;
      }
    }
  }
}

//第二行第二个图
.dierhang-left {
  // width: 150px;
  h1 {
    margin-bottom: 60px;
  }
  .lineChart-left-text2 {
    display: flex;
    align-items: center;
    p:nth-child(1) {
      width: 14px;
      height: 14px;
      background: rgba(28, 147, 153, 1);
      margin-right: 4px;
    }
    #lineChart-left-text2-s {
      background: #1c6e99;
    }
    p:nth-child(2) {
      width: 56px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 20px;
      margin-right: 24px;
    }
    p:nth-child(3) {
      width: 34px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(28, 147, 153, 1);
      line-height: 20px;
    }
  }
}

//第三行左侧
.maintenanceCaseBase-tabs-tongjifx-list:nth-child(5) {
  height: 823px !important;
  background: #f4f4f4 !important;
  padding: 0 !important;
  .maintenanceCaseBase-tabs-tongjifx-list-l {
    width: 100%;
    height: 379px;
    background: #fff !important;
    margin-bottom: 20px !important;
    padding: 20px;
    border-radius: 8px;
  }
  .maintenanceCaseBase-tabs-tongjifx-list-l:nth-child(2) {
    margin-bottom: 0 !important;
  }
}

.maintenanceCaseBase-tabs-tongjifx-list:nth-child(5) {
  margin-bottom: 0 !important;
  height: 780px !important;
}
.maintenanceCaseBase-tabs-tongjifx-list:nth-child(6) {
  margin-bottom: 0 !important;
}

//
.maintenanceCaseBase-tabs-tongjifx-list:nth-child(6) {
  height: 780px !important;
}
</style>
