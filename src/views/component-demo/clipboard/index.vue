<template>
  <div class="clip-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="use clipboard  directly" name="directly">
        <el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;"></el-input>
        <el-button type="primary" icon="document" @click="handleCopy(inputData,$event)">copy</el-button>
      </el-tab-pane>
      <el-tab-pane label="use vue-clipboard2 who has v-directive" name="v-directive">
        <el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;"></el-input>
        <el-button type="primary"
                   v-clipboard:copy="inputData"
                   v-clipboard:success="onCopy"
                   v-clipboard:error="onError">copy
        </el-button>
      </el-tab-pane>
      <el-tab-pane label="use execCommand" name="execCommand">
        <div class="wrapper">
          <el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;"></el-input>
          <textarea id="input">这是幕后黑手!!!</textarea>
          <el-button type="primary" icon="document" @click="copyUrl()">copy</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import clip from '@/utils/clipboard' // use clipboard directly

  export default {
    name: 'ClipboardDemo',
    data () {
      return {
        activeName: 'directly',
        inputData: 'https://github.com/PanJiaChen/vue-element-admin'
      }
    },
    methods: {
      handleCopy (text, event) {
        clip(text, event)
      },
      onCopy (e) {
        alert('复制成功！')
      },
      onError (e) {
        alert('复制失败！')
      },
      // Firefox 48.0，Chrome 60.0，IE 8 都能用
      copyUrl () {
        // 问题：若从后台请求数据量大时，放在textarea里chrome浏览器第一次复制会报错，第二次可以
        // 解决方法：将赋值放在请求后台数据之后，立即渲染组件，否则复制时可能没有全好导致失败
        let input = document.getElementById('input')
        input.value = this.inputData
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
      copyUrl2 () {
        let input = document.createElement('textarea')   // 直接构建input
        input.value = this.inputData   // 设置内容
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
<style scoped>
  .clip-container {
    padding: 10px 20px;
  }

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
</style>
