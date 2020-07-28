<template>
  <div class="dataSourceWindow">
    <!-- 详情 -->
    <div class="windowBox">
      <el-dialog :visible.sync="dialogVisibleDetail">
        <div class="dialog-lebel">
          <img src="../../assets/user-dialog-title.png" alt />
          <p>详情</p>
        </div>
        <div class="detail-text">
          <p>数据源名称：</p>
          <p>这是测试的数据源名称</p>
        </div>
        <div class="detail-text">
          <p>数据库类型：</p>
          <p>这是测试的数据源名称的数据库类型</p>
        </div>
        <div class="detail-text">
          <p>服务器IP：</p>
          <p>192.0.0.0</p>
        </div>
        <div class="detail-text">
          <p>服务器端口：</p>
          <p>3306</p>
        </div>
        <div class="detail-text">
          <p>数据库：</p>
          <p>mySql</p>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="$emit('fn', false)">关 闭</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 详情 -->
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue' //icon
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1758660_kp46faosao.js' // 在 iconfont.cn 上生成
})
export default {
  data() {
    return {
      dialogVisibleDetail: true,
      formLabelWidth: '120px',
    }
  },
  components: {
    IconFont
  },
  props: {
    winData: {
      type: [Array, Object],
      default: () => []
    }
  },
  mounted() {},
  methods: {
    // 数据源名称
    formInput(res) {
      console.log(res)
    },
    // 数据源类型
    formSelect(res) {
      console.log(res)
    },
    // 图片上传
    fileChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList)
      }
    },
    // 服务器IP
    serverIp(res) {
      console.log(res)
    },
    // 服务器端口
    serverPort(res) {
      console.log(res)
    },
    // 用户名
    userName(res) {
      console.log(res)
    },
    // 密码
    userPassword(res) {
      console.log(res)
    },
    // 数据库
    database(res) {
      console.log(res)
    }
  }
}
</script>

<style  lang="less" scoped>
/deep/.el-dialog__body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.dialog-lebel {
  position: absolute;
  top: 0;
  left: 30px;
}
.dialog-lebel p {
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
  position: absolute;
  top: 15px;
  left: 24px;
}
/deep/.dialog-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog-footer /deep/.el-button {
  width: 68px;
  height: 32px;
  padding: 0;
  background: rgba(28, 147, 153, 1);
  border-radius: 3px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 32px;
  border: none;
}
/deep/.el-dialog__close.el-icon.el-icon-close::before {
  content: none;
}
/deep/.el-dialog {
  padding-top: 30px;
  width: 680px;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
}
.detail-text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.detail-text p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 20px;
}
</style>