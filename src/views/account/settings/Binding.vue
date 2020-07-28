<template>
  <div class="bindingBox">
    <!-- 页面导航 -->
    <div class="bread">
      <s-breadcrumb />
    </div>
    <!-- 页面导航 -->

    <!-- 标签页 -->
    <a-tabs :defaultActiveKey="defaultActiveKey">
      <!-- 装备信息 -->
      <a-tab-pane key="1">
        <span slot="tab">
          <icon-font type="icon-icon-" />装备信息
        </span>
        <div class="zbinfor">
          <div class="zbinfor-btn">
            <!-- 标签页按钮 -->
            <router-link class="caozuobtn" type="primary" ghost @click="bindingAdd1" :to="{name:'bindedited'}">添加</router-link>
            <a-button type="primary" ghost>导入</a-button>
            <a-button type="primary" ghost>导出</a-button>
          </div>
          <h1>装备详情</h1>
          <div class="zbinfor-contant">
            <div class="zbinfor-contant-item">
              <h1>录入人：</h1>
              <h2>木兰长江</h2>
            </div>
            <div class="zbinfor-contant-item">
              <h1>录入时间：</h1>
              <h2>2020年4月23日</h2>
            </div>
            <div class="zbinfor-contant-item1">
              <h1>装备图片：</h1>
              <div class="zbinfor-contant-item1-img">
                <div class="zbinfor-contant-item1-img-box">
                  <img src="@/assets/shebei1.png" alt />
                </div>
                <div class="zbinfor-contant-item1-img-box">
                  <img src="@/assets/shebei2.png" alt />
                </div>
              </div>
            </div>
            <div class="zbinfor-contant-item">
              <h1>装备描述：</h1>
              <h2>在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试</h2>
            </div>
            <div class="zbinfor-contant-item">
              <h1>保养类别：</h1>
              <div class="zbinfor-contant-item-texts">
                <h1>
                  <span>日保养</span>
                </h1>
                <h1>
                  <span>第一步</span>在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试
                </h1>
                <h1>
                  <span>第二部</span>在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试
                </h1>
              </div>
            </div>
          </div>
        </div>
      </a-tab-pane>
      <!-- 装备信息 -->

      <!-- 关联信息 -->
      <a-tab-pane key="2">
        <span slot="tab">
          <icon-font type="icon-guanlian" />关联信息
        </span>
        <div class="glinfor">
          <!-- 圆环图 -->
          <div class="glinfor-yh">
            <!-- 饼图 -->
            <div class="pieChart">
              <div id="piechart1"></div>
              <div class="piechart-text1">25%，11231个</div>
              <div class="piechart-text2">故障方案</div>
            </div>
            <div class="pieChart">
              <div id="piechart2"></div>
              <div class="piechart-text1">19%，10101个</div>
              <div class="piechart-text2">维修知识</div>
            </div>
            <div class="pieChart">
              <div id="piechart3"></div>
              <div class="piechart-text1">49%，22435个</div>
              <div class="piechart-text2">装备备件</div>
            </div>
            <div class="pieChart">
              <div id="piechart4"></div>
              <div class="piechart-text1">7%，8842个</div>
              <div class="piechart-text2">维修保障设备</div>
            </div>
            <!-- 饼图 -->
          </div>
          <!-- 圆环图 -->

          <!-- 表格 -->
          <div class="binDingTable">
            <div class="binDingTable-left">
              <div class="binDingTable-left-top">
                <div class="binDingTable-left-top-title">
                  <h1>高频故障方案</h1>
                  <h2 @click="gzfaMore">查看全部</h2>
                </div>
                <a-table
                  :columns="glzsColumns"
                  :dataSource="glzsData"
                  @change="glzsChange"
                  :pagination="false"
                />
              </div>
              <div class="binDingTable-left-top">
                <div class="binDingTable-left-top-title">
                  <h1>高频维修故障设备</h1>
                  <h2 @click="gzsbMore">查看全部</h2>
                </div>
                <a-table
                  :columns="glzxColumns"
                  :dataSource="glzxData"
                  @change="glzxChange"
                  :pagination="false"
                />
              </div>
            </div>
            <div class="binDingTable-right">
              <div class="binDingTable-right-top">
                <div class="binDingTable-right-top-title">
                  <h1>高频维修故障设备</h1>
                  <h2 @click="gzsbMore">查看全部</h2>
                </div>
                <a-table
                  :columns="glyColumns"
                  :dataSource="glyData"
                  @change="glyChange"
                  :pagination="false"
                />
              </div>
            </div>
          </div>
          <!-- 表格 -->
        </div>
      </a-tab-pane>
      <!-- 关联信息 -->

      <!-- 备件信息 -->
      <a-tab-pane key="3">
        <span slot="tab">
          <icon-font type="icon-liebiao" />备件信息
        </span>
        <!-- 头部搜索框 -->
        <div class="weixiu-btm">
          <div class="weixiu-btm-btn">
            <!-- 标签页按钮 -->
            <router-link  class="caozuobtn" type="primary" ghost @click="bindingAdd1" :to="{name:'bindedited'}">添加</router-link>
            <a-button type="primary" ghost>导入</a-button>
            <a-button type="primary" ghost>导出</a-button>
          </div>
          <div class="weixiu-btm-center">
            <div class="center-title" :class="isShow ? 'center-title-active' : ''">
              <!-- 词组名称 -->
              <p>
                <span class="p-name">归属装备</span>
                <a-tree-select
                  :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
                  :treeData="treeData"
                  placeholder="请选择装备"
                  treeDefaultExpandAll
                  v-model="value"
                >
                  <span
                    slot="title"
                    slot-scope="{ key, value }"
                    v-if="key === '0-0-1'"
                  >Child Node1 {{ value }}</span>
                </a-tree-select>
              </p>
              <!-- 词组名称 -->
              <!-- 装备类型 -->
              <p>
                <span class="p-name">装备类型</span>
                <input
                  v-model="zblx"
                  type="text"
                  placeholder="请输入"
                  placeholder-style="color:rgba(0, 0, 0, 0.65)"
                />
              </p>
              <!-- 装备类型 -->
              <!-- 保养规格 -->
              <p>
                <span class="p-name">保养规格</span>
                <input v-model="bygg" type="text" placeholder="请输入" />
              </p>
              <!-- 保养规格 -->
              <!-- 录入人 -->
              <p>
                <span class="p-name">录入人</span>
                <input v-model="lrr" type="text" placeholder="请输入" />
              </p>
              <!-- 录入人 -->
              <!-- 录入时间 -->
              <p>
                <span class="p-name">录入时间</span>
                <a-date-picker @change="lrtime" />
              </p>
              <!-- 录入时间 -->
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
        <!-- 头部搜索框 -->
        <!-- 表格 -->
        <a-table :columns="BindingColumns" :dataSource="BindingData" :bordered="false">
          <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record">
            <div :key="col">
              <a-input
                v-if="record.editable"
                style="margin: -5px 0"
                :value="text"
                @change="e => handleChange(e.target.value, record.key, col)"
              />
              <template v-else>{{ text }}</template>
            </div>
          </template>
          <!-- 图片 -->

          <template slot="pic">
            <a-avatar shape="square" :size="64" icon="user" />
          </template>
          <!-- 图片 -->
          <!-- 操作 -->
          <template slot="operation" slot-scope="text, record">
            <a-popconfirm
              v-if="BindingData.length"
              title="是否要删除此行？"
              @confirm="() => BinDingDelete(record.key)"
            >
              <a href="javascript:;" class="BinDingTableBtn">删除</a>
            </a-popconfirm>
            <a @click="BinDingEdit" class="BinDingTableBtn">编辑</a>
            <a @click="BinDingDateil" class="BinDingTableBtn">详情</a>
          </template>
          <!-- 操作 -->
        </a-table>
        <!-- 表格 -->
      </a-tab-pane>
      <!-- 备件信息 -->
    </a-tabs>
    <!-- 标签页 -->

    <!-- 弹窗 -->
    <b-d v-if="dialogVisibleBinDetail" v-on:fn="BinDetailD"></b-d>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
