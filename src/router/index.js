import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Main from '@/views/main'

import Login from '@/views/login'
import Home from '@/views/home'
import Content from '@/views/content'
import Form from '@/views/element/form'
import Table from '@/views/element/table'
import Collapse from '@/views/element/collapse'
import Tree from '@/views/element/tree'
import Tab from '@/views/element/tab'
import Others from '@/views/element/others'

import WangEditor from '@/views/component/wangEditor'
import QuillEditor from '@/views/component/quillEditor'
import MavonEditor from '@/views/component/mavonEditor'
import MarkdownEditor from '@/views/component/markdownEditor'
import Echarts from '@/views/component/echarts'
import IEcharts from '@/views/component/IEcharts'
import G2 from '@/views/component/g2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      // meta:{},
      hidden: true, // 是否显示在menu
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      hidden: true,
      component: Collapse
    },
    {
      path: '/home',
      name: 'UI框架学习',
      component: Home,
      icon: 'el-icon-menu',
      redirect: '/home/open',
      children: [
        {
          path: 'open',
          name: 'Element UI',
          component: Content,
          icon: 'el-icon-picture',
          redirect: '/home/open/form',
          children: [
            {path: 'form', component: Form, name: 'Form'},
            {path: 'table', component: Table, name: 'Table'},
            {path: 'collapse', component: Collapse, name: 'Collapse'},
            {path: 'tree', component: Tree, name: 'Tree'},
            {path: 'tab', component: Tab, name: 'Tab'},
            {path: 'tab/others', component: Others, name: 'Others', hidden: true}
          ]
        },
        {
          path: 'open2',
          name: 'Vux UI',
          component: Content,
          icon: 'el-icon-message',
          redirect: '/home/open2/form',
          children: []
        },
        {
          path: 'open3',
          name: 'iView UI',
          component: Content,
          icon: 'el-icon-picture',
          redirect: '/home/open3/form',
          children: []
        },
        {
          path: 'open4',
          name: 'mint UI',
          component: Content,
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
      component: Home,
      icon: 'el-icon-goods',
      redirect: '/component/editor',
      children: [
        {
          path: 'editor',
          name: 'Editor',
          component: Content,
          redirect: '/component/editor/wangEditor',
          children: [
            {path: 'wangEditor', component: WangEditor, name: 'WangEditor'},
            {path: 'quillEditor', component: QuillEditor, name: 'QuillEditor'},
            {path: 'mavonEditor', component: MavonEditor, name: 'MavonEditor'},
            {path: 'markdownEditor', component: MarkdownEditor, name: 'MarkdownEditor'},
            // { path: 'table', component: Table, name: 'Table' },
            // { path: 'others', component: Others, name: 'Others' },
          ]
        },
        {
          path: 'chart',
          name: 'Chart',
          component: Content,
          redirect: '/component/chart/echarts',
          children: [
            {path: 'echarts', component: Echarts, name: 'Echarts'},
            {path: 'IEcharts', component: IEcharts, name: 'IEcharts'},
            {path: 'g2', component: G2, name: 'G2'},
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
