// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'
import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './components/global.less'
import { FormModel,TreeSelect} from 'ant-design-vue';
Vue.use(FormModel);
Vue.use(TreeSelect);

import { Dialog } from '@/components'
Vue.config.productionTip = false
// mount axios Vue.$http and this.$http
Vue.use(VueAxios)
Vue.use(Dialog)
Vue.use(ElementUI)
Vue.use(VueQuillEditor)


new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
