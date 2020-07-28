<template>
    <div class="user-details-dialog-content">
        <!-- 用户详情页面 -->
        <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
        <el-dialog
            title="编辑"
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            >
            <div class="user-details-dialog-main">
                <div class="user-details-dialog-main-c">
                    <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">权限名称:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">权限链接:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">权限指数:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">录入人:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">录入时间:</label>
                        <input class="user-details-dialog-main-l-i" type="text" placeholder="数据源1-1">
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <span class="el-button-d"  @click="$emit('fn', false)">关闭</span>
                <span class="el-button-d"  @click="$emit('fn', false)">提交</span>
            </span>
        </el-dialog>


      
    </div>
</template>

<script>
export default {
    data() {
      return {
        dialogVisible: true
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
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
        // display: flex;
        margin-right: 50px;
        display: inline-block;
        text-align: center;
        color:#1C9399 ;
        width:68px;
        height:32px;
        border-radius:3px;
        font-size:14px;
        line-height: 32px;
        border: 1px solid #1C9399;
        &:nth-child(2){
            margin-right: 0;
        }
    }
    .el-button-d:hover{
        color: #FFFFFF;
        background: #1C9399;
    }
}
/deep/.el-dialog__body{
    flex: 1;
}
.user-details-dialog-main{
    display: flex;
    flex: 1;
    // justify-content: center;
     margin-left: 25.74%;
    .user-details-dialog-main-c{
       
        // background: chartreuse;
        display: flex;
        flex-direction: column;
        .user-details-dialog-main-l{
            margin-bottom: 20px;
            font-size: 14px;
            // color: #999;
            display: flex;
            align-items: center;
            font-size: 14px;
            // justify-content: center;
            // color: #333333;
            .user-details-dialog-main-l-n{
                width: 70px;
                color: #666666;
            }
            input{
                width:192px;
                height:32px;
                background:rgba(255,255,255,1);
                border-radius:3px;
                border:1px solid rgb(153, 153, 153);
                padding-left: 10px;
                outline: none;
            }
            // .user-details-dialog-main-l-i{
                
            //     color: red !important;
            // }
            input::placeholder{
                 color: #333 !important;
            }
        }
    }
    
}
    
</style>