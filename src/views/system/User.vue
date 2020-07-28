<template>
  <div class="user-main">
    <div class="router-name">
      <div class="router-name-left">
        <span>{{ $route.matched[1].meta.title }}</span>
        <span>></span>
        <span class="user-router-name">{{ $route.meta.title }}</span>
      </div>
      <div class="router-name-right">
        <span>添加</span>
        <span>导入</span>
        <span>导出</span>
      </div>
    </div>
    <div class="user-form">
      <div class="user-form-header">
        <div class="user-form-list">
          <label class="user-form-list-l" for="">用户名</label>
          <input type="text" placeholder="全部" />
        </div>
        <div class="user-form-list">
          <label class="user-form-list-l" for="">积分等级</label>
          <select name="" id="">
            <option value="">专业初级</option>
          </select>
        </div>
        <div class="user-form-list">
          <label class="user-form-list-l" for="">军线</label>
          <input type="text" placeholder="请输入" />
        </div>
        <div class="user-form-list">
          <label class="user-form-list-l" for="">昵称</label>
          <input type="text" placeholder="全部" />
        </div>
        <div class="user-form-list">
          <label class="user-form-list-l" for="">所学专业</label>
          <input type="text" placeholder="请输入" />
        </div>
        <div class="user-form-list">
          <div>查询</div>
          <div>重置</div>
        </div>
      </div>

      <!-- 表格列表 -->

      <a-table :pagination="false" :columns="columns" :dataSource="data" :scroll="{ x: 1500, y: 525 }">
        <a slot="action" slot-scope="text, record, index" class="action-content">
          <div v-if="text.ischeck" class="action-ys">
            <span @click="dkdetailsVisible">详情</span>
            <span @click="dkPortrait">画像</span>
            <span @click="dkBianjiVisible">编辑</span>
            <span>删除</span>
          </div>
          <!-- <div v-if="!text.ischeck" @click="showcz($event, text)" class="action-ys"></div> -->
          <!-- {{text.key}} -->
          <!-- <a-popover trigger="click"  v-model="text.ischeck">
                        <a @click="hide()" class="cz-content" slot="content">详情</a>
                        <a @click="hide()" class="cz-content" slot="content">画像</a>
                        <a @click="hide()" class="cz-content" slot="content">编辑</a>
                        <a @click="hide()" class="cz-content" slot="content">删除</a>
                        <img class="action-img" src="../../assets/icons/cz-zt.png" alt="">  
                    </a-popover>  -->
          <img
            class="action-img"
            @click="showcz($event, text)"
            v-else-if="!text.ischeck"
            src="../../assets/icons/cz-zt.png"
            alt=""
          />
          <!-- <img class="action-img" @click="showcz($event, text)" v-if="text.ischeck" src="../../assets/icons/cz-zt.png" alt="">   -->
        </a>
      </a-table>
      <UserDetails v-if="detailsVisible" v-on:fn="change"></UserDetails>
      <UserAdd v-if="bianjiVisible" v-on:fn="change2"></UserAdd>
    </div>
  </div>
</template>

<script>
// import { getUserList } form '@/api/login'
import UserDetails from './UserDetails'
import UserAdd from './UserAdd'

const columns = [
  { title: '序号', width: 150, dataIndex: 'age', key: 'name', },
  { title: '姓名', dataIndex: 'name', key: 'age', },
  { title: '昵称', dataIndex: 'address', key: '1'},
  { title: 'Column 2', dataIndex: 'address', key: '2'},
  { title: 'Column 3', dataIndex: 'address', key: '3'},
  { title: 'Column 4', dataIndex: 'address', key: '4'},
  { title: 'Column 5', dataIndex: 'address', key: '5'},
  { title: 'Column 6', dataIndex: 'address', key: '6'},
  { title: 'Column 7', dataIndex: 'address', key: '7'},
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: '操作',
    key: 'operation',
    // width: 150,
    align:'center',
    scopedSlots: { customRender: 'action' }
  }
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `沐兰长江`,
    age: 32,
    address: `London no. ${i}`,
    ischeck: false
  })
}

