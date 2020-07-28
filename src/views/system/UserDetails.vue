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
                    <div class="user-details-dialog-main-l">
                       <div>
                            <span>姓名: </span>
                            <span>admin</span>
                       </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>昵称: </span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>出生年月: </span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>出生地: </span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>工作单位: </span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>工作岗位: </span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>军线: </span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>手机: </span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>QQ: </span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>部队通信地址: </span>
                            <span>17611011111@163.com</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>emali: </span>
                            <span>954747217@qq.com</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>现从事工作专业: </span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>从业时间: </span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>毕业院校：</span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>所学专业：</span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>感兴趣内容：</span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>积分等级：</span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>注册时间：</span>
                            <span>admin</span>
                        </div>
                    </div>
                    <div class="user-details-dialog-main-l">
                        <div>
                            <span>状态：</span>
                            <span>admin</span>
                        </div>
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
    height: 66.7%;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
            background: url("../../assets/user-dialog-title.png") no-repeat;
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

.user-details-dialog-main{
    display: flex;
    justify-content: center;
    margin-left: 10%;
    .user-details-dialog-main-c{
        // width: 90%;
        // background: chartreuse;
        display: flex;
        flex-wrap: wrap;
        .user-details-dialog-main-l{
            width: 50%;
            margin-bottom: 20px;
            font-size: 14px;
            color: #999;
            display: flex;
            // justify-content: center;
            div{
                display: flex;
            }
            & span:nth-child(2){
                flex: 1;
                color: #333333;
            }
            span:nth-child(1){
                width: 70px;
                display: flex;
                justify-content: flex-end;
                margin-right: 5px;
                font-size: 14px;
            }
            &:nth-child(n){
                // width: 45%;
            }
            &:nth-child(2n){
                // width: 55%;
            }
            &:nth-child(2n) span:nth-child(1){
                width: 112px;
                display: flex;
                justify-content: flex-end;
            }
        }
    }
    
}
    
</style>