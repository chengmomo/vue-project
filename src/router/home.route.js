const _import = require('./_import_' + process.env.NODE_ENV)
const title = 'UI框架学习'

let menuElement = [
  {name: 'Form'},
  {name: 'Tree'},
  {name: 'Table'},
  {name: 'Collapse'},
  {name: 'Tabs'}
]
export default [
  {
    path: '/home',
    name: 'tab.home',
    component: _import('Layout'),
    redirect: '/home/guide',
    meta: {title, icon: 'el-icon-menu'},
    children: [
      {
        path: '/home/guide',
        name: 'Guide',
        component: _import('guide/index'),
        meta: {title, icon: 'el-icon-info'}
      },
      {
        path: '/home/element',
        name: 'Element',
        component: _import('Content'),
        redirect: '/home/element/tree',
        meta: {title, icon: 'el-icon-picture', menus: menuElement},
        children: [
          {path: 'form', component: _import('element/form'), name: 'Form', meta: {title}},
          {path: 'tree', component: _import('element/tree'), name: 'Tree', meta: {title}},
          {path: 'table', component: _import('element/table'), name: 'Table', meta: {title}},
          {path: 'collapse', component: _import('element/collapse'), name: 'Collapse', meta: {title}},
          {
            path: 'tabs',
            component: _import('element/tabs'),
            name: 'Tabs',
            redirect: '/home/element/tabs/FormDemo',
            meta: {title},
            children: [
              {
                path: 'FormDemo',
                component: _import('element/form'),
                name: 'FormDemo',
                meta: {title}
              },
              {
                path: 'CollapseDemo',
                component: _import('element/form'),
                name: 'CollapseDemo',
                meta: {title}
              },
              {
                path: 'TabPane',
                component: _import('element/tabPane'),
                name: 'TabPane',
                meta: {title}
              }]
          }
        ]
      },
      {
        path: '/home/other',
        name: 'Other',
        component: _import('Content'),
        redirect: '/home/other/tab',
        meta: {icon: 'el-icon-menu'},
        children: [{
          path: 'tab',
          component: _import('element/tabs'),
          name: 'Tab',
          meta: {title}
        }]
      }
    ]
  }
]
