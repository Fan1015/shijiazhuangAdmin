<template>
  <div>
    <div class="edit-bread">
      <s-breadcrumb />
    </div>
    <div class="edit-page">
      <div class="edit-con">
        <!-- 上面的部分 -->
        <div class="edit-con-top">
          <div></div>
          <div>装备信息添加</div>
        </div>
        <div class="edit-con-foot">
          <div class="edit-con-foot-1">
            <div class="edit-con-foot-1-lf">
              <p style="width:160px; text-align:right">归属分支：</p>

              <p :class="navTreeShow1 ? 'navtree1' : ''">
                <span>陆军</span>
                <span>></span>
                <span>炮兵</span>
                <span>></span>
                <span>火箭炮</span>
              </p>
              <p :class="navTreeShow2 ? '' : 'navtree1'">
                <a-tree-select
                  :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
                  :treeData="treeData"
                  placeholder="请选择装备"
                  treeDefaultExpandAll
                  v-model="value"
                >
                </a-tree-select>
              </p>
              <p @click="alterTree" class="alter">修改</p>
            </div>
          </div>

          <div class="edit-con-foot-2">
            <div class="edit-con-foot-2-input">
              <p>装备名称：</p>
              <div class="">
                <a-input placeholder="必填，不大于50个中文" style="width: 320px" @search="onSearch" />
              </div>
            </div>
          </div>
          <div class="qingdan">
            <div>装备图片：</div>
            <div class="qingdan-img">
              <p><img src="../../../assets/shebei1.png" alt="" srcset="" /></p>
              <p><img src="../../../assets/shebei2.png" alt="" srcset="" /></p>
            </div>
          </div>
          <div class="edit-con-foot-2">
            <div class="edit-con-foot-2-input">
              <p>装备类型：</p>
              <div class="">
                <a-select
                  showSearch
                  :defaultValue="selectData1[0]"
                  optionFilterProp="children"
                  style="width: 320px"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                >
                  <a-select-option v-for="item in selectData1" :key="item">{{ item }}</a-select-option>
                </a-select>
              </div>
            </div>
          </div>
          <div class="edit-con-foot-4">
            <div class="edit-con-foot-3-input">
              <p>装备描述：</p>
              <div class="">
                <a-textarea placeholder="请输入描述..." :rows="4" style="width: 360px" />
              </div>
            </div>
          </div>

          <div class="edit-con-foot-2">
            <div class="edit-con-foot-2-input">
              <p>保养类别：</p>
              <div class="">
                <a-select
                  showSearch
                  :defaultValue="selectData2[0]"
                  optionFilterProp="children"
                  style="width: 320px"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                >
                  <a-select-option v-for="item in selectData2" :key="item">{{ item }}</a-select-option>
                </a-select>
              </div>
            </div>
          </div>
        </div>

        <div class="edit-con-foot">
          <div class="edit-con-foot-4">
            <div class="edit-con-foot-3-input">
              <p></p>
              <div class="">
                <a-textarea placeholder="维护内容" :rows="9" style="width: 360px" />
                <a-upload
                  name="avatar"
                  listType="picture-card"
                  class="avatar-uploader"
                  :showUploadList="false"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  :beforeUpload="beforeUpload"
                  @change="handleChange"
                >
                  <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                  <div v-else>
                    <a-icon :type="loading ? 'loading' : 'plus'" />
                    <div class="ant-upload-text">上传图片</div>
                  </div>
                </a-upload>
                <a-upload
                  name="avatar"
                  listType="picture"
                  class="avatar-uploader"
                  action="//jsonplaceholder.typicode.com/posts/"
                  :previewFile="previewFile"
                >
                  <div class="ant-upload-text">
                    <a-icon type="plus" />
                    <span>上传视频</span>
                  </div>
                </a-upload>
              </div>
            </div>
            <!-- <p>点击添加下一步</p> -->
            <div class="">
              <a-form-model ref="dynamicValidateForm" :model="dynamicValidateForm">
                <a-form-model-item
                  v-for="(domain, index) in dynamicValidateForm.domains"
                  :key="domain.key"
                  v-bind="index === 0 ? formItemLayout : {}"
                  :prop="'domains.' + index + '.value'"
                >
                  <div class="edit-con-foot-3-input" v-model="domain.value">
                    <p></p>
                    <div class="">
                      <a-textarea placeholder="维护内容" :rows="9" style="width: 360px" />
                      <a-upload
                        name="avatar"
                        listType="picture-card"
                        class="avatar-uploader"
                        :showUploadList="false"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        :beforeUpload="beforeUpload"
                        @change="handleChange"
                      >
                        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                        <div v-else>
                          <a-icon :type="loading ? 'loading' : 'plus'" />
                          <div class="ant-upload-text">上传图片</div>
                        </div>
                      </a-upload>
                      <a-upload
                        name="avatar"
                        listType="picture"
                        class="avatar-uploader"
                        action="//jsonplaceholder.typicode.com/posts/"
                        :previewFile="previewFile"
                      >
                        <div class="ant-upload-text">
                          <a-icon type="plus" />
                          <span>上传视频</span>
                        </div>
                      </a-upload>
                    </div>
                    <a-icon
                      v-if="dynamicValidateForm.domains.length > 0"
                      class="dynamic-delete-button"
                      type="minus-circle-o"
                      :disabled="dynamicValidateForm.domains.length === 1"
                      @click="removeDomain(domain)"
                    />
                  </div>
                </a-form-model-item>

                <p @click="addDomain" class="addinput">
                  点击添加下一步
                </p>
              </a-form-model>
            </div>
          </div>
        </div>
        <div class="submitbtn">
          <a-button>提交</a-button>
          <a-button>重置</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
