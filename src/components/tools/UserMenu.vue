<template>
  <div class="user-wrapper">
    <div class="content-box">
      <a href="https://pro.loacg.com/docs/getting-started" target="_blank" v-for="(items,index) in usermenu" :key="index">
        <span class="action">
          <img :src="items.imgsrc" alt="" srcset="">
          <!-- <a-icon class="icon" type="mail" theme="filled" /> -->
          <span>{{ items.icon }}</span>
        </span>
      </a>
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <!-- 头像 -->
          <a-avatar class="avatar" size="small" :src="avatar"/>
          <!-- 名字 -->
          <span>{{ nickname }}</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="0">
            <router-link :to="{ name: 'center' }">
              <a-icon type="user"/>
              <span>个人中心</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="1">
            <router-link :to="{ name: 'settings' }">
              <a-icon type="setting"/>
              <span>账户设置</span>
            </router-link>
          </a-menu-item>
          <!-- <a-menu-item key="2" disabled>
            <a-icon type="setting"/>
            <span>测试</span>
          </a-menu-item> -->
          <a-menu-divider/>
          <a-menu-item key="3">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout"/>
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import NoticeIcon from '@/components/NoticeIcon'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserMenu',
  components: {
    NoticeIcon
  },
  data(){
    return{
      usermenu:[
        {
          imgsrc:require("../../assets/xinfeng.png"),
          icon:'消息'
        },
        {
          imgsrc:require("../../assets/tongzhi.png"),
          icon:'通知'
        },
        {
          imgsrc:require("../../assets/Shape.png"),
          icon:'帮助'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['nickname', 'avatar'])

  },
  methods: {
    ...mapActions(['Logout']),
    handleLogout () {
      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk: () => {
          return this.Logout({}).then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 16)
          }).catch(err => {
            this.$message.error({
              title: '错误',
              description: err.message
            })
          })
        },
        onCancel () {
        }
      })
    }
  }
}
</script>
<style scoped>
  .content-box a{
    margin-right:35px;
    text-align: center;
  }
 .content-box .action img{
    margin-right: 10px;
  }
</style>
