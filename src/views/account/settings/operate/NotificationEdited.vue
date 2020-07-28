<template>
  <div>
    <div class="edit-bread">
      <s-breadcrumb />
    </div>

    <div class="edit-con">
      <!-- 上面的部分 -->
      <div class="edit-con-top">
        <div></div>
        <div>基本信息</div>
      </div>
      <div class="edit-con-foot">
        <div class="edit-con-foot-1">
          <div class="edit-con-foot-1-lf">
            <p>归属装备：</p>
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
            <p>装备编号：</p>
            <p>JT100000-002034</p>
          </div>
        </div>
        <div class="edit-con-foot-2">
          <div class="edit-con-foot-2-input">
            <p>部队信息：</p>
            <div class="">
              <a-select
                showSearch
                :defaultValue="selectData[0]"
                optionFilterProp="children"
                style="width: 320px"
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
            <p>案例名称：</p>
            <div class="">
              <a-input placeholder="××××××" style="width: 320px" @search="onSearch" />
            </div>
          </div>
        </div>

        <div class="edit-con-foot-2">
          <div class="edit-con-foot-2-input">
            <p>对应装备名称：</p>
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
        <div class="edit-con-foot-2">
          <div class="edit-con-foot-2-input">
            <p>对应故障部件或分系统：</p>
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
        <div class="edit-con-foot-3">
          <div class="edit-con-foot-3-input">
            <p>摘要：</p>
            <div class="">
              <a-textarea placeholder="请输入描述..." :rows="4" style="width: 360px" />
            </div>
          </div>
        </div>
        <div class="edit-con-foot-5">
          <div class="edit-con-foot-5-input">
            <p>故障现象及原因：</p>
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
        <div class="edit-con-foot-5">
          <div class="edit-con-foot-5-input">
            <p>目前已完成故障排除描述：</p>
            <div>
              <quill-editor
                v-model="content2"
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
</template>
<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
const selectData = ['动力系统', '野狼突击队', '白虎突击队']
const selectData2 = ['火箭炮', '火箭炮', '火箭炮']
// function getBase64(img, callback) {
//   const reader = new FileReader()
//   reader.addEventListener('load', () => callback(reader.result))
//   reader.readAsDataURL(img)
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
      selectData,
      selectData2,
      navTreeShow1: false,
      navTreeShow2: false,
      treeData,
      value: undefined,
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
    // 第一个search
    onSearch(value) {
      console.log(value)
    },

    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {} // 内容改变事件
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
    > p:nth-child(1) {
      width: 170px;
      text-align: right;
    }
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
.edit-bread {
  margin-bottom: 20px;
}
.edit-con {
  height: 100%;
  background: #fff;
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
          width: 170px;
          text-align: right;
          margin: 0;
        }
      }
    }
    &-3 {
      // position: relative;
      margin-bottom: 20px;
      &-input {
        display: flex;
        align-items: center;
        p {
          width: 170px;
          text-align: right;
        }
      }
    }
    // &-4 {
    //   display: flex;
    //   align-items: center;

    //   p {
    //     width: 160px;
    //     text-align: right;
    //   }
    // }
    &-5 {
      &-input {
        // display: flex;
        margin-bottom: 40px;
        align-items: center;
        p {
          width: 170px;
          text-align: right;
          margin: 0;
        }
        /deep/.quill-editor {
          width: 70%;
          margin-left: 30px;
          border-top: 1px solid rgba(220, 222, 227, 1);
        }
      }
    }
  }
}

/deep/.edit_container .ql-toolbar {
  border: none !important;
  border-top: 1px solid #dcdee3 !important;
}
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
//树状导航选择
/deep/.ant-select {
  width: 320px;
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
</style>