import echarts from 'echarts'
import BinDetail from '@/views/account/settings/BinDingDetail'
import BinEdited from '@/views/account/settings/BindingEdited'
import { Icon } from 'ant-design-vue' //icon
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1775917_82y373ayvxf.js' // 在 iconfont.cn 上生成
})
//
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

// 备件信息表格
const BindingColumns = [
  {
    title: '序号',
    dataIndex: 'xuhao',
    width: '10%',
    scopedSlots: { customRender: 'xuhao' },
  },
  {
    title: '装备名称',
    dataIndex: 'zbname',
    width: '12%',
    scopedSlots: { customRender: 'zbname' }
  },
  {
    title: '图片',
    dataIndex: 'pic',
    width: '7%',
    scopedSlots: { customRender: 'pic' }
  },
  {
    title: '装备类型',
    dataIndex: 'zblx',
    width: '12%',
    scopedSlots: { customRender: 'zblx' }
  },
  {
    title: '装备描述',
    dataIndex: 'zbms',
    width: '12%',
    scopedSlots: { customRender: 'zbms' }
  },
  {
    title: '保养规格',
    dataIndex: 'bygg',
    width: '12%',
    scopedSlots: { customRender: 'bygg' }
  },
  {
    title: '录入人',
    dataIndex: 'lrpeople',
    width: '10%',
    scopedSlots: { customRender: 'lrpeople' }
  },
  {
    title: '录入时间',
    dataIndex: 'lrsj',
    width: '12%',
    scopedSlots: { customRender: 'lrsj' }
  },
  {
    title: '操作',
    width: '15%',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
    align: 'center'
  }
]
const BindingData = []
for (let i = 0; i < 100; i++) {
  BindingData.push({
    key: i.toString(),
    xuhao: `${i}`,
    zbname: `装备${i}号`,
    zblx: `火箭炮`,
    zbms: `火箭炮${i}型`,
    bygg: `保养方案${i}`,
    lrpeople: `木兰长江`,
    lrsj: `2020-04-24 10:08:00`
  })
}

