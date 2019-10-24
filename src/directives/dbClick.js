// 插件方式-添加全局功能
const dbClick = {
  install: function (Vue) {
    Vue.directive('dbClick', {
      bind (el, binding) {
        // 做绑定的准备工作
        // 比如添加事件监听器，或是其他只需要执行一次的复杂操作
        el.addEventListener('click', e => {
          console.log(el)
          let handle
          if (!el.disabled) {
            el.disabled = true
            clearTimeout(handle)
            handle = setTimeout(() => {
              el.disabled = false
            }, 2000)
          }
        })
      },
      unbind: function () {
        // 做清理操作
        // 比如移除bind时绑定的事件监听器
      }
    })
  }
}
export default dbClick

// 注册全局指令main.js
// import dbClick from '@/directives/dbClick';
// Vue.use(dbClick)

// 注册局部指令.vue
// import dbClick from '@/directives/dbClick';
// directives: {
//   dbClick
// },
// 即:
// directives: {
//   dbClick: function (el, binding) {
//     el.addEventListener('click', e => {
//       if (!el.disabled) {
//         el.disabled = true;
//         setTimeout(() => {
//           el.disabled = false;
//         }, 2000)
//       }
//     })
//   }
// }
