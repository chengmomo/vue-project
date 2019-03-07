<template>
  <div id="editor">
    <!-- ishljs默认为true,如不需要hightlight代码高亮显示，你应该设置ishljs为false-->
    <mavon-editor v-model="content" ref="myMavonEditor" style="height: 100%" :ishljs="true" :toolbars="toolbars">
    </mavon-editor>
  </div>
</template>
<script>
  import mavonEditor from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: 'MavonEditor',
    components: {
      mavonEditor
    },
    data () {
      return {
        content: '',
        toolbars: {}
      }
    },
    methods: {},
    mounted () {

    },
    computed: {
      editor () {
        return this.$refs.myMavonEditor.s_markdown
      }
    }
  }
</script>

<style scoped>
  #editor {
    margin: auto;
    width: 80%;
    height: 580px;
  }
</style>
