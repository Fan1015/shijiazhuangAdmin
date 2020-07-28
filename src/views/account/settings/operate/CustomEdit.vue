<template>
    <div class="customEdit" style="height:100%">
        <!-- 保障装备修改 -->
        <div class="customEdit-header" style="margin-bottom: 20px">
            <Breadcrumb></Breadcrumb>
        </div>
        <div class="customEdit-main">
            <h3>
                <p></p>
                <p>基本信息</p>
            </h3>
            <div class="customEdit-main-c">
                <div class="customEdit-main-c-list">
                    <span>器材代：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器代码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器材代码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器材代码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器材代码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器材代码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器码：</span>
                    <a-input class="customEdit-main-c-list-i" style="width:192px; margin-right:5px;"></a-input>
                    <i style="font-style:normal; color:#999;">元</i>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器材代码：</span>
                    <a-input class="customEdit-main-c-list-i" style="width:192px; margin-right:5px;"></a-input>
                    <i style="font-style:normal ;color:#999;">千克</i>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器材4代码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器材码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器材代码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器材代码：</span>
                    <a-input class="customEdit-main-c-list-i"></a-input>
                </div>
                <div class="customEdit-main-c-list">
                    <span>器材代码：</span>
                     <a-upload
                        name="avatar"
                        listType="picture-card"
                        class="avatar-uploader"
                        :showUploadList="false"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        :beforeUpload="beforeUpload"
                        @change="handleChange"
                    >
                        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                        <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'" />
                        <div class="ant-upload-text">上传图片</div>
                        </div>
                    </a-upload>
                    <i style="font-style:normal;margin-left:20px;color:#bbb;">(非必填项)</i>
                </div>
            </div>

            <div class="customEdit-main-footer"> 
                <span> 提交 </span>
                <span> 重置 </span>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
export default {
    components: {
        Breadcrumb,
    },
    data() {
    return {
      loading: false,
      imageUrl: '',
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
  },
}
</script>

<style lang="less" scoped>
    .customEdit-main{
        width: 100%;
        height: 97%;
        background: #fff;
        padding: 40px;
        h3{
            display: flex;
            margin-bottom: 40px;
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
        .customEdit-main-c{
            margin-left: 10%;
        }

        .customEdit-main-c-list{
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            span{
                display: block;
                width: 100px;
                text-align: right;
                margin-right: 5px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:20px;
            }
            .customEdit-main-c-list-i{
                width: 320px;
            }
        }

    }

    /deep/.ant-upload.ant-upload-select-picture-card{
        background:#fff;
    }

    //
    .customEdit-main-footer{
        display: flex;
        margin-left: 25%;
        margin-top: 40px;
        span:nth-child(1){
            width:72px;
            height:29px;
            background:rgba(28,147,153,1);
            border-radius:3px;
            text-align: center;
            line-height: 29px;
            color: #fff;
            margin-right: 40px;
        }
         span:nth-child(2){
            width:60px;
            height:29px;
            border-radius:3px;
            border:1px solid rgba(9,123,124,1);
            text-align: center;
            line-height: 29px;
            color: rgba(9,123,124,1);
        }
    }
</style>