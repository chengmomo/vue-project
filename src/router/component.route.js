const _import = require('./_import_' + process.env.NODE_ENV)

let componentElement = [
  {
    name: 'Editor',
    children: [{name: 'WangEditor'}, {name: 'QuillEditor'}, {name: 'MarkdownEditor'}, {name: 'UEditor'}]
  },
  {name: 'JsonEditor'}
]
// UE编辑器
export default [
  {
    path: '/component',
    name: '组件',
    component: _import('Layout'),
    redirect: '/component/clipboard',
    meta: {icon: 'el-icon-goods'},
    children: [
      {
        path: '/component/clipboard',
        name: 'Clipboard',
        component: _import('clipboard/index'),
        meta: {icon: 'el-icon-printer'}
      },
      {
        path: '/component/editor',
        name: 'Editor',
        component: _import('Content'),
        redirect: '/component/editor/wangEditor',
        meta: {icon: 'el-icon-menu', menus: componentElement},
        children: [
          {
            path: 'wangEditor',
            component: _import('component/editor/wangEditor'),
            name: 'WangEditor'
          },
          {
            path: 'quillEditor',
            component: _import('component/editor/quillEditor'),
            name: 'QuillEditor'
          },
          {
            path: 'markdownEditor',
            component: _import('component/editor/markdownEditor'),
            name: 'MarkdownEditor'
          },
          {
            path: 'UEditor',
            component: _import('component/editor/UEditor'),
            name: 'UEditor'
          },
          // {path: 'mavonEditor', component: _import('component/editor/mavonEditor'), name: 'MavonEditor'},
        ]
      },
      {
        path: '/component/chart',
        name: 'Chart',
        component: _import('Content'),
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
