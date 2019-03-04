<template>
  <div class="json-editor">
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script>
  import CodeMirror from 'codemirror'
  // import CodeMirror from 'codemirror/lib/codemirror'   // CodeMirror，必要
  import 'codemirror/lib/codemirror.css'    // css，必要
  import 'codemirror/mode/javascript/javascript'  // js的语法高亮，自动替换为你需要的语言
  // theme
  import 'codemirror/theme/rubyblue.css'
  import 'codemirror/theme/eclipse.css'
  import 'codemirror/theme/blackboard.css'

  import 'codemirror/addon/lint/lint.css'
  import 'codemirror/addon/lint/lint'
  import 'codemirror/addon/lint/json-lint'
  import 'codemirror/addon/display/autorefresh'

  // require('script-loader!jsonlint')
  import 'codemirror/addon/fold/foldgutter.css'
  import 'codemirror/addon/fold/foldgutter.js'
  import 'codemirror/addon/fold/foldcode.js'
  // import 'codemirror/mode/python/python.js'
  // import 'codemirror/addon/fold/brace-fold.js'
  // import 'codemirror/addon/fold/xml-fold.js'
  // import 'codemirror/addon/fold/indent-fold.js'
  // import 'codemirror/addon/fold/markdown-fold.js'
  // import 'codemirror/addon/fold/comment-fold.js'

  export default {
    name: 'jsonEditor',
    data() {
      return {
        jsonEditor: false
      }
    },
    props: {
      value: String,
      changeFn: Function
    },
    watch: {
      value(value) {
        const editorValue = this.jsonEditor.getValue()
        if (value !== editorValue) {
          this.jsonEditor.setValue(JSON.stringify(JSON.parse(this.value), null, 2))
        }
      }
    },
    mounted() {
      this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
        lineNumbers: true,
        mode: 'application/json',
        theme: 'eclipse',
        lint: true,
        readOnly: true, // 只读，默认false
        autoRefresh: true, // CodeMirror编辑器不加载内容直到点击
        // 代码折叠
        lineWrapping: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        // matchBrackets: true,  // 括号匹配
        // autoCloseBrackets: true

      })
      // 将json文件格式化显示
      this.jsonEditor.setValue(JSON.stringify(JSON.parse(this.value), null, 2))
      // 当输入框内容发生变化 更新value值
      this.jsonEditor.on('change', cm => {
        this.handleInput(cm)
        this.$emit('changed', cm.getValue())
        this.$emit('input', cm.getValue())
      })
    },
    methods: {
      getValue() {
        return this.jsonEditor.getValue()
      },
      handleInput(e) {
        if (this.changeFn) {
          this.changeFn(e.getValue())
        }
      }
    }
  }
</script>

<style>

  .CodeMirror {
    padding: 0;
    font-size: 13px;
    height: 100%;
  }

  .json-editor .cm-s-rubyblue span.cm-string {
    color: #F08047;
  }

  .json-editor .cm-s-eclipse span.cm-string {
    color: #a11;
  }

  /*.json-editor .cm-s-eclipse span.cm-number,*/
  /*.json-editor .cm-s-eclipse span.cm-attribute {*/
  /*color: red;*/
  /*}*/
</style>
