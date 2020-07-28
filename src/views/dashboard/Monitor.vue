<template>
  <div class="page-header-index-wide">
    <div class="navs-top">
      <div class="guzhang" :style="{ marginBottom: '24px' }">
        <img src="../../assets/home_top1.png" class="index-icon" />
        <div class="index-item-text">
          <span>286</span>
          <div>故障方案</div>
        </div>
      </div>
      <div class="weixiu" :style="{ marginBottom: '24px' }">
        <img src="../../assets/home_top2.png" class="index-icon" />
        <div class="index-item-text">
          <span>286</span>
          <div>维修知识</div>
        </div>
      </div>
      <div class="huoyue" :style="{ marginBottom: '24px' }">
        <img src="../../assets/home_top3.png" class="index-icon" />
        <div class="index-item-text">
          <span>286</span>
          <div>活跃用户</div>
        </div>
      </div>
      <div class="ziyuan" :style="{ marginBottom: '24px' }">
        <img src="../../assets/home_top4.png" class="index-icon" />
        <div class="index-item-text">
          <span>286</span>
          <div>资源访问率</div>
        </div>
      </div>
    </div>
    <a-row :gutter="24">
      <a-col :sm="24" :md="16" :xl="16">
        <div class="index2-top">
          <div class="index2-top-title">常用功能</div>
          <div class="index2-top-btm">
            <div class="index2-item1">
              <img src="../../assets/home_cy1.png" />
              <span>故障方案管理</span>
            </div>
            <div class="index2-item1">
              <img src="../../assets/home_cy2.png" />
              <span>维修知识管理</span>
            </div>
            <div class="index2-item1">
              <img src="../../assets/home_cy3.png" />
              <span>装备备件管理</span>
            </div>
            <div class="index2-item1">
              <img src="../../assets/home_cy4.png" />
              <span>搜索管理</span>
            </div>
            <div class="index2-item1">
              <img src="../../assets/home_cy5.png" />
              <span>推荐管理</span>
            </div>
            <div class="index2-item1">
              <img src="../../assets/home_cy6.png" />
              <span>工具箱</span>
            </div>
          </div>
        </div>
        <div class="index2-btm">
          <div class="index2-top-title">态势</div>
          <div class="index2-btm-btm">
            <div class="index2-btm-nav">
              <div class="index2-nav-item">
                <div class="index2-active">活跃用户</div>
                <div>资质新增</div>
                <div>资源访问</div>
              </div>
              <!-- <a-range-picker :style="{ width: '256px',marginRight:'10px' }" /> -->
               <div class="foot-time">
                  <icon-font class="date-icon" type="icon-rili" />
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
            <div id="foot-echarts" style="width:100%;height:280px"></div>
          </div>
        </div>
      </a-col>
      <a-col :sm="24" :md="8" :xl="8">
        <div class="index3-top">
          <div class="index3-top-title">
            <p>待审核</p>
            <span>查看全部</span>
          </div>
          <div>
            <a-steps direction="vertical" type="default" progressDot :current="-1">
              <a-step title="2019-03-21" description="***处理方法(方案)-20190603" />
              <a-step title="2019-03-21" description="***处理方法(方案)-20190603" />
              <a-step title="2019-03-21" description="***处理方法(方案)-20190603" />
              <a-step title="2019-03-21" description="***处理方法(方案)-20190603" />
            </a-steps>
          </div>
        </div>
        <div class="index3-btm">
          <div class="index3-btm-title">
            <p>已提交</p>
            <span>查看全部</span>
          </div>
          <div class="index3-btm-btm">
            <p>1、***处理方法(方案)-201906</p>
            <p>1、***处理方法(方案)-201906</p>
            <p>1、***处理方法(方案)-201906</p>
            <p>1、***处理方法(方案)-201906</p>
            <p>1、***处理方法(方案)-201906</p>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
