// 开始一个插件（myplugin.js）
const MyPlugin = {}
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
  }
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind(el, binding, vnode, oldVnode) {
    }
  })
  // 3. 注入组件
  Vue.mixin({
    created: function () {
    }
  })
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
  }
}

export default MyPlugin

// 使用插件
// import MyPlugin from 'xxx';
// Vue.use(MyPlugin)
