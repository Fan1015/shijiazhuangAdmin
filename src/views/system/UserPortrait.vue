<template>
    <div class="user-portrait-content">
        <div class="router-name">
            <span>{{$route.matched[1].meta.title}}</span>
            <span>></span>
            <span class="user-router-name">{{$route.meta.title}}</span>
            <span>></span>
            <span>画像</span>
        </div>
        <div class="user-portrait-s">
            <div class="user-portrait-s-l">
                <div class="user-portrait-s-l-i">
                    <img src="../../assets/矩形.png" alt="">
                </div>
            </div>
            <div class="user-portrait-s-r">
                <h3>用户标签</h3>
                <div class="user-portrait-s-r-bq">
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                    <div class="user-portrait-s-r-bq-list">
                        <p>
                            <span>性别:</span>
                            <span>未知</span>
                        </p>
                        <p>
                            <img src="../../assets/关闭-页签栏.png" alt="">
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="user-portrait-t">
            <div class="user-portrait-t-l">
                <h3>用户行为</h3>
                <a-range-picker @change="onChange">
                    <a-icon slot="suffixIcon" type="calendar" />
                </a-range-picker>
                <div class="user-portrait-t-l-e" style="width:100%">
                     <div id="circle" style="width:100%;height:355px;"></div>   
                </div>
            </div>
            <div class="user-portrait-t-r">
                <a-table :columns="columns" :dataSource="data" :pagination=false :scroll="{y:444}">
                    <a slot="name" slot-scope="text">{{text}}</a>
                </a-table>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      scopedSlots: { customRender: 'name' },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address 1',
      ellipsis: true,
    },
    {
      title: 'Long Column Long Column Long Column',
      dataIndex: 'address',
      key: 'address 2',
      ellipsis: true,
    },
    {
      title: 'Long Column',
      dataIndex: 'address',
      key: 'address 4',
      ellipsis: true,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 2 Lake Park, London No. 2 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }
  ];
export default {
    data() {
      return {
        data,
        columns,
      };
    },
    mounted() {
        this.pieChart()
        // const that=this
       window.addEventListener('resize', () => {
        //   console.log(111)
          const myChart = echarts.init(document.getElementById('circle'))
        //  console.log(111,myChart)
          myChart.resize()
          // that.pieChart()
        })
    },
    methods: {
      onChange(date, dateString) {
        // console.log(date, dateString);
        
      },
      // 饼状图
        pieChart() {
            const myChart1 = echarts.init(document.getElementById('circle'))
            // console.log(myChart1)
            // console.log(myChart2)
            var option1 = {
                title: {},
                legend: {
                // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
                orient: 'vertical',
                // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                x: 'center',
                // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                y: 'bottom',
                itemWidth: 32, // 设置图例图形的宽
                itemHeight: 12, // 设置图例图形的高
                itemGap: 28,

                // data: ['冷却系统,49.5%', '支架,17.5%', '动力系统,22.5%', '瞄准系统,10.6%']
                },
                series: [
                {
                    type: 'pie',
                    radius: '40%', // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
                    center: ['50%', '25%'], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
                    data: [
                    { value: 49.5, name: '冷却系统,49.5%' },
                    { value: 17.5, name: '支架,17.5%' },
                    { value: 12.5, name: '动力系统,12.5%' },
                    { value: 10.5, name: '瞄准系统,10.6%' },
                    { value: 10, name: '瞄准系统,10%' }
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
                    label: {
                        normal: {
                            show: false // show设置线是否显示，默认为true，可选值：true ¦ false
                        },
                        emphasis: {
                            show: false
                        }
                    }
                }
                ]
            }
            myChart1.setOption(option1, true)
        }
    },
}
</script>

<style lang="less" scoped>
    .user-portrait-content{
        .router-name{
            font-size: 14px;
            color: #A0A0A0;
            margin-bottom: 20px;
            & span:nth-child(5){
                color: #21364D;
            }
            & span:nth-child(2n){
                margin: 0 8px;
            }
        }
        .user-portrait-s{
            display: flex;
            justify-content: space-between;
            .user-portrait-s-l{
                width: 21%;
                height:222px;
                background:rgba(255,255,255,1);
                border-radius:8px;
                margin-right: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                .user-portrait-s-l-i{
                   width: 121px;
                   height: 167px;
                   border: 1px dashed;
                   &img{
                       width: 100%;
                       height: 100%;
                   }
                }
            }
            .user-portrait-s-r{
                width:77.5%;
                height:222px;
                background:rgba(255,255,255,1);
                border-radius:8px;
                padding-left: 20px;
                .user-portrait-s-r-bq{
                    display: flex;
                    flex-wrap: wrap;
                }
                .user-portrait-s-r-bq-list{
                    display: flex;
                    margin-top: 20px;
                    width: 16.6%;
                    align-items: center;
                    // height: 21px;
                }
                .user-portrait-s-r-bq-list p{
                    margin: 0;
                    padding: 0;
                }
                .user-portrait-s-r-bq-list p:nth-child(1){
                    width:80px;
                    height:21px;
                    border-radius:3px;
                    border:1px solid rgba(28,147,153,1);
                    margin-right: 4px;
                    display: flex;
                    & span:nth-child(1){
                        color: #999999;
                        font-size: 12px;
                        display:block;
                        width: 36px;
                        margin-left: 10px;
                        line-height: 21px;
                    }
                    & span:nth-child(2){
                        color: #1C9399;
                        font-size: 12px;
                        line-height: 21px;
                    }
                }
            }
            .user-portrait-s-r h3{
                width:64px;
                height:22px;
                font-size:16px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:600;
                color:#21364D;
                margin: 20px 0;
            }
        }
        .user-portrait-t{
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            .user-portrait-t-l{
                width:21%;
                height:498px;
                background:rgba(255,255,255,1);
                border-radius:8px;
                h3{
                    color: #21364D;
                    margin: 20px 0 20px 20px;
                    font-weight: 600;
                    font-size: 16px;
                }
                /deep/.ant-calendar-picker{
                    width:90%;
                    margin-left: 20px;
                }
            }
            .user-portrait-t-r{
                width:77.5%;
                height:498px;
                background:rgba(255,255,255,1);
                border-radius:8px;
            }
        }
        /deep/.ant-table-thead > tr > th{
            background: #fff !important;
        }
        /deep/.ant-table-thead > tr > th, /deep/.ant-table-tbody > tr > td{
            padding-left: 30px;
        }
        /deep/.ant-table-tbody > tr:hover{
            // background: red !important;
            // transition:none 100s !important;
        }
    }
</style>