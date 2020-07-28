<template>
  <div class="">
    <div class="edit-bread">
      <s-breadcrumb />
    </div>
    <div class="edit">
      <div class="edit-con">
        <!-- 上面的部分 -->
        <div class="edit-con-top">
          <div></div>
          <div>故障方案添加</div>
        </div>
        <div class="edit-con-foot">
          <div class="edit-con-foot-1">
            <div class="edit-con-foot-1-lf">
              <p style="width:160px; text-align:right">归属装备：</p>
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
            <div class="edit-con-foot-1-rg">
              <p>装备名称：</p>
              <p>炮兵</p>
            </div>
          </div>
          <div class="edit-con-foot-1">
            <div class="edit-con-foot-1-lf">
              <p style="width:160px; text-align:right">装备编号：</p>
              <p class="">JT100000-002034</p>
            </div>
            <div class="edit-con-foot-1-rg"></div>
          </div>

          <div class="edit-con-foot-2">
            <div class="edit-con-foot-2-input">
              <p>应用对象：</p>
              <div class="">
                <a-select
                  showSearch
                  :defaultValue="selectData[0]"
                  optionFilterProp="children"
                  style="width: 250px"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                >
                  <a-select-option v-for="item in selectData" :key="item">{{ item }}</a-select-option>
                </a-select>
              </div>
            </div>
          </div>
          <div class="edit-con-foot-2">
            <div class="edit-con-foot-2-input">
              <p>配套层级单位：</p>
              <div class="">
                <a-select
                  showSearch
                  :defaultValue="selectData[0]"
                  optionFilterProp="children"
                  style="width: 250px"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                  :filterOption="filterOption"
                >
                  <a-select-option v-for="item in selectData" :key="item">{{ item }}</a-select-option>
                </a-select>
              </div>
            </div>
          </div>
          <div class="edit-con-foot-3">
            <div class="edit-con-foot-3-input">
              <p>通讯地址：</p>
              <div class="">
                <a-input placeholder="××××" style="width: 320px" @search="onSearch" />
              </div>
            </div>
          </div>

          <div class="edit-con-foot-3">
            <div class="edit-con-foot-3-input">
              <p>功能类别：</p>
              <div class="">
                <a-checkbox-group :options="plainOptions" @change="onChange" />
              </div>
            </div>
          </div>
          <div class="edit-con-foot-2">
            <div class="edit-con-foot-2-input">
              <p>外形尺寸：</p>
              <div class="edit-con-foot-2-input-number">
                <!-- <a-input placeholder="自动提取，人工可修改" style="width: 320px" @search="onSearch" /> -->
                <div>
                  长<a-input-number :min="1" :max="100000" :defaultValue="3" @change="onChange" />mm
                </div>
                <div>
                  宽<a-input-number :min="1" :max="100000" :defaultValue="3" @change="onChange" />mm
                </div>
                <div>
                  高<a-input-number :min="1" :max="100000" :defaultValue="3" @change="onChange" />mm
                </div>
              </div>
            </div>
          </div>
          <div class="edit-con-foot-2">
            <div class="edit-con-foot-2-input">
              <p>单价：</p>
              <div class=""><a-input placeholder="" style="width: 250px" @search="onSearch" />元</div>
            </div>
          </div>
          <div class="edit-con-foot-3">
            <div class="edit-con-foot-3-input">
              <p>研制单位：</p>
              <div class="">
                <a-input placeholder="请输入" style="width: 320px" @search="onSearch" />
              </div>
            </div>
          </div>
          <div class="edit-con-foot-3">
            <div class="edit-con-foot-3-input">
              <p>联系人：</p>
              <div class="">
                <a-input placeholder="请输入" style="width: 320px" @search="onSearch" />
              </div>
            </div>
          </div>
          <div class="edit-con-foot-3">
            <div class="edit-con-foot-3-input">
              <p>联系电话：</p>
              <div class="">
                <a-input placeholder="请输入" style="width: 320px" @search="onSearch" />
              </div>
            </div>
          </div>
          <div class="edit-con-foot-4">
            <div class="edit-con-foot-4-input">
              <p>功能描述：</p>
              <div class="">
                <a-textarea placeholder="请输入描述..." :rows="4" style="width: 360px" />
              </div>
            </div>
          </div>
          <div class="edit-con-foot-2">
            <div class="edit-con-foot-2-input">
              <p>检测原理：</p>
              <div class="">
                <a-input placeholder="请输入" style="width: 320px" @search="onSearch" />
              </div>
            </div>
          </div>
          <div class="edit-con-foot-2">
            <div class="edit-con-foot-2-input">
              <p>设备照片：</p>
              <div class="clearfix">
                <a-upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  :fileList="fileList"
                  @preview="handlePreview"
                  @change="handleChange"
                >
                  <div v-if="fileList.length < 8">
                    <a-icon type="plus" />
                    <div class="ant-upload-text">Upload</div>
                  </div>
                </a-upload>
                <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                  <img alt="example" style="width: 100%" :src="previewImage" />
                </a-modal>
              </div>
            </div>
          </div>
          <div class="edit-con-foot-5">
            <div class="edit-con-foot-5-input">
              <p>设备资料：</p>
              <div>
                <quill-editor
                  v-model="content1"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)"
                >
                </quill-editor>
              </div>
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
const selectData = ['动力系统', '野狼突击队', '白虎突击队']
const selectData2 = ['扳手', '扳手', '扳手']
function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
const plainOptions = ['维修保养', '检测诊断', '装备维修', '拆装', '其他']
// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => resolve(reader.result)
//     reader.onerror = error => reject(error)
//   })
// }
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
       navTreeShow1: false,
      navTreeShow2: false,
      treeData,
      value: undefined,
      selectData,
      selectData2,
      plainOptions,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 }
        }
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 }
        }
      },
      dynamicValidateForm: {
        domains: []
      },
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ],
      content1: `<p>请编写一些内容</p>`,
      content2: `<p>请编写一些内容</p>`,
      editorOption: {
        theme: 'snow',

        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'code-block'], //加粗，斜体，下划线，'strike'删除线
            // [{ indent: '-1' }, { indent: '+1' }], // 缩进
            ['image', 'video'], //上传图片、上传视频
            ['blockquote'], //引用，代码块
            [{ list: 'ordered' }, { list: 'bullet' }] //列表
            // [{ header: 1 }, { header: 2 }],  标题，键值对的形式；1、2表示字体大小
            //[{ script: 'sub' }, { script: 'super' }],  上下标
            // [{ direction: 'rtl' }],  文本方向
            //[{ size: ['small', false, 'large', 'huge'] }],  字体大小
            //[{ header: [1, 2, 3, 4, 5, 6, false] }], 几级标题
            //[{ color: [] }, { background: [] }],  字体颜色，字体背景颜色
            //[{ font: [] }],字体
            // [{ align: [] }], 对齐方式
            //['clean'],清除字体样式
          ]
        }
      }
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
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
    handleCancel() {
      this.previewVisible = false
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleChange({ fileList }) {
      this.fileList = fileList
    },
    // 第一个search
    onSearch(value) {
      console.log(value)
    },
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    onChange(e) {
      console.log(`checked = ${e.target.checked}`)
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
  }
  &-rg {
    display: flex;
    // margin-right: 400px;
    > p:nth-child(2) {
      color: rgba(51, 51, 51, 1);
    }
  }
}
.edit {
  width: 100%;
  background: #fff;
}
.edit-bread {
  margin-bottom: 20px;
}
.edit-con {
  width: 90%;
  height: 100%;

  border-radius: 8px;
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
        }
        &-number{
            display: flex;
            >div:nth-child(2),div:nth-child(3){
                margin-left: 20px;
            }
            /deep/.ant-input-number{
                margin: 0 3px 0 10px;
            }
        }
      }
    }
    &-3 {
      position: relative;
      &-input {
        display: flex;
        margin-bottom: 20px;
        > p:nth-child(1) {
          width: 160px;
          text-align: right;
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
        }
      }
      .addinput {
        position: absolute;
        top: 30px;
        left: 530px;
        font-size: 14px;
        color: rgba(28, 147, 153, 1);
        cursor: pointer;
      }
    }
    &-5 {
      &-input {
        align-items: center;
        p {
          width: 160px;
          text-align: right;
          margin: 0;
        }
        margin-bottom: 40px;
      }
    }
  }
}

.submitbtn {
  margin-left: 25%;
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
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
//树状导航选择
/deep/.ant-select {
  width:250px;
}
/deep/.ant-upload-picture-card-wrapper {
  display: flex;
}
// 富文本编辑
/deep/.quill-editor {
  margin-left: 75px;
  border-top: 1px solid #dcdee3;
}
// /deep/.edit_container .ql-toolbar {
//   border: none !important;
//   border-top: 1px solid #dcdee3 !important;
// }
/deep/.ql-snow {
  border: none !important;
  padding-top: 10px;
}
/deep/.ql-stroke {
  stroke: #999;
  // fill: #999;
}
/deep/.ql-fill {
  stroke: #999;
}
/deep/.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
  fill: #999;
}
</style>
