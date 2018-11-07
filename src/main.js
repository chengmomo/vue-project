// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import mytip from './directives/mytip'
import dbClick from './directives/dbClick/index'
import './assets/icon/iconfont.css' // 阿里图标
// 引入echarts
import echarts from 'echarts'
// 引入element-ui
import ElementUI from 'element-ui'
// 引入element-ui的默认CSS样式
import 'element-ui/lib/theme-chalk/index.css'
// import '../static/css/theme-green/index.css';   // 浅绿色主题
Vue.use(ElementUI)
Vue.use(mytip)
Vue.use(dbClick)
Vue.prototype.$echarts = echarts

// // 引入vue-quill-editor
// import VueQuillEditor from 'vue-quill-editor'
// // require styles
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// Vue.use(VueQuillEditor)
// Vue.use(mavonEditor)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
