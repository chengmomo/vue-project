<template>
  <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="复制粘贴" name="first">
      <span slot="label"><i class="el-icon-date"></i> 复制粘贴</span>
      <div class="yeluosen">
        <!--<input type="text" v-model="message">-->
        <!--<textarea v-model="message">这是幕后黑手</textarea>-->
        <el-row class="editor-title__wrap" type="flex" justify="space-between">
          <el-col :span="12">
            完整物模型
          </el-col>
          <el-col :span="12" align="right">
            <el-button type="button"
                       v-clipboard:copy="message"
                       v-clipboard:success="onCopy"
                       v-clipboard:error="onError">全部复制
            </el-button>
          </el-col>
        </el-row>
        <el-input
          class="editor"
          type="textarea"
          disabled
          :autosize="{ minRows: 2, maxRows: 18}"
          placeholder="这是幕后黑手"
          v-model="message">
        </el-input>
      </div>
      <div class="wrapper" style="margin-top: 40px">
        <p id="text">我把你当兄弟你却想着复制我？</p>
        <textarea id="input">这是幕后黑手</textarea>
        <input type="button" @click="copyUrl()" value="点击复制代码"/>
      </div>
    </el-tab-pane>
    <el-tab-pane label="ace-editor" name="second">
      <el-row class="editor-title__wrap" type="flex" justify="space-between">
        <el-col :span="12">
          完整物模型
        </el-col>
        <el-col :span="12" align="right">
          <el-button type="button"
                     v-clipboard:copy="message"
                     v-clipboard:success="onCopy"
                     v-clipboard:error="onError">全部复制
          </el-button>
        </el-col>
      </el-row>
      <ace-editor :value="message" :readOnly="readOnly"></ace-editor>
    </el-tab-pane>
    <el-tab-pane label="code-mirror" name="third">
      <el-row class="editor-title__wrap" type="flex" justify="space-between">
        <el-col :span="12">
          完整物模型
        </el-col>
        <el-col :span="12" align="right">
          <el-button type="button"
                     v-clipboard:copy="message"
                     v-clipboard:success="onCopy"
                     v-clipboard:error="onError">全部复制
          </el-button>
        </el-col>
      </el-row>
      <json-editor :value="message" style="height: 400px"></json-editor>
      <!--<codemirror ref="myEditor" v-model="message" :options="options"></codemirror>-->
    </el-tab-pane>
    <el-tab-pane label="其他" name="fourth">
      <el-button @click="jumpTo">跳转至Tabs</el-button>
      <wang-editor></wang-editor>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import WangEditor from '../component/wangEditor'
  import JsonEditor from '../../components/editor/jsonEditor'
  import AceEditor from '../../components/editor/aceEditor'

  // import http from '../../api/product'
  // import $ from 'jquery'
  // import {codemirror} from 'vue-codemirror-lite'
  import {codemirror} from 'vue-codemirror'
  import 'codemirror/lib/codemirror.css' // css，必要
  // 导入选中的theme文件
  import 'codemirror/theme/blackboard.css'
  import 'codemirror/theme/eclipse.css'
  import 'codemirror/theme/rubyblue.css'
  // require htmlmixed mode
  import 'codemirror/mode/vue/vue.js'
  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/addon/lint/lint'
  import 'codemirror/addon/lint/json-lint'
  // require('script-loader!jsonlint')
  // require hint addon for javacript
  // require('codemirror/addon/hint/show-hint.js')
  // require('codemirror/addon/hint/show-hint.css')
  // require('codemirror/addon/hint/javascript-hint.js')
  import 'codemirror/addon/display/autorefresh'

  import 'codemirror/addon/fold/foldgutter.js'
  import 'codemirror/mode/python/python.js'
  import 'codemirror/addon/fold/foldcode.js'
  import 'codemirror/addon/fold/brace-fold.js'
  import 'codemirror/addon/fold/xml-fold.js'
  import 'codemirror/addon/fold/indent-fold.js'
  import 'codemirror/addon/fold/markdown-fold.js'
  import 'codemirror/addon/fold/comment-fold.js'

  export default {
    components: {WangEditor, codemirror, JsonEditor, AceEditor},
    data() {
      return {
        activeName2: 'first',
        readOnly: true,
        options: {
          tabSize: 2,
          lineNumbers: true, // 显示行号
          // 代码折叠
          lineWrapping: true,
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
          matchBrackets: true,  // 括号匹配
          autoCloseBrackets: true,
          mode: 'application/json', // application/json、{name: 'javascript', json: true}
          // extraKeys: {'Ctrl-Space': 'autocomplete'},
          theme: 'eclipse', // 选中的theme: blackboard、eclipse
          readOnly: true, // 只读，默认false
          autoRefresh: true
        },
        code: 'const str = "hello world"',
        a: '[{"accNum":0,"activeTime":"2019-02-07","newNum":0},{"accNum":0,"activeTime":"2019-02-08","newNum":0},{"accNum":0,"activeTime":"2019-02-09","newNum":0},{"accNum":0,"activeTime":"2019-02-10","newNum":0},{"accNum":0,"activeTime":"2019-02-11","newNum":0},{"accNum":0,"activeTime":"2019-02-12","newNum":0},{"accNum":0,"activeTime":"2019-02-13","newNum":0}]',
        // message: '这里是复制的内容\n' + '水水水水\n' + '2',
        message: '{\n' +
          '\t"properties": [{\n' +
          '\t\t"propertyId": 7362,\n' +
          '\t\t"identifier": "shuxingdate",\n' +
          '\t\t"propertyName": "shuxingdate",\n' +
          '\t\t"description": "shuxingdate",\n' +
          '\t\t"dataType": "date",\n' +
          '\t\t"dataSchema": "\\"len\\":8"\n' +
          '\t}, {\n' +
          '\t\t"propertyId": 7361,\n' +
          '\t\t"identifier": "shuxingstring",\n' +
          '\t\t"propertyName": "shuxingstring",\n' +
          '\t\t"description": "shuxingstring",\n' +
          '\t\t"dataType": "string",\n' +
          '\t\t"dataSchema": "\\"len\\":5"\n' +
          '\t}, {\n' +
          '\t\t"propertyId": 7360,\n' +
          '\t\t"identifier": "shuxingbool",\n' +
          '\t\t"propertyName": "shuxingbool",\n' +
          '\t\t"description": "shuxingbool",\n' +
          '\t\t"dataType": "bool",\n' +
          '\t\t"dataSchema": "\\"len\\":1,\\"boolDetail\\":{\\"false\\":\\"关\\",\\"true\\":\\"开\\"}"\n' +
          '\t}, {\n' +
          '\t\t"propertyId": 7359,\n' +
          '\t\t"identifier": "shuxingenum",\n' +
          '\t\t"propertyName": "shuxingenum",\n' +
          '\t\t"description": "shuxingenum",\n' +
          '\t\t"dataType": "enum",\n' +
          '\t\t"dataSchema": "\\"len\\":1,\\"enumDetail\\":{\\"1\\":\\"是\\",\\"2\\":\\"否\\"}"\n' +
          '\t}, {\n' +
          '\t\t"propertyId": 7358,\n' +
          '\t\t"identifier": "shuxingdouble",\n' +
          '\t\t"propertyName": "shuxingdouble",\n' +
          '\t\t"description": "shuxingdouble",\n' +
          '\t\t"dataType": "double",\n' +
          '\t\t"dataSchema": "\\"len\\":8,\\"unit\\":\\"mg/L\\",\\"min\\":\\"1\\",\\"max\\":\\"200\\",\\"step\\":\\"2\\",\\"unitName\\":\\"毫克每升\\""\n' +
          '\t}, {\n' +
          '\t\t"propertyId": 7357,\n' +
          '\t\t"identifier": "shuxingfloat",\n' +
          '\t\t"propertyName": "shuxingfloat",\n' +
          '\t\t"description": "shuxingfloat",\n' +
          '\t\t"dataType": "float",\n' +
          '\t\t"dataSchema": "\\"len\\":4,\\"unit\\":\\"mg/L\\",\\"min\\":\\"1\\",\\"max\\":\\"300\\",\\"step\\":\\"1\\",\\"unitName\\":\\"毫克每升\\""\n' +
          '\t}, {\n' +
          '\t\t"propertyId": 7356,\n' +
          '\t\t"identifier": "shuxingint32",\n' +
          '\t\t"propertyName": "shuxingint32",\n' +
          '\t\t"description": "shuxingint32",\n' +
          '\t\t"dataType": "Int32",\n' +
          '\t\t"dataSchema": "\\"len\\":4,\\"unit\\":\\"mg/L\\",\\"min\\":\\"1\\",\\"max\\":\\"233\\",\\"step\\":\\"1\\",\\"unitName\\":\\"毫克每升\\""\n' +
          '\t}],\n' +
          '\t"services": [{\n' +
          '\t\t"serviceId": 8001,\n' +
          '\t\t"identifier": "servicetest",\n' +
          '\t\t"serviceName": "servicetest",\n' +
          '\t\t"serviceType": "指令下发(枚举值替换为对应英文)",\n' +
          '\t\t"description": "",\n' +
          '\t\t"properties": [{\n' +
          '\t\t\t"propertyId": 7358,\n' +
          '\t\t\t"serial": 8\n' +
          '\t\t}, {\n' +
          '\t\t\t"propertyId": 7357,\n' +
          '\t\t\t"serial": 9\n' +
          '\t\t}, {\n' +
          '\t\t\t"propertyId": 7356,\n' +
          '\t\t\t"serial": 10\n' +
          '\t\t}],\n' +
          '\t\t"parameters": [{\n' +
          '\t\t\t"parameterId": 3581,\n' +
          '\t\t\t"identifier": "int32test01",\n' +
          '\t\t\t"parameterName": "int32test01",\n' +
          '\t\t\t"description": "int32test01",\n' +
          '\t\t\t"dataType": "Int32",\n' +
          '\t\t\t"dataSchema": "\\"len\\":4,\\"min\\":\\"1\\",\\"max\\":\\"220\\",\\"unit\\":\\"\\",\\"unitName\\":\\"\\",\\"step\\":\\"1\\"",\n' +
          '\t\t\t"serial": 1\n' +
          '\t\t}, {\n' +
          '\t\t\t"parameterId": 3582,\n' +
          '\t\t\t"identifier": "floattest02",\n' +
          '\t\t\t"parameterName": "floattest02",\n' +
          '\t\t\t"description": "floattest02",\n' +
          '\t\t\t"dataType": "float",\n' +
          '\t\t\t"dataSchema": "\\"len\\":4,\\"min\\":\\"1\\",\\"max\\":\\"300\\",\\"unit\\":\\"\\",\\"unitName\\":\\"\\",\\"step\\":\\"1\\"",\n' +
          '\t\t\t"serial": 2\n' +
          '\t\t}, {\n' +
          '\t\t\t"parameterId": 3583,\n' +
          '\t\t\t"identifier": "doubletest03",\n' +
          '\t\t\t"parameterName": "doubletest03",\n' +
          '\t\t\t"description": "doubletest03",\n' +
          '\t\t\t"dataType": "double",\n' +
          '\t\t\t"dataSchema": "\\"len\\":8,\\"min\\":\\"1\\",\\"max\\":\\"500\\",\\"unit\\":\\"g/L\\",\\"unitName\\":\\"克每升\\",\\"step\\":\\"2\\"",\n' +
          '\t\t\t"serial": 3\n' +
          '\t\t}, {\n' +
          '\t\t\t"parameterId": 3584,\n' +
          '\t\t\t"identifier": "enumtest004",\n' +
          '\t\t\t"parameterName": "enumtest004",\n' +
          '\t\t\t"description": "enumtest004",\n' +
          '\t\t\t"dataType": "enum",\n' +
          '\t\t\t"dataSchema": "\\"len\\":1,\\"enumDetail\\":{\\"1\\":\\"是\\",\\"2\\":\\"否\\"}",\n' +
          '\t\t\t"serial": 4\n' +
          '\t\t}, {\n' +
          '\t\t\t"parameterId": 3585,\n' +
          '\t\t\t"identifier": "booltest005",\n' +
          '\t\t\t"parameterName": "booltest005",\n' +
          '\t\t\t"description": "booltest005",\n' +
          '\t\t\t"dataType": "bool",\n' +
          '\t\t\t"dataSchema": "\\"len\\":1,\\"boolDetail\\":{\\"false\\":\\"关\\",\\"true\\":\\"开\\"}",\n' +
          '\t\t\t"serial": 5\n' +
          '\t\t}, {\n' +
          '\t\t\t"parameterId": 3586,\n' +
          '\t\t\t"identifier": "stringtest006",\n' +
          '\t\t\t"parameterName": "stringtest006",\n' +
          '\t\t\t"description": "stringtest006",\n' +
          '\t\t\t"dataType": "string",\n' +
          '\t\t\t"dataSchema": "\\"len\\":6",\n' +
          '\t\t\t"serial": 6\n' +
          '\t\t}, {\n' +
          '\t\t\t"parameterId": 3587,\n' +
          '\t\t\t"identifier": "datetest007",\n' +
          '\t\t\t"parameterName": "datetest007",\n' +
          '\t\t\t"description": "datetest007",\n' +
          '\t\t\t"dataType": "date",\n' +
          '\t\t\t"dataSchema": "\\"len\\":8",\n' +
          '\t\t\t"serial": 7\n' +
          '\t\t}]\n' +
          '\t}]\n' +
          '}'
      }
    },
    computed: {
      codeMirrorInstance() {
        // get current editor object
        return this.$refs.myEditor.editor
      }
    },
    mounted() {
      // this.codeMirrorInstance.focus()
      // this.code = this.message
      // this.codeMirrorInstance.setValue(this.message)
      // var that = this
      // setTimeout(function () {
      //   that.codeMirrorInstance.refresh()
      // }, 50)
      // let json = JSON.parse(this.a)
      // this.message = JSON.stringify(json, null, 4)
      // http.getTxt().then(r => {
      //   console.log(r.data)
      //   // this.message = r.data
      //   this.message = JSON.stringify(r.data, null, 4)
      // })
      // $.ajax({
      //   type: 'GET',
      //   url: 'src/api/jsonStr.txt',
      //   dataType: 'json',
      //   success: function (data) {
      //     console.log(data)
      //     this.message = data
      //   }
      // })
    },
    methods: {
      getPost() {
        console.log(1)
        this.codeMirrorInstance.focus()
        this.codeMirrorInstance.refresh()
      },
      handleClick(tab, event) {
        // console.log(tab, event)
      },
      jumpTo() {
        this.$router.push({name: 'Tabs'})
      },
      onCopy(e) {
        alert('复制成功！')
      },
      onError(e) {
        alert('复制失败！')
      },
      // Firefox 48.0，Chrome 60.0，IE 8 都能用
      copyUrl() {
        // 若从后台请求数据量大时：放在textarea里chrome浏览器第一次复制会报错，第二次可以
        // 将赋值放在请求数据之后，立即渲染组件，否则复制时可能没有全让好导致失败
        let input = document.getElementById('input')
        input.value = this.message
        // 选择对象：select() 方法只对 <input> 和 <textarea> 有效，对于 <p> 就不好使
        input.select()
        try {
          if (document.execCommand('copy', false, null)) {
            // success info
            document.execCommand('Copy') // 执行浏览器复制命令
            alert('已复制好，可贴粘')
          } else {
            // fail info
            alert('复制失败')
          }
        } catch (err) {
          // fail info
          alert('复制失败')
        }
      },
      copyUrl2() {
        let input = document.createElement('textarea')   // 直接构建input
        input.value = this.message   // 设置内容
        document.body.appendChild(input)        // 添加临时实例
        input.select()     // 选择实例内容
        if (document.execCommand('Copy')) {
          document.execCommand('Copy')     // 执行复制
          this.$message({
            message: '复制成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '复制失败，请重试',
            type: 'error'
          })
        }
        document.body.removeChild(input)  // 删除临时实例
      }
    }
  }
</script>
<style>
  .wrapper {
    position: relative;
  }

  #input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -10;
  }

  .el-textarea.is-disabled .el-textarea__inner {
    cursor: auto;
    color: #333;
    background-color: #fff;
    font-size: 13px;
    border-radius: 0;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  }

  .editor-title__wrap {
    background-color: #eee;
    padding: 5px 20px;
    border: 1px solid #e4e7ed;
    border-bottom: 0;
    align-items: center;
  }
</style>
