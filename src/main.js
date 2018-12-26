// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // element-ui的默认CSS样式
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

// 注册ElementUI
ElementUI.Pagination.props.layout.default = 'sizes, prev, pager, next, jumper'
Vue.use(ElementUI)

// 注册自定义指令
// Vue.use(mytip)
// Vue.use(dbClick)
// Vue.directive('***',{
//   inserted: function(el){
//     //....
//   }
// })

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 自动化注册全局组件
const requireComponent = require.context('./components/global', true, /\.vue$/)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
  const componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '')
  // 全局注册组件
  Vue.component(
    componentName.replace(/\//, '-'),
    // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
