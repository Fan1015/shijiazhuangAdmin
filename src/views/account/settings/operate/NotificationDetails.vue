<template>
    <div class="user-details-dialog-content">
        <!-- 用户详情页面 -->
        <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
        <!-- :visible="visible" @update:visible="(bol)=>$emit('update:visible',bol)" -->
        <el-dialog
            title="详情"
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            >
            <div class="user-details-dialog-main">
                <div class="user-details-dialog-main-c">
                    <div class="user-details-dialog-main-c-f">
                        <div class="user-details-dialog-main-c-f-l">
                            <p>归属装备：</p>
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
                              ×××××
                            </p>
                        </div>
                        <div class="user-details-dialog-main-c-f-l example1">
                            <p>案例名称：</p>
                            <p>
                              火箭炮×××部件损坏
                            </p>
                        </div>
                        <div class="user-details-dialog-main-c-f-l ">
                            <p style="width:98px">对应装备名称：</p>
                            <p>
                              火箭炮
                            </p>
                        </div>
                        <div class="user-details-dialog-main-c-f-l example2">
                            <p>装备编号：</p>
                            <p>
                              JT100000-002034
                            </p>
                        </div>
                        <div class="user-details-dialog-main-c-f-l">
                            <p style="width:155px">对应故障部件或分系统：</p>
                            <p>
                              火箭炮×××
                            </p>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-c-s">
                        <div class="user-details-dialog-main-c-s-li">
                            <div>摘要：</div>
                            <div>高效做好重要和紧急的事情，腾出大量时间做重要不紧要的事情，尽快做好紧急不重要的事情，避免不重要不紧急的事情</div>
                        </div>
                        <div class="user-details-dialog-main-c-s-li">
                            <div>故障现象：</div>
                            <div>设计工作上最重要的是针对人们习以为常，认为理所当然的事物来做一些思考</div>
                        </div>
                        <div class="user-details-dialog-main-c-s-li">
                             <div></div>
                             <div>
                                 <p></p>
                                 <p></p>
                             </div>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-c-t">
                        <p>
                            <span style="width:170px">目前已完成故障排除描述：</span>
                            <span>我们为不懈的努力鼓掌，但按结果付酬</span>
                        </p>
                         <p>
                            <span>关键词：</span>
                            <span>预案、方案、动力、故障</span>
                        </p>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <span class="el-button-d" @click="$emit('fn', false)">关闭</span>
            </span>
        </el-dialog>


      
    </div>
</template>

<script>
export default {
    props: {
        // visible: {
        //     type:Boolean,
        //     default: ""
        // }
    },
    data() {
      return {
         dialogVisible: true
      };
    },
    methods: {
      handleClose() {
          
    },
}
}
</script>

<style lang="less" scoped>

/deep/.el-dialog{
    width: 47.2%;
    height: 600px;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    .el-dialog__header{
        padding: 0;
        
        /deep/.el-dialog__title{
            display: block;
            width:88px;
            height:70px;
            font-size:20px;
            color: #fff;
            font-weight:400;
            background: turquoise;
            background: url("../../../../assets/user-dialog-title.png") no-repeat;
            margin-left: 30px;
            text-align: center;
            line-height: 60px;
        }
        .el-dialog__headerbtn{
            display: none;
            // height: 0;
        }
    }
}
/deep/.el-dialog__footer{
    display: flex;
    justify-content: center;
    .el-button-d{
        display: block;
        text-align: center;
        width:68px;
        height:32px;
        border-radius:3px;
        font-size:14px;
        line-height: 32px;
        color: #FFFFFF;
        background: #1C9399;
    }
}
/deep/.el-dialog__body{
    flex: 1;
    padding: 0px 20px;
}
.user-details-dialog-main{
   
    display: flex;
    flex: 1;
    justify-content: center;
    font-family:PingFangSC-Regular,PingFang SC;
    // margin-left: 10%;
    .user-details-dialog-main-c{
        display: flex;
        flex-direction: column;
        width: 80%;
        .user-details-dialog-main-c-f{
            display: flex;
            flex-wrap: wrap;
            .user-details-dialog-main-c-f-l{
                width: 50%;
                display: flex;
                p:nth-child(1){
                    width:84px;
                    height:20px;
                    font-size:14px;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:20px;
                    text-align: right;
                }
                p:nth-child(2){
                    height:20px;
                    font-size:14px;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:20px;
                }
                .user-details-dialog-main-c-f-l-p{
                    color:#333333 !important;
                }
            }
            .example1{
                width: 48%;
            }
            .example2{
                width: 40%;
            }
        }

        .user-details-dialog-main-c-s{
            display: flex;
            flex-direction: column;
            .user-details-dialog-main-c-s-li{
                display:flex;
                align-items: center;
                margin-bottom: 20px;
                div:nth-child(1){
                   
                    display: block;
                    text-align: right;
                    width:84px !important;
                    height:20px;
                    font-size:14px;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:20px;
                }
                div:nth-child(2){
                    flex: 1;
                    font-size:14px;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:20px;
                    display: flex;
                    p{
                        width: 80px;
                        height: 80px;
                        background: #ccc;
                        margin-right: 10px;
                    }
                }
            }
        }
        .user-details-dialog-main-c-t{
            
           > p:nth-child(2){
                display: flex;
                span:nth-child(1){
                    text-align: right;
                    display: block;
                    width:80px;
                    height:20px;
                    font-size:14px;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:20px;
                }
                span:nth-child(2){
                    height:20px;
                    font-size:14px;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:20px;
                }
            }
        }
    }
    
}

    
</style>