// 开发插件（MyPlugin）
const MyPlugin = {}
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
  }
  // 2. 添加全局资源：全局组件、指令、过滤器、过渡等
  Vue.directive('my-directive', {
    bind: function (el, binding, vnode, oldVnode) {
    },
    unbind: function (el) {
    }
  })
  Vue.component('my-component', {})
  // 3. 添加全局混合
  Vue.mixin({
    created: function () {
    },
    mounted: function () {
    }
  })
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
  }
}

export default MyPlugin

// 使用插件
// import MyPlugin from '@/plugin/myplugin';
// Vue.use(MyPlugin) 或 Vue.use(MyPlugin, { //参数 })
