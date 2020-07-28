<template>
  <div class="user-details-dialog-content">
    <el-dialog title="详情" :visible.sync="dialogVisible" :before-close="handleClose">
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
              <p>保障装备（设备）名称：</p>
              <p>
                ××××
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>装备编号：</p>
              <p>
                JT100000-002034
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>保障装备（设备）型号：</p>
              <p>
                ××××
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>应用对象：</p>
              <p>
                火炮
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>配套层级单位：</p>
              <p>
                随车配套
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>通讯地址：</p>
              <p>
                关于××××的维修方案
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>功能类别：</p>
              <p>
                维护保养
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>外形尺寸：</p>
              <p>
                9mm 9mm 9mm
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>单价：</p>
              <p>
                9元
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>研制单位：</p>
              <p>
                关于××××的维修方案
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>联系人：</p>
              <p>
                火炮
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>功能描述：</p>
              <p>
                关于××××的维修方案
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>联系电话：</p>
              <p>
                17329412120
              </p>
            </div>
          </div>
          <div class="qingdan">
            <div>工作原理：</div>
            <div>
              将已知的事物陌生化，更是一种创造
            </div>
          </div>
          <div class="qingdan">
            <div>设备照片：</div>
            <div class="qingdan-img">
              <p><img src="../../../../assets/shebei1.png" alt="" srcset="" /></p>
              <p><img src="../../../../assets/shebei2.png" alt="" srcset="" /></p>
              <p><img src="../../../../assets/shebei1.png" alt="" srcset="" /></p>
              <p><img src="../../../../assets/shebei2.png" alt="" srcset="" /></p>
            </div>
          </div>
        </div>
      </div>
      <div class="weixiuplan">
        <div class="weixiuplan-top">
          <div class="weixiuplan-top-line"></div>
          <div class="weixiuplan-top-title">
            主观评价
          </div>
        </div>
        <div class="">
          <div class="user-details-dialog-main">
            <div class="user-details-dialog-main-c">
              <div class="user-details-dialog-main-c-f">
                <div class="user-details-dialog-main-c-f-l">
                  <p>技术文档：</p>
                  <p>
                    关于保障设备技术文档××××××
                  </p>
                </div>
                <div class="user-details-dialog-main-c-f-l">
                  <p>主观评价：</p>
                  <p>
                    好
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="weixiuplan-foot">
            <div class="user-details-dialog-main">
              <div class="user-details-dialog-main-c">
                <div class="user-details-dialog-main-c-f">
                  <div class="user-details-dialog-main-c-f-l">
                    <p>使用频率：</p>
                    <p>
                      经常
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l">
                    <p>准确率：</p>
                    <p>
                      基本准确
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l shenbao">
                    <p>性价比：</p>
                    <p>
                      ××××
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l weixiu">
                    <p>人机工程评价：</p>
                    <p>
                      ××××
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l">
                    <p>工作效率：</p>
                    <p>
                      ××××
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l">
                    <p>有无其他相同或相似功能设备：</p>
                    <p>
                      ××××
                    </p>
                  </div>
                   <div class="user-details-dialog-main-c-f-l">
                    <p>改进建议：</p>
                    <p>
                      ××××
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l">
                    <p>其他建议：</p>
                    <p>
                      ××××
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div slot="footer" class="dialog-footer">
              <div class="el-button-d" @click="$emit('fn', false)">关闭</div>
            </div>
          </div>
        </div>
      </div>
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
    }
  },
  methods: {
    handleClose() {}
  }
}
</script>

<style lang="less" scoped>
/deep/.el-dialog {
  width: 47.2%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  .el-dialog__header {
    padding: 0;

    /deep/.el-dialog__title {
      display: block;
      width: 88px;
      height: 70px;
      font-size: 20px;
      color: #fff;
      font-weight: 400;
      background: turquoise;
      background: url('../../../../assets/user-dialog-title.png') no-repeat;
      margin-left: 30px;
      text-align: center;
      line-height: 60px;
    }
    .el-dialog__headerbtn {
      display: none;
      // height: 0;
    }
  }
}
/deep/.el-dialog > .el-dialog__body {
  padding: 0;
}

.dialog-footer {
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding: 40px 0 20px 0;
}
.el-button-d {
  width: 68px;
  height: 32px;
  color: #fff;
  text-align: center;
  background: #1c9399;
  border-radius: 3px;
  line-height: 32px;
  margin-right: 20px;
  cursor: pointer;
}
/deep/.el-dialog__body {
  flex: 1;
  padding: 0px 20px;
}
.user-details-dialog-main {
  display: flex;
  flex: 1;
  justify-content: center;
  // margin-left: 10%;
  .user-details-dialog-main-c {
    display: flex;
    flex-direction: column;
    width: 90%;
    .user-details-dialog-main-c-f {
      display: flex;
      flex-wrap: wrap;
      .user-details-dialog-main-c-f-l {
        width: 50%;
        display: flex;
        p:nth-child(1) {
          width: 200px;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
          text-align: right;
        }
        p:nth-child(2) {
          flex: 1;
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .user-details-dialog-main-c-f-l-p {
          color: #333333 !important;
        }
      }
    }
    .usedetails,
    .qingdan,
    .beijian,
    .beizhu {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      > div:first-child {
        width: 200px;
        text-align: right;
        color: rgba(153, 153, 153, 1);
        font-size: 14px;
      }
      > div:last-child {
        flex: 1;
      }
      .qingdan-img {
        display: flex;
        > p {
            margin-right: 12px;
          > img {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
  }
}

// 维修方案样式
.weixiuplan {
  &-top {
    margin: 30px 0 20px 50px;
    display: flex;
    align-items: center;
    &-line {
      width: 2px;
      height: 20px;
      background: rgba(28, 147, 153, 1);
      margin: 0 10px 0 70px;
    }
    &-title {
      font-size: 16px;
      color: rgba(51, 51, 51, 1);
    }
  }
  &-foot {
    background: rgba(235, 246, 246, 1);
    padding-top: 10px;
  }
}
</style>
