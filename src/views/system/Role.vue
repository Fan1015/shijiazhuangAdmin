<template>

  <div class="jurisdiction-content">
      <div class="router-name">
          <div class="router-name-left">
              <span>{{$route.matched[1].meta.title}}</span>
              <span>></span>
              <span class="user-router-name">{{$route.meta.title}}</span>
          </div>
          <div class="router-name-right">
              <span @click="detailsVisibleFn">添加</span>
              <span>导入</span>
              <span>导出</span>
          </div>
      </div>
      <div class="user-form">
            <div class="user-form-header">
                <div class="user-form-l">
                  <div class="user-form-l-list">
                    <label class="user-form-list-l" for="">权限名称</label>
                    <input type="text" placeholder="用户添加">
                  </div>
                  <div class="user-form-l-list">
                      <label class="user-form-list-l" for="">录入人</label>
                      <input type="text" placeholder="请输入">
                  </div>
                  <div class="user-form-l-list">
                      <label class="user-form-list-l" for="">录入时间</label>
                      <input type="text" placeholder="请选择时间">
                  </div>
                </div>
                <div class="user-form-r">
                    <div>查询</div>
                    <div>重置</div>
                </div>
            </div>

            <!-- 表格列表 -->

            <a-table :pagination="pagination" :columns="columns" :dataSource="data" style="height:10px" >
              <a slot="name" slot-scope="text">{{text}}</a>
              <span slot="customTitle"></span>
              <span slot="action" slot-scope="text, record" class="action-btn-c">
                <a class="action-btn">删除</a>
                <!-- <a-divider type="vertical" /> -->
                <a @click="bianjiVisibleFn">编辑</a>
                <!-- <a-divider type="vertical" /> -->
                <a  >详情</a>
              </span>
            </a-table>
           
           <RoleDE v-if="bianjiVisible" v-on:fn="change1"></RoleDE>
          <RoleAdd v-if="detailsVisible" v-on:fn="change2"></RoleAdd>
        </div>
  </div>
</template>

<script>
import RoleDE from './RoleDE'
import RoleAdd from './RoleAdd'

const columns = [
    {
      title: '序号',
      dataIndex: 'age',
      key: 'age',
      width:100
    },
    {
      title: '角色名称',
      dataIndex: 'address',
      key: 'address3',
    },
    {
      title: '角色权限',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '角色描述',
      key: 'address1',
      dataIndex: 'address',
      scopedSlots: { customRender: 'address' },
    },
    {
      title: '录入人',
      dataIndex: 'address',
      key: 'address4',
    },
    {
      title: '录入时间',
      dataIndex: 'address',
      key: 'address5',
    },
    {
      title: '操作',
      key: 'action',
      scopedSlots: { customRender: 'action' },
    }
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New ',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London',
      tags: ['loser'],
      background:"red"
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No',
      tags: ['cool', 'teacher'],
    },
    {
      key: '5',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney',
      tags: ['cool', 'teacher'],
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney',
      tags: ['cool', 'teacher'],
    },
    {
      key: '7',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No',
      tags: ['cool', 'teacher'],
    },
    
  ];
export default {
  components:{
    RoleDE,
    RoleAdd
  },
    data() {
      return {
        bianjiVisible: false,
        detailsVisible: false,
        data,
        columns,
        pagination:{
          total:200,
          itemRender(current, type, originalElement) {
            if (type === 'prev') {
              return <a>Previous</a>;
            } else if (type === 'next') {
              return <a>Next</a>;
            }
            return originalElement;
          },
        }
      };
    },
    methods:{
      bianjiVisibleFn() {
        this.bianjiVisible =true
      },
      change1(bol){
        this.bianjiVisible =bol
      },
      change2(bol){
        this.detailsVisible =bol
      },
      detailsVisibleFn() {
        this.detailsVisible =true
      }
    }
   
}
</script>

<style lang="less" scoped>
  .jurisdiction-content{
        background: #fff;
        height: 780px;
        overflow: hidden;
    .router-name{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #A0A0A0;
        margin-top: 12px;
        margin-left: 12px;
        // background-color: #F4F4F4;
        .user-router-name {
            color: #21364D;
        }
        .router-name-right span{
            display: inline-block;
            text-align: center;
            width:60px;
            height:24px;
            border-radius:3px;
            border:1px solid rgba(28,147,153,1);
            margin-right: 40px;
            font-size: 14px;
            color: #1C9399;
        }
        .router-name-left span:nth-of-type(2){
            margin: 0 8px;
        }

    }
    .user-form{
      margin-top: 72px;
      .user-form-header{
        display: flex;
        margin-bottom: 20px;
        .user-form-l{
          width: 80%;
          display: flex;
          .user-form-l-list{
            display: flex;
            width: 33%;
            justify-content: center;
            align-items: center;
            .user-form-list-l{
              margin-right: 20px;
              color: #A0A0A0;
            }
            input{
                width: 188px;
                height: 32px;
                border: 1px solid #DCDFE6;
                outline: none;
                padding-left: 10px;
                color:#808080;
            }
            &:nth-child(1){
              padding-left: 36px;
              justify-content: flex-start;
            }
            &:nth-child(3){
              justify-content: flex-end;
            }
          }
        }
        .user-form-r{
          display: flex;
          width: 20%;
          justify-content: flex-end;
          padding-right: 100px;
          div{
            margin-left: 20px;
            width:68px;
            height:32px;
            border-radius:3px;
            border:1px solid rgba(28,147,153,1);
            text-align: center;
            line-height: 32px;
        }
      }
    }
  }

  .action-btn-c a{
      margin-right: 30px;
      &:nth-child(3){
        margin-right: 0;
      }
  }
  /deep/.ant-pagination-prev{
      border:1px solid #1C9399;
      width: 85px;
  }
  /deep/.ant-pagination-next{
     border:1px solid #1C9399;
     width: 63px;
     margin-right: 20px;
  }
  /deep/.ant-table-thead tr th:nth-child(7){
    text-align: center;
  }
  /deep/.ant-table-row-level-0 td:nth-child(7){
    text-align: center;
  }
  // /deep/table > .ant-table-body > tr > td:first-child{
  //   background: red !important;
  // }
}
/deep/.ant-table-thead > tr > th:first-child{
	padding-left: 40px;
}
/deep/.ant-table-tbody > tr > td:first-child{
	padding-left: 40px;
}
/deep/.ant-pagination{
  margin-top: 40px;
}
</style>