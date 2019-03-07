<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          <markdown-editor v-model="content" ref="markdownEditor" :configs="configs"></markdown-editor>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          <div>预览效果：</div>
          <vue-markdown class="result-html full-height"
                        :watches="['show','html','breaks','linkify','emoji','typographer','toc']" :source="content"
                        :show="show" :html="html" :breaks="breaks" :linkify="linkify" :emoji="emoji"
                        :typographer="typographer" :toc="toc" toc-id="toc"></vue-markdown>
          <!-- <pre>
          </pre> -->
        </el-card>
      </el-col>
    </el-row>

  </div>

</template>

<script>
  import {markdownEditor} from 'vue-simplemde'
  import './simplemde.min.css'
  import VueMarkdown from 'vue-markdown'  // 一个基于vue.js的markdown语法解析插件
  export default {
    name: 'MarkdownEditor',
    components: {
      VueMarkdown, markdownEditor
    },
    data () {
      return {
        content: '可以开始编写您的Markdown文档了！',
        configs: {
          status: true,
          // initialValue: 'Hello BBK',
          renderingConfig: {
            codeSyntaxHighlighting: true,
            highlightingTheme: 'atom-one-light'
          }
        },
        show: true,
        html: true,
        breaks: true,
        linkify: true,
        emoji: true,
        typographer: true,
        toc: false
      }
    },
    methods: {}
  }
</script>

<style scoped>
  /*@import '~simplemde/dist/simplemde.min.css';*/
  .box-card {
    line-height: 40px;
  }

</style>
