// import './tips.css'; // 引入需要的样式文件
const vueTips = {}
vueTips.install = (Vue, options = {}) => {
  Vue.directive('mytip', {
    bind: function (el, binding, vnode) {
      // 鼠标移入
      el.onmouseover = function () {
        // ...
        console.log('onmouseover')
      }
      // 鼠标离开
      el.onmouseout = function () {
        // ...
        console.log('onmouseout')
      }
    }
  })
}

export default vueTips

// 注册全局指令main.js
// import vueTips from 'xxx';
// Vue.use(vueTips)
