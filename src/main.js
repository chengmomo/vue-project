// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './vuex/store'

// 引入element-ui
import ElementUI from 'element-ui'
// 引入element-ui的默认CSS样式
import 'element-ui/lib/theme-chalk/index.css'
// import '../static/css/theme-green/index.css';   // 浅绿色主题
import '../static/iconfont/iconfont.css' // 阿里图标
import './assets/css/index.scss' // global css

import * as filters from './filters' // 全局filter
import '@/directives/directives'  // 全局自定义directives
// import mytip from './directives/mytip' // 引入单个directive
// import dbClick from './directives/dbClick/index' //引入单个directive
// 引入echarts
import echarts from 'echarts'
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
Vue.use(ElementUI)
// Vue.use(mytip)
// Vue.use(dbClick)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

// Vue.directive('***',{
//   inserted: function(el){
//     //....
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
