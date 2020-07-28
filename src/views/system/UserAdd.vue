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
                        <label for="" class="user-details-dialog-main-l-n">姓名:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">昵称:</label>
                        <select class="user-details-dialog-main-l-sel">
                            <option class="user-details-dialog-main-l-sel-o" value="jack">Jack</option>
                            <option class="user-details-dialog-main-l-sel-o" value="lucy">Lucy</option>
                            <option class="user-details-dialog-main-l-sel-o" value="disabled">Disabled</option>
                            <option class="user-details-dialog-main-l-sel-o" value="Yiminghe">yiminghe</option>
                        </select>
                        <!-- <a-select defaultValue="lucy" style="width: 120px" @change="handleChange">
                            <a-select-option value="jack">Jack</a-select-option>
                            <a-select-option value="lucy">Lucy</a-select-option>
                            <a-select-option value="disabled" disabled>Disabled</a-select-option>
                            <a-select-option value="Yiminghe">yiminghe</a-select-option>
                        </a-select> -->
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">出生年月:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">出生地:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">工作单位:</label>
                        <input class="user-details-dialog-main-l-i" type="text" placeholder="数据源1-1">
                    </div>
                    <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">工作岗位:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">军线:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">手机:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">QQ:</label>
                        <input type="text" placeholder="数据源1-1">
                    </div>
                     <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">部队通信地址:</label>
                        <input class="user-details-dialog-main-l-i" type="text" placeholder="数据源1-1">
                    </div>
                    <div class="user-details-dialog-main-l">
                        <label for="" class="user-details-dialog-main-l-n">现从事工作专业:</label>
                        <input class="user-details-dialog-main-l-i" type="text" placeholder="数据源1-1">
                    </div>
                </div>
            </div>


            <div class="user-details-dialog-main-b">
               <div class="user-details-dialog-main">
                    <div class="user-details-dialog-main-c">
                        <div class="user-details-dialog-main-l">
                            <label for="" class="user-details-dialog-main-l-n">曾从事工作专业:</label>
                            <input type="text" placeholder="数据源1-1">
                        </div>
                        <div class="user-details-dialog-main-l">
                            <label for="" class="user-details-dialog-main-l-n">从业时间:</label>
                            <input type="text" placeholder="数据源1-1">
                        </div>
                        <div class="user-details-dialog-main-l">
                            <label for="" class="user-details-dialog-main-l-n">毕业院校:</label>
                            <input type="text" placeholder="数据源1-1">
                        </div>
                        <div class="user-details-dialog-main-l">
                            <label for="" class="user-details-dialog-main-l-n">所学专业:</label>
                            <input type="text" placeholder="数据源1-1">
                        </div>
                        <div class="user-details-dialog-main-l">
                            <label for="" class="user-details-dialog-main-l-n">感兴趣内容:</label>
                            <input type="text" placeholder="数据源1-1">
                        </div>
                        <div class="user-details-dialog-main-l">
                            <a-checkbox-group name="checkboxgroup" :options="plainOptions" v-model="value"/>
                        </div>
                        <div class="user-details-dialog-main-l">
                            <label for="" class="user-details-dialog-main-l-n">积分等级:</label>
                            <input type="text" placeholder="数据源1-1">
                        </div>
                        <div class="user-details-dialog-main-l">
                            <label for="" class="user-details-dialog-main-l-n">注册时间:</label>
                            <input type="text" placeholder="数据源1-1">
                        </div>
                        <div class="user-details-dialog-main-l" >
                            <label for="" class="user-details-dialog-main-l-n">状态:</label>
                            <el-select v-model="value1" placeholder="请选择" >
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    
               </div>

               <div class="dialog-footer">
                    <span class="el-button-d" @click="$emit('fn', false)">关闭</span>
                </div>
            </div>
            
        </el-dialog>


      
    </div>
</template>

<script>
export default {
    data() {
      return {
        dialogVisible: true,
        plainOptions:['user:add', 'user:update', 'use:list','role:add', 'role:update'],
        value: [],
        options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            value1: ''
      
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
// .user-details-dialog-content{
//     width: 47.2%;
//     height: 132.87%;
//     background: #EBF6F6;
// }
/deep/.el-dialog{
    width: 47.2%;
    height: 132.87%;
    // border-radius:20px;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
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
    padding: 0 0px;
    flex: 1;
}
.user-details-dialog-main{
    // background: #F4F4F4;
    border-radius:20px ;    
    display: flex;
    flex: 1;
    // justify-content: center;
     margin-left: 22.74%;
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
                width:112px;
                color: #666666;
                text-align: right;
                margin-right: 10px;
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
            .user-details-dialog-main-l-sel{
                width:192px;
                height:32px;
                background:rgba(255,255,255,1);
                border-radius:3px;
                border:1px solid rgb(153, 153, 153);
                padding-left: 10px;
                
            }
            .user-details-dialog-main-l-sel-o:focus{
                color: #fff;
                background: #fff;
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

//曾经从事的

.user-details-dialog-main-b{
    background: #EBF6F6;
    display: flex;
    flex-direction: column;
    height: 52%;

    .user-details-dialog-main{
        margin-left: 22.74%;
        .user-details-dialog-main-c{
       
        // background: chartreuse;
        display: flex;
        flex-direction: column;
        .user-details-dialog-main-l{
            margin-bottom: 0px;
            margin-top: 20px;
            font-size: 14px;
            // color: #999;
            display: flex;
            align-items: center;
            font-size: 14px;
            // justify-content: center;
            // color: #333333;
            .user-details-dialog-main-l-n{
                width:112px;
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
            &:nth-child(6){
                margin-left: 122px;
                width: 60.2%;
                display: flex;
                flex-wrap: wrap;
            }
            /deep/.ant-checkbox-group-item:nth-child(4){
                margin-right: 10px;
            }
        }
    }
    }
    .dialog-footer{
        margin-bottom:20px ;
        display: flex;
        justify-content: center;
        .el-button-d{
            // display: flex;
            // margin-right: 50px;
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


    /deep/.el-input__inner{
        width:192px;
        height:32px;
        background:rgba(255,255,255,1);
        border-radius:3px;
        border:1px solid rgb(153, 153, 153);
        color: #333 !important;
        padding-left: 10px;
    }
    /deep/.el-input__inner::placeholder{
        color: #333 !important;
    }
    /deep/.el-input__suffix{
        line-height: 45px;
    }
}
</style>