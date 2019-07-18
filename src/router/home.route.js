const _import = require('./_import_' + process.env.NODE_ENV)
const title = 'UI框架学习'

let menuElement = [
  {name: 'Form'},
  {name: 'Tree'},
  {name: 'Table'},
  {name: 'Collapse'}
]
export default [
  {
    path: '/home',
    name: 'UI框架学习',
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
        redirect: '/home/element/form',
        meta: {title, icon: 'el-icon-picture', menus: menuElement},
        children: [
          {
            path: 'form',
            component: _import('element/form'),
            name: 'Form',
            // meta: {menus: menuElement}
          },
          {
            path: 'tree',
            component: _import('element/tree'),
            name: 'Tree',
            // meta: {menus: menuElement}
          },
          {
            path: 'table',
            component: _import('element/table'),
            name: 'Table',
            // meta: {menus: menuElement}
          },
          {
            path: 'collapse',
            component: _import('element/collapse'),
            name: 'Collapse',
            // meta: {menus: menuElement}
          }
          // {path: 'tab/others', component: _import('element/others'), name: 'Others', hidden: true}
        ]
      },
      {
        path: '/home/other',
        name: 'Other',
        component: _import('Content'),
        redirect: '/home/other/tabs',
        meta: {icon: 'el-icon-menu'},
        children: [{
          path: 'tabs',
          component: _import('element/tabs'),
          name: 'Tabs',
          meta: {title}
        }]
      }
      // {
      //   path: '/home/vux',
      //   name: 'Vux',
      //   component: _import('Content'),
      //   // redirect: '/home/Vux/form',
      //   meta: {icon: 'el-icon-picture'},
      //   children: []
      // },
      // {
      //   path: '/home/iView',
      //   name: 'iView',
      //   component: _import('Content'),
      //   // redirect: '/home/iView/form',
      //   meta: {icon: 'el-icon-picture'},
      //   children: []
      // },
      // {
      //   path: '/home/mint',
      //   name: 'mint',
      //   component: _import('Content'),
      //   // redirect: '/home/mint/form',
      //   meta: {icon: 'el-icon-message'},
      //   children: []
      // }
    ]
  }
]
