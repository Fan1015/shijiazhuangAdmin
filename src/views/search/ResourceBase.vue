<template>
  <div class="labelmanagement">
    <div class="labelmanagement-con">
      <!-- 左侧导航菜单 -->
      <div class="labelmanagement-nav-menu">
        <div class="labelmanagement-nav-menu-top">
          <p>
            <span>5</span>
            <span>资源库</span>
          </p>
          <p>
            <span>12</span>
            <span>资源表</span>
          </p>
        </div>
        <div
          class="components-input-demo-presuffix"
          style="margin:60px 0 0 20px; border-bottom:1px solid rgba(244,244,244,1); width:80%; height:35px;"
        >请输入要加载的资源</div>
        <div class="labelmanagement-nav-menu-con" style="margin-top:30px;">
          <a-menu
            mode="inline"
            :openKeys="openKeys"
            @openChange="onOpenChange"
            style="width: 100%"
            @click="handleClick"
          >
            <a-sub-menu key="sub1">
              <span slot="title">
                <span>一级菜单展开</span>
              </span>
              <a-menu-item key="1">二级菜单未选中</a-menu-item>
              <!-- <a-menu-item key="2">二级菜单选中</a-menu-item> -->
              <a-sub-menu key="sub2">
                <span slot="title">
                  <span>二级菜单选中</span>
                </span>
                <a-menu-item key="2">三级导航未选中</a-menu-item>
                <a-menu-item key="3">三级导航选中</a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title">
                <span>一级菜单展开</span>
              </span>
              <a-menu-item key="4">Option 5</a-menu-item>
              <a-menu-item key="5">Option 6</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub4">
              <span slot="title">
                <span>一级菜单展开</span>
              </span>
              <a-menu-item key="6">Option 9</a-menu-item>
              <a-menu-item key="7">Option 10</a-menu-item>
              <a-menu-item key="8">Option 11</a-menu-item>
              <a-menu-item key="9">Option 12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
        <!-- 增加编辑删除 -->
      </div>
      <!-- 右侧头部 -->

      <div class="weixiu-btm-center">
        <div class="center-title">
          <!-- 列名 -->
          <div class="center-title-left">
            <p>
              <span class="p-name">添加资源库</span>
              <a-input placeholder="请输入查询内容" class="center-title-left-input" />
            </p>
            <!-- 列名 -->
            <!-- 字段类型 -->
            <p>
              <span class="p-name">状态</span>
              <a-select
                labelInValue
                :defaultValue="{ key: '请输入' }"
                style="width: 120px ; color:rgba(128,128,128,1);"
                @change="selectChange2"
                class="center-title-left-select"
              >
                <a-select-option value="long">long</a-select-option>
                <a-select-option value="short">short</a-select-option>
              </a-select>
            </p>
          </div>
          <!-- 字段类型 -->
          <!-- 是否显示 -->

          <!-- 是否显示 -->
          <div class="btns">
            <span @click="searchList">查询</span>
            <span @click="resetSearch">重置</span>
            <span>添加资源库</span>
          </div>
        </div>
        <!-- 右侧卡片标签 -->
        <div class="labelmanagement-tag">
          
            <div class="labelmanagement-tag-list">
              <h3>
                <span>EMAIL</span>
                <span>0记录</span>
              </h3>
              <h3>
                <span>状态：发布</span>
                <span>已用空间：0kb</span>
              </h3>
              <div class="labelmanagement-tag-list-1">
                <p>已使用资源表</p>
                <div>
                  <span>邮件类---gli-test-2</span>
                </div>
              </div>
              <div class="labelmanagement-tag-list-2">
                <p class="labelmanagement-tag-list-h">已使用资源表</p>
                <div>
                  <p>
                    <span>邮件类---gli-test-2</span>
                  </p>
                  <p>
                    <span>
                      <icon-font type="icon-bianji" />
                      <i>编辑</i>
                    </span>
                    <span>
                      <icon-font type="icon-shanchu" />
                      <i>删除</i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="labelmanagement-tag-list">
              <h3>
                <span>EMAIL</span>
                <span>0记录</span>
              </h3>
              <h3>
                <span>状态：发布</span>
                <span>已用空间：0kb</span>
              </h3>
              <div class="labelmanagement-tag-list-1">
                <p>已使用资源表</p>
                <div>
                  <span>邮件类---gli-test-2</span>
                </div>
              </div>
              <div class="labelmanagement-tag-list-2">
                <p class="labelmanagement-tag-list-h">已使用资源表</p>
                <div>
                  <p>
                    <span>邮件类---gli-test-2</span>
                  </p>
                  <p>
                    <span>
                      <icon-font type="icon-bianji" />
                      <i>编辑</i>
                    </span>
                    <span>
                      <icon-font type="icon-shanchu" />
                      <i>删除</i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="labelmanagement-tag-list">
              <h3>
                <span>EMAIL</span>
                <span>0记录</span>
              </h3>
              <h3>
                <span>状态：发布</span>
                <span>已用空间：0kb</span>
              </h3>
              <div class="labelmanagement-tag-list-1">
                <p>已使用资源表</p>
                <div>
                  <span>邮件类---gli-test-2</span>
                </div>
              </div>
              <div class="labelmanagement-tag-list-2">
                <p class="labelmanagement-tag-list-h">已使用资源表</p>
                <div>
                  <p>
                    <span>邮件类---gli-test-2</span>
                  </p>
                  <p>
                    <span>
                      <icon-font type="icon-bianji" />
                      <i>编辑</i>
                    </span>
                    <span>
                      <icon-font type="icon-shanchu" />
                      <i>删除</i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          
          <div class="labelmanagement-tag-list">
            <h3>
              <span>EMAIL</span>
              <span>0记录</span>
            </h3>
            <h3>
              <span>状态：发布</span>
              <span>已用空间：0kb</span>
            </h3>
            <div class="labelmanagement-tag-list-1">
              <p>已使用资源表</p>
              <div>
                <span>邮件类---gli-test-2</span>
              </div>
            </div>
            <div class="labelmanagement-tag-list-2">
              <p class="labelmanagement-tag-list-h">已使用资源表</p>
              <div>
                <p>
                  <span>邮件类---gli-test-2</span>
                </p>
                <p>
                  <span>
                    <icon-font type="icon-bianji" />
                    <i>编辑</i>
                  </span>
                  <span>
                    <icon-font type="icon-shanchu" />
                    <i>删除</i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="labelmanagement-tag-list">
            <h3>
              <span>EMAIL</span>
              <span>0记录</span>
            </h3>
            <h3>
              <span>状态：发布</span>
              <span>已用空间：0kb</span>
            </h3>
            <div class="labelmanagement-tag-list-1">
              <p>已使用资源表</p>
              <div>
                <span>邮件类---gli-test-2</span>
              </div>
            </div>
            <div class="labelmanagement-tag-list-2">
              <p class="labelmanagement-tag-list-h">已使用资源表</p>
              <div>
                <p>
                  <span>邮件类---gli-test-2</span>
                </p>
                <p>
                  <span>
                    <icon-font type="icon-bianji" />
                    <i>编辑</i>
                  </span>
                  <span>
                    <icon-font type="icon-shanchu" />
                    <i>删除</i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="labelmanagement-tag-list">
            <h3>
              <span>EMAIL</span>
              <span>0记录</span>
            </h3>
            <h3>
              <span>状态：发布</span>
              <span>已用空间：0kb</span>
            </h3>
            <div class="labelmanagement-tag-list-1">
              <p>已使用资源表</p>
              <div>
                <span>邮件类---gli-test-2</span>
              </div>
            </div>
            <div class="labelmanagement-tag-list-2">
              <p class="labelmanagement-tag-list-h">已使用资源表</p>
              <div>
                <p>
                  <span>邮件类---gli-test-2</span>
                </p>
                <p>
                  <span>
                    <icon-font type="icon-bianji" />
                    <i>编辑</i>
                  </span>
                  <span>
                    <icon-font type="icon-shanchu" />
                    <i>删除</i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1772683_6480sr0hof.js' // 在 iconfont.cn 上生成
})

