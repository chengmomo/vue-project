<template>
	<div>
		<!-- bidirectional data binding（双向数据绑定） -->
		<quill-editor class="editor" v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
		</quill-editor>
		<div class="html ql-editor" v-html="content"></div>
	</div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor';
	// require styles
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
    export default {
      name: 'QuillEditor',
      components:{
      	quillEditor
      },
      data () {
      	return{
      		content:'QuillEditor',
      		editorOption: {}
      	}
      },
      methods: {
      	onEditorBlur(editor) {
      		console.log('editor blur!', editor)
      	},
      	onEditorFocus(editor) {
      		console.log('editor focus!', editor)
      	},
      	onEditorReady(editor) {
      		console.log('editor ready!', editor)
      	}    
      },
      mounted() {
       
      },
      computed: {
      	editor() {
      		return this.$refs.myQuillEditor.quillEditor;  //ref绑定之后，就不需要获取dom节点了，减少获取dom节点的消耗
      	}
      }
    }
</script>

<style scoped>
	.editor {
		/*border: 1px solid red;*/
		/*height: 15em;*/
	}
    .ql-container .ql-editor {
        min-height: 20em;
        padding-bottom: 1em;
        max-height: 25em;
    }
    .html {
    	/*margin-top: 5px;*/
    	/*border: 1px solid red;*/
    	height: 20em;
    	overflow-y: auto;
    	border: 1px solid #ccc;
    	border-top: none;
    	resize: vertical;
    	background-color:#fff;
    }
</style>