<template>
  <div class="dataSourceWindow">
    <!-- 添加 -->
    <div class="windowBox">
      <el-dialog :visible.sync="dialogVisible">
        <div class="dialog-lebel">
          <img src="../../assets/user-dialog-title.png" alt />
          <p>添加</p>
        </div>
        <el-form :model="form">
          <el-form-item label="词组名称：" :label-width="formLabelWidth">
            <el-input v-model="form.formInput" autocomplete="off" @input="formInput"></el-input>
          </el-form-item>
          <el-form-item label="新增同义词：" :label-width="formLabelWidth">
            <el-input v-model="form.serverIp" autocomplete="off" @input="serverIp"></el-input>
            <el-input
              v-model="form.serverPort"
              autocomplete="off"
              @input="serverPort"
              style="margin-top:10px;"
            ></el-input>
          </el-form-item>
          <el-form-item label="备注说明：" :label-width="formLabelWidth">
            <a-textarea
              placeholder="备注信息"
              v-model="form.serverPort"
              :rows="4"
              @input="remarkText"
              style="width:359px;height:89px;resize:none;"
            />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="$emit('fn', false)">取 消</el-button>
          <el-button type="primary" @click="$emit('fn',false)">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 添加 -->
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
      dialogVisible: true,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
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
    // 词组名称
    formInput(res) {
      console.log(res)
    },
    // 新增同义词
    serverIp(res) {
      console.log(res)
    },
    // 新增同义词
    serverPort(res) {
      console.log(res)
    },
    // 备注说明
    remarkText(res) {
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
/deep/.el-dialog {
  padding-top: 30px;
  width: 680px;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
}
/deep/.el-input__inner {
  width: 192px;
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
.fileUpload/deep/.el-form-item__content > span {
  width: 192px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row-reverse;
  background: transparent;
  border-radius: 3px;
  border: 1px solid rgba(230, 230, 230, 1);
  .ant-upload,
  .ant-btn,
  .ant-upload-list-item-name,
  .ant-upload-list.ant-upload-list-text span {
    border: none;
  }
  .ant-btn {
    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
    background: transparent;
  }
  .ant-upload-list-item.ant-upload-list-item-done.ant-upload-list-item-list-type-text {
    width: 148px;
    margin: 0;
  }
}
/deep/.el-dialog__close.el-icon.el-icon-close::before {
  content: none;
}
</style>