export default {
  components: {
    IconFont
  },
  data() {
    return {
      labledata: '某某标签',
      userName: '',
      rootSubmenuKeys: ['sub1', 'sub3', 'sub4'],
      openKeys: ['sub1'],
      tagList: [
        { title: '性别' },
        { title: '年龄' },
        { title: '户籍' },
        { title: '学历' },
        { title: '身高' },
        { title: '年龄' },
        { title: '年龄' }
      ]
    }
  },
  methods: {
    //menu菜单
    handleClick(e) {
      console.log('click ', e)
      this.current = e.key
    },
    searchList(res) {},
    resetSearch() {},
    // 列名
    selectChange1(res) {},
    // 字段类型
    selectChange2(res) {},
    emitEmpty() {
      this.$refs.userNameInput.focus()
      this.userName = ''
    },
    addMenu() {},
    editMenu() {},
    delMenu() {},
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.ant-menu {
  color: #000000 !important;
}
/deep/.ant-menu-inline,
.ant-menu-vertical,
/deep/.ant-menu-vertical-left {
  border-right: none;
}
.labelmanagement-con {
  display: flex;
  justify-content: space-between;
  .labelmanagement-nav-menu {
    background-color: #fff;
    width: 20%;
    &-top {
      width: 100%;
      text-align: center;
      > p:first-child {
        margin: 0;
        padding-top: 10px;
        font-size: 16px;
        color: rgba(102, 102, 102, 1);
      }
      > p:last-child {
        font-size: 14px;
        color: rgba(28, 147, 153, 1);
        margin-top: 5px;
      }
    }
    .components-input-demo-presuffix {
      margin-top: 20px;
      width: 100%;
      /deep/.ant-input-affix-wrapper {
        width: 85%;
        margin-left: 20px;
      }
      /deep/.ant-input {
        background: #f7f7f7;
      }
    }
    &-con {
      height: 600px;
      margin-top: 50px;
    }
    // 左侧导航菜单底部样式
    &-foot {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      > p {
        font-size: 12px;
        color: rgba(28, 147, 153, 1);
        > span {
          padding-left: 3px;
        }
      }
    }
  }
  // 右侧卡片样式
}

.labelmanagement-nav-menu-top {
  display: flex;
  margin-top: 30px;
  p {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    padding: 0 !important;
    span {
      height: 28px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(28, 147, 153, 1);
      line-height: 28px;
    }
    span:nth-child(2) {
      margin-top: 10px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 20px;
    }
  }
}

.weixiu-btm-center {
  width: 75%;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
}
.center-title {
  height: 100%;
  padding: 0 10px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .center-title-left {
    height: 32px;
    display: flex;
    // align-items: center;
    p {
      display: flex;
      align-items: center;
      margin: 0 !important;
      margin-right: 40px !important;
      .center-title-left-input {
        margin-left: 20px !important;
        width: 188px;
        height: 32px;
        border-radius: 3px;
        border: 1px solid rgba(220, 223, 230, 1);
      }
      .center-title-left-select {
        margin-left: 20px !important;
        width: 188px !important;
        border-radius: 3px !important;
        height: 32px !important;
        // border:1px solid rgba(220,223,230,1) !important;
      }
    }
  }
  .btns {
    display: flex;
    height: 32px;
    align-items: center;
    span {
      display: block;
      width: 68px;
      height: 32px;
      border-radius: 3px;
      border: 1px solid rgba(28, 147, 153, 1);
      text-align: center;
      line-height: 32px;
      color: rgba(28, 147, 153, 1);
      margin-right: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
    }
    span:hover {
      background: rgba(28, 147, 153, 1);
      color: #fff;
    }
    span:nth-child(3) {
      width: 102px;
      height: 24px;
      line-height: 24px;
      margin-left: 10px;
    }
  }
}

//卡片的样式
.labelmanagement-tag {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  
  .labelmanagement-tag-list {
    margin-bottom: 20px;
    padding: 20px;
    // padding-bottom: 0;
    width: 30%;
    height: 48%;
    justify-content: space-between;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    margin-right: 5%;
    h3 {
      display: flex;
      justify-content: space-between;
      span:nth-child(1) {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(42, 63, 84, 1);
        line-height: 22px;
        letter-spacing: 1px;
      }
      span:nth-child(2) {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(42, 63, 84, 1);
        line-height: 20px;
      }
    }
    h3:nth-child(2) {
      span:nth-child(1) {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(28, 147, 153, 1);
        line-height: 22px;
        letter-spacing: 1px;
      }
    }

    .labelmanagement-tag-list-1 {
      margin-top: 15px;
      p {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(187, 187, 187, 1);
        line-height: 20px;
      }
      div {
        width: 66%;
        height: 88px;
        background: rgba(244, 244, 244, 1);
        border-radius: 8px;
        padding: 10px;
        span {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 20px;
        }
      }
    }

    .labelmanagement-tag-list-2 {
      margin-top: 20px;
      .labelmanagement-tag-list-h {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(187, 187, 187, 1) !important;
        line-height: 20px;
      }
      div {
        display: flex;
        p:nth-child(1) {
          width: 66%;
          height: 63px;
          background: rgba(244, 244, 244, 1);
          border-radius: 8px;
          color: rgba(153, 153, 153, 1);
          padding: 10px;
        }
        p:nth-child(2) {
          flex: 1;
          display: flex;
          flex-direction: column;
          font-size: 12px;
          align-items: center;
          justify-content: space-between;
          height: 63px;
          // font-family:PingFangSC-Regular,PingFang SC;
          font-weight: 400;
          color: rgba(28, 147, 153, 1);
          line-height: 17px;
          span {
            i {
              font-style: normal !important;
              margin-left: 3px;
            }
          }
          span:nth-child(1) {
            margin-top: 7px;
          }
        }
      }
    }
  }
}
.labelmanagement-tag-list:nth-child(3n){
  margin: 0;
}
.labelmanagement-tag-list:nth-child(4){
  margin-bottom: 0;
}
.labelmanagement-tag-list:nth-child(5){
  margin-bottom: 0;
}
/deep/.ant-menu-submenu-title{
  color: #000;
}
/deep/.ant-menu-item-selected{
  color:#fff;
}
</style>
