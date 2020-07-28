<template>
  <div class="logo">
    <router-link :to="{name:'dashboard'}">
      <!--logo图片 <LogoSvg alt="logo" /> -->
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
import LogoSvg from '@/assets/logo.svg?inline'

export default {
  name: 'Logo',
  components: {
    LogoSvg
  },
  props: {
    title: {
      type: String,
      default: '这里是logo',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
<style scoped>
  .logo{
    text-align: center;
    height: 80px ;
  }
</style>>
