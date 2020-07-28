<template>
  <div class="weixiu" style="margin-bottom:20px;">
    <div class="bread">
      <s-breadcrumb />
    </div>
    <div class="weixiu-btm">
      <div class="weixiu-btm-title">
        <div class="weixiu-btm-title-left">
          <div class="left-item" :class="navIndex == 0 ? 'left-item-active' : ''" @click="switchNav(0)">
            <icon-font type="icon-wujiaoxingxingxing" />装备信息
          </div>
          <div class="left-item" :class="navIndex == 1 ? 'left-item-active' : ''" @click="switchNav(1)">
            <icon-font type="icon-tongjifenxi" />统计分析
          </div>
          <div class="left-item" :class="navIndex == 2 ? 'left-item-active' : ''" @click="switchNav(2)">
            <icon-font type="icon-fanganshenhe" />方案审核
          </div>
        </div>
        <div class="weixiu-btm-title-right" v-if="navIndex == 0">
          <!-- <div class="right-item"> -->
          <router-link :to="{ name: 'supportequipmentadd' }" class="right-item">添加</router-link>
          <!-- </div> -->
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
      <a-table :pagination="pagination" :columns="columns" :dataSource="data" style="height:10px">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"></span>
        <span slot="action" slot-scope="text, record" class="action-btn-c">
          <a-popconfirm title="是否要删除此行？" okText="好的" cancelText="等一等">
            <a-icon slot="icon" type="question-circle-o" style="color:#38a4a6" />
            <span class="caozuo-btn">删除</span>
          </a-popconfirm>
          <router-link :to="{ name: 'supportequipmentedited' }" class="caozuo-btn">编辑</router-link>
          <span class="caozuo-btn" @click="gotoSupportDetails">详情</span>
        </span>
      </a-table>
      <SupportDetails
        v-if="gotoSupportDetailsVisible"
        v-on:fn="
          bol => {
            gotoSupportDetailsVisible = bol
          }
        "
      ></SupportDetails>
    </div>
    <div class="wx-fenxi" v-if="navIndex == 1">
      <!-- <div class="fenxi-top"> -->
      <div class="maintenanceCaseBase">
        <!-- 维修案例库管理 -->
        <div class="maintenanceCaseBase-tabs">
          <div class="maintenanceCaseBase-tabs-tongjifx">
            <div class="maintenanceCaseBase-tabs-tongjifx-list">
              <h3>装备故障上报数趋势</h3>
              <div class="lineChart-box">

                <div class="lineChart-left" style="width:100px">
                  <h1 class="lineChart-left-text1">
                    {{ ValuepieChartContent1 ? ValuepieChartContent1.name : FYValuepieChartContent1 }}
                  </h1>
                  <p class="lineChart-left-text2">
                    {{ ValuepieChartContent1 ? ValuepieChartContent1.value : FXValuepieChartContent1 }}次
                  </p>
                  <p class="lineChart-left-text3">
                    同比上月
                    <span>{{ preValuepieChartContent1 }}%</span>
                  </p>
                  <p class="lineChart-left-text3">
                    同比下月
                    <span>{{ nextValuepieChartContent1 }}%</span>
                  </p>
                </div>

                <div id="myEchart1" style=" height:200px; flex:1"></div>
              </div>
            </div>
            <div class="maintenanceCaseBase-tabs-tongjifx-list" >
              <h3>数据统计</h3>
              <div class="maintenanceCaseBase-tabs-tongjifx-list-m">
                <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                  <img src="../../../assets/shuju1.png" alt="" />
                  <div>
                    <span>维修知识方案</span>
                    <span>2334</span>
                  </div>
                </div>
                <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                  <img src="../../../assets/shuju2.png" alt="" />
                  <div>
                    <span>维修知识方案平均评分</span>
                    <span>2334</span>
                  </div>
                </div>
                <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                  <img src="../../../assets/shuju3.png" alt="" />
                  <div>
                    <span>维修知识库总数</span>
                    <span>2334</span>
                  </div>
                </div>
                <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                  <img src="../../../assets/shuju4.png" alt="" />
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
                <div class="lineChart-left" style="width:100px;">
                  <h1 class="lineChart-left-text1">
                    {{ ValuepieChartContent2 ? ValuepieChartContent2.name : FYValuepieChartContent2 }}
                  </h1>
                  <p class="lineChart-left-text2">
                    {{ ValuepieChartContent2 ? ValuepieChartContent2.value : FXValuepieChartContent2 }}次
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
                <div id="myEchart2" style="flex:1; height:200px"></div>
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
              <div class="maintenanceCaseBase-tabs-tongjifx-list-l" style="overflow:hidden;">
                <div id="myEchart5" style="width:90%; height:379px"></div>
              </div>
            </div>
            <div class="maintenanceCaseBase-tabs-tongjifx-list" style="overflow:hidden;">
              <div id="myEchart6" style="width:90%; height:780px" ></div>
            </div>
          </div>
          <!-- <a-tabs defaultActiveKey="1" @change="keyActive">
             
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
                        <img src="../../../assets/shuju1.png" alt="" />
                        <div>
                          <span>维修知识方案</span>
                          <span>2334</span>
                        </div>
                      </div>
                      <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                        <img src="../../../assets/shuju2.png" alt="" />
                        <div>
                          <span>维修知识方案平均评分</span>
                          <span>2334</span>
                        </div>
                      </div>
                      <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                        <img src="../../../assets/shuju3.png" alt="" />
                        <div>
                          <span>维修知识库总数</span>
                          <span>2334</span>
                        </div>
                      </div>
                      <div class="maintenanceCaseBase-tabs-tongjifx-list-m-l">
                        <img src="../../../assets/shuju4.png" alt="" />
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

            </a-tabs> -->

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
      <!-- </div> -->
    </div>
    <div class="wx-shenhe" v-if="navIndex == 2">
      <div class="shenhe-top">
        <div class="shenhe-top-l">
          <a-steps :current="1">
            <a-popover slot="progressDot" slot-scope="{ index, status, prefixCls }">
              <template slot="content">
                <span>step {{ index }} status: {{ status }}</span>
              </template>
              <span :class="`${prefixCls}-icon-dot`"></span>
            </a-popover>
            <a-step title="创建项目" description="高二毛 2016-12-12 12:32 " />
            <a-step title="项目一审" description="高二毛" />
            <a-step title="项目二审" description="高二毛 2016-12-12 12:32" />
            <a-step title="完成" />
          </a-steps>
        </div>
      </div>
      <div class="shenhe-foot">
        <div class="weixiuplan-top" style="padding-top:40px">
          <div class="weixiuplan-top-line"></div>
          <div class="weixiuplan-top-title">
            故障案例信息
          </div>
        </div>
        <div class="user-details-dialog-main">
          <div class="user-details-dialog-main-c">
            <div class="user-details-dialog-main-c-f">
              <div class="user-details-dialog-main-c-f-l">
                <p>归属分支：</p>
                <p class="user-details-dialog-main-c-f-l-p">
                  <span>陆军</span>
                  <span>></span>
                  <span>炮兵</span>
                  <span>></span>
                  <span>火箭炮</span>
                </p>
              </div>
              <div class="user-details-dialog-main-c-f-l">
                <p>部队信息：</p>
                <p>
                  炮兵
                </p>
              </div>
              <div class="user-details-dialog-main-c-f-l">
                <p>录入人：</p>
                <p>
                  木兰长江
                </p>
              </div>
              <div class="user-details-dialog-main-c-f-l">
                <p>录入时间：</p>
                <p>
                  2019-07-23
                </p>
              </div>
              <div class="user-details-dialog-main-c-f-l">
                <p>案例名称：</p>
                <p>
                  ××××的维修方案
                </p>
              </div>
              <div class="user-details-dialog-main-c-f-l">
                <p>装备名称：</p>
                <p>
                  ××××
                </p>
              </div>
            </div>
            <div class="qingdan">
              <div>对应故障部件：</div>
              <div>
                ××××
              </div>
            </div>
            <div class="qingdan">
              <div>方案摘要：</div>
              <div>
                好的界面设计并不始于图片，而是始于对人的理解，比如人们喜欢什么，为什么人们会试用某种特定的软件，他们可能与之怎样交互
              </div>
            </div>

            <div class="user-details-dialog-main-c-s">
              <div class="user-details-dialog-main-c-s-li">
                <div>知识详情：</div>
                <div>
                  今天很残酷，明天更残酷，后天很美好。但是绝大部分人是死在明天晚上，只有那些真正的英雄，才能见到后天的太阳
                </div>
              </div>
              <div class="user-details-dialog-main-c-s-li">
                <div></div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div class="qingdan">
                <div>关键词：</div>
                <div>
                  预案、方案、动力、故障
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="weixiuplan">
          <div class="weixiuplan-top">
            <div class="weixiuplan-top-line"></div>
            <div class="weixiuplan-top-title">
              解决方案案例
            </div>
          </div>
          <div class="">
            <div class="weixiuplan-foot">
              <div class="user-details-dialog-main">
                <div class="user-details-dialog-main-c">
                  <div class="user-details-dialog-main-c-f">
                    <div class="user-details-dialog-main-c-f-l">
                      <p>录入人：</p>
                      <p>
                        木兰长江
                      </p>
                    </div>
                    <div class="user-details-dialog-main-c-f-l">
                      <p>录入时间：</p>
                      <p>
                        2019-07-23
                      </p>
                    </div>
                    <div class="user-details-dialog-main-c-f-l">
                      <p>案例名称：</p>
                      <p>
                        ××××
                      </p>
                    </div>
                    <div class="user-details-dialog-main-c-f-l">
                      <p>部队信息：</p>
                      <p>
                        炮兵
                      </p>
                    </div>
                    <div class="user-details-dialog-main-c-f-l shenbao">
                      <p>装备名称：</p>
                      <p>
                        ××××
                      </p>
                    </div>
                    <div class="user-details-dialog-main-c-f-l weixiu">
                      <p>维修人员数量：</p>
                      <p>
                        ××××
                      </p>
                    </div>
                    <div class="user-details-dialog-main-c-f-l">
                      <p>保障设备和工具：</p>
                      <p>
                        ××××
                      </p>
                    </div>
                    <div class="user-details-dialog-main-c-f-l">
                      <p>所需备件器材：</p>
                      <p>
                        ××××
                      </p>
                    </div>
                    <div class="user-details-dialog-main-c-f-l"></div>
                  </div>
                  <div class="beijian">
                    <div>维修设施：</div>
                    <div>
                      最大的错误就是停在原地不动，就是不犯错误。关键在于总结、反思，错误还得犯，关键是不要犯同样的错误
                    </div>
                  </div>
                  <div class="user-details-dialog-main-c-s">
                    <div class="user-details-dialog-main-c-s-li">
                      <div>维修作业流程图：</div>
                      <div>
                        <span>第一步</span>在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试
                      </div>
                    </div>
                    <div class="user-details-dialog-main-c-s-li">
                      <div></div>
                      <div>
                        <span>第二步</span>在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试
                      </div>
                    </div>
                  </div>
                  <div class="qingdan">
                    <div>审核原因：</div>
                    <div>
                      最大的错误就是停在原地不动，就是不犯错误。关键在于总结、反思，错误还得犯，关键是不要犯同样的错误
                    </div>
                  </div>
                  <!-- <div class="beijian">
                    <div>主观评价：</div>
                    <div>
                      按照五星评价模式
                    </div>
                  </div>
                  <div class="beizhu">
                    <div>改进建议：</div>
                    <div>
                      ×××××
                    </div>
                  </div> -->
                </div>
              </div>
              <div slot="footer" class="dialog-footer">
                <div class="el-button-d1">审核通过</div>
                <div class="el-button-d2">审核不通过</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import SupportDetails from './operate/SupportEquipmentDetails'