const selectData1 = ['装备', '装备1', '装备2']
const selectData2 = ['日保养', '月保养', '年保养']
function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
const treeData = [
  {
    title: '陆军',
    value: '0',
    key: '0',
    children: [
      {
        title: '防空兵',
        value: '0-1',
        key: '0-1'
      },
      {
        title: '炮兵',
        value: '0-2',
        key: '0-2',
        children: [
          {
            title: '火箭炮',
            value: '0-2-1',
            key: '0-2-1',
            children: [
              {
                title: 'PHL11式武器系统',
                value: '0-2-1-1',
                key: '0-2-1-1'
              },
              {
                title: '炮车',
                value: '0-2-1-2',
                key: '0-2-1-2'
              },
              {
                title: '弹药装填车',
                value: '0-2-1-3',
                key: '0-2-1-3'
              },
              {
                title: '动力系统',
                value: '0-2-1-4',
                key: '0-2-1-4'
              },
              {
                title: '瞄准系统',
                value: '0-2-1-5',
                key: '0-2-1-5'
              },
              {
                title: '转向系统',
                value: '0-2-1-6',
                key: '0-2-1-6'
              }
            ]
          },
          {
            title: '榴弹炮',
            value: '0-2-2',
            key: '0-2-2'
          },
          {
            title: '迫击炮',
            value: '0-2-3',
            key: '0-2-3'
          },
          {
            title: '侦察兵',
            value: '0-2-4',
            key: '0-2-4'
          }
        ]
      }
    ]
  },
  {
    title: '空军',
    value: '1',
    key: '1',
    children: [
      {
        title: '开飞机',
        value: '1-1',
        key: '1-1'
      }
    ]
  },
  {
    title: '海军',
    value: '2',
    key: '2',
    children: [
      {
        title: '舰长',
        value: '2-1',
        key: '2-1'
      }
    ]
  }
]
export default {
  components: {
    's-breadcrumb': Breadcrumb
  },
  data() {
    return {
      selectData1,
      selectData2,
      navTreeShow1: false,
      navTreeShow2: false,
      treeData,
      value: undefined,
      // content1: `<p>请编写一些内容</p>`,
      content2: `<p>必填（知识详情上传方法）</p>`,
      // loading: false,
      // imageUrl: '',
      dynamicValidateForm: {
        domains: []
      }
    }
  },
  methods: {
    alterTree() {
      console.log(1111)
      this.navTreeShow1 = !this.navTreeShow1
      this.navTreeShow2 = !this.navTreeShow2
    },
    //   下拉框
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    handleBlur() {
      console.log('blur')
    },
    handleFocus() {
      console.log('focus')
    },
    filterOption(input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    },
    // 第一个search
    onSearch(value) {
      console.log(value)
    },
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl
          this.loading = false
        })
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isJpgOrPng && isLt2M
    },
    // 上传视频
    previewFile(file) {
      console.log('Your upload file:', file)
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail)
    },
    removeDomain(item) {
      let index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    }
  }
}
</script>
<style lang="less" scoped>
.edit-con-foot-1 {
  width: 90%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  &-lf {
    display: flex;
    align-items: center;
    > p:nth-child(4) {
      margin-left: 10px;
      width: 28px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(28, 147, 153, 1);
      line-height: 20px;
      cursor: pointer;
    }
    > p:nth-child(2) {
      color: rgba(51, 51, 51, 1);
    }
    .navtree1 {
      display: none;
    }
    // 树状导航选择
    /deep/.ant-select {
      width: 320px;
    }
  }
}
.edit-bread {
  margin-bottom: 20px;
}
.edit-page {
  width: 100%;
  background: #fff;
  border-radius: 8px;
}
.edit-con {
  width: 90%;
  height: 100%;

  //   padding-left: 10%;
  &-top {
    padding: 40px 0 0 40px;
    display: flex;
    align-items: center;
    > div:first-child {
      width: 2px;
      height: 20px;
      background: #1c9399;
      margin-right: 10px;
    }
    > div:last-child {
      font-size: 16px;
      color: rgba(51, 51, 51, 1);
    }
  }
  &-foot {
    padding-left: 7%;
    margin-top: 40px;
    &-1 {
      // margin-bottom: 10px;
      &-lf {
        display: flex;
      }
    }
    &-2 {
      margin-bottom: 20px;
      &-input {
        display: flex;
        align-items: center;
        p {
          width: 160px;
          text-align: right;
          margin: 0;
          color: #666666;
        }
      }
    }
    &-3 {
      position: relative;
      &-input {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        > p:nth-child(1) {
          width: 160px;
          text-align: right;
          color: #666666;
        }
      }
    }
    &-4 {
      position: relative;
      &-input {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        > p:nth-child(1) {
          width: 160px;
          text-align: right;
          color: #666666;
        }
      }
      .addinput {
        position: absolute;
        top: 100px;
        left: 530px;
        font-size: 14px;
        color: rgba(28, 147, 153, 1);
        cursor: pointer;
      }
    }
    &-5 {
      &-input {
        display: flex;
        align-items: center;
        p {
          width: 160px;
          text-align: right;
          margin: 0;
          color: #666666;
        }
        margin-bottom: 40px;
      }
    }
  }
}

