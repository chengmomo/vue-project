import Vue from 'vue'
import Time from '../global/time'

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
  }
})

// <div v-time="(new Date()).getTime()"></div>
// <div v-time="1488930695721"></div>
Vue.directive('time', {
  bind: function (el, binding) {
    el.innerHTML = Time.getFormatTime(binding.value)
    // 定义变量：el.xxx
    el.__timeout__ = setInterval(function () {
      el.innerHTML = Time.getFormatTime(binding.value)
    }, 60000)
  },
  unbind: function (el) {
    clearInterval(el.__timeout__)
    delete el.__timeout__
  }
})

export {Vue}

// 1、建立保存所有指令的全局文件：directives/directives.js
// 2、在main.js（入口JS文件）中引入，可以省略文件后缀
// import directive from '@/directives/directives'
