const _import = require('./_import_' + process.env.NODE_ENV)

let componentElement = [
  {name: 'editor', children: [{name: 'WangEditor'}, {name: 'QuillEditor'}, {name: 'MarkdownEditor'}]}
]
export default [
  {
    path: '/component',
    name: '组件',
    component: _import('home'),
    redirect: '/component/editor',
    meta: {icon: 'el-icon-goods'},
    children: [
      {
        path: '/component/editor',
        name: 'Editor',
        component: _import('content'),
        redirect: '/component/editor/wangEditor',
        meta: {icon: 'el-icon-menu', menus: componentElement},
        children: [
          {
            path: 'wangEditor',
            component: _import('component/wangEditor'),
            name: 'WangEditor'
          },
          {
            path: 'quillEditor',
            component: _import('component/quillEditor'),
            name: 'QuillEditor'
          },
          {
            path: 'markdownEditor',
            component: _import('component/markdownEditor'),
            name: 'MarkdownEditor'
          },
          // {path: 'mavonEditor', component: _import('component/mavonEditor'), name: 'MavonEditor'},
        ]
      },
      {
        path: '/component/chart',
        name: 'Chart',
        component: _import('content'),
        redirect: '/component/chart/echarts',
        meta: {icon: 'el-icon-goods'},
        children: [
          {path: 'echarts', component: _import('component/echarts'), name: 'Echarts'},
          {path: 'IEcharts', component: _import('component/IEcharts'), name: 'IEcharts'},
          {path: 'g2', component: _import('component/g2'), name: 'G2'}
        ]
      }
    ]
  }
]
