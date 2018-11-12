import dbClick from './dbClick'

const install = function(Vue) {
  Vue.directive('dbClick', dbClick)
}

// 可注释掉
// if (window.Vue) {
//   window.dbClick = dbClick
//   Vue.use(install); // eslint-disable-line
// }

dbClick.install = install
export default dbClick

// 注册全局指令main.js
// import dbClick from '@/directives/dbClick/index';
// Vue.use(dbClick)

// 注册局部指令.vue
// import dbClick from '@/directives/dbClick/dbClick';
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