import Breadcrumb from '@/components/tools/Breadcrumb'
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1753443_8bsq6przytb.js' // 在 iconfont.cn 上生成
})
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
const columns = [
  {
    title: '序号',
    dataIndex: 'num',
    key: 'num',
    width: 100
  },
  {
    title: '案例名称',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true
  },
  {
    title: '部队信息',
    dataIndex: 'xinxi',
    key: 'xinxi'
  },
  {
    title: '对应装备',
    key: 'zhuangbei',
    dataIndex: 'zhuangbei'
  },
  {
    title: '对应故障部件或分系统',
    dataIndex: 'bujian',
    key: 'bujian',
    ellipsis: true
  },
  {
    title: '关键词',
    dataIndex: 'guanjian',
    key: 'guanjian',
    ellipsis: true
  },
  {
    title: '录入人',
    dataIndex: 'lururen',
    key: 'lururen'
  },
  {
    title: '录入时间',
    dataIndex: 'lurutime',
    key: 'lurutime',
    ellipsis: true
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
    align: 'center'
  }
]

const data = [
  {
    key: '1',
    num: '01',
    name: '火箭炮动力系统维修方案',
    xinxi: '×××部队',
    zhuangbei: '火箭炮',
    bujian: '动力系统',
    guanjian: '动力系统、火箭炮、故障',
    lururen: '沐兰长江',
    lurutime: '2019-06-0112：30'
  },
  {
    key: '2',
    num: '01',
    name: '火箭炮动力系统维修方案',
    xinxi: '×××部队',
    zhuangbei: '火箭炮',
    bujian: '动力系统',
    guanjian: '动力系统、火箭炮、故障',
    lururen: '沐兰长江',
    lurutime: '2019-06-0112：30'
  },
  {
    key: '3',
    num: '01',
    name: '火箭炮动力系统维修方案',
    xinxi: '×××部队',
    zhuangbei: '火箭炮',
    bujian: '动力系统',
    guanjian: '动力系统、火箭炮、故障',
    lururen: '沐兰长江',
    lurutime: '2019-06-0112：30'
  },
  {
    key: '4',
    num: '01',
    name: '火箭炮动力系统维修方案',
    xinxi: '×××部队',
    zhuangbei: '火箭炮',
    bujian: '动力系统',
    guanjian: '动力系统、火箭炮、故障',
    lururen: '沐兰长江',
    lurutime: '2019-06-0112：30'
  },
  {
    key: '5',
    num: '01',
    name: '火箭炮动力系统维修方案',
    xinxi: '×××部队',
    zhuangbei: '火箭炮',
    bujian: '动力系统',
    guanjian: '动力系统、火箭炮、故障',
    lururen: '沐兰长江',
    lurutime: `2019-06-01<br/>12：30`
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
export default {
  components: {
    's-breadcrumb': Breadcrumb,
    IconFont,
    SupportDetails
  },
  data() {
    return {
      navIndex: 0,
      data: [],
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
      data,
      value: undefined,
      treeData,
      gotoSupportDetailsVisible: false,
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
      ValuepieChartContent2: null
    }
  },
  mounted() {
    this.echartsNum1()
    this.echartsNum2()
    // this.myEchart(dataChartX1, dataChartY1, dataChartX2, dataChartY2);
    window.addEventListener('resize', () => {
      if (this.navIndex == 1) {
        console.log(this.navIndex)
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
      }
    })
  },
  methods: {
    switchNav(value) {
      console.log(value)
      this.navIndex = value
      let that = this
      if (value == 1) {
        setTimeout(function() {
          that.myEchart(dataChartX1, dataChartY1, dataChartX2, dataChartY2)
        }, 100)
      }
    },
    searchList() {},
    resetSearch() {},
    bindShow() {
      this.isShow = !this.isShow
      console.log(this.lrTime, this.wxTime)
    },
    gotoSupportDetails() {
      this.gotoSupportDetailsVisible = true
    },
    onChange(date, dateString) {
      console.log(date, dateString)
    },
    handleClose() {},
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
    myEchart(dataChartX1, dataChartY1, dataChartX2, dataChartY2) {
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
          right: '3%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap:['10%','10%'],
            type: 'category',
            // boundaryGap: false,
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
        xAxis: [
          {
            boundaryGap:['10%','10%'],
            type: 'category',
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
        &-add {
          color: #1c9399;
        }
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
      > p:nth-child(2) {
        display: flex;
        justify-content: center;
      }
      > p:nth-child(3) {
        display: flex;
        justify-content: flex-end;
      }
      > p:nth-child(5) {
        display: flex;
        justify-content: center;
      }
      > p {
        width: 32%;
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
          width: 225px;
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
          width: 225px;
        }
        /deep/.ant-time-picker {
          width: 225px;
        }
        // 树状导航选择
        /deep/.ant-select {
          width: 225px;
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
  height: 570px;
  background: #fff;
  border-top: 1px solid #e4e4e4;
  /deep/.ant-table-thead > tr > th {
    background: #fff;
    // padding-left: 10px;
  }
  /deep/.ant-table-thead > tr > th:last-child {
    width: 160px;
  }
  /deep/.ant-table-thead > tr > th:nth-child(4) {
    padding-left: 0;
  }
  /deep/.ant-table-tbody > tr > td {
    padding: 30px 20px;
  }
  /deep/.ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
    background: #f5f5f5;
  }
  .caozuo-btn {
    font-size: 14px;
    color: #1c9399;
    cursor: pointer;
    margin-right: 10px;
    &:nth-child(3) {
      margin-right: 0;
    }
  }
}
.left-item-active {
  border-bottom: 2px solid #1c9399 !important;
  color: #1c9399 !important;
}
.fenxi-top {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  &-l {
    width: 49%;
    background: #fff;
    border-radius: 8px;
  }
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

//导航2,统计分析样式
.wx-fenxi {
  margin-top: 20px;
}
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
    top: -65px;
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
      padding-right: 20px;
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

// 导航3,方案审核样式
.wx-shenhe {
  height: 100%;
  margin-top: 20px;
  .shenhe-top {
    background: #fff;
    height: 139px;
  }
  .shenhe-top-l {
    /deep/.ant-steps {
      padding-top: 28px;
    }
    /deep/.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
      color: #999999;
    }
    /deep/.ant-steps-item-description {
      margin-top: 14px;
    }
  }
  .shenhe-foot {
    background: #fff;
    margin-top: 20px;
  }
}
/deep/.el-dialog {
  width: 47.2%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  .el-dialog__header {
    padding: 0;

    /deep/.el-dialog__title {
      display: block;
      width: 88px;
      height: 70px;
      font-size: 20px;
      color: #fff;
      font-weight: 400;
      background: turquoise;
      background: url('../../../assets/user-dialog-title.png') no-repeat;
      margin-left: 30px;
      text-align: center;
      line-height: 60px;
    }
    .el-dialog__headerbtn {
      display: none;
      // height: 0;
    }
  }
}
/deep/.el-dialog > .el-dialog__body {
  padding: 0;
}

.dialog-footer {
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding: 40px 0 20px 0;
}
.el-button-d1,
.el-button-d2 {
  width: 95px;
  height: 32px;
  background: #fff;
  color: #1c9399;
  text-align: center;
  border-radius: 3px;
  line-height: 32px;
  cursor: pointer;
  border: 1px solid #1c9399;
}
.el-button-d1 {
  color: #fff;
  background: #1c9399;
  margin-right: 38px;
}
/deep/.el-dialog__body {
  flex: 1;
  padding: 0px 20px;
}
.user-details-dialog-main {
  display: flex;
  flex: 1;
  justify-content: center;

  .user-details-dialog-main-c {
    display: flex;
    flex-direction: column;
    width: 90%;
    .user-details-dialog-main-c-f {
      display: flex;
      flex-wrap: wrap;
      .user-details-dialog-main-c-f-l {
        width: 50%;
        display: flex;
        p:nth-child(1) {
          width: 170px;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
          text-align: right;
        }
        p:nth-child(2) {
          flex: 1;
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
        }
        .user-details-dialog-main-c-f-l-p {
          color: #333333 !important;
        }
      }
    }

    .user-details-dialog-main-c-s {
      display: flex;
      flex-direction: column;
      .user-details-dialog-main-c-s-li {
        display: flex;
        margin-bottom: 10px;
        // align-items: center;
        div:nth-child(1) {
          display: block;
          text-align: right;
          width: 170px !important;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
        }
        div:nth-child(2) {
          flex: 1;
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          display: flex;
          margin-bottom: 10px;
          p {
            width: 80px;
            height: 80px;
            background: #ccc;
            margin-right: 10px;
          }
          > span {
            color: #1c9399;
          }
        }
      }
    }
    .user-details-dialog-main-c-t {
      p {
        display: flex;
        span:nth-child(1) {
          text-align: right;
          display: block;
          width: 80px;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
        }
        span:nth-child(2) {
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
        }
      }
    }

    .usedetails,
    .qingdan,
    .beijian,
    .beizhu {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      > div:first-child {
        width: 170px;
        text-align: right;
        color: rgba(153, 153, 153, 1);
        font-size: 14px;
      }
      > div:last-child {
        flex: 1;
      }
    }
  }
}

// 维修方案样式
.weixiuplan {
  &-top {
    margin: 30px 0 20px 50px;
    display: flex;
    align-items: center;
    &-line {
      width: 2px;
      height: 20px;
      background: rgba(28, 147, 153, 1);
      margin: 0 10px 0 70px;
    }
    &-title {
      font-size: 16px;
      color: rgba(51, 51, 51, 1);
    }
  }
  &-foot {
    // background: rgba(235, 246, 246, 1);
    padding-top: 10px;
  }
}
/deep/.ant-table-thead > tr > th:first-child {
  padding-left: 40px;
}
/deep/.ant-table-tbody > tr > td:first-child {
  padding-left: 40px;
}
</style>
