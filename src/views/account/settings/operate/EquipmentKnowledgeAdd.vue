<template>
  <div>
    <div class="edit-bread">
      <s-breadcrumb />
    </div>
    <div class="edit-con">
      <div class="edit-con-top">
        <div></div>
        <div>装备知识修改</div>
      </div>
      <div class="edit-con-foot">
        <div class="edit-con-foot-1">
          <div class="edit-con-foot-1-lf">
            <p style="width:100px; text-align:right">归属装备：</p>
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
            <p>知识名称：</p>
            <div class="">
              <a-input placeholder="××××××" style="width: 320px" @search="onSearch" />
            </div>
          </div>
        </div>
        <div class="edit-con-foot-2">
          <div class="edit-con-foot-2-input">
            <p>对应装备：</p>
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
          <div class="edit-con-foot-2-input example1">
            <p>所属分系统：</p>
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
            <p>知识类别：</p>
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
        <div class="edit-con-foot-3">
          <div class="edit-con-foot-3-input">
            <p>知识摘要：</p>
            <div class="">
              <a-textarea placeholder="Basic usage" :rows="4" style="width: 360px" />
            </div>
          </div>
        </div>
        <div class="edit-con-foot-5">
          <div class="edit-con-foot-5-input">
            <p>关键词：</p>
            <div class="">
              <a-input placeholder="××××××" style="width: 320px" @search="onSearch" />
            </div>
          </div>
        </div>

        <div class="edit-con-foot-4">
          <div class="edit_container">
            <p>维修知识详情（可输入音视频文）</p>
            <span class="edit_container-btn1">模板下载</span>
            <span class="edit_container-btn2">上传</span>
            <span class="edit_container-btn3">上次使用模板</span>
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
      <div class="submitbtn">
        <a-button>提交</a-button>
        <a-button>重置</a-button>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/tools/Breadcrumb'
const selectData = ['雪豹突击队', '野狼突击队', '白虎突击队']
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
      navTreeShow1: false,
      navTreeShow2: false,
      treeData,
      value: undefined,
      // content1: `<p>请编写一些内容</p>`,
      content2: `<p>必填（知识详情上传方法）</p>`,
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
.edit-con-foot-1-lf {
  p:nth-child(4) {
    margin-left: 10px;
    width: 28px;
    // height:20px;
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
    margin-top: 40px;
    &-1 {
      width: 90%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      // margin-bottom: 15px;
      &-lf {
        display: flex;
        align-items: center;
      }
    }
    &-2 {
      margin-bottom: 20px;
    }
  }
}

.edit-con-foot-2-input {
  display: flex;
  align-items: center;
  p {
    width: 100px;
    text-align: right;
    margin: 0;
  }
}
.edit-con-foot {
  padding-left: 10%;
}

/deep/.ant-select {
  width: 320px;
}

.edit-con-foot-3-input {
  display: flex;
  align-items: center;
  p {
    width: 100px;
    text-align: right;
  }
  margin-bottom: 20px;
}

.edit-con-foot-5-input {
  display: flex;
  align-items: center;
  p {
    width: 100px;
    text-align: right;
    margin: 0;
  }
  margin-bottom: 40px;
}

//富文本编辑器
/deep/.edit_container {
  width: 70%;
  margin-bottom: 40px;
  p {
    display: inline-block;
  }
  .edit_container-btn1 {
    display: inline-block;
    text-align: center;
    margin-left: 18px;
    width: 88px;
    height: 23px;
    border-radius: 3px;
    border: 1px solid rgba(28, 147, 153, 1);
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(28, 147, 153, 1);
    line-height: 24px;
  }
  .edit_container-btn3 {
    display: inline-block;
    text-align: center;
    margin-left: 20px;
    width: 116px;
    height: 23px;
    border-radius: 3px;
    border: 1px solid rgba(28, 147, 153, 1);
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(28, 147, 153, 1);
    line-height: 24px;
  }
  .edit_container-btn2 {
    display: inline-block;
    text-align: center;
    margin-left: 20px;
    width: 60px;
    height: 23px;
    border-radius: 3px;
    border: 1px solid rgba(28, 147, 153, 1);
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(28, 147, 153, 1);
    line-height: 24px;
  }
}
/deep/.edit_container .ql-toolbar {
  border: none !important;
  border-top: 1px solid #dcdee3 !important;
}
/deep/.ql-snow {
  border: none !important;
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
  margin-left: 30%;
  // margin-bottom: 40px;
  height: 80px;
}
/deep/.ant-btn {
  margin-right: 40px;
  border: 1px solid #097b7c;
  color: #097b7c;
  width: 72px;
  height: 29px;
}
/deep/.ant-btn:hover {
  color: #fff;
  background: #097b7c;
}
</style>
