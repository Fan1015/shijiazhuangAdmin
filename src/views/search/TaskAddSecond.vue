<template>
  <div class="testAddSecond">    
    <!-- 头部读条 -->
    <!-- 底部穿梭框 -->
    <div class="testTransfer">
      <div class="testTransfer-left">
        <div class="testTransfer-left-left">
          <div class="testTransfer-left-left-top">
            <div class="testTransfer-left-left-top-text">数据源表</div>
            <div class="testTransfer-left-left-top-select">
              <a-select defaultValue="lucy" style="width: 120px" @change="handleChangeLeft1">
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
            </div>
          </div>
          <div class="testTransfer-left-left-bottom">
            <h1>dest_port</h1>
            <h1>dest_port</h1>
            <h1>dest_port</h1>
            <h1>dest_port</h1>
            <h1>dest_port</h1>
          </div>
          <div class="testTransfer-left-left-search">
            <a-input-search placeholder="请输入关键字" style="width: 200px" @search="inputSearch1" />
            <icon-font type="icon-sousuo" class="testTransfer-left-left-search-icon" />
          </div>
        </div>
        <div class="testTransfer-left-line"></div>
        <div class="testTransfer-left-right">
          <div class="testTransfer-left-right-top">
            <h1>数据源表字段列</h1>
            <h1>类别</h1>
          </div>
          <div class="testTransfer-left-right-bottom">
            <h1>dest_port</h1>
            <h2>1</h2>
            <h3>varchar</h3>
          </div>
          <div class="testTransfer-left-right-reset1">
            <a-button type="primary" @click="testReset1">重置</a-button>
          </div>
        </div>
      </div>
      <div class="testTransfer-img">
        <img src="@/assets/buzhoujiantou.png" alt />
      </div>
      <div class="testTransfer-center">
        <div class="testTransfer-center-top">
          <h1>转换规则</h1>
          <div class="testTransfer-center-selectgroup">
            <div class="testTransfer-center-selectgroup-item">
              <div class="testTransfer-center-selectgroup-item-text">1</div>
              <div class="testTransfer-center-selectgroup-item-select">
                <a-select defaultValue="值映射1" style="width: 120px" @change="handleChangeCenter1">
                  <a-select-option value="值映射1">值映射1</a-select-option>
                  <a-select-option value="值映射2">值映射2</a-select-option>
                  <a-select-option value="值映射3">值映射3</a-select-option>
                </a-select>
              </div>
            </div>
            <div class="testTransfer-center-selectgroup-item">
              <div class="testTransfer-center-selectgroup-item-text">1</div>
              <div class="testTransfer-center-selectgroup-item-select">
                <a-select defaultValue="值映射1" style="width: 120px" @change="handleChangeCenter1">
                  <a-select-option value="值映射1">值映射1</a-select-option>
                  <a-select-option value="值映射2">值映射2</a-select-option>
                  <a-select-option value="值映射3">值映射3</a-select-option>
                </a-select>
              </div>
            </div>
            <div class="testTransfer-center-selectgroup-item">
              <div class="testTransfer-center-selectgroup-item-text">1</div>
              <div class="testTransfer-center-selectgroup-item-select">
                <a-select defaultValue="值映射1" style="width: 120px" @change="handleChangeCenter1">
                  <a-select-option value="值映射1">值映射1</a-select-option>
                  <a-select-option value="值映射2">值映射2</a-select-option>
                  <a-select-option value="值映射3">值映射3</a-select-option>
                </a-select>
              </div>
            </div>
          </div>
        </div>
        <div class="testTransfer-center-bottom">
          <a-button type="primary" @click="preBu">上一步</a-button>
          <a-button type="primary">测试导出</a-button>
        </div>
      </div>
      <div class="testTransfer-img">
        <img src="@/assets/buzhoujiantou.png" alt />
      </div>
      <div class="testTransfer-left">
        <div class="testTransfer-left-right">
          <div class="testTransfer-left-right-top">
            <h1>数据源表字段列</h1>
            <h1>类别</h1>
          </div>
          <div class="testTransfer-left-right-bottom">
            <h1>dest_port</h1>
            <h2>1</h2>
            <h3>varchar</h3>
          </div>
          <div class="testTransfer-left-right-reset2">
            <a-button type="primary" @click="testReset2">重置</a-button>
          </div>
        </div>
        <div class="testTransfer-left-line"></div>
        <div class="testTransfer-left-left">
          <div class="testTransfer-left-left-top">
            <div class="testTransfer-left-left-top-text">数据源表</div>
            <div class="testTransfer-left-left-top-select">
              <a-select defaultValue="lucy" style="width: 120px" @change="handleChangeRight1">
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
            </div>
          </div>
          <div class="testTransfer-left-left-bottom">
            <h1>dest_port</h1>
            <h1>dest_port</h1>
            <h1>dest_port</h1>
            <h1>dest_port</h1>
            <h1>dest_port</h1>
          </div>
          <div class="testTransfer-left-left-search">
            <a-input-search placeholder="请输入关键字" style="width: 200px" @search="inputSearch2" />
            <icon-font type="icon-sousuo" class="testTransfer-left-left-search-icon" />
          </div>
        </div>
      </div>
    </div>
    <!-- 底部穿梭框 -->
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
import { Icon } from 'ant-design-vue' //icon
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1773691_h1lja2a44l4.js' // 在 iconfont.cn 上生成
})
export default {
  data() {
    return {
      isTestShowLine1: true,
      isTestShowLine2: false,
      isTestShowdian1: true,
      isTestShowdian2: true,
      isTestShowdian3: false,
      // 步骤条
      current: 0
    }
  },
  components: {
    's-breadcrumb': Breadcrumb,
    IconFont
  },
  mounted() {},
  methods: {
    //上一步
     preBu() {
            this.$router.push({name:'TaskAddFirst'})
        },
    // 步骤条
    stepsChange(current) {
      console.log('onChange:', current)
      this.current = current
    },
    // 左边下拉框
    handleChangeLeft1(value) {
      console.log(`selected ${value}`)
    },
    // 左边搜索框
    inputSearch1(res) {},
    // 左边重置
    testReset1(res) {},

    // 右边搜索
    inputSearch2(res) {},
    // 右边重置
    testReset2(res) {},
    // 右边下拉
    handleChangeRight1(res) {},

    // 中间下拉框
    handleChangeCenter1(res) {}
  }
}
</script>

