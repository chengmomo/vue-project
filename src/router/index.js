import Vue from 'vue'
import Router from 'vue-router'
// 首页模块路由
import home from './home.route'
// 组件模块路由
import component from './component.route'

// 开发环境不适用懒加载
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    paths: []                    ...
  }
 **/

const routes = [
  {
    path: '/',
    name: 'Login',
    // meta:{},
    hidden: true, // 是否显示在menu
    component: _import('Login')
  },
  {
    path: '*',
    hidden: true,
    component: _import('error/Error')
  },
  {
    path: '/test',
    name: 'Test',
    hidden: true,
    component: _import('element/collapse')
  }
]
const router = new Router({
  routes: [
    ...routes,
    ...home,
    ...component
  ]
})

// 动态添加路由
// router.addRoutes([
//   {path: '/test2', component: resolve => require(['@/components/test2'], resolve)}
// ])

// 路由拦截器
// router.beforeEach((to, from, next) => {
  // if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
  //   if (localStorage.getItem('username')) { // 判断是否登录
  //     next()
  //   } else { // 没登录 则跳转页面
  //     next({
  //       path: '/login',
  //       query: {redirect: to.fullPath}
  //     })
  //   }
  // } else {
  //   next()
  // }
// })

export default router
