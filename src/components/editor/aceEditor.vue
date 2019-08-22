<template>
  <div class="json-editor">
    <!--lang: html、json；theme: chrome, github, monokai, eclipse, tomorrow, iplastic-->
    <editor ref='myEditor' v-model="content" lang="json" theme="eclipse"
            @init="editorInit" @input="changeData"
            height="400"
            id="editor"></editor>
  </div>
</template>

<script>
  import editor from 'vue2-ace-editor'
  // import 'brace/ext/language_tools'
  import 'brace/mode/json'
  import 'brace/theme/eclipse'

  export default {
    name: 'aceEditor',
    components: {editor},
    props: {
      value: String,
      readOnly: Boolean
    },
    data () {
      return {
        content: ''
      }
    },
    mounted () {
      this.content = JSON.stringify(JSON.parse(this.value), null, 2)
      // let editor = this.$refs.myEditor.editor
    },
    methods: {
      editorInit (editor) {
        // require('brace/ext/language_tools') // language extension prerequsite...
        // require('brace/mode/html')
        // require('brace/mode/javascript')    // language
        // require('brace/mode/json')
        // require('brace/mode/less')
        // require('brace/theme/chrome')
        // require('brace/snippets/javascript') // snippet
        // 设置编辑器样式，对应theme-*.js文件
        // editor.setTheme('brace/theme/eclipse')
        // // 设置代码语言，对应mode-*.js文件
        // editor.session.setMode('brace/mode/json')
        // 设置打印线是否显示
        editor.setShowPrintMargin(false)
        // 设置字体大小
        editor.setFontSize(13)
        document.getElementById('editor').style.fontSize = '13px'  // 会延迟
        if (this.readOnly) {
          editor.setReadOnly(true)
        }
      },
      changeData: function (value) {
        // this.content = value
      }
    }
  }
</script>

<style lang="scss">
  .ace-tomorrow .ace_constant.ace_character,
  .ace-tomorrow .ace_constant.ace_language,
  .ace-tomorrow .ace_constant.ace_numeric,
  .ace-tomorrow .ace_keyword.ace_other.ace_unit,
  .ace-tomorrow .ace_support.ace_constant,
  .ace-tomorrow .ace_variable.ace_parameter {
    color: #C82829
    /*F5871F*/
  }

  .ace-tomorrow .ace_keyword,
  .ace-tomorrow .ace_meta,
  .ace-tomorrow .ace_storage,
  .ace-tomorrow .ace_storage.ace_type,
  .ace-tomorrow .ace_support.ace_type {
    color: #8959A8
  }

  .ace-tomorrow .ace_heading,
  .ace-tomorrow .ace_markup.ace_heading,
  #editor .ace-tomorrow .ace_string {
    /*color: #718C00;*/
    color: #C82829
  }
</style>
