<template>
  <div class="entryTemplate">

    <!-- 头部 -->
    <div class="bread" :visible.sync="dialogVisibleDetail">
      <s-breadcrumb />
      <span>&ensp; >&ensp; 录入任务添加</span>
    </div>
    <!--  -->
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
import { Icon } from 'ant-design-vue' //icon
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1758660_kp46faosao.js' // 在 iconfont.cn 上生成
})
export default {
  data() {
    return {
       dialogVisibleDetail: true,
    }
  },
  components: {
    's-breadcrumb': Breadcrumb,
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
.bread {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>