<style  lang="less" scoped>
// 头部读条
.testAddDutiao {
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding: 51px 222px;
  border-radius: 8px;
  margin: 20px 0;
}
// 头部读条
// 底部穿梭框
.testTransfer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &-img {
    width: 46px;
    height: 46px;
    margin: 300px 30px 0;
  }
  &-left {
    width: 40% !important;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    &-line {
      width: 1px;
      height: 581px;
      background: rgba(221, 221, 221, 1);
      margin: 0 12px 0 10px;
    }
    &-left {
      width: 38%;
      &-top {
        display: flex;
        justify-content: center;
        align-items: center;
        &-text {
          width: 68px;
          height: 32px;
          border-radius: 3px 0 0 3px;
          background: rgba(28, 147, 153, 1);
          color: rgba(255, 255, 255, 1);
          line-height: 32px;
          text-align: center;
        }
        &-select {
          height: 32px;
          border-radius: 0 3px 3px 0;
        }
      }
      &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-top: 40px;
        > h1 {
          width: 98px;
          background: rgba(244, 244, 244, 1);
          border-radius: 3px;
          color: rgba(102, 102, 102, 1);
          text-align: center;
          line-height: 32px;
        }
      }
      &-search {
        position: absolute;
        bottom: 20px;
        /deep/.ant-input-affix-wrapper.ant-input-search {
          height: 32px;
          background: rgba(244, 244, 244, 1);
          border-radius: 3px;
          line-height: 32px;
        }
        /deep/.ant-input-affix-wrapper .ant-input:not(:last-child) {
          font-size: 14px;
          color: rgba(102, 102, 102, 1);
          background: rgba(244, 244, 244, 1);
          border-radius: 3px;
          border: none;
          line-height: 32px;
          font-weight: 400;
        }
        /deep/.ant-input-search-icon.anticon.anticon-search {
          display: none;
        }
        &-icon {
          position: absolute;
          right: 10px;
          top: 4px;
          z-index: 999;
          > svg {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
    &-right {
      width: 50%;
      &-top {
        display: flex;
        justify-content: space-around;
        align-items: center;
        > h1 {
          width: 92px;
          font-size: 12px;
          color: rgba(28, 147, 153, 1);
          line-height: 17px;
          font-weight: 400;
          margin: 0;
          text-align: center;
        }
      }
      &-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        > h1 {
          width: 98px;
          background: rgba(244, 244, 244, 1);
          border-radius: 3px;
          color: rgba(102, 102, 102, 1);
          text-align: center;
          line-height: 32px;
        }
        > h2 {
          font-size: 12px;
          color: rgba(51, 51, 51, 1);
          line-height: 17px;
          margin: 0 20px;
        }
        > h3 {
          width: 98px;
          background: rgba(42, 62, 84, 1);
          border-radius: 3px;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 32px;
        }
      }
      &-reset1 {
        position: absolute;
        bottom: 20px;
        left: 66%;
      }
      &-reset2 {
        position: absolute;
        bottom: 20px;
        left: 20%;
      }
    }
  }
  &-center {
    width: 15%;
    &-top {
      width: 100%;
      height: 509px;
      padding: 20px 10px;
      background: rgba(255, 255, 255, 1);
      > h1 {
        font-size: 12px;
        line-height: 17px;
        font-weight: 400;
        color: rgba(28, 147, 153, 1);
        text-align: center;
        margin-bottom: 20px;
      }
    }
    &-selectgroup {
      &-item:first-child {
        margin-top: 0;
      }
      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        &-text {
          font-weight: 400;
          font-size: 14px;
          color: rgba(160, 160, 160, 1);
          margin-right: 10px;
        }
        &-select {
          width: 100%;
          /deep/.ant-select {
            width: 100%;
            .ant-select-selection.ant-select-selection--single {
              width: 178px;
            }
          }
        }
      }
    }
    &-bottom {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &-img {
    widows: 32px;
    height: 32px;
    > img {
      width: 100%;
    }
  }
}
// 底部穿梭框
</style>