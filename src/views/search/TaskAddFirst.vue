<template>
    <div style="background:#fff; padding:40px; height:100%;">
            <h3>
                <p></p>
                <p>录入任务</p>
            </h3>
            <div class="EntryTaskAdd-header-s-main">
                <div class="EntryTaskAdd-header-s-main-l">
                    <p class="fist-p">
                        <span>*</span>
                        <span>任务名称:</span>
                    </p>
                    <a-input class="fist-p-input" placeholder="Basic usage" />
                </div>
                <div class="EntryTaskAdd-header-s-main-l">
                    <p>
                        
                        <span>资源库:</span>
                    </p>
                    <a-select defaultValue="lucy" style="width: 499px" @change="handleChange">
                        <a-select-option value="jack">Jack</a-select-option>
                        <a-select-option value="lucy">Lucy</a-select-option>
                        <a-select-option value="disabled" >Disabled</a-select-option>
                        <a-select-option value="Yiminghe">yiminghe</a-select-option>
                    </a-select>
                </div>
                <div class="EntryTaskAdd-header-s-main-l">
                    <p>
                        
                        <span>资源库:</span>
                    </p>
                    <a-select defaultValue="lucy" style="width: 499px" @change="handleChange">
                        <a-select-option value="jack">Jack</a-select-option>
                        <a-select-option value="lucy">Lucy</a-select-option>
                        <a-select-option value="disabled" >Disabled</a-select-option>
                        <a-select-option value="Yiminghe">yiminghe</a-select-option>
                    </a-select>
                </div>
                <div class="EntryTaskAdd-header-s-main-l">
                    <p>
                        
                        <span>录入频率:</span>
                    </p>
                    <a-select defaultValue="lucy" style="width: 499px" @change="handleChange">
                        <a-select-option value="jack">Jack</a-select-option>
                        <a-select-option value="lucy">Lucy</a-select-option>
                        <a-select-option value="disabled" >Disabled</a-select-option>
                        <a-select-option value="Yiminghe">yiminghe</a-select-option>
                    </a-select>
                </div>
                <div class="EntryTaskAdd-header-s-main-l">
                    <p>   
                        <span>首次启动时间:</span>
                    </p>
                    <div class="EntryTaskAdd-header-s-main-l-r">
                        <a-checkbox @change="onChange">Checkbox</a-checkbox>
                        <a-checkbox @change="onChange">Checkbox</a-checkbox>
                        <a-date-picker  />
                    </div>
                </div>

            </div>
            <div class="EntryTaskAdd-header-s-footer">
                <span>取消</span>
                <span @click="nextBu">下一步</span>
            </div>
        </div>
</template>

<script>
export default {
    methods: {
        nextBu() {
            this.$router.push({name:'TaskAddSecond'})
        }
    }
}
</script>

<style lang="less" scoped>
     .EntryTaskAdd-header-s{
        padding: 40px;
        margin-top: 20px;
        width:100%;
        height:75%;
        background:rgba(255,255,255,1);
        border-radius:8px;
        h3{
            display: flex;
            margin-bottom: 88px;
             p:nth-child(1){
                width:2px;
                height:20px;
                background:rgba(28,147,153,1);
                margin-right: 10px;
            }
         p:nth-child(2){
            width:64px;
            height:22px;
            font-size:16px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:22px;
        }
        }
        
        .EntryTaskAdd-header-s-main{
            margin-left: 15%;
            &-l{
                display: flex;
                margin-bottom: 16px;
                p{
                    margin: 0;
                    width:98px;
                    text-align: right;
                    margin-right: 10px;
                    line-height:32px ;
                    span{
                        
                        height:20px;
                        font-size:14px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height:20px;
                    }
                }

                .fist-p{
                    display: flex;
                    align-items: center;
                    width: 98px;
                    margin: 0;
                    margin-right: 10px;
                    justify-content: flex-end;
                    align-items: center;
                    span:nth-child(1){
                        color: #FF3000;
                        margin-right: 3px;
                    }
                    span:nth-child(2){
                        font-size:14px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height:20px;
                    }
                   
                }
                .fist-p-input{
                     width:499px !important;
                }
            }
        }
    }

    .EntryTaskAdd-header-s-footer{
        margin-top: 60px;
        display: flex;
        margin-left: 30%;
        span{
            display: block;
            width:68px;
            height:32px;
            border-radius:3px;
            border:1px solid rgba(28,147,153,1);
            color: rgba(28,147,153,1);
            text-align: center;
            line-height: 32px;
        }
        span:nth-child(2){
            display: block;
            width:68px;
            height:32px;
            background:rgba(28,147,153,1);
            border-radius:3px;
            color: #fff;
            margin-left: 120px;
        }
    }
</style>