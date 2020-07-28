<template>
  <div class="labelmanagement">
    <div class="labelmanagement-con">
      <!-- 左侧导航菜单 -->
      <div class="labelmanagement-nav-menu">
        <div class="labelmanagement-nav-menu-top">
          <p>当前所在标签:</p>
          <p>{{ labledata }}</p>
        </div>
        <div class="components-input-demo-presuffix">
          <a-input placeholder="请输入关键词" v-model="userName" ref="userNameInput">
            <!-- <icon-font type='icon-sousuo' /> -->
            <a-icon slot="prefix" type="zoom-out" />
            <a-tooltip title="Extra information">
              <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
            </a-tooltip>
          </a-input>
        </div>
        <div class="labelmanagement-nav-menu-con">
          <a-menu mode="inline" :openKeys="openKeys" @openChange="onOpenChange" style="width: 100%">
            <a-sub-menu key="sub1">
              <span slot="title"><span>一级菜单展开</span></span>
              <a-menu-item key="1">二级菜单未选中</a-menu-item>
              <!-- <a-menu-item key="2">二级菜单选中</a-menu-item> -->
              <a-sub-menu key="sub2" style="padding-left:32px">
                <span slot="title"><span>二级菜单选中</span></span>
                <a-menu-item key="2">三级导航未选中</a-menu-item>
                <a-menu-item key="3">三级导航选中</a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title"><span>一级菜单展开</span></span>
              <a-menu-item key="4">Option 5</a-menu-item>
              <a-menu-item key="5">Option 6</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub4">
              <span slot="title"><span>一级菜单展开</span></span>
              <a-menu-item key="6">Option 9</a-menu-item>
              <a-menu-item key="7">Option 10</a-menu-item>
              <a-menu-item key="8">Option 11</a-menu-item>
              <a-menu-item key="9">Option 12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
        <!-- 增加编辑删除 -->
        <div class="labelmanagement-nav-menu-foot">
          <p>
            <icon-font type="icon-icon-add" />
            <span @click="addMenu()">增加</span>
          </p>
          <p>
            <icon-font type="icon-bianji" />
            <span @click="editMenu()">编辑</span>
          </p>
          <p>
            <icon-font type="icon-lajitong" />
            <span @click="delMenu()">删除</span>
          </p>
        </div>
      </div>
      <!-- 右侧卡片标签 -->
      <div class="labelmanagement-tag">
        <div class="labelmanagement-tag-tagcont">
          <!-- 一个卡片标签,width为33%,一行放三个，可换行 -->
          <div class="labelmanagement-tag-tagcont-card" v-for="(item, index) in tagList" :key="index">
            <div class="labelmanagement-tag-tagcont-card-content">
              <p>{{ item.title }}</p>
              <!-- 中间标签，width为25%，一行放四个，可换行-->
              <div class="labelmanagement-tag-tagcont-card-content-label">
                <el-tag>#108ee9</el-tag>
                <el-tag>#108ee9</el-tag>
                <el-tag>#108ee9</el-tag>
                <el-tag>#108ee9</el-tag>
                <el-tag>#108ee9</el-tag>
                <el-tag>#108ee9</el-tag>
              </div>
              <!-- 标签底部删除和编辑 -->
              <div class="labelmanagement-tag-tagcont-card-content-foot">
                <p>
                  <icon-font type="icon-bianji" />
                  <span>编辑</span>
                </p>
                <p>
                  <icon-font type="icon-lajitong" />
                  <span>删除</span>
                </p>
              </div>
            </div>
          </div>
          <!-- 一个卡片标签,width为33%,一行放三个，可换行 -->
          <div class="labelmanagement-tag-tagcont-card">
            <div class="labelmanagement-tag-tagcont-card-last">
              <div class="labelmanagement-tag-tagcont-card-last-icon">
                <div class="labelmanagement-tag-tagcont-card-last-icon-vertical"></div>
                <div class="labelmanagement-tag-tagcont-card-last-icon-horizontal"></div>
              </div>
              <div class="labelmanagement-tag-tagcont-card-last-foot">
                <span>点击添加</span>
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
  scriptUrl: '//at.alicdn.com/t/font_1753443_nmr917pl2x.js' // 在 iconfont.cn 上生成
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
      height: 630px;
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
  .labelmanagement-tag {
    width: 80%;
    height: 840px;
    &-tagcont {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      padding: 0 20px;
      // 单个卡片样式
      &-card:nth-child(-n + 6) {
        margin-bottom: 30px;
      }
      //  &-card:nth-child(3n) {
      //   margin-left: 30px;
      // }
      &-card {
        width: 30%;
        height: 260px;
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        margin-left: 36px;
        &-content {
          padding: 20px;
          //卡片title样式
          > p {
            padding-left: 10px;
          }
          // 标签样
          &-label {
            padding-left: 10px;
            margin-bottom: 90px;
            > span {
              margin: 0 20px 10px 0;
            }
            /deep/.el-tag {
              background: rgba(28, 147, 153, 1);
              border-radius: 3px;
              border: none;
              color: #eaeaeb;
            }
          }
          // 卡片底部样式
          &-foot {
            display: flex;
            justify-content: flex-end;
            > p {
              margin: 0;
              font-size: 12px;
              color: rgba(28, 147, 153, 1);
              > span {
                padding-left: 3px;
              }
            }
            > p:last-child {
              padding-left: 20px;
            }
          }
        }
        // 最后一个卡片+
        &-last {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 100px;

          &-icon {
            position: relative;
            &-vertical {
              height: 100px;
              width: 5px;
              border-radius: 10px;
              background: rgba(28, 147, 153, 1);
              position: absolute;
              top: -50px;
              left: 46px;
            }
            &-horizontal {
              width: 100px;
              height: 5px;
              border-radius: 10px;
              background-color: rgba(28, 147, 153, 1);
              // position: absolute;
              // top: 116%;
              // left: 35%;
            }
          }
          &-foot{
            margin-top: 65px;
            font-size: 16px;
            color:rgba(28,147,153,1);
          }
        }
      }
    }
  }
}

.ant-menu:not(.ant-menu-horizontal)/deep/ .ant-menu-item-selected{
  color: #fff;
}
/deep/.ant-menu-submenu-title{
  color: #000;
}
</style>
