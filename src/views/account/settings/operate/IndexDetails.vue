<template>
  <div class="user-details-dialog-content">
    <!-- 用户详情页面 -->
    <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
    <!-- :visible="visible" @update:visible="(bol)=>$emit('update:visible',bol)" -->
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
              <p>归属装备：</p>
              <p>
                火箭炮动力问题
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>录入人：</p>
              <p>
                火箭炮动力问题
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>故障时间：</p>
              <p>
                火箭炮动力问题
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>录入时间：</p>
              <p>
                火箭炮动力问题
              </p>
            </div>
            <div class="user-details-dialog-main-c-f-l">
              <p>故障部件：</p>
              <p>
                动力系统
              </p>
            </div>
          </div>
          <div class="user-details-dialog-main-c-s">
            <div class="user-details-dialog-main-c-s-li">
              <div>故障现象：</div>
              <div>
                今天很残酷，明天更残酷，后天很美好。但是绝大部分人是死在明天晚上，只有那些真正的英雄，才能见到后天的太阳
              </div>
            </div>
            <div class="user-details-dialog-main-c-s-li">
              <div></div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          <div class="usedetails-ouside">
            <div class="usedetails">
              <div>保障设(装)备使用情况：</div>
              <div>
                今天很残酷，明天更残酷，后天很美好。但是绝大部分人是死在明天晚上，只有那些真正的英雄，才能见到后天的太阳
              </div>
            </div>
          </div>
          <div class="qingdan">
            <div>保障设(装)备清单：</div>
            <div>
              今天很残酷，明天更残酷，后天很美好。但是绝大部分人是死在明天晚上，只有那些真正的英雄，才能见到后天的太阳
            </div>
          </div>
        </div>
      </div>
      <div class="weixiuplan">
        <div class="weixiuplan-top">
          <div class="weixiuplan-top-line"></div>
          <div class="weixiuplan-top-title">
            维修方案
          </div>
        </div>
        <div class="">
          <div class="weixiuplan-foot">
            <div class="user-details-dialog-main">
              <div class="user-details-dialog-main-c">
                <div class="user-details-dialog-main-c-s">
                  <div class="user-details-dialog-main-c-s-li">
                    <div>维修方法：</div>
                    <div><span>第一步</span>在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试</div>
                  </div>
                  <div class="user-details-dialog-main-c-s-li">
                    <div></div>
                    <div><span>第二步</span>在项目伊始时做一个用户研究的作用好过于在项目落地后再对50个用户进行测试</div>
                  </div>
                </div>
                <div class="user-details-dialog-main-c-f">
                  <div class="user-details-dialog-main-c-f-l">
                    <p>维修工具：</p>
                    <p>
                      扳手
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l">
                    <p>维修小时数：</p>
                    <p>
                      5小时
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l shenbao">
                    <p>申报人：</p>
                    <p>
                      5人
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l weixiu">
                    <p>维修人员数：</p>
                    <p>
                      5人
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l">
                    <p>保修单位：</p>
                    <p>
                      火箭炮
                    </p>
                  </div>
                  <div class="user-details-dialog-main-c-f-l"></div>
                </div>
                <div class="beijian">
                  <div>备件使用情况：</div>
                  <div>
                    今天很残酷，明天更残酷，后天很美好。但是绝大部分人是死在明天晚上，只有那些真正的英雄，才能见到后天的太阳
                  </div>
                </div>
                <div class="beizhu">
                  <div>备注：</div>
                  <div>
                    今天很残酷，明天更残酷，后天很美好。但是绝大部分人是死在明天晚上，只有那些真正的英雄，才能见到后天的太阳
                  </div>
                </div>
              </div>
            </div>
            <div slot="footer" class="dialog-footer">
              <div class="el-button-d" @click="$emit('fn',false)">关闭</div>
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
          width: 170px;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
          text-align: right;
        }
        p:nth-child(2) {
          flex:1;
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
        }
        .user-details-dialog-main-c-f-l-p {
          color: #333333 !important;
        }
      }
    }

    .user-details-dialog-main-c-s {
      display: flex;
      flex-direction: column;
      &-li:first-child {
        // margin-bottom: 20px;
      }
      .user-details-dialog-main-c-s-li {
        display: flex;
        align-items: center;
        div:nth-child(1) {
          display: block;
          text-align: right;
          width: 170px !important;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
        }
        div:nth-child(2) {
          flex: 1;
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
          display: flex;
          margin-bottom: 10px;
          p {
            width: 80px;
            height: 80px;
            background: #ccc;
            margin-right: 10px;
          }
            > span{
                color: #1C9399;
            }
        }
      }
    }
    .user-details-dialog-main-c-t {
      p {
        display: flex;
        span:nth-child(1) {
          text-align: right;
          display: block;
          width: 80px;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
        }
        span:nth-child(2) {
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
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
        width: 170px;
        text-align: right;
      }
      > div:last-child {
        flex: 1;
      }
    }
  }
}

// 维修方案样式
.weixiuplan {
  &-top {
    margin: 40px 0 20px 0;
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
    padding-top: 20px;
  }
}
</style>
