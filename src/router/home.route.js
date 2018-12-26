const _import = require('./_import_' + process.env.NODE_ENV)

export default [
  {
    path: '/home',
    name: 'UI框架学习',
    component: _import('home'),
    redirect: '/home/open',
    meta: {icon: 'el-icon-menu'},
    children: [
      {
        path: 'open',
        name: 'Element UI',
        component: _import('content'),
        redirect: '/home/open/form',
        meta: {icon: 'el-icon-picture'},
        children: [
          {path: 'form', component: _import('element/form'), name: 'Form', meta: {paths: ['1', '2']}},
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
        redirect: '/home/open2/form',
        meta: {icon: 'el-icon-message'},
        children: []
      },
      {
        path: 'open3',
        name: 'iView UI',
        component: _import('content'),
        redirect: '/home/open3/form',
        meta: {icon: 'el-icon-picture'},
        children: []
      },
      {
        path: 'open4',
        name: 'mint UI',
        component: _import('content'),
        redirect: '/home/open4/form',
        meta: {icon: 'el-icon-picture'},
        children: []
      }
      // { path: '/table', component: Table, name: 'Table' },
      // { path: '/others', component: Others, name: 'Others' },
    ]
  }
]
