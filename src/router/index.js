import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import Main from '@/views/main'
// import Login from '@/views/login'
// import Error from '@/views/error/Error'
// import Home from '@/views/home'
// import Content from '@/views/content'
// import Form from '@/views/element/form'
// import Table from '@/views/element/table'
// import Collapse from '@/views/element/collapse'
// import Tree from '@/views/element/tree'
// import Tab from '@/views/element/tab'
// import Others from '@/views/element/others'
//
// import WangEditor from '@/views/component/wangEditor'
// import QuillEditor from '@/views/component/quillEditor'
// import MavonEditor from '@/views/component/mavonEditor'
// import MarkdownEditor from '@/views/component/markdownEditor'
// import Echarts from '@/views/component/echarts'
// import IEcharts from '@/views/component/IEcharts'
// import G2 from '@/views/component/g2'

// 开发环境不适用懒加载
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      // meta:{},
      hidden: true, // 是否显示在menu
      component: _import('login')
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
    },
    {
      path: '/home',
      name: 'UI框架学习',
      component: _import('home'),
      icon: 'el-icon-menu',
      redirect: '/home/open',
      children: [
        {
          path: 'open',
          name: 'Element UI',
          component: _import('content'),
          icon: 'el-icon-picture',
          redirect: '/home/open/form',
          children: [
            {path: 'form', component: _import('element/form'), name: 'Form', meta: ['1', '2']},
            {path: 'table', component: _import('element/table'), name: 'Table'},
            {path: 'collapse', component: _import('element/collapse'), name: 'Collapse'},
            {path: 'tree', component: _import('element/tree'), name: 'Tree'},
            {path: 'tab', component: _import('element/tab'), name: 'Tab'},
            {path: 'tab/others', component: _import('element/others'), name: 'Others', hidden: true}
          ]
        },
        {
          path: 'open2',
          name: 'Vux UI',
          component: _import('content'),
          icon: 'el-icon-message',
          redirect: '/home/open2/form',
          children: []
        },
        {
          path: 'open3',
          name: 'iView UI',
          component: _import('content'),
          icon: 'el-icon-picture',
          redirect: '/home/open3/form',
          children: []
        },
        {
          path: 'open4',
          name: 'mint UI',
          component: _import('content'),
          icon: 'el-icon-picture',
          redirect: '/home/open4/form',
          children: []
        }
        // { path: '/table', component: Table, name: 'Table' },
        // { path: '/others', component: Others, name: 'Others' },
      ]
    },
    {
      path: '/component',
      name: '组件',
      component: _import('home'),
      icon: 'el-icon-goods',
      redirect: '/component/editor',
      children: [
        {
          path: 'editor',
          name: 'Editor',
          component: _import('content'),
          redirect: '/component/editor/wangEditor',
          children: [
            {path: 'wangEditor', component: _import('component/wangEditor'), name: 'WangEditor'},
            {path: 'quillEditor', component: _import('component/quillEditor'), name: 'QuillEditor'},
            {path: 'mavonEditor', component: _import('component/mavonEditor'), name: 'MavonEditor'},
            {path: 'markdownEditor', component: _import('component/markdownEditor'), name: 'MarkdownEditor'},
            // { path: 'table', component: Table, name: 'Table' },
            // { path: 'others', component: Others, name: 'Others' },
          ]
        },
        {
          path: 'chart',
          name: 'Chart',
          component: _import('content'),
          redirect: '/component/chart/echarts',
          children: [
            {path: 'echarts', component: _import('component/echarts'), name: 'Echarts'},
            {path: 'IEcharts', component: _import('component/IEcharts'), name: 'IEcharts'},
            {path: 'g2', component: _import('component/g2'), name: 'G2'},
          ]
        }
      ]
    },
    /*{
      path: '/',
      name: 'Hello',
      hidden: true,
      redirect (to) {
        return 'login'
      }
    }, {
      path: '/login',
      name: '登录',
      hidden: true,
      component: Login
    },
    {
      path: '/function',
      name: '静态演示',
      icon: 'inbox',
      component: Home,
      redirect: '/function/open',
      children: [{
        path: 'open',
        name: '公共内容',
        icon: 'inbox',
        component: Content,
        redirect: '/function/open/echarts',
        children: [{
          path: 'echarts',
          name: '图表',
          icon: 'bar-chart',
          component: Function.Open.Echarts
        }, {
          path: 'list',
          name: '列表',
          icon: 'reorder',
          component: Function.Open.List
        }, {
          path: 'form',
          name: '表单',
          icon: 'edit',
          component: Function.Open.Form
        }, {
          path: 'vuex',
          name: 'Vuex',
          icon: 'window-restore',
          component: Function.Open.Vuex
        }, {
          path: 'test404',
          name: '测试404',
          icon: 'window-restore',
          component: Function.Open.Test404
        }]
      }
      ]}
    },
    {
      path: '/demo',
      name: '完整交互',
      icon: 'inbox',
      component: Home,
      redirect: '/demo/article',
      children: [{
        path: 'article',
        name: '文章管理',
        icon: 'inbox',
        component: Content,
        redirect: '/demo/article/list',
        children: [{
          path: 'list',
          name: '文章列表',
          icon: 'reorder',
          component: Demo.Article.List
        }, {
          path: 'edit',
          name: '编辑文章',
          icon: 'edit',
          component: Demo.Article.Edit
        }]
      },{
        path: 'order',
        name: '订单管理',
        icon: 'inbox',
        component: Content,
        redirect: '/demo/order/list',
        children: [{
          path: 'list',
          name: '订单列表',
          icon: 'reorder',
          component: Demo.Order.List
        }, {
          path: 'edit',
          name: '编辑订单',
          icon: 'edit',
          component: Demo.Order.Edit
        }]
}
      ]
    }*/
  ]
})
