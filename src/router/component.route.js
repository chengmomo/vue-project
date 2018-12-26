const _import = require('./_import_' + process.env.NODE_ENV)

export default [
  {
    path: '/component',
    name: '组件',
    component: _import('home'),
    redirect: '/component/editor',
    meta: {icon: 'el-icon-goods'},
    children: [
      {
        path: 'editor',
        name: 'Editor',
        component: _import('content'),
        redirect: '/component/editor/wangEditor',
        children: [
          {path: 'wangEditor', component: _import('component/wangEditor'), name: 'WangEditor'},
          {path: 'quillEditor', component: _import('component/quillEditor'), name: 'QuillEditor'},
          // {path: 'mavonEditor', component: _import('component/mavonEditor'), name: 'MavonEditor'},
          {path: 'markdownEditor', component: _import('component/markdownEditor'), name: 'MarkdownEditor'}
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
          {path: 'g2', component: _import('component/g2'), name: 'G2'}
        ]
      }
    ]
  }
]