export default {
  data() {
    return {
      data,
      columns,
      detailsVisible: false,
      bianjiVisible: false
    }
  },
  components: {
    UserDetails,
    UserAdd
  },

  mounted() {
    // console.log(11,this.$route.matched[1].meta.title)
    // console.log(this.data)
  },
  methods: {
    change(bol) {
      console.log(bol)
      this.detailsVisible = bol
    },

    dkdetailsVisible() {
      //    this.$set(detailsVisible, true)
      this.detailsVisible = true
      //  console.log(111, this.detailsVisible)
    },
    change2(bol) {
      console.log(bol)
      this.bianjiVisible = bol
    },
    dkBianjiVisible() {
      this.bianjiVisible = true
    },
    dkPortrait() {
      this.$router.push({name: 'UserPortrait'})
    },
    showcz(e, text) {
      //    console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement)
      console.log(111, text)
      this.data.map(item => {
        item.ischeck = false
      })
      this.data[text.key].ischeck = true

      //    this.visible= this.data[text.key].ischeck
      //    getUserList().then(res => {
      //        let data = res.data.map(res => {
      //            let temp = res
      //            temp.ischeck = false
      //            return temp
      //        })
      // }

      // e.currentTarget.parentElement.parentElement.parentElement.style.height="64px"
    }
  }
}
</script>

<style lang="less" scoped>
.user-main {
  background: #fff;
  height: 780px;
  overflow: hidden;
  .router-name {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #a0a0a0;
    margin-top: 12px;
    margin-left: 12px;
    // background-color: #F4F4F4;
    .user-router-name {
      color: #21364d;
    }
    .router-name-right span {
      display: inline-block;
      text-align: center;
      width: 60px;
      height: 24px;
      border-radius: 3px;
      border: 1px solid rgba(28, 147, 153, 1);
      margin-right: 40px;
      font-size: 14px;
      color: #1c9399;
    }
    .router-name-left span:nth-of-type(2) {
      margin: 0 8px;
    }
  }
  .user-form {
    margin-top: 70px;
    width: 100%;
    .user-form-header {
      display: flex;
      flex-wrap: wrap;
      .user-form-list {
        display: flex;
        width: 33%;
        margin-bottom: 20px;
        align-items: center;
        .user-form-list-l {
          margin-right: 20px;
          color: #a0a0a0;
        }
        &:nth-child(1) {
          padding-left: 36px;
        }
        &:nth-child(2) {
          justify-content: center;
        }
        &:nth-child(3) {
          justify-content: flex-end;
          padding-right: 36px;
        }
        &:nth-child(5) {
          justify-content: center;
        }
        &:nth-child(4) {
          padding-left: 50px;
        }
        &:nth-child(6) {
          justify-content: flex-end;
          padding-right: 76px;
          div {
            margin-left: 20px;
            width: 68px;
            height: 32px;
            border-radius: 3px;
            border: 1px solid rgba(28, 147, 153, 1);
            text-align: center;
            line-height: 32px;
          }
        }
        input {
          width: 188px;
          height: 32px;
          border: 1px solid #dcdfe6;
          outline: none;
          padding-left: 10px;
          color: #808080;
        }
        select {
          width: 188px;
          height: 32px;
          border: 1px solid #dcdfe6;
          outline: none;
          padding-left: 10px;
          color: #808080;
        }
      }
    }
  }
}
.action-img {
  width: 32px;
  height: 32px;
}
/deep/.ant-table-thead > tr > th {
  background: #fff;
}
/deep/.ant-table-thead > tr > th:nth-child(1),
/deep/.ant-table-tbody > tr > td:nth-child(1) {
  padding: 16px 30px;
}
.cz-content {
  margin-right: 5px;
}
/deep/.ant-popover-inner-content {
  padding: 12px 10px;
}

//操作加图片
.action-content {
  display: block;
  height: 32px;
  display: flex;
  justify-content: center;
}
.action-ys {
  position: relative;
  display: flex;
  //  width: 70px;
  span {
    position: absolute;
    display: block;
    width: 30px;
    margin-right: 9px;
  }
  span:nth-child(1) {
    left: -62px;
  }
  span:nth-child(2) {
    left: -30px;
  }
  span:nth-child(3) {
    left: 2px;
  }
  span:nth-child(4) {
    left: 34px;
  }
}
/deep/ .ant-table-row-cell-last {
  text-align: center;
}
/deep/.ant-table-thead > tr > th:first-child{
	padding-left: 40px;
}
/deep/.ant-table-tbody > tr > td:first-child{
	padding-left: 40px;
}

</style>