// 关联信息表格
// 左 - 上
const glzsColumns = [
  {
    title: '排名',
    dataIndex: 'paiming'
  },
  {
    title: '方案',
    dataIndex: 'fangan'
  },
  {
    title: '阅读量',
    dataIndex: 'ydl',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.ydl - b.ydl
  },
  {
    title: '收藏量',
    dataIndex: 'scl',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.scl - b.scl
  },
  {
    title: '平均评分',
    dataIndex: 'pjpf',
    filterMultiple: false,
    // onFilter: (value, record) => record.pjpf.indexOf(value) === 0,
    sorter: (a, b) => a.pjpf - b.pjpf
    // sorter: (a, b) => a.pjpf.length - b.pjpf.length,
    // sortDirections: ['descend', 'ascend']
  }
]
const glzsData = []
for (let i = 0; i < 5; i++) {
  glzsData.push({
    key: i.toString(),
    paiming: `${i}`,
    fangan: `火箭炮${i}方案`,
    ydl: `${i * 5}`,
    scl: `${i * 4}`,
    pjpf: `${i * 1.5}分`
  })
}
function glzsChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter)
}
// 左-下
const glzxColumns = [
  {
    title: '排名',
    dataIndex: 'paiming'
  },
  {
    title: '方案',
    dataIndex: 'fangan'
  },
  {
    title: '阅读量',
    dataIndex: 'ydl',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.ydl - b.ydl
  },
  {
    title: '收藏量',
    dataIndex: 'scl',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.scl - b.scl
  },
  {
    title: '平均评分',
    dataIndex: 'pjpf',
    filterMultiple: false,
    // onFilter: (value, record) => record.pjpf.indexOf(value) === 0,
    sorter: (a, b) => a.pjpf - b.pjpf
    // sorter: (a, b) => a.pjpf.length - b.pjpf.length,
    // sortDirections: ['descend', 'ascend']
  }
]
const glzxData = []
for (let i = 0; i < 5; i++) {
  glzxData.push({
    key: i.toString(),
    paiming: `${i}`,
    fangan: `火箭炮${i}方案`,
    ydl: `${i * 5}`,
    scl: `${i * 4}`,
    pjpf: `${i * 1.5}分`
  })
}
function glzxChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter)
}