var echarts = require('echarts')
import { Icon } from 'ant-design-vue' //icon
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1753443_pha8nywnoj.js' // 在 iconfont.cn 上生成
})
export default {
  name: 'Analysis',
   components: {
    IconFont
  },
  data() {
    return {
      loading: true,
       mode2: ['month', 'month'],
      value: []
    }
  },
  created() {
    setTimeout(() => {
      this.loading = !this.loading
    }, 500)
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.drawBtm()
      }, 500)
    })
    // 监听页面窗口大小改变
    window.addEventListener('resize', () => {
      const myChart1 = echarts.init(document.getElementById('foot-echarts'))
      myChart1.resize()
    })
  },
  methods: {
     handleChange(value) {
      this.value = value
    },
    handlePanelChange2(value, mode) {
      this.value = value
      this.mode2 = [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]]
    },
    drawBtm() {
      const mychart = echarts.init(document.getElementById('foot-echarts'))
      var option = {
        grid: {
          bottom: 35,
          left: 60,
          right: 10
        },
        //名称
        title: {},
        tooltip: {}, //提示框
        legend: {}, //标题
        xAxis: {
          data: ['12-20', '12-20', '12-20', '12-20', '12-20', '12-20','12-20'],
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
            smooth: true, // 是否是平滑曲线
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
            data: [2100, 4900, 1900, 900, 1900, 2950, 2000]
          }
        ]
      }
      // 进行图表配置
      mychart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.ant-steps-dot .ant-steps-item-content {
  width: auto;
}
/deep/.ant-steps-vertical .ant-steps-item-description {
  padding-bottom: 15px;
  color: #2b303a !important;
}

.navs-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > div {
    width: 23%;
  }
}
.guzhang {
  background-color: #1c9399;
  display: flex;
  align-items: center;
  padding: 17px;
  border-radius: 8px;
}
.weixiu {
  background-color: #ff9f8b;
  display: flex;
  align-items: center;
  padding: 17px;
  border-radius: 8px;
}
.huoyue {
  background-color: #ff8ba2;
  display: flex;
  align-items: center;
  padding: 17px;
  border-radius: 8px;
}
.ziyuan {
  background-color: #4ac7ff;
  display: flex;
  align-items: center;
  padding: 17px;
  border-radius: 8px;
}
.index-icon {
  width: 62px;
  height: 62px;
  margin-right: 10px;
}
.index-item-text {
  font-size: 32px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.index-item-text div {
  font-size: 14px;
  color: #ffffff;
}
.index2-top {
  width: 100%;
}
.index2-top-title {
  font-size: 14px;
  color: #404948;
  padding: 4px 0 20px 0;
}
.index2-top-btm {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 5px;
}
.index2-item1 {
  width: 31%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #8e99a9;
  background-color: #ffffff;
  border-radius: 8px;
}
.index2-item1 img {
  margin-top: 18px;
}
.index2-btm {
  width: 100%;
}
.index2-btm-btm {
  background-color: #ffffff;
  border-radius: 8px;
}
.index2-chart {
  width: 100%;
}
.index2-btm-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 0 20px;
}
.index2-nav-item {
  display: flex;
}
.index2-nav-item div {
  width: 92px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 3px;
  color: #8e99a9;
  font-size: 14px;
}
.index2-active {
  background-color: #1c9399;
  color: #ffffff !important;
}
.index3-top {
  padding: 20px 20px 0 20px;
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 8px;
}
.index3-top-title,
.index3-btm-title {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #8e99a9;
}
.index3-top-title p,
.index3-btm-title p {
  color: #bf7a6a;
}
.index3-btm {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  height: 325px;
}
.index3-btm-btm p {
  font-size: 14px;
  margin: 5px 0;
}
#chart-btm {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
}
#chart-btm > div {
  width: 100%;
}
.extra-wrapper {
  line-height: 55px;
  padding-right: 24px;

  .extra-item {
    display: inline-block;
    margin-right: 24px;

    a {
      margin-left: 24px;
    }
  }
}

.antd-pro-pages-dashboard-analysis-twoColLayout {
  position: relative;
  display: flex;
  display: block;
  flex-flow: row wrap;
}

.antd-pro-pages-dashboard-analysis-salesCard {
  height: calc(100% - 24px);
  /deep/ .ant-card-head {
    position: relative;
  }
}

.dashboard-analysis-iconGroup {
  i {
    margin-left: 16px;
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;
    transition: color 0.32s;
    color: black;
  }
}
.analysis-salesTypeRadio {
  position: absolute;
  right: 54px;
  bottom: 12px;
}
.foot-time {
  margin: 0 20px 0 0;
  position: relative;
}
.date-icon {
  width: 16px;
  height: 16px;
  position: absolute;
  left: 10px;
  top: 8px;
  z-index: 99999;
}
.date-icon > svg {
  width: 100%;
  height: 100%;
  color: #c7c9ce;
}
@media screen and (max-width: 1000px) {
  .navs-top > div {
    width: 48.5%;
  }
}
</style>