// 上传图片框
/deep/.ant-upload.ant-upload-select-picture-card {
  position: absolute;
  top: 80px;
  left: 175px;
}
// 上传图片
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}

// 上传视频
/deep/.ant-upload.ant-upload-select {
  display: table;
  float: left;
  width: 104px;
  height: 104px;
  margin-right: 8px;
  margin-bottom: 8px;
  text-align: center;
  vertical-align: top;
  background-color: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 2px;
  cursor: pointer;
  -webkit-transition: border-color 0.3s ease;
  transition: border-color 0.3s ease;
  background: #fff;
}
/deep/.ant-upload-select-picture {
  position: absolute;
  top: 80px;
  left: 295px;
}
/deep/.ant-upload {
  display: table-cell;
  width: 100%;
  height: 100%;
  padding: 8px;
  text-align: center;
  vertical-align: middle;
}
/deep/.ant-upload-text {
  margin-top: 8px;
  color: #666;
  display: flex;
  flex-direction: column;
  > span {
    padding-top: 8px;
  }
}
/deep/.ant-upload-select i {
  font-size: 32px;
  color: #999;
}

.submitbtn {
  margin-left: 30%;
  height: 80px;

  > button:first-child {
    margin-right: 40px;
    color: #fff;
    background: #097b7c;
  }
  > button:nth-child(2) {
    border: 1px solid #097b7c;
    color: #097b7c;
  }
}
.qingdan {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  > div:first-child {
    width: 160px;
    text-align: right;
    color: #666666;
    font-size: 14px;
  }
  // > div:last-child {
  //   flex: 1;
  // }
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
</style>
