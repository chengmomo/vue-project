<template>
  <div>
    <div id="editorElem" style="text-align:left"></div>
    <button v-on:click="getContent">查看内容</button>
  </div>
</template>

<script>
  import E from 'wangeditor'

  export default {
    name: 'WangEditor',
    data () {
      return {
        editorContent: ''
      }
    },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      }
    },
    mounted () {
      this.editorContent = ''
      var editor = new E('#editorElem')
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create()
    }
  }
</script>

<style scoped>
</style>
