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
                            <p>归属装备：</p>
                            <p>
                              火箭炮动力问题
                            </p>
                        </div>
                        <div class="user-details-dialog-main-c-f-l">
                            <p>归属装备：</p>
                            <p>
                              火箭炮动力问题
                            </p>
                        </div>
                        <div class="user-details-dialog-main-c-f-l">
                            <p>所属分系统：</p>
                            <p>
                              火箭炮动力问题
                            </p>
                        </div>
                        <div class="user-details-dialog-main-c-f-l">
                            <p>归属装备：</p>
                            <p>
                              火箭炮动力问题
                            </p>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-c-s">
                        <div class="user-details-dialog-main-c-s-li">
                            <div>知识摘要：</div>
                            <div>但无论是哪种类型用户，都一定会有同种共性——好奇心。好奇心足以牵引着一个人对所产生事物的关注程度和好感度，从而使得他由被动接受信息直接转型为主动了解信息</div>
                        </div>
                        <div class="user-details-dialog-main-c-s-li">
                            <div>知识摘要：</div>
                            <div>但无论是哪种类型用户，都一定会有同种共性——好奇心。好奇心足以牵引着一个人对所产生事物的关注程度和好感度，从而使得他由被动接受信息直接转型为主动了解信息</div>
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
                            <span>关键词：</span>
                            <span>预案、方案、动力、故障</span>
                        </p>
                        <p>
                            <span>关键词：</span>
                            <span>张三</span>
                        </p>
                         <p>
                            <span>录入时间：</span>
                            <span>预案、方案、动力、故障</span>
                        </p>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
            <span class="el-button-d" @click="$emit('fn',false)">关闭</span>
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
        color:#1C9399 ;
        width:68px;
        height:32px;
        border-radius:3px;
        font-size:14px;
        line-height: 32px;
        border: 1px solid #1C9399;
    }
    .el-button-d:hover{
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
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:20px;
                    text-align: right;
                }
                p:nth-child(2){
                    height:20px;
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(28,147,153,1);
                    line-height:20px;
                }
                .user-details-dialog-main-c-f-l-p{
                    color:#333333 !important;
                }
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
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:20px;
                }
                div:nth-child(2){
                    flex: 1;
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFang SC;
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
            p{
                display: flex;
                span:nth-child(1){
                    text-align: right;
                    display: block;
                    width:80px;
                    height:20px;
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:20px;
                }
                span:nth-child(2){
                    height:20px;
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:20px;
                }
            }
        }
    }
    
}
    
</style>