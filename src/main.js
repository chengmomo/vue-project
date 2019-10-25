// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // element-ui的默认CSS样式
// import '../static/css/theme-green/index.css';   // 自定义主题-浅绿色
import '../static/iconfont/iconfont.css' // 阿里图标
import './assets/css/index.scss' // global css

// 引入UEditor
import '../static/js/UE/ueditor.config.js'
import '../static/js/UE/ueditor.all.min.js'
import '../static/js/UE/lang/zh-cn/zh-cn.js'
import '../static/js/UE/ueditor.parse.min.js'

// 引入过滤器、指令等
import {global} from '@/global/global'
import * as filters from './filters' // 全局filter
import '@/directives/directives'  // 全局自定义directives
// import mytip from './directives/mytip' // 引入单个directive
// import dbClick from './directives/dbClick' //引入插件方式定义的directive
import i18n from './assets/i18n/index'

// 引入百度地图
import BaiduMap from 'vue-baidu-map'
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

import VueClipboards from 'vue-clipboard2'
import VueCountUp from 'vue-z-countup'

// import VueCodemirror from 'vue-codemirror'
// import 'codemirror/lib/codemirror.css' // css，必要
// Vue.use(VueCodemirror)

ElementUI.Pagination.props.layout.default = 'sizes, prev, pager, next, jumper'
Vue.use(ElementUI)
Vue.use(VueClipboards)
Vue.use(VueCountUp)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YFS05bu24wzBZ4P3dCyGrBAIQVWYlEz1'
})

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

// 加载用户主题
if (localStorage.getItem('themeValue')) {
  global.changeTheme(localStorage.getItem('themeValue'))
} else {
  global.changeTheme('default')
}

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

// 创建实例化对象
/* eslint-disable no-new */
new Vue({
  el: '#app', // 目的地: el: '#app' 或 $mount(document.querySelector('#app'))
  router,
  store,
  i18n,
  components: {App}, // 挂子
  template: '<App/>' // 用子：如果template定义了内容则优先加载，否则加载#app的模板
})
// }).$mount(document.querySelector('#app'))