// 关联信息表格
// 右
const glyColumns = [
  {
    title: '排名',
    dataIndex: 'paiming'
  },
  {
    title: '方案',
    dataIndex: 'fangan'
  },
  {
    title: '阅读量',
    dataIndex: 'ydl',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.ydl - b.ydl
  },
  {
    title: '收藏量',
    dataIndex: 'scl',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.scl - b.scl
  },
  {
    title: '平均评分',
    dataIndex: 'pjpf',
    filterMultiple: false,
    // onFilter: (value, record) => record.pjpf.indexOf(value) === 0,
    sorter: (a, b) => a.pjpf - b.pjpf
    // sorter: (a, b) => a.pjpf.length - b.pjpf.length,
    // sortDirections: ['descend', 'ascend']
  }
]
const glyData = []
for (let i = 0; i < 12; i++) {
  glyData.push({
    key: i.toString(),
    paiming: `${i}`,
    fangan: `火箭炮${i}方案`,
    ydl: `${i * 5}`,
    scl: `${i * 4}`,
    pjpf: `${i * 1.5}分`
  })
}
function glyChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter)
}
export default {
  components: {
    's-breadcrumb': Breadcrumb,
    'b-d': BinDetail,
    IconFont,
    BinEdited
  },
  data() {
    return {
      dialogVisible: true,

      navIndex: 0,
      isShow: false,
      isShowText: 1,
      switchBoolean: '',
      wxTime: null,
      lrTime: null,
      defaultActiveKey: '2', //加载时选择tab页面
      treeData, //导航
      BindingData, //备件信息表格
      BindingColumns, //备件信息表格
      editingKey: '',
      zblx: '', //装备类型
      bygg: '', //保养规格
      lrr: '', //录入人
      glzsColumns, //关联信息-左上-表格
      glzsData, //关联信息-左上-表格

      glzxColumns, //关联信息-左下-表格
      glzxData, //关联信息-左下-表格

      glyColumns, //关联信息-右
      glyData, //关联信息-右

      dialogVisibleBinDetail: false, //显示详情弹窗
      value: undefined,
      isShowEntryAdd: false,
      isShowEntryDetail: false,
      isShowEntryEdit: false,
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
  mounted() {
    this.statisticsPiechart()
    window.addEventListener('resize', () => {
      //   console.log(111)
      const myChart1 = echarts.init(document.getElementById('piechart1')) //  故障方案
      const myChart2 = echarts.init(document.getElementById('piechart2')) //  维修知识
      const myChart3 = echarts.init(document.getElementById('piechart3')) //  装备备件
      const myChart4 = echarts.init(document.getElementById('piechart4')) // 维修保障设备
      myChart1.resize()
      myChart2.resize() // that.pieChart()
      myChart3.resize() // that.pieChart()
      myChart4.resize() // that.pieChart()
    })
  },
  methods: {
    // 关联信息圆环图
    statisticsPiechart() {
      let pieChartContent1 = echarts.init(document.getElementById('piechart1')) //故障方案
      let pieChartContent2 = echarts.init(document.getElementById('piechart2')) //维修知识
      let pieChartContent3 = echarts.init(document.getElementById('piechart3')) //装备备件
      let pieChartContent4 = echarts.init(document.getElementById('piechart4')) //维修保障设备
      //   console.log(pieChartContent1)
      //   故障方案
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
            width: '100%',
            height: '100%',
            type: 'pie', //通过此项确定系列图表类型
            radius: ['40%', '60%'], //饼图的半径
            center: ['50%', '60%'], //饼图的中心（圆心）坐标，第一项为横坐标，第二项为纵坐标
            left: 'left', //图形距左侧距离
            data: [
              //系列中数据内容数组。name：数据项名称；value：数据值（所占比重）
              { value: 25, name: '' },
              { value: 75, name: '' }
            ],
            label: {
              normal: {
                show: false,
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
        color: ['#1C9399', '#9DD0D3'] //调色盘颜色列表。如果系列没有设置颜色，则会依次循环从默认颜色中取颜色作为系列颜色。
      }

      //   维修知识
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
            width: '100%',
            type: 'pie', //通过此项确定系列图表类型
            radius: ['40%', '60%'], //饼图的半径
            center: ['50%', '60%'], //饼图的中心（圆心）坐标，第一项为横坐标，第二项为纵坐标
            left: 'left', //图形距左侧距离
            data: [
              //系列中数据内容数组。name：数据项名称；value：数据值（所占比重）
              { value: 19, name: '' },
              { value: 81, name: '' }
            ],
            label: {
              normal: {
                show: false,
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
        color: ['#1C9399', '#9DD0D3'] //调色盘颜色列表。如果系列没有设置颜色，则会依次循环从默认颜色中取颜色作为系列颜色。
      }

      //   装备备件
      let option3 = {
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
            width: '100%',
            type: 'pie', //通过此项确定系列图表类型
            radius: ['40%', '60%'], //饼图的半径
            center: ['50%', '60%'], //饼图的中心（圆心）坐标，第一项为横坐标，第二项为纵坐标
            left: 'left', //图形距左侧距离
            data: [
              //系列中数据内容数组。name：数据项名称；value：数据值（所占比重）
              { value: 49, name: '' },
              { value: 51, name: '' }
            ],
            label: {
              normal: {
                show: false,
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
        color: ['#1C9399', '#9DD0D3'] //调色盘颜色列表。如果系列没有设置颜色，则会依次循环从默认颜色中取颜色作为系列颜色。
      }

      //   维修保障设备
      let option4 = {
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
            width: '100%',
            type: 'pie', //通过此项确定系列图表类型
            radius: ['40%', '60%'], //饼图的半径
            center: ['50%', '60%'], //饼图的中心（圆心）坐标，第一项为横坐标，第二项为纵坐标
            left: 'left', //图形距左侧距离
            data: [
              //系列中数据内容数组。name：数据项名称；value：数据值（所占比重）
              { value: 7, name: '' },
              { value: 93, name: '' }
            ],
            label: {
              normal: {
                show: false,
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
        color: ['#1C9399', '#9DD0D3'] //调色盘颜色列表。如果系列没有设置颜色，则会依次循环从默认颜色中取颜色作为系列颜色。
      }

      pieChartContent1.setOption(option1)
      pieChartContent2.setOption(option2)
      pieChartContent3.setOption(option3)
      pieChartContent4.setOption(option4)
    },

    // 关联信息-左上
    glzsChange,
    // 关联信息-左下
    glzxChange,
    // 关联信息-右
    glyChange,
    // 故障方案
    gzfaMore(res) {},
    // 故障设备
    gzsbMore(res) {},
    // 装备信息添加
    bindingAdd1(res) {
      
    },
    // 收起||展开
    bindShow(res) {
      this.isShow = !this.isShow
      console.log(this.lrTime, this.wxTime)
    },
    // 查询
    searchList(res) {},
    // 重置
    resetSearch(res) {},
    // 归属装备
    gszb(res) {},
    // 录入时间
    lrtime(res) {},

    // 表格
    handleChange(value, key, column) {
      const newData = [...this.BindingData]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.BindingData = newData
      }
    },
    // 删除
    BinDingDelete(key) {
      const BindingData = [...this.BindingData]
      this.BindingData = BindingData.filter(item => item.key !== key)
    },
    edit(key) {
      const newData = [...this.BindingData]
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = key
      if (target) {
        target.editable = true
        this.BindingData = newData
      }
    },
    // 编辑
    BinDingEdit(res) {},
    // 详情
    BinDingDateil(res) {
      this.dialogVisibleBinDetail = true
    },
    // 弹窗
    BinDetailD(bd) {
      this.dialogVisibleBinDetail = bd
    }
  },
  watch: {
    value(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.ant-tabs-bar.ant-tabs-top-bar {
  background: rgba(255, 255, 255, 1);
  margin: 20px 0 0;
  padding: 0 20px;
}
/deep/.ant-tabs-tab {
  padding: 20px 16px;
}
/deep/.ant-tabs-extra-content {
  margin-top: 8px;
  .ant-btn {
    color: #38a4a6;
    background-color: #fff;
    border-color: #38a4a6;
    margin-right: 20px;
    border-radius: 3px;
  }
}
/deep/.ant-tabs-bar.ant-tabs-top-bar {
  border-bottom: 1px solid rgba(235, 246, 246, 1);
}

// 装备详情
.zbinfor {
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  padding: 20px 100px;
  margin-top: 20px;
  position: relative;
  &-btn {
    position: absolute;
    top: -66px;
    right: 0px;
    /deep/.ant-btn.ant-btn-primary.ant-btn-background-ghost {
      background: rgba(255, 255, 255, 1) !important;
      margin-right: 20px;
    }
  }
  > h1 {
    font-size: 14px;
    color: rgba(42, 63, 84, 1);
    line-height: 20px;
    text-align: center;
  }
  &-contant {
    margin-top: 30px;
    &-item:first-child {
      margin-top: 0;
    }
    &-item {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 20px;
      > h1 {
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        font-weight: 400;
        line-height: 20px;
      }
      > h2 {
        font-size: 14px;
        color: rgba(51, 51, 51, 1);
        font-weight: 400;
        line-height: 20px;
      }
      &-texts {
        > h1:first-child {
          margin-bottom: 10px;
        }
        > h1 {
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          font-weight: 400;
          line-height: 20px;
          margin-bottom: 30px;
          > span {
            color: rgba(28, 147, 153, 1);
            margin-right: 5px;
          }
        }
      }
    }
    &-item1 {
      margin-top: 20px;
      > h1 {
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        font-weight: 400;
        line-height: 20px;
      }
      &-img {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-top: 20px;
        &-box {
          width: 180px;
          height: 120px;
          margin-right: 20px;
        }
      }
    }
  }
}
// 关联信息
#piechart1,
#piechart2,
#piechart3,
#piechart4 {
  width: 100%;
  height: 220px;
}
.glinfor {
  &-yh {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    margin-top: 20px;
    padding: 0 0 20px;
    .pieChart {
      flex: 1;
    }
    .piechart-text1 {
      font-size: 16px;
      color: rgba(28, 147, 153, 1);
      line-height: 22px;
      font-weight: 400;
      text-align: center;
    }
    .piechart-text2 {
      font-size: 16px;
      color: rgba(42, 63, 84, 1);
      line-height: 22px;
      text-align: center;
      font-weight: 400;
    }
  }
}
/deep/.ant-table-tbody > tr > td,
/deep/.ant-table-thead > tr > th.ant-table-column-sort {
  background: rgba(255, 255, 255, 1);
}
/deep/.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover {
  background: rgba(255, 255, 255, 1);
}
/deep/.ant-table-thead > tr > th .ant-table-header-column .ant-table-column-sorters::before {
  content: none;
}
/deep/.ant-table-thead > tr > th {
  border: none;
}
/deep/.ant-table-tbody > tr > td {
  border-bottom: 10px solid rgba(255, 255, 255, 1);
  // padding: 10px 16px;
}
/deep/.ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
/deep/.ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
/deep/.ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
/deep/.ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
  background: rgba(28, 147, 153, .2);
}
/deep/.ant-table-row.ant-table-row-level-0 > td {
  background: rgba(235, 246, 246, 1);
}
.binDingTable {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  &-left {
    width: 49%;
    margin-right: 2%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    &-top:nth-child(2){
      margin-top: 25px;
    }
    &-top {
      width: 100%;
      // height: 365px;
      background: rgba(255, 255, 255, 1);
      padding: 20px 10px;
      margin-top: 20px;
      &-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > h1 {
          font-size: 16px;
          color: rgba(33, 54, 77, 1);
          font-weight: 500;
          line-height: 22px;
        }
        > h2 {
          font-size: 16px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 22px;
          cursor: pointer;
        }
      }
    }
  }
  &-right {
    flex: 1;
    &-top {
      height: 905px;
      background: rgba(255, 255, 255, 1);
      padding: 20px 10px;
      margin-top: 20px;
      &-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > h1 {
          font-size: 16px;
          color: rgba(33, 54, 77, 1);
          font-weight: 500;
          line-height: 22px;
        }
        > h2 {
          font-size: 16px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 22px;
          cursor: pointer;
        }
      }
    }
  }
}

// 备件信息
// 备件信息头部搜索
.weixiu-btm {
  background: #fff;
  border-radius: 8px 8px 0 0;
  position: relative;
  &-btn {
    position: absolute;
    top: -48px;
    right: 0px;
    /deep/.ant-btn.ant-btn-primary.ant-btn-background-ghost {
      background: rgba(255, 255, 255, 1) !important;
      margin-right: 20px;
    }
  }
  &-center {
    padding: 20px 36px 0;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
    .center-title-active {
      transition: all 0.5s;
      height: 55px !important;
      padding-right: 168px !important;
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
        /deep/.ant-select.ant-select-enabled {
          width: 160px;
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
.BinDingTableBtn {
  margin-right: 20px;
}
/deep/.ant-table-row-cell-break-word {
  padding: 16px 0;
}
.caozuobtn{
  display:block;
width:64px;
height:32px;
border-radius:3px;
border:1px solid rgba(28,147,153,1);
text-align: center;
line-height: 32px !important;
margin-right: 20px;
}
.zbinfor-btn,.weixiu-btm-btn{
  display: flex;
}
/deep/.ant-table-thead > tr > th:first-child{
	padding-left: 40px;
}
/deep/.ant-table-row td:first-child{
	padding-left: 40px;
}
</style>
