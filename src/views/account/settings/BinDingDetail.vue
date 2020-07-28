<template>
  <div class="dataSourceWindow">
    <!-- 详情 -->
    <div class="windowBox">
      <el-dialog :visible.sync="dialogVisibleBinDetail">
        <div class="dialog-lebel">
          <img src="@/assets/user-dialog-title.png" alt />
          <p>详情</p>
        </div>
        <div class="zbinfor">
          <div class="zbinfor-contant">
            <div class="zbinfor-contant-item">
              <h1>录入人：</h1>
              <h2>木兰长江</h2>
            </div>
            <div class="zbinfor-contant-item">
              <h1>录入时间：</h1>
              <h2>2020年4月23日</h2>
            </div>
            <div class="zbinfor-contant-item1">
              <h1>装备图片：</h1>
              <div class="zbinfor-contant-item1-img">
                <div class="zbinfor-contant-item1-img-box">
                  <img src="@/assets/shebei1.png" alt />
                </div>
                <div class="zbinfor-contant-item1-img-box">
                  <img src="@/assets/shebei2.png" alt />
                </div>
              </div>
            </div>
            <div class="zbinfor-contant-item">
              <h1>装备描述：</h1>
              <h2>在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试</h2>
            </div>
            <div class="zbinfor-contant-item">
              <h1>保养类别：</h1>
              <div class="zbinfor-contant-item-texts">
                <h1>
                  <span>日保养</span>
                </h1>
                <h1>
                  <span>第一步</span>在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试
                </h1>
                <h1>
                  <span>第二部</span>在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试
                </h1>
              </div>
            </div>
          </div>
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
      dialogVisibleBinDetail: true
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
  methods: {}
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

// 装备详情
/deep/.el-dialog__header {
  padding: 0;
}
.zbinfor {
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  padding: 20px 100px;
  &-contant {
    margin-top: 30px;
    &-item:first-child {
      margin-top: 0;
    }
    &-item {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 20px;
      > h1 {
        width: 74px;
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        font-weight: 400;
        line-height: 20px;
      }
      > h2 {
        flex: 1;
        font-size: 14px;
        color: rgba(51, 51, 51, 1);
        font-weight: 400;
        line-height: 20px;
      }
      &-texts {
        flex: 1;
        > h1:first-child {
          margin-bottom: 10px;
        }
        > h1 {
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          font-weight: 400;
          line-height: 20px;
          margin-bottom: 30px;
          > span {
            color: rgba(28, 147, 153, 1);
            margin-right: 5px;
          }
        }
      }
    }
    &-item1 {
      margin-top: 20px;
      > h1 {
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        font-weight: 400;
        line-height: 20px;
      }
      &-img {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-top: 20px;
        &-box {
          width: 180px;
          height: 120px